import type { Metadata } from "next";
import { HowView, JsonLd, PageShell, faqJsonLd, pageMetadata } from "@/components/page-views";
import { howIWorkPage } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

const copy = howIWorkPage.en;
export const metadata: Metadata = pageMetadata("en", "/how-i-work", copy);

export default function Page() {
  const page = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title,
    description: copy.description,
    url: siteConfig.url + "/how-i-work",
    inLanguage: "en",
    author: { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url },
  };
  const faq = faqJsonLd(copy.faq);
  return (
    <PageShell lang="en" switchPath="/how-i-work">
      <JsonLd data={page} />
      {faq ? <JsonLd data={faq} /> : null}
      <HowView lang="en" copy={copy} />
    </PageShell>
  );
}
