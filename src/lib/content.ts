import type { StaticImageData } from "next/image";
import hrStrategia from "@/images/hr-strategia.png";
import toborzas from "@/images/toborzas.png";
import munkakorok from "@/images/munkakorok.png";
import szervezetfejlesztes from "@/images/szervezetfejlesztes.png";
import marczali from "@/images/marczali-tibor.png";
import wortmann from "@/images/wortmann-adam.png";

export type ServiceId =
  | "hr-strategia"
  | "toborzas"
  | "munkakorok"
  | "szervezetfejlesztes";

export interface Service {
  id: ServiceId;
  num: string;
  title: string;
  shortTitle: string;
  lead: string;
  when: string[];
  includes: string[];
  business: string;
  image: StaticImageData;
  imageAlt: string;
}

/**
 * A négy szolgáltatási terület. A "includes" listák a jelenlegi
 * o2tanacsado.hu oldalon szereplő tartalmak átfogalmazásai; új ígéretet,
 * eredményt vagy garanciát nem tartalmaznak.
 */
export const SERVICES: Service[] = [
  {
    id: "hr-strategia",
    num: "01",
    title: "HR-stratégia és vállalati célok",
    shortTitle: "HR-stratégia",
    lead: "Világos misszió, vízió és HR-stratégia, amely a cég üzleti céljaiból indul ki, és keretet ad a munkaerő megtartásának.",
    when: [
      "A cég gyorsan nőtt, de a HR-működés még a korábbi méretre van szabva.",
      "A vezetők másképp látják, merre tart a vállalat, és ez a csapatban is bizonytalanságot okoz.",
      "A munkaerő megtartása eseti reakciókból áll, nincs mögötte átgondolt keret.",
    ],
    includes: [
      "Vállalati célok meghatározása",
      "Misszió és vízió megfogalmazása",
      "HR-stratégia kialakítása",
      "Munkaerő-megtartás",
    ],
    business:
      "Az emberekkel kapcsolatos döntések akkor támogatják az üzleti növekedést, ha a cég céljaihoz kapcsolódnak. A HR-stratégia ezt a kapcsolatot teremti meg: a vezetés tudja, milyen csapatra van szüksége a következő évekre, és mit tesz a kulcsemberek megtartásáért.",
    image: hrStrategia,
    imageAlt: "Vezető üzleti riportokat és grafikonokat elemez az asztalnál",
  },
  {
    id: "toborzas",
    num: "02",
    title: "Toborzás és kiválasztás",
    shortTitle: "Toborzás",
    lead: "Recruitment-stratégia és a kiválasztás lebonyolítása: a kulcspozíciók meghatározásától a megfelelő kulcsemberek megtalálásáig.",
    when: [
      "Hónapok óta nyitva van egy fontos pozíció, és a beérkező jelentkezők nem felelnek meg.",
      "Nem egyértelmű, mely pozíciók kritikusak a cég működése és növekedése szempontjából.",
      "A kiválasztás ad hoc módon zajlik, és a felvett kollégák egy része hamar távozik.",
    ],
    includes: [
      "Recruitment-stratégia kialakítása",
      "Toborzás és kiválasztás lebonyolítása",
      "A vállalat kulcspozícióinak meghatározása",
      "A szükséges kulcsemberek megtalálása",
    ],
    business:
      "A betöltetlen kulcspozíció közvetlen üzleti költség: csúszó projektek, túlterhelt vezetők, elmaradó bevétel. A tudatos toborzási stratégia azt biztosítja, hogy a cég a valóban fontos pozíciókra koncentráljon, és a kiválasztás a vállalat igényeiből induljon ki.",
    image: toborzas,
    imageAlt: "Kollégák közösen egyeztetnek dokumentumok fölött egy tárgyalóban",
  },
  {
    id: "munkakorok",
    num: "03",
    title: "Munkakörök és szervezeti struktúra",
    shortTitle: "Munkakörök",
    lead: "Pontos munkaköri leírások és átlátható szervezeti felépítés, hogy mindenki tudja, miért felel és kihez tartozik.",
    when: [
      "Feladatok esnek ki vagy duplázódnak, mert a felelősségek nem tisztázottak.",
      "A cég létszáma nőtt, de a szervezeti felépítés a régi maradt.",
      "A vezetők túl sok operatív kérdést kapnak, mert nincs egyértelmű döntési szint.",
    ],
    includes: [
      "Munkaköri leírások elkészítése és pontosítása",
      "Vállalati struktúra kialakítása",
      "Szervezeti felépítés racionalizálása",
      "Szervezeti diagram elkészítése",
    ],
    business:
      "A tisztázatlan munkakörök lassítják a működést és feszültséget okoznak a csapatban. Az átlátható struktúra egyszerűbbé teszi a delegálást, a teljesítmény megítélését és az új kollégák beillesztését is.",
    image: munkakorok,
    imageAlt: "Három kolléga laptop és jegyzetek fölött dolgozik együtt",
  },
  {
    id: "szervezetfejlesztes",
    num: "04",
    title: "Képzés, szervezetfejlesztés, coaching",
    shortTitle: "Szervezetfejlesztés",
    lead: "Igényfelmérésre épülő képzési stratégia és fejlesztési terv: workshop, tréning, team coaching, valamint egyéni coaching és mentoring.",
    when: [
      "A csapat működésében visszatérő súrlódások vannak, de nem látszik az okuk.",
      "A vezetők vagy kulcsemberek új szerepbe kerültek, és támogatásra van szükségük.",
      "A cég képezné a kollégákat, de nem tudja, mire érdemes költeni.",
    ],
    includes: [
      "Igényfelmérés, a szervezet diagnózisa",
      "Fejlesztési terv a hatékony szervezet eléréséhez",
      "Csoportos képzések: workshop, tréning, team coaching",
      "Egyéni fejlesztés: coaching, mentoring",
    ],
    business:
      "A fejlesztés akkor éri meg, ha valós szervezeti problémára válaszol. A diagnózisra épülő terv a képzési költséget oda irányítja, ahol a működés hatékonysága és a kollégák motivációja ténylegesen javítható.",
    image: szervezetfejlesztes,
    imageAlt: "Csapat felülnézetből egy hosszú asztalnál laptopokkal dolgozik",
  },
];

