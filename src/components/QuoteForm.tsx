"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { INTEREST_OPTIONS } from "@/lib/content";
import { CONTACT_EMAIL, PRIVACY_URL } from "@/lib/site";
import { validateQuote, type FieldErrors, type QuotePayload } from "@/lib/validation";
import { ArrowRight } from "./Icons";
import styles from "./QuoteForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: QuotePayload = {
  name: "",
  email: "",
  company: "",
  interests: [],
  phone: "",
  message: "",
  consent: false,
  website: "",
};

const VALID_IDS = new Set(INTEREST_OPTIONS.map((o) => o.value));

interface Props {
  /** Területek, amelyeket az oldal alapból előválaszt (pl. helyi landing). */
  defaultInterests?: string[];
}

/**
 * A ?terulet=... paraméterből (szolgáltatási CTA-k) olvassuk az előválasztást.
 * A paraméter kulcsként szolgál, így új előválasztásnál az űrlap tiszta
 * állapotból indul, effekt nélkül. Statikus oldalon a useSearchParams miatt ez
 * a rész kliensoldalon renderelődik; a Suspense-tartalék (QuoteFormStatic)
 * ugyanezt az űrlapot adja a kezdeti HTML-ben.
 */
export function QuoteForm({ defaultInterests = [] }: Props) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("terulet") ?? "";
  const fromQuery = raw
    .split(",")
    .map((s) => s.trim())
    .filter((s) => VALID_IDS.has(s));
  const initial = Array.from(
    new Set([...defaultInterests.filter((i) => VALID_IDS.has(i)), ...fromQuery]),
  );
  return <QuoteFormInner key={raw} initialInterests={initial} />;
}

/** Paraméter nélküli változat a kezdeti (statikus) HTML-hez. */
export function QuoteFormStatic({ defaultInterests = [] }: Props) {
  return (
    <QuoteFormInner initialInterests={defaultInterests.filter((i) => VALID_IDS.has(i))} />
  );
}

