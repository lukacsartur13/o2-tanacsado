/**
 * Blogcikkek – induló cikkvázlatok kidolgozott szöveggel.
 *
 * Minden cikk egy konkrét kkv-vezetői kérdésre válaszol, és egy szolgáltatási
 * oldal felé vezet konzultációs CTA-val. A `sections` szerkezete adja a H2-ket;
 * a cikk H1-je a `title`.
 */

export interface PostSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Post {
  slug: string;
  title: string;
  /** SEO title (teljes). */
  seoTitle: string;
  description: string;
  /** ISO dátum. */
  date: string;
  /** Rövid kivonat a listákhoz. */
  excerpt: string;
  /** Témakör címkéje. */
  topic: string;
  /** Kapcsolódó szolgáltatási oldal (path). */
  service: string;
  serviceLabel: string;
  /** Az űrlapon előre kiválasztott érdeklődési terület(ek). */
  interest: string | string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  intro: string[];
  sections: PostSection[];
  /** Kapcsolódó cikkek (slug). */
  related: string[];
}

export const POSTS: Post[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "hogyan-csokkentheto-a-fluktuacio-kkv-ban",
    title: "Hogyan csökkenthető a fluktuáció egy 20–200 fős kkv-ban?",
    seoTitle: "Hogyan csökkenthető a fluktuáció egy kkv-ban? | O2 Tanácsadó",
    description:
      "Fluktuáció csökkentése kkv-nál négy lépésben: kilépési adatok, valódi okok, a közvetlen vezető szerepe, megtartási terv a kulcsemberekre.",
    date: "2026-09-08",
    excerpt:
      "A fluktuáció csökkentése nem béremeléssel kezdődik, hanem azzal, hogy a cég pontosan tudja, kik, mikor és miért mennek el. Négy lépés, amely egy 20–200 fős cégnél működik.",
    topic: "Munkaerő-megtartás",
    service: "/munkaero-megtartas/",
    serviceLabel: "Munkaerő-megtartás",
    interest: "megtartas",
    ctaTitle: "Magas a fluktuáció a cégénél?",
    ctaText: "Beszéljük át, mit mutatnak a kilépési adatok, és hol érdemes kezdeni. Az első egyeztetés díjmentes.",
    ctaLabel: "Kérjen konzultációt a megtartásról",
    intro: [
      "Egy 60 fős cégnél évi 15 kilépés 25 százalékos fluktuációt jelent. Ez a szám önmagában nem mond sokat. Az számít, hogy a 15 emberből hány volt kulcsember, hányan mentek el az első évben, és hányan ugyanattól a vezetőtől. A fluktuáció csökkentése ezért nem eszközválasztással, hanem adatokkal és okfeltárással kezdődik.",
      "Az alábbi négy lépést kkv-vezetőknek írtuk, akiknek nincs HR-osztályuk, de van kilépési problémájuk.",
    ],
    sections: [
      {
        heading: "1. Nézze meg, kik mennek el, és mikor",
        paragraphs: [
          "Első lépésként gyűjtse össze az elmúlt 12–24 hónap kilépéseit egy egyszerű táblázatban: név, munkakör, közvetlen vezető, belépés és kilépés dátuma, a kilépés kezdeményezője, a kilépés indoka (ahogy elhangzott). Ez a táblázat a legtöbb cégnél már önmagában megmutatja a mintázatot.",
        ],
        bullets: [
          "Ha a kilépők nagy része az első 6–12 hónapban távozik, a kiválasztás vagy a beillesztés a probléma.",
          "Ha egy vezető alatt kiugróan magas a fluktuáció, a vezetői működés a probléma.",
          "Ha a 2–4 éve a cégnél dolgozó jó teljesítők mennek el, a fejlődési lehetőség és az elismerés hiányzik.",
          "Ha egy munkakörcsaládban tartósan magas, a bér vagy a munkakörülmények nem versenyképesek.",
        ],
      },
      {
        heading: "2. Derítse ki a valódi okokat, ne a kimondottakat",
        paragraphs: [
          "A kilépőbeszélgetésen a többség „jobb ajánlatot kapott”. Ez ritkán a teljes igazság: az emberek általában akkor kezdenek másik állást nézni, amikor valami elromlott a jelenlegiben. A valódi okok feltárásához három forrás működik kkv-nál: bizalmas beszélgetések a maradókkal (ők látják, miért mentek el a többiek), rövid anonim kérdőív 10–15 kérdéssel, és néhány kilépett kolléga megkeresése 2–3 hónappal a távozás után, amikor már őszintébben beszélnek.",
          "Tapasztalatunk szerint a leggyakoribb valódi okok: a közvetlen vezető, a tisztázatlan elvárások, a fejlődés hiánya, a következetlen szabályok és az elismerés hiánya. A bér a lista közepén van, nem az elején.",
        ],
      },
      {
        heading: "3. Kezdje a közvetlen vezetőnél",
        paragraphs: [
          "A fluktuáció okainak jelentős része a közvetlen vezetőnél van: hogyan ad visszajelzést, hogyan osztja el a munkát, mennyire következetes, észreveszi-e, ha valaki elégedetlen. Egy kkv-nál a középvezetők többsége vezetői felkészítés nélkül lett vezető, ezért ez nem személyes hiba, hanem rendszerhiba.",
          "Gyakorlati lépések: rendszeres, rövid egyéni beszélgetések a vezető és minden beosztottja között (havonta 20–30 perc), egyértelmű elvárások írásban, és a vezetők felkészítése a visszajelzésre és a nehéz beszélgetésekre. Ez utóbbi a vezetői tréning tipikus témája.",
        ],
      },
      {
        heading: "4. Készítsen megtartási tervet a kulcsemberekre",
        paragraphs: [
          "Nem mindenkit lehet és nem is kell egyformán megtartani. Egy 20–200 fős cégnél 5–15 ember van, akinek a távozása komoly üzleti kárt okozna. Ezekre az emberekre külön, egyéni megtartási terv kell: mi tartja itt, mi vinné el, mit tud a cég adni (felelősség, fejlődés, rugalmasság, részesedés az eredményből), és ki beszél vele erről rendszeresen.",
          "A megtartási terv nem titkos ígéretgyűjtemény, hanem tudatos vezetői figyelem. A legtöbb kulcsember nem többet akar, hanem azt, hogy lássák és számoljanak vele.",
        ],
      },
      {
        heading: "Mit ne csináljon?",
        paragraphs: [],
        bullets: [
          "Ne emeljen bért általánosan, mielőtt tudná, miért mennek el az emberek: drága, és nem hat az okokra.",
          "Ne vezessen be cafeteriát vagy csapatépítést válaszként a vezetői problémára.",
          "Ne higgye el változtatás nélkül, hogy „ilyen a piac”: a fluktuáció egy része mindig a cég döntésein múlik.",
          "Ne várjon egy évet az első lépéssel: a rendszeres vezetői beszélgetések már holnap bevezethetők.",
        ],
      },
      {
        heading: "Összefoglalás",
        paragraphs: [
          "A fluktuáció csökkentése egy kkv-nál négy lépés: adatok, valódi okok, a közvetlen vezető működése, és egyéni terv a kulcsemberekre. A számokban 6–12 hónap után látszik a változás, a vezetői működésben már néhány hét után. Ha a cégnél a kilépések már az üzleti működést terhelik, érdemes külső szemmel átnézni, hol érdemes kezdeni.",
        ],
      },
    ],
    related: ["munkaero-megtartasi-eszkozok-nem-csak-beremeles", "mukodo-osztonzesi-rendszer-kkv-ban", "vezetoi-trening-vagy-vezetoi-coaching"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkaero-megtartasi-eszkozok-nem-csak-beremeles",
    title: "Munkaerő-megtartási eszközök, amelyek nem csak béremelésről szólnak",
    seoTitle: "Munkaerő-megtartás eszközei béremelés nélkül | O2 Tanácsadó",
    description:
      "Kilenc munkaerő-megtartási eszköz kkv-knak, amely nem béremelésre épül: vezetői beszélgetés, elvárások, fejlődési út, rugalmasság, beillesztés, elismerés.",
    date: "2026-09-08",
    excerpt:
      "A bér a megtartás alapfeltétele, de ritkán az oka annak, hogy valaki marad. Kilenc eszköz, amely egy kkv-nál pénz helyett vezetői figyelembe kerül.",
    topic: "Munkaerő-megtartás",
    service: "/munkaero-megtartas/",
    serviceLabel: "Munkaerő-megtartás",
    interest: "megtartas",
    ctaTitle: "Melyik eszköz illik a cégéhez?",
    ctaText: "A megtartási eszközök akkor működnek, ha a fluktuáció valódi okaira válaszolnak. Segítünk feltárni az okokat és összeállítani a megtartási tervet.",
    ctaLabel: "Kérjen konzultációt",
    intro: [
      "Amikor egy jó kolléga felmond, az első reflex a bérajánlat. Néha működik, de a legtöbb ellenajánlattal maradó munkatárs egy éven belül mégis elmegy, mert az ok, ami miatt nézelődni kezdett, nem változott. A bér a megtartás alapfeltétele: ha jelentősen a piac alatt van, semmi más nem segít. De ha a piac körül van, akkor az alábbi eszközök többet számítanak, mint a következő emelés.",
    ],
    sections: [
      {
        heading: "1. Rendszeres egyéni beszélgetés a közvetlen vezetővel",
        paragraphs: [
          "Havi 20–30 perc, négyszemközt, nem a feladatokról, hanem arról, hogyan van a kolléga, mi megy jól, mi nem, mit szeretne. Ez az egyetlen eszköz, amely szinte minden fluktuációs okra hat, és semmibe nem kerül. A legtöbb kkv-nál mégsem létezik, mert a vezetők nem tudják, hogyan kell csinálni. Ezt meg lehet tanulni.",
        ],
      },
      {
        heading: "2. Tisztázott elvárások és munkakör",
        paragraphs: [
          "A bizonytalanság fáraszt. Ha a kolléga nem tudja pontosan, mi a dolga, miről dönthet, és miből látszik, hogy jól dolgozik, előbb-utóbb máshol keresi a tisztaságot. Egy jó munkaköri leírás és egy negyedéves elvárás-beszélgetés ezt rendezi.",
        ],
      },
      {
        heading: "3. Látható fejlődési út",
        paragraphs: [
          "Egy kkv nem tud karrierlétrát kínálni, de tud fejlődést: új felelősség, egy projekt vezetése, egy terület átvétele, egy képzés, egy új kolléga betanítása. A lényeg, hogy a kolléga lássa: egy év múlva más lesz a szerepe, ha akarja. Ezt érdemes kimondani és rögzíteni.",
        ],
      },
      {
        heading: "4. Rugalmasság, ahol a munka engedi",
        paragraphs: [
          "Munkaidő-kezdés, home office napok, műszakcsere lehetősége, sűrített munkahét. Nem mindenhol megoldható, de ahol igen, ott az egyik legerősebb megtartó eszköz, különösen a családos és az ingázó kollégáknál. A rugalmasság szabályait írásban, mindenkire egyformán érvényesen kell rögzíteni, különben feszültséget okoz.",
        ],
      },
      {
        heading: "5. Tudatos beillesztés az első 90 napban",
        paragraphs: [
          "A kilépések jelentős része az első évben történik. Az első három hónap dönti el, hogy az új kolléga marad-e: kap-e mentort, tudja-e, mi a dolga, kap-e visszajelzést, találkozik-e a vezetőjével. Egy egyoldalas beillesztési terv és három rögzített beszélgetés (1. hét, 1. hónap, 3. hónap) a legtöbb korai kilépést megelőzi.",
        ],
      },
      {
        heading: "6. Elismerés, ami konkrét és időben érkezik",
        paragraphs: [
          "Nem az év dolgozója díj, hanem az, hogy a vezető észreveszi és kimondja, amikor valaki jól csinált valamit, lehetőleg aznap. Ez a legolcsóbb és a leginkább elhanyagolt eszköz.",
        ],
      },
      {
        heading: "7. Következetes szabályok",
        paragraphs: [
          "Az emberek nem a szigorú szabályoktól mennek el, hanem az igazságtalanoktól: amikor ugyanazért az egyik kolléga jutalmat kap, a másik figyelmeztetést. A vezetők egységes szabályértelmezése megtartó eszköz.",
        ],
      },
      {
        heading: "8. Részesedés az eredményből",
        paragraphs: [
          "Ha a cég jól megy, a kollégák érezzék. Egy egyszerű, átlátható, a cég céljaihoz kötött ösztönzési rendszer többet ér, mint az eseti jutalom, mert kiszámítható. Erről külön cikkben írunk.",
        ],
      },
      {
        heading: "9. A munka értelme",
        paragraphs: [
          "A kollégák nagy része nem tudja, mire használja az ügyfél azt, amit ő csinál, és hogyan járul hozzá a cég eredményéhez. Ezt elmondani – negyedévente, konkrétan, számokkal – nem HR-eszköz, hanem vezetői feladat, és meglepően sokat számít.",
        ],
      },
      {
        heading: "Hogyan válasszon az eszközök közül?",
        paragraphs: [
          "Ne vezessen be mind a kilencet egyszerre. Nézze meg a kilépési adatokat, derítse ki a valódi okokat, és arra a 2–3 eszközre koncentráljon, amely az okokra válaszol. A beillesztés a korai kilépésekre hat, a vezetői beszélgetések és a fejlődési út a 2–4 éves jó teljesítők távozására, a következetes szabályok a bérfeszültségre.",
        ],
      },
    ],
    related: ["hogyan-csokkentheto-a-fluktuacio-kkv-ban", "mukodo-osztonzesi-rendszer-kkv-ban", "munkakori-leiras-minta-mit-tartalmazzon"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "munkakori-leiras-minta-mit-tartalmazzon",
    title: "Munkaköri leírás minta: mit tartalmazzon, és milyen hibákat kerüljünk el?",
    seoTitle: "Munkaköri leírás: mit tartalmazzon, mit kerüljünk? | O2 Tanácsadó",
    description:
      "Mit tartalmazzon egy jó munkaköri leírás egy kkv-nál? A hasznos elemek, a hét leggyakoribb hiba, és mikor kell a teljes rendszert rendezni. Letölthető minta.",
    date: "2026-09-08",
    excerpt:
      "A legtöbb munkaköri leírás azért készül, mert kell, és ezért nem használja senki. Mi különbözteti meg a hasznosat a papírtól, és melyik hét hibát érdemes elkerülni?",
    topic: "Munkakörök",
    service: "/munkakori-leiras-minta/",
    serviceLabel: "Munkaköri leírás minta",
    interest: "munkakorok",
    ctaTitle: "Sok munkakört kell rendezni?",
    ctaText: "Ha a munkaköri leírások rendezése a teljes szervezetet érinti, tanácsadóként segítünk a szervezeti felépítés és a munkakörök összehangolásában.",
    ctaLabel: "Kérjen segítséget a munkakörökhöz",
    intro: [
      "A munkaköri leírás a munkaszerződés melléklete, és a legtöbb kkv-nál azért készül, mert a munkajog megköveteli. Ezért általános, másolt szöveg lesz belőle, amelyet a belépés után senki nem vesz elő. Pedig a jó munkaköri leírás a vezetés egyik legegyszerűbb eszköze: tisztázza, ki miért felel, mire lehet hivatkozni, és mihez lehet mérni a teljesítményt.",
      "Ebben a cikkben végigvesszük, mit tartalmazzon, mit hagyjon ki, és milyen hibákat látunk a leggyakrabban. A cikk végén a letölthető, másolható mintánkra is hivatkozunk.",
    ],
    sections: [
      {
        heading: "Mit tartalmazzon egy jó munkaköri leírás?",
        paragraphs: ["A szerkezet egyszerű, és minden munkakörre alkalmazható:"],
        bullets: [
          "Alapadatok: a munkakör megnevezése, szervezeti egység, közvetlen felettes, a munkakör betöltője, érvényesség kezdete.",
          "A munkakör célja: egy-két mondatban, miért létezik ez a munkakör a cégben. Ha ezt nem lehet leírni, a munkakörrel van baj.",
          "Fő feladatok: 5–8 pont, a legfontosabbtól a kevésbé fontos felé. Nem minden tevékenység, hanem a lényegesek.",
          "Hatáskör és döntési jogkör: miről dönthet egyedül, mihez kell jóváhagyás, milyen összeghatárig, mit írhat alá.",
          "Felelősség: miért felel (eredmény, minőség, határidő, eszközök, adatok), és kinek számol be.",
          "Kapcsolatok: kivel dolgozik együtt a cégen belül és kívül (ügyfelek, beszállítók, hatóságok).",
          "Követelmények: végzettség, tapasztalat, szakmai és személyes kompetenciák, jogosítvány, nyelvtudás, ha releváns.",
          "Teljesítménymutatók: 2–4 mérőszám vagy konkrét elvárás, amelyből látszik, hogy jól végzi a munkáját.",
          "Helyettesítés: kit helyettesít, és ki helyettesíti.",
          "Záradék: dátum, aláírások, a munkaszerződés mellékleteként való rögzítés.",
        ],
      },
      {
        heading: "Mit hagyjon ki?",
        paragraphs: [],
        bullets: [
          "Az általános kötelezettségeket, amelyek minden munkavállalóra vonatkoznak (munkavédelem, titoktartás, együttműködés): ezek a munkaszerződésbe és a belső szabályzatokba valók.",
          "A „minden egyéb, a vezető által meghatározott feladat” típusú gumimondatot: egy rövid, korlátozott változata elég.",
          "A cég értékeit és küldetését: ide nem tartoznak.",
          "A bért és a juttatásokat: a munkaszerződés része, a munkaköri leírás nem.",
        ],
      },
      {
        heading: "A hét leggyakoribb hiba",
        paragraphs: [],
        bullets: [
          "Túl hosszú: háromoldalas felsorolás, amelyet senki nem olvas el. Egy–két oldal az ideális.",
          "Túl általános: internetről másolt szöveg, amely bármelyik cégnél állhatna.",
          "A személyhez, nem a munkakörhöz igazodik: ha a kolléga kilép, „a munkaköre is megszűnik”.",
          "Hiányzik a döntési jogkör: a kolléga nem tudja, miről dönthet, ezért minden kérdéssel a vezetőhöz megy.",
          "Nincs teljesítménymutató: a teljesítményértékelésnél nincs mihez mérni.",
          "Soha nem frissül: a cég megduplázódott, a munkaköri leírás öt éves.",
          "E-mailben adják át: a munkaköri leírást beszélgetésben kell átadni, különben papír marad.",
        ],
      },
      {
        heading: "Mikor kell az egész rendszert rendezni?",
        paragraphs: [
          "Ha egy-két munkakörről van szó, a minta és egy jó beszélgetés a vezetővel elég. Ha viszont a felelősségi viták rendszeresek, a szervezeti felépítés nem követi a cég működését, vagy 20-nál több munkakört kell egyszerre rendezni, akkor a munkakörök rendezése szervezeti kérdés: először a felépítést és a döntési szinteket kell tisztázni, és csak utána a munkaköri leírásokat. Ez a szervezetfejlesztés része.",
        ],
      },
      {
        heading: "Letölthető minta",
        paragraphs: [
          "A fenti szerkezetet követő, szabadon másolható és letölthető munkaköri leírás mintánkat a Munkaköri leírás minta oldalon találja, rövid kitöltési útmutatóval.",
        ],
      },
    ],
    related: ["toborzas-es-kivalasztas-gyorsabban-pontosabban", "szervezeti-diagnozis-mikor-erdemes", "munkaero-megtartasi-eszkozok-nem-csak-beremeles"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
    title: "Mikor van szüksége egy kkv-nak HR-tanácsadóra?",
    seoTitle: "Mikor kell HR-tanácsadó egy kkv-nak? 7 jel | O2 Tanácsadó",
    description:
      "Hét jel, hogy egy 20–200 fős cégnek HR-tanácsadóra van szüksége, és három helyzet, amikor nincs. Mit csinál a HR-tanácsadó, mi a HR-outsourcing?",
    date: "2026-09-08",
    excerpt:
      "Nem minden HR-probléma igényel tanácsadót. Hét jel, amikor igen, három helyzet, amikor nem, és mire számíthat az első egyeztetésen.",
    topic: "HR-tanácsadás",
    service: "/hr-tanacsadas-kkv-knak/",
    serviceLabel: "HR-tanácsadás kkv-knak",
    interest: "hr-strategia",
    ctaTitle: "Ismerős a jelek közül néhány?",
    ctaText: "Az első egyeztetésen tisztázzuk, hogy a cég helyzetére HR-tanácsadás, HR-outsourcing vagy valami más a jó válasz. Díjmentes és kötelezettség nélküli.",
    ctaLabel: "Kérjen első egyeztetést",
    intro: [
      "Egy 20 fős cégnél a HR a tulajdonos feladata, és ez rendben van. 50 fő fölött már nem az: a HR-döntések hiánya vagy késése üzleti költséggé válik. A kérdés nem az, hogy kell-e HR, hanem hogy milyen formában: belső HR-es, kiszervezett HR-vezető, projektalapú tanácsadó, vagy ezek kombinációja.",
    ],
    sections: [
      {
        heading: "Hét jel, hogy HR-tanácsadóra van szükség",
        paragraphs: [],
        bullets: [
          "A tulajdonos heti több órát tölt HR-ügyekkel: felvétel, kilépés, bérvita, szabadság, konfliktus.",
          "Egy kulcspozíció három hónapnál régebben betöltetlen, és nem világos, miért.",
          "A jó emberek 1–2 év után elmennek, és a kilépőbeszélgetésekből nem áll össze a kép.",
          "A béremelés az egyetlen ösztönző eszköz, és már nem működik.",
          "A vezetők másképp értelmezik a szabályokat: túlóra, home office, jutalom, figyelmeztetés.",
          "A cég növekedne, de nem tudja, milyen létszámot, milyen munkaköröket és milyen vezetőket igényel a következő 2–3 év.",
          "Több HR-projekt indult már (munkakörök, értékelés, ösztönzés), de egyik sem állt össze működő rendszerré.",
        ],
      },
      {
        heading: "Három helyzet, amikor nem tanácsadó kell",
        paragraphs: [],
        bullets: [
          "Ha csak bérszámfejtésre, munkaügyi adminisztrációra van szükség: erre könyvelő vagy bérszámfejtő partner való.",
          "Ha a probléma egyetlen személy egyéni helyzete: erre vezetői coaching vagy munkajogász a válasz.",
          "Ha a tulajdonos nem akar változtatni a saját működésén: a HR-tanácsadás a vezetői döntéseket rendezi, és ez a tulajdonost is érinti.",
        ],
      },
      {
        heading: "Mit csinál egy HR-tanácsadó egy kkv-nál?",
        paragraphs: [
          "Először helyzetképet készít: létszám, fluktuáció, bérstruktúra, munkakörök, toborzási gyakorlat, vezetői működés. Ezután a cég üzleti céljaiból kiindulva rögzíti, milyen HR-működésre van szükség, és 4–5 konkrét beavatkozásra tesz javaslatot. Majd vagy projektként valósítja meg ezeket (például munkakörök rendezése, kiválasztási folyamat, ösztönzési rendszer), vagy kiszervezett HR-vezetőként havi keretben viszi a HR-t.",
          "A kkv-tanácsadás lényege, hogy a megoldások a meglévő vezetőkkel és korlátozott HR-kapacitással is működjenek. Nem nagyvállalati HR-rendszer kicsiben, hanem az a néhány döntés, amely a céget ténylegesen előreviszi.",
        ],
      },
      {
        heading: "HR-tanácsadó vagy HR-outsourcing?",
        paragraphs: [
          "A tanácsadó projektre jön: egy helyzetet rendez, és kilép. A kiszervezett HR-vezető havi keretben folyamatosan jelen van: előkészíti a HR-döntéseket, támogatja a vezetőket, irányítja a toborzást. A választás a cég méretétől és HR-igényétől függ: 30–120 fő között gyakran a kiszervezett HR-vezető a legjobb ár-érték arányú megoldás, mert egy teljes állású HR-vezető még nem indokolt, de a HR-igény már túlnőtt az adminisztráción.",
        ],
      },
      {
        heading: "Mire számíthat az első egyeztetésen?",
        paragraphs: [
          "Egy 60–90 perces beszélgetésre a tulajdonossal vagy ügyvezetővel, online vagy a cégnél. Áttekintjük a helyzetet, a legégetőbb HR-kérdéseket, és azt, milyen együttműködési forma illik a céghez. Ha kiderül, hogy nem tanácsadóra van szükség, ezt megmondjuk. Az egyeztetés díjmentes, és nem jár kötelezettséggel.",
        ],
      },
    ],
    related: ["hogyan-csokkentheto-a-fluktuacio-kkv-ban", "szervezeti-diagnozis-mikor-erdemes", "toborzas-es-kivalasztas-gyorsabban-pontosabban"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "szervezeti-diagnozis-mikor-erdemes",
    title: "Szervezeti diagnózis: mikor érdemes elvégezni, és mire használható?",
    seoTitle: "Szervezeti diagnózis: mikor érdemes és mire jó? | O2 Tanácsadó",
    description:
      "Mi a szervezeti diagnózis, mikor érdemes elvégezni egy kkv-nál, hogyan zajlik, és mit kap belőle a vezetés? Gyakorlati leírás tulajdonosoknak.",
    date: "2026-09-08",
    excerpt:
      "A szervezeti diagnózis nem felmérés, hanem pontos kép arról, mi hol akad a cég működésében, és miért. Öt helyzet, amikor érdemes, és amit a vezetés a végén a kezében tart.",
    topic: "Szervezetfejlesztés",
    service: "/szervezetfejlesztes/",
    serviceLabel: "Szervezetfejlesztés",
    interest: "szervezetfejlesztes",
    ctaTitle: "Nem látszik, hol akad a szervezet?",
    ctaText: "A szervezeti diagnózis 3–5 hét alatt pontos képet ad. Beszéljük át, mi indokolja a cégnél, és mire terjedjen ki.",
    ctaLabel: "Beszéljük át a helyzetet",
    intro: [
      "A legtöbb cégvezető érzi, amikor a szervezet nem működik jól: lassulnak a döntések, ismétlődnek a hibák, a jó emberek fáradnak. Azt viszont ritkán látja pontosan, mi az ok. A struktúra? A folyamatok? A középvezetők? A saját működése? A szervezeti diagnózis erre a kérdésre ad választ, mielőtt a cég drága és rossz irányú beavatkozásba kezdene.",
    ],
    sections: [
      {
        heading: "Mi a szervezeti diagnózis?",
        paragraphs: [
          "Strukturált, néhány hetes vizsgálat, amelynek végén a vezetés írásban megkapja: mi működik jól a szervezetben, mi hol akad, mi ennek az oka, és milyen sorrendben érdemes beavatkozni. Nem elégedettségi felmérés, nem audit és nem tanácsadói jelentés általánosságokkal. Konkrét, a cégre szabott helyzetkép, amely alapján dönteni lehet.",
        ],
      },
      {
        heading: "Öt helyzet, amikor érdemes elvégezni",
        paragraphs: [],
        bullets: [
          "Gyors növekedés után: a létszám 2–3 év alatt megduplázódott, és a régi működés már nem tartja.",
          "Tulajdonos- vagy vezetőváltás előtt: az átvevőnek pontos képre van szüksége arról, mit vesz át.",
          "Ismétlődő problémák esetén: ugyanaz a hiba, ugyanaz a konfliktus, ugyanaz a késés visszatér, a korábbi megoldások nem tartottak.",
          "Nagyobb változás előtt: új üzletág, új telephely, új rendszer bevezetése előtt tudni kell, mit bír el a szervezet.",
          "Amikor a vezetők nem értenek egyet abban, mi a baj: a diagnózis közös, tényekre épülő képet ad.",
        ],
      },
      {
        heading: "Hogyan zajlik?",
        paragraphs: ["Egy 20–200 fős cégnél a diagnózis jellemzően 3–5 hét, és négy forrásra épül:"],
        bullets: [
          "Vezetői és kulcsemberi interjúk: 8–15 bizalmas beszélgetés arról, hogyan működik a cég valójában.",
          "Dokumentumok: szervezeti felépítés, munkakörök, folyamatleírások, ha vannak, és az, ami ezekből hiányzik.",
          "Rövid munkatársi kérdőív: anonim, 10–15 kérdés, a teljes létszámnak, hogy a kép ne csak a vezetők nézőpontját tükrözze.",
          "Megfigyelés: egy-két vezetői értekezlet, egy folyamat végigkövetése a gyakorlatban.",
        ],
      },
      {
        heading: "Mit kap a vezetés a végén?",
        paragraphs: [
          "Egy 10–20 oldalas írásos összefoglalót és egy vezetői megbeszélést. Az összefoglaló tartalma: a cég erősségei, amelyekre építeni lehet; az elakadások, területenként, konkrét példákkal; az okok, amelyek jellemzően a struktúra, a döntési szintek, a folyamatok, a vezetői gyakorlat vagy a kommunikáció körül vannak; és 3–5 javasolt beavatkozás, sorrendben, becsült időkerettel.",
          "A vezetői megbeszélésen a vezetők közösen döntenek, mivel kezdenek. Van, amikor a diagnózis után egy-két célzott lépés elég, és nem indul hosszabb program.",
        ],
      },
      {
        heading: "Mire nem való a diagnózis?",
        paragraphs: [],
        bullets: [
          "Nem személyek értékelése: nem arról szól, ki jó vezető és ki nem.",
          "Nem helyettesíti a döntést: a diagnózis képet ad, a beavatkozásról a vezetés dönt.",
          "Nem egyszeri csoda: a szervezet változik, 2–3 évente érdemes újra ránézni.",
        ],
      },
    ],
    related: ["mikor-van-szuksege-kkv-nak-hr-tanacsadora", "vezetoi-trening-vagy-vezetoi-coaching", "munkakori-leiras-minta-mit-tartalmazzon"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vezetoi-trening-vagy-vezetoi-coaching",
    title: "Vezetői tréning vagy vezetői coaching: melyik mire való?",
    seoTitle: "Vezetői tréning vagy coaching: melyik mire való? | O2 Tanácsadó",
    description:
      "Vezetői tréning és vezetői coaching: mi a különbség, melyik milyen kkv-helyzetben működik, és mikor érdemes a kettőt kombinálni?",
    date: "2026-09-08",
    excerpt:
      "A tréning közös eszköztárat ad egy vezetői csoportnak, a coaching egy vezető egyéni helyzetére irányul. Hat tipikus kkv-helyzet, és hogy melyikre melyik a válasz.",
    topic: "Vezetőfejlesztés",
    service: "/vezetoi-trening/",
    serviceLabel: "Vezetői tréning",
    interest: ["vezetoi-trening", "vezetoi-coaching"],
    ctaTitle: "Nem biztos, melyik kell a vezetőinek?",
    ctaText: "Az igényfelmérésen tisztázzuk, hogy tréning, coaching vagy a kettő kombinációja illik a cég vezetőihez. Az első egyeztetés díjmentes.",
    ctaLabel: "Kérjen első egyeztetést",
    intro: [
      "„Kellene valami a vezetőinknek” – így kezdődik a legtöbb megkeresés. A „valami” mögött két, egymástól nagyon különböző eszköz áll: a vezetői tréning és a vezetői coaching. Mindkettő fejleszt, de más helyzetre, más módon és más eredménnyel. A rossz választás nem árt, de nem is hoz sokat.",
    ],
    sections: [
      {
        heading: "Mi a vezetői tréning?",
        paragraphs: [
          "Csoportos, 6–12 fős, 1–3 napos fejlesztés, amely közös vezetői eszköztárat ad: delegálás, visszajelzés, teljesítménybeszélgetés, értekezletvezetés, konfliktuskezelés. A résztvevők a saját helyzeteiket gyakorolják, és egyéni vállalásokkal zárnak. Előnye, hogy a vezetők egységes keretben kezdenek működni, és közös nyelvet kapnak. Korlátja, hogy egy-egy vezető egyéni elakadására nem tud mélyen ráállni.",
        ],
      },
      {
        heading: "Mi a vezetői coaching?",
        paragraphs: [
          "Egyéni, 6–10 alkalmas, célhoz kötött munka egy vezetővel: szerepváltás, egy konkrét döntés végiggondolása, delegálás, terhelés, konfliktus egy vezetőtárssal. A coach nem tanít, hanem kérdez és keretet tart; a vezető a saját megoldására jut. Előnye a mélység és a bizalmasság. Korlátja, hogy nem ad közös eszköztárat egy csoportnak, és drágább, ha sok vezetőről van szó.",
        ],
      },
      {
        heading: "Hat tipikus helyzet, és hogy melyikre melyik a válasz",
        paragraphs: [],
        bullets: [
          "Öt középvezető, akik szakemberből lettek vezetők, és mindegyik máshogy irányít: tréning.",
          "Az ügyvezető át akarja adni az operatív irányítást, de nem tudja, hogyan: coaching.",
          "Új termelésvezető, aki a korábbi kollégái felett nem tud vezetőként fellépni: coaching, esetleg a tréning után.",
          "A vezetői csapat együtt nem hoz döntést, külön-külön jól dolgozik: egyik sem – team coaching.",
          "A vezetők nem adnak visszajelzést, és a teljesítményproblémákat hónapokig görgetik: tréning, utánkövetéssel.",
          "Egy kulcsvezető kiégés közelében van, és ez már a működést érinti: coaching.",
        ],
      },
      {
        heading: "Mikor érdemes kombinálni?",
        paragraphs: [
          "Gyakran a legjobb megoldás a kettő együtt: a vezetői csapat tréningen kap közös eszköztárat, majd az a 2–3 vezető, akinél egyéni elakadás vagy szerepváltás van, coachingban folytatja. A tréning így nem marad egyszeri esemény, a coaching pedig nem lóg a levegőben, mert van közös keret, amire épül.",
        ],
      },
      {
        heading: "Mire figyeljen a választásnál?",
        paragraphs: [],
        bullets: [
          "Igényfelmérés nélkül ne rendeljen sem tréninget, sem coachingot: a helyzet határozza meg az eszközt.",
          "Tréningnél az utánkövetés a hatás felét adja: egy nap önmagában nem változtat meg senkit.",
          "Coachingnál az illeszkedés dönt: az első beszélgetés után a vezető döntse el, dolgozik-e a coachcsal.",
          "A tulajdonosi elvárás legyen világos: mit vár a cég a vezetőitől a fejlesztés után?",
        ],
      },
    ],
    related: ["szervezeti-diagnozis-mikor-erdemes", "hogyan-csokkentheto-a-fluktuacio-kkv-ban", "mikor-van-szuksege-kkv-nak-hr-tanacsadora"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mukodo-osztonzesi-rendszer-kkv-ban",
    title: "Hogyan építsünk működő ösztönzési rendszert kkv-ban?",
    seoTitle: "Működő ösztönzési rendszer kkv-ban: 6 lépés | O2 Tanácsadó",
    description:
      "Ösztönzési rendszer kkv-nál: hat lépés a cég céljaitól a bevezetésig, és öt hiba, amely miatt a prémiumrendszer több vitát okoz, mint motivációt.",
    date: "2026-09-08",
    excerpt:
      "A legtöbb kkv-prémiumrendszer több vitát okoz, mint motivációt, mert túl bonyolult, túl ritka vagy nem befolyásolható. Hat lépés egy egyszerű, működő ösztönzési rendszerhez.",
    topic: "Munkaerő-megtartás",
    service: "/munkaero-megtartas/",
    serviceLabel: "Munkaerő-megtartás és ösztönzés",
    interest: "megtartas",
    ctaTitle: "Ösztönzési rendszert vezetne be?",
    ctaText: "Segítünk a cég céljaihoz kötött, egyszerű és a kollégák által érthető rendszert kialakítani és bevezetni. Beszéljük át a kiindulóhelyzetet.",
    ctaLabel: "Kérjen konzultációt",
    intro: [
      "Az ösztönzési rendszer a legtöbb kkv-nál úgy születik, hogy a tulajdonos év végén kioszt valamit, aztán valaki megsértődik. A következő évben jön egy táblázat tíz mutatóval, amelyet senki nem ért, és amelyet fél év után már senki nem néz. A működő ösztönzési rendszer ennél egyszerűbb, de tudatosabb.",
    ],
    sections: [
      {
        heading: "1. Induljon a cég 2–3 céljából",
        paragraphs: [
          "Az ösztönzési rendszer arra való, hogy a kollégák energiája oda menjen, ahová a cégnek szüksége van rá. Ezért először a cég következő évi 2–3 legfontosabb céljából kell kiindulni: árbevétel, nyereség, egy új termék, a selejt csökkentése, az ügyfélmegtartás. Ha ez nincs kimondva, az ösztönzési rendszer nem tud jó lenni.",
        ],
      },
      {
        heading: "2. Kevés mutató, amelyet a kolléga befolyásolni tud",
        paragraphs: [
          "Munkakörcsaládonként 2–3 mutató, nem több. És csak olyan, amelyre a kolléga a saját munkájával hat: a termelési dolgozó a selejtre és a határidőre, az értékesítő a fedezetre és az új ügyfelekre, a vezető a csapata eredményére és a fluktuációra. A cég nyeresége a tulajdonos mutatója, nem a betanított munkásé.",
        ],
      },
      {
        heading: "3. Egyszerű, kiszámítható képlet",
        paragraphs: [
          "Ha a kolléga nem tudja fejben kiszámolni, mennyit kap, ha teljesít, a rendszer nem motivál. Egy jó képlet egy mondatban elmondható: „Ha a csapat selejtje 2 százalék alatt marad, mindenki bruttó X forintot kap negyedévente.” A sávos, súlyozott, tízváltozós képletek papíron igazságosabbak, a gyakorlatban használhatatlanok.",
        ],
      },
      {
        heading: "4. Negyedéves ritmus",
        paragraphs: [
          "Az éves prémium túl messze van ahhoz, hogy a napi munkára hasson. A havi túl gyakori, és adminisztrációs terhet okoz. Negyedévente a kolléga még látja az összefüggést a munkája és az eredmény között, a cég pedig még tud korrigálni, ha valami nem működik.",
        ],
      },
      {
        heading: "5. Próbaüzem és vezetői kommunikáció",
        paragraphs: [
          "Az első negyedévet érdemes próbaüzemként futtatni: a számokat mérni, kifizetni, de jelezni, hogy a rendszer még finomodik. A bevezetés vezetői feladat: minden vezető a saját csapatának, személyesen mondja el, mi a cél, mi a mutató, mi a képlet, és válaszol a kérdésekre. E-mailben kiküldött szabályzat nem ösztönzési rendszer.",
        ],
      },
      {
        heading: "6. Mérés és évente felülvizsgálat",
        paragraphs: [
          "A mutatókat láthatóan, rendszeresen kell közölni, hogy a kollégák negyedév közben is tudják, hol tartanak. Évente egyszer a rendszert felül kell vizsgálni: változtak-e a cég céljai, működik-e a mutató, van-e olyan hatása, amelyet nem akartunk (például a minőség rovására megy a mennyiség).",
        ],
      },
      {
        heading: "Öt hiba, amely tönkreteszi az ösztönzési rendszert",
        paragraphs: [],
        bullets: [
          "Túl sok és nem befolyásolható mutató: a kolléga nem érti, és nem is érdekli.",
          "Diszkrecionális, „megérzés alapú” jutalom: igazságtalanságérzetet szül, és a rendszert hiteltelenné teszi.",
          "A célok év közben változnak, a kolléga pedig utólag tudja meg.",
          "A prémium alapbérré válik: ha mindig mindenki megkapja, nem ösztönöz, csak elvárás lesz.",
          "A vezetők nem tudják elmagyarázni: ha a vezető sem érti, a csapat sem fogja.",
        ],
      },
      {
        heading: "Mit ne várjon az ösztönzési rendszertől?",
        paragraphs: [
          "Az ösztönzési rendszer nem pótolja a jó vezetést, a tisztázott elvárásokat és a fejlődési lehetőséget. Ha a fluktuáció oka a közvetlen vezető, a prémium nem tartja meg az embereket. Az ösztönzés a megtartás egyik eszköze a sok közül, és csak akkor működik, ha a többi is rendben van.",
        ],
      },
    ],
    related: ["munkaero-megtartasi-eszkozok-nem-csak-beremeles", "hogyan-csokkentheto-a-fluktuacio-kkv-ban", "mikor-van-szuksege-kkv-nak-hr-tanacsadora"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "toborzas-es-kivalasztas-gyorsabban-pontosabban",
    title: "Toborzás és kiválasztás: hogyan legyen gyorsabb és pontosabb?",
    seoTitle: "Toborzás és kiválasztás: gyorsabban, pontosabban | O2 Tanácsadó",
    description:
      "Toborzás és kiválasztás kkv-nál öt lépésben: kulcspozíciók, valós munkakörre épülő hirdetés, strukturált interjú, gyors döntés, tudatos próbaidő.",
    date: "2026-09-08",
    excerpt:
      "A kkv-toborzás gyakran akkor indul, amikor már ég a ház, és azért lassú, mert nem világos, kit keresnek. Öt lépés, amely gyorsabbá és pontosabbá teszi a kiválasztást.",
    topic: "Toborzás és kiválasztás",
    service: "/szolgaltatasok/#toborzas",
    serviceLabel: "Toborzás és kiválasztás",
    interest: "toborzas",
    ctaTitle: "Hónapok óta nyitva egy kulcspozíció?",
    ctaText: "Segítünk meghatározni, kit keres valójában a cég, és felépíteni a kiválasztást úgy, hogy az gyors és pontos legyen. Az első egyeztetés díjmentes.",
    ctaLabel: "Beszéljük át a helyzetet",
    intro: [
      "Egy kkv-nál a toborzás jellemzően három ok miatt lassú: nem világos, kit keresnek; a hirdetés és az interjú nem a valós munkakörre épül; és a döntés túl sok ember között, túl lassan születik. A jó jelöltek közben elmennek máshová. Az alábbi öt lépés ezt a három okot kezeli.",
    ],
    sections: [
      {
        heading: "1. Döntse el, mely pozíciók kulcspozíciók",
        paragraphs: [
          "Nem minden pozíció egyformán fontos. Egy 80 fős cégnél 8–12 olyan pozíció van, amelynek betöltetlensége közvetlen üzleti kárt okoz: a termelésvezető, a kulcsügyfelek értékesítője, a főkönyvelő, a műszakvezetők. Ezekre a pozíciókra más toborzási erőfeszítés, más költségkeret és más döntési gyorsaság jár, mint a többire. Ha ez nincs eldöntve, a cég minden pozíciót ugyanúgy toboroz, és a fontosakra nem jut elég figyelem.",
        ],
      },
      {
        heading: "2. Írja le a valós munkakört, mielőtt hirdet",
        paragraphs: [
          "A hirdetés gyakran a régi munkaköri leírásból vagy egy másik cég hirdetéséből készül. A jelölt így nem azt kapja, amit vár, és a próbaidő végén kilép. A hirdetés előtt a vezetővel érdemes tisztázni: mi a munkakör célja, mi az 5 legfontosabb feladat, miről dönt a kolléga egyedül, mi az, ami nehéz ebben a munkában, és miből látszik három hónap múlva, hogy jó volt a választás. Ez egy óra, és a fél toborzási időt megspórolja.",
        ],
      },
      {
        heading: "3. Strukturált interjú, ugyanazokkal a kérdésekkel",
        paragraphs: [
          "A „beszélgessünk egy kicsit” típusú interjú a rokonszenvet méri, nem az alkalmasságot. A strukturált interjú ugyanazt a 8–10 kérdést teszi fel minden jelöltnek, a munkakör tényleges helyzeteiről: „Mondjon egy példát, amikor egy határidőt nem tudott tartani. Mit tett?” A válaszokat előre rögzített szempontok szerint értékelik. Ez nem bonyolultabb, mint a kötetlen beszélgetés, csak pontosabb, és lehetővé teszi, hogy két interjúztató összehasonlítsa a jelölteket.",
        ],
      },
      {
        heading: "4. Kevés döntéshozó, gyors döntés",
        paragraphs: [
          "Egy jó jelölt 1–2 hétig vár. Ha a döntéshez a tulajdonos, az ügyvezető, a területvezető és a HR is kell, és ők három hét alatt találkoznak, a jelölt már máshol dolgozik. Kulcspozíciónál két interjús kör, két döntéshozó, és az utolsó interjú után 3 munkanapon belül ajánlat. Ehhez előre el kell dönteni, ki dönt, és milyen bérsávban.",
        ],
      },
      {
        heading: "5. A próbaidő legyen a kiválasztás része",
        paragraphs: [
          "A próbaidő nem formalitás, hanem a kiválasztás utolsó lépése. Az első 90 napra legyen beillesztési terv: mit kell megtanulnia, ki a mentora, és mikor kap visszajelzést (1. hét, 1. hónap, 3. hónap). A harmadik hónap végén a vezető tudatosan dönt: marad vagy nem. A legtöbb rossz felvétel azért marad a cégnél évekig, mert a próbaidő végén senki nem döntött.",
        ],
      },
      {
        heading: "Mikor érdemes külső segítséget bevonni?",
        paragraphs: [
          "Ha egy kulcspozíció három hónapnál régebben betöltetlen; ha a felvettek jelentős része a próbaidőn belül kilép; vagy ha a cég egyszerre több pozíciót tölt be, és nincs, aki a folyamatot vigye. Ilyenkor a toborzási stratégia és a kiválasztás felépítése tanácsadói feladat, a lebonyolítás pedig részben vagy egészben kiszervezhető.",
        ],
      },
    ],
    related: ["munkakori-leiras-minta-mit-tartalmazzon", "mikor-van-szuksege-kkv-nak-hr-tanacsadora", "munkaero-megtartasi-eszkozok-nem-csak-beremeles"],
  },
];

export const POST_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p])) as Record<string, Post>;

/** Cikkek dátum szerint csökkenő sorrendben. */
export function sortedPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("hu-HU", { year: "numeric", month: "long", day: "numeric" }).format(d);
}

/** Becsült olvasási idő percben (200 szó/perc). */
export function readingMinutes(post: Post) {
  const text = [
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}
