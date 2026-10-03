import { Reveal } from "@/components/reveal";
import type { Client } from "@/lib/clients";
import type { Dict } from "@/lib/i18n";

function initials(name: string): string {
  const words = name.replace(/[()·\-—]/g, " ").split(/\s+/).filter(Boolean);
  const skip = ["the", "and", "of"];
  const picked = words.filter((w) => !skip.includes(w.toLowerCase())).slice(0, 2);
  return picked.map((w) => w[0]).join("").toUpperCase() || "EM";
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <span className="chip"><span className="dot" /> {eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-cream md:text-4xl">{title}</h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Expertise({ dict }: { dict: Dict }) {
  return (
    <section id="expertise" className="border-b border-cream/5 py-20 md:py-28">
      <div className="shell">
        <SectionHeading eyebrow={dict.expertise.eyebrow} title={dict.expertise.title} lead={dict.expertise.lead} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {dict.expertise.areas.map((area, index) => (
            <Reveal key={area.id} delay={index * 0.05}>
              <article className="card card-lift h-full p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-cream">{area.title}</h3>
                  <span className="font-mono text-xs text-muted/60">{area.id}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <li key={item} className="rounded-full border border-cream/10 bg-cream/5 px-3 py-1.5 text-xs text-cream/85 transition-colors hover:border-gold/30 hover:text-gold">{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work({ dict, clients }: { dict: Dict; clients: Client[] }) {
  return (
    <section id="work" className="border-b border-cream/5 py-20 md:py-28">
      <div className="shell">
        <SectionHeading eyebrow={dict.work.eyebrow} title={dict.work.title} lead={dict.work.lead} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {clients.map((study, index) => (
            <Reveal key={study.slug} delay={(index % 2) * 0.06}>
              <article className="card card-lift flex h-full flex-col p-6 md:p-7">
                <div className="flex items-center gap-4">
                  <span className="monogram h-12 w-12 shrink-0 rounded-xl text-sm">{initials(study.client)}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-cream">{study.client}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted/75">{study.category}</p>
                  </div>
                </div>

                {study.highlight ? (
                  <p className="mt-5 inline-flex w-fit rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
                    {study.highlight}
                  </p>
                ) : null}

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted/75">{dict.work.challenge}</dt>
                    <dd className="mt-1 text-cream/85">{study.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">{dict.work.approach}</dt>
                    <dd className="mt-1 text-cream/85">{study.strategy}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">{dict.work.outcome}</dt>
                    <dd className="mt-1 text-cream/85">{study.outcome}</dd>
                  </div>
                </dl>

                {study.metrics && study.metrics.length > 0 ? (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-gold/20 bg-gold/[0.06] px-3 py-2.5">
                        <p className="text-base font-semibold text-gold">{m.value}</p>
                        <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted/75">{m.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {study.channels.map((channel) => (
                    <span key={channel} className="rounded-full border border-cream/10 px-3 py-1 text-[11px] uppercase tracking-wider text-muted transition-colors hover:border-gold/30 hover:text-gold">{channel}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketPilot({ dict }: { dict: Dict }) {
  return (
    <section id="marketpilot" className="border-b border-cream/5 py-20 md:py-28">
      <div className="shell">
        <div className="card overflow-hidden p-7 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <Reveal>
                <span className="chip"><span className="dot" /> {dict.marketpilot.chip}</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-cream md:text-4xl">MarketPilot</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{dict.marketpilot.text}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn btn-primary">{dict.marketpilot.cta1}</a>
                  <a href="#work" className="btn btn-ghost">{dict.marketpilot.cta2}</a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-cream/12 bg-ink-2/70">
                <div className="flex items-center gap-2 border-b border-cream/10 bg-cream/[0.03] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
                  <span className="ms-3 rounded-md bg-ink/60 px-3 py-1 text-[11px] tracking-wide text-muted">MarketPilot — Capabilities</span>
                </div>
                <div>
                  {dict.marketpilot.points.map((point) => (
                    <div key={point} className="panel-row">
                      <span className="pip" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stack({ dict }: { dict: Dict }) {
  return (
    <section id="stack" className="border-b border-cream/5 py-20 md:py-28">
      <div className="shell">
        <SectionHeading eyebrow={dict.stack.eyebrow} title={dict.stack.title} lead={dict.stack.lead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {dict.stack.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="card card-lift h-full p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{group.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-cream/85">
                  {group.items.map((item) => (
                    <li key={item} className="transition-colors hover:text-gold">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ dict, clients }: { dict: Dict; clients: Client[] }) {
  return (
    <section id="about" className="border-b border-cream/5 py-20 md:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} />
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2">
              {dict.about.certifications.map((item) => (
                <span key={item.title} className="rounded-full border border-cream/10 bg-cream/5 px-3 py-1.5 text-xs text-cream/85">
                  {item.title} · <span className="text-muted/75">{item.issuer}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="space-y-5">
          {dict.about.experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.06}>
              <article className="card card-lift p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-cream">{item.role}</h3>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted/75">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-gold">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">{dict.about.clientsLabel}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {clients.map((study) => (
                  <span key={study.slug} className="rounded-full border border-cream/10 bg-cream/5 px-3 py-1.5 text-xs text-cream/85">
                    {study.client}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Contact({ dict, linkedin }: { dict: Dict; linkedin: string }) {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="shell">
        <div className="card relative overflow-hidden p-8 md:p-14">
          <span className="glow-gold" />
          <Reveal>
            <span className="chip"><span className="dot" /> {dict.contact.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-cream md:text-4xl">
              {dict.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base text-muted">{dict.contact.text}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={linkedin} target="_blank" rel="noreferrer noopener" className="btn btn-primary">{dict.contact.cta}</a>
              <a href="#top" className="btn btn-ghost">{dict.contact.top}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
