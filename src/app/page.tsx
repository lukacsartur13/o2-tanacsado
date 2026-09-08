import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { Experience } from "@/components/Experience";
import { ArrowRight, Check } from "@/components/Icons";
import { QuoteSection } from "@/components/QuoteSection";
import { formatDate, sortedPosts } from "@/lib/blog";
import { FOUNDERS, SITUATIONS } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { COVERAGE_STATEMENT, LOCAL_PAGES } from "@/lib/site";
import heroImage from "@/images/hr-strategia.png";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "HR-tanácsadás és szervezetfejlesztés kkv-knak | O2 Tanácsadó",
  description:
    "HR-tanácsadás, szervezetfejlesztés, vezetői tréning és coaching 20–200 fős kkv-knak. Gyakorló cégvezető tanácsadók, országosan, online és helyszínen.",
  path: "/",
});

/** A kilenc szolgáltatási alap a főoldalon, az országos oldalakra irányítva. */
const HOME_SERVICES = [
  {
    title: "HR-stratégia és HR-tanácsadás",
    text: "A HR-döntések a cég üzleti céljaiból induljanak: létszám, kompetenciák, megtartás, ösztönzés.",
    href: "/hr-tanacsadas-kkv-knak/",
  },
  {
    title: "Szervezetfejlesztés és szervezeti diagnózis",
    text: "Struktúra, folyamatok, döntési szintek és vezetői működés, hozzáigazítva a cég tényleges méretéhez.",
    href: "/szervezetfejlesztes/",
  },
  {
    title: "Toborzás és kiválasztás",
    text: "Kulcspozíciók meghatározása, a valós munkakörre épülő hirdetés, strukturált kiválasztás, gyors döntés.",
    href: "/szolgaltatasok/#toborzas",
  },
  {
    title: "Munkakörök és munkaköri leírások",
    text: "Tisztázott felelősségek, használható munkaköri leírások, a cég működését követő szervezeti felépítés.",
    href: "/munkakori-leiras-minta/",
  },
  {
    title: "Munkaerő-megtartás és ösztönzés",
    text: "A fluktuáció valódi okainak feltárása, megtartási terv a kulcsemberekre, működő ösztönzési rendszer.",
    href: "/munkaero-megtartas/",
  },
  {
    title: "Vezetői tréning",
    text: "Szakemberből lett vezetőknek: delegálás, visszajelzés, teljesítménykezelés, a saját helyzeteiken gyakorolva.",
    href: "/vezetoi-trening/",
  },
  {
    title: "Vezetői coaching",
    text: "Egyéni, bizalmas munka tulajdonosokkal és kulcsvezetőkkel: szerepváltás, döntések, terhelés.",
    href: "/vezetoi-coaching/",
  },
  {
    title: "Team coaching",
    text: "Vezetői csapatoknak, amelyek külön-külön jól dolgoznak, de együtt nem hoznak döntést.",
    href: "/team-coaching/",
  },
  {
    title: "HR-outsourcing",
    text: "Kiszervezett HR-vezető havi keretben, ha a HR-igény túlnőtt az adminisztráción, de belső HR-vezető még nem indokolt.",
    href: "/hr-tanacsadas-kkv-knak/#hr-outsourcing",
  },
];

