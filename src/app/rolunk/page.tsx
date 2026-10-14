import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { CtaLink } from "@/components/CtaLink";
import { ArrowRight } from "@/components/Icons";
import { FOUNDERS } from "@/lib/content";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

const LEAD =
  "Gyakorló cégvezetők vagyunk, és cégtulajdonos vezetőknek segítünk abban, hogy a cég a napi jelenlétük nélkül is működjön.";

export const metadata = pageMetadata({
  title: "Rólunk: 25 éve a saját cégünkben csináljuk, amit javasolunk | O2 Tanácsadó",
  description: LEAD,
  path: "/rolunk/",
});

/** Bemutatkozó bekezdés és jóváhagyott személyes mondat, a FOUNDERS sorrendjében. */
const BIOS = [
  {
    text: "Közgazdászként (MBA) és IT-mérnökként a számok és a rendszerek felől nézem a céget, business és menedzsment coachként, szervezetfejlesztő szakemberként az emberek felől. Cégvezetőként ugyanazt csinálom a saját vállalkozásomban, amit az ügyfeleimnek javaslok.",
    personal:
      "Nekem az a legjobb pillanat, amikor egy cégvezető szabadságra megy, és nem hívják. Ezt a saját cégünkben is megtanultuk, és ezt szeretném átadni.",
  },
  {
    text: "Közgazdász (MBA), coach és szervezetfejlesztési szakember vagyok, emellett mentálhigiénés szakember és pszichodráma-vezető. Gyakorló cégvezetőként ismerem azt a helyzetet, amiben te vagy.",
    personal:
      "Pszichodráma-vezetőként megtanultam, hogy érdemes kimondani a legnehezebb mondatokat is, mert utána lehet velük dolgozni. Egy cégben is ugyanez a helyzet.",
  },
];

const DIFFERENCES = [
  {
    title: "Tulajdonos beszél tulajdonossal.",
    text: "Olyan emberekkel ülsz le, akik hasonló helyzetben vannak, mint te, ezért belülről ismerik, amit átélsz.",
  },
  {
    title: "Amit javaslunk, azt a saját cégünkben 25 éve csináljuk.",
    text: "Kipróbált gyakorlatot kapsz, nem elméletet.",
  },
  {
    title: "Kevés ügyfél, sok figyelem.",
    text: "Egyszerre legfeljebb 12–15 állandó megbízóval dolgozunk, beleássuk magunkat a cég életébe és igyekszünk velük élni.",
  },
  {
    title: "Kimondjuk, amit a cégben senki nem mer.",
    text: "Témává tesszük azokat a belső konfliktusokat és visszásságokat, amiket a cég vezetője maga nem tud felvetni.",
  },
];

const DETAIL_PAGES = [
  { href: "/hr-tanacsadas-kkv-knak/", label: "Havi együttműködés: vezetői és HR-tanácsadás" },
  { href: "/szervezetfejlesztes/", label: "Céges diagnózis" },
  { href: "/vezetoi-coaching/", label: "Vezetői coaching" },
  { href: "/team-coaching/", label: "Team coaching" },
];

