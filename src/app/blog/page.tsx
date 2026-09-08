import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { ArrowRight } from "@/components/Icons";
import { formatDate, readingMinutes, sortedPosts } from "@/lib/blog";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { SERVICE_PAGES, SITE_NAME, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Blog: HR és vezetés kkv-vezetőknek | O2 Tanácsadó",
  description:
    "Gyakorlati cikkek kkv-vezetőknek: fluktuáció, munkaerő-megtartás, munkaköri leírás, szervezeti diagnózis, vezetői tréning és coaching, ösztönzés, toborzás.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = sortedPosts();
  const topics = Array.from(new Set(posts.map((p) => p.topic)));

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog/#blog`,
    name: `${SITE_NAME} blog`,
    url: `${SITE_URL}/blog/`,
    inLanguage: "hu",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}/`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <section className={styles.head} aria-labelledby="blog-h1">
        <span className="o2-ring" style={{ width: 560, height: 560, right: -240, top: -260 }} aria-hidden="true" />
        <div className={`container ${styles.headGrid}`}>
          <div>
            <p className="eyebrow">Blog</p>
            <h1 id="blog-h1">Gyakorlati HR- és vezetési tudás kkv-vezetőknek</h1>
            <p className="lead">
              Rövid, konkrét cikkek 20–200 fős cégek tulajdonosainak és vezetőinek: mit lehet
              megcsinálni házon belül, és mikor érdemes külső segítséget bevonni.
            </p>
          </div>
          <ul className={styles.topics} aria-label="Témakörök">
            {topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="posts-title">
        <div className="container">
          <h2 id="posts-title" className="visually-hidden">
            Cikkek
          </h2>
          <ol className={styles.list}>
            {posts.map((p) => (
              <li key={p.slug} className={`${styles.card} reveal`}>
                <div className={styles.meta}>
                  <span className={styles.topic}>{p.topic}</span>
                  <span className="muted">
                    <time dateTime={p.date}>{formatDate(p.date)}</time> · {readingMinutes(p)} perc
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
                </h3>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <Link href={`/blog/${p.slug}/`} className="link-arrow" aria-label={`${p.title} – elolvasom`}>
                  Elolvasom <ArrowRight />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section section--paper2 ${styles.services}`} aria-labelledby="blog-services-title">
        <div className={`container ${styles.servicesGrid}`}>
          <div>
            <p className="eyebrow">Szolgáltatások</p>
            <h2 id="blog-services-title">Ha a cikk nem elég, beszéljük át a helyzetet</h2>
            <p className="lead">
              A cikkek általános helyzetekről szólnak. A cég helyzete konkrét. Az első egyeztetés
              díjmentes, online vagy a cégnél, országosan.
            </p>
            <CtaLink service="segitseg">Kérjen első egyeztetést</CtaLink>
          </div>
          <ul className={styles.serviceList}>
            {SERVICE_PAGES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="link-arrow">
                  {s.label} <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Blog", path: "/blog/" },
            ]),
          ),
        }}
      />
    </>
  );
}
