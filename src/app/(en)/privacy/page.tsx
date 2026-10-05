import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Emad Search Console Reporting and emadmstfa.com.",
  alternates: {
    canonical: "/privacy",
    languages: { "en-US": "/privacy", ar: "/ar/privacy" },
  },
};

const sections = [
  {
    title: "Information we access",
    body: "When you authorize Emad Search Console Reporting, the application uses Google's read-only Search Console permission to access the Search Console properties available to your Google account and their performance data, such as clicks, impressions, dates, queries, pages, countries, and devices. The application cannot edit your Search Console properties or data.",
  },
  {
    title: "How information is used",
    body: "The accessed information is used only to generate private search-performance reports, analysis, and related monitoring requested by the authorized user. It is not used for advertising, profiling, or unrelated purposes.",
  },
  {
    title: "Storage and security",
    body: "OAuth credentials and generated reports are stored in access-controlled systems. Reasonable technical and organizational safeguards are used to protect them. No method of electronic storage is completely secure, so absolute security cannot be guaranteed.",
  },
  {
    title: "Sharing and sale of data",
    body: "Google user data is not sold. It is not shared with third parties except service providers needed to operate the application, when directed by the user, or when required by law. Service providers may process data only to deliver the relevant service and are subject to appropriate confidentiality and security obligations.",
  },
  {
    title: "Retention and deletion",
    body: "OAuth credentials and reports are retained only for as long as needed to provide the reporting service or meet legal obligations. You may request deletion of stored credentials and reports at any time by contacting the email below. Requests are handled within a reasonable period.",
  },
  {
    title: "Your choices",
    body: "You can revoke the application's access at any time from your Google Account security settings. Revoking access stops future retrieval, but does not automatically delete reports already generated; contact us to request their deletion.",
  },
  {
    title: "Google API Services User Data Policy",
    body: "The application's use and transfer of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-cream/10 bg-ink/90">
        <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/mark.svg" alt={siteConfig.legalName} width={36} height={36} className="h-9 w-9" unoptimized />
            <span className="text-sm font-semibold text-cream">{siteConfig.legalName}</span>
          </Link>
          <Link href="/ar/privacy" className="rounded-full border border-cream/15 px-3.5 py-2 text-xs font-semibold text-cream/85 transition-colors hover:border-gold/40 hover:text-gold">
            العربية
          </Link>
        </div>
      </header>

      <main id="main-content" className="flex-1 py-16 md:py-24">
        <article className="shell max-w-4xl">
          <span className="chip"><span className="dot" /> Privacy</span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-cream md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">Effective date: October 5, 2026</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-cream/85">
            This policy explains how {siteConfig.legalName} handles information through emadmstfa.com and the Emad Search Console Reporting application.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-cream">{section.title}</h2>
                <p className="mt-3 leading-8 text-muted">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold text-cream">Contact</h2>
              <p className="mt-3 leading-8 text-muted">
                For privacy questions or deletion requests, email{" "}
                <a className="text-gold underline underline-offset-4" href="mailto:emadmstfa@gmail.com">emadmstfa@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-cream">Changes to this policy</h2>
              <p className="mt-3 leading-8 text-muted">This policy may be updated when the service or legal requirements change. The effective date above will be revised when material changes are published.</p>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-cream/10 py-8">
        <div className="shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}.</p>
          <Link href="/" className="transition-colors hover:text-gold">Home</Link>
        </div>
      </footer>
    </>
  );
}