export const SERVICE_BY_ID = Object.fromEntries(
  SERVICES.map((s) => [s.id, s]),
) as Record<ServiceId, Service>;

/** Ügyfélhelyzetek – a jelenlegi oldal „partnere leszünk, amennyiben” listájából, az országos szolgáltatási oldalakra irányítva. */
export const SITUATIONS: { title: string; text: string; service: ServiceId; href: string; linkLabel: string }[] = [
  {
    title: "Nehéz a toborzás",
    text: "Nehezen találja meg vállalkozása számára a megfelelő kollégákat, a fontos pozíciók sokáig betöltetlenek maradnak.",
    service: "toborzas",
    href: "/szolgaltatasok/#toborzas",
    linkLabel: "Toborzás és kiválasztás",
  },
  {
    title: "Elvándorlás és megtartás",
    text: "Problémát okoz a munkaerő közép- és hosszú távú megtartása, visszatérően munkaerő-elvándorlással küzdenek.",
    service: "hr-strategia",
    href: "/munkaero-megtartas/",
    linkLabel: "Munkaerő-megtartás",
  },
  {
    title: "Tisztázatlan munkakörök",
    text: "A feladatok és felelősségek nem egyértelműek, a szervezeti felépítés nem követi a cég tényleges működését.",
    service: "munkakorok",
    href: "/munkakori-leiras-minta/",
    linkLabel: "Munkakörök és munkaköri leírások",
  },
  {
    title: "Belső működés és fejlesztés",
    text: "Úgy látja, a belső folyamatok hatékonyságán javítani lehetne, ösztönző programot alakítana ki, de nem tudja, hogyan fogjon hozzá.",
    service: "szervezetfejlesztes",
    href: "/szervezetfejlesztes/",
    linkLabel: "Szervezetfejlesztés",
  },
  {
    title: "Növekedés képzett csapattal",
    text: "Az üzleti növekedést megfelelően képzett és motivált kollégákkal, önállóan működő vezetőkkel szeretné támogatni.",
    service: "szervezetfejlesztes",
    href: "/vezetoi-trening/",
    linkLabel: "Vezetői tréning és coaching",
  },
];

export interface Founder {
  name: string;
  role: string;
  facts: string[];
  image: StaticImageData;
  imageAlt: string;
}

/** Alapítók – a jelenlegi oldalon közölt adatok alapján. */
export const FOUNDERS: Founder[] = [
  {
    name: "Marczali Tibor",
    role: "Cégalapító és gyakorló cégvezető",
    facts: [
      "MBA közgazdász, IT-mérnök",
      "Business és menedzsment coach",
      "Szervezetfejlesztő szakember",
    ],
    image: marczali,
    imageAlt: "Marczali Tibor portréja",
  },
  {
    name: "Wortmann Ádám",
    role: "Cégalapító és gyakorló cégvezető",
    facts: [
      "Közgazdász (MBA)",
      "Coach, szervezetfejlesztési szakember",
      "Mentálhigiénés szakember, pszichodráma-vezető",
    ],
    image: wortmann,
    imageAlt: "Wortmann Ádám portréja",
  },
];

/**
 * Érdeklődési területek az ajánlatkérő űrlapon – a kilenc szolgáltatási alap.
 * A négy klasszikus azonosító (hr-strategia, toborzas, munkakorok,
 * szervezetfejlesztes) változatlan, így a korábbi ?terulet= hivatkozások működnek.
 */
export const INTEREST_OPTIONS: { value: string; label: string }[] = [
  { value: "hr-strategia", label: "HR-stratégia és HR-tanácsadás" },
  { value: "szervezetfejlesztes", label: "Szervezetfejlesztés, szervezeti diagnózis" },
  { value: "toborzas", label: "Toborzás és kiválasztás" },
  { value: "munkakorok", label: "Munkakörök, munkaköri leírások" },
  { value: "megtartas", label: "Munkaerő-megtartás, ösztönzési rendszer" },
  { value: "vezetoi-trening", label: "Vezetői tréning" },
  { value: "vezetoi-coaching", label: "Vezetői coaching" },
  { value: "team-coaching", label: "Team coaching" },
  { value: "hr-outsourcing", label: "HR-outsourcing" },
  { value: "segitseg", label: "Segítséget kérek a meghatározásában" },
];

export const INTEREST_LABELS = Object.fromEntries(
  INTEREST_OPTIONS.map((o) => [o.value, o.label]),
) as Record<string, string>;
