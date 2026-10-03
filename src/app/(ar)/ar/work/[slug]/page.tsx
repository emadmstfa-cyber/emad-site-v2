import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study";
import { caseStudiesDetailed, getCaseStudy } from "@/lib/case-studies";
import { getDict } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return caseStudiesDetailed.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = siteConfig.url + "/ar/work/" + study.slug;
  return {
    title: study.client + (study.project ? " — " + study.project : ""),
    description: study.ar.summary,
    alternates: { canonical: "/ar/work/" + study.slug, languages: { en: siteConfig.url + "/work/" + study.slug, ar: url } },
    openGraph: {
      type: "article",
      url,
      title: study.client + " — " + study.ar.heroResult,
      description: study.en.summary,
    },
    twitter: { card: "summary_large_image", title: study.client, description: study.en.summary },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const dict = getDict("ar");
  const related = caseStudiesDetailed.filter((c) => c.slug !== study.slug);
  return <CaseStudyPage dict={dict} study={study} related={related} />;
}
