import type { Metadata } from "next";
import { AgencyView, JsonLd, PageShell, pageMetadata } from "@/components/page-views";
import { agencyPage, AGENCY_URL } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

const copy = agencyPage.ar;
export const metadata: Metadata = pageMetadata("ar", "/agency", copy);

export default function Page() {
  const org = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title,
    url: siteConfig.url + "/ar/agency",
    inLanguage: "ar",
    about: {
      "@type": "Organization",
      name: "WE Marketing Management",
      url: AGENCY_URL,
      founder: { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url },
    },
  };
  return (
    <PageShell lang="ar" switchPath="/agency">
      <JsonLd data={org} />
      <AgencyView lang="ar" copy={copy} />
    </PageShell>
  );
}
