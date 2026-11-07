import type { MetadataRoute } from "next";
import { caseStudiesDetailed } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";
import { articles } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: siteConfig.url,
    ar: siteConfig.url + "/ar",
  };

  const home: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: siteConfig.url + "/ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];

  const cases: MetadataRoute.Sitemap = caseStudiesDetailed.flatMap((study) => {
    const caseLanguages = {
      en: siteConfig.url + "/work/" + study.slug,
      ar: siteConfig.url + "/ar/work/" + study.slug,
    };
    return [
      {
        url: caseLanguages.en,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.8,
        alternates: { languages: caseLanguages },
      },
      {
        url: caseLanguages.ar,
        lastModified: new Date(),
        changeFrequency: "yearly" as const,
        priority: 0.7,
        alternates: { languages: caseLanguages },
      },
    ];
  });

  const privacy: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url + "/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: siteConfig.url + "/privacy",
          ar: siteConfig.url + "/ar/privacy",
        },
      },
    },
    {
      url: siteConfig.url + "/ar/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: siteConfig.url + "/privacy",
          ar: siteConfig.url + "/ar/privacy",
        },
      },
    },
  ];

  const pageDefs: { path: string; priority: number; freq: "weekly" | "monthly"; date?: string }[] = [
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/how-i-work", priority: 0.8, freq: "monthly" },
    { path: "/agency", priority: 0.6, freq: "monthly" },
    { path: "/insights", priority: 0.8, freq: "weekly" },
    ...articles.map((a) => ({ path: "/insights/" + a.slug, priority: 0.7, freq: "monthly" as const, date: a.date })),
  ];
  const pages: MetadataRoute.Sitemap = pageDefs.flatMap((p) => {
    const languages = { en: siteConfig.url + p.path, ar: siteConfig.url + "/ar" + p.path };
    const lastModified = p.date ? new Date(p.date) : new Date("2026-11-07");
    return [
      { url: languages.en, lastModified, changeFrequency: p.freq, priority: p.priority, alternates: { languages } },
      { url: languages.ar, lastModified, changeFrequency: p.freq, priority: Math.max(p.priority - 0.1, 0.3), alternates: { languages } },
    ];
  });

  return [...home, ...pages, ...cases, ...privacy];
}
