import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { LOCAL_PAGES, NAV, SERVICE_PAGES, SITE_URL } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-09-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const main = NAV.map((n) => ({
    url: new URL(n.href, SITE_URL).toString(),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));
  const services = SERVICE_PAGES.map((n) => ({
    url: new URL(n.href, SITE_URL).toString(),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const posts = POSTS.map((p) => ({
    url: new URL(`/blog/${p.slug}/`, SITE_URL).toString(),
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const local = LOCAL_PAGES.map((n) => ({
    url: new URL(n.href, SITE_URL).toString(),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...main, ...services, ...posts, ...local];
}
