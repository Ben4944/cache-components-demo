import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  async headers() {
    return [
      {
        source: "/cfg/:slug",
        headers: [
          {
            key: "Vercel-CDN-Cache-Control",
            value: "public, max-age=3600",
          },
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
