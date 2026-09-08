import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { QuoteSection } from "@/components/QuoteSection";
import { SERVICES } from "@/lib/content";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { ADDRESS, CONTACT_EMAIL, LEGAL_NAME } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Kapcsolat és ajánlatkérés | O2 Tanácsadó",
  description:
    "Kérjen ajánlatot HR-tanácsadásra: HR-stratégia, toborzás, munkakörök, szervezetfejlesztés. O2 Tanácsadó Kft., 1088 Budapest, Bródy Sándor utca 26.",
  path: "/kapcsolat/",
});

export default function ContactPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="contact-h1">
        <div className={`container ${styles.grid}`}>
          <div>
            <p className="eyebrow">Kapcsolat</p>
            <h1 id="contact-h1">Kapcsolat és ajánlatkérés</h1>
            <p className="lead">
              A leggyorsabb út az alábbi ajánlatkérő űrlap. Ha inkább e-mailt írna, a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> címen érhet el minket.
            </p>
            <a href="#ajanlatkeres" className="link-arrow">
              Ugrás az űrlaphoz <ArrowRight />
            </a>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Elérhetőség</h2>
            <address className={styles.address}>
              <strong>{LEGAL_NAME}</strong>
              <br />
              {ADDRESS.full}
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </address>
            <h2 className={styles.cardTitle}>Mire kérhet ajánlatot?</h2>
            <ul className={styles.list}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/szolgaltatasok/#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <QuoteSection
        light
        title="Ajánlatkérő űrlap"
        text="Töltse ki az alábbi mezőket. A válasz a megadott e-mail-címre érkezik."
      />

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
