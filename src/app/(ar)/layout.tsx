import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Tajawal } from "next/font/google";
import type { ReactNode } from "react";
import { dicts } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const tajawal = Tajawal({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });
const fontVars = inter.variable + " " + tajawal.variable + " " + mono.variable;

const ar = dicts.ar;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: ar.meta.title, template: "%s — " + "عماد مصطفى" },
  description: ar.meta.description,
  applicationName: "عماد مصطفى",
  authors: [{ name: "عماد عبدالله المصطفى", url: siteConfig.url }],
  creator: "عماد عبدالله المصطفى",
  alternates: { canonical: "/ar", languages: { "en-US": "/", ar: "/ar" } },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: siteConfig.url + "/ar",
    siteName: "عماد مصطفى",
    title: ar.meta.title,
    description: ar.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: ar.meta.title,
    description: ar.meta.description,
    creator: siteConfig.handle,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  category: "technology",
};

export const viewport: Viewport = { themeColor: "#0b0907", colorScheme: "dark" };

export default function ArLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "عماد عبدالله المصطفى",
    alternateName: "عماد مصطفى",
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    jobTitle: ar.meta.jobTitle,
    description: ar.meta.description,
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "عماد مصطفى",
    url: siteConfig.url + "/ar",
    inLanguage: "ar",
  };
  return (
    <html lang="ar" dir="rtl" className={fontVars + " h-full antialiased"}>
      <body className="min-h-full flex flex-col bg-ink text-cream">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink">
          تخطَّ إلى المحتوى
        </a>
        {children}
      </body>
    </html>
  );
}
