import type { Metadata } from "next";
import { IS_PRODUCTION, SITE_NAME, SITE_URL } from "./site";

interface PageMeta {
  /** Teljes cím, márkanévvel együtt (a sablon nem egészíti ki). */
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "hu_HU",
      type: "website",
    },
    twitter: { card: "summary", title, description },
    robots: IS_PRODUCTION ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: new URL(it.path, SITE_URL).toString(),
    })),
  };
}
