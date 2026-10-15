import type { ReactNode } from "react";
import { CtaBand } from "./CtaBand";
import { CtaLink } from "./CtaLink";
import { FaqList, faqPageLd } from "./FaqList";
import { Check } from "./Icons";
import { Rich, plain } from "./Rich";
import type { OfferPageData } from "@/lib/offers";
import { breadcrumbLd, jsonLd } from "@/lib/seo";
import { LEGAL_NAME, SITE_URL } from "@/lib/site";
import styles from "./ServicePage.module.css";

function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`${styles.checkList} ${className ?? ""}`}>
      {items.map((i) => (
        <li key={i}>
          <span className={styles.checkMark} aria-hidden="true">
            <Check />
          </span>
          <span>
            <Rich text={i} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Az új szövegű szolgáltatási oldalak sablonja. A szekciók sorrendje a
 * szövegdokumentumot követi: helyzet, (mit tartalmaz), hogyan zajlik,
 * (mire számíthatsz), (gyakori kérdések), első beszélgetés.
 */
export function OfferPage({ page }: { page: OfferPageData }) {
  const canonical = `${SITE_URL}${page.path}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: page.label,
    serviceType: page.serviceType,
    description: plain(page.lead),
    url: canonical,
    inLanguage: "hu",
    provider: { "@id": `${SITE_URL}/#organization`, "@type": "ProfessionalService", name: LEGAL_NAME },
    areaServed: { "@type": "Country", name: "Magyarország" },
    audience: {
      "@type": "BusinessAudience",
      name: "20–200 fős vállalkozások cégtulajdonos vezetői",
    },
  };

  // A szekciók felváltva fehér és halványszürke háttéren jelennek meg.
  const sections: ReactNode[] = [];
  const tone = () => (sections.length % 2 === 1 ? "section--paper2" : "");

  sections.push(
    <section key="helyzet" className={`section ${tone()}`} aria-labelledby="situation-title">
      <div className={`container ${styles.problemGrid}`}>
        <div className={`${styles.problemText} reveal`}>
          <p className="eyebrow">A helyzet</p>
          <h2 id="situation-title">{page.situation.title}</h2>
          <div className="prose">
            {page.situation.paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
        <div className={`${styles.forWhom} reveal`}>
          <h3>{page.situation.list.title}</h3>
          <CheckList items={page.situation.list.items} />
          {page.situation.list.note && <p className={styles.boxNote}>{page.situation.list.note}</p>}
        </div>
      </div>
    </section>,
  );

  if (page.contents) {
    const c = page.contents;
    sections.push(
      <section key="tartalom" className={`section ${tone()}`} aria-labelledby="contents-title">
        <div className={`container ${styles.extraGrid}`}>
          <div className="reveal">
            <p className="eyebrow">Mit tartalmaz</p>
            <h2 id="contents-title" className={styles.extraTitle}>
              {c.title}
            </h2>
            <CheckList items={c.items} />
            <div className={`prose ${styles.afterList}`}>
              {c.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {c.box && (
            <div className={`${styles.box} reveal`}>
              <h3>{c.box.title}</h3>
              <p>
                <Rich text={c.box.text} />
              </p>
            </div>
          )}
        </div>
      </section>,
    );
  }

  sections.push(
    <section key="folyamat" id="folyamat" className={`section ${tone()}`} aria-labelledby="process-title">
      <div className="container">
        <div className={`${styles.split} reveal`}>
          <div>
            <p className="eyebrow">Hogyan zajlik</p>
            <h2 id="process-title">{page.process.title}</h2>
          </div>
        </div>
        {page.process.steps && (
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
        )}
        {page.process.paragraphs && (
          <div className="prose reveal">
            {page.process.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
        {page.process.note && <p className={`${styles.processNote} reveal`}>{page.process.note}</p>}
      </div>
    </section>,
  );

  if (page.expect) {
    const e = page.expect;
    sections.push(
      <section key="eredmeny" className={`section ${tone()}`} aria-labelledby="expect-title">
        <div className={`container ${styles.expectGrid}`}>
          <div className="reveal">
            <p className="eyebrow">Mire számíthatsz</p>
            <h2 id="expect-title">{e.title}</h2>
            {e.paragraphs?.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
            {e.caveat && <p className={styles.expectCaveat}>{e.caveat}</p>}
          </div>
          {e.items && <CheckList items={e.items} className={`${styles.expectList} reveal`} />}
          {e.box && (
            <div className={`${styles.box} ${styles.boxAccent} reveal`}>
              <h3>{e.box.title}</h3>
              <p>
                <Rich text={e.box.text} />
              </p>
            </div>
          )}
        </div>
      </section>,
    );
  }

  if (page.faq) {
    sections.push(
      <section key="gyik" id="gyik" className={`section ${tone()}`} aria-labelledby="faq-title">
        <div className={`container ${styles.faqGrid}`}>
          <div className={`${styles.faqIntro} reveal`}>
            <p className="eyebrow">Gyakori kérdések</p>
            <h2 id="faq-title">Amit a legtöbben megkérdeznek</h2>
          </div>
          <div className="reveal">
            <FaqList items={page.faq} />
          </div>
        </div>
      </section>,
    );
  }

  return (
    <>
      <section className={styles.head} aria-labelledby="service-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -300 }} aria-hidden="true" />
        <div className={`container ${styles.headGrid}`}>
          <div>
            <h1 id="service-h1">
              <span className="eyebrow">{page.eyebrow}</span> {page.h1}
            </h1>
            <p className="lead">
              <Rich text={page.lead} />
            </p>
            <div className={styles.headCtas}>
              <CtaLink />
            </div>
          </div>
          <aside className={styles.headAside} aria-label="Röviden">
            <ul className={styles.quickFacts}>
              {page.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {sections}

      <CtaBand id="cta-title" title={page.cta.title} text={page.cta.text} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceLd) }} />
      {page.faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqPageLd(page.faq)) }} />
      )}
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
