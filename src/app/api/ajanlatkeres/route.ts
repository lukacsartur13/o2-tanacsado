import { NextResponse } from "next/server";
import { INTEREST_LABELS } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/site";
import { validateQuote, type QuotePayload } from "@/lib/validation";
import { sendMail, isMailConfigured } from "@/lib/mail";

export const runtime = "nodejs";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;
  try {
    body = (await request.json()) as Partial<QuotePayload>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: robotok kitöltik, emberek nem látják. Csendben "sikert" jelzünk,
  // de nem küldünk semmit.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors = validateQuote(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  if (!isMailConfigured()) {
    console.error("[ajanlatkeres] Nincs beállítva e-mail küldés (RESEND_API_KEY vagy SMTP_*).");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const p = body as QuotePayload;
  const interests = p.interests.map((i) => INTEREST_LABELS[i]).join(", ");
  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;

  const lines = [
    `Név: ${p.name.trim()}`,
    `E-mail: ${p.email.trim()}`,
    `Cégnév: ${p.company.trim()}`,
    `Érdeklődési terület: ${interests}`,
    `Telefonszám: ${p.phone?.trim() || "–"}`,
    "",
    "Üzenet:",
    p.message?.trim() || "–",
    "",
    `Beküldve: ${new Date().toISOString()}`,
    "Forrás: o2tanacsado.hu ajánlatkérő űrlap",
  ];

  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#0b1a3a">
    <h2 style="margin:0 0 12px">Új ajánlatkérés a weboldalról</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;color:#5a6683">Név</td><td>${escapeHtml(p.name.trim())}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5a6683">E-mail</td><td><a href="mailto:${escapeHtml(p.email.trim())}">${escapeHtml(p.email.trim())}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5a6683">Cégnév</td><td>${escapeHtml(p.company.trim())}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5a6683">Terület</td><td>${escapeHtml(interests)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#5a6683">Telefon</td><td>${escapeHtml(p.phone?.trim() || "–")}</td></tr>
    </table>
    <p style="margin:16px 0 4px;color:#5a6683">Üzenet</p>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(p.message?.trim() || "–")}</p>
    <p style="margin-top:20px;color:#7c869f;font-size:13px">Beküldve: ${new Date().toISOString()} · o2tanacsado.hu ajánlatkérő űrlap</p>
  </div>`;

  try {
    await sendMail({
      to,
      replyTo: p.email.trim(),
      subject: `Ajánlatkérés: ${p.company.trim()} – ${interests}`,
      text: lines.join("\n"),
      html,
    });
  } catch (err) {
    console.error("[ajanlatkeres] Küldési hiba:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
