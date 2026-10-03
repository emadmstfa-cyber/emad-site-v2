import Image from "next/image";
import { CountUp, Reveal, RotatingText } from "@/components/reveal";
import { rotatingExpertise, siteConfig, stats } from "@/lib/site";

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.x },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "GitHub", href: siteConfig.social.github },
];

const overlayStyle = {
  background: "linear-gradient(to top, rgba(11,16,32,0.97) 0%, rgba(11,16,32,0.78) 42%, rgba(11,16,32,0) 100%)",
};

export function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-white/5">
      <div className="shell grid gap-14 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
        <div>
          <Reveal>
            <span className="chip"><span className="dot" /> Digital Growth · AI Automation · MarTech</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
              {siteConfig.name}
              <span className="text-gradient mt-3 block">Growth, automation and decision systems.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {siteConfig.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="text-slate-500">Focus</span>
              <span className="font-semibold text-cyan-300"><RotatingText items={rotatingExpertise} /></span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">View selected work</a>
              <a href="#contact" className="btn btn-ghost">Start a conversation</a>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer noopener" className="text-slate-400 transition-colors hover:text-cyan-300">
                  {item.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/portrait-card.jpg"
                alt={siteConfig.legalName}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-24" style={overlayStyle}>
                <p className="text-lg font-semibold text-white">{siteConfig.legalName}</p>
                <p className="text-sm text-slate-300">{siteConfig.handle}</p>
              </div>
            </div>
            <div className="p-6 md:p-7">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500">Current role</dt>
                  <dd className="mt-1 font-medium text-slate-200">Managing Director</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Company</dt>
                  <dd className="mt-1 font-medium text-slate-200">WE Marketing</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Founder</dt>
                  <dd className="mt-1 font-medium text-slate-200">MarketPilot</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Focus</dt>
                  <dd className="mt-1 font-medium text-slate-200">Growth · AI · Data</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="shell pb-14 md:pb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((item) => (
            <div key={item.label} className="card px-5 py-4">
              <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                {item.value === null ? (
                  <span className="text-gradient">{item.label}</span>
                ) : (
                  <CountUp to={item.value} suffix={item.suffix} />
                )}
              </p>
              {item.value === null ? null : <p className="mt-1 text-sm font-medium text-slate-300">{item.label}</p>}
              <p className="text-xs text-slate-500">{item.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
