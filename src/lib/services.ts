/**
 * Országos szolgáltatási és témaoldalak tartalma.
 *
 * Minden oldal ugyanazt a szerkezetet követi (problémafelvetés, kinek való,
 * tünetek, folyamat, eredmények, GYIK, CTA, belső linkek), de a szöveg
 * oldalanként egyedi. Nem térségi, hanem országos oldalak: az O2 Tanácsadó
 * online és igény szerint helyszíni formában dolgozik Magyarország egész
 * területén.
 */

export type ServiceSlug =
  | "szervezetfejlesztes"
  | "hr-tanacsadas-kkv-knak"
  | "vezetoi-trening"
  | "vezetoi-coaching"
  | "team-coaching"
  | "munkakori-leiras-minta"
  | "munkaero-megtartas";

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
  /** Az űrlapon előre kiválasztott érdeklődési terület(ek). */
  interest: string | string[];
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
    slug: "szervezetfejlesztes",
    path: "/szervezetfejlesztes/",
    label: "Szervezetfejlesztés",
    title: "Szervezetfejlesztés kkv-knak, országosan | O2 Tanácsadó",
    description:
      "Szervezetfejlesztés 20–200 fős kkv-knak: szervezeti diagnózis, struktúra és folyamatok rendezése, változáskezelés. Országosan, online és helyszínen.",
    h1: "Szervezetfejlesztés növekvő kis- és középvállalkozásoknak",
    eyebrow: "Szervezetfejlesztés · országosan",
    lead:
      "Ha a cég már nem működik úgy, mint 20 fősen, de még nem áll át arra, ahogyan 80 vagy 150 fősen kellene, akkor szervezetfejlesztésre van szükség. Diagnózissal kezdünk, és csak arra a beavatkozásra teszünk javaslatot, amelyet a cég vezetői működtetni is tudnak.",
    interest: "szervezetfejlesztes",
    cta: "Kérjen első egyeztetést",
    serviceType: "Szervezetfejlesztés",
    problem: {
      title: "Miért akad el egy jól induló cég 50 fő fölött?",
      paragraphs: [
        "A legtöbb kkv úgy nő, hogy közben a működés szabályai a tulajdonos fejében maradnak. Amíg mindenki egy irodában ül, ez működik. Amikor már több csoport, több telephely vagy több műszak van, a régi informális rend lassulást, kettős munkát és vezetői túlterhelést okoz: a tulajdonoshoz fut be minden döntés, a középvezetők nem tudják, meddig ér a hatáskörük, a jó kollégák pedig belefáradnak a folyamatos tűzoltásba.",
        "A szervezetfejlesztés nem a struktúra átrajzolásáról szól önmagában. Arról szól, hogy a cég működése – döntési szintek, folyamatok, felelősségek, vezetői gyakorlat – újra illeszkedjen a cég tényleges méretéhez és üzleti céljaihoz. Ehhez először pontosan látni kell, mi hol akad. Ezért kezdünk mindig szervezeti diagnózissal.",
      ],
    },
    forWhom: {
      title: "Kinek való a szervezetfejlesztés?",
      intro: "Jellemzően 20–200 fős, tulajdonos által vezetett cégeknek, ahol:",
      items: [
        "a létszám az elmúlt 2–3 évben jelentősen nőtt, de a felépítés és a folyamatok a régiek maradtak;",
        "a tulajdonos vagy ügyvezető ki szeretne lépni az operatív irányításból, de nincs kire és mire átadni;",
        "több telephely, részleg vagy műszak között rendszeresek a súrlódások és az információvesztés;",
        "generációváltás, tulajdonosváltás vagy új üzletág indítása előtt áll a cég;",
        "a vezetők érzik, hogy „valami nem működik”, de nem látják pontosan, mi és miért.",
      ],
    },
    symptoms: {
      title: "Tipikus tünetek, amelyekkel megkeresnek minket",
      items: [
        "Minden fontos és sok kevésbé fontos döntés is a tulajdonoshoz kerül vissza.",
        "Ugyanazt a feladatot ketten csinálják, más feladat pedig senkié.",
        "A középvezetők szakmailag erősek, de vezetőként bizonytalanok, és nem egységes, ahogyan a csapataikat irányítják.",
        "Egy-egy kulcsember távozása akadozó működést okoz, mert a tudás nem volt dokumentálva vagy megosztva.",
        "A vezetői értekezletek hosszúak, de döntés ritkán születik, vagy nem hajtják végre.",
        "A cég többször próbált már bevezetni új folyamatot vagy rendszert, de az néhány hónap után elhalt.",
      ],
    },
    process: {
      title: "Hogyan dolgozunk együtt?",
      intro:
        "A szervezetfejlesztést szakaszokra bontjuk, és minden szakasz végén közösen döntünk a folytatásról. Nem kötünk előre többéves programot.",
      steps: [
        {
          title: "Első egyeztetés",
          text: "60–90 perces beszélgetés a tulajdonossal vagy ügyvezetővel, online vagy a cégnél. Tisztázzuk, mi a probléma, mi a cél, és hogy egyáltalán szervezetfejlesztés-e a megfelelő eszköz. Ez díjmentes és kötelezettség nélküli.",
        },
        {
          title: "Szervezeti diagnózis",
          text: "Vezetői és kulcsemberi interjúk, a szervezeti felépítés, a fő folyamatok és a döntési utak áttekintése, szükség szerint rövid munkatársi kérdőív. A diagnózis eredménye egy írásos összefoglaló: mi működik jól, mi hol akad, és miért.",
        },
        {
          title: "Fejlesztési terv és prioritások",
          text: "A diagnózis alapján 3–5 konkrét beavatkozást javaslunk, sorrendben, felelőssel és időkerettel. Például döntési szintek rögzítése, szervezeti struktúra módosítása, egy folyamat újratervezése, vezetői fórumrendszer kialakítása.",
        },
        {
          title: "Megvalósítás a vezetőkkel",
          text: "Workshopok, vezetői egyeztetések, szükség esetén vezetői coaching vagy team coaching. A változást a cég vezetői viszik végig, mi a keretet, a módszert és a külső szemet adjuk hozzá.",
        },
        {
          title: "Utánkövetés",
          text: "3–6 hónap múlva visszanézzük, mi épült be a működésbe, mi nem, és hol kell korrigálni. A cél, hogy a változás nélkülünk is fennmaradjon.",
        },
      ],
    },
    results: {
      title: "Mire számíthat a cég?",
      intro:
        "A szervezetfejlesztés eredménye a működésben látszik, nem egy dokumentumban. Ügyfeleinknél jellemzően a következő területeken jelentkezik változás:",
      items: [
        "A tulajdonos kevesebb operatív döntést hoz, mert a döntési szintek és hatáskörök rögzítettek.",
        "A középvezetők egységes keretben vezetik a csapataikat, és tudják, miért felelnek.",
        "A kritikus folyamatok (például rendelésfelvétel, projektindítás, beléptetés) leírtak és követhetők.",
        "A vezetői fórumok rövidebbek, és döntésekkel, felelősökkel zárulnak.",
        "A kulcsemberek tudása kevésbé kötődik egyetlen személyhez.",
      ],
      caveat:
        "Az eredmény mértéke a cég helyzetétől és a vezetők elkötelezettségétől függ. Nem ígérünk százalékos hatékonyságjavulást; azt vállaljuk, hogy a diagnózis pontos lesz, a javasolt lépések a cég méretéhez illeszkednek, és a megvalósítást végigkísérjük.",
    },
    faq: [
      {
        q: "Mennyi ideig tart egy szervezetfejlesztési folyamat?",
        a: "A diagnózis jellemzően 3–5 hét. A megvalósítás a beavatkozások számától függ: egy döntési rend rögzítése néhány hét, egy struktúraváltás és a vezetői működés átalakítása 4–8 hónap. A szakaszok végén mindig közösen döntünk a folytatásról.",
      },
      {
        q: "Mi a különbség a szervezetfejlesztés és a HR-tanácsadás között?",
        a: "A HR-tanácsadás a HR-működést rendezi: stratégia, toborzás, munkakörök, megtartás, ösztönzés. A szervezetfejlesztés a cég egészének működésével foglalkozik: struktúra, folyamatok, döntési szintek, vezetői gyakorlat, változáskezelés. A kettő gyakran összeér; az első egyeztetésen segítünk eldönteni, melyikre van szükség.",
      },
      {
        q: "Szükséges hozzá, hogy a tanácsadó a cégnél legyen?",
        a: "Nem feltétlenül. Az interjúk és a vezetői workshopok nagy része online is elvégezhető. A diagnózis egy részét és a nagyobb vezetői workshopokat érdemes helyszínen tartani; ezt a cég telephelyén, Magyarország bármely pontján megoldjuk.",
      },
      {
        q: "Mi történik, ha a diagnózis azt mutatja, hogy nincs szükség nagyobb beavatkozásra?",
        a: "Akkor ezt írjuk le. A diagnózis önállóan is értékes: pontos képet ad arról, mi működik és mi nem. Több ügyfelünknél a diagnózis után egy-két célzott lépés elegendő volt, és nem indult hosszabb program.",
      },
      {
        q: "Hogyan vonják be a munkatársakat?",
        a: "A diagnózisban interjúkkal és rövid kérdőívvel, a megvalósításban az érintett csapatok workshopjaival. Fontos, hogy a kollégák lássák: nem róluk, hanem velük együtt döntenek a működésről. Ez a változás elfogadásának egyik legfontosabb feltétele.",
      },
      {
        q: "Mennyibe kerül a szervezetfejlesztés?",
        a: "A díjazás a diagnózis terjedelmétől és a beavatkozások számától függ, ezért az első egyeztetés után adunk írásos ajánlatot. A diagnózis szakaszra külön ajánlatot kap, így nem kell előre elköteleződnie a teljes folyamat mellett.",
      },
    ],
    related: [
      "/hr-tanacsadas-kkv-knak/",
      "/vezetoi-trening/",
      "/team-coaching/",
      "/munkakori-leiras-minta/",
    ],
    posts: ["szervezeti-diagnozis-mikor-erdemes", "mikor-van-szuksege-kkv-nak-hr-tanacsadora"],
    form: {
      title: "Beszéljük át, hol akad a szervezet",
      text: "Írja le röviden, mekkora a cég, mi változott az elmúlt években, és mi az, ami most a legtöbb energiát viszi el. Az első egyeztetés díjmentes és nem jár kötelezettséggel.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hr-tanacsadas-kkv-knak",
    path: "/hr-tanacsadas-kkv-knak/",
    label: "HR-tanácsadás kkv-knak",
    title: "HR tanácsadó kkv-knak – stratégia, outsourcing | O2 Tanácsadó",
    description:
      "HR tanácsadó 20–200 fős kkv-knak: HR-stratégia, HR-outsourcing, megtartás, ösztönzés. Gyakorló cégvezető tanácsadók, országosan, online és helyszínen.",
    h1: "HR-tanácsadó kis- és középvállalkozásoknak",
    eyebrow: "HR-tanácsadás · országosan",
    lead:
      "Egy 20–200 fős cégnek ritkán van szüksége teljes HR-osztályra. Arra van szüksége, hogy a HR-döntések – kit veszünk fel, hogyan tartjuk meg, mit várunk el, mivel ösztönzünk – a cég üzleti céljaihoz kapcsolódjanak. Ebben segítünk HR-tanácsadóként: stratégiával, konkrét megoldásokkal és ha kell, kiszervezett HR-működéssel.",
    interest: "hr-strategia",
    cta: "Kérjen első egyeztetést",
    serviceType: "HR-tanácsadás",
    problem: {
      title: "Amikor a HR a tulajdonos íróasztalán landol",
      paragraphs: [
        "A legtöbb kkv-nál a HR nem szakma, hanem mellékfeladat: az ügyvezető, a pénzügyes vagy az irodavezető viszi, a bérszámfejtés kívül van, a toborzás pedig akkor indul, amikor már ég a ház. Ez 15–20 főig elmegy. Fölötte viszont a HR-döntések hiánya üzleti költséggé válik: elhúzódó betöltetlen pozíciók, jó emberek távozása, tisztázatlan elvárások, bérfeszültségek, vezetők, akik nem tudják, mit szabad és mit nem.",
        "HR-tanácsadóként nem nagyvállalati HR-rendszert építünk kicsiben. Azt nézzük meg, melyik 4–5 HR-döntés viszi előre vagy tartja vissza a céget, és arra adunk működő, a meglévő vezetők által fenntartható megoldást. Ahol nincs kapacitás a belső HR-re, ott HR-outsourcing formában mi látjuk el a HR-vezetői feladatokat.",
      ],
    },
    forWhom: {
      title: "Kinek való a HR-tanácsadás?",
      intro: "Olyan 20–200 fős cégek tulajdonosainak és ügyvezetőinek, ahol:",
      items: [
        "nincs HR-vezető, vagy egy adminisztratív HR-es van, de stratégiai döntésekhez nincs kivel egyeztetni;",
        "a toborzás, a megtartás vagy a bérezés kérdései visszatérően a tulajdonos idejét viszik el;",
        "a cég növekedne, de nem tudja, milyen csapatot és milyen HR-működést igényel a következő 2–3 év;",
        "az ügyvezető szeretné, hogy a HR-t valaki szakmai felelősséggel vigye, de egy teljes állású HR-vezető még nem indokolt;",
        "több HR-projekt (munkakörök, teljesítményértékelés, ösztönzés) indult már, de egyik sem állt össze rendszerré.",
      ],
    },
    symptoms: {
      title: "Tipikus helyzetek",
      items: [
        "Egy kulcspozíció hónapok óta betöltetlen, és senki sem tudja pontosan, kit is keresnek.",
        "A jó kollégák 1–2 év után továbbállnak, és a kilépőbeszélgetésekből nem áll össze a kép.",
        "A béremelés az egyetlen ösztönző eszköz, és már az sem működik.",
        "Az új belépők beilleszkedése esetleges: van, aki két hét után beáll, van, aki két hónap után kilép.",
        "A vezetők másképp értelmezik a szabályokat: túlóra, szabadság, home office, jutalom.",
        "A tulajdonos szeretne kilépni a napi HR-ügyekből, de nem látja, kire és hogyan bízhatja.",
      ],
    },
    process: {
      title: "Hogyan dolgozunk együtt HR-tanácsadóként?",
      intro: "Az együttműködés formája a cég igényéhez igazodik: projekt, rendszeres tanácsadás vagy kiszervezett HR-működés.",
      steps: [
        {
          title: "Első egyeztetés",
          text: "Díjmentes, kötelezettség nélküli beszélgetés a tulajdonossal vagy ügyvezetővel. Áttekintjük a cég helyzetét, a legégetőbb HR-kérdéseket és azt, milyen együttműködési forma illik a céghez.",
        },
        {
          title: "HR-helyzetkép",
          text: "Rövid átvilágítás: létszám, fluktuáció, bérstruktúra, munkakörök, toborzási gyakorlat, vezetői működés. Vezetői interjúk és a meglévő HR-dokumentumok átnézése. Eredménye egy írásos helyzetkép a legfontosabb 4–5 beavatkozási ponttal.",
        },
        {
          title: "HR-stratégia és cselekvési terv",
          text: "A cég üzleti céljaiból kiindulva rögzítjük, milyen létszámra, milyen kompetenciákra és milyen HR-működésre van szükség 1–3 éves távon. Ebből lesz a konkrét terv: mit, ki, mikorra.",
        },
        {
          title: "Megvalósítás vagy HR-outsourcing",
          text: "Projektként: például munkakörök rendezése, ösztönzési rendszer, kiválasztási folyamat. Kiszervezett HR-vezetőként: havi keretben mi visszük a HR-döntések előkészítését, a vezetők támogatását és a HR-folyamatok működtetését.",
        },
        {
          title: "Rendszeres vezetői egyeztetés",
          text: "Havi vagy negyedéves áttekintés az ügyvezetővel: mi valósult meg, mit mutatnak a számok (fluktuáció, betöltési idő, próbaidős kilépések), mi a következő lépés.",
        },
      ],
    },
    results: {
      title: "Mire számíthat a cég?",
      intro: "A HR-tanácsadás célja, hogy a HR-döntések ne ad hoc, hanem a cég céljaiból következő döntések legyenek. Ügyfeleinknél ez jellemzően a következőkben látszik:",
      items: [
        "A tulajdonos kevesebb időt tölt HR-ügyekkel, mert van rendszer és van felelős.",
        "A toborzás a kulcspozíciókra és a valós igényre irányul, nem a legutóbbi kilépésre reagál.",
        "A megtartás és az ösztönzés nem csak béremelésből áll, hanem átgondolt, kommunikált keretből.",
        "Az elvárások – munkakörök, teljesítmény, szabályok – írásban rögzítettek és a vezetők egységesen alkalmazzák.",
        "A HR-mutatók (fluktuáció, betöltési idő, próbaidős kilépés) mérhetők és követhetők.",
      ],
      caveat:
        "A fluktuáció vagy a toborzási idő javulásának mértékét nem ígérjük előre: ezek a piactól, az ágazattól és a cég döntéseitől is függnek. Azt vállaljuk, hogy a helyzetkép pontos lesz, a javaslatok kkv-méretűek, és a megvalósítást nem hagyjuk magára.",
    },
    faq: [
      {
        q: "Mit csinál pontosan egy HR-tanácsadó egy kkv-nál?",
        a: "Átlátja a cég HR-működését, azonosítja, mely HR-döntések akadályozzák az üzleti célokat, és ezekre ad megoldást: HR-stratégiát, toborzási és kiválasztási folyamatot, munkaköröket, megtartási és ösztönzési rendszert, vezetői támogatást. A kkv-tanácsadás lényege, hogy a megoldások a meglévő vezetőkkel és korlátozott HR-kapacitással is működtethetők legyenek.",
      },
      {
        q: "Mi az a HR-outsourcing, és mikor érdemes?",
        a: "HR-outsourcing esetén a HR-vezetői feladatokat külső szakember látja el, havi keretben: a HR-döntések előkészítése, a vezetők támogatása, a toborzás és a HR-folyamatok irányítása. Akkor érdemes, ha a cégnek van HR-igénye, de egy teljes állású HR-vezetőt még nem tud vagy nem akar foglalkoztatni. Tapasztalatunk szerint ez jellemzően a 30–120 fős tartomány.",
      },
      {
        q: "Csak Budapesten dolgoznak?",
        a: "Nem. Az O2 Tanácsadó országosan dolgozik, a székhelyünk Budapesten van. A tanácsadás nagy része online zajlik, a helyszíni jelenlétet – vezetői interjúk, workshopok, tréningek – igény szerint a cég telephelyén biztosítjuk, Magyarország bármely pontján.",
      },
      {
        q: "Miben más egy cégvezető HR-tanácsadó?",
        a: "Alapítóink maguk is kkv-tulajdonos ügyvezetők. A HR-kérdéseket nem elméletből, hanem saját döntéseikből ismerik: bérezés, felvétel, elbocsátás, vezetőváltás. Ezért a javaslataink a tulajdonosi szempontot is figyelembe veszik, nem csak a HR-szakmai ideált.",
      },
      {
        q: "Mennyi idő alatt látszik eredmény?",
        a: "A HR-helyzetkép 2–4 hét. Az első kézzelfogható változások – például tisztázott munkakörök, egy működő kiválasztási folyamat – 2–3 hónapon belül jelentkeznek. A fluktuáció vagy a megtartás javulása hosszabb, jellemzően 6–12 hónapos távon mérhető.",
      },
      {
        q: "Hogyan kezdődik az együttműködés?",
        a: "Egy díjmentes első egyeztetéssel. Ezen tisztázzuk a helyzetet és a célokat, majd írásos ajánlatot adunk a helyzetkép elkészítésére. A folytatásról a helyzetkép ismeretében dönt.",
      },
    ],
    related: [
      "/munkaero-megtartas/",
      "/szervezetfejlesztes/",
      "/munkakori-leiras-minta/",
      "/szolgaltatasok/#toborzas",
    ],
    posts: [
      "mikor-van-szuksege-kkv-nak-hr-tanacsadora",
      "toborzas-es-kivalasztas-gyorsabban-pontosabban",
      "mukodo-osztonzesi-rendszer-kkv-ban",
    ],
    form: {
      title: "Kérjen első egyeztetést HR-tanácsadóval",
      text: "Írja le röviden, mekkora a cég, van-e belső HR, és mi az a HR-kérdés, amely most a legtöbb energiát viszi el. Díjmentes, kötelezettség nélküli első beszélgetés.",
    },
    extraSections: [
      {
        id: "hr-outsourcing",
        title: "HR-outsourcing: kiszervezett HR-vezető havi keretben",
        paragraphs: [
          "Sok 30–120 fős cégnél a HR-igény már túlnő az adminisztráción, de egy teljes állású HR-vezető foglalkoztatása még nem indokolt. Ilyenkor a HR-outsourcing a megoldás: havi keretben mi látjuk el a HR-vezetői feladatokat, a cég vezetői pedig azt kapják, amit egy belső HR-vezetőtől várnának, a fix bérköltség nélkül.",
        ],
        bullets: [
          "HR-döntések előkészítése az ügyvezetőnek: bérezés, létszám, szervezeti kérdések.",
          "Toborzás és kiválasztás irányítása, hirdetés, interjúk, ajánlat.",
          "Belépés, próbaidő, munkakörök, teljesítménybeszélgetések működtetése.",
          "A vezetők támogatása a napi HR-helyzetekben: konfliktus, teljesítményprobléma, kilépés.",
          "Havi riport a HR-mutatókról és a következő lépésekről.",
        ],
      },
    ],
  },

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
    interest: "vezetoi-trening",
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
    slug: "vezetoi-coaching",
    path: "/vezetoi-coaching/",
    label: "Vezetői coaching",
    title: "Vezetői coaching cégvezetőknek és kulcsvezetőknek | O2 Tanácsadó",
    description:
      "Vezetői coaching tulajdonos-ügyvezetőknek és kulcsvezetőknek: szerepváltás, döntések, delegálás, terhelés. Gyakorló cégvezető coachok, országosan, online is.",
    h1: "Vezetői coaching cégvezetőknek és kulcsvezetőknek",
    eyebrow: "Vezetői coaching · országosan",
    lead:
      "A vezetői coaching egy vezető konkrét helyzeteire irányuló, célhoz kötött egyéni munka. Tulajdonos-ügyvezetők és kkv-k kulcsvezetői fordulnak hozzánk, amikor új szerepbe kerülnek, egy döntést nem tudnak egyedül végiggondolni, vagy a terhelés már a cég működését is érinti. Coachaink maguk is gyakorló cégvezetők.",
    interest: "vezetoi-coaching",
    cta: "Kérjen bemutatkozó beszélgetést",
    serviceType: "Vezetői coaching",
    problem: {
      title: "A vezető egyedül van a döntéseivel",
      paragraphs: [
        "Egy kkv-tulajdonosnak vagy ügyvezetőnek ritkán van kivel átbeszélnie a valódi kérdéseit: kit léptessen elő, kitől váljon meg, hogyan engedje el az operatív irányítást, mit kezdjen a saját túlterheltségével. A vezetőtársak érintettek, a család nem látja a részleteket, a tanácsadó pedig gyakran kész választ ad ahelyett, hogy segítene végiggondolni.",
        "A vezetői coaching ezt a hiányt tölti be: strukturált, bizalmas, célhoz kötött beszélgetéssorozat, amelyben a vezető saját helyzeteit dolgozza fel, és saját döntésekre jut. Nem terápia, nem tanácsadás és nem baráti beszélgetés. A coach kérdez, tükröz, keretet tart, és – gyakorló cégvezetőként – ismeri a helyzetet, amelyben a vezető dolgozik.",
      ],
    },
    forWhom: {
      title: "Kinek való a vezetői coaching?",
      items: [
        "Tulajdonos-ügyvezetőknek, akik ki akarnak lépni az operatív irányításból, vagy generációváltásra készülnek.",
        "Új ügyvezetőknek és felsővezetőknek, akik tulajdonostól vagy elődtől veszik át a cég irányítását.",
        "Középvezetőknek, akik szakmai szerepből vezetői szerepbe léptek, és ebben elakadtak.",
        "Kulcsvezetőknek, akiknél a cég a következő lépést tervezi: nagyobb terület, új üzletág, vezetői csapat építése.",
        "Vezetőknek, akiknél a terhelés, a döntésképtelenség vagy a vezetői konfliktus már a működést érinti.",
      ],
    },
    symptoms: {
      title: "Tipikus coaching-témák kkv-vezetőknél",
      items: [
        "„Mindent én csinálok, de nem tudom, kinek és hogyan adjam át.”",
        "Egy vezetőtárs vagy kulcsember teljesítménye nem megfelelő, de a döntést hónapok óta halogatja.",
        "A tulajdonos és az ügyvezető szerepe összecsúszik, és ez feszültséget okoz.",
        "Az új vezető a korábbi kollégáival nem tud vezetőként fellépni.",
        "A vezető állandó tűzoltásban van, a stratégiai kérdésekre nem jut ideje.",
        "Döntés előtt áll – bővítés, leépítés, üzletág lezárása –, és nincs kivel végiggondolni.",
      ],
    },
    process: {
      title: "Hogyan zajlik a vezetői coaching?",
      steps: [
        {
          title: "Bemutatkozó beszélgetés",
          text: "Díjmentes, 45–60 perces beszélgetés online vagy személyesen. Tisztázzuk a témát, a célt és azt, hogy a coaching a megfelelő eszköz-e. Fontos a személyes illeszkedés is: ezen az alkalmon dől el, hogy dolgozunk-e együtt.",
        },
        {
          title: "Célkitűzés és keretek",
          text: "Rögzítjük a coaching célját – például „6 hónapon belül átadom az operatív irányítást X-nek” –, az alkalmak számát és a bizalmi kereteket. Ha a coachingot a cég fizeti, a megbízóval is egyeztetjük a célt, a beszélgetések tartalma azonban bizalmas marad.",
        },
        {
          title: "Coaching-alkalmak",
          text: "Jellemzően 6–10 alkalom, 60–90 perc, 2–4 hetente. Minden alkalom a vezető aktuális helyzetéből indul, és konkrét döntéssel vagy lépéssel zárul. Az alkalmak között a vezető a gyakorlatban próbálja ki, amit kidolgozott.",
        },
        {
          title: "Zárás és értékelés",
          text: "Az utolsó alkalmon visszanézzük a kitűzött célt: mi valósult meg, mi maradt, mi a következő lépés. Igény szerint később egy-egy alkalommal folytatható.",
        },
      ],
    },
    results: {
      title: "Mire számíthat a vezető és a cég?",
      intro: "A coaching eredménye a vezető döntéseiben és a cég működésében jelenik meg:",
      items: [
        "A halogatott döntés – kinevezés, elválás, átszervezés – megszületik és végrehajtásra kerül.",
        "A tulajdonos tudatosan ad át feladatokat és hatásköröket, a cég működése kevésbé függ tőle.",
        "Az új vezető felvállalja a vezetői szerepet, és a csapata ezt elfogadja.",
        "A vezető terhelése csökken, mert rendszert épít a prioritásoknak és a delegálásnak.",
        "A vezetői konfliktusok kezelhetővé válnak, mert a vezető látja a saját részét bennük.",
      ],
      caveat:
        "A coaching nem helyettesíti a döntést és a vezető munkáját. Az eredmény attól függ, mennyire nyitott a vezető a saját működésének átgondolására, és mennyire következetesen próbálja ki a gyakorlatban, amit az alkalmakon kidolgoz.",
    },
    faq: [
      {
        q: "Miben más a vezetői coaching, mint a tanácsadás?",
        a: "A tanácsadó a cég problémájára ad megoldást. A coach a vezetőt segíti abban, hogy a saját helyzetére maga találja meg a választ, és azt következetesen végig is vigye. Coachként nem mondjuk meg, mit tegyen; cégvezetői tapasztalatunk viszont abban segít, hogy értsük a helyzetet és jó kérdéseket tegyünk fel.",
      },
      {
        q: "Hány alkalomból áll egy coaching-folyamat?",
        a: "Jellemzően 6–10 alkalom, 2–4 hetente. Egy jól körülhatárolt téma – például egy konkrét döntés végiggondolása – 3–4 alkalom alatt lezárható. A folyamat hosszáról a célkitűzésnél állapodunk meg, és bármikor lezárható.",
      },
      {
        q: "Online vagy személyesen zajlik?",
        a: "Mindkettő működik. Ügyfeleink jelentős része online dolgozik velünk, az ország bármely pontjáról. A személyes találkozó Budapesten vagy igény szerint a cég telephelyén is megoldható. Sok vezető az első és az utolsó alkalmat kéri személyesen, a többit online.",
      },
      {
        q: "Bizalmas, ha a cég fizeti a coachingot?",
        a: "Igen. A megbízóval a coaching célját egyeztetjük, a beszélgetések tartalmát azonban nem osztjuk meg. A vezető maga dönti el, mit oszt meg a megbízóval a folyamatról. Ezt a keretet az elején írásban rögzítjük.",
      },
      {
        q: "Coaching vagy tréning kell egy középvezetőnek?",
        a: "Ha a vezető egyéni elakadása, szerepváltása vagy konkrét döntési helyzete a téma, coaching. Ha több vezetőnek hiányzik ugyanaz a vezetői eszköztár, tréning. Az első beszélgetésen ezt közösen tisztázzuk, és nem ragaszkodunk egyik formához sem.",
      },
      {
        q: "Milyen háttérrel dolgoznak a coachok?",
        a: "Alapítóink business és menedzsment coach képzettséggel, szervezetfejlesztői háttérrel és több évtizedes vezetői, kkv-tulajdonosi tapasztalattal dolgoznak. Vállalati egyéni coaching tapasztalatunkat hazai és nemzetközi cégek vezetőivel szereztük.",
      },
    ],
    related: ["/vezetoi-trening/", "/team-coaching/", "/szervezetfejlesztes/", "/hr-tanacsadas-kkv-knak/"],
    posts: ["vezetoi-trening-vagy-vezetoi-coaching", "szervezeti-diagnozis-mikor-erdemes"],
    form: {
      title: "Kérjen bemutatkozó beszélgetést",
      text: "Írja le néhány mondatban, milyen vezetői szerepben dolgozik, és mi az a helyzet vagy döntés, amelyet át szeretne gondolni. A bemutatkozó beszélgetés díjmentes és bizalmas.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "team-coaching",
    path: "/team-coaching/",
    label: "Team coaching",
    title: "Team coaching vezetői csapatoknak | O2 Tanácsadó",
    description:
      "Team coaching kkv-k vezetői csapatainak: döntéshozatal, felelősségek, konfliktusok, közös célok. Országosan, a cég helyszínén vagy online.",
    h1: "Team coaching: amikor a csapat működésén kell dolgozni, nem az egyes embereken",
    eyebrow: "Team coaching · országosan",
    lead:
      "A team coaching egy létező csapat – leggyakrabban a vezetői csapat – közös működésére irányul: hogyan döntenek, hogyan osztják el a felelősséget, hogyan kezelik az egymás közti feszültségeket. Nem csapatépítő nap, hanem több alkalmas, célhoz kötött munka, amelyben a csapat a saját valós ügyein dolgozik.",
    interest: "team-coaching",
    cta: "Kérjen egyeztetést team coachingra",
    serviceType: "Team coaching",
    problem: {
      title: "Jó emberek, akik csapatként nem működnek",
      paragraphs: [
        "Egy kkv vezetői csapata jellemzően 3–7 emberből áll: tulajdonos, ügyvezető, termelési, kereskedelmi, pénzügyi vezető. Külön-külön mindegyik jó a saját területén. Együtt viszont gyakran előfordul, hogy a vezetői értekezleten nem születik döntés, a részlegek egymásra mutogatnak, a régi és az új vezetők között kimondatlan feszültség van, vagy a tulajdonos jelenléte miatt senki sem mond ellent.",
        "A team coaching abban különbözik a tréningtől, hogy nem eszközöket tanít, hanem a csapat saját, aktuális ügyein keresztül változtat a közös működésen. A coach nem old meg semmit a csapat helyett: keretet ad, kérdez, tükrözi, ami történik, és segít a csapatnak kimondani és eldönteni azt, amit eddig kerülgetett.",
      ],
    },
    forWhom: {
      title: "Kinek való a team coaching?",
      items: [
        "Vezetői csapatoknak, ahol a döntéshozatal lassú, vagy a döntéseket nem hajtják végre egységesen.",
        "Új összetételű csapatoknak: új ügyvezető, új vezetőtárs, összevont részlegek.",
        "Csapatoknak, ahol két-három kulcsember közötti feszültség a teljes működést terheli.",
        "Tulajdonos-ügyvezető és vezetői csapat közötti szerep- és hatáskör-tisztázáshoz.",
        "Projekt- vagy kulcscsapatoknak, amelyeknek egy fontos cél eléréséhez kell összehangolniuk a működésüket.",
      ],
    },
    symptoms: {
      title: "Tipikus tünetek",
      items: [
        "A vezetői értekezlet beszámolókból áll, a valódi kérdések a folyosón dőlnek el.",
        "A döntést a teremben mindenki elfogadja, aztán a saját területén mindenki másképp hajtja végre.",
        "Két vezető között tartós konfliktus van, amelyről mindenki tud, de senki nem beszél.",
        "Az új vezetőt a csapat nem fogadja el, vagy a régi vezetők kihagyják a döntésekből.",
        "A csapattagok a tulajdonoshoz viszik a vitáikat ahelyett, hogy egymással rendeznék.",
        "A közös célok nem világosak: minden vezető a saját területét optimalizálja.",
      ],
    },
    process: {
      title: "Hogyan zajlik a team coaching?",
      steps: [
        {
          title: "Egyeztetés a megbízóval",
          text: "A tulajdonossal vagy ügyvezetővel tisztázzuk, mi a csapat helyzete, mi a cél, és hogy team coaching-e a megfelelő eszköz. Van, amikor kiderül, hogy először egyéni coaching vagy szervezeti diagnózis kell.",
        },
        {
          title: "Egyéni előbeszélgetések",
          text: "Minden csapattaggal rövid, bizalmas beszélgetés: hogyan látja a csapat működését, mit vár a folyamattól. Ez adja a közös munka kiindulópontját, és biztosítja, hogy senki ne érezze magát célpontnak.",
        },
        {
          title: "Közös alkalmak",
          text: "Jellemzően 4–8 alkalom, 3–4 óra, 3–6 hetente, a cég helyszínén vagy online. A csapat a saját valós ügyein dolgozik: egy halogatott döntés, egy felelősségi vita, a közös célok, a működési szabályok. Minden alkalom konkrét megállapodással zárul.",
        },
        {
          title: "Megállapodások és utánkövetés",
          text: "A csapat írásban rögzíti, miben állapodott meg: döntési rend, értekezletek, felelősségek, hogyan kezelik a nézeteltéréseket. A folyamat végén és 3 hónap múlva visszanézzük, mi épült be.",
        },
      ],
    },
    results: {
      title: "Mire számíthat a csapat és a cég?",
      intro: "A team coaching hatása a csapat döntéseiben és a részlegek közötti működésben látszik:",
      items: [
        "A vezetői értekezleten döntések születnek, és a csapat egységesen képviseli őket kifelé.",
        "A kimondatlan konfliktusok kimondottá és kezelhetővé válnak.",
        "A felelősségek és a hatáskörök tisztázottak, kevesebb ügy jut a tulajdonoshoz.",
        "Az új vezető vagy az új összetételű csapat működőképessé válik.",
        "A csapat saját szabályokat alakít ki arra, hogyan kezeli a vitákat és a döntéseket.",
      ],
      caveat:
        "A team coaching nem old meg strukturális problémát: ha a szervezeti felépítés vagy a hatáskörök hibásak, azt szervezetfejlesztéssel kell rendezni. Az eredmény attól is függ, hogy a tulajdonos vagy ügyvezető maga is részt vesz-e a folyamatban, és vállalja-e a saját részét a csapat működésében.",
    },
    faq: [
      {
        q: "Mi a különbség a team coaching és a csapatépítés között?",
        a: "A csapatépítés egy alkalom, amely a hangulaton és a kapcsolatokon javít. A team coaching több alkalmas, célhoz kötött munka, amelyben a csapat a saját valós ügyein – döntések, felelősségek, konfliktusok – dolgozik, és működési megállapodásokkal zár. A hatása a napi munkában mérhető, nem a hangulatban.",
      },
      {
        q: "Részt vegyen a tulajdonos a team coachingon?",
        a: "Ha a tulajdonos a vezetői csapat része, igen. A csapat működését a tulajdonos jelenléte és stílusa nagyban meghatározza; nélküle a folyamat csak a tünetekkel tud foglalkozni. Ezt a megbízóval az elején nyíltan tisztázzuk.",
      },
      {
        q: "Mekkora csapattal működik?",
        a: "Jellemzően 3–10 fős csapatokkal. Ennél nagyobb csoportnál már nem team coachingról, hanem szervezeti szintű beavatkozásról beszélünk, amelyhez más eszközök – workshop, szervezetfejlesztés – illenek.",
      },
      {
        q: "Mi történik, ha kiderül, hogy a probléma egy-két személynél van?",
        a: "Ezt az egyéni előbeszélgetések és az első közös alkalmak megmutatják. Ilyenkor a megbízóval egyeztetve javasolhatunk egyéni vezetői coachingot az érintetteknek, párhuzamosan vagy a team coaching előtt. Nem folytatunk olyan csapatfolyamatot, amely valójában egy személyes ügyet kerülget.",
      },
      {
        q: "Helyszínen vagy online tartják?",
        a: "Mindkettő működik, és országosan vállaljuk. Az első és az utolsó alkalmat javasoljuk személyesen, a cég telephelyén vagy külső helyszínen tartani; a közbülső alkalmak online is jól működnek, különösen több telephelyes cégeknél.",
      },
      {
        q: "Bizalmasak az egyéni előbeszélgetések?",
        a: "Igen. Az egyéni előbeszélgetésekből csak összesített, nem személyhez köthető képet viszünk a közös munkába, és csak azt, amihez a beszélgetőpartner hozzájárult. Ez a feltétele annak, hogy a csapattagok őszintén beszéljenek.",
      },
    ],
    related: ["/vezetoi-coaching/", "/vezetoi-trening/", "/szervezetfejlesztes/"],
    posts: ["vezetoi-trening-vagy-vezetoi-coaching", "szervezeti-diagnozis-mikor-erdemes"],
    form: {
      title: "Kérjen egyeztetést team coachingra",
      text: "Írja le, milyen csapatról van szó, hányan vannak, és mi az, ami a közös működésben most nem megy. Az első egyeztetés díjmentes.",
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
    interest: "munkakorok",
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
    interest: "megtartas",
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

export const SERVICE_BY_PATH = Object.fromEntries(
  SERVICE_PAGES_DATA.map((s) => [s.path, s]),
) as Record<string, ServicePageData>;
