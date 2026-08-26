import type { MetadataRoute } from "next";

// TODO: replace with the real production domain once known.
const siteUrl = "https://TODO-your-domain.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
