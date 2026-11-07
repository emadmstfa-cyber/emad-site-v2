import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  AGENCY_URL,
  type AgencyCopy,
  type Article,
  type Block,
  type Faq,
  type HowCopy,
  type PageCopy,
} from "@/lib/pages";
import type { Lang } from "@/lib/i18n";

const names = { en: siteConfig.legalName, ar: "عماد عبدالله المصطفى" } as const;

export function base(lang: Lang) {
  return lang === "ar" ? "/ar" : "";
}

export function pathFor(lang: Lang, path: string) {
  const p = base(lang) + path;
  return p === "" ? "/" : p;
}

const navLabels = {
  en: { home: "Home", about: "About", how: "How I work", insights: "Insights", agency: "WE Marketing", skip: "Skip to content" },
  ar: { home: "الرئيسية", about: "نبذة", how: "منهجيتي", insights: "المقالات", agency: "WE Marketing", skip: "تخطَّ إلى المحتوى" },
} as const;

export function pageMetadata(lang: Lang, path: string, copy: PageCopy, type: "website" | "article" = "website"): Metadata {
  const en = siteConfig.url + (path === "" ? "" : path);
  const ar = siteConfig.url + "/ar" + path;
  const self = lang === "ar" ? ar : en;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: self,
      languages: { en, ar },
    },
    openGraph: { type, url: self, title: copy.title, description: copy.description, locale: lang === "ar" ? "ar_AR" : "en_US" },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description },
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function faqJsonLd(faq?: Faq[]) {
  if (!faq || faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export const personRef = { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url };

export function PageShell({ lang, switchPath, children }: { lang: Lang; switchPath: string; children: ReactNode }) {
  const t = navLabels[lang];
  const nav = [
    { href: pathFor(lang, ""), label: t.home },
    { href: pathFor(lang, "/about"), label: t.about },
    { href: pathFor(lang, "/how-i-work"), label: t.how },
    { href: pathFor(lang, "/insights"), label: t.insights },
    { href: pathFor(lang, "/agency"), label: t.agency },
  ];
  const switchHref = lang === "ar" ? switchPath || "/" : "/ar" + switchPath;
  const switchLabel = lang === "ar" ? "English" : "العربية";
  return (
    <>
      <header className="border-b border-cream/10 bg-ink/90">
        <div className="shell flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 md:min-h-20">
          <Link href={pathFor(lang, "")} className="flex items-center gap-3">
            <Image src="/mark.svg" alt={names[lang]} width={36} height={36} className="h-9 w-9" unoptimized />
            <span className="hidden text-sm font-semibold text-cream sm:inline">{names[lang]}</span>
          </Link>
          <nav aria-label="Main" className="order-3 flex w-full flex-wrap gap-1 md:order-none md:w-auto">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full px-3 py-2 text-sm text-cream/85 transition-colors hover:bg-cream/5 hover:text-gold">
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href={switchHref} className="rounded-full border border-cream/15 px-3.5 py-2 text-xs font-semibold text-cream/85 transition-colors hover:border-gold/40 hover:text-gold">
            {switchLabel}
          </Link>
        </div>
      </header>
      <main id="main-content" className="flex-1 py-14 md:py-20">{children}</main>
      <footer className="border-t border-cream/10 py-8">
        <div className="shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {names[lang]}.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-gold">{l.label}</Link>
            ))}
            <a href={AGENCY_URL} target="_blank" rel="noopener" className="transition-colors hover:text-gold">wemarketing.media</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export function Answer({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.06] p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{label}</p>
      <p className="mt-2 text-lg leading-8 text-cream md:text-xl md:leading-9">{text}</p>
    </div>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-12 space-y-10">
      {blocks.map((b, i) => (
        <section key={(b.h ?? "") + i}>
          {b.h ? <h2 className="text-xl font-semibold text-cream md:text-2xl">{b.h}</h2> : null}
          {b.p?.map((t) => (
            <p key={t} className="mt-3 text-base leading-8 text-cream/80">{t}</p>
          ))}
          {b.ul ? (
            <ul className="mt-3 list-disc space-y-2 ps-6 text-base leading-8 text-cream/80 marker:text-gold">
              {b.ul.map((t) => <li key={t}>{t}</li>)}
            </ul>
          ) : null}
          {b.ol ? (
            <ol className="mt-3 list-decimal space-y-2 ps-6 text-base leading-8 text-cream/80 marker:text-gold">
              {b.ol.map((t) => <li key={t}>{t}</li>)}
            </ol>
          ) : null}
          {b.callout ? (
            <p className="mt-4 rounded-xl border border-cream/10 bg-cream/[0.04] p-4 text-sm leading-7 text-muted">{b.callout}</p>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function FaqList({ faq, title }: { faq?: Faq[]; title: string }) {
  if (!faq || faq.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold text-cream md:text-2xl">{title}</h2>
      <dl className="mt-4 space-y-5">
        {faq.map((f) => (
          <div key={f.q} className="rounded-xl border border-cream/10 bg-cream/[0.03] p-5">
            <dt className="font-semibold text-cream">{f.q}</dt>
            <dd className="mt-2 leading-8 text-cream/75">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Header({ eyebrow, title, answer, answerLabel }: { eyebrow: string; title: string; answer: string; answerLabel: string }) {
  return (
    <>
      <span className="chip"><span className="dot" /> {eyebrow}</span>
      <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-cream md:text-5xl">{title}</h1>
      <Answer label={answerLabel} text={answer} />
    </>
  );
}

const ui = {
  en: { answer: "In short", faq: "Frequently asked questions", cta: "Start a conversation", agencyLine: "Campaigns are executed by", relatedHow: "How I work", relatedAgency: "WE Marketing", related: "Related", read: "Read", published: "Published", all: "All insights" },
  ar: { answer: "باختصار", faq: "أسئلة شائعة", cta: "ابدأ حوارًا", agencyLine: "تنفّذ الحملات", relatedHow: "منهجيتي", relatedAgency: "WE Marketing", related: "ذات صلة", read: "اقرأ", published: "نُشر", all: "كل المقالات" },
} as const;

function Cta({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const wa = "https://wa.me/" + siteConfig.whatsapp.number + "?text=" + encodeURIComponent(lang === "ar" ? "مرحبًا عماد، قرأت موقعك وأرغب في مناقشة نظام نمو." : "Hello Emad, I read your site and would like to discuss a growth system.");
  return (
    <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-cream/10 pt-8">
      <a href={wa} target="_blank" rel="noopener" className="btn btn-primary">{t.cta}</a>
      <Link href={pathFor(lang, "/how-i-work")} className="btn btn-ghost">{t.relatedHow}</Link>
      <a href={AGENCY_URL} target="_blank" rel="noopener" className="btn btn-ghost">{t.relatedAgency}</a>
    </div>
  );
}

export function SimplePage({ lang, copy }: { lang: Lang; copy: PageCopy }) {
  const t = ui[lang];
  return (
    <article className="shell max-w-4xl">
      <Header eyebrow={copy.eyebrow} title={copy.title} answer={copy.answer} answerLabel={t.answer} />
      <Blocks blocks={copy.blocks} />
      <FaqList faq={copy.faq} title={t.faq} />
      <Cta lang={lang} />
    </article>
  );
}

export function HowView({ lang, copy }: { lang: Lang; copy: HowCopy }) {
  const t = ui[lang];
  return (
    <article className="shell max-w-4xl">
      <Header eyebrow={copy.eyebrow} title={copy.title} answer={copy.answer} answerLabel={t.answer} />
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-cream md:text-2xl">{copy.compareTitle}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-cream/10">
          <table className="w-full min-w-[34rem] border-collapse text-start text-sm md:text-base">
            <thead>
              <tr className="bg-cream/[0.05] text-cream">
                {copy.compareHeads.map((h, i) => (
                  <th key={i} scope="col" className={"px-4 py-3 text-start font-semibold " + (i === 2 ? "text-gold" : "")}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.compareRows.map((r) => (
                <tr key={r[0]} className="border-t border-cream/10">
                  <th scope="row" className="px-4 py-3 text-start font-medium text-cream">{r[0]}</th>
                  <td className="px-4 py-3 text-muted">{r[1]}</td>
                  <td className="px-4 py-3 text-cream/90">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-cream md:text-2xl">{copy.stepsTitle}</h2>
        <ol className="mt-5 space-y-4">
          {copy.steps.map((s, i) => (
            <li key={s.title} className="card flex gap-4 p-5">
              <span className="monogram h-10 w-10 shrink-0 rounded-xl text-sm">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-cream">{s.title}</h3>
                <p className="mt-1 leading-7 text-cream/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-12 rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 md:p-6">
        <h2 className="text-lg font-semibold text-cream">{copy.limitsTitle}</h2>
        <p className="mt-2 leading-8 text-cream/80">{copy.limits}</p>
      </section>
      <FaqList faq={copy.faq} title={t.faq} />
      <Cta lang={lang} />
    </article>
  );
}

export function AgencyView({ lang, copy }: { lang: Lang; copy: AgencyCopy }) {
  const t = ui[lang];
  return (
    <article className="shell max-w-4xl">
      <Header eyebrow={copy.eyebrow} title={copy.title} answer={copy.answer} answerLabel={t.answer} />
      <Blocks blocks={copy.blocks} />
      <div className="mt-10 overflow-x-auto rounded-2xl border border-cream/10">
        <table className="w-full min-w-[28rem] border-collapse text-start text-sm md:text-base">
          <thead>
            <tr className="bg-cream/[0.05]">
              {copy.tableHeads.map((h, i) => (
                <th key={h} scope="col" className={"px-4 py-3 text-start font-semibold " + (i === 1 ? "text-gold" : "text-cream")}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copy.tableRows.map((r) => (
              <tr key={r[0]} className="border-t border-cream/10">
                <td className="px-4 py-3 text-cream/85">{r[0]}</td>
                <td className="px-4 py-3 text-cream/85">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <a href={AGENCY_URL} target="_blank" rel="noopener" className="btn btn-primary">{copy.cta}</a>
      </div>
      <Cta lang={lang} />
    </article>
  );
}

export function InsightsIndex({ lang, items, title, lead }: { lang: Lang; items: Article[]; title: string; lead: string }) {
  const t = ui[lang];
  return (
    <section className="shell max-w-4xl">
      <span className="chip"><span className="dot" /> Insights</span>
      <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-cream md:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-cream/80">{lead}</p>
      <ul className="mt-10 space-y-5">
        {items.map((a) => (
          <li key={a.slug}>
            <Link href={pathFor(lang, "/insights/" + a.slug)} className="card card-lift block p-6">
              <p className="text-xs text-muted">{t.published} · {a.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-cream">{a[lang].title}</h2>
              <p className="mt-2 leading-7 text-muted">{a[lang].answer}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold">{t.read} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ArticleView({ lang, article, others }: { lang: Lang; article: Article; others: Article[] }) {
  const t = ui[lang];
  const copy = article[lang];
  return (
    <article className="shell max-w-4xl">
      <p className="mb-4 text-sm text-muted">
        <Link href={pathFor(lang, "/insights")} className="text-gold hover:underline">{t.all}</Link> · {t.published} {article.date}
      </p>
      <Header eyebrow={copy.eyebrow} title={copy.title} answer={copy.answer} answerLabel={t.answer} />
      <Blocks blocks={copy.blocks} />
      <FaqList faq={copy.faq} title={t.faq} />
      <section className="mt-14">
        <h2 className="text-lg font-semibold text-cream">{t.related}</h2>
        <ul className="mt-3 space-y-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={pathFor(lang, "/insights/" + o.slug)} className="text-gold underline-offset-4 hover:underline">{o[lang].title}</Link>
            </li>
          ))}
          <li><Link href={pathFor(lang, "/how-i-work")} className="text-gold underline-offset-4 hover:underline">{t.relatedHow}</Link></li>
        </ul>
      </section>
      <Cta lang={lang} />
    </article>
  );
}
