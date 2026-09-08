import nodemailer from "nodemailer";

interface Mail {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

const DEFAULT_FROM = "O2 Tanácsadó weboldal <no-reply@o2tanacsado.hu>";

function hasResend() {
  return Boolean(process.env.RESEND_API_KEY);
}

function hasSmtp() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export function isMailConfigured() {
  return hasResend() || hasSmtp();
}

/**
 * Valódi e-mail küldés. Sorrend: Resend HTTP API, majd SMTP (nodemailer).
 * Hiányzó beállítás esetén a hívó 503-at ad vissza – nincs szimulált siker.
 */
export async function sendMail(mail: Mail): Promise<void> {
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

  if (hasResend()) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [mail.to],
        reply_to: mail.replyTo,
        subject: mail.subject,
        text: mail.text,
        html: mail.html,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Resend ${res.status}: ${detail}`);
    }
    return;
  }

  if (hasSmtp()) {
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from,
      to: mail.to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    return;
  }

  throw new Error("E-mail küldés nincs beállítva.");
}
