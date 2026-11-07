import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView, JsonLd, PageShell, faqJsonLd, pageMetadata } from "@/components/page-views";
import { articles, getArticle } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata("ar", "/insights/" + slug, article.ar, "article");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const copy = article.ar;
  const url = siteConfig.url + "/ar/insights/" + slug;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.title,
    description: copy.description,
    inLanguage: "ar",
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url },
    publisher: { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url },
  };
  const faq = faqJsonLd(copy.faq);
  const others = articles.filter((a) => a.slug !== slug);
  return (
    <PageShell lang="ar" switchPath={"/insights/" + slug}>
      <JsonLd data={articleLd} />
      {faq ? <JsonLd data={faq} /> : null}
      <ArticleView lang="ar" article={article} others={others} />
    </PageShell>
  );
}
