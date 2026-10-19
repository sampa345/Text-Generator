import { MetadataRoute } from "next";
import { getAllToolSlugs } from "@/lib/tools-registry";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();

  // Root homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog/how-unicode-text-generators-work`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog/how-to-copy-and-paste-cursive-text`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog/why-fancy-text-displays-differently`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.4
    }
  ];

  // All 20 dedicated tool landing pages
  const toolSlugs = getAllToolSlugs();
  toolSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    });
  });

  return routes;
}
