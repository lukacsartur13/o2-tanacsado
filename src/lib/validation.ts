export interface QuotePayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  /** honeypot – mindig üresnek kell lennie */
  website?: string;
}

export type FieldErrors = Partial<Record<keyof QuotePayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function emailError(email: string) {
  if (!email) return "Add meg az e-mail-címed.";
  if (!EMAIL_RE.test(email) || email.length > 200) return "Érvényes e-mail-címet adj meg.";
  return undefined;
}

/** Kliens- és szerveroldalon egyaránt használt validáció (kapcsolatfelvételi űrlap). */
export function validateQuote(p: Partial<QuotePayload>): FieldErrors {
  const errors: FieldErrors = {};
  const name = (p.name ?? "").trim();
  const company = (p.company ?? "").trim();
  const email = (p.email ?? "").trim();
  const phone = (p.phone ?? "").trim();
  const message = (p.message ?? "").trim();

  if (name.length < 2) errors.name = "Add meg a neved.";
  if (name.length > 120) errors.name = "A név túl hosszú.";

  if (company.length < 2) errors.company = "Add meg a cég nevét.";
  if (company.length > 160) errors.company = "A cégnév túl hosszú.";

  const emailErr = emailError(email);
  if (emailErr) errors.email = emailErr;

  if (phone && (phone.length > 40 || !/^[+\d\s()/-]+$/.test(phone)))
    errors.phone = "Csak számokat és a szokásos jeleket használd.";

  if (message.length > 3000) errors.message = "Az üzenet legfeljebb 3000 karakter lehet.";

  if (!p.consent) errors.consent = "A küldéshez a hozzájárulás szükséges.";

  return errors;
}

/** Az önellenőrző kérdéssor opt-in adatai. */
export interface SelfCheckOptIn {
  firstName: string;
  email: string;
  consent: boolean;
  /** honeypot – mindig üresnek kell lennie */
  website?: string;
}

export type OptInErrors = Partial<Record<keyof SelfCheckOptIn, string>>;

export function validateOptIn(p: Partial<SelfCheckOptIn>): OptInErrors {
  const errors: OptInErrors = {};
  const firstName = (p.firstName ?? "").trim();
  const email = (p.email ?? "").trim();

  if (firstName.length < 2) errors.firstName = "Add meg a keresztneved.";
  if (firstName.length > 80) errors.firstName = "A keresztnév túl hosszú.";

  const emailErr = emailError(email);
  if (emailErr) errors.email = emailErr;

  if (!p.consent) errors.consent = "A kérdéssorhoz a hozzájárulás szükséges.";

  return errors;
}
