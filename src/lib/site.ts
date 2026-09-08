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

export const PRIVACY_URL =
  process.env.NEXT_PUBLIC_PRIVACY_URL ||
  "https://o2tanacsado.hu/adatkezelesi-tajekoztato/";

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
  text: "Vezetői és szervezetfejlesztési tapasztalatunkat hazai és nemzetközi vállalatoknál szerzett gyakorlati munkára építjük. Szakmai munkánk során többek között az alábbi szervezeteknél szereztünk tapasztalatot:",
  /**
   * Logófájl: public/logos/<file>. Ha a fájl létezik, az Experience komponens
   * logót jelenít meg, különben a nevet szövegesen. Fájlt csak dokumentált
   * logóhasználati engedéllyel szabad ide tenni; külső forrásból nem töltünk le.
   */
  organizations: [
    { name: "SPAR", logo: "spar.png" },
    { name: "HBO", logo: "hbo.png" },
    { name: "PRANGL", logo: "prangl.png" },
    { name: "AUDI", logo: "audi.png" },
    { name: "ISG", logo: "isg.png" },
    { name: "GABLINI", logo: "gablini.png" },
    { name: "Dr. Oetker", logo: "dr-oetker.png" },
    { name: "RBL", logo: "rbl.png" },
    { name: "Oeconomus Gazdaságkutató Alapítvány", logo: "oeconomus.png" },
  ] as { name: string; logo: string }[],
  note: "A megbízások jellege és részletei bizalmasak lehetnek; minden szervezetnél az adott vezetői és üzleti helyzethez igazított támogatást nyújtottunk.",
};

/** Al-útvonal statikus (GitHub Pages) kiadásnál; next/link és next/image automatikusan kezeli, nyers href/src-hez withBase() kell. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

export function withBase(path: string) {
  return `${BASE_PATH}${path}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
