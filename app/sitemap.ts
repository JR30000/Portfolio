import type { MetadataRoute } from "next";

const siteUrl = "https://jrotich-portfolio.onrender.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/experience",
  "/credentials",
  "/recommendations",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: once `insights` has published rows, fetch slugs from Supabase
  // here and append `/insights/[slug]` entries.
  return STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
