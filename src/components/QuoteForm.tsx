"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CONTACT_EMAIL, IS_STATIC_EXPORT, PRIVACY_URL } from "@/lib/site";
import { validateQuote, type FieldErrors, type QuotePayload } from "@/lib/validation";
import { ArrowRight } from "./Icons";
import styles from "./QuoteForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: QuotePayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  website: "",
};

/** Kapcsolatfelvételi űrlap: név, cégnév, e-mail-cím, telefonszám és egy szabad szöveges mező. */
export function QuoteForm() {
  const [values, setValues] = useState<QuotePayload>(EMPTY);
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

  const focusFirstError = (errs: FieldErrors) => {
    const order: (keyof QuotePayload)[] = ["name", "company", "email", "phone", "message", "consent"];
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

    // Statikus kiadásnál (GitHub Pages) nincs szerveroldali küldés: a kitöltött
    // adatokkal a látogató levelezőprogramját nyitjuk meg.
    if (IS_STATIC_EXPORT) {
      const body = [
        `Név: ${values.name.trim()}`,
        `Cégnév: ${values.company.trim()}`,
        `E-mail: ${values.email.trim()}`,
        `Telefonszám: ${values.phone.trim() || "–"}`,
        "",
        values.message.trim(),
      ].join("\n");
      const subject = `Első beszélgetés: ${values.company.trim()}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("success");
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
          : "Az üzenetet nem sikerült elküldeni.",
      );
      setStatus("error");
    } catch {
      setServerError("Hálózati hiba történt, az üzenet nem ment el.");
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
        {IS_STATIC_EXPORT ? (
          <>
            <h3>Megnyitottuk a levelezőprogramodat a kitöltött adatokkal.</h3>
            <p>
              Küldd el a levelet. Ha nem nyílt meg, írj közvetlenül a(z){" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címre.
            </p>
          </>
        ) : (
          <>
            <h3>Köszönjük, megkaptuk az üzeneted.</h3>
            <p>
              A válasz a(z){" "}
              <strong>{values.email}</strong> címre érkezik.
            </p>
          </>
        )}
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
          <label htmlFor={id("email")}>E-mail-cím</label>
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

        <div className={`field ${styles.full}`}>
          <label htmlFor={id("message")}>
            Röviden: mi az, ami most a legtöbb energiát viszi el a cégnél?{" "}
            <span className="optional">(opcionális)</span>
          </label>
          <textarea
            id={id("message")}
            data-field="message"
            name="message"
            rows={4}
            maxLength={3000}
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
              Hozzájárulok, hogy az O2 Tanácsadó Kft. a megadott adataimat a megkeresésem
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
          {busy ? "Küldés folyamatban…" : "Küldöm"}
          {!busy && <ArrowRight />}
        </button>
        <p className={styles.note}>
          Kötelező mezők: név, cégnév, e-mail-cím.
        </p>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="assertive" className={styles.live}>
        {status === "error" && serverError && (
          <div className="form-status form-status--error" role="alert">
            {serverError} A kitöltött adatok megmaradtak. Próbáld újra, vagy írj közvetlenül
            a(z) <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címre.
          </div>
        )}
      </div>
    </form>
  );
}
