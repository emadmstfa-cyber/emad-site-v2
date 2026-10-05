import type { MetadataRoute } from "next";
import { caseStudiesDetailed } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

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

  return [...home, ...cases, ...privacy];
}
