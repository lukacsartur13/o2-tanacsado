/**
 * Önellenőrző kérdéssor: „Mennyire függ a cégem a személyes jelenlétemtől?”
 * Szöveg az „O2web: önellenőrző kérdéssor és opt-in oldal” dokumentum
 * (2026. október 14.) szerint, átírás nélkül.
 */

export const SELF_CHECK_NAME = "Mennyire függ a cégem a személyes jelenlétemtől?";

export const SELF_CHECK_INTRO =
  "Tizenkét állítás következik. Mindegyiknél jelöld meg, mennyire igaz a te cégedre. Nincs jó vagy rossz válasz, és senki nem látja, amit kitöltesz. A végén megkapod az értékelést, e-mailben is elküldjük.";

export const SELF_CHECK_HINT = "Válaszd azt, ami a legtöbbször igaz, ne azt, aminek lennie kellene.";

export const ANSWER_OPTIONS = [
  { label: "Egyáltalán nem igaz", points: 0 },
  { label: "Inkább nem igaz", points: 1 },
  { label: "Inkább igaz", points: 2 },
  { label: "Teljesen igaz", points: 3 },
] as const;

export const STATEMENTS = [
  "Ha egy hétig nem érnének el, a fontos döntések megvárnának.",
  "Naponta többször hozzád fordulnak olyan kérdéssel, amire a kollégáknak maguknak is tudniuk kellene a választ.",
  "Gyakran gyorsabb, ha magad csinálod meg a dolgot, mint ha elmagyaráznád valakinek.",
  "Az ügyfelek és a partnerek akkor is téged keresnek, ha van felelős kolléga az adott ügyre.",
  "Ha egy kolléga hibázik, inkább átveszed tőle a feladatot, mint hogy végigvinné.",
  "A vezetőid szakmailag erősek, de vezetőként ritkán döntenek önállóan.",
  "Nem tudod pontosan, mit gondolnak rólad a kollégáid, mert ritkán mondják meg, ha valami zavarja őket.",
  "A szabadságod alatt is olvasod a leveleket, vagy telefonálsz a cég ügyében.",
  "Ha elképzeled, hogy hónapokra hátrébb lépsz, inkább aggódsz, mint megkönnyebbülsz.",
  "Van olyan fontos döntés (kinevezés, elválás, átszervezés), amit hónapok óta halogatsz.",
  "A cégen belül nincs senki, akivel ki tudnád mondani a vezetői nehézségeidet.",
  "Szívesen foglalkoznál többet a stratégiával és az üzletfejlesztéssel, de a napi ügyek elviszik az idődet.",
] as const;

export const MAX_SCORE = STATEMENTS.length * 3;

export const SCORING_TEXT =
  "A pontok összeadva 0 és 36 közé esnek. Minél magasabb a szám, annál inkább épül a cég a te személyes jelenlétedre.";

export interface Band {
  min: number;
  max: number;
  title: string;
  paragraphs: string[];
}

export const BANDS: Band[] = [
  {
    min: 0,
    max: 12,
    title: "A cég már most sokat tud nélküled",
    paragraphs: [
      "A válaszaid szerint a cég működésének nagy része nem csak rajtad múlik. Ez jó helyzet.",
      "Nézd meg, melyik állításnál jelöltél 2-t vagy 3-at. Ott maradt még egy-egy pont, ahol a cég rád támaszkodik. Ha ezek zavarnak, érdemes végiggondolni, mi kellene ahhoz, hogy azok is nélküled menjenek. Ha szeretnéd megbeszélni, szívesen leülünk veled.",
    ],
  },
  {
    min: 13,
    max: 24,
    title: "Van, amit a cég nélküled is megold, és van, ami még rád vár",
    paragraphs: [
      "A válaszaid olyan cégre utalnak, ahol a kollégák egy része már önállóan dönt, más ügyek viszont rád maradnak. Az ilyen pontok általában ugyanarra a kérdésre vezethetők vissza: ki dönt, mikor és mi alapján.",
      "Nézd meg, melyik két-három állításnál jelöltél magas pontot. Ott érdemes elkezdeni, mert egy-egy ilyen pont rendbetétele sokszor a többit is megkönnyíti. Ha szeretnéd, ezt személyesen átbeszéljük.",
    ],
  },
  {
    min: 25,
    max: 36,
    title: "A cég nagyon sok mindenben rád épül",
    paragraphs: [
      "A válaszaid szerint a cég sok mindenben rád épül, és ez valószínűleg fárasztó. Gyakran azért alakul így, mert te tényleg gyorsabban és jobban döntesz a kollégáidnál. A saját erősséged tartja vissza a céget attól, hogy nélküled is önállóan menjen.",
      "Ezen lehet változtatni, és nem kell egyedül nekiállnod. Az első lépés az, hogy kimondod valakinek, aki érti a helyzetedet. Erre a személyes beszélgetést ajánljuk.",
    ],
  },
];

/** Minden eredmény alá (közös záró). */
export const CLOSING_NOTE =
  "A pontszám nem diagnózis. Tizenkét állításból áll, és csak azt mutatja, merre érdemes nézelődni.";

export const CLOSING_CTA = {
  title: "Ülj le velünk beszélgetni",
  text: "Egy-másfél órás személyes beszélgetés, díjmentes, elköteleződés nélkül. Elmondod, mi viszi el most a legtöbb energiádat, mi pedig figyelünk, és mesélünk a saját cégünkről is. Közösen eldöntjük, van-e értelme együtt dolgozni. Amit elmondasz, az közöttünk marad.",
};

/** Egy kitöltés: állításonként 0–3 pont, az állítások sorrendjében. */
export type Answers = number[];

export function isComplete(a: unknown): a is Answers {
  return (
    Array.isArray(a) &&
    a.length === STATEMENTS.length &&
    a.every((x) => Number.isInteger(x) && x >= 0 && x <= 3)
  );
}

export function scoreOf(a: Answers) {
  return a.reduce((sum, x) => sum + x, 0);
}

export function bandFor(score: number) {
  return BANDS.find((b) => score >= b.min && score <= b.max) ?? BANDS[0];
}

/**
 * Az eredményoldal linkjében csak a válaszok szerepelnek (12 számjegy),
 * név és e-mail-cím nem.
 */
export function encodeAnswers(a: Answers) {
  return a.join("");
}

export function decodeAnswers(v: string | null): Answers | null {
  if (!v || !/^[0-3]{12}$/.test(v)) return null;
  return v.split("").map(Number);
}
