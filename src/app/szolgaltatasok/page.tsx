import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { Experience } from "@/components/Experience";
import { ArrowRight } from "@/components/Icons";
import { SERVICES, type ServiceId } from "@/lib/content";
import { POST_BY_SLUG } from "@/lib/blog";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { COVERAGE_STATEMENT, LEGAL_NAME, LOCAL_PAGES, SERVICE_PAGES, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "HR-tanácsadási szolgáltatások kkv-knak | O2 Tanácsadó",
  description:
    "HR-stratégia, toborzás, munkakörök, szervezetfejlesztés, vezetői tréning és coaching 20–200 fős kkv-knak. Országosan, online és helyszínen.",
  path: "/szolgaltatasok/",
});

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HR-tanácsadási szolgáltatások",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.lead,
      url: `${SITE_URL}/szolgaltatasok/#${s.id}`,
      serviceType: "HR-tanácsadás",
      provider: { "@id": `${SITE_URL}/#organization`, "@type": "ProfessionalService", name: LEGAL_NAME },
      areaServed: { "@type": "Country", name: "Magyarország" },
    },
  })),
};

/** Az egyes területekhez tartozó részletes országos oldalak és cikkek. */
const DETAILS: Record<ServiceId, { pages: string[]; posts: string[] }> = {
  "hr-strategia": {
    pages: ["/hr-tanacsadas-kkv-knak/", "/munkaero-megtartas/"],
    posts: ["mikor-van-szuksege-kkv-nak-hr-tanacsadora", "mukodo-osztonzesi-rendszer-kkv-ban"],
  },
  toborzas: { pages: [], posts: ["toborzas-es-kivalasztas-gyorsabban-pontosabban"] },
  munkakorok: { pages: ["/munkakori-leiras-minta/"], posts: ["munkakori-leiras-minta-mit-tartalmazzon"] },
  szervezetfejlesztes: {
    pages: ["/szervezetfejlesztes/", "/vezetoi-trening/", "/vezetoi-coaching/", "/team-coaching/"],
    posts: ["szervezeti-diagnozis-mikor-erdemes", "vezetoi-trening-vagy-vezetoi-coaching"],
  },
};

const LABEL_BY_HREF = Object.fromEntries(SERVICE_PAGES.map((s) => [s.href, s.label])) as Record<string, string>;

export default function ServicesPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="services-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -320 }} aria-hidden="true" />
        <div className="container">
          <p className="eyebrow">Szolgáltatások</p>
          <h1 id="services-h1">HR-tanácsadási szolgáltatások kis- és középvállalkozásoknak</h1>
          <p className="lead">
            Négy egyenrangú terület, amelyek külön és együtt is kérhetők. Minden területnél azt
            mutatjuk be, mikor van rá szükség, mit tartalmaz, és hogyan kapcsolódik a cég üzleti
            problémájához. A részletes oldalak a szervezetfejlesztésről, a HR-tanácsadásról, a
            vezetői tréningről és coachingról, a munkaerő-megtartásról és a munkaköri leírásokról
            innen érhetők el.
          </p>
          <p className={`measure ${styles.coverage}`}>{COVERAGE_STATEMENT}</p>
          <nav aria-label="Szolgáltatási területek" className={styles.jump}>
            <ol>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span aria-hidden="true">{s.num}</span> {s.shortTitle}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`${styles.service} ${i % 2 === 1 ? styles.serviceAlt : ""}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className={`container ${styles.serviceGrid}`}>
            <div className={`${styles.visual} reveal`} aria-hidden="true">
              <div className={styles.circle}>
                <Image
                  src={s.image}
                  alt=""
                  sizes="(max-width: 900px) 70vw, 420px"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <span className={styles.square} />
            </div>

            <div className={`${styles.body} reveal`}>
              <p className="eyebrow">{s.num} / 04</p>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <p className="lead">{s.lead}</p>

              <div className={styles.blocks}>
                <div>
                  <h3>Mikor van rá szükség?</h3>
                  <ul className={styles.list}>
                    {s.when.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Mit tartalmaz?</h3>
                  <ul className={styles.list}>
                    {s.includes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.wide}>
                  <h3>Miért fontos az üzlet szempontjából?</h3>
                  <p>{s.business}</p>
                </div>
              </div>

              {(DETAILS[s.id].pages.length > 0 || DETAILS[s.id].posts.length > 0) && (
                <div className={styles.details}>
                  {DETAILS[s.id].pages.length > 0 && (
                    <div>
                      <h3>Részletes oldalak</h3>
                      <ul className={styles.detailList}>
                        {DETAILS[s.id].pages.map((href) => (
                          <li key={href}>
                            <Link href={href} className="link-arrow">
                              {LABEL_BY_HREF[href]} <ArrowRight />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {DETAILS[s.id].posts.length > 0 && (
                    <div>
                      <h3>Kapcsolódó cikkek</h3>
                      <ul className={styles.detailList}>
                        {DETAILS[s.id].posts.map((slug) => (
                          <li key={slug}>
                            <Link href={`/blog/${slug}/`}>{POST_BY_SLUG[slug].title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className={styles.ctaBox}>
                <div>
                  <h3>Első egyeztetés erre a területre</h3>
                  <p>
                    Az űrlapon előre kiválasztjuk a(z) „{s.title}” területet. Ha több területről
                    van szó, azokat is bejelölheti. Az első egyeztetés díjmentes.
                  </p>
                </div>
                <CtaLink service={s.id} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={`section section--paper2 ${styles.unsure}`} aria-labelledby="unsure-title">
        <div className={`container ${styles.unsureGrid}`}>
          <div>
            <p className="eyebrow">Nem biztos, melyik terület?</p>
            <h2 id="unsure-title">Segítünk meghatározni, hol érdemes kezdeni</h2>
            <p className="lead">
              A HR-problémák ritkán tartoznak egyetlen területhez. Írja le a helyzetet, és az
              ajánlatkérésben jelölje a „Segítséget kérek a meghatározásában” lehetőséget.
            </p>
          </div>
          <div className={styles.unsureActions}>
            <CtaLink service="segitseg">Segítséget kérek a meghatározásában</CtaLink>
            <Link href="/rolunk/" className="link-arrow">
              Kik állnak a tanácsadás mögött? <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Experience tinted compact />

      <section className="section section--tight" aria-labelledby="loc-title">
        <div className="container">
          <h2 id="loc-title" className={styles.smallTitle}>
            HR-tanácsadás térségenként
          </h2>
          <p className="measure muted">
            Országosan dolgozunk; három térségről külön oldalon írunk.
          </p>
          <ul className={styles.locList}>
            {LOCAL_PAGES.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-arrow">
                  {l.label} <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
