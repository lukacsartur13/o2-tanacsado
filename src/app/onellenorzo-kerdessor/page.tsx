import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { SelfCheck } from "@/components/SelfCheck";
import { FOUNDERS } from "@/lib/content";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { SELF_CHECK_ANCHOR, SELF_CHECK_PATH } from "@/lib/site";
import styles from "./page.module.css";

const TITLE = "Tudd meg 15 perc alatt, mennyire függ a céged a napi jelenlétedtől";
const SUBTITLE =
  "Tizenkét állítás, rövid, személyes értékelés. Cégvezetőknek, akik szeretnék, hogy a cég az ő napi jelenlétük nélkül is eredményesen működjön.";

export const metadata = pageMetadata({
  title: "Önellenőrző kérdéssor cégvezetőknek | O2 Tanácsadó",
  description: SUBTITLE,
  path: SELF_CHECK_PATH,
});

const BENEFITS = [
  "Végigmész tizenkét állításon, és megnézed, melyik igaz a te cégedre.",
  "Pontszámot kapsz, és egy rövid, személyes hangú értékelést arról, mit jelent.",
  "Látod, melyik két-három ponton múlik a legtöbb, vagyis hol érdemes elkezdeni.",
  "E-mailben is megkapod az eredményedet, hogy később is visszanézhesd.",
  "Ha szeretnéd, a végén személyesen is átbeszélhetjük, elköteleződés nélkül.",
];

export default function SelfCheckPage() {
  return (
    <>
      {/* Főcím ------------------------------------------------------------ */}
      <section className={styles.head} aria-labelledby="selfcheck-h1">
        <span className="o2-ring" style={{ width: 640, height: 640, right: -260, top: -300 }} aria-hidden="true" />
        <div className={`container ${styles.headInner}`}>
          <h1 id="selfcheck-h1">{TITLE}</h1>
          <p className="lead">{SUBTITLE}</p>
        </div>
      </section>

      {/* Nyitó szekció, űrlap, kérdéssor ---------------------------------- */}
      <section className={`section ${styles.main}`} aria-labelledby="selfcheck-h1">
        <div className="container">
          <SelfCheck
            intro={
              <>
                <p className={styles.scene}>
                  Délután négy óra van, és a harmadik kolléga áll az ajtódban ugyanazzal a kérdéssel.
                  Tudod a választ, megmondod, és közben ott motoszkál benned, hogy ezt már nem akarod így
                  csinálni.
                </p>
                <p>
                  Ez a kérdéssor azt segít megnézni, hol függ a cég a te személyes jelenlétedtől, és hol
                  megy már nélküled is. Magadnak töltöd ki, az eredményt azonnal látod.
                </p>
                <ul className={styles.benefits}>
                  {BENEFITS.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            }
          />
        </div>
      </section>

      {/* Bio -------------------------------------------------------------- */}
      <section className="section section--paper2" aria-labelledby="bio-title">
        <div className={`container ${styles.bioGrid}`}>
          <div>
            <h2 id="bio-title">Tibor és Ádám vagyunk</h2>
            <p className={styles.bioText}>
              Az Onlinet Kft.-ben 25 éve hárman vagyunk tulajdonosok, és minden fontos döntést közösen
              hozunk. A cég a napi jelenlétünk nélkül is jól működik.
            </p>
            <div className={styles.quotes}>
              {FOUNDERS.map((f) => (
                <figure key={f.name} className={styles.quote}>
                  <div className={styles.quotePortrait}>
                    <Image src={f.image} alt={f.imageAlt} sizes="72px" loading="lazy" />
                  </div>
                  <div>
                    <figcaption className={styles.quoteName}>{f.firstName}:</figcaption>
                    <blockquote>
                      <p>„{f.story}”</p>
                    </blockquote>
                  </div>
                </figure>
              ))}
            </div>
            <p className={styles.bioText}>
              Közben sokat tanultunk: közgazdaságtant, vállalati pénzügyeket, menedzsmentet,
              szervezetfejlesztést, coachingot, mentálhigiénét, pszichodráma-vezetést. A megélt
              gyakorlatot és a tanult tudást együtt adjuk át a cégtulajdonos vezetőknek. Ezt a kérdéssort
              is ebből a tapasztalatból állítottuk össze.
            </p>
            <p className={styles.bioText}>
              Ketten vagyunk az O2 Tanácsadó arca, de nem kétszemélyes csapat vagyunk: ha a feladat
              kívánja, további kollégák is bekapcsolódnak.
            </p>
          </div>
        </div>
      </section>

      {/* Második CTA ------------------------------------------------------ */}
      <CtaBand
        id="again-title"
        title="Kezdd el most a kérdéssort"
        text="Tizenkét állítás, nagyjából 15 perc. Az eredményt azonnal látod."
        action={
          <a href={`#${SELF_CHECK_ANCHOR}`} className="btn btn--white">
            Megnyitom a kérdéssort <ArrowRight />
          </a>
        }
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Önellenőrző kérdéssor", path: SELF_CHECK_PATH },
            ]),
          ),
        }}
      />
    </>
  );
}
