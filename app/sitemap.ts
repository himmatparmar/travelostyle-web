import type { MetadataRoute } from "next";
import { getSitemapContent } from "@/lib/sitemapContent";

// Set this in your env (.env.local for dev, host's env vars for
// production) to your real public domain, e.g. https://www.travelostyle.com
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/+$/,
  "",
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { journeys, blogs, pages } = await getSitemapContent();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/about-us`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/itinerary`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/destination`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/comparison`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/group-rtb-journeys`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/private-rtb-journeys`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/tailor-made-journeys`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/site-map`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const toRoute =
    (changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number) =>
    (entry: { url: string; lastModified: Date }): MetadataRoute.Sitemap[number] => ({
      url: `${SITE_URL}${entry.url}`,
      lastModified: entry.lastModified,
      changeFrequency,
      priority,
    });

  return [
    ...staticRoutes,
    ...journeys.map(toRoute("weekly", 0.9)),
    ...blogs.map(toRoute("monthly", 0.6)),
    ...pages.map(toRoute("monthly", 0.4)),
  ];
}
