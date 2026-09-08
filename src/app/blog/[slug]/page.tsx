import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/CtaLink";
import { ArrowRight } from "@/components/Icons";
import { QuoteSection } from "@/components/QuoteSection";
import { POSTS, POST_BY_SLUG, formatDate, readingMinutes } from "@/lib/blog";
import { FOUNDERS } from "@/lib/content";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { LEGAL_NAME, SITE_URL } from "@/lib/site";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) return {};
  const meta = pageMetadata({ title: post.seoTitle, description: post.description, path: `/blog/${post.slug}/` });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date, modifiedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) notFound();

  const related = post.related.map((s) => POST_BY_SLUG[s]).filter(Boolean);
  const url = `${SITE_URL}/blog/${post.slug}/`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "hu",
    datePublished: post.date,
    dateModified: post.date,
    author: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
    publisher: { "@id": `${SITE_URL}/#organization`, "@type": "ProfessionalService", name: LEGAL_NAME },
    about: { "@type": "Thing", name: post.topic },
    isPartOf: { "@id": `${SITE_URL}/blog/#blog` },
  };

  return (
    <>
      <article>
        <header className={styles.head}>
          <span className="o2-ring" style={{ width: 520, height: 520, right: -240, top: -260 }} aria-hidden="true" />
          <div className={`container ${styles.headInner}`}>
            <p className={styles.crumbs}>
              <Link href="/blog/">Blog</Link> <span aria-hidden="true">/</span> {post.topic}
            </p>
            <h1>{post.title}</h1>
            <p className={styles.meta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post)} perc olvasás</span>
              <span aria-hidden="true">·</span>
              <span>O2 Tanácsadó</span>
            </p>
          </div>
        </header>

        <div className={`container ${styles.grid}`}>
          <div className={styles.body}>
            <div className={styles.intro}>
              {post.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {post.sections.map((s) => (
              <section key={s.heading} className={styles.block}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <aside className={styles.cta} aria-labelledby="post-cta-title">
              <p className="eyebrow">Konzultáció</p>
              <h2 id="post-cta-title">{post.ctaTitle}</h2>
              <p>{post.ctaText}</p>
              <div className={styles.ctaActions}>
                <CtaLink service={post.interest} local>
                  {post.ctaLabel}
                </CtaLink>
                <Link href={post.service} className="link-arrow">
                  {post.serviceLabel} <ArrowRight />
                </Link>
              </div>
            </aside>
          </div>

          <aside className={styles.side}>
            <div className={styles.sideBox}>
              <p className={styles.sideTitle}>Kapcsolódó szolgáltatás</p>
              <Link href={post.service} className={styles.sideService}>
                {post.serviceLabel} <ArrowRight />
              </Link>
              <p className={styles.sideText}>
                Országosan, online és igény szerint helyszínen, 20–200 fős kkv-knak.
              </p>
              <CtaLink service={post.interest} local variant="ghost" size="sm">
                Beszéljük át a helyzetet
              </CtaLink>
            </div>
            {related.length > 0 && (
              <div className={styles.sideBox}>
                <p className={styles.sideTitle}>Kapcsolódó cikkek</p>
                <ul className={styles.relatedList}>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}/`}>{r.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>

      <QuoteSection
        title={post.ctaTitle}
        text="Írja le röviden a cég helyzetét. Az első egyeztetés díjmentes, és nem jár kötelezettséggel."
        defaultInterests={[post.interest].flat()}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbLd([
              { name: "Főoldal", path: "/" },
              { name: "Blog", path: "/blog/" },
              { name: post.title, path: `/blog/${post.slug}/` },
            ]),
          ),
        }}
      />
    </>
  );
}
