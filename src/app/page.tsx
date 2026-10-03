import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About, Contact, Expertise, MarketPilot, Stack, Work } from "@/components/sections";
import { SiteFooter } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Expertise />
        <Work />
        <MarketPilot />
        <Stack />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
