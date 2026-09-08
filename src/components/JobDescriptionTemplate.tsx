import { CopyButton } from "./CopyButton";
import { ArrowRight } from "./Icons";
import { JOB_DESCRIPTION_TEMPLATE, toPlainText } from "@/lib/job-description";
import styles from "./JobDescriptionTemplate.module.css";

export const TEMPLATE_DOWNLOAD_PATH = "/letoltes/munkakori-leiras-minta.txt";

/**
 * A munkaköri leírás minta: másolható, letölthető, nyomtatható. A sablon
 * teljes szövege a HTML-ben van, így a keresők számára is olvasható.
 */
export function JobDescriptionTemplate() {
  const plain = toPlainText();
  return (
    <section className={`section section--paper2 ${styles.section}`} id="minta" aria-labelledby="minta-title">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow">A minta</p>
            <h2 id="minta-title">Munkaköri leírás minta – másolható sablon</h2>
            <p className="lead">
              Töltse ki a pontozott részeket, a dőlt betűs útmutatókat pedig törölje. Egy–két oldalnál ne
              legyen hosszabb. A minta a munkaszerződés mellékleteként használható; a jogi tartalmat
              érdemes munkajogásszal ellenőriztetni.
            </p>
          </div>
          <div className={styles.actions}>
            <CopyButton text={plain} />
            <a href={TEMPLATE_DOWNLOAD_PATH} download className="btn btn--ghost">
              Letöltés szövegfájlként <ArrowRight />
            </a>
          </div>
        </div>

        <article className={styles.doc} aria-label="Munkaköri leírás minta">
          <header className={styles.docHead}>
            <h3 className={styles.docTitle}>{JOB_DESCRIPTION_TEMPLATE.title}</h3>
            <p className={styles.docMeta}>A munkaszerződés …… számú melléklete</p>
          </header>
          {JOB_DESCRIPTION_TEMPLATE.sections.map((s) => (
            <section key={s.title} className={styles.block}>
              <h4>{s.title}</h4>
              <p className={styles.hint}>{s.hint}</p>
              <ul className={styles.lines}>
                {s.lines.map((l, i) => (
                  <li key={`${s.title}-${i}`}>{l}</li>
                ))}
              </ul>
            </section>
          ))}
        </article>

        <div className={styles.guide}>
          <h3>Rövid kitöltési útmutató</h3>
          <ol className={styles.guideList}>
            <li>
              <strong>A munkakör céljával kezdje.</strong> Ha egy-két mondatban nem tudja leírni, miért van a
              munkakör, a munkakörrel van baj, nem a leírással.
            </li>
            <li>
              <strong>A fő feladatokat a betöltővel együtt írja.</strong> A vezető tudja, mi a fontos, a kolléga
              tudja, mi a valóság. A kettő együtt ad használható listát.
            </li>
            <li>
              <strong>A döntési jogkört ne hagyja ki.</strong> Ez az a rész, amely a napi működésben a legtöbbet
              számít: a kolléga tudja, miről dönthet, és nem visz minden kérdést a vezetőhöz.
            </li>
            <li>
              <strong>Teljesítménymutatóból 2–4 legyen,</strong> és olyan, amelyet a kolléga a saját munkájával
              befolyásol.
            </li>
            <li>
              <strong>Beszélgetésben adja át,</strong> ne e-mailben. Évente egyszer, a teljesítménybeszélgetéssel
              együtt nézzék át, és frissítsék, ha a munkakör változott.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
