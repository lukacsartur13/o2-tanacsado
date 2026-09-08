import type { NextConfig } from "next";

const isProduction =
  process.env.NEXT_PUBLIC_SITE_ENV === "production" ||
  process.env.VERCEL_ENV === "production";

/**
 * STATIC_EXPORT=1 esetén (GitHub Pages) statikus HTML-export készül:
 * nincs szerveroldali útvonal, a képek optimalizálás nélkül kerülnek ki,
 * és az oldal a NEXT_PUBLIC_BASE_PATH al-útvonalon fut (pl. /o2-tanacsado).
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  ...(isStaticExport
    ? { output: "export", basePath: basePath || undefined, images: { unoptimized: true } }
    : { images: { formats: ["image/avif", "image/webp"] } }),
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          const headers = [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
          ];
          if (!isProduction) {
            // Preview/staging environments must never be indexed as a copy of the live site.
            headers.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
          }
          return [{ source: "/(.*)", headers }];
        },
      }),
};

export default nextConfig;
