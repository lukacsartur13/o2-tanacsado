/**
 * Az eredeti szövegű országos szolgáltatási és témaoldalak tartalma (vezetői
 * tréning, munkaköri leírás minta, munkaerő-megtartás). Az új szövegű oldalak
 * (havi együttműködés, céges diagnózis, vezetői és team coaching) adatai az
 * offers.ts-ben vannak.
 *
 * Minden oldal ugyanazt a szerkezetet követi (problémafelvetés, kinek való,
 * tünetek, folyamat, eredmények, GYIK, CTA, belső linkek), de a szöveg
 * oldalanként egyedi. Nem térségi, hanem országos oldalak: az O2 Tanácsadó
 * online és igény szerint helyszíni formában dolgozik Magyarország egész
 * területén.
 */

export type ServiceSlug = "vezetoi-trening" | "munkakori-leiras-minta" | "munkaero-megtartas";

export interface Faq {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface ServicePageData {
  slug: ServiceSlug;
  path: string;
  /** Rövid név hivatkozásokhoz. */
  label: string;
  /** SEO title (teljes, márkanévvel). */
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  /** CTA felirat az oldal fő gombjain. */
  cta: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  problem: { title: string; paragraphs: string[] };
  forWhom: { title: string; intro?: string; items: string[] };
  symptoms: { title: string; intro?: string; items: string[] };
  process: { title: string; intro?: string; steps: ProcessStep[] };
  results: { title: string; intro: string; items: string[]; caveat: string };
  faq: Faq[];
  /** Kapcsolódó szolgáltatási oldalak (path). */
  related: string[];
  /** Kapcsolódó blogcikkek (slug). */
  posts: string[];
  /** Az űrlapszekció címe és szövege. */
  form: { title: string; text: string };
  /** Opcionális, oldalspecifikus szövegblokkok a GYIK előtt. */
  extraSections?: { id: string; title: string; paragraphs: string[]; bullets?: string[] }[];
}

export const SERVICE_PAGES_DATA: ServicePageData[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "vezetoi-trening",
    path: "/vezetoi-trening/",
    label: "Vezetői tréning",
    title: "Vezetői tréning kkv-vezetőknek és középvezetőknek | O2 Tanácsadó",
    description:
      "Vezetői tréning kkv-k középvezetőinek: delegálás, visszajelzés, teljesítménykezelés. A cég valós helyzetére épül, nem sablonra. Országosan, online is.",
    h1: "Vezetői tréning, amely a cég valós helyzetére épül",
    eyebrow: "Vezetői tréning · országosan",
    lead:
      "A kkv-k középvezetői többnyire a legjobb szakemberekből lettek vezetők, vezetői felkészítés nélkül. A vezetői tréning ezt a hiányt pótolja: nem elméleti modellekkel, hanem a saját csapatuk, saját helyzeteik gyakorlásával. A cél mérhető: kevesebb döntés jusson vissza a tulajdonoshoz, és a csapatok egységes vezetői keretben működjenek.",
    cta: "Kérjen ajánlatot vezetői tréningre",
    serviceType: "Vezetői tréning",
    problem: {
      title: "A jó szakemberből nem lesz magától jó vezető",
      paragraphs: [
        "Egy 60 fős cégnél jellemzően 5–8 ember vezet másokat: műszakvezető, csoportvezető, projektvezető, részlegvezető. A többségük azért kapta a szerepet, mert a legjobb volt a szakmájában, és azért maradt bizonytalan vezető, mert soha senki nem mondta el neki, hogyan kell delegálni, visszajelzést adni, teljesítményproblémát kezelni vagy egy nehéz beszélgetést lefolytatni. Az eredmény: a középvezető inkább maga csinálja meg, a csapat a tulajdonoshoz megy a kérdéseivel, a problémák pedig addig nőnek, amíg már nem lehet nem foglalkozni velük.",
        "A vezetői tréningünk erre a helyzetre készül. Nem általános „leadership” programot tartunk, hanem a cég vezetőivel, a cég konkrét helyzeteire gyakoroljuk be azt a néhány vezetői eszközt, amely a napi működésben a legtöbbet számít. A tréning előtt igényfelmérést végzünk, a tréning után pedig utánkövetéssel biztosítjuk, hogy a tanultak be is épüljenek.",
      ],
    },
    forWhom: {
      title: "Kinek való a vezetői tréning?",
      items: [
        "Frissen kinevezett vagy 1–3 éve vezető közép- és csoportvezetőknek, akik szakmai háttérből érkeztek.",
        "Tulajdonos-ügyvezetőknek, akik szeretnék, hogy a vezetőik egységesen, önállóan irányítsák a csapataikat.",
        "Cégeknek, ahol a vezetői gárda gyors növekedés, átszervezés vagy generációváltás miatt új szerepbe került.",
        "Vezetői csapatoknak, amelyek külön-külön jól dolgoznak, de nincs közös vezetői nyelvük és gyakorlatuk.",
      ],
    },
    symptoms: {
      title: "Tipikus helyzetek, amikor vezetői tréningre van szükség",
      items: [
        "A középvezető inkább maga végzi el a feladatot, mint hogy delegálja, mert „úgy gyorsabb”.",
        "A visszajelzés vagy elmarad, vagy csak akkor hangzik el, amikor már nagy a baj.",
        "A teljesítményproblémákat hónapokig tűrik, mert a vezető nem tudja, hogyan kezdjen bele a beszélgetésbe.",
        "A vezetők egymástól nagyon eltérő stílusban és szabályok szerint irányítanak.",
        "A csapat a középvezető helyett a tulajdonoshoz fordul a kérdéseivel.",
        "Az új vezető szakmailag hiteles, de a korábbi kollégáival nehezen vált vezetői szerepbe.",
      ],
    },
    process: {
      title: "Hogyan épül fel a vezetői tréning?",
      intro: "Nem kész tematikát adunk el. A tréning a cég vezetőinek tényleges helyzeteiből épül fel.",
      steps: [
        {
          title: "Igényfelmérés",
          text: "Rövid interjú a tulajdonossal és a résztvevő vezetőkkel: milyen helyzetekben akadnak el, mit vár a cég a vezetőitől. Ebből áll össze a tréning fókusza, jellemzően 3–4 vezetői eszköz.",
        },
        {
          title: "Tréningnapok",
          text: "1–3 nap, 6–12 fős csoportban, a cég telephelyén vagy külső helyszínen. Rövid elméleti keret, majd a saját helyzetek gyakorlása: delegálás, visszajelzés, teljesítménybeszélgetés, döntés-előkészítés, konfliktuskezelés, csapatértekezlet vezetése.",
        },
        {
          title: "Egyéni vállalások",
          text: "Minden résztvevő 2–3 konkrét vállalással zár: mit fog másképp csinálni a saját csapatával a következő 4–6 hétben.",
        },
        {
          title: "Utánkövetés",
          text: "4–8 héttel a tréning után rövid utánkövető alkalom (online vagy helyszínen): mi működött, mi nem, mit kell korrigálni. Igény szerint egyéni vezetői coachinggal folytatható.",
        },
      ],
    },
    results: {
      title: "Milyen üzleti eredményt hoz a vezetői tréning?",
      intro: "A vezetői tréning akkor éri meg, ha a működésben látszik. Ezeket a változásokat célozzuk és követjük:",
      items: [
        "A középvezetők több feladatot és döntést vállalnak, kevesebb kérdés jut vissza a tulajdonoshoz.",
        "A teljesítményproblémákat a vezetők időben, egyértelműen kezelik, nem hónapokig görgetik.",
        "A csapatok egységes vezetői keretben működnek: azonos szabályok, hasonló visszajelzési gyakorlat.",
        "Az új belépők beilleszkedése gyorsabb, mert a vezető tudja, mit és hogyan várjon el.",
        "A vezetők közötti együttműködés javul, mert közös nyelvet és közös eszközöket használnak.",
      ],
      caveat:
        "Egy tréning önmagában nem változtat meg egy vezetőt. A hatás az igényfelmérésen, a saját helyzetek gyakorlásán, a tulajdonosi elvárások egyértelműségén és az utánkövetésen múlik. Ezért ezekre mindig javaslatot teszünk, még akkor is, ha csak egy tréningnapot kér.",
    },
    faq: [
      {
        q: "Hány fős csoportban tartják a vezetői tréninget?",
        a: "Ideálisan 6–12 fővel. Ekkora létszámnál mindenki gyakorol, és a saját helyzetek feldolgozására is jut idő. Nagyobb vezetői csapatot két csoportra bontunk.",
      },
      {
        q: "Egy napos vagy több napos a tréning?",
        a: "Az igényfelmérés dönti el. Egy fókuszált téma (például visszajelzés és teljesítménybeszélgetés) egy napban feldolgozható. Egy vezetői alapprogram jellemzően 2–3 nap, néhány hetes szünetekkel, hogy a résztvevők közben gyakorolhassanak.",
      },
      {
        q: "Vezetői tréning vagy vezetői coaching – melyik kell nekünk?",
        a: "A tréning közös vezetői eszköztárat ad egy csoportnak, a coaching egy vezető egyéni helyzeteire és fejlődésére irányul. Ha több vezetőnek hasonló a fejlesztési igénye, tréninggel kezdünk; ha egy-egy kulcsvezetőnél konkrét szerepváltás vagy elakadás van, coachinggal. A kettő gyakran kiegészíti egymást.",
      },
      {
        q: "Tudnak a cég telephelyén tartani tréninget?",
        a: "Igen, országosan. A tréningeket jellemzően a cégnél vagy a cég által választott helyszínen tartjuk; egyes modulok online is megvalósíthatók. A helyszíni tréning előnye, hogy a vezetők a saját környezetükben, a saját helyzeteikkel dolgoznak.",
      },
      {
        q: "Milyen témák szerepelnek egy kkv vezetői tréningben?",
        a: "Leggyakrabban: delegálás és számonkérés, visszajelzés adása, teljesítménybeszélgetés, nehéz beszélgetések (figyelmeztetés, elköszönés), csapatértekezlet vezetése, döntés-előkészítés, konfliktuskezelés, a vezetői szerep vállalása korábbi kollégák felett. A tényleges tematikát az igényfelmérés alapján állítjuk össze.",
      },
      {
        q: "Hogyan mérik a tréning eredményét?",
        a: "A tréning elején rögzített vezetői vállalásokkal és az utánkövető alkalommal. Emellett a tulajdonossal együtt előre meghatározunk 2–3 mutatót – például a tulajdonoshoz visszajutó döntések száma, a teljesítménybeszélgetések megtartása, a próbaidős kilépések –, amelyeket 3–6 hónap múlva közösen visszanézünk.",
      },
    ],
    related: ["/vezetoi-coaching/", "/team-coaching/", "/szervezetfejlesztes/", "/munkaero-megtartas/"],
    posts: ["vezetoi-trening-vagy-vezetoi-coaching", "hogyan-csokkentheto-a-fluktuacio-kkv-ban"],
    form: {
      title: "Kérjen ajánlatot vezetői tréningre",
      text: "Írja meg, hány vezetőről van szó, milyen szerepben dolgoznak, és milyen helyzetekben akadnak el. Az igényfelmérés után írásos ajánlatot adunk.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkakori-leiras-minta",
    path: "/munkakori-leiras-minta/",
    label: "Munkaköri leírás minta",
    title: "Munkaköri leírás minta: letölthető sablon | O2 Tanácsadó",
    description:
      "Munkaköri leírás minta ingyen: másolható, letölthető sablon és rövid útmutató, mit tartalmazzon egy jó munkaköri leírás. Segítünk a munkakörök rendezésében is.",
    h1: "Munkaköri leírás minta: sablon és útmutató kkv-knak",
    eyebrow: "Munkaköri leírás · minta és útmutató",
    lead:
      "Az alábbi munkaköri leírás mintát szabadon másolhatja, letöltheti és a saját cégére alakíthatja. A sablon után röviden leírjuk, mit tartalmazzon egy jó munkaköri leírás, mit hagyjon ki, és mikor érdemes a teljes munkaköri rendszert rendezni. Ha a cégnél 20–200 fő dolgozik, és a felelősségek elmosódtak, ebben tanácsadóként is segítünk.",
    cta: "Kérjen segítséget a munkakörök rendezéséhez",
    serviceType: "Munkakörök és munkaköri leírások kialakítása",
    problem: {
      title: "Miért nem elég egy letöltött sablon önmagában?",
      paragraphs: [
        "A munkaköri leírás a munkaszerződés melléklete, és a legtöbb kkv-nál azért készül, mert kell. Ilyenkor általános, másolt szöveg lesz belőle, amely senkinek nem mond semmit: a kolléga nem tudja belőle, mit várnak tőle, a vezető nem tud rá hivatkozni, a HR pedig nem tud rá építeni toborzáskor vagy teljesítményértékeléskor.",
        "Egy jó munkaköri leírás rövid, konkrét és a cég tényleges működéséből indul ki. Azt írja le, miért van a munkakör, mi az öt-nyolc legfontosabb feladata, miről dönthet a kolléga egyedül, kinek felel, és miből látszik, hogy jól végzi a munkáját. A lenti minta ezt a szerkezetet követi.",
      ],
    },
    forWhom: {
      title: "Kinek készült ez a minta?",
      items: [
        "Kkv-vezetőknek és tulajdonosoknak, akik gyorsan, de nem felületesen szeretnének munkaköri leírást készíteni.",
        "Irodavezetőknek, HR-eseknek és pénzügyi vezetőknek, akiknél a HR-adminisztráció a feladat része.",
        "Középvezetőknek, akik a saját csapatuk munkaköreit akarják tisztázni.",
        "Cégeknek, ahol a létszám nőtt, és a régi munkaköri leírások már nem fedik a valós feladatokat.",
      ],
    },
    symptoms: {
      title: "Mikor jelzi a működés, hogy a munkakörök rendezésre szorulnak?",
      items: [
        "Egy feladat két emberé, egy másik senkié, és ez rendszeresen vitát okoz.",
        "A munkaköri leírások évek óta nem frissültek, miközben a cég megduplázódott.",
        "Az új belépő az első hetekben nem tudja, pontosan mi a dolga, és kitől kérdezhet.",
        "A teljesítményértékelésnél nincs mihez mérni, mert az elvárások nincsenek leírva.",
        "A vezető nem tud hivatkozni a munkaköri leírásra, mert az általános és semmitmondó.",
        "A munkakörök a személyekhez, nem a cég működéséhez igazodnak: ha valaki kilép, „a munkaköre is megszűnik”.",
      ],
    },
    process: {
      title: "Hogyan rendezzük a munkaköröket tanácsadóként?",
      intro: "Ha nem egy, hanem 20–200 munkakört kell rendezni, a minta már nem elég. Ilyenkor így dolgozunk:",
      steps: [
        {
          title: "Szervezeti felépítés áttekintése",
          text: "Először a szervezeti diagramot és a valós működést vetjük össze: ki kinek felel ténylegesen, hol vannak átfedések, hol hiányzik felelős.",
        },
        {
          title: "Munkakör-interjúk",
          text: "A munkakör betöltőjével és a vezetőjével rövid interjú: mi a tényleges feladat, mi a fontos, mi az, ami rendszeresen bizonytalan.",
        },
        {
          title: "Munkaköri leírások elkészítése",
          text: "Egységes szerkezetben, a cég nyelvén, munkakörönként 1–2 oldal terjedelemben. A hasonló munkaköröket munkakörcsaládokba rendezzük, hogy a rendszer később is karbantartható legyen.",
        },
        {
          title: "Vezetői egyeztetés és bevezetés",
          text: "A vezetőkkel átnézzük és véglegesítjük, majd a kollégákkal beszélgetésben vezetjük be, nem e-mailben. A munkaköri leírás így a napi vezetés eszközévé válik.",
        },
      ],
    },
    results: {
      title: "Mit hoz a cégnek a rendezett munkaköri rendszer?",
      intro: "A jól megírt munkaköri leírás nem HR-dokumentum, hanem vezetői eszköz:",
      items: [
        "A felelősségek egyértelműek, a feladatok nem esnek ki és nem duplázódnak.",
        "A toborzás pontosabb, mert a hirdetés és az interjú a valós munkakörre épül.",
        "A beillesztés gyorsabb, mert az új kolléga az első naptól tudja, mi a dolga.",
        "A teljesítménybeszélgetésnek van alapja: leírt elvárás és mérhető eredmény.",
        "A szervezeti felépítés a cég működését követi, nem a személyeket.",
      ],
      caveat:
        "A munkaköri leírás önmagában nem oldja meg a vezetés hiányát: ha a vezető nem használja, papír marad. Ezért a bevezetést mindig vezetői beszélgetéssel kötjük össze.",
    },
    faq: [
      {
        q: "Kötelező munkaköri leírást készíteni?",
        a: "A Munka Törvénykönyve szerint a munkáltató köteles a munkavállalót írásban tájékoztatni a munkakörébe tartozó feladatokról, legkésőbb a munkaviszony kezdetétől számított hét napon belül. A gyakorlatban ezt a munkaköri leírás teljesíti, amely a munkaszerződés melléklete. A pontos jogi tartalomról érdemes munkajogásszal egyeztetni; mi a munkakör tartalmi és szervezeti oldalával foglalkozunk.",
      },
      {
        q: "Milyen hosszú legyen egy munkaköri leírás?",
        a: "Egy–két oldal. Ha ennél hosszabb, senki nem olvassa el; ha rövidebb, nem mond semmit. A fő feladatokból 5–8 pont legyen, a hatáskörből és a felelősségből néhány konkrét mondat.",
      },
      {
        q: "Mi a különbség a munkaköri leírás és a munkaszerződés között?",
        a: "A munkaszerződés a jogviszony alapadatait rögzíti: munkakör megnevezése, alapbér, munkahely, munkaidő. A munkaköri leírás azt részletezi, mi a munkakör tartalma: feladatok, hatáskör, felelősség, elvárások. A munkaköri leírást a munkáltató egyoldalúan módosíthatja, ha a munkakör megnevezése és lényege nem változik.",
      },
      {
        q: "Használhatom a mintát több munkakörre?",
        a: "Igen, a szerkezet minden munkakörre alkalmazható. A tartalmat viszont minden munkakörnél újra kell gondolni: a cél, a fő feladatok és a döntési jogkör munkakörönként más. Ha 20-nál több munkakört kell rendezni, érdemes munkakörcsaládokban gondolkodni.",
      },
      {
        q: "Ki írja meg a munkaköri leírást: a vezető vagy a HR?",
        a: "A tartalmat a közvetlen vezető ismeri a legjobban, a szerkezetet és az egységességet a HR vagy egy külső tanácsadó adja. A legjobb munkaköri leírások a vezető és a munkakör betöltőjének közös beszélgetéséből születnek.",
      },
      {
        q: "Mikor érdemes tanácsadót bevonni?",
        a: "Ha a munkaköri leírások rendezése a teljes szervezetet érinti, ha a felelősségi viták már a működést terhelik, vagy ha a munkakörök rendezését szervezeti átalakítás, növekedés vagy tulajdonosváltás kíséri. Ilyenkor a munkakörök rendezése a szervezetfejlesztés része.",
      },
    ],
    related: ["/szolgaltatasok/#munkakorok", "/szervezetfejlesztes/", "/hr-tanacsadas-kkv-knak/", "/szolgaltatasok/#toborzas"],
    posts: ["munkakori-leiras-minta-mit-tartalmazzon", "toborzas-es-kivalasztas-gyorsabban-pontosabban"],
    form: {
      title: "Segítséget kér a munkakörök rendezéséhez?",
      text: "Ha nem egy, hanem sok munkakört kell rendezni, vagy a felelősségek tisztázása szervezeti kérdéseket is felvet, írja le a helyzetet. Az első egyeztetés díjmentes.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkaero-megtartas",
    path: "/munkaero-megtartas/",
    label: "Munkaerő-megtartás",
    title: "Munkaerő-megtartás, fluktuáció csökkentése | O2 Tanácsadó",
    description:
      "Munkaerő-megtartás kkv-knak: a fluktuáció okainak feltárása, megtartási eszközök, ösztönzési rendszer, elégedettség. Országosan, online és helyszínen.",
    h1: "Munkaerő-megtartás: hogyan csökkenthető a fluktuáció egy kkv-nál?",
    eyebrow: "Munkaerő-megtartás · országosan",
    lead:
      "A fluktuáció egy 20–200 fős cégnél nem statisztika, hanem konkrét emberek: a műszakvezető, aki átment a konkurenciához, a könyvelő, aki két év után elment, a betanított kolléga, aki a próbaidő végén kilépett. A munkaerő-megtartás nálunk azzal kezdődik, hogy pontosan megnézzük, kik mennek el, mikor és miért. Csak utána beszélünk eszközökről.",
    cta: "Kérjen konzultációt a megtartásról",
    serviceType: "Munkaerő-megtartás és ösztönzési rendszer",
    problem: {
      title: "A fluktuáció költsége, amit senki sem számol ki",
      paragraphs: [
        "Egy betanított munkatárs pótlása – hirdetés, interjúk, betanítás, a kieső teljesítmény, a többiek túlterhelése – jellemzően a kolléga több havi bérének megfelelő költség. Egy kulcsember távozása ennél sokkal több: elvitt tudás, akadozó ügyfélkapcsolat, néha a következő két kilépő. A legtöbb kkv ezt nem számolja ki, ezért a megtartásra kevesebbet szán, mint amennyibe a fluktuáció kerül.",
        "A megtartás nem egyetlen eszköz. Nem béremelés, nem cafeteria, nem csapatépítés önmagában. Az, hogy a cég tudja, kiket akar megtartani, érti, ezek az emberek miért maradnak vagy mennek, és a vezetők napi működése ezt támogatja. A fluktuáció okainak nagy része a közvetlen vezetőnél, az elvárások tisztázatlanságánál és a fejlődési lehetőség hiányánál van, nem a bértáblánál.",
      ],
    },
    forWhom: {
      title: "Kinek való?",
      intro: "Olyan 20–200 fős cégeknek, ahol:",
      items: [
        "a fluktuáció az elmúlt 1–2 évben érezhetően nőtt, vagy egy-egy területen tartósan magas;",
        "a kilépők között kulcsemberek, jó teljesítők vagy frissen betanított kollégák vannak;",
        "a béremelés az egyetlen megtartó eszköz, és a cég már nem tud vagy nem akar ebben versenyezni;",
        "a vezetők nem tudják pontosan, miért mennek el az emberek, mert nincs rendszeres kilépő- vagy megtartó beszélgetés;",
        "a cég ösztönzési rendszert vezetne be, de nem tudja, mire és hogyan.",
      ],
    },
    symptoms: {
      title: "Tipikus tünetek",
      items: [
        "A próbaidő végén vagy az első évben kilépők aránya magas.",
        "A jó teljesítők távoznak, a gyengék maradnak.",
        "Egy részleg vagy egy vezető alatt kiugróan magas a fluktuáció.",
        "A kilépőbeszélgetéseken mindenki „jobb ajánlatot kapott”, de a valódi ok nem derül ki.",
        "A bérek a piaci szint körül vannak, mégis mennek az emberek.",
        "A prémium- vagy jutalomrendszer nem motivál, csak vitát okoz.",
      ],
    },
    process: {
      title: "Hogyan dolgozunk a megtartáson?",
      steps: [
        {
          title: "Első egyeztetés",
          text: "Díjmentes beszélgetés az ügyvezetővel: mit mutatnak a számok, kiket veszít a cég, mit próbáltak már. Tisztázzuk, hogy megtartási projektre, ösztönzési rendszerre vagy szélesebb HR-tanácsadásra van-e szükség.",
        },
        {
          title: "Fluktuáció-elemzés és okfeltárás",
          text: "A kilépési adatok elemzése (mikor, honnan, kik), vezetői interjúk, bizalmas munkatársi beszélgetések vagy rövid elégedettségi kérdőív, szükség szerint kilépett kollégák megkeresése. Eredménye: a fluktuáció tényleges okainak listája, területenként.",
        },
        {
          title: "Megtartási terv",
          text: "Az okokra célzott eszközök: vezetői gyakorlat javítása, elvárások és fejlődési utak tisztázása, beillesztési folyamat, ösztönzési rendszer, kulcsemberek egyéni megtartási terve. Csak azt javasoljuk, amit a cég működtetni tud.",
        },
        {
          title: "Ösztönzési rendszer kialakítása",
          text: "Ha indokolt: a cég céljaihoz kötött, egyszerű, átlátható ösztönzési rendszer, amelyet a kollégák értenek, és amely nem okoz több vitát, mint motivációt. Bevezetés a vezetőkkel, kommunikáció a csapatnak.",
        },
        {
          title: "Mérés és utánkövetés",
          text: "A fluktuációt és a próbaidős kilépéseket negyedévente visszanézzük, a megtartó beszélgetéseket rendszeresítjük. 6–12 hónap után értékeljük, mi változott.",
        },
      ],
    },
    results: {
      title: "Mire számíthat a cég?",
      intro: "A megtartási munka eredménye a kilépési számokban és a vezetők működésében jelenik meg:",
      items: [
        "A cég tudja, kik a kulcsemberei, és tudatosan foglalkozik a megtartásukkal.",
        "A fluktuáció valódi okai ismertek, és a cég azokra reagál, nem általános béremeléssel.",
        "A vezetők rendszeres megtartó beszélgetéseket tartanak, és időben látják a kilépési szándékot.",
        "Az ösztönzési rendszer a cég céljait szolgálja, és a kollégák értik.",
        "A próbaidős és első éves kilépések csökkennek, mert a beillesztés tudatos.",
      ],
      caveat:
        "A fluktuáció csökkenésének mértékét nem ígérjük előre: az ágazat, a helyi munkaerőpiac és a cég döntései is befolyásolják. Azt vállaljuk, hogy az okfeltárás pontos lesz, és a javasolt eszközök a cég méretéhez és lehetőségeihez illeszkednek.",
    },
    faq: [
      {
        q: "Mi számít magas fluktuációnak egy kkv-nál?",
        a: "Ágazatonként eltérő: termelésben és kereskedelemben a 20–30 százalékos éves fluktuáció is előfordul, szellemi munkaköröknél a 10–15 százalék fölötti már figyelmeztető. A számnál fontosabb, hogy kik mennek el: ha a jó teljesítők és a kulcsemberek, az alacsony fluktuáció mellett is baj van.",
      },
      {
        q: "Mik a munkaerő-megtartás eszközei a béremelésen kívül?",
        a: "A közvetlen vezető minősége, tisztázott elvárások, látható fejlődési lehetőség, rugalmasság a munkavégzésben, tudatos beillesztés, rendszeres visszajelzés, elismerés, a munka értelmének megmutatása, és a kulcsemberek egyéni megtartási terve. Ezek többsége nem pénzbe, hanem vezetői figyelembe kerül.",
      },
      {
        q: "Hogyan építsünk ösztönzési rendszert?",
        a: "A cég 2–3 legfontosabb üzleti céljából kiindulva, kevés és egyértelmű mutatóval, a kollégák által befolyásolható eredményhez kötve. Legyen egyszerűen kiszámítható, negyedévesnél ne legyen ritkább, és a vezetők tudják elmagyarázni. A bevezetés előtt érdemes egy negyedévet próbaüzemben futtatni.",
      },
      {
        q: "Mennyi idő alatt látszik a fluktuáció csökkenése?",
        a: "Az okfeltárás 3–5 hét. Az első változások – rendszeres megtartó beszélgetések, tudatos beillesztés – 2–3 hónapon belül bevezethetők. A fluktuációs számokban 6–12 hónap után látható megbízhatóan a változás.",
      },
      {
        q: "Mérik a munkavállalói elégedettséget?",
        a: "Igen, ha indokolt: rövid, anonim kérdőívvel vagy bizalmas beszélgetésekkel. Nem tartunk hosszú, nagyvállalati elégedettségi felmérést; kkv-nál 10–15 jól megválasztott kérdés és a vezetői interjúk együtt pontosabb képet adnak.",
      },
      {
        q: "Ez HR-tanácsadás vagy külön szolgáltatás?",
        a: "A munkaerő-megtartás a HR-tanácsadás része, de önálló projektként is kérhető: fluktuáció-elemzés, megtartási terv, ösztönzési rendszer. Az első egyeztetésen tisztázzuk, mi illik a cég helyzetéhez.",
      },
    ],
    related: ["/hr-tanacsadas-kkv-knak/", "/vezetoi-trening/", "/szolgaltatasok/#toborzas", "/munkakori-leiras-minta/"],
    posts: [
      "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
      "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
      "mukodo-osztonzesi-rendszer-kkv-ban",
    ],
    form: {
      title: "Beszéljük át, miért mennek el az emberek",
      text: "Írja le, mekkora a cég, mely területen magas a fluktuáció, és mit próbáltak már. Az első egyeztetés díjmentes és nem jár kötelezettséggel.",
    },
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES_DATA.map((s) => [s.slug, s]),
) as Record<ServiceSlug, ServicePageData>;
