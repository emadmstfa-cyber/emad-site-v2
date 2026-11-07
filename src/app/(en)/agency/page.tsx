import type { Metadata } from "next";
import { AgencyView, JsonLd, PageShell, pageMetadata } from "@/components/page-views";
import { agencyPage, AGENCY_URL } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

const copy = agencyPage.en;
export const metadata: Metadata = pageMetadata("en", "/agency", copy);

export default function Page() {
  const org = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title,
    url: siteConfig.url + "/agency",
    inLanguage: "en",
    about: {
      "@type": "Organization",
      name: "WE Marketing Management",
      url: AGENCY_URL,
      founder: { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url },
    },
  };
  return (
    <PageShell lang="en" switchPath="/agency">
      <JsonLd data={org} />
      <AgencyView lang="en" copy={copy} />
    </PageShell>
  );
}
