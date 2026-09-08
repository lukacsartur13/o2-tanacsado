import Link from "next/link";
import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import { Experience } from "./Experience";
import { FaqList, faqPageLd } from "./FaqList";
import { ArrowRight, Check } from "./Icons";
import { QuoteSection } from "./QuoteSection";
import { POST_BY_SLUG } from "@/lib/blog";
import { SERVICE_BY_PATH, type ServicePageData } from "@/lib/services";
import { breadcrumbLd, jsonLd } from "@/lib/seo";
import { COVERAGE_STATEMENT, LEGAL_NAME, SITE_URL } from "@/lib/site";
import styles from "./ServicePage.module.css";

/** Kapcsolódó oldal címkéje: szolgáltatási oldal vagy a /szolgaltatasok/ horgonya. */
function relatedLabel(path: string) {
  const svc = SERVICE_BY_PATH[path];
  if (svc) return svc.label;
  if (path === "/szolgaltatasok/#toborzas") return "Toborzás és kiválasztás";
  if (path === "/szolgaltatasok/#munkakorok") return "Munkakörök és szervezeti struktúra";
  if (path === "/szolgaltatasok/#hr-strategia") return "HR-stratégia";
  return "Szolgáltatások";
}

interface Props {
  page: ServicePageData;
  /** Oldalspecifikus blokk a problémafelvetés után (pl. a munkaköri leírás minta). */
  children?: ReactNode;
}

