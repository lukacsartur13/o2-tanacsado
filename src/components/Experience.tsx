import { existsSync } from "node:fs";
import path from "node:path";
import { EXPERIENCE, withBase } from "@/lib/site";
import styles from "./Experience.module.css";

interface Props {
  /** Ha true, a blokk világos-szürke háttéren jelenik meg. */
  tinted?: boolean;
  /** Ha true, tömörebb (szolgáltatási oldalakon). */
  compact?: boolean;
}

/** Csak akkor adunk vissza logó-URL-t, ha a fájl tényleg létezik a public/logos mappában. */
function logoUrl(file: string) {
  const abs = path.join(process.cwd(), "public", "logos", file);
  return existsSync(abs) ? withBase(`/logos/${file}`) : null;
}

/**
 * Országos „Vállalati tapasztalat” blokk. A szervezetek logója csak akkor jelenik
 * meg, ha a logófájl a projektben elérhető (public/logos/); egyébként a név
 * szövegesen. Logó kizárólag dokumentált logóhasználati engedéllyel kerülhet ki.
 */
export function Experience({ tinted, compact }: Props) {
  const orgs = EXPERIENCE.organizations.map((o) => ({ ...o, url: logoUrl(o.logo) }));
  return (
    <section
      className={`section ${compact ? "section--tight" : ""} ${tinted ? "section--paper2" : ""} ${styles.section}`}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <div>
            <p className="eyebrow">Tapasztalatunk</p>
            <h2 id="experience-title" className={compact ? styles.compactTitle : undefined}>
              {EXPERIENCE.title}
            </h2>
          </div>
          <p className={styles.text}>{EXPERIENCE.text}</p>
        </div>

        <ul className={`${styles.strip} reveal`} aria-label="Szervezetek, ahol tapasztalatot szereztünk">
          {orgs.map((o) => (
            <li key={o.name} className={styles.cell}>
              {o.url ? (
                // eslint-disable-next-line @next/next/no-img-element -- statikus PNG, nincs szükség optimalizálásra
                <img src={o.url} alt={`${o.name} logó`} className={styles.logo} loading="lazy" />
              ) : (
                <span className={styles.name}>{o.name}</span>
              )}
            </li>
          ))}
        </ul>

        <p className={`${styles.note} reveal`}>{EXPERIENCE.note}</p>
      </div>
    </section>
  );
}
