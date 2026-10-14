import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { CtaLink } from "@/components/CtaLink";
import { ArrowRight, Check } from "@/components/Icons";
import { Rich, plain } from "@/components/Rich";
import { FOUNDERS } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { SELF_CHECK_PATH } from "@/lib/site";
import heroImage from "@/images/hr-strategia.png";
import styles from "./page.module.css";

const HERO_LEAD =
  "Cégtulajdonos vezetőkkel dolgozunk 20–200 fős vállalkozásokban. Gyakorló cégvezetők vagyunk: **a saját cégünkben 25 éve kipróbált gyakorlattal** és tanult szakmai tudással segítünk abban, hogy a céged egyre kevésbé függjön a napi jelenlétedtől, te pedig azzal foglalkozhass, amit a leghasznosabbnak és legértékesebbnek tartasz.";

export const metadata = pageMetadata({
  title: "Működjön a cég a napi jelenléted nélkül is | O2 Tanácsadó",
  description: plain(HERO_LEAD),
  path: "/",
});

const HERO_FACTS = [
  "25 éve gyakorló cégvezetők vagyunk",
  "Minden ügyféllel személyesen dolgozunk, a fontos megbeszéléseken mindketten részt veszünk",
  "Egyszerre legfeljebb 12–15 állandó megbízóval dolgozunk",
];

const CONNECTION = [
  "Délután négy óra van, és a harmadik kolléga áll az ajtódban ugyanazzal a kérdéssel, amit tegnap már megbeszéltetek. Tudod a választ, mert a céget, az ügyfeleket és a számokat te ismered a legjobban. Megmondod, megint. Közben ott motoszkál benned, hogy ezt már nem akarod így csinálni.",
  "**Belefáradtál abba, hogy minden kérdéssel hozzád jönnek**, és a végén minden apróbb ügyben te döntesz. Szerinted a kollégáid nem elég önállóak. Szeretnél időt tölteni a szeretteiddel és magaddal, de fogalmad sincs, hogyan működne a cég az intenzív jelenléted nélkül.",
  "Ráadásul igazad is van: te tényleg gyorsabban és jobban döntesz náluk. Pont ez a szakmai erősséged tartja vissza a céget attól, hogy nélküled is önállóan menjen.",
  "Kívülről ez más formában látszik: sok a kilépő, nehéz szakembert találni, az osztályok és a kollégák között ismétlődő feszültségek vannak. **A háttérben legtöbbször az áll, hogy minden döntés a tulajdonoson megy át.**",
  "A cégben te vagy legfelül, és ott nincs kivel megbeszélni, ami nehéz. A kollégák ritkán jeleznek vissza a főnöküknek, ezért a saját hatásodat is nehéz látni, és azt is, hogy melyik meggyőződésedhez (például ahhoz, hogy valamit nem lehet másképp csinálni) ragaszkodsz folyamatosan.",
];

const QUESTIONS = [
  "Lehet olyan felállás, amiben a cég nélkülem még jobban működik?",
  "Van olyan működési elv, ami a kezdeti nehézségek után is motiváltan tartja a kollégákat?",
  "Ha átadom a döntési jogot, a felelősséget is átadom. Nem fognak nagyot hibázni?",
];

const FIRST_TALK = [
  "Elmondod, mi nehéz most a cégben, mi pedig figyelünk.",
  "Mi is mesélünk a saját cégünkről és a saját nehézségeinkről, hogy könnyebb legyen megnyílni.",
  "Közösen eldöntjük, van-e értelme együtt dolgozni.",
  "Egy-másfél órás személyes megbeszélés, elköteleződés nélkül.",
];

const CHANGES = [
  {
    title: "Az első eredmények 3–6 hónap után látszanak.",
    text: "Konkrét számot nem ígérünk, mert az eredmény a cég helyzetétől és a te elköteleződésedtől is függ.",
  },
  {
    title: "Nagyjából 1–1,5 év alatt hátrébb léphetsz az operatív munkából.",
    text: "Több időd marad a stratégiára, az üzletfejlesztésre és arra, ami számodra fontos. A hátrébb lépés mértéke cégenként más: lehet teljes átadás vagy generációváltás, de lehet kisebb lépés is.",
  },
  {
    title: "Utána sem hagyunk magadra.",
    text: "Az együttműködés az új vezetéssel folytatódik, mert a cég környezete folyamatosan változik, és a HR-t is hozzá kell igazítani.",
  },
];

