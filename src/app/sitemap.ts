import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: siteConfig.url, ar: siteConfig.url + "/ar" } },
    },
    {
      url: siteConfig.url + "/ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: siteConfig.url, ar: siteConfig.url + "/ar" } },
    },
  ];
}