export function ServicePage({ page, children }: Props) {
  const posts = page.posts.map((s) => POST_BY_SLUG[s]).filter(Boolean);
  const canonical = `${SITE_URL}${page.path}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: page.label,
    serviceType: page.serviceType,
    description: page.description,
    url: canonical,
    inLanguage: "hu",
    provider: { "@id": `${SITE_URL}/#organization`, "@type": "ProfessionalService", name: LEGAL_NAME },
    areaServed: { "@type": "Country", name: "Magyarország" },
    availableChannel: [
      { "@type": "ServiceChannel", name: "Online", serviceUrl: canonical },
      { "@type": "ServiceChannel", name: "Helyszíni, a megbízó telephelyén" },
    ],
    audience: {
      "@type": "BusinessAudience",
      name: "20–200 fős kis- és középvállalkozások vezetői és tulajdonosai",
    },
  };

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      <section className={styles.head} aria-labelledby="service-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -300 }} aria-hidden="true" />
        <div className={`container ${styles.headGrid}`}>
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 id="service-h1">{page.h1}</h1>
            <p className="lead">{page.lead}</p>
            <div className={styles.headCtas}>
              <CtaLink service={page.interest} local>
                {page.cta}
              </CtaLink>
              <a href="#folyamat" className="btn btn--ghost">
                Hogyan dolgozunk?
              </a>
            </div>
          </div>
          <aside className={styles.headAside} aria-label="Országos működés">
            <p className={styles.coverage}>{COVERAGE_STATEMENT}</p>
            <ul className={styles.quickFacts}>
              <li>20–200 fős kkv-knak</li>
              <li>Online és helyszínen, országosan</li>
              <li>Gyakorló cégvezető tanácsadók</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" aria-labelledby="problem-title">
        <div className={`container ${styles.problemGrid}`}>
          <div className={`${styles.problemText} reveal`}>
            <p className="eyebrow">A helyzet</p>
            <h2 id="problem-title">{page.problem.title}</h2>
            <div className="prose">
              {page.problem.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className={`${styles.forWhom} reveal`}>
            <h3>{page.forWhom.title}</h3>
            {page.forWhom.intro && <p className={styles.forWhomIntro}>{page.forWhom.intro}</p>}
            <ul className={styles.checkList}>
              {page.forWhom.items.map((i) => (
                <li key={i}>
                  <span className={styles.checkMark} aria-hidden="true">
                    <Check />
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {children}

      {/* ---------------------------------------------------------------- */}
      <section className={`section section--paper2 ${styles.symptoms}`} aria-labelledby="symptoms-title">
        <span className="o2-disc" style={{ width: 460, height: 460, right: -200, bottom: -200 }} aria-hidden="true" />
        <div className={`container ${styles.symptomsGrid}`}>
          <div className={`${styles.symptomsIntro} reveal`}>
            <p className="eyebrow">Tünetek</p>
            <h2 id="symptoms-title">{page.symptoms.title}</h2>
            <p className="lead">
              {page.symptoms.intro ??
                "Ha ezek közül legalább kettő ismerős, érdemes egy első egyeztetésen átbeszélni a helyzetet."}
            </p>
            <CtaLink service={page.interest} local variant="ghost">
              Beszéljük át a helyzetet
            </CtaLink>
          </div>
          <ol className={styles.symptomList}>
            {page.symptoms.items.map((s, i) => (
              <li key={s} className={`${styles.symptom} reveal`}>
                <span className={styles.symptomNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" id="folyamat" aria-labelledby="process-title">
        <div className="container">
          <div className={`${styles.split} reveal`}>
            <div>
              <p className="eyebrow">Az együttműködés folyamata</p>
              <h2 id="process-title">{page.process.title}</h2>
            </div>
            {page.process.intro && <p className="lead">{page.process.intro}</p>}
          </div>
          <ol className={styles.steps}>
            {page.process.steps.map((st, i) => (
              <li key={st.title} className={`${styles.step} reveal`}>
                <span className={styles.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className={`section section--ink ${styles.results}`} aria-labelledby="results-title">
        <span className="o2-ring" style={{ width: 520, height: 520, left: -220, top: -240 }} aria-hidden="true" />
        <div className={`container ${styles.resultsGrid}`}>
          <div className="reveal">
            <p className="eyebrow">Várható eredmények</p>
            <h2 id="results-title">{page.results.title}</h2>
            <p className="lead">{page.results.intro}</p>
            <p className={styles.caveat}>{page.results.caveat}</p>
          </div>
          <ul className={`${styles.resultList} reveal`}>
            {page.results.items.map((r) => (
              <li key={r}>
                <span className={styles.resultMark} aria-hidden="true">
                  <Check />
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {page.extraSections?.map((x) => (
        <section key={x.id} id={x.id} className="section" aria-labelledby={`${x.id}-title`}>
          <div className={`container ${styles.extraGrid}`}>
            <div className="reveal">
              <h2 id={`${x.id}-title`} className={styles.extraTitle}>
                {x.title}
              </h2>
              <div className="prose">
                {x.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            {x.bullets && (
              <ul className={`${styles.checkList} ${styles.extraList} reveal`}>
                {x.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.checkMark} aria-hidden="true">
                      <Check />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <Experience tinted compact />

      {/* ---------------------------------------------------------------- */}
      <section className="section" id="gyik" aria-labelledby="faq-title">
        <div className={`container ${styles.faqGrid}`}>
          <div className={`${styles.faqIntro} reveal`}>
            <p className="eyebrow">Gyakori kérdések</p>
            <h2 id="faq-title">Amit a legtöbben megkérdeznek</h2>
            <p className={styles.faqText}>
              Ha a kérdésére nem talál választ, írja meg az egyeztetéskérésben. Minden megkeresésre
              válaszolunk.
            </p>
            <CtaLink service={page.interest} local variant="ghost" size="sm">
              Kérdésem van
            </CtaLink>
          </div>
          <div className="reveal">
            <FaqList items={page.faq} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className={`section section--tight section--paper2 ${styles.related}`} aria-labelledby="related-title">
        <div className={`container ${styles.relatedGrid}`}>
          <div>
            <h2 id="related-title" className={styles.relatedTitle}>
              Kapcsolódó szolgáltatások
            </h2>
            <ul className={styles.relatedList}>
              {page.related.map((r) => (
                <li key={r}>
                  <Link href={r} className="link-arrow">
                    {relatedLabel(r)} <ArrowRight />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/szolgaltatasok/" className="link-arrow">
                  Minden szolgáltatás <ArrowRight />
                </Link>
              </li>
            </ul>
          </div>
          {posts.length > 0 && (
            <div>
              <h2 className={styles.relatedTitle}>Kapcsolódó cikkek</h2>
              <ul className={styles.postList}>
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}/`} className={styles.postLink}>
                      <span className={styles.postTopic}>{p.topic}</span>
                      <span className={styles.postTitle}>{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <QuoteSection title={page.form.title} text={page.form.text} defaultInterests={[page.interest].flat()} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqPageLd(page.faq)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Szolgáltatások", path: "/szolgaltatasok/" },
              { name: page.label, path: page.path },
            ]),
          ),
        }}
      />
    </>
  );
}
