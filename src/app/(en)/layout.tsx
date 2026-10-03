import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });
const fontVars = inter.variable + " " + mono.variable;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s — " + siteConfig.name },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/", languages: { "en-US": "/", ar: "/ar" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.handle,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  category: "technology",
  keywords: [
    "Digital Growth Consultant",
    "AI Automation Consultant",
    "MarTech",
    "CRM",
    "Growth Strategy",
    "Marketing Automation",
    "Digital Transformation",
    "Strategic Monitoring",
    "Early Warning Systems",
    "Decision Support",
  ],
};

export const viewport: Viewport = { themeColor: "#0b0907", colorScheme: "dark" };

export default function EnLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    jobTitle: "Managing Director, WE Marketing",
    description: siteConfig.description,
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en",
  };
  return (
    <html lang="en" dir="ltr" className={fontVars + " h-full antialiased"}>
      <body className="min-h-full flex flex-col bg-ink text-cream">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
