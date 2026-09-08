import { INTEREST_LABELS } from "./content";

export interface QuotePayload {
  name: string;
  email: string;
  company: string;
  interests: string[];
  phone: string;
  message: string;
  consent: boolean;
  /** honeypot – mindig üresnek kell lennie */
  website?: string;
}

export type FieldErrors = Partial<Record<keyof QuotePayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Kliens- és szerveroldalon egyaránt használt validáció. */
export function validateQuote(p: Partial<QuotePayload>): FieldErrors {
  const errors: FieldErrors = {};
  const name = (p.name ?? "").trim();
  const email = (p.email ?? "").trim();
  const company = (p.company ?? "").trim();
  const interests = Array.isArray(p.interests) ? p.interests : [];
  const phone = (p.phone ?? "").trim();
  const message = (p.message ?? "").trim();

  if (name.length < 2) errors.name = "Kérjük, adja meg a nevét.";
  if (name.length > 120) errors.name = "A név túl hosszú.";

  if (!email) errors.email = "Kérjük, adja meg az e-mail-címét.";
  else if (!EMAIL_RE.test(email) || email.length > 200)
    errors.email = "Kérjük, érvényes e-mail-címet adjon meg.";

  if (company.length < 2) errors.company = "Kérjük, adja meg a cég nevét.";
  if (company.length > 160) errors.company = "A cégnév túl hosszú.";

  if (interests.length === 0)
    errors.interests = "Válasszon legalább egy területet, vagy kérjen segítséget a meghatározásában.";
  else if (interests.some((i) => !(i in INTEREST_LABELS)))
    errors.interests = "Ismeretlen érdeklődési terület.";

  if (phone && (phone.length > 40 || !/^[+\d\s()/-]+$/.test(phone)))
    errors.phone = "Kérjük, csak számokat és a szokásos jeleket használja.";

  if (message.length > 3000) errors.message = "Az üzenet legfeljebb 3000 karakter lehet.";

  if (!p.consent) errors.consent = "Az ajánlatkéréshez a hozzájárulás szükséges.";

  return errors;
}
