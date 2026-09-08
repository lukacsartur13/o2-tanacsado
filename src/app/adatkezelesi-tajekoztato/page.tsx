import Link from "next/link";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { ADDRESS, CONTACT_EMAIL, LEGAL_NAME, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Adatkezelési tájékoztató | O2 Tanácsadó",
  description:
    "Az O2 Tanácsadó Kft. adatkezelési tájékoztatója: a weboldalon küldött megkeresések adatainak kezelése, célja, jogalapja, időtartama, az érintettek jogai.",
  path: "/adatkezelesi-tajekoztato/",
});

/**
 * A weboldal saját adatkezelési tájékoztatója. A szögletes zárójeles helyőrzőket
 * (cégjegyzékszám, adószám, tárhely- és e-mail-szolgáltató) élesítés előtt ki kell
 * tölteni, és a szöveget jogi szempontból ellenőriztetni.
 */
const LAST_UPDATED = "2026. szeptember 8.";

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="privacy-h1">
        <div className="container">
          <p className="eyebrow">Adatkezelés</p>
          <h1 id="privacy-h1">Adatkezelési tájékoztató</h1>
          <p className="lead">
            Ez a tájékoztató azt írja le, hogyan kezeli a {LEGAL_NAME} a weboldalon keresztül
            küldött megkeresésekben megadott személyes adatokat. Utolsó frissítés: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label="A tájékoztató szövege">
        <div className={`container ${styles.doc}`}>
          <h2>1. Az adatkezelő</h2>
          <p>
            <strong>{LEGAL_NAME}</strong>
            <br />
            Székhely: {ADDRESS.full}
            <br />
            Cégjegyzékszám: [cégjegyzékszám]
            <br />
            Adószám: [adószám]
            <br />
            E-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>

          <h2>2. Milyen adatokat kezelünk, és miért?</h2>
          <p>
            A weboldal egyeztetéskérő (kapcsolatfelvételi) űrlapján a következő adatokat kérjük:
            név, céges e-mail-cím, cégnév, valamint opcionálisan telefonszám és rövid üzenet, továbbá az
            érdeklődési terület megjelölése.
          </p>
          <p>
            Az adatkezelés célja a megkeresés megválaszolása, az első egyeztetés megszervezése és az
            ehhez szükséges kapcsolattartás. Az adatokat nem használjuk hírlevélküldésre vagy más
            marketingcélra, és nem adjuk át harmadik félnek értékesítési céllal.
          </p>

          <h2>3. Az adatkezelés jogalapja</h2>
          <p>
            Az adatkezelés jogalapja az Ön hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet az
            űrlap beküldésekor a jelölőnégyzet bejelölésével ad meg, valamint – ha a megkeresés
            szerződéskötést készít elő – a szerződés megkötését megelőző lépések megtétele (GDPR 6. cikk
            (1) bekezdés b) pont). A hozzájárulás bármikor visszavonható a fenti e-mail-címen; a
            visszavonás nem érinti a korábbi adatkezelés jogszerűségét.
          </p>

          <h2>4. Meddig őrizzük az adatokat?</h2>
          <p>
            A megkeresésben megadott adatokat a megkeresés lezárásától számított legfeljebb 12 hónapig
            őrizzük, kivéve, ha az együttműködésből szerződés jön létre; ekkor az adatokat a szerződéses
            jogviszony és a jogszabályi megőrzési kötelezettségek (például számviteli előírások) szerint
            kezeljük tovább.
          </p>

          <h2>5. Kik férnek hozzá az adatokhoz?</h2>
          <p>
            Az adatokhoz a {LEGAL_NAME} ügyvezetői és a megkeresés kezelésében részt vevő munkatársai
            férnek hozzá. Az adatok tárolásához és továbbításához az alábbi adatfeldolgozókat vesszük
            igénybe:
          </p>
          <ul>
            <li>Tárhelyszolgáltató (a weboldal kiszolgálása): [tárhelyszolgáltató neve, székhelye]</li>
            <li>E-mail-szolgáltató (a megkeresések kézbesítése): [e-mail-szolgáltató neve, székhelye]</li>
          </ul>
          <p>Az adatokat az Európai Gazdasági Térségen kívülre csak megfelelő garanciák mellett továbbítjuk.</p>

          <h2>6. Sütik és mérés</h2>
          <p>
            A weboldal a működéséhez feltétlenül szükséges technikai megoldásokon kívül nem használ
            követő sütiket, és nem alkalmaz látogatottságmérő vagy hirdetési szolgáltatást. Ha ez a
            jövőben változik, a tájékoztatót frissítjük, és ahol szükséges, előzetes hozzájárulást kérünk.
          </p>

          <h2>7. Az Ön jogai</h2>
          <p>A GDPR alapján Ön jogosult:</p>
          <ul>
            <li>tájékoztatást kérni az adatai kezeléséről, és hozzáférni az adataihoz;</li>
            <li>az adatai helyesbítését vagy törlését kérni;</li>
            <li>az adatkezelés korlátozását kérni;</li>
            <li>tiltakozni az adatkezelés ellen, ha annak jogalapja jogos érdek;</li>
            <li>adathordozhatóságot kérni a hozzájáruláson alapuló, automatizált kezelés esetén;</li>
            <li>a hozzájárulását bármikor visszavonni.</li>
          </ul>
          <p>
            Kérelmét a(z) <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címen nyújthatja be;
            a kérelemre legkésőbb egy hónapon belül válaszolunk.
          </p>

          <h2>8. Jogorvoslat</h2>
          <p>
            Ha úgy ítéli meg, hogy az adatkezelés sérti a jogait, panasszal fordulhat a Nemzeti
            Adatvédelmi és Információszabadság Hatósághoz (1055 Budapest, Falk Miksa utca 9–11.;
            levelezési cím: 1363 Budapest, Pf. 9.; www.naih.hu), vagy bírósághoz fordulhat.
          </p>

          <h2>9. A tájékoztató módosítása</h2>
          <p>
            A tájékoztatót szükség esetén frissítjük; a mindenkor hatályos változat ezen az oldalon
            érhető el. Jelentős változásról a weboldalon külön jelzést adunk.
          </p>

          <p className={styles.back}>
            <Link href="/kapcsolat/">Vissza a kapcsolat oldalra</Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Adatkezelési tájékoztató",
            url: `${SITE_URL}/adatkezelesi-tajekoztato/`,
            inLanguage: "hu",
            isPartOf: { "@type": "WebSite", url: SITE_URL, name: "O2 Tanácsadó" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Adatkezelési tájékoztató", path: "/adatkezelesi-tajekoztato/" },
            ]),
          ),
        }}
      />
    </>
  );
}
