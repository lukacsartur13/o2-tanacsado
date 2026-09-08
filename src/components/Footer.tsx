import Link from "next/link";
import { Logo } from "./Logo";
import {
  ADDRESS,
  CONTACT_EMAIL,
  LEGAL_NAME,
  LOCAL_PAGES,
  NAV,
  PRIVACY_URL,
  SERVICE_PAGES,
} from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Logo className={styles.logo} />
          <p className={styles.tagline}>
            HR-tanácsadás, szervezetfejlesztés és vezetőfejlesztés 20–200 fős kis- és
            középvállalkozásoknak. Országosan, online és helyszínen.
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Szolgáltatások</h2>
          <ul className={styles.list}>
            {SERVICE_PAGES.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/szolgaltatasok/#toborzas">Toborzás és kiválasztás</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Oldalak</h2>
          <ul className={styles.list}>
            {NAV.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
          <h2 className={`${styles.heading} ${styles.headingGap}`}>Térségek</h2>
          <ul className={styles.list}>
            {LOCAL_PAGES.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Elérhetőség</h2>
          <address className={styles.address}>
            <strong>{LEGAL_NAME}</strong>
            <br />
            {ADDRESS.full}
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </address>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} {LEGAL_NAME}</p>
        <a href={PRIVACY_URL}>Adatkezelési tájékoztató</a>
      </div>
    </footer>
  );
}
