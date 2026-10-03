import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { WhatsAppCTA } from "@/components/whatsapp";
import type { CaseStudyDetail } from "@/lib/case-studies";
import type { Dict } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="border-b border-cream/5 py-12 md:py-16">
        <div className="shell">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{label}</p>
          <div className="mt-5 max-w-3xl">{children}</div>
        </div>
      </section>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-cream/85">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyPage({ dict, study, related }: { dict: Dict; study: CaseStudyDetail; related: CaseStudyDetail[] }) {
  const copy = dict.dir === "rtl" ? study.ar : study.en;
  const base = dict.dir === "rtl" ? "/ar/work/" : "/work/";
  const home = dict.dir === "rtl" ? "/ar" : "/";
  const homeLabel = dict.dir === "rtl" ? "الرئيسية" : "Home";
  const crumbWork = dict.work.featuredEyebrow;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.client + (study.project ? " — " + study.project : ""),
    description: copy.summary,
    about: copy.industry,
    inLanguage: dict.lang,
    url: siteConfig.url + base + study.slug,
    author: { "@type": "Person", name: siteConfig.legalName, url: siteConfig.url },
    publisher: { "@type": "Person", name: siteConfig.legalName },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: siteConfig.url + home },
      { "@type": "ListItem", position: 2, name: crumbWork, item: siteConfig.url + base + study.slug },
      { "@type": "ListItem", position: 3, name: study.client, item: siteConfig.url + base + study.slug },
    ],
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-grid relative overflow-hidden border-b border-cream/5">
        <div className="shell py-10 md:py-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted/75">
            <a href={home} className="transition-colors hover:text-gold">{homeLabel}</a>
            <span>/</span>
            <a href={home + "#work"} className="transition-colors hover:text-gold">{crumbWork}</a>
            <span>/</span>
            <span className="text-cream/85">{study.client}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{copy.industry}</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-cream md:text-5xl">{study.client}</h1>
              {study.project ? <p className="mt-2 text-lg text-cream/85">{study.project}</p> : null}
              {copy.period ? <p className="mt-2 text-sm text-muted/75">{copy.period}</p> : null}

              <p className="text-gradient mt-6 text-3xl font-semibold md:text-4xl">{copy.heroResult}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85">{copy.summary}</p>

              <div className="mt-8">
                <WhatsAppCTA
                  number={siteConfig.whatsapp.number}
                  message={copy.whatsapp}
                  label={dict.whatsapp.cta}
                  location="case-study-hero"
                  caseStudy={study.slug}
                >
                  {dict.whatsapp.cta}
                </WhatsAppCTA>
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="relative">
                <span className="glow-gold" />
                <div className="card relative overflow-hidden p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {study.heroMetrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-gold/20 bg-gold/[0.06] px-4 py-3">
                        <p className="text-lg font-semibold text-gold">{m.value}</p>
                        <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted/75">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Block label={dict.work.challenge}>
        <p className="text-base leading-relaxed text-cream/85 md:text-lg">{copy.challenge}</p>
      </Block>

      {copy.funnel && copy.funnel.length > 0 ? (
        <Block label="Funnel">
          <div className="flex flex-wrap items-center gap-2">
            {copy.funnel.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-2 text-sm text-gold">{step}</span>
                {i < copy.funnel!.length - 1 ? <span className="text-muted/60">↓</span> : null}
              </span>
            ))}
          </div>
        </Block>
      ) : null}

      <Block label={dict.work.approach}>
        <Bullets items={copy.strategy} />
      </Block>

      <Block label={dict.work.challenge === "التحدي" ? "التنفيذ" : "Execution"}>
        <Bullets items={copy.execution} />
      </Block>

      <Block label={copy.resultsLabel}>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {copy.results.map((m) => (
            <div key={m.label} className="rounded-xl border border-cream/10 bg-cream/[0.03] px-4 py-3">
              <p className="text-lg font-semibold text-cream">{m.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted/75">{m.label}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block label={copy.galleryLabel}>
        <div className="grid gap-4 sm:grid-cols-2">
          {study.gallery.map((item) => (
            <div key={item.label} className="overflow-hidden rounded-2xl border border-cream/10 bg-ink-2/60">
              <div className="relative aspect-[16/10] w-full">
                {item.kind === "image" && item.src ? (
                  <Image src={item.src} alt={item.label} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(245,241,234,.04),rgba(238,187,88,.06))]">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted/60">{item.label}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted/60">
          {dict.dir === "rtl" ? "مساحات جاهزة لإضافة الأصول الحقيقية." : "Placeholders ready for real assets."}
        </p>
      </Block>

      <Block label={copy.roleLabel}>
        <div className="flex flex-wrap gap-2">
          {copy.role.map((r) => (
            <span key={r} className="rounded-full border border-cream/10 bg-cream/5 px-3 py-1.5 text-xs text-cream/85">{r}</span>
          ))}
        </div>
      </Block>

      <Block label={copy.platformsLabel}>
        <div className="flex flex-wrap gap-2">
          {copy.platforms.map((p) => (
            <span key={p} className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1.5 text-xs text-gold">{p}</span>
          ))}
        </div>
      </Block>

      <section className="py-14 md:py-20">
        <div className="shell">
          <div className="card relative overflow-hidden p-8 md:p-12">
            <span className="glow-gold" />
            <h2 className="text-2xl font-semibold tracking-tight text-cream md:text-3xl">{copy.ctaTitle}</h2>
            <p className="mt-3 max-w-xl text-base text-muted">{copy.ctaText}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <WhatsAppCTA
                number={siteConfig.whatsapp.number}
                message={copy.whatsapp}
                label={dict.whatsapp.cta}
                location="case-study-bottom"
                caseStudy={study.slug}
              >
                {dict.whatsapp.cta}
              </WhatsAppCTA>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                {dict.contact.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-cream/5 py-14 md:py-20">
          <div className="shell">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{dict.work.moreEyebrow}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const rc = dict.dir === "rtl" ? r.ar : r.en;
                return (
                  <a key={r.slug} href={base + r.slug} className="card card-lift p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted/75">{rc.industry}</p>
                    <p className="mt-2 text-base font-semibold text-cream">{r.client}</p>
                    <p className="mt-2 text-sm text-gold">{rc.heroResult}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