export default function HomePage() {
  const posts = sortedPosts().slice(0, 3);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <span className="o2-ring" style={{ width: 760, height: 760, left: -300, top: -260 }} aria-hidden="true" />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <p className="eyebrow">HR-tanácsadás és szervezetfejlesztés · országosan</p>
            <h1 id="hero-title">
              HR-tanácsadás, szervezetfejlesztés és vezetőfejlesztés 20–200 fős kkv-knak
            </h1>
            <p className="lead">
              Az O2 Tanácsadó kis- és középvállalkozásoknak segít, ha nehéz a toborzás, ha a kollégák
              megtartása gondot okoz, ha tisztázatlanok a munkakörök, ha a vezetők elakadtak, vagy ha
              a szervezet működésén kell javítani. Országosan dolgozunk, online és igény szerint a
              cég telephelyén. Tanácsadóink maguk is gyakorló cégvezetők.
            </p>
            <div className={styles.heroCtas}>
              <CtaLink />
              <Link href="/szolgaltatasok/" className="btn btn--ghost">
                Szolgáltatások
              </Link>
            </div>
            <ul className={styles.heroFacts} aria-label="Röviden">
              <li>Országosan, online és helyszínen</li>
              <li>Cégvezetői és HR-szakmai tapasztalat</li>
              <li>Kkv-méretű, működtethető megoldások</li>
            </ul>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <span className={styles.heroDisc} />
            <div className={styles.heroCircle}>
              <Image
                src={heroImage}
                alt=""
                priority
                sizes="(max-width: 700px) 78vw, (max-width: 1100px) 44vw, 520px"
                className={styles.heroImg}
              />
            </div>
            <span className={styles.heroSquare} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" id="szolgaltatasok" aria-labelledby="services-title">
        <div className="container">
          <div className={`${styles.split} reveal`}>
            <div>
              <p className="eyebrow">Szolgáltatások</p>
              <h2 id="services-title">Kilenc terület, egy cél: jól működő, önállóan vezetett szervezet</h2>
            </div>
            <p className="lead">
              A területek külön-külön és együtt is kérhetők. Mindegyik a cég tényleges helyzetéből
              indul ki, és olyan megoldást ad, amelyet a meglévő vezetők működtetni tudnak.
            </p>
          </div>

          <ul className={styles.svcGrid}>
            {HOME_SERVICES.map((s, i) => (
              <li key={s.href} className={`${styles.svcCard} reveal`}>
                <span className={styles.svcNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>
                  <Link href={s.href} className={styles.svcTitle}>
                    {s.title}
                  </Link>
                </h3>
                <p>{s.text}</p>
                <Link href={s.href} className={styles.svcLink} aria-label={`${s.title} – részletek`}>
                  Részletek <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className={`section section--paper2 ${styles.situations}`} aria-labelledby="sit-title">
        <span className="o2-disc" style={{ width: 520, height: 520, right: -200, bottom: -220 }} aria-hidden="true" />
        <div className={`container ${styles.sitGrid}`}>
          <div className={`${styles.sitIntro} reveal`}>
            <p className="eyebrow">Tipikus ügyfélhelyzetek</p>
            <h2 id="sit-title">Ismerős helyzetek?</h2>
            <p className="lead">
              Akkor tudunk hatékony partnere lenni, ha a cég 20–200 fős, és a következő
              helyzetek közül legalább egy ismerős.
            </p>
            <CtaLink service="segitseg" variant="ghost">
              Beszéljük át a helyzetet
            </CtaLink>
          </div>
          <ol className={styles.sitList}>
            {SITUATIONS.map((s) => (
              <li key={s.title} className={`${styles.sit} reveal`}>
                <span className={styles.sitMark} aria-hidden="true">
                  <Check />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link href={s.href} className={styles.sitLink}>
                    {s.linkLabel}
                    <ArrowRight />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" aria-labelledby="founders-title">
        <div className={`container ${styles.foundersGrid}`}>
          <div className={`${styles.foundersIntro} reveal`}>
            <p className="eyebrow">Alapítók</p>
            <h2 id="founders-title">Tanácsadók, akik maguk is cégvezetők</h2>
            <p>
              Több évtizedes stratégiai vezetői és kkv-tulajdonos ügyvezetői múlttal rendelkező
              HR-tanácsadók vagyunk. A szervezetfejlesztés módszereit saját vállalkozásunk
              kihívásai miatt kezdtük kutatni, tanulni és a gyakorlatban alkalmazni.
            </p>
            <p>
              Így lettünk a tréneri és coaching szakma gyakorlóivá, amit mentoring és
              pszichodráma-képzésekkel egészítettünk ki. Missziónk, hogy a hozzánk hasonló kis- és
              középvállalatokat hatékony, számukra releváns HR-megoldásokkal támogassuk.
            </p>
            <Link href="/rolunk/" className="link-arrow">
              Bővebben rólunk <ArrowRight />
            </Link>
          </div>

          <ul className={styles.founders}>
            {FOUNDERS.map((f, i) => (
              <li key={f.name} className={`${styles.founder} reveal`} data-offset={i === 1}>
                <div className={styles.portrait}>
                  <Image
                    src={f.image}
                    alt={f.imageAlt}
                    sizes="(max-width: 700px) 60vw, 300px"
                    loading="lazy"
                  />
                </div>
                <h3>{f.name}</h3>
                <p className={styles.role}>{f.role}</p>
                <ul className={styles.facts}>
                  {f.facts.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Experience tinted />

      {/* ---------------------------------------------------------------- */}
      <section className="section" aria-labelledby="posts-title">
        <div className="container">
          <div className={`${styles.split} reveal`}>
            <div>
              <p className="eyebrow">Blog</p>
              <h2 id="posts-title">Gyakorlati tudás kkv-vezetőknek</h2>
            </div>
            <p className="lead">
              Rövid, konkrét cikkek fluktuációról, munkakörökről, vezetőfejlesztésről és arról, mikor
              érdemes külső segítséget bevonni.
            </p>
          </div>
          <ul className={styles.posts}>
            {posts.map((p) => (
              <li key={p.slug} className={`${styles.post} reveal`}>
                <span className={styles.postTopic}>{p.topic}</span>
                <h3>
                  <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
                </h3>
                <p>{p.excerpt}</p>
                <span className={styles.postDate}>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.postsMore}>
            <Link href="/blog/" className="link-arrow">
              Minden cikk <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <QuoteSection
        title="Kérjen első egyeztetést a cége helyzetére"
        text="Írja le röviden, mivel küzd a szervezet, és jelölje, melyik terület érintett. Ha nem biztos benne, segítünk meghatározni. Az első egyeztetés díjmentes."
      />

      {/* ---------------------------------------------------------------- */}
      <section className={`section section--tight ${styles.regions}`} aria-labelledby="regions-title">
        <div className={`container ${styles.regionsGrid}`}>
          <div>
            <h2 id="regions-title" className={styles.regionsTitle}>
              Országosan, online és helyszínen
            </h2>
            <p className="measure muted">{COVERAGE_STATEMENT}</p>
          </div>
          <div>
            <p className={styles.regionsLabel}>Három térségről külön oldalon írunk:</p>
            <ul className={styles.regionList}>
              {LOCAL_PAGES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-arrow">
                    HR-tanácsadás: {l.label} <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
