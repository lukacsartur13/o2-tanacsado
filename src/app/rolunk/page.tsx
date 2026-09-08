import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { Experience } from "@/components/Experience";
import { ArrowRight } from "@/components/Icons";
import { FOUNDERS } from "@/lib/content";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { ADDRESS, CONTACT_EMAIL, LEGAL_NAME } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Rólunk – cégvezető HR-tanácsadók | O2 Tanácsadó",
  description:
    "Az O2 Tanácsadó Kft. alapítói gyakorló cégvezetők, akik saját vállalkozásuk kihívásaiból kiindulva lettek szervezetfejlesztők, coachok és trénerek.",
  path: "/rolunk/",
});

export default function AboutPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="about-h1">
        <span className="o2-ring" style={{ width: 560, height: 560, left: -220, top: -200 }} aria-hidden="true" />
        <div className={`container ${styles.headGrid}`}>
          <div>
            <p className="eyebrow">Rólunk</p>
            <h1 id="about-h1">Cégvezetők, akik HR-tanácsadóként dolgoznak</h1>
            <p className="lead">
              Több évtizedes stratégiai vezetői és kkv-tulajdonos ügyvezetői múlttal rendelkező
              HR-tanácsadók vagyunk. Azt csináljuk ügyfeleinknél, amit a saját cégünkben már
              végigjártunk.
            </p>
          </div>
          <dl className={styles.keyFacts}>
            <div>
              <dt>Kiknek</dt>
              <dd>20–200 fős kis- és középvállalatoknak</dd>
            </div>
            <div>
              <dt>Háttér</dt>
              <dd>Stratégiai vezetői és kkv-tulajdonosi tapasztalat</dd>
            </div>
            <div>
              <dt>Módszerek</dt>
              <dd>Tréning, coaching, mentoring, pszichodráma</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <div className={`${styles.storyText} reveal`}>
            <h2 id="story-title">Honnan indultunk</h2>
            <div className="prose">
              <p>
                Saját vállalkozásunk kihívásai és személyes fejlődésünk motivált abban, hogy a
                szervezetfejlesztés szerteágazó módszereit kutassuk, megtanuljuk és a gyakorlatban a
                vállalatunk hasznára fordítsuk. Alapítóink kkv-tulajdonos ügyvezetőként
                (onlinet.hu) szerezték vezetői tapasztalatuk jelentős részét.
              </p>
              <p>
                Így váltunk a tréneri és a coaching szakma gyakorlóivá, amit mentoring és
                pszichodráma gyakorlati képzésekkel gazdagítottunk. HR-szakmai tudásunkat
                folyamatosan fejlesztjük, hogy meg tudjunk küzdeni az aktuális piaci kihívásokkal.
              </p>
              <p>
                Az O2 Tanácsadó Kft. megalakulása organikus fejlődés eredménye: a sokféle
                szervezetfejlesztési helyzetben megszerzett tudás megosztásának igényéből nőtt ki.
              </p>
            </div>
          </div>
          <aside className={`${styles.mission} reveal`}>
            <p className="eyebrow">Missziónk</p>
            <p className={styles.missionText}>
              A hozzánk hasonló kis- és középvállalatokat hatékony és számukra releváns
              HR-megoldásokkal támogatni.
            </p>
            <Link href="/szolgaltatasok/" className="link-arrow">
              A négy szolgáltatási terület <ArrowRight />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="approach-title">
        <div className="container">
          <div className={styles.approachHead}>
            <p className="eyebrow">Szemléletünk</p>
            <h2 id="approach-title">Amiben hiszünk</h2>
          </div>
          <ol className={styles.approach}>
            <li className="reveal">
              <span aria-hidden="true">01</span>
              <h3>A cég céljaiból indulunk ki</h3>
              <p>
                A HR-munkának a vállalati célokat kell szolgálnia. Ezért a misszió, a vízió és a
                HR-stratégia tisztázása gyakran az első lépés.
              </p>
            </li>
            <li className="reveal">
              <span aria-hidden="true">02</span>
              <h3>Kkv-méretre szabott megoldások</h3>
              <p>
                A 20–200 fős cégeknek nem nagyvállalati HR-apparátusra van szükségük, hanem olyan
                megoldásokra, amelyeket a meglévő vezetők működtetni tudnak.
              </p>
            </li>
            <li className="reveal">
              <span aria-hidden="true">03</span>
              <h3>Diagnózis, aztán fejlesztés</h3>
              <p>
                A képzést és a szervezetfejlesztést igényfelmérés és a szervezet diagnózisa előzi
                meg, hogy a fejlesztési terv valós problémára válaszoljon.
              </p>
            </li>
            <li className="reveal">
              <span aria-hidden="true">04</span>
              <h3>Gyakorló vezetőként</h3>
              <p>
                Alapítóink ma is cégvezetők. A tanácsadás mögött saját vezetői döntések és
                szervezeti tapasztalat áll.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="founders-h2">
        <div className="container">
          <div className={styles.approachHead}>
            <p className="eyebrow">Alapítók</p>
            <h2 id="founders-h2">Akik a tanácsadás mögött állnak</h2>
          </div>
          <ul className={styles.founders}>
            {FOUNDERS.map((f) => (
              <li key={f.name} className={`${styles.founder} reveal`}>
                <div className={styles.portrait}>
                  <Image src={f.image} alt={f.imageAlt} sizes="(max-width: 700px) 60vw, 280px" loading="lazy" />
                </div>
                <div>
                  <h3>{f.name}</h3>
                  <p className={styles.role}>{f.role}</p>
                  <ul className={styles.facts}>
                    {f.facts.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Experience tinted />

      <section className={`section section--ink ${styles.company}`} aria-labelledby="company-title">
        <span className="o2-ring" style={{ width: 520, height: 520, right: -200, top: -240 }} aria-hidden="true" />
        <div className={`container ${styles.companyGrid}`}>
          <div>
            <p className="eyebrow">Cégadatok</p>
            <h2 id="company-title">{LEGAL_NAME}</h2>
            <address className={styles.address}>
              {ADDRESS.full}
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </address>
          </div>
          <div className={styles.companyCta}>
            <p className="lead">
              Beszéljünk a cége helyzetéről. Az ajánlatkérés nem jár kötelezettséggel.
            </p>
            <CtaLink variant="white" />
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
