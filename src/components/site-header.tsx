"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Dict } from "@/lib/i18n";

export function SiteHeader({ dict, name }: { dict: Dict; name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#expertise", label: dict.nav.expertise },
    { href: "#work", label: dict.nav.work },
    { href: "#marketpilot", label: dict.nav.marketpilot },
    { href: "#stack", label: dict.nav.stack },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
  ];

  const shellClass =
    "sticky top-0 z-50 transition-colors duration-300 " +
    (scrolled ? "border-b border-cream/10 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent");

  return (
    <header className={shellClass}>
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="group flex items-center gap-3">
          <Image src="/mark.svg" alt="Emad Moustafa" width={36} height={36} className="h-9 w-9 rounded-xl" priority />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-cream">{name}</span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted sm:block">{dict.brandTagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3.5 py-2 text-sm text-cream/85 transition-colors hover:bg-cream/5 hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={dict.switchHref}
            className="rounded-full border border-cream/15 px-3.5 py-2 text-xs font-semibold text-cream/85 transition-colors hover:border-gold/40 hover:text-gold"
          >
            {dict.switchLabel}
          </a>
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">{dict.nav.contact}</a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-cream/10 bg-cream/5 text-cream lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={"absolute left-0 top-0 h-0.5 w-4 rounded bg-current transition-transform " + (open ? "translate-y-[5px] rotate-45" : "")} />
              <span className={"absolute left-0 top-[5px] h-0.5 w-4 rounded bg-current transition-opacity " + (open ? "opacity-0" : "")} />
              <span className={"absolute left-0 top-[10px] h-0.5 w-4 rounded bg-current transition-transform " + (open ? "-translate-y-[5px] -rotate-45" : "")} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-cream/10 bg-ink/95 backdrop-blur-xl lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-cream hover:bg-cream/5">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2">{dict.nav.contact}</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
