export const SITE_URL = "https://o2tanacsado.hu";
export const SITE_NAME = "O2 Tanácsadó";
export const LEGAL_NAME = "O2 Tanácsadó Kft.";

export const CONTACT_EMAIL = "info@o2tanacsado.hu";
export const ADDRESS = {
  street: "Bródy Sándor utca 26.",
  postalCode: "1088",
  city: "Budapest",
  country: "HU",
  full: "1088 Budapest, Bródy Sándor utca 26.",
};

/** Al-útvonal statikus (GitHub Pages) kiadásnál; next/link és next/image automatikusan kezeli, nyers href/src-hez withBase() kell. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

export function withBase(path: string) {
  return `${BASE_PATH}${path}`;
}

/** Adatkezelési tájékoztató: alapértelmezésben a webhely saját, belső oldala. */
export const PRIVACY_PATH = "/adatkezelesi-tajekoztato/";
export const PRIVACY_URL = process.env.NEXT_PUBLIC_PRIVACY_URL || withBase(PRIVACY_PATH);

/** Google Search Console HTML-meta ellenőrző kód (opcionális; a DNS- vagy fájlalapú ellenőrzés is használható). */
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const IS_PRODUCTION =
  process.env.NEXT_PUBLIC_SITE_ENV === "production" ||
  process.env.VERCEL_ENV === "production";

/** Elsődleges CTA felirat – konzultációs, nem „árajánlat” jellegű. */
export const CTA_LABEL = "Kérjen első egyeztetést";
export const FORM_ANCHOR = "ajanlatkeres";

/** Országos működés – minden szolgáltatási oldalon ugyanígy jelenik meg. */
export const COVERAGE_STATEMENT =
  "Az O2 Tanácsadó országosan dolgozik: a tanácsadás, a coaching és a tréningek online és igény szerint helyszíni formában is elérhetők, Magyarország bármely pontján működő 20–200 fős kkv-k számára.";

export const NAV = [
  { href: "/", label: "Főoldal" },
  { href: "/szolgaltatasok/", label: "Szolgáltatások" },
  { href: "/blog/", label: "Blog" },
  { href: "/rolunk/", label: "Rólunk" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
] as const;

/** Országos szolgáltatási és témaoldalak (láblécben, sitemapben, hivatkozásokban). */
export const SERVICE_PAGES = [
  { href: "/hr-tanacsadas-kkv-knak/", label: "HR-tanácsadás kkv-knak" },
  { href: "/szervezetfejlesztes/", label: "Szervezetfejlesztés" },
  { href: "/vezetoi-trening/", label: "Vezetői tréning" },
  { href: "/vezetoi-coaching/", label: "Vezetői coaching" },
  { href: "/team-coaching/", label: "Team coaching" },
  { href: "/munkaero-megtartas/", label: "Munkaerő-megtartás" },
  { href: "/munkakori-leiras-minta/", label: "Munkaköri leírás minta" },
] as const;

export const LOCAL_PAGES = [
  { href: "/hr-tanacsadas-budapest/", label: "Budapest és Pest vármegye" },
  { href: "/hr-tanacsadas-gyor/", label: "Győr-Moson-Sopron vármegye" },
  { href: "/hr-tanacsadas-szeged/", label: "Csongrád-Csanád vármegye" },
] as const;

/**
 * Vállalati tapasztalat blokk. A szöveg szándékosan óvatos: elsősorban vállalati
 * egyéni coaching tapasztalatról szól, nem állít minden szervezetnél
 * szervezetfejlesztési projektet. A neveket csak szövegesen jelenítjük meg;
 * logó kizárólag dokumentált logóhasználati engedéllyel és saját logófájllal kerülhet ki.
 */
export const EXPERIENCE = {
  title: "Vállalati tapasztalat",
  intro:
    "Vezetői és szervezetfejlesztési tapasztalatunkat hazai és nemzetközi vállalatoknál szerzett gyakorlati munkára építjük. Szakmai munkánk során többek között az alábbi szervezeteknél szereztünk tapasztalatot:",
  /**
   * Logó csak dokumentált, kifejezett logóhasználati engedéllyel jeleníthető meg.
   * A megbízó 2026-09-08-án jelezte, hogy az engedély rendelkezésre áll, ezért
   * showLogos: true. false esetén a blokk szöveges felsorolás.
   */
  showLogos: true,
  /**
   * `scale`: opcionális optikai korrekció. A logók azonos maximális magassággal
   * jelennek meg, ezért a keskeny (magas képarányú) jelek kisebbnek látszanak –
   * ezeket egy kicsit felnagyítjuk.
   */
  organizations: [
    { name: "SPAR", logo: "spar.png", scale: 1.25 },
    { name: "HBO", logo: "hbo.png" },
    { name: "PRANGL", logo: "prangl.png" },
    { name: "AUDI", logo: "audi.png" },
    { name: "ISG", logo: "isg.png", scale: 1.25 },
    { name: "GABLINI", logo: "gablini.png" },
    { name: "Dr. Oetker", logo: "dr-oetker.png", scale: 1.25 },
    { name: "RBL", logo: "rbl.png" },
    { name: "Oeconomus Gazdaságkutató Alapítvány", logo: "oeconomus.png", scale: 1.25 },
  ] as { name: string; logo: string; scale?: number }[],
  note: "A megbízások jellege és részletei bizalmasak lehetnek; minden szervezetnél az adott vezetői és üzleti helyzethez igazított támogatást nyújtottunk.",
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
