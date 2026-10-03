import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About, Contact, Expertise, FeaturedWork, MarketPilot, MoreWork, Stack } from "@/components/sections";
import { SiteFooter } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp";
import { caseStudiesDetailed } from "@/lib/case-studies";
import { clients as allClients } from "@/lib/clients";
import { getDict, pickClients, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "X", href: siteConfig.social.x },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "GitHub", href: siteConfig.social.github },
];

export function HomePage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const localized = pickClients(allClients, lang);
  const moreWork = localized.filter((c) => !caseStudiesDetailed.some((f) => f.slug === c.slug));
  const name = lang === "ar" ? "عماد مصطفى" : siteConfig.name;
  const legalName = lang === "ar" ? "عماد عبدالله المصطفى" : siteConfig.legalName;

  return (
    <>
      <SiteHeader dict={dict} name={name} />
      <main id="main-content" className="flex-1">
        <Hero dict={dict} name={name} legalName={legalName} handle={siteConfig.handle} socials={socials} />
        <Expertise dict={dict} />
        <FeaturedWork dict={dict} studies={caseStudiesDetailed} />
        <MoreWork dict={dict} clients={moreWork} />
        <MarketPilot dict={dict} />
        <Stack dict={dict} />
        <About dict={dict} clients={localized} />
        <Contact dict={dict} linkedin={siteConfig.social.linkedin} />
      </main>
      <SiteFooter dict={dict} name={name} legalName={legalName} socials={socials} />
      <WhatsAppFloat number={siteConfig.whatsapp.number} message={dict.whatsapp.message} label={dict.whatsapp.floatLabel} />
    </>
  );
}
