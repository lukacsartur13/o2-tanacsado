import { Suspense } from "react";
import { QuoteForm, QuoteFormStatic } from "./QuoteForm";
import { ADDRESS, CONTACT_EMAIL, FORM_ANCHOR, LEGAL_NAME } from "@/lib/site";
import styles from "./QuoteSection.module.css";

interface Props {
  title?: string;
  text?: string;
  defaultInterests?: string[];
  /** Ha true, a szekció világos hátteret használ (Kapcsolat oldal). */
  light?: boolean;
}

export function QuoteSection({
  title = "Kérjen első egyeztetést",
  text = "Írja le röviden, milyen helyzetben van a cég. Az első egyeztetés díjmentes, és nem jár kötelezettséggel.",
  defaultInterests,
  light,
}: Props) {
  return (
    <section
      id={FORM_ANCHOR}
      className={`section ${light ? styles.light : "section--ink"} ${styles.section}`}
      aria-labelledby={`${FORM_ANCHOR}-title`}
    >
      <span
        className="o2-ring"
        style={{ width: 620, height: 620, right: -240, top: -200 }}
        aria-hidden="true"
      />
      <span
        className="o2-ring"
        style={{ width: 260, height: 260, left: -110, bottom: 60 }}
        aria-hidden="true"
      />
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="eyebrow">Első egyeztetés</p>
          <h2 id={`${FORM_ANCHOR}-title`}>{title}</h2>
          <p className="lead">{text}</p>
          <ul className={styles.points}>
            <li>
              Bármelyik szolgáltatási területre vagy azok kombinációjára kérhet egyeztetést; országosan,
              online és igény szerint helyszínen dolgozunk.
            </li>
            <li>
              Ha nem biztos benne, melyik terület érintett, jelölje a „Segítséget kérek a
              meghatározásában” lehetőséget.
            </li>
            <li>Az első egyeztetés díjmentes, és nem jelent elköteleződést.</li>
          </ul>
          <address className={styles.address}>
            <strong>{LEGAL_NAME}</strong>
            <br />
            {ADDRESS.full}
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </address>
        </div>
        <div>
          <Suspense fallback={<QuoteFormStatic defaultInterests={defaultInterests} />}>
            <QuoteForm defaultInterests={defaultInterests} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
