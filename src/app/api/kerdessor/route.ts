import { NextResponse } from "next/server";
import { CONTACT_EMAIL, SELF_CHECK_PATH, SITE_URL } from "@/lib/site";
import { ANSWER_OPTIONS, STATEMENTS, bandFor, encodeAnswers, isComplete, scoreOf } from "@/lib/self-check";
import { validateOptIn, type SelfCheckOptIn } from "@/lib/validation";
import { WELCOME_SERIES, renderWelcomeEmail } from "@/lib/welcome-series";
import { escapeHtml, isMailConfigured, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

type Body = Partial<SelfCheckOptIn> & { answers?: unknown };

/**
 * Önellenőrző kérdéssor beküldése: a kitöltő megkapja a welcome sorozat
 * 1. levelét (az értékeléssel), az O2 pedig értesítést kap a kitöltésről.
 */
export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors = validateOptIn(body);
  if (Object.keys(errors).length > 0 || !isComplete(body.answers)) {
    return NextResponse.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  if (!isMailConfigured()) {
    console.error("[kerdessor] Nincs beállítva e-mail küldés (RESEND_API_KEY vagy SMTP_*).");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const answers = body.answers;
  const firstName = (body.firstName ?? "").trim();
  const email = (body.email ?? "").trim();
  const score = scoreOf(answers);
  const band = bandFor(score);

  const welcome = renderWelcomeEmail(WELCOME_SERIES[0], {
    firstName,
    score,
    resultUrl: `${SITE_URL}${SELF_CHECK_PATH}eredmeny/?v=${encodeAnswers(answers)}`,
    contactUrl: `${SITE_URL}/kapcsolat/`,
    selfCheckUrl: `${SITE_URL}${SELF_CHECK_PATH}`,
    evaluation: band,
  });

  const rows = STATEMENTS.map((s, i) => `${answers[i]} – ${s} (${ANSWER_OPTIONS[answers[i]].label})`);
  const notifyText = [
    `Keresztnév: ${firstName}`,
    `E-mail: ${email}`,
    `Pontszám: ${score} / 36 – ${band.title}`,
    "",
    ...rows,
    "",
    `Beküldve: ${new Date().toISOString()}`,
    "Forrás: o2tanacsado.hu önellenőrző kérdéssor",
  ].join("\n");
  const notifyHtml = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#0b1a3a">
    <h2 style="margin:0 0 12px">Új kitöltés: önellenőrző kérdéssor</h2>
    <p style="margin:0">Keresztnév: <strong>${escapeHtml(firstName)}</strong><br>
    E-mail: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br>
    Pontszám: <strong>${score} / 36</strong> – ${escapeHtml(band.title)}</p>
    <ol style="padding-left:20px">${STATEMENTS.map(
      (s, i) => `<li>${escapeHtml(s)} <strong>${escapeHtml(ANSWER_OPTIONS[answers[i]].label)} (${answers[i]})</strong></li>`,
    ).join("")}</ol>
    <p style="margin-top:20px;color:#7c869f;font-size:13px">Beküldve: ${new Date().toISOString()} · o2tanacsado.hu önellenőrző kérdéssor</p>
  </div>`;

  try {
    await sendMail({
      to: email,
      replyTo: process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL,
      subject: welcome.subject,
      text: welcome.text,
      html: welcome.html,
    });
  } catch (err) {
    console.error("[kerdessor] Küldési hiba (kitöltő):", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  try {
    await sendMail({
      to: process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL,
      replyTo: email,
      subject: `Kérdéssor: ${firstName} – ${score} / 36`,
      text: notifyText,
      html: notifyHtml,
    });
  } catch (err) {
    // A kitöltő levele már kiment; az értesítés hibája nem az ő hibája.
    console.error("[kerdessor] Küldési hiba (értesítés):", err);
  }

  return NextResponse.json({ ok: true });
}
