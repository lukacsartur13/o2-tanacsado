import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { RevealObserver } from "@/components/Reveal";
import { jsonLd } from "@/lib/seo";
import {
  ADDRESS,
  CONTACT_EMAIL,
  IS_PRODUCTION,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { FOUNDERS } from "@/lib/content";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – HR-tanácsadás és szervezetfejlesztés kkv-knak`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "HR-tanácsadás, szervezetfejlesztés, vezetői tréning és coaching, munkaerő-megtartás 20–200 fős kkv-knak. Országosan, online és helyszínen. Kérjen első egyeztetést.",
  applicationName: SITE_NAME,
  robots: IS_PRODUCTION ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  logo: `${SITE_URL}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.postalCode,
    addressLocality: ADDRESS.city,
    addressCountry: ADDRESS.country,
  },
  areaServed: { "@type": "Country", name: "Magyarország" },
  founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
  knowsAbout: [
    "HR-stratégia és HR-tanácsadás",
    "Szervezetfejlesztés és szervezeti diagnózis",
    "Toborzás és kiválasztás",
    "Munkakörök és munkaköri leírások",
    "Munkaerő-megtartás és ösztönzési rendszer",
    "Vezetői tréning",
    "Vezetői coaching",
    "Team coaching",
    "HR-outsourcing",
  ],
  description:
    "HR-tanácsadás, szervezetfejlesztés és vezetőfejlesztés 20–200 fős kkv-knak, országosan, online és helyszínen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>
        <a href="#tartalom" className="skip-link">
          Ugrás a tartalomhoz
        </a>
        <Header />
        <main id="tartalom">{children}</main>
        <Footer />
        <MobileCta />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationLd) }}
        />
      </body>
    </html>
  );
}
