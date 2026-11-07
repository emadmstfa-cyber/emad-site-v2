import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { AGENCY_URL } from "@/lib/pages";

const copy = {
  en: {
    label: "What I do",
    text: "I build growth systems for companies in Saudi Arabia and the UAE: I connect paid advertising to the CRM, automation and analytics, so decision-makers know which campaign brings a real customer, not just a click. Campaigns are executed through my agency, WE Marketing.",
    quote:
      "The difference between managing ads and building a growth system is the difference between a report that says \"we got 1,000 clicks\" and a system that says \"of 100 enquiries, 12 were qualified meetings, and the source is this campaign\".",
    how: "How I work",
    about: "About me",
    insights: "Insights",
    agency: "WE Marketing",
  },
  ar: {
    label: "ماذا أفعل",
    text: "أبني أنظمة نمو للشركات في السعودية والإمارات: أربط الإعلانات المدفوعة بالـ CRM والأتمتة والتحليلات، ليعرف صاحب القرار أي حملة تجلب عميلًا فعليًا وليس مجرد نقرة. وتُنفَّذ الحملات عبر وكالتي WE Marketing.",
    quote:
      "الفرق بين إدارة الإعلانات وبناء نظام نمو هو الفرق بين تقرير يقول «حصلنا على 1,000 نقرة» ونظام يقول «من بين 100 استفسار، 12 اجتماعًا مؤهلًا، والمصدر هو هذه الحملة».",
    how: "منهجيتي",
    about: "نبذة عني",
    insights: "المقالات",
    agency: "WE Marketing",
  },
} as const;

export function AnswerBlock({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const b = lang === "ar" ? "/ar" : "";
  return (
    <section aria-label={t.label} className="border-b border-cream/5 py-14 md:py-20">
      <div className="shell max-w-4xl">
        <span className="chip"><span className="dot" /> {t.label}</span>
        <p className="mt-5 text-xl leading-9 text-cream md:text-2xl md:leading-[2.6rem]">{t.text}</p>
        <blockquote className="mt-6 border-s-2 border-gold/60 ps-5 text-base leading-8 text-muted md:text-lg">{t.quote}</blockquote>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={b + "/how-i-work"} className="btn btn-primary">{t.how}</Link>
          <Link href={b + "/about"} className="btn btn-ghost">{t.about}</Link>
          <Link href={b + "/insights"} className="btn btn-ghost">{t.insights}</Link>
          <a href={AGENCY_URL} target="_blank" rel="noopener" className="btn btn-ghost">{t.agency}</a>
        </div>
      </div>
    </section>
  );
}
