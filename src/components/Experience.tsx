import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { EXPERIENCE, withBase } from "@/lib/site";
import styles from "./Experience.module.css";

interface Props {
  /** Ha true, a blokk világos-szürke háttéren jelenik meg. */
  tinted?: boolean;
  /** Ha true, tömörebb (szolgáltatási oldalakon). */
  compact?: boolean;
}

/** Logó-URL csak akkor, ha engedélyezett és a fájl tényleg létezik a public/logos mappában. */
function logoUrl(file: string) {
  if (!EXPERIENCE.showLogos) return null;
  const abs = path.join(process.cwd(), "public", "logos", file);
  return existsSync(abs) ? withBase(`/logos/${file}`) : null;
}

/** „A, B, C és D” formájú felsorolás. */
function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} és ${names[names.length - 1]}`;
}

/**
 * Országos „Vállalati tapasztalat” blokk. Alapértelmezésben szöveges felsorolás;
 * logó kizárólag dokumentált logóhasználati engedéllyel (EXPERIENCE.showLogos).
 * A szöveg szándékosan nem állít minden szervezetnél szervezetfejlesztési
 * projektet: a tapasztalat jelentős része vállalati egyéni coaching.
 */
export function Experience({ tinted, compact }: Props) {
  const orgs = EXPERIENCE.organizations.map((o) => ({ ...o, url: logoUrl(o.logo) }));
  const allLogos = EXPERIENCE.showLogos && orgs.every((o) => o.url);

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
          {allLogos ? (
            <p className={styles.text}>{EXPERIENCE.intro}</p>
          ) : (
            <p className={styles.text}>
              {EXPERIENCE.intro}{" "}
              <strong className={styles.names}>{joinNames(orgs.map((o) => o.name))}.</strong>
            </p>
          )}
        </div>

        {allLogos && (
          <ul className={`${styles.strip} reveal`} aria-label="Szervezetek, ahol tapasztalatot szereztünk">
            {orgs.map((o) => (
              <li key={o.name} className={styles.cell}>
                {/* eslint-disable-next-line @next/next/no-img-element -- statikus PNG */}
                <img
                  src={o.url ?? ""}
                  alt={`${o.name} logó`}
                  className={styles.logo}
                  loading="lazy"
                  style={o.scale ? ({ "--logo-scale": o.scale } as CSSProperties) : undefined}
                />
              </li>
            ))}
          </ul>
        )}

        <p className={`${styles.note} reveal`}>{EXPERIENCE.note}</p>
      </div>
    </section>
  );
}
