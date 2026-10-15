/**
 * Az új szövegű szolgáltatási oldalak tartalma, az „O2 Tanácsadó – weboldal
 * szövegei” dokumentum (2026. október) szerint, átírás nélkül. A **...** közötti
 * rész a dokumentumban félkövér. Az útvonalak a régiek maradtak; a dokumentum
 * által javasolt új címek (/havi-egyuttmukodes, /ceges-diagnozis) csak javaslatok.
 */
import type { Faq, ProcessStep } from "./services";

export type OfferSlug = "havi-egyuttmukodes" | "ceges-diagnozis" | "vezetoi-coaching" | "team-coaching";

interface Box {
  title: string;
  text: string;
}

export interface OfferPageData {
  slug: OfferSlug;
  path: string;
  /** Rövid név hivatkozásokhoz, morzsamenühöz, schema.org-hoz. */
  label: string;
  /** SEO title (teljes, márkanévvel): keresett kifejezéssel, csak a keresőben és a böngészőfülön látszik. */
  title: string;
  /** Meta description: az oldal változatlan mondataiból, legfeljebb ~160 karakter. */
  description: string;
  serviceType: string;
  /** Kis címke a főcím fölött; a H1 része, ezért itt van a keresett kifejezés. */
  eyebrow: string;
  h1: string;
  lead: string;
  facts: string[];
  /** „A helyzet” szekció: szöveg és mellette a lista doboza. */
  situation: {
    title: string;
    paragraphs: string[];
    list: { title: string; items: string[]; note?: string };
  };
  /** „Mit tartalmaz” szekció (céges diagnózis). */
  contents?: { title: string; items: string[]; paragraphs: string[]; box?: Box };
  /** „Hogyan zajlik” szekció: lépések vagy bekezdések. */
  process: { title: string; steps?: ProcessStep[]; paragraphs?: string[]; note?: string };
  /** „Mire számíthatsz” szekció. */
  expect?: { title: string; paragraphs?: string[]; items?: string[]; caveat?: string; box?: Box };
  faq?: Faq[];
  cta: { title: string; text: string };
}

