import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "./CtaLink";
import { ArrowRight, Check } from "./Icons";
import { QuoteSection } from "./QuoteSection";
import { FOUNDERS, SERVICES } from "@/lib/content";
import { LOCAL, type LocalPage } from "@/lib/local";
import { breadcrumbLd, jsonLd } from "@/lib/seo";
import { ADDRESS, LEGAL_NAME, SERVICE_PAGES, SITE_URL } from "@/lib/site";
import styles from "./LocalLanding.module.css";

export function LocalLanding({ page }: { page: LocalPage }) {
  const others = LOCAL.filter((l) => l.slug !== page.slug);
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.description,
    url: `${SITE_URL}${page.path}`,
    inLanguage: "hu",
    about: { "@type": "Service", serviceType: "HR-tanácsadás", provider: { "@id": `${SITE_URL}/#organization` } },
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "O2 Tanácsadó" },
  };

  return (
    <>
      <section className={styles.head} aria-labelledby="local-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -300 }} aria-hidden="true" />
        <div className={`container ${styles.headGrid}`}>
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 id="local-h1">{page.h1}</h1>
            <p className="lead">{page.intro[0]}</p>
            <div className={styles.headCtas}>
              <CtaLink local />
              <Link href="/szolgaltatasok/" className="btn btn--ghost">
                Szolgáltatások
              </Link>
            </div>
          </div>
          <div className={styles.headAside}>
            <p className={styles.headAsideText}>{page.intro[1]}</p>
            <ul className={styles.quickFacts}>
              <li>20–200 fős kkv-knak</li>
              <li>Négy szolgáltatási terület</li>
              <li>Gyakorló cégvezető tanácsadók</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="local-services-title">
        <div className="container">
          <div className={`${styles.split} reveal`}>
            <div>
              <p className="eyebrow">Szolgáltatások</p>
              <h2 id="local-services-title">Miben segítünk {page.city} és {page.county} cégeinek?</h2>
            </div>
            <p className="lead">
              Mind a négy terület elérhető külön és együtt is, online és igény szerint helyszínen.
              A részleteket a szolgáltatások oldalon írjuk le, itt azt emeljük ki, mi lehet a
              térségben különösen releváns.
            </p>
          </div>
          <ol className={styles.services}>
            {SERVICES.map((s) => (
              <li key={s.id} className={`${styles.service} reveal`}>
                <div className={styles.serviceImg} aria-hidden="true">
                  <Image src={s.image} alt="" sizes="120px" loading="lazy" />
                </div>
                <div className={styles.serviceBody}>
                  <p className={styles.serviceNum} aria-hidden="true">
                    {s.num}
                  </p>
                  <h3>
                    <Link href={`/szolgaltatasok/#${s.id}`}>{s.title}</Link>
                  </h3>
                  <p className={styles.serviceLead}>{s.lead}</p>
                  <p className={styles.serviceNote}>{page.serviceNotes[s.id]}</p>
                  <div className={styles.serviceLinks}>
                    <CtaLink service={s.id} local variant="ghost" size="sm">
                      Egyeztetést kérek erre
                    </CtaLink>
                    <Link href={`/szolgaltatasok/#${s.id}`} className="link-arrow">
                      Részletek <ArrowRight />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section section--paper2 ${styles.contexts}`} aria-labelledby="ctx-title">
        <span className="o2-disc" style={{ width: 460, height: 460, left: -200, bottom: -200 }} aria-hidden="true" />
        <div className={`container ${styles.ctxGrid}`}>
          <div className={`${styles.ctxIntro} reveal`}>
            <p className="eyebrow">Térségi helyzetek</p>
            <h2 id="ctx-title">{page.contextTitle}</h2>
            <p className="lead">
              Nem ígérünk kész recepteket. Ezek olyan helyzetek, amelyek a térség kkv-inál
              különösen relevánsak lehetnek, és amelyekben támogatást tudunk adni.
            </p>
          </div>
          <ol className={styles.ctxList}>
            {page.contexts.map((c) => (
              <li key={c.title} className={`${styles.ctx} reveal`}>
                <span className={styles.ctxMark} aria-hidden="true">
                  <Check />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link href={`/szolgaltatasok/#${c.service}`} className={styles.ctxLink}>
                    Kapcsolódó szolgáltatás <ArrowRight />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="area-title">
        <div className={`container ${styles.areaGrid}`}>
          <div className={`${styles.areaText} reveal`}>
            <p className="eyebrow">Szolgáltatási terület</p>
            <h2 id="area-title">{page.areaTitle}</h2>
            <div className="prose">
              {page.area.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className={styles.otherRegions}>
              Országosan dolgozunk, online és igény szerint helyszínen. Részletes szolgáltatási oldalaink:{" "}
              {SERVICE_PAGES.map((s, i) => (
                <span key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                  {i < SERVICE_PAGES.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <p className={styles.otherRegions}>
              Más térségekben is dolgozunk:{" "}
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={o.path}>{o.label}</Link>
                  {i < others.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>

          <div className={`${styles.trust} reveal`}>
            <p className="eyebrow">Kik állnak mögötte?</p>
            <ul className={styles.founders}>
              {FOUNDERS.map((f) => (
                <li key={f.name}>
                  <div className={styles.portrait}>
                    <Image src={f.image} alt={f.imageAlt} sizes="96px" loading="lazy" />
                  </div>
                  <div>
                    <strong>{f.name}</strong>
                    <br />
                    <span className="muted">{f.role}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.trustText}>
              Több évtizedes stratégiai vezetői és kkv-tulajdonos ügyvezetői tapasztalattal
              rendelkező HR-tanácsadók, akik a tréneri, coaching és mentoring módszereket saját
              cégük fejlesztésében kezdték alkalmazni.
            </p>
            <p className={styles.trustText}>
              <strong>{LEGAL_NAME}</strong> · {ADDRESS.full}
            </p>
            <Link href="/rolunk/" className="link-arrow">
              Bővebben rólunk <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <QuoteSection title={page.formTitle} text={page.formText} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: page.label, path: page.path },
            ]),
          ),
        }}
      />
    </>
  );
}
