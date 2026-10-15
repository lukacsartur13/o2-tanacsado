import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { Rich, plain } from "@/components/Rich";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { LEGAL_NAME, SITE_URL } from "@/lib/site";
import hrStrategia from "@/images/hr-strategia.png";
import munkakorok from "@/images/munkakorok.png";
import szervezetfejlesztes from "@/images/szervezetfejlesztes.png";
import toborzas from "@/images/toborzas.png";
import styles from "./page.module.css";

const LEAD =
  "Két lépésben dolgozunk. A diagnózis megmutatja, hol tart a cég, aztán havi rendszerességgel, személyesen segítünk, ahogy a helyzet éppen kívánja.";

export const metadata = pageMetadata({
  title: "Szolgáltatások: HR-tanácsadás és céges diagnózis | O2 Tanácsadó",
  description: LEAD,
  path: "/szolgaltatasok/",
});

interface Offer {
  id: string;
  title: string;
  /** Bekezdések a lista előtt; a **...** rész félkövér. */
  paragraphs: string[];
  items?: string[];
  /** Bekezdések a lista után. */
  after?: string[];
  image: StaticImageData;
}

const OFFERS: Offer[] = [
  {
    id: "ceges-diagnozis",
    title: "Céges diagnózis",
    paragraphs: [
      "60–75 perces személyes, egyéni interjúk a vezetőkkel és a kulcsemberekkel, amiből írásos összefoglaló készül, amit személyesen mutatunk be. Szó esik benne a cég erősségeiről, a nehézségeiről és a ki nem mondott, visszatérő problémákról. Kapsz javaslatokat is a jobb működéshez, pl. belső kommunikáció, döntési jogkörök, feladatmegosztás, teljesítményértékelés, munkaszervezés témákban. Része a távlati irány vázlata is, vagyis hogy honnan hova juthatunk. Ezt itt még nem dolgozzuk ki részletesen, mert azok a havi együttműködésben, veled közösen alakulnak ki.",
      "A diagnózis díjáról a személyes beszélgetések után adunk ajánlatot.",
    ],
    image: szervezetfejlesztes,
  },
  {
    id: "havi-egyuttmukodes",
    title: "Havi együttműködés",
    paragraphs: ["Ez a fő munkánk. Havonta rendszeresen a cégnél vagyunk, és ezeket vállaljuk:"],
    items: [
      "vezetői és HR-tanácsadás",
      "egyéni és team coachingok",
      "a szervezeti folyamatok újragondolása és fejlesztése",
      "a belső kommunikáció javítása",
      "a nem adminisztratív jellegű HR-feladatok átvétele",
    ],
    after: [
      "Az együttműködés akkor sem ér véget, amikor hátrébb lépsz: folytatjuk az új vezetéssel. A havi díj **490 000 Ft nettótól** indul, a havi óraszámtól és a bevont vezetők számától függően.",
    ],
    image: munkakorok,
  },
  {
    id: "ertekeles-360",
    title: "360 fokos értékelés",
    paragraphs: [
      "Online kitölthető teszt, amiben az érintett vezetőről a felettese, a beosztottai és a mellérendelt kollégái mondanak véleményt. Több irányból kapsz összevethető visszajelzést, és tényszerű adatokkal láthatod, mi áll a tünetek hátterében.",
    ],
    image: toborzas,
  },
  {
    id: "dontesi-terkep",
    title: "Döntési térkép és átadási útiterv",
    paragraphs: [
      "Ez nem egy előre legyártott csomag. Akkor készül, ha a helyzet megkívánja, vagy ha te kéred. Minden cégnél más tematikára van szükség, ezért a havi együttműködés során, közös egyeztetések alapján alakítjuk ki, és írjuk le, ha kéred. Kész, konzerv anyagot nem adunk el.",
    ],
    image: hrStrategia,
  },
];

const DETAIL_PAGES = [
  { href: "/hr-tanacsadas-kkv-knak/", label: "Havi együttműködés: vezetői és HR-tanácsadás" },
  { href: "/szervezetfejlesztes/", label: "Céges diagnózis" },
  { href: "/vezetoi-coaching/", label: "Vezetői coaching" },
  { href: "/team-coaching/", label: "Team coaching" },
];

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Szolgáltatások",
  itemListElement: OFFERS.map((o, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: o.title,
      description: plain(o.paragraphs[0]),
      url: `${SITE_URL}/szolgaltatasok/#${o.id}`,
      provider: { "@id": `${SITE_URL}/#organization`, "@type": "ProfessionalService", name: LEGAL_NAME },
      areaServed: { "@type": "Country", name: "Magyarország" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="services-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -320 }} aria-hidden="true" />
        <div className="container">
          <p className="eyebrow">Szolgáltatások</p>
          <h1 id="services-h1">Először kívülről nézzük meg a céged, utána havonta ott vagyunk melletted</h1>
          <p className="lead">{LEAD}</p>
          <nav aria-label="Szolgáltatások" className={styles.jump}>
            <ol>
              {OFFERS.map((o, i) => (
                <li key={o.id}>
                  <a href={`#${o.id}`}>
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span> {o.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {OFFERS.map((o, i) => (
        <section
          key={o.id}
          id={o.id}
          className={`${styles.service} ${i % 2 === 1 ? styles.serviceAlt : ""}`}
          aria-labelledby={`${o.id}-title`}
        >
          <div className={`container ${styles.serviceGrid}`}>
            <div className={`${styles.visual} reveal`} aria-hidden="true">
              <div className={styles.circle}>
                <Image src={o.image} alt="" sizes="(max-width: 900px) 70vw, 420px" loading={i === 0 ? "eager" : "lazy"} />
              </div>
              <span className={styles.square} />
            </div>

            <div className={`${styles.body} reveal`}>
              <p className="eyebrow">
                {String(i + 1).padStart(2, "0")} / {String(OFFERS.length).padStart(2, "0")}
              </p>
              <h2 id={`${o.id}-title`}>{o.title}</h2>
              <div className={`prose ${styles.text}`}>
                {o.paragraphs.map((p) => (
                  <p key={p}>
                    <Rich text={p} />
                  </p>
                ))}
                {o.items && (
                  <ul>
                    {o.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
                {o.after?.map((p) => (
                  <p key={p}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section" aria-labelledby="expect-title">
        <div className={`container ${styles.expectGrid}`}>
          <div className="reveal">
            <h2 id="expect-title" className={styles.expectTitle}>
              Mire számíthatsz?
            </h2>
            <p className="lead">
              Az első látható eredmények 3–6 hónap után várhatók, a CEO feladatainak részleges, vagy
              teljes delegálása nagyjából 1–1,5 évet vesz igénybe.
            </p>
          </div>
          <div className={`${styles.detailsBox} reveal`}>
            <h2 id="details-title" className={styles.detailsTitle}>
              Részletes oldalak
            </h2>
            <ul className={styles.detailList} aria-labelledby="details-title">
              {DETAIL_PAGES.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="link-arrow">
                    {d.label} <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        id="cta-title"
        title="Első beszélgetés"
        text="Üljünk le beszélgetni a cég helyzetéről. A találkozó díjmentes, és nem jár elköteleződéssel."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(servicesLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Szolgáltatások", path: "/szolgaltatasok/" },
            ]),
          ),
        }}
      />
    </>
  );
}
