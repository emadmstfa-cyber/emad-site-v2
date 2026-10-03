import Image from "next/image";
import { CountUp, Reveal, RotatingText } from "@/components/reveal";
import type { Dict } from "@/lib/i18n";

const overlayStyle = {
  background: "linear-gradient(to top, rgba(20,17,15,0.97) 0%, rgba(20,17,15,0.78) 42%, rgba(20,17,15,0) 100%)",
};

export function Hero({ dict, name, legalName, handle, socials }: {
  dict: Dict;
  name: string;
  legalName: string;
  handle: string;
  socials: { label: string; href: string }[];
}) {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-cream/5">
      <div className="shell grid gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <Reveal>
            <span className="chip"><span className="dot" /> {dict.hero.chip}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl">
              {name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-gradient mt-4 text-2xl font-medium leading-snug sm:text-3xl md:text-4xl">
              {dict.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
              {dict.hero.lead}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="text-muted/75">{dict.hero.focus}</span>
              <span className="font-semibold text-gold"><RotatingText items={dict.hero.rotating} /></span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">{dict.hero.work}</a>
              <a href="#contact" className="btn btn-ghost">{dict.hero.talk}</a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer noopener" className="text-muted transition-colors hover:text-gold">
                  {item.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative">
            <span className="glow-gold" />
            <div className="card card-lift relative overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/portrait-card.jpg"
                  alt={legalName}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-24" style={overlayStyle}>
                  <p className="text-lg font-semibold text-cream">{legalName}</p>
                  <p className="text-sm text-cream/85">{handle}</p>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted/75">{dict.hero.roleLabel}</dt>
                    <dd className="mt-1 font-medium text-cream">{dict.hero.roleValue}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">{dict.hero.companyLabel}</dt>
                    <dd className="mt-1 font-medium text-cream">{dict.hero.companyValue}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">{dict.hero.founderLabel}</dt>
                    <dd className="mt-1 font-medium text-cream">{dict.hero.founderValue}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/75">{dict.hero.focusLabel}</dt>
                    <dd className="mt-1 font-medium text-cream">{dict.hero.focusValue}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="shell pb-14 md:pb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {dict.stats.map((item) => (
            <div key={item.label} className="card px-5 py-4">
              <p className="text-2xl font-semibold tracking-tight text-cream md:text-3xl">
                {item.value === null ? (
                  <span className="text-gradient">{item.label}</span>
                ) : (
                  <CountUp to={item.value} suffix={item.suffix} />
                )}
              </p>
              {item.value === null ? null : <p className="mt-1 text-sm font-medium text-cream/85">{item.label}</p>}
              <p className="text-xs text-muted/75">{item.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
