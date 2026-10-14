import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import { Rich } from "./Rich";
import styles from "./CtaBand.module.css";

interface Props {
  id: string;
  eyebrow?: string;
  title: string;
  /** Bekezdések; a **...** rész félkövér. */
  text: string | string[];
  /** Kiegészítő tartalom a gomb előtt (pl. linklista). */
  children?: ReactNode;
  /** A „Beszéljünk” gomb helyett megjelenő saját gomb. */
  action?: ReactNode;
}

/** Sötét záró sáv a „Beszéljünk” gombbal, amely a Kapcsolat oldal űrlapjára visz. */
export function CtaBand({ id, eyebrow, title, text, children, action }: Props) {
  const paragraphs = Array.isArray(text) ? text : [text];
  return (
    <section className={`section section--ink ${styles.band}`} aria-labelledby={id}>
      <span className="o2-ring" style={{ width: 620, height: 620, right: -240, top: -220 }} aria-hidden="true" />
      <span className="o2-ring" style={{ width: 240, height: 240, left: -100, bottom: 40 }} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={id}>{title}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="lead">
              <Rich text={p} />
            </p>
          ))}
        </div>
        <div className={styles.actions}>
          {children}
          {action ?? <CtaLink variant="white" />}
        </div>
      </div>
    </section>
  );
}