const OFFERS = [
  {
    question: "Szeretnéd kívülről látni, mi történik a cégedben?",
    text: "**Céges diagnózis.** Interjúk a vezetőkkel és a kulcsemberekkel, beszélgetések veled, majd írásos összefoglaló, amit személyesen mutatunk be: erősségek, nehézségek, ki nem mondott, visszatérő problémák és javaslatok.",
    href: "/szervezetfejlesztes/",
  },
  {
    question: "Szeretnéd, hogy rendszeresen ott legyünk melletted?",
    text: "**Havi együttműködés.** Havonta a cégnél vagyunk: vezetői és HR-tanácsadás, egyéni és team coachingok, a folyamatok és a belső kommunikáció fejlesztése, a nem adminisztratív HR-feladatok átvétele.",
    href: "/hr-tanacsadas-kkv-knak/",
  },
  {
    question: "Adatokkal látnád, honnan jönnek a tünetek?",
    text: "**360 fokos értékelés.** Online kitölthető teszt, amiben a felettes, a beosztottak és a mellérendelt kollégák mondanak véleményt az érintett vezetőről, kollégáról.",
    href: "/szolgaltatasok/#ertekeles-360",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Nyitó szekció ---------------------------------------------------- */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <span className="o2-ring" style={{ width: 760, height: 760, left: -300, top: -260 }} aria-hidden="true" />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <h1 id="hero-title">Működjön a cég a napi jelenléted nélkül is</h1>
            <p className="lead">
              <Rich text={HERO_LEAD} />
            </p>
            <ul className={styles.heroFacts} aria-label="Röviden">
              {HERO_FACTS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className={styles.heroCtas}>
              <CtaLink />
            </div>
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

      {/* Kapcsolódás ------------------------------------------------------ */}
      <section className="section" aria-labelledby="connect-title">
        <div className={`container ${styles.connectGrid}`}>
          <div className="reveal">
            <h2 id="connect-title" className={styles.connectTitle}>
              Már megint hozzád fordultak, és már megint te döntöttél?
            </h2>
            <div className="prose">
              {CONNECTION.map((p) => (
                <p key={p}>
                  <Rich text={p} />
                </p>
              ))}
            </div>
          </div>
          <aside className={`${styles.questions} reveal`} aria-labelledby="questions-title">
            <h3 id="questions-title">Kérdések, amik ilyenkor megfogalmazódhatnak benned</h3>
            <ul>
              {QUESTIONS.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className={styles.answer}>
              Ezekre van válasz, és kipróbált: <strong>a saját cégünkben is így működik.</strong>
            </p>
          </aside>
        </div>
      </section>

      {/* Ajándék / belépő -------------------------------------------------- */}
      <section className="section section--paper2" aria-label="Ajándék és első lépés">
        <div className={`container ${styles.giftGrid}`}>
          <div className={`${styles.giftCard} ${styles.giftCardAccent} reveal`}>
            <p className="eyebrow">Önellenőrző kérdéssor</p>
            <h2 id="selfcheck-title" className={styles.giftTitle}>
              Mennyire függ a céged a személyes jelenlétedtől?
            </h2>
            <p>
              Tizenkét állítás, nagyjából 15 perc. Pontszámot és rövid, személyes értékelést kapsz arról,
              hol függ a cég tőled, és hol megy már nélküled is.
            </p>
            <Link href={SELF_CHECK_PATH} className={`btn btn--primary ${styles.giftBtn}`}>
              Kitöltöm a kérdéssort <ArrowRight />
            </Link>
          </div>

          <div className={`${styles.giftCard} reveal`}>
            <p className="eyebrow">Díjmentes személyes beszélgetés</p>
            <h2 id="gift-title" className={styles.giftTitle}>
              Ülj le velünk, és meséld el, mi viszi el most a legtöbb energiádat
            </h2>
            <ul className={styles.checkList}>
              {FIRST_TALK.map((t) => (
                <li key={t}>
                  <span className={styles.checkMark} aria-hidden="true">
                    <Check />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <CtaLink className={styles.giftBtn} />
          </div>
        </div>
      </section>

      {/* Rövid bio -------------------------------------------------------- */}
      <section className="section" aria-labelledby="bio-title">
        <div className={`container ${styles.foundersGrid}`}>
          <div className={`${styles.foundersIntro} reveal`}>
            <h2 id="bio-title">Üdvözlünk,</h2>
            <p>
              <strong>Tibor és Ádám vagyunk, gyakorló cégvezetők.</strong> 25 éve vezetjük a saját
              informatikai cégünket, az Onlinet Kft.-t. Hárman alapítottuk, mindhárman tulajdonosok
              vagyunk, minden fontos kérdésben közösen döntünk. A cég a tulajdonosok napi jelenléte
              nélkül is jól működik. Közben sokat tanultunk: közgazdaságtant, vállalati pénzügyeket,
              menedzsmentet, szervezetfejlesztést, coachingot, mentálhigiénét, pszichodráma-vezetést.{" "}
              <strong>A megélt gyakorlatot és a tanult tudást együtt adjuk át neked.</strong>
            </p>
            <Link href="/rolunk/" className="link-arrow">
              Többet rólunk <ArrowRight />
            </Link>
          </div>

          <ul className={styles.founders}>
            {FOUNDERS.map((f, i) => (
              <li key={f.name} className={`${styles.founder} reveal`} data-offset={i === 1}>
                <div className={styles.portrait}>
                  <Image src={f.image} alt={f.imageAlt} sizes="(max-width: 700px) 60vw, 300px" loading="lazy" />
                </div>
                <p className={styles.founderName}>{f.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Értéküzenet ------------------------------------------------------ */}
      <section className={`section section--ink section--tight ${styles.statement}`} aria-label="Értéküzenet">
        <span className="o2-ring" style={{ width: 420, height: 420, right: -160, top: -180 }} aria-hidden="true" />
        <div className="container">
          <p className={styles.statementText}>Amit javaslunk, azt a saját cégünkben 25 éve így csináljuk.</p>
        </div>
      </section>

      {/* Példa (vélemények helyett) --------------------------------------- */}
      <section className="section" aria-labelledby="example-title">
        <div className={`container ${styles.exampleGrid}`}>
          <h2 id="example-title" className="reveal">
            Egy példa, névtelenül
          </h2>
          <div className={`${styles.example} reveal`}>
            <p className={styles.exampleText}>
              Egy cégvezető már a hátralépését tervezte, és generációváltásban gondolkodott.{" "}
              <strong>12 hónap alatt a harmadára csökkentette a cégben töltött idejét.</strong> Az új
              vezető minden operatív kérdésben helyettesíteni tudta, a cég nyeresége pedig közben nőtt.
            </p>
            <p className={styles.exampleNote}>
              Ügyfeleinkről a titoktartás miatt csak név nélkül, felismerhető részletek nélkül
              beszélünk. Amit nekünk mondasz, az nálunk marad.
            </p>
          </div>
        </div>
      </section>

      {/* Top 3 ------------------------------------------------------------ */}
      <section className="section section--paper2" aria-labelledby="changes-title">
        <div className="container">
          <h2 id="changes-title" className={`${styles.blockTitle} reveal`}>
            Mi változik, ha a cég a napi jelenléted nélkül is működik?
          </h2>
          <ol className={styles.changes}>
            {CHANGES.map((c, i) => (
              <li key={c.title} className={`${styles.change} reveal`}>
                <span className={styles.changeNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Szolgáltatások --------------------------------------------------- */}
      <section className="section" id="szolgaltatasok" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className={`${styles.blockTitle} reveal`}>
            Ebben tudunk segíteni:
          </h2>
          <ul className={styles.svcGrid}>
            {OFFERS.map((o) => (
              <li key={o.href} className={`${styles.svcCard} reveal`}>
                <h3>{o.question}</h3>
                <p>
                  <Rich text={o.text} />
                </p>
                <Link href={o.href} className={`btn btn--ghost btn--sm ${styles.svcBtn}`}>
                  Ez érdekel <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kinek való ------------------------------------------------------- */}
      <section className="section section--paper2" aria-labelledby="fit-title">
        <div className={`container ${styles.fitGrid}`}>
          <h2 id="fit-title" className="reveal">
            Kiknek dolgozunk, és kiknek nem
          </h2>
          <div className="prose reveal">
            <p>
              Azokkal a cégtulajdonosokkal és/vagy cégvezetőkkel dolgozunk, akik hosszú távban
              gondolkodnak, tulajdonosi szemlélettel nézik a vállalatot és annak javát keresik.
              Nyereséges, 20–200 fős vállalkozásokról van szó, ahol a vezető akár tulajdonos is lehet.
              Multinacionális leányvállalat is lehet az ügyfelünk, ha az értékeink egyeznek és a
              vezetőnek van valódi mozgástere.
            </p>
            <p>
              Nem tudunk jól együtt dolgozni azzal, aki nem tud hosszú távra elköteleződni, vagy akinél
              a tulajdonosi szándék miatt gyakran változik a cél és az irány. Azzal sem, akinél a
              nyereségesebb működés elérése kimerül a költségek lefaragásában.
            </p>
            <p>
              Egyszerre legfeljebb 12–15 állandó megbízóval dolgozunk, mert a munka személyes jelenlétet
              igényel. Ketten vagyunk a cég arca, de nem kétszemélyes csapat vagyunk: ha a feladat
              kívánja, további kollégák is bekapcsolódnak.
            </p>
          </div>
        </div>
      </section>

      {/* Ajándék / belépő újra -------------------------------------------- */}
      <CtaBand
        id="again-title"
        title="Ha ismerős, amit olvastál, beszéljük meg személyesen"
        text="A megállapodás előtt akár két-három személyes beszélgetést is tartunk, mert **a bizalomhoz idő kell.** Ezek díjmentesek és nem járnak kötelező érvényű folytatással."
      />
    </>
  );
}
