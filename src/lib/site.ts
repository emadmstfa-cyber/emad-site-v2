export const siteConfig = {
  name: "Emad Moustafa",
  legalName: "Emad Abdullah Almustafa",
  handle: "@emadmstfa",
  domain: "https://emadmstfa.com",
  url: "https://emadmstfa.com",
  title: "Emad Moustafa — Digital Growth × AI Automation × MarTech",
  description:
    "Digital Growth Consultant × AI Automation Specialist × Technology Founder × Marketing Executive. I build growth, automation and monitoring systems that turn marketing, data and AI into measurable business outcomes.",
  locale: "en",
  ogImage: "/og-image.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/emadmstfa",
    x: "https://x.com/emadmstfa",
    instagram: "https://instagram.com/emadmstfa",
    github: "https://github.com/emadmstfa",
  },
  contact: {
    emailPlaceholder: "hello@emadmstfa.com",
  },
} as const;

/**
 * محتوى الموقع صار من مصدرين فقط | Site content now lives in two places only:
 *  - src/lib/i18n.ts     → كل نصوص الواجهة (EN + AR) ومصفوفات الخبرات والإحصاءات
 *  - src/lib/clients.ts  → كل بيانات العملاء والمشاريع (EN + AR)
 *
 * لا تكرر المحتوى هنا. | Do not duplicate content here.
 */
export { clients, caseStudies } from "@/lib/clients";
export type { Client, CaseStudy, ClientMetric } from "@/lib/clients";
