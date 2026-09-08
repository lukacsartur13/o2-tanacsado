import type { NextConfig } from "next";

const isProduction =
  process.env.NEXT_PUBLIC_SITE_ENV === "production" ||
  process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
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
};

export default nextConfig;