function QuoteFormInner({ initialInterests }: { initialInterests: string[] }) {
  const [values, setValues] = useState<QuotePayload>(() => ({
    ...EMPTY,
    interests: initialInterests,
  }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const uid = useId();

  const set = <K extends keyof QuotePayload>(key: K, val: QuotePayload[K]) => {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleInterest = (id: string) => {
    setValues((v) => ({
      ...v,
      interests: v.interests.includes(id)
        ? v.interests.filter((x) => x !== id)
        : [...v.interests, id],
    }));
    if (errors.interests) setErrors((e) => ({ ...e, interests: undefined }));
  };

  const focusFirstError = (errs: FieldErrors) => {
    const order: (keyof QuotePayload)[] = [
      "name",
      "email",
      "company",
      "interests",
      "phone",
      "message",
      "consent",
    ];
    const first = order.find((k) => errs[k]);
    if (!first || !formRef.current) return;
    const el = formRef.current.querySelector<HTMLElement>(`[data-field="${first}"]`);
    el?.focus();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return; // dupla beküldés ellen

    const errs = validateQuote(values);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus("idle");
      focusFirstError(errs);
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/ajanlatkeres/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (data.error === "validation" && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        focusFirstError(data.errors);
        return;
      }
      setServerError(
        data.error === "not_configured"
          ? "Az űrlapküldés jelenleg nem elérhető."
          : "Az ajánlatkérést nem sikerült elküldeni.",
      );
      setStatus("error");
    } catch {
      setServerError("Hálózati hiba történt, az ajánlatkérés nem ment el.");
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") statusRef.current?.focus();
  }, [status]);

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        className={`${styles.card} ${styles.success}`}
        role="status"
      >
        <span className={styles.successMark} aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3>Köszönjük, a megkeresése megérkezett.</h3>
        <p>
          Az üzenetet a megadott adatokkal továbbítottuk kollégáinknak. A válasz a(z){" "}
          <strong>{values.email}</strong> címre érkezik.
        </p>
      </div>
    );
  }

  const id = (k: string) => `${uid}-${k}`;
  const busy = status === "submitting";

  return (
    <form ref={formRef} className={styles.card} onSubmit={onSubmit} noValidate aria-busy={busy}>
      <div className={styles.grid}>
        <div className="field">
          <label htmlFor={id("name")}>Név</label>
          <input
            id={id("name")}
            data-field="name"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? id("name-err") : undefined}
          />
          {errors.name && (
            <p id={id("name-err")} className="field__error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor={id("email")}>Céges e-mail</label>
          <input
            id={id("email")}
            data-field="email"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? id("email-err") : undefined}
          />
          {errors.email && (
            <p id={id("email-err")} className="field__error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor={id("company")}>Cégnév</label>
          <input
            id={id("company")}
            data-field="company"
            type="text"
            name="company"
            autoComplete="organization"
            required
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            aria-invalid={errors.company ? "true" : undefined}
            aria-describedby={errors.company ? id("company-err") : undefined}
          />
          {errors.company && (
            <p id={id("company-err")} className="field__error">
              {errors.company}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor={id("phone")}>
            Telefonszám <span className="optional">(opcionális)</span>
          </label>
          <input
            id={id("phone")}
            data-field="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? id("phone-err") : undefined}
          />
          {errors.phone && (
            <p id={id("phone-err")} className="field__error">
              {errors.phone}
            </p>
          )}
        </div>

        <fieldset
          className={`field ${styles.full}`}
          aria-describedby={errors.interests ? id("int-err") : id("int-hint")}
          aria-invalid={errors.interests ? "true" : undefined}
        >
          <legend className="field__legend">Érdeklődési terület</legend>
          <p id={id("int-hint")} className="field__hint">
            Több terület is választható.
          </p>
          <div className="checks">
            {INTEREST_OPTIONS.map((o, i) => (
              <label key={o.value} className={`check ${o.value === "segitseg" ? "check--wide" : ""}`}>
                <input
                  type="checkbox"
                  name="interests"
                  value={o.value}
                  data-field={i === 0 ? "interests" : undefined}
                  checked={values.interests.includes(o.value)}
                  onChange={() => toggleInterest(o.value)}
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
          {errors.interests && (
            <p id={id("int-err")} className="field__error">
              {errors.interests}
            </p>
          )}
        </fieldset>

        <div className={`field ${styles.full}`}>
          <label htmlFor={id("message")}>
            Rövid üzenet <span className="optional">(opcionális)</span>
          </label>
          <textarea
            id={id("message")}
            data-field="message"
            name="message"
            rows={4}
            maxLength={3000}
            placeholder="Például: milyen helyzetben van most a cég, mire keresnek megoldást."
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? id("message-err") : undefined}
          />
          {errors.message && (
            <p id={id("message-err")} className="field__error">
              {errors.message}
            </p>
          )}
        </div>

        {/* Honeypot – felhasználók számára rejtett mező */}
        <div className="hp" aria-hidden="true">
          <label htmlFor={id("website")}>Weboldal</label>
          <input
            id={id("website")}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => set("website", e.target.value)}
          />
        </div>

        <div className={`field ${styles.full}`}>
          <label className="check check--plain">
            <input
              type="checkbox"
              name="consent"
              data-field="consent"
              checked={values.consent}
              onChange={(e) => set("consent", e.target.checked)}
              aria-invalid={errors.consent ? "true" : undefined}
              aria-describedby={errors.consent ? id("consent-err") : undefined}
            />
            <span>
              Hozzájárulok, hogy az O2 Tanácsadó Kft. a megadott adataimat az ajánlatkérésem
              megválaszolása céljából kezelje.{" "}
              <a href={PRIVACY_URL} target="_blank" rel="noopener">
                Adatkezelési tájékoztató
              </a>
            </span>
          </label>
          {errors.consent && (
            <p id={id("consent-err")} className="field__error">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button type="submit" className="btn btn--primary" disabled={busy}>
          {busy ? "Küldés folyamatban…" : "Egyeztetéskérés elküldése"}
          {!busy && <ArrowRight />}
        </button>
        <p className={styles.note}>
          Kötelező mezők: név, céges e-mail, cégnév, érdeklődési terület.
        </p>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="assertive" className={styles.live}>
        {status === "error" && serverError && (
          <div className="form-status form-status--error" role="alert">
            {serverError} A kitöltött adatok megmaradtak, kérjük, próbálja újra, vagy írjon
            közvetlenül a(z) <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címre.
          </div>
        )}
      </div>
    </form>
  );
}