export const OFFER_PAGES: OfferPageData[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "havi-egyuttmukodes",
    path: "/hr-tanacsadas-kkv-knak/",
    label: "Havi együttműködés",
    title: "HR-tanácsadás kkv-knak havi együttműködésben | O2 Tanácsadó",
    description:
      "Havonta rendszeresen, személyesen ott vagyunk a cégnél. Nem építünk kicsiben nagyvállalati HR-rendszert.",
    serviceType: "Vezetői és HR-tanácsadás",
    eyebrow: "HR-tanácsadás · országosan",
    h1: "Havi együttműködés: hogyan léphetsz hátrébb az operatív munkától úgy, hogy a cég megy tovább?",
    lead:
      "Havonta rendszeresen, személyesen ott vagyunk a cégnél. Átvesszük tőled a nem adminisztratív jellegű HR-feladatokat, és tanácsadással, szervezetfejlesztéssel, vezetői és team coachinggal segítünk abban, hogy a cég nélküled is önállóan működjön.",
    facts: [
      "20–200 fős cégeknek",
      "Országosan, a cégnél személyesen, vagy esetenként online is",
      "Gyakorló cégvezető-tanácsadók segítségével",
    ],
    situation: {
      title: "Amikor a HR is hozzád kerül",
      paragraphs: [
        "A legtöbb ekkora méretű vállalatnál gyakran nincs érdemi HR-részleg, legfeljebb HR-adminisztráció. Van, ahol van HR-vezető és egy-két kolléga is akár, de ők sem tudnak minden HR-kérdést egyedül ellátni. A munkaerő kiválasztás, -megtartás, -fejlesztés, -motiváció és a vezetők, társosztályok közti viták így visszatérően a te idődet viszik el.",
        "Nem építünk kicsiben nagyvállalati HR-rendszert. Megnézzük, melyik néhány döntés viszi előre, vagy tartja vissza a céget, és arra olyan megoldást adunk, amit a meglévő vezetők fenn tudnak tartani.",
      ],
      list: {
        title: "Mit tartalmaz a havi munka?",
        items: [
          "**Vezetői és HR-tanácsadást:** hozzáértő beszélgetőtárs neked és a kulcsvezetőknek.",
          "**Egyéni és team coachingokat:** veled és a vezetőkkel négyszemközt, a vezetői csapattal közösen.",
          "**A szervezeti folyamatok újragondolását:** döntési szintek, hatáskörök, értekezletek.",
          "**A belső kommunikáció javítását:** rendszeres tájékoztatások, belső meetingek, négyszemközti egyeztetések vezető és beosztott között.",
          "**Egyéb, nem adminisztratív HR-feladatok átvételét megegyezés szerint.**",
        ],
        note: "Akkor sem hagyjuk abba, amikor hátrébb és/vagy előbbre léptél. A cég környezete folyamatosan változik, a HR-t is mindig hozzá kell igazítani, és ezt az új vezetéssel együtt csináljuk tovább.",
      },
    },
    process: {
      title: "A bizalom a beszélgetésekből épül",
      steps: [
        {
          title: "Személyes beszélgetések",
          text: "A megállapodás előtt akár két-három minőségi személyes konzultáció is van. Közben mi is mesélünk a saját cégünkről és a saját nehézségeinkről, hogy neked is könnyebb legyen a sajátodról beszélni.",
        },
        {
          title: "Céges diagnózis",
          text: "Kívülről megnézzük, hol tart a cég, és mit nehéz belülről észrevenni. Erről külön oldalon írunk.",
        },
        {
          title: "Havi rendszeres jelenlét",
          text: "Minden hónapban megbeszéljük, mi a következő lépés, és ki viszi végig.",
        },
        {
          title: "Hátrébb és/vagy előrébb lépés",
          text: "Nagyjából 1–1,5 év alatt fokozatosan kiléphetsz az operatív munkából, amit már nem szeretsz. A hátrébb lépés mértéke cégenként más: lehet részleges- vagy teljes átadás, generációváltás, de az is, hogy mostantól csak a stratégiával és az üzletfejlesztéssel foglalkozol.",
        },
      ],
    },
    expect: {
      title: "Az első eredmények 3–6 hónap után látszanak",
      paragraphs: [
        "Konkrét százalékot nem ígérünk, mert az eredmény a cég helyzetétől és a te elköteleződésedtől is függ. Az irány viszont az, hogy a cég egyre kevésbé függ a napi jelenlétedtől, neked pedig több időd marad a stratégiára, az üzletfejlesztésre, a családodra és magadra.",
      ],
      box: {
        title: "Díj és kapacitás",
        text: "A havi együttműködés **490 000 Ft nettótól** indul, a ráfordított havi óraszámtól és a bevont vezetők számától függően. Egyszerre legfeljebb 12–15 állandó megbízóval dolgozunk, mert a munka személyes jelenlétet igényel.",
      },
    },
    faq: [
      {
        q: "Mennyi idő múlva léphetek hátrébb?",
        a: "Az első látható eredmények 3–6 hónap után jelentkeznek, a fokozatos feladat átadás és újragondolás nagyjából 1–1,5 év. Cégenként eltér, ezért a személyes beszélgetéseken a te cégedre vetítve beszéljük meg.",
      },
      {
        q: "Mi lesz, ha már hátrébb léptem?",
        a: "Az együttműködés folytatódik az új vezetéssel. A cég nem áll meg, a HR-t pedig hozzá kell igazítani a változó környezethez.",
      },
      {
        q: "Van garancia az eredményre?",
        a: "Formális garanciát nem adunk, mert nem tudunk, hisz rajtad múlik a legnagyobb része. Az együttműködés bizalomra épül, ezért a megállapodás előtt több személyes beszélgetést tartunk, hogy mindkét oldal lássa, jó-e a közös munka.",
      },
      {
        q: "Ki dolgozik majd a cégeddel?",
        a: "Mi ketten, Tibor és Ádám, mindig és személyesen. A négyszemközti tanácsadói és coaching alkalmakat külön-külön tartjuk. Ha a feladat úgy kívánja, további kollégákat is bevonunk.",
      },
    ],
    cta: {
      title: "Első beszélgetés",
      text: "Mondd el röviden, mi viszi el most a legtöbb energiádat. A találkozó díjmentes és nem jár elköteleződéssel.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ceges-diagnozis",
    path: "/szervezetfejlesztes/",
    label: "Céges diagnózis",
    title: "Szervezetfejlesztés és céges diagnózis | O2 Tanácsadó",
    description:
      "Cégtulajdonosként ritkán kapsz nyílt, kívülről érkező képet arról, hogyan működik a céged.",
    serviceType: "Céges diagnózis, szervezetfejlesztés",
    eyebrow: "Szervezetfejlesztés · országosan",
    h1: "Céges diagnózis: mit lát egy külsős, amit te belülről nem?",
    lead:
      "Cégtulajdonosként ritkán kapsz nyílt, kívülről érkező képet arról, hogyan működik a céged. A diagnózis ezt adja: interjúk és beszélgetések lefolytatása vezetőkkel és kulcsdolgozókkal, majd ebből egy írásos összefoglaló, amit személyesen mutatunk be.",
    facts: [
      "20–200 fős cégeknek",
      "Országosan, személyesen a cégnél vagy akár online is",
      "Gyakorló cégvezető-tanácsadók segítségével",
    ],
    situation: {
      title: "Miért nem látod te, amit egy külsős igen?",
      paragraphs: [
        "A kollégák ritkán jeleznek vissza a főnöküknek, ezért nem látod pontosan, mekkora a saját hatásod a cég működésére. Az sem biztos, hogy tudod, melyik meggyőződésedhez (például azt, hogy valamit nem lehet másképp csinálni) ragaszkodsz még mindig nagyon. Egy külsősnek a kollégák hamarabb megnyílnak, és kimondják azt, amit a cégen belül senki nem mond ki.",
      ],
      list: {
        title: "Tipikus tünetek, amikkel megkeresnek minket",
        items: [
          "Minden fontos és sok kevésbé fontos döntés is a tulajdonoshoz kerül vissza.",
          "Ugyanazt a feladatot ketten is csinálják, egy másikat viszont senki.",
          "A középvezetők szakmailag erősek, de vezetőként bizonytalanok, és mindenki másképp vezeti a csapatát.",
          "Egy kulcsember távozása után akadozik a működés, mert a tudás nem volt megosztva.",
          "A vezetői értekezletek hosszúak, de döntés ritkán születik, vagy nem hajtják végre.",
          "A cég többször próbált új folyamatot bevezetni, de az néhány hónap után elhalt.",
        ],
        note: "Ha ezek közül kettő-három ismerős, érdemes a személyes beszélgetésen átbeszélni a helyzetet.",
      },
    },
    contents: {
      title: "Interjúk, beszélgetések, írásos összefoglaló",
      items: [
        "60–75 perces személyes interjúk a vezetőkkel és a kulcsemberekkel.",
        "Beszélgetések veled, a cégvezetővel/tulajdonossal.",
        "Írásos összefoglaló, amit személyesen mutatunk be: a cég erősségei, nehézségei, a ki nem mondott, visszatérő problémák és javaslatok a jobb működéshez.",
        "A távlati irány vázlata, vagyis hogy honnan hova jutunk.",
      ],
      paragraphs: [
        "A távlati irányt nem dolgozzuk ki részletesen. A részletek a havi együttműködésben, veled közösen alakulnak ki.",
      ],
      box: {
        title: "360 fokos értékelés",
        text: "Ha a helyzet kívánja, online kitölthető 360 fokos értékelést is javaslunk egy-egy vezetőről, kollégáról: a felettese, a beosztottai és a mellérendelt munkatársai mondanak róla véleményt. Így több irányból kapsz összevethető visszajelzést.",
      },
    },
    process: {
      title: "Egymásra épülő lépések",
      steps: [
        {
          title: "Személyes beszélgetések",
          text: "A megállapodás előtt akár két-három személyes beszélgetés is van, hogy mindkét fél tudja, mire vállalkozik.",
        },
        {
          title: "Interjúk",
          text: "A vezetőkkel és a kulcsemberekkel külön-külön beszélgetünk. A titoktartás itt is alap: az interjúkon elhangzottakat nem név szerint adjuk tovább.",
        },
        {
          title: "Összefoglaló és bemutatás",
          text: "Az írásos összefoglalót személyesen mutatjuk be, hogy kérdezhess, és együtt döntsünk a folytatásról.",
        },
        {
          title: "Folytatás",
          text: "A diagnózis a havi együttműködés természetes belépője. Ha szeretnéd, ott folytatjuk, ha nem, akkor is használható képet kapsz a cég helyzetéről.",
        },
      ],
      note: "A diagnózis díjáról a személyes beszélgetések után adunk ajánlatot.",
    },
    faq: [
      {
        q: "Mi lesz az interjúkból a kollégák számára?",
        a: "Semmi olyan, ami róluk szólna. Az összefoglalóban a cég működéséről írunk, nem egyes kollégák kijelentéseiről.",
      },
      {
        q: "Mi a különbség a diagnózis és a szervezetfejlesztés között?",
        a: "A diagnózis megmutatja, mi hol akad. A szervezetfejlesztés az a munka, amit utána a havi együttműködésben végzünk: a döntési szintek, a folyamatok, a felelősségek és a vezetői gyakorlat rendbetétele.",
      },
    ],
    cta: {
      title: "Első beszélgetés",
      text: "Beszéljük át, hol akad a cég. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vezetoi-coaching",
    path: "/vezetoi-coaching/",
    label: "Vezetői coaching",
    title: "Vezetői coaching és tanácsadás cégvezetőknek | O2 Tanácsadó",
    description:
      "Négyszemközti, bizalmas beszélgetések egy gyakorló cégvezetővel. Ezeken az üléseken négyszemközt vagyunk: Tibor vagy Ádám egyedül ül le veled.",
    serviceType: "Vezetői coaching",
    eyebrow: "Vezetői coaching · a havi együttműködés része",
    h1: "Vezetői coaching, tanácsadás: végre megbeszélheted valakivel, amit a cégben senkivel nem tudsz",
    lead:
      "Négyszemközti, bizalmas beszélgetések egy gyakorló cégvezetővel. Olyan kérdésekről, amiket a cégedben senkivel nem tudsz megbeszélni: hogyan engedd el a döntéseket, kire bízz rá többet, és mit kezdj a saját fáradtságoddal.",
    facts: [
      "Négyszemközt, bizalmasan",
      "Országosan, személyesen a cégnél vagy akár online is",
      "A coach, tanácsadó maga is cégvezető",
    ],
    situation: {
      title: "A cégvezető egyedül van a döntéseivel",
      paragraphs: [
        "Egy cégtulajdonosnak/cégvezetőnek ritkán van kivel nyíltan átbeszélnie a valódi kérdéseit: kit léptessen elő, kitől váljon meg, hogyan lépjen hátrébb az operatív irányításból stb. A vezetőtársak érintettek, a család nem látja a részleteket, a tanácsadó pedig gyakran kész választ ad ahelyett, hogy végiggondolná veled a helyzetet.",
        "A vezetői coaching, tanácsadás strukturált és bizalmas beszélgetéssorozat, amiben te a saját helyzetedből indulsz ki, és a saját döntéseidre jutsz. A coach, tanácsadó kérdez, tükröz, keretet tart, és gyakorló cégvezetőként ismeri a helyzetet, amiben dolgozol. A cégvezető mögött az embert is látjuk, a vágyaival és az érzéseivel együtt.",
      ],
      list: {
        title: "Milyen témák hozzák ide a cégvezetőket?",
        items: [
          "Mindent te csinálsz, de nem tudod, kinek és hogyan add át.",
          "Egy vezetőtárs vagy kulcsember teljesítménye nem megfelelő, de a döntés hónapok óta halasztódik.",
          "A tulajdonosi és az ügyvezetői szerep összecsúszik, és ez feszültséget okoz.",
          "Az állandó tűzoltás mellett a stratégiára nem jut idő.",
          "Fontos döntés előtt állsz (bővítés, leépítés, üzletág lezárása), és nincs kivel végiggondolni.",
          "Szeretnél hátrébb lépni, de nem tudod, hogyan működne a cég nélküled.",
        ],
      },
    },
    process: {
      title: "Négyszemközt, a saját tempódban",
      paragraphs: [
        "Ezeken az üléseken négyszemközt vagyunk: Tibor vagy Ádám egyedül ül le veled. Minden ülés a te aktuális helyzetedből indul, és konkrét döntéssel vagy lépéssel zárul. Az ülések között a gyakorlatban kipróbálod, amit kidolgoztunk. A beszélgetések tartalma bizalmas, a cég többi vezetője előtt is.",
        "A vezetői coaching, tanácsadás a havi együttműködés része. Ha csak ezzel kezdenénk, az első beszélgetésen közösen megnézzük, mi a legjobb belépő.",
      ],
    },
    expect: {
      title: "Mi változik?",
      items: [
        "A halogatott döntés (kinevezés, elválás, átszervezés) megszületik és végrehajtásra kerül.",
        "Tudatosan adsz át feladatokat és hatásköröket, a cég kevésbé függ tőled.",
        "Világosabban látod a saját szerepedet a viták és a feszültségek mögött.",
        "Csökken a terhelésed, mert rendszert építesz a prioritásoknak és a delegálásnak.",
      ],
      caveat:
        "A coaching nem helyettesíti a te döntéseidet. Az eredmény attól függ, mennyire vagy nyitott a saját működésed átgondolására, és mennyire következetesen próbálod ki a gyakorlatban, amit együtt kidolgoztunk.",
    },
    cta: {
      title: "Első beszélgetés",
      text: "Beszéljük meg, mi az, ami most a legnehezebb. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "team-coaching",
    path: "/team-coaching/",
    label: "Team coaching",
    title: "Team coaching vezetői csapatoknak | O2 Tanácsadó",
    description:
      "Nem csapatépítő nap, hanem egy- vagy többalkalmas, célhoz kötött munka, amiben a csapat a saját valós ügyein dolgozik.",
    serviceType: "Team coaching",
    eyebrow: "Team coaching · a havi együttműködés része",
    h1: "Team coaching: a vezetői csapat tagjai külön-külön jók, együtt mégsem elég hatékonyak",
    lead:
      "A team coaching egy létező csapat, leggyakrabban a vezetői csapat közös működésével foglalkozik: hogyan döntenek, hogyan osztják el a felelősséget, hogyan kezelik az egymás közti feszültségeket. Nem csapatépítő nap, hanem egy- vagy többalkalmas, célhoz kötött munka, amiben a csapat a saját valós ügyein dolgozik.",
    facts: [
      "Országosan, személyesen a cégnél",
      "Gyakorló cégvezető-tanácsadók segítségével",
      "A havi együttműködés része",
    ],
    situation: {
      title: "Jó emberek, akik csapatként nem elég jók",
      paragraphs: [
        "A vezetői csapat általában 3–7 emberből áll. Külön-külön mindenki jó a saját területén. Együtt viszont gyakran nem születik döntés, vagy túl lassan, a részlegek egymásra mutogatnak, az újak és a régiek között kimondatlan feszültség van, vagy éppen a te jelenléted miatt senki nem mond ellent.",
        "A team coaching nem eszközöket tanít. A csapat aktuális ügyein keresztül változtat a közös működésen. A coach nem old meg semmit a csapat helyett: keretet ad, kérdez, tükrözi, ami történik, és segít kimondani és eldönteni azt, amit addig kerülgettek.",
      ],
      list: {
        title: "Tipikus tünetek",
        items: [
          "A vezetői értekezlet beszámolókból áll, a valódi kérdések a folyosón dőlnek el.",
          "A döntést a teremben mindenki elfogadja, aztán a saját területén mindenki másképp hajtja végre.",
          "Két vezető között tartós konfliktus van, amiről mindenki tud, de senki nem beszél.",
          "A csapattagok hozzád viszik a vitáikat ahelyett, hogy egymással rendeznék.",
          "A közös célok nem világosak, minden vezető a saját területét tartja szem előtt.",
        ],
      },
    },
    process: {
      title: "Négy lépés",
      steps: [
        {
          title: "Egyeztetés veled",
          text: "Tisztázzuk, mi a csapat helyzete, mi a cél, és hogy team coaching-e a megfelelő eszköz. Van, hogy kiderül: előbb diagnózisra vagy egyéni coachingra van szükség.",
        },
        {
          title: "Egyéni előbeszélgetések",
          text: "Minden csapattaggal rövid, bizalmas beszélgetést folytatunk: hogyan látja a csapat működését, és mit vár a folyamattól. Így senki nem érzi magát célpontnak.",
        },
        {
          title: "Közös alkalmak",
          text: "A csapat a saját valós ügyein dolgozik: egy halogatott döntésen, egy felelősségi vitán, a közös célokon, a működési szabályokon. Minden alkalom konkrét megállapodással zárul.",
        },
        {
          title: "Megállapodások és utánkövetés",
          text: "Néhány hét múlva visszanézzük, mi épült be a mindennapokba, és hol kell korrigálni.",
        },
      ],
    },
    expect: {
      title: "Mi változik a csapatban?",
      items: [
        "A vezetői értekezleten döntések születnek, és a végrehajtás egységes.",
        "A kimondatlan feszültségekről beszélnek, ahelyett hogy kerülgetnék őket.",
        "A viták a csapaton belül dőlnek el, és nem hozzád kerülnek.",
        "A vezetők közös célokat látnak, és egymás munkáját is figyelembe veszik.",
      ],
      caveat:
        "A team coaching nem old meg semmit a csapat helyett. Az eredmény attól függ, mennyire nyitott a csapat arra, hogy a valódi kérdéseivel foglalkozzon.",
    },
    cta: {
      title: "Első beszélgetés",
      text: "Beszéljük át, hogyan működik most a vezetői csapat. Az első találkozó díjmentes, és nem jár elköteleződéssel.",
    },
  },
];

export const OFFER_BY_SLUG = Object.fromEntries(OFFER_PAGES.map((p) => [p.slug, p])) as Record<
  OfferSlug,
  OfferPageData
>;
