import { QuoteForm } from "@/components/QuoteForm";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { ADDRESS, CONTACT_EMAIL, FORM_ANCHOR, LEGAL_NAME } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Kapcsolat: beszéljünk személyesen | O2 Tanácsadó",
  description: `Mondd el röviden, mi viszi el most a legtöbb energiádat a cégnél. Ha inkább e-mailt írnál, az ${CONTACT_EMAIL} címen is elérsz minket.`,
  path: "/kapcsolat/",
});

export default function ContactPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="contact-h1">
        <div className={`container ${styles.grid}`}>
          <div className={styles.intro}>
            <p className="eyebrow">Kapcsolat</p>
            <h1 id="contact-h1">Beszéljünk személyesen</h1>
            <p className="lead">
              Mondd el röviden, mi viszi el most a legtöbb energiádat a cégnél. Ha inkább e-mailt írnál,
              az <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címen is elérsz minket. Mindenkinek
              válaszolunk.
            </p>

            <div className={styles.info}>
              <div>
                <h2 className={styles.infoTitle}>Elérhetőség</h2>
                <address className={styles.address}>
                  {LEGAL_NAME}, {ADDRESS.full}
                </address>
              </div>
              <div>
                <h2 className={styles.infoTitle}>Személyes első beszélgetés</h2>
                <p>
                  Egy-másfél órás személyes találkozó. Közösen eldöntjük, van-e értelme együtt dolgozni.
                  Díjmentes, és nem jár elköteleződéssel. A megállapodásig általában két-három ilyen
                  beszélgetés kell, mert a bizalomhoz idő kell.
                </p>
              </div>
              <div>
                <h2 className={styles.infoTitle}>Titoktartás</h2>
                <p>Amit ebben a beszélgetésben elmondasz, az nálunk marad.</p>
              </div>
            </div>
          </div>

          <section id={FORM_ANCHOR} className={styles.formWrap} aria-labelledby={`${FORM_ANCHOR}-title`}>
            <h2 id={`${FORM_ANCHOR}-title`} className="visually-hidden">
              Űrlap
            </h2>
            <p className={styles.formNote}>A válasz a megadott e-mail-címre érkezik.</p>
            <QuoteForm />
          </section>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Kapcsolat", path: "/kapcsolat/" },
            ]),
          ),
        }}
      />
    </>
  );
}
