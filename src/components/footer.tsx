import Image from "next/image";
import type { Dict } from "@/lib/i18n";

export function SiteFooter({ dict, name, legalName, socials }: {
  dict: Dict;
  name: string;
  legalName: string;
  socials: { label: string; href: string }[];
}) {
  const links = [
    { href: "#expertise", label: dict.nav.expertise },
    { href: "#work", label: dict.nav.work },
    { href: "#marketpilot", label: dict.nav.marketpilot },
    { href: "#stack", label: dict.nav.stack },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
    { href: dict.switchHref, label: dict.switchLabel },
  ];
  return (
    <footer className="border-t border-cream/10 py-12">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image src="/mark.svg" alt="Emad Moustafa" width={36} height={36} className="h-9 w-9 rounded-xl" />
            <span className="text-sm font-semibold text-cream">{name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{dict.hero.chip}. {legalName}.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-gold">{link.label}</a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer noopener" className="text-muted transition-colors hover:text-gold">{item.label}</a>
          ))}
        </div>
      </div>
      <div className="shell mt-10 flex flex-col gap-3 border-t border-cream/5 pt-6 text-xs text-muted/75 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {legalName}. {dict.footer.rights}</p>
        <p>emadmstfa.com · {dict.footer.note}</p>
      </div>
    </footer>
  );
}