export default function AboutPage() {
  return (
    <>
      {/* Nyitó címsor ----------------------------------------------------- */}
      <section className={styles.head} aria-labelledby="about-h1">
        <span className="o2-ring" style={{ width: 560, height: 560, left: -220, top: -200 }} aria-hidden="true" />
        <div className={`container ${styles.headInner}`}>
          <h1 id="about-h1">25 éve a saját cégünkben csináljuk azt, amit neked is javasolunk</h1>
          <p className="lead">{LEAD}</p>
        </div>
      </section>

      {/* Az olvasó helyzete ----------------------------------------------- */}
      <section className="section section--tight" aria-label="A te helyzeted">
        <div className="container">
          <p className={`${styles.reader} reveal`}>
            Cégtulajdonos vagy, és a cég azért működik, mert te mindenhol ott vagy. Ez a legnagyobb
            erősséged, és mostanra a legnagyobb terhed is.{" "}
            <strong>Szeretnél hátrébb lépni, de nem tudod, kire és hogyan bízhatnád a döntéseket.</strong>{" "}
            Ebben tudunk segíteni, mert a saját cégünkben ezt már végigjártuk.
          </p>
        </div>
      </section>

      {/* Bio (páros) és a két alapító ------------------------------------- */}
      <section className="section section--paper2" aria-label="Bemutatkozás">
        <div className="container">
          <div className={`prose ${styles.bio} reveal`}>
            <p>
              <strong>Marczali Tibor és Wortmann Ádám vagyunk.</strong> 25 éve vezetjük a saját
              informatikai cégünket, az Onlinet Kft.-t. Hárman alapítottuk, mindhárman tulajdonosok
              vagyunk, és minden fontos kérdésben közösen döntünk. Ebből tudjuk, hogy a vezetés
              megosztható, a cég a tulajdonosok napi jelenléte nélkül is jól és eredményesen működhet,
              és a tulajdonos megteremtheti magának a vágyott munka-magánélet egyensúlyt.
            </p>
            <p>
              Ezt a gyakorlatot adjuk át neked és mellé azt a tudást, amit közben tanultunk:
              menedzsmentet, közgazdaságtant, vállalati pénzügyeket, szervezetfejlesztést, coachingot,
              mentálhigiénét, pszichodráma-vezetést. A cégvezető mögött az embert is látjuk, a vágyaival
              és az érzéseivel együtt. A bizalom jegyében mi is sokat mesélünk a saját életünkről.
            </p>
          </div>

          <ul className={styles.founders}>
            {FOUNDERS.map((f, i) => (
              <li key={f.name} className={`${styles.founder} reveal`}>
                <div className={styles.portrait}>
                  <Image src={f.image} alt={f.imageAlt} sizes="(max-width: 700px) 60vw, 200px" loading="lazy" />
                </div>
                <div>
                  <h2 className={styles.founderName}>{f.firstName}</h2>
                  <p>{BIOS[i].text}</p>
                  <p className={styles.personal}>{BIOS[i].personal}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mikor jöttünk rá ------------------------------------------------- */}
      <section className="section" aria-labelledby="stories-title">
        <div className="container">
          <h2 id="stories-title" className={`${styles.blockTitle} reveal`}>
            Mikor jöttünk rá, hogy a cég nélkülünk is működik
          </h2>
          <div className={styles.stories}>
            {FOUNDERS.map((f) => (
              <figure key={f.name} className={`${styles.story} reveal`}>
                <figcaption className={styles.storyName}>{f.firstName}:</figcaption>
                <blockquote>
                  <p>{f.story}</p>
                </blockquote>
              </figure>
            ))}
          </div>
          <p className={`${styles.team} reveal`}>
            Ketten vagyunk az O2 Tanácsadó arca, de nem kétszemélyes csapat vagyunk: ha a feladat kívánja,
            további kollégák is bekapcsolódnak.
          </p>
        </div>
      </section>

      {/* Vélemény helyett: névtelen példa --------------------------------- */}
      <section className="section section--paper2 section--tight" aria-label="Egy példa, névtelenül">
        <div className="container">
          <div className={`${styles.example} reveal`}>
            <p className={styles.exampleText}>
              Egy cégvezető már a hátralépését és a generációváltást tervezte.{" "}
              <strong>12 hónap alatt a harmadára csökkentette a cégben töltött idejét,</strong> az új
              vezető pedig minden operatív kérdésben helyettesíteni tudta.
            </p>
            <p className={styles.exampleNote}>
              Amit nekünk mondasz, az nálunk marad. Az ügyfeleinkről is csak elmaszkolt történetet
              mesélünk.
            </p>
          </div>
        </div>
      </section>

      {/* Megkülönböztető -------------------------------------------------- */}
      <section className="section" aria-labelledby="diff-title">
        <div className="container">
          <h2 id="diff-title" className={`${styles.blockTitle} reveal`}>
            Mitől más velünk dolgozni?
          </h2>
          <ol className={styles.approach}>
            {DIFFERENCES.map((d, i) => (
              <li key={d.title} className="reveal">
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Módszer ---------------------------------------------------------- */}
      <section className="section section--paper2" aria-labelledby="method-title">
        <div className={`container ${styles.methodGrid}`}>
          <h2 id="method-title" className="reveal">
            Megélt és tanult
          </h2>
          <p className={`${styles.method} reveal`}>
            A <strong>megélt</strong> rész az, amit a saját cégünkben 25 éve csinálunk: a kommunikációs
            technikák, a szervezési módszerek, a gyors meetingkultúra. A <strong>tanult</strong> rész az,
            amit menedzsmentből, mentálhigiénéből, coachingból és szervezetfejlesztésből tanultunk, az
            aktuális szakirodalom és az egyetemeken is tanított módszerek. A gyakorlat megmutatja, hogy a
            dolog működik. A tudás pedig megalapozottá és átadhatóvá teszi.
          </p>
        </div>
      </section>

      {/* CTA -------------------------------------------------------------- */}
      <CtaBand
        id="cta-title"
        title="Ülj le velünk beszélgetni"
        text="A megállapodás előtt legalább két-három személyes beszélgetést tartunk, mert **a bizalomhoz idő kell.** Az első díjmentes, és nem jár elköteleződéssel."
      />

      {/* Záró CTA és további lehetőségek ---------------------------------- */}
      <section className="section section--tight" aria-labelledby="more-title">
        <div className={`container ${styles.moreGrid}`}>
          <h2 id="more-title" className={styles.moreTitle}>
            Ha többet szeretnél tudni arról, hogyan dolgozunk
          </h2>
          <div className={styles.moreActions}>
            <ul className={styles.moreList}>
              {DETAIL_PAGES.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="link-arrow">
                    {d.label} <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
            <CtaLink />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Rólunk", path: "/rolunk/" },
            ]),
          ),
        }}
      />
    </>
  );
}
