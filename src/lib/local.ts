import type { ServiceId } from "./content";

export interface LocalPage {
  slug: "hr-tanacsadas-budapest" | "hr-tanacsadas-gyor" | "hr-tanacsadas-szeged";
  path: string;
  /** Rövid név a hivatkozásokhoz. */
  label: string;
  city: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  /** Szolgáltatási terület természetes leírása, bekezdésenként. */
  areaTitle: string;
  area: string[];
  /** Térségi kkv-helyzetek, amelyekben a négy terület releváns lehet – óvatos, nem statisztikai megfogalmazással. */
  contextTitle: string;
  contexts: { title: string; text: string; service: ServiceId }[];
  /** Térség-specifikus mondat szolgáltatásonként. */
  serviceNotes: Record<ServiceId, string>;
  formTitle: string;
  formText: string;
}

export const LOCAL: LocalPage[] = [
  {
    slug: "hr-tanacsadas-budapest",
    path: "/hr-tanacsadas-budapest/",
    label: "Budapest és Pest vármegye",
    city: "Budapest",
    county: "Pest vármegye",
    title: "HR tanácsadás Budapesten és Pest vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás budapesti és Pest vármegyei 20–200 fős kkv-knak: HR-stratégia, toborzás, munkakörök, szervezetfejlesztés. Budapesti székhely, cégvezető alapítók.",
    h1: "HR tanácsadás Budapesten és Pest vármegyében",
    eyebrow: "Budapest · Pest vármegye",
    intro: [
      "Az O2 Tanácsadó Kft. székhelye Budapesten, a VIII. kerületben található. Budapesti és Pest vármegyei kis- és középvállalkozásoknak nyújtunk HR-tanácsadást: HR-stratégiát, toborzást és kiválasztást, munkakörök és szervezeti struktúra kialakítását, valamint képzési és szervezetfejlesztési támogatást.",
      "Budapest közigazgatásilag nem része Pest vármegyének, a két térség gazdasága és munkaerőpiaca mégis szorosan összekapcsolódik: sok kolléga az agglomerációból jár be dolgozni, és sok cég működik a városhatáron kívül. Ezért erre az oldalra a főváros és a vármegye vállalkozásait együtt gyűjtöttük.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Budapest valamennyi kerületéből várjuk a 20–200 fős vállalkozások megkeresését, a belvárosi szolgáltató cégektől a külső kerületek ipari és logisztikai vállalkozásaiig.",
      "Pest vármegyéből ugyanígy várjuk az agglomeráció településein működő cégeket, például Érd, Budaörs, Törökbálint, Budakeszi, Szentendre, Dunakeszi, Fót, Gödöllő, Vecsés, Gyál és Szigetszentmiklós térségéből, és a vármegye távolabbi városainak vállalkozásait is, például Vác és a Dunakanyar, Cegléd, Nagykőrös, Dabas, Monor vagy Ráckeve környékéről.",
    ],
    contextTitle: "Ismerős helyzetek fővárosi és Pest vármegyei kkv-knál",
    contexts: [
      {
        title: "Verseny a nagyvállalatokkal a szakemberekért",
        text: "Budapesten egy kkv gyakran ugyanazokért a jelöltekért versenyez, mint a nagyvállalatok és a multinacionális cégek. Ilyen helyzetben a kulcspozíciók tudatos meghatározása és a jól felépített kiválasztás segíthet, hogy a cég a valóban fontos pozíciókra koncentráljon.",
        service: "toborzas",
      },
      {
        title: "Gyors növekedés, elmaradó struktúra",
        text: "Egy fővárosi vagy agglomerációs cég néhány év alatt nőhet 20 főről 100 fölé. A munkakörök és a döntési szintek ilyenkor könnyen lemaradnak a létszám mögött, ami a vezetőket túlterhelheti.",
        service: "munkakorok",
      },
      {
        title: "Ingázás és megtartás",
        text: "Az agglomerációból ingázó kollégák előtt jellemzően több alternatív munkahely is nyitva áll. Ilyen környezetben a megtartás nem eseti kérdés, hanem a HR-stratégia része lehet.",
        service: "hr-strategia",
      },
      {
        title: "Vezetői utánpótlás és fejlesztés",
        text: "A növekvő cégeknél a kulcsemberek új szerepbe kerülhetnek. A coaching, a mentoring és a csoportos fejlesztés ezekben az átmenetekben tud támogatást adni.",
        service: "szervezetfejlesztes",
      },
    ],
    serviceNotes: {
      "hr-strategia":
        "Fővárosi és Pest vármegyei cégeknél a HR-stratégia egyik központi kérdése lehet a megtartás: mit kínál a cég, amiért a kollégák a sok alternatíva ellenére maradnak.",
      toborzas:
        "Budapesti jelöltpiacon a kulcspozíciók pontos meghatározása és a strukturált kiválasztás különösen fontos lehet, hogy a toborzási energia a megfelelő pozíciókra irányuljon.",
      munkakorok:
        "Gyorsan növekvő agglomerációs és fővárosi cégeknél a szervezeti struktúra rendezése segíthet abban, hogy a vezetők ne minden operatív kérdést maguk döntsenek el.",
      szervezetfejlesztes:
        "A fejlesztési terv az igényfelmérésre épül, így a képzési költség oda kerülhet, ahol a budapesti vagy Pest vármegyei cég működésében tényleges változást hozhat.",
    },
    formTitle: "Első egyeztetés budapesti és Pest vármegyei cégeknek",
    formText:
      "Írja le röviden, milyen helyzetben van a cég, és melyik területen kér támogatást. Az első egyeztetés díjmentes, és nem jár kötelezettséggel.",
  },
  {
    slug: "hr-tanacsadas-gyor",
    path: "/hr-tanacsadas-gyor/",
    label: "Győr-Moson-Sopron vármegye",
    city: "Győr",
    county: "Győr-Moson-Sopron vármegye",
    title: "HR tanácsadás Győr-Moson-Sopron vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás győri, soproni, mosonmagyaróvári és Győr-Moson-Sopron vármegyei 20–200 fős kkv-knak: stratégia, toborzás, munkakörök, szervezetfejlesztés.",
    h1: "HR tanácsadás Győrben és Győr-Moson-Sopron vármegyében",
    eyebrow: "Győr · Győr-Moson-Sopron vármegye",
    intro: [
      "Győr-Moson-Sopron vármegye Északnyugat-Magyarország egyik ismert ipari és gazdasági térsége, ahol ipari beszállítók, logisztikai, kereskedelmi és szolgáltató vállalkozások működnek, köztük sok 20–200 fős kkv. Az O2 Tanácsadó ezeknek a cégeknek kínál HR-tanácsadást a stratégiától a toborzáson át a szervezetfejlesztésig, online és igény szerint helyszínen.",
      "A térségben a nagy ipari munkáltatók jelenléte és az osztrák, illetve szlovák határ közelsége miatt a toborzás és a megtartás sok kkv-vezető számára visszatérő kérdés lehet. Az ilyen helyzetekben tudunk támogatást adni.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Győrből és közvetlen vonzáskörzetéből ugyanúgy várjuk az érdeklődést, mint a vármegye többi részéről: Mosonmagyaróvár és a Szigetköz, Sopron és a Fertő-táj, a Rábaköz (Csorna, Kapuvár), Pannonhalma térsége, Tét, Jánossomorja, Fertőd és Fertőszentmiklós vállalkozásaitól egyaránt.",
      "Az egyeztetéskérés a vármegye bármely településéről ugyanúgy történik: az űrlapon jelölje az érintett területet, és röviden írja le a cég helyzetét.",
    ],
    contextTitle: "Ismerős helyzetek Győr-Moson-Sopron vármegyei kkv-knál",
    contexts: [
      {
        title: "Elvándorlás a nagy munkáltatókhoz és a határon túlra",
        text: "Ha egy kkv képzett kollégákat veszít a térség nagy ipari munkáltatói vagy a határon túli munkavállalás javára, a megtartás keretét a HR-stratégia adhatja meg: mi az, amit a cég kínál, és hogyan tartja meg a kulcsembereket.",
        service: "hr-strategia",
      },
      {
        title: "Szűk jelöltpiac a szakmunkás- és mérnökpozíciókban",
        text: "Ipari beszállító és műszaki kkv-knál egy-egy kulcspozíció hosszú ideig betöltetlen maradhat. A recruitment-stratégia segít eldönteni, mely pozíciók kritikusak, és hogyan érdemes a kiválasztást felépíteni.",
        service: "toborzas",
      },
      {
        title: "Termelő és szolgáltató cégek szervezeti rendje",
        text: "Műszakos, több telephelyes vagy gyorsan bővülő cégeknél a munkakörök és a szervezeti felépítés tisztázása csökkentheti a feladatkieséseket és a vezetői túlterhelést.",
        service: "munkakorok",
      },
      {
        title: "Vezetők és csapatok fejlesztése",
        text: "A műszakvezetők, csoportvezetők és a középvezetés fejlesztése igényfelmérésre épülő tréninggel, team coachinggal vagy egyéni coachinggal támogatható.",
        service: "szervezetfejlesztes",
      },
    ],
    serviceNotes: {
      "hr-strategia":
        "Győr-Moson-Sopron vármegyében a HR-stratégia egyik központi kérdése lehet a megtartás ott, ahol a munkavállalók előtt több erős alternatíva áll.",
      toborzas:
        "Műszaki és ipari kkv-knál a kulcspozíciók meghatározása és a kulcsemberek megtalálása jelentheti a toborzás legnehezebb részét.",
      munkakorok:
        "Termelő és logisztikai cégeknél a pontos munkaköri leírások és az átlátható szervezeti diagram adhatják a napi működés alapját.",
      szervezetfejlesztes:
        "A fejlesztés sok kkv-nál a középvezetői réteg megerősítéséről szólhat: workshop, tréning, team coaching és egyéni coaching a diagnózis alapján.",
    },
    formTitle: "Első egyeztetés Győr-Moson-Sopron vármegyei cégeknek",
    formText:
      "Írja le röviden a cég helyzetét, és jelölje, melyik területen kér támogatást. Az első egyeztetés díjmentes, és nem jár kötelezettséggel.",
  },
  {
    slug: "hr-tanacsadas-szeged",
    path: "/hr-tanacsadas-szeged/",
    label: "Csongrád-Csanád vármegye",
    city: "Szeged",
    county: "Csongrád-Csanád vármegye",
    title: "HR tanácsadás Csongrád-Csanád vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás szegedi, hódmezővásárhelyi, makói és Csongrád-Csanád vármegyei 20–200 fős kkv-knak: stratégia, toborzás, munkakörök, szervezetfejlesztés.",
    h1: "HR tanácsadás Szegeden és Csongrád-Csanád vármegyében",
    eyebrow: "Szeged · Csongrád-Csanád vármegye",
    intro: [
      "Szeged a Dél-Alföld gazdasági, egyetemi és kutatási központja, Csongrád-Csanád vármegyében pedig az élelmiszeripartól a kereskedelmen és a logisztikán át az egészségügyi és tudásalapú szolgáltatásokig sokféle 20–200 fős vállalkozás működik. Az O2 Tanácsadó ezeknek a cégeknek nyújt HR-tanácsadást: HR-stratégiát, toborzást és kiválasztást, munkakörök kialakítását, képzést és szervezetfejlesztést.",
      "A szegedi egyetemi háttér és a román, illetve szerb határ közelsége a térség kkv-i számára lehetőség és kihívás is lehet: van honnan meríteni, a képzett kollégák megtartása pedig sok helyi kkv számára visszatérő vezetői kérdés. Az ilyen helyzetekben tudunk támogatást adni.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Szegedről és a város környékéről (Sándorfalva, Algyő, Deszk, Domaszék, Mórahalom, Kistelek) ugyanúgy várjuk az érdeklődést, mint a vármegye többi részéről: Hódmezővásárhely, Makó és a Maros mente, valamint a vármegye északi részén Szentes, Csongrád és Mindszent vállalkozásaitól is.",
      "Az egyeztetéskérés a vármegye bármely településéről ugyanúgy történik: az űrlapon jelölje az érintett területet, és röviden írja le a cég helyzetét.",
    ],
    contextTitle: "Ismerős helyzetek Csongrád-Csanád vármegyei kkv-knál",
    contexts: [
      {
        title: "Friss diplomások megtartása",
        text: "A friss diplomások és fiatal szakemberek megtartása sok szegedi és környékbeli kkv számára visszatérő vezetői kérdés lehet. Ebben az segíthet, ha a HR-stratégia tudatosan foglalkozik a fejlődési lehetőségekkel és a megtartással.",
        service: "hr-strategia",
      },
      {
        title: "Kulcsemberek megtalálása kisebb jelöltpiacon",
        text: "A speciális tudású kulcsemberek megtalálása időigényes lehet. A recruitment-stratégia segít meghatározni, mely pozíciók kritikusak, és hogyan épüljön fel a kiválasztás.",
        service: "toborzas",
      },
      {
        title: "Családi és növekvő cégek szervezeti rendje",
        text: "Ha egy cég családi vállalkozásból nőtt ki, a munkakörök és a szervezeti struktúra tisztázása segíthet abban, hogy a felelősségek ne csak a tulajdonosnál fussanak össze.",
        service: "munkakorok",
      },
      {
        title: "Fejlesztés, ami a helyi működésre szabott",
        text: "Az igényfelmérésre épülő fejlesztési terv, a csoportos tréning és az egyéni coaching a cég tényleges helyzetéből indul ki, nem általános programból.",
        service: "szervezetfejlesztes",
      },
    ],
    serviceNotes: {
      "hr-strategia":
        "Csongrád-Csanád vármegyei kkv-knál a HR-stratégia épülhet a képzett kollégák megtartására és a vezetői utánpótlásra.",
      toborzas:
        "A kulcspozíciók pontos meghatározása segíthet, hogy a toborzási erőfeszítés a valóban kritikus pozíciókra irányuljon.",
      munkakorok:
        "Családi hátterű és növekvő cégeknél a munkaköri leírások és a szervezeti diagram tehetik láthatóvá, ki miért felel.",
      szervezetfejlesztes:
        "A fejlesztés igényfelméréssel és a szervezet diagnózisával indul, majd workshopokkal, tréninggel, team coachinggal vagy egyéni coachinggal folytatódik.",
    },
    formTitle: "Első egyeztetés Csongrád-Csanád vármegyei cégeknek",
    formText:
      "Írja le röviden a cég helyzetét, és jelölje, melyik területen kér támogatást. Az első egyeztetés díjmentes, és nem jár kötelezettséggel.",
  },
];

export const LOCAL_BY_SLUG = Object.fromEntries(LOCAL.map((l) => [l.slug, l])) as Record<
  LocalPage["slug"],
  LocalPage
>;
