import { navLinks, siteConfig } from "@/lib/site";

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.x },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "GitHub", href: siteConfig.social.github },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="monogram h-9 w-9 rounded-xl text-sm">EM</span>
            <span className="text-sm font-semibold text-cream">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Digital growth, AI automation and decision systems. {siteConfig.legalName}.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-gold">{link.label}</a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer noopener" className="text-muted transition-colors hover:text-gold">{item.label}</a>
          ))}
        </div>
      </div>
      <div className="shell mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-muted/75 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        <p>emadmstfa.com · Website V2 preview</p>
      </div>
    </footer>
  );
}
