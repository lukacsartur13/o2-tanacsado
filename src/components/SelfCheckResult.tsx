import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import {
  ANSWER_OPTIONS,
  CLOSING_CTA,
  CLOSING_NOTE,
  MAX_SCORE,
  SCORING_TEXT,
  STATEMENTS,
  bandFor,
  scoreOf,
  type Answers,
} from "@/lib/self-check";
import styles from "./SelfCheck.module.css";

interface Props {
  answers: Answers;
  /** Az e-mailes kiküldés állapota (a kitöltés után). */
  status?: ReactNode;
}

/** Az önellenőrző kérdéssor értékelése: pontszám, a sávhoz tartozó szöveg, közös záró. */
export function SelfCheckResult({ answers, status }: Props) {
  const score = scoreOf(answers);
  const band = bandFor(score);

  return (
    <div className={styles.result}>
      <div className={styles.resultMain}>
        <p className="eyebrow">Az értékelés</p>
        <p className={styles.score}>
          <strong>{score}</strong> pont a {MAX_SCORE}-ból
        </p>
        <p className={styles.scoring}>{SCORING_TEXT}</p>
        <h2 className={styles.bandTitle}>{band.title}</h2>
        {band.paragraphs.map((p) => (
          <p key={p} className={styles.bandText}>
            {p}
          </p>
        ))}
        <p className={styles.note}>{CLOSING_NOTE}</p>
        {status}
      </div>

      <div className={styles.resultCta}>
        <h3>{CLOSING_CTA.title}</h3>
        <p>{CLOSING_CTA.text}</p>
        <CtaLink />
      </div>

      <div className={styles.recap}>
        <h3>Az állítások</h3>
        <ol>
          {STATEMENTS.map((s, i) => (
            <li key={s} data-high={answers[i] >= 2}>
              <span>{s}</span>
              <span className={styles.recapAnswer}>
                {ANSWER_OPTIONS[answers[i]].label} ({answers[i]} pont)
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
