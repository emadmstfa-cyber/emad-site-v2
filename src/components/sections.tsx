import { Reveal } from "@/components/reveal";
import { caseStudies, certifications, experience, expertise, marketPilotPoints, siteConfig, techStack } from "@/lib/site";

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

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-white/5 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Expertise"
          title="Four disciplines, one operating system for growth."
          lead="Growth, automation, MarTech and decision systems designed to work together rather than as isolated tactics."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {expertise.map((area, index) => (
            <Reveal key={area.id} delay={index * 0.05}>
              <article className="card h-full p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-cream">{area.title}</h3>
                  <span className="font-mono text-xs text-muted/60">{area.id}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cream/85">{item}</li>
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

export function Work() {
  return (
    <section id="work" className="border-b border-white/5 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Engagements where structure created measurable movement."
          lead="A selection of growth, performance and product engagements across healthcare, services, real estate, events and technology."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={(index % 2) * 0.06}>
              <article className="card h-full p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-cream">{study.client}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted/75">{study.category}</p>
                  </div>
                  {study.highlight ? (
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">{study.highlight}</span>
                  ) : null}
                </div>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted/75">Challenge</dt>
                    <dd className="mt-1 text-cream/85">{study.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">Approach</dt>
                    <dd className="mt-1 text-cream/85">{study.strategy}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">Outcome</dt>
                    <dd className="mt-1 text-cream/85">{study.outcome}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.channels.map((channel) => (
                    <span key={channel} className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-muted">{channel}</span>
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

export function MarketPilot() {
  return (
    <section id="marketpilot" className="border-b border-white/5 py-20 md:py-28">
      <div className="shell">
        <div className="card overflow-hidden p-7 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <span className="chip"><span className="dot" /> Product · Founder</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-cream md:text-4xl">MarketPilot</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  An AI-powered platform that turns monitoring, source analysis and data into decision-ready output — built and led as founder.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn btn-primary">Discuss a pilot</a>
                  <a href="#work" className="btn btn-ghost">See the case study</a>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {marketPilotPoints.map((point, index) => (
                <Reveal key={point} delay={0.05 * index}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-cream/85">{point}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const groups = [
    { title: "AI", items: techStack.ai },
    { title: "Automation", items: techStack.automation },
    { title: "CRM", items: techStack.crm },
    { title: "Ads", items: techStack.ads },
    { title: "Build", items: techStack.dev },
  ];
  return (
    <section id="stack" className="border-b border-white/5 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Stack"
          title="The tools behind the systems."
          lead="A working stack across AI, automation, CRM, paid media and product development."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="card h-full p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{group.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-cream/85">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
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

export function About() {
  return (
    <section id="about" className="border-b border-white/5 py-20 md:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Twelve years turning marketing, data and AI into systems."
            lead="From performance marketing to growth systems, automation, MarTech and decision intelligence — building the operating layer behind measurable outcomes."
          />
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2">
              {certifications.map((item) => (
                <span key={item.title} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cream/85">
                  {item.title} · <span className="text-muted/75">{item.issuer}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="space-y-5">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.06}>
              <article className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-cream">{item.role}</h3>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted/75">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-gold">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="shell">
        <div className="card relative overflow-hidden p-8 md:p-14">
          <Reveal>
            <span className="chip"><span className="dot" /> Contact</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-cream md:text-4xl">
              Building a growth, automation or monitoring system? Let us scope it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base text-muted">
              Open to consulting and partnership conversations across growth, marketing automation, CRM and decision-support systems.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Connect on LinkedIn</a>
              <a href="#top" className="btn btn-ghost">Back to top</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
