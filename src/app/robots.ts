import type { MetadataRoute } from "next";
import { IS_PRODUCTION, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) {
    // Előnézeti / staging környezet: semmit ne indexeljenek a keresők.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
