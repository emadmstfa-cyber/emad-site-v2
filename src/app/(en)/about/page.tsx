import type { Metadata } from "next";
import { JsonLd, PageShell, SimplePage, faqJsonLd, pageMetadata, personRef } from "@/components/page-views";
import { aboutPage, AGENCY_URL } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

const copy = aboutPage.en;
export const metadata: Metadata = pageMetadata("en", "/about", copy);

export default function Page() {
  const about = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: copy.title,
    url: siteConfig.url + "/about",
    inLanguage: "en",
    mainEntity: {
      ...personRef,
      jobTitle: "Managing Director, WE Marketing",
      worksFor: { "@type": "Organization", name: "WE Marketing", url: AGENCY_URL },
      description: copy.answer,
    },
  };
  const faq = faqJsonLd(copy.faq);
  return (
    <PageShell lang="en" switchPath="/about">
      <JsonLd data={about} />
      {faq ? <JsonLd data={faq} /> : null}
      <SimplePage lang="en" copy={copy} />
    </PageShell>
  );
}
