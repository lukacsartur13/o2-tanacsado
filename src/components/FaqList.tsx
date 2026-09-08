import type { Faq } from "@/lib/services";
import styles from "./FaqList.module.css";

/**
 * Gyakori kérdések natív <details> elemekkel: JS nélkül is működik,
 * billentyűzettel kezelhető, és a tartalom a HTML-ben marad (SEO).
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className={styles.list}>
      {items.map((f, i) => (
        <details key={f.q} className={styles.item} open={i === 0}>
          <summary className={styles.summary}>
            <span>{f.q}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function faqPageLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
