"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClass =
    "sticky top-0 z-50 transition-colors duration-300 " +
    (scrolled ? "border-b border-white/10 bg-[#070a14]/80 backdrop-blur-xl" : "border-b border-transparent");

  return (
    <header className={shellClass}>
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="group flex items-center gap-3">
          <span className="monogram h-9 w-9 rounded-xl text-sm">EM</span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-white">{siteConfig.name}</span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:block">Digital Growth · AI Automation</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">Get in touch</a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 lg:hidden"
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
        <div className="border-t border-white/10 bg-[#070a14]/95 backdrop-blur-xl lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2">Get in touch</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
