"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "./Icons";
import { SelfCheckResult } from "./SelfCheckResult";
import { IS_STATIC_EXPORT, PRIVACY_URL, SELF_CHECK_ANCHOR } from "@/lib/site";
import {
  ANSWER_OPTIONS,
  SELF_CHECK_HINT,
  SELF_CHECK_INTRO,
  SELF_CHECK_NAME,
  STATEMENTS,
  isComplete,
  type Answers,
} from "@/lib/self-check";
import { validateOptIn, type OptInErrors, type SelfCheckOptIn } from "@/lib/validation";
import styles from "./SelfCheck.module.css";

type Step = "optin" | "questions" | "result";
type MailStatus = "idle" | "sending" | "sent" | "failed";

const EMPTY: SelfCheckOptIn = { firstName: "", email: "", consent: false, website: "" };

interface Props {
  /** A nyitó szekció szövege, az opt-in űrlap mellett jelenik meg. */
  intro: ReactNode;
}

/**
 * Opt-in űrlap → tizenkét állítás egy oldalon → értékelés. Az értékelés
 * azonnal megjelenik; e-mailben a welcome sorozat 1. leveleként megy ki
 * (/api/kerdessor), ha a tárhelyen fut szerveroldali küldés.
 */
export function SelfCheck({ intro }: Props) {
  const [step, setStep] = useState<Step>("optin");
  const [optIn, setOptIn] = useState<SelfCheckOptIn>(EMPTY);
  const [errors, setErrors] = useState<OptInErrors>({});
  const [answers, setAnswers] = useState<(number | null)[]>(() => STATEMENTS.map(() => null));
  const [missing, setMissing] = useState(false);
  const [mail, setMail] = useState<MailStatus>("idle");
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  useEffect(() => {
    if (step === "optin") return;
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    (step === "result" ? resultRef : headingRef).current?.focus({ preventScroll: true });
  }, [step]);

  const set = <K extends keyof SelfCheckOptIn>(key: K, val: SelfCheckOptIn[K]) => {
    setOptIn((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onOptIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateOptIn(optIn);
    if (Object.keys(errs).length) {
      setErrors(errs);
      const first = (["firstName", "email", "consent"] as const).find((k) => errs[k]);
      e.currentTarget.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    setStep("questions");
  };

  const answer = (i: number, points: number) => {
    setAnswers((a) => a.map((x, j) => (j === i ? points : x)));
  };

  const send = async (complete: Answers) => {
    if (IS_STATIC_EXPORT || optIn.website) {
      setMail("failed");
      return;
    }
    setMail("sending");
    try {
      const res = await fetch("/api/kerdessor/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...optIn, answers: complete }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      setMail(res.ok && data.ok ? "sent" : "failed");
    } catch {
      setMail("failed");
    }
  };

  const onQuestions = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isComplete(answers)) {
      setMissing(true);
      const first = answers.findIndex((a) => a === null);
      e.currentTarget.querySelector<HTMLElement>(`[data-q="${first}"]`)?.focus();
      return;
    }
    setMissing(false);
    setStep("result");
    void send(answers);
  };

  const answered = answers.filter((a) => a !== null).length;

  return (
    <div id={SELF_CHECK_ANCHOR} ref={rootRef} className={styles.root}>
      {step === "optin" && (
        <div className={styles.optinGrid}>
          <div className={styles.intro}>{intro}</div>
          <form className={styles.card} onSubmit={onOptIn} noValidate aria-label={SELF_CHECK_NAME}>
            <div className="field">
              <label htmlFor={id("firstName")}>Keresztnév</label>
              <input
                id={id("firstName")}
                data-field="firstName"
                type="text"
                name="firstName"
                autoComplete="given-name"
                required
                value={optIn.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                aria-invalid={errors.firstName ? "true" : undefined}
                aria-describedby={errors.firstName ? id("firstName-err") : undefined}
              />
              {errors.firstName && (
                <p id={id("firstName-err")} className="field__error">
                  {errors.firstName}
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
                value={optIn.email}
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

            {/* Honeypot – felhasználók számára rejtett mező */}
            <div className="hp" aria-hidden="true">
              <label htmlFor={id("website")}>Weboldal</label>
              <input
                id={id("website")}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={optIn.website}
                onChange={(e) => set("website", e.target.value)}
              />
            </div>

            <div className="field">
              <label className="check check--plain">
                <input
                  type="checkbox"
                  name="consent"
                  data-field="consent"
                  checked={optIn.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  aria-invalid={errors.consent ? "true" : undefined}
                  aria-describedby={errors.consent ? id("consent-err") : undefined}
                />
                <span>
                  Hozzájárulok, hogy az O2 Tanácsadó Kft. az adataimat a kérdéssor eredményének
                  elküldésére és a kapcsolatfelvételre kezelje. (
                  <a href={PRIVACY_URL} target="_blank" rel="noopener">
                    Adatkezelési tájékoztató
                  </a>
                  )
                </span>
              </label>
              {errors.consent && (
                <p id={id("consent-err")} className="field__error">
                  {errors.consent}
                </p>
              )}
            </div>

            <button type="submit" className={`btn btn--primary ${styles.submit}`}>
              Megnyitom a kérdéssort <ArrowRight />
            </button>
            <p className={styles.privacy}>Amit kitöltesz, az nálunk marad.</p>
          </form>
        </div>
      )}

      {step === "questions" && (
        <form className={styles.questions} onSubmit={onQuestions} noValidate>
          <div className={styles.qHead}>
            <p className="eyebrow">Önellenőrző kérdéssor</p>
            <h2 ref={headingRef} tabIndex={-1} className={styles.qTitle}>
              {SELF_CHECK_NAME}
            </h2>
            <p className="lead">{SELF_CHECK_INTRO}</p>
            <p className={styles.hint}>{SELF_CHECK_HINT}</p>
          </div>

          <ol className={styles.statements}>
            {STATEMENTS.map((s, i) => (
              <li key={s}>
                <fieldset
                  className={styles.statement}
                  data-missing={missing && answers[i] === null}
                  data-q={i}
                  tabIndex={-1}
                >
                  <legend className={styles.legend}>
                    <span className={styles.num} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </legend>
                  <div className={styles.options}>
                    {ANSWER_OPTIONS.map((o) => (
                      <label key={o.points} className={styles.option}>
                        <input
                          type="radio"
                          name={`q${i}`}
                          value={o.points}
                          checked={answers[i] === o.points}
                          onChange={() => answer(i, o.points)}
                        />
                        <span>{o.label}</span>
                        <span className={styles.points}>{o.points} pont</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </li>
            ))}
          </ol>

          <div className={styles.qActions}>
            <p className={styles.progress} aria-live="polite">
              {answered} / {STATEMENTS.length}
            </p>
            {missing && (
              <p className="field__error" role="alert">
                Minden állításnál jelölj meg egy választ.
              </p>
            )}
            <button type="submit" className="btn btn--primary">
              Kérem az értékelést <ArrowRight />
            </button>
          </div>
        </form>
      )}

      {step === "result" && isComplete(answers) && (
        <div ref={resultRef} tabIndex={-1} className={styles.resultWrap}>
          <SelfCheckResult
            answers={answers}
            status={
              <p className={styles.mailStatus} role="status" data-state={mail}>
                {mail === "sending" && "Az értékelést e-mailben is elküldjük…"}
                {mail === "sent" && (
                  <>
                    Az értékelést elküldtük a(z) <strong>{optIn.email.trim()}</strong> címre is.
                  </>
                )}
                {mail === "failed" && "Az e-mailt most nem sikerült elküldeni, az értékelésed itt látható."}
              </p>
            }
          />
        </div>
      )}
    </div>
  );
}
