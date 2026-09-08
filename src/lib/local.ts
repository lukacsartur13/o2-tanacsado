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
  /** Térségi kkv-helyzetek, amelyekben a négy terület releváns. */
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
      "HR-tanácsadás budapesti és Pest vármegyei 20–200 fős kkv-knak: HR-stratégia, toborzás, munkakörök, szervezetfejlesztés. Budapesti székhelyű, cégvezető alapítókkal.",
    h1: "HR tanácsadás Budapesten és Pest vármegyében",
    eyebrow: "Budapest · Pest vármegye",
    intro: [
      "Az O2 Tanácsadó Kft. székhelye Budapesten, a VIII. kerületben található. Budapesti és Pest vármegyei kis- és középvállalkozásoknak nyújtunk HR-tanácsadást: HR-stratégiát, toborzást és kiválasztást, munkakörök és szervezeti struktúra kialakítását, valamint képzési és szervezetfejlesztési támogatást.",
      "Budapest közigazgatásilag nem része Pest vármegyének, a két térség munkaerőpiaca mégis szorosan összefügg: az agglomeráció településeiről naponta sokan ingáznak a fővárosba, és egyre több cég működik a városhatáron kívül. Ezért erre az oldalra a főváros és a vármegye vállalkozásait együtt gyűjtöttük.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Budapest valamennyi kerületéből várjuk a 20–200 fős vállalkozások ajánlatkérését, a belvárosi szolgáltató cégektől a külső kerületek ipari és logisztikai vállalkozásaiig.",
      "Pest vármegyében az agglomeráció településein működő cégek a leggyakoribb érdeklődők: Érd, Budaörs, Törökbálint, Budakeszi, Szentendre, Dunakeszi, Fót, Gödöllő, Vecsés, Gyál és Szigetszentmiklós térségéből. Ugyanígy várjuk a vármegye távolabbi városainak vállalkozásait is, például Vác és a Dunakanyar, Cegléd, Nagykőrös, Dabas, Monor vagy Ráckeve környékéről.",
    ],
    contextTitle: "Tipikus helyzetek fővárosi és Pest vármegyei kkv-knál",
    contexts: [
      {
        title: "Verseny a nagyvállalatokkal a szakemberekért",
        text: "A budapesti munkaerőpiacon a kkv-k ugyanazokért a jelöltekért versenyeznek, mint a nagyvállalatok és a multinacionális cégek. A kulcspozíciók tudatos meghatározása és a jól felépített kiválasztás segít, hogy a cég a valóban fontos pozíciókra koncentráljon.",
        service: "toborzas",
      },
      {
        title: "Gyors növekedés, elmaradó struktúra",
        text: "Sok fővárosi és agglomerációs cég néhány év alatt nő 20 főről 100 fölé. A munkakörök és a döntési szintek ilyenkor gyakran nem követik a létszámot, ami a vezetőket túlterheli.",
        service: "munkakorok",
      },
      {
        title: "Ingázás és megtartás",
        text: "Az agglomerációból ingázó kollégáknak sok alternatív munkahely elérhető. A megtartás ezért nem eseti kérdés, hanem a HR-stratégia része.",
        service: "hr-strategia",
      },
      {
        title: "Vezetői utánpótlás és fejlesztés",
        text: "A növekvő cégeknél a kulcsemberek új szerepbe kerülnek. A coaching, a mentoring és a csoportos fejlesztés ezekben az átmenetekben ad támogatást.",
        service: "szervezetfejlesztes",
      },
    ],
    serviceNotes: {
      "hr-strategia":
        "Fővárosi és Pest vármegyei cégeknél a HR-stratégia gyakran a megtartásról szól: mit kínál a cég, amiért a kollégák a sok alternatíva ellenére maradnak.",
      toborzas:
        "A budapesti jelöltpiacon a kulcspozíciók pontos meghatározása és a strukturált kiválasztás különösen fontos, hogy a toborzási energia a megfelelő pozíciókra irányuljon.",
      munkakorok:
        "A gyorsan növekvő agglomerációs és fővárosi cégeknél a szervezeti struktúra rendezése teszi lehetővé, hogy a vezetők ne minden operatív kérdést maguk döntsenek el.",
      szervezetfejlesztes:
        "A fejlesztési terv az igényfelmérésre épül, így a képzési költség oda kerül, ahol a budapesti vagy Pest vármegyei cég működésében tényleges változást hoz.",
    },
    formTitle: "Ajánlatkérés budapesti és Pest vármegyei cégeknek",
    formText:
      "Írja le röviden, milyen helyzetben van a cég, és melyik területen kér támogatást. Az ajánlatkérés nem jár kötelezettséggel.",
  },
  {
    slug: "hr-tanacsadas-gyor",
    path: "/hr-tanacsadas-gyor/",
    label: "Győr-Moson-Sopron vármegye",
    city: "Győr",
    county: "Győr-Moson-Sopron vármegye",
    title: "HR tanácsadás Győrben és Győr-Moson-Sopron vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás győri, soproni, mosonmagyaróvári és Győr-Moson-Sopron vármegyei 20–200 fős kkv-knak: stratégia, toborzás, munkakörök, szervezetfejlesztés.",
    h1: "HR tanácsadás Győrben és Győr-Moson-Sopron vármegyében",
    eyebrow: "Győr · Győr-Moson-Sopron vármegye",
    intro: [
      "Győr-Moson-Sopron vármegye Északnyugat-Magyarország egyik legerősebb gazdasági térsége: ipari beszállítók, logisztikai, kereskedelmi és szolgáltató vállalkozások működnek itt, jelentős részük 20–200 fős kkv. Az O2 Tanácsadó ezeknek a cégeknek kínál HR-tanácsadást a stratégiától a toborzáson át a szervezetfejlesztésig.",
      "A térség sajátossága, hogy a munkavállalóknak a nagy ipari munkáltatók mellett az osztrák és a szlovák határ közelsége is reális alternatívát jelent. Ez a kkv-k számára a toborzást és a megtartást teszi a legfontosabb HR-kérdéssé.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Győrből és közvetlen vonzáskörzetéből várjuk a legtöbb érdeklődést, de a vármegye egész területéről fogadunk ajánlatkérést: Mosonmagyaróvár és a Szigetköz, Sopron és a Fertő-táj, a Rábaköz (Csorna, Kapuvár), Pannonhalma térsége, Tét, Jánossomorja, Fertőd és Fertőszentmiklós vállalkozásaitól egyaránt.",
      "Az ajánlatkérés a vármegye bármely településéről ugyanúgy történik: az űrlapon jelölje az érintett területet, és röviden írja le a cég helyzetét.",
    ],
    contextTitle: "Tipikus helyzetek Győr-Moson-Sopron vármegyei kkv-knál",
    contexts: [
      {
        title: "Elvándorlás a nagy munkáltatókhoz és a határon túlra",
        text: "A kkv-k gyakran veszítenek el képzett kollégákat a térség nagy ipari munkáltatói vagy az ausztriai munkavállalás javára. A megtartás keretét a HR-stratégia adja meg: mi az, amit a cég kínál, és hogyan tartja meg a kulcsembereket.",
        service: "hr-strategia",
      },
      {
        title: "Szűk jelöltpiac a szakmunkás- és mérnökpozíciókban",
        text: "Az ipari beszállító és műszaki kkv-knál a kulcspozíciók hosszú ideig betöltetlenek maradhatnak. A recruitment-stratégia segít eldönteni, mely pozíciók kritikusak, és hogyan érdemes a kiválasztást felépíteni.",
        service: "toborzas",
      },
      {
        title: "Termelő és szolgáltató cégek szervezeti rendje",
        text: "A műszakos, több telephelyes vagy gyorsan bővülő cégeknél a munkakörök és a szervezeti felépítés tisztázása csökkenti a feladatkieséseket és a vezetői túlterhelést.",
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
        "Győr-Moson-Sopron vármegyében a HR-stratégia egyik központi kérdése a megtartás, mert a munkavállalók előtt több erős alternatíva áll.",
      toborzas:
        "A térség műszaki és ipari kkv-inál a kulcspozíciók meghatározása és a kulcsemberek megtalálása a toborzás legnehezebb része.",
      munkakorok:
        "A termelő és logisztikai cégeknél a pontos munkaköri leírások és az átlátható szervezeti diagram a napi működés alapját adják.",
      szervezetfejlesztes:
        "A vármegye kkv-inál a fejlesztés gyakran a középvezetői réteg megerősítéséről szól: workshop, tréning, team coaching és egyéni coaching a diagnózis alapján.",
    },
    formTitle: "Ajánlatkérés Győr-Moson-Sopron vármegyei cégeknek",
    formText:
      "Írja le röviden a cég helyzetét, és jelölje, melyik területen kér támogatást. Az ajánlatkérés nem jár kötelezettséggel.",
  },
  {
    slug: "hr-tanacsadas-szeged",
    path: "/hr-tanacsadas-szeged/",
    label: "Csongrád-Csanád vármegye",
    city: "Szeged",
    county: "Csongrád-Csanád vármegye",
    title: "HR tanácsadás Szegeden és Csongrád-Csanád vármegyében | O2 Tanácsadó",
    description:
      "HR-tanácsadás szegedi, hódmezővásárhelyi, makói, szentesi és Csongrád-Csanád vármegyei 20–200 fős kkv-knak: stratégia, toborzás, munkakörök, szervezetfejlesztés.",
    h1: "HR tanácsadás Szegeden és Csongrád-Csanád vármegyében",
    eyebrow: "Szeged · Csongrád-Csanád vármegye",
    intro: [
      "Szeged a Dél-Alföld gazdasági, egyetemi és kutatási központja, Csongrád-Csanád vármegyében pedig az élelmiszeripartól a kereskedelmen és a logisztikán át az egészségügyi és tudásalapú szolgáltatásokig sokféle 20–200 fős vállalkozás működik. Az O2 Tanácsadó ezeknek a cégeknek nyújt HR-tanácsadást: HR-stratégiát, toborzást és kiválasztást, munkakörök kialakítását, képzést és szervezetfejlesztést.",
      "A térség kkv-i számára a szegedi egyetemi háttér és a román és szerb határ közelsége egyszerre jelent lehetőséget és kihívást: van honnan meríteni, de a képzett kollégák megtartása különösen fontos.",
    ],
    areaTitle: "Kiket várunk erről a területről?",
    area: [
      "Szegedről és a város környékéről (Sándorfalva, Algyő, Deszk, Domaszék, Mórahalom, Kistelek) várjuk a legtöbb érdeklődést, de a vármegye egész területéről fogadunk ajánlatkérést: Hódmezővásárhely, Makó és a Maros mente, valamint a vármegye északi részén Szentes, Csongrád és Mindszent vállalkozásaitól is.",
      "Az ajánlatkérés a vármegye bármely településéről ugyanúgy történik: az űrlapon jelölje az érintett területet, és röviden írja le a cég helyzetét.",
    ],
    contextTitle: "Tipikus helyzetek Csongrád-Csanád vármegyei kkv-knál",
    contexts: [
      {
        title: "Friss diplomások megtartása",
        text: "A szegedi egyetemről kikerülő fiatal szakemberek egy része a fővárosba vagy külföldre megy tovább. A helyi kkv-k akkor tudják megtartani őket, ha a HR-stratégia tudatosan foglalkozik a fejlődési lehetőségekkel és a megtartással.",
        service: "hr-strategia",
      },
      {
        title: "Kulcsemberek megtalálása kisebb jelöltpiacon",
        text: "Vidéki térségben a speciális tudású kulcsemberek megtalálása időigényes. A recruitment-stratégia segít meghatározni, mely pozíciók kritikusak, és hogyan épüljön fel a kiválasztás.",
        service: "toborzas",
      },
      {
        title: "Családi és növekvő cégek szervezeti rendje",
        text: "Sok Csongrád-Csanád vármegyei kkv családi vállalkozásból nőtt ki. A munkakörök és a szervezeti struktúra tisztázása segít, hogy a felelősségek ne csak a tulajdonosnál fussanak össze.",
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
        "Csongrád-Csanád vármegyei kkv-knál a HR-stratégia gyakran a képzett kollégák megtartására és a vezetői utánpótlásra épül.",
      toborzas:
        "Szegeden és a vármegyében a kulcspozíciók pontos meghatározása segít, hogy a toborzási erőfeszítés a valóban kritikus pozíciókra irányuljon.",
      munkakorok:
        "A családi hátterű és növekvő cégeknél a munkaköri leírások és a szervezeti diagram teszik láthatóvá, ki miért felel.",
      szervezetfejlesztes:
        "A fejlesztés igényfelméréssel és a szervezet diagnózisával indul, majd workshopokkal, tréninggel, team coachinggal vagy egyéni coachinggal folytatódik.",
    },
    formTitle: "Ajánlatkérés Csongrád-Csanád vármegyei cégeknek",
    formText:
      "Írja le röviden a cég helyzetét, és jelölje, melyik területen kér támogatást. Az ajánlatkérés nem jár kötelezettséggel.",
  },
];

export const LOCAL_BY_SLUG = Object.fromEntries(LOCAL.map((l) => [l.slug, l])) as Record<
  LocalPage["slug"],
  LocalPage
>;
