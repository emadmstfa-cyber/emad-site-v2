import type { Client } from "@/lib/clients";

export type Lang = "en" | "ar";
export type Dir = "ltr" | "rtl";

export type ExperienceItem = { role: string; org: string; period: string; detail: string };
export type CertItem = { title: string; issuer: string };
export type StatItem = { value: number | null; suffix?: string; label: string; sublabel: string };
export type AreaItem = { id: string; title: string; items: string[] };

export type Dict = {
  lang: Lang;
  dir: Dir;
  nav: { expertise: string; work: string; marketpilot: string; stack: string; about: string; contact: string };
  switchLabel: string;
  switchHref: string;
  brandTagline: string;
  hero: {
    chip: string;
    subtitle: string;
    lead: string;
    focus: string;
    rotating: string[];
    work: string;
    talk: string;
    roleLabel: string;
    companyLabel: string;
    founderLabel: string;
    focusLabel: string;
    roleValue: string;
    companyValue: string;
    founderValue: string;
    focusValue: string;
  };
  stats: StatItem[];
  expertise: { eyebrow: string; title: string; lead: string; areas: AreaItem[] };
  work: { eyebrow: string; title: string; lead: string; challenge: string; approach: string; outcome: string; featuredEyebrow: string; featuredTitle: string; moreEyebrow: string; moreTitle: string; viewCase: string; projectLabel: string; };
  marketpilot: { chip: string; text: string; cta1: string; cta2: string; points: string[] };
  stack: { eyebrow: string; title: string; lead: string; groups: { title: string; items: string[] }[] };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    clientsLabel: string;
    experience: ExperienceItem[];
    certifications: CertItem[];
  };
  contact: { eyebrow: string; title: string; text: string; cta: string; top: string };
  footer: { rights: string; note: string };
  whatsapp: { floatLabel: string; cta: string; message: string };
  meta: { title: string; description: string; ogLocale: string; jobTitle: string };
};

export const dicts: Record<Lang, Dict> = {
  en: {
    lang: "en",
    dir: "ltr",
    nav: { expertise: "Expertise", work: "Work", marketpilot: "MarketPilot", stack: "Stack", about: "About", contact: "Contact" },
    switchLabel: "العربية",
    switchHref: "/ar",
    brandTagline: "Digital Growth · AI Automation",
    hero: {
      chip: "Digital Growth · AI Automation · MarTech",
      subtitle: "Growth, automation and decision systems.",
      lead: "I help organisations turn marketing, data and AI into growth, automation and decision systems that measurably move the business.",
      focus: "Focus",
      rotating: ["Digital Growth", "AI Automation", "MarTech & CRM", "Strategic Monitoring", "Early Warning", "Decision Support"],
      work: "View selected work",
      talk: "Start a conversation",
      roleLabel: "Current role",
      companyLabel: "Company",
      founderLabel: "Founder",
      focusLabel: "Focus",
      roleValue: "Managing Director — WE Marketing",
      companyValue: "WE Marketing",
      founderValue: "MarketPilot",
      focusValue: "Growth · AI · Data",
    },
    stats: [
      { value: 12, suffix: "+", label: "Years Experience", sublabel: "Digital, growth and technology" },
      { value: 80, suffix: "+", label: "Campaigns", sublabel: "Across paid media and growth" },
      { value: 10, suffix: "+", label: "Sectors", sublabel: "Diversified industry exposure" },
      { value: null, label: "Managing Director", sublabel: "WE Marketing" },
      { value: null, label: "Founder", sublabel: "MarketPilot" },
    ],
    expertise: {
      eyebrow: "Expertise",
      title: "Four disciplines, one operating system for growth.",
      lead: "Growth, automation, MarTech and decision systems designed to work together rather than as isolated tactics.",
      areas: [
        { id: "01", title: "Digital Growth", items: ["Growth Strategy", "Performance Marketing", "Paid Media", "Lead Generation", "Conversion Optimization", "Digital Customer Acquisition"] },
        { id: "02", title: "AI & Automation", items: ["AI-powered workflows", "Business automation", "AI agents", "Process automation", "Zapier / Make / n8n", "AI integration"] },
        { id: "03", title: "MarTech & CRM", items: ["CRM strategy", "Lead lifecycle", "HubSpot · Zoho", "Marketing automation", "Meta / Google integrations", "Conversion APIs · Data workflows"] },
        { id: "04", title: "Monitoring & Decision Systems", items: ["Monitoring & Analysis", "Early Warning Systems", "Investigative Monitoring", "Reporting", "Data-assisted decision support", "AI-assisted analysis"] },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Selected work with measurable business impact.",
      lead: "A selection of growth, performance and product engagements across healthcare, services, real estate, events and technology.",
      challenge: "Challenge",
      approach: "Approach",
      outcome: "Outcome",
      featuredEyebrow: "Featured case studies",
      featuredTitle: "Selected work with measurable business impact.",
      moreEyebrow: "More selected work",
      moreTitle: "Additional engagements across sectors.",
      viewCase: "View case study",
      projectLabel: "Project",
    },
    marketpilot: {
      chip: "Product · Founder",
      text: "An AI-powered platform that turns monitoring, source analysis and data into decision-ready output, built and led as founder.",
      cta1: "Discuss a pilot",
      cta2: "See the case study",
      points: ["Monitoring", "Media / Source Analysis", "Early Warning", "AI-assisted analysis", "Reports", "Decision Support"],
    },
    stack: {
      eyebrow: "Stack",
      title: "The tools behind the systems.",
      lead: "A working stack across AI, automation, CRM, paid media and product development.",
      groups: [
        { title: "AI", items: ["OpenAI", "Claude", "Gemini"] },
        { title: "Automation", items: ["Zapier", "Make", "n8n"] },
        { title: "CRM", items: ["HubSpot", "Zoho"] },
        { title: "Ads", items: ["Meta", "Google", "TikTok", "Snapchat"] },
        { title: "Build", items: ["GitHub", "Supabase", "Laravel", "Next.js"] },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Twelve years turning marketing, data and AI into systems.",
      lead: "From performance marketing to growth systems, automation, MarTech and decision support, building the operating layer behind measurable outcomes.",
      clientsLabel: "Selected clients",
      experience: [
        { role: "Managing Director", org: "WE Marketing", period: "Current", detail: "Leading growth, performance and digital transformation engagements across sectors in KSA and the region." },
        { role: "Founder", org: "MarketPilot", period: "Building", detail: "AI-powered monitoring, analysis, early warning and decision support platform." },
        { role: "Digital Marketing, Growth & Technology", org: "12+ years", period: "2013 — Present", detail: "From performance marketing to growth systems, automation, MarTech and decision support." },
      ],
      certifications: [
        { title: "Corporate Strategy", issuer: "University of London" },
        { title: "Marketing in the 21st Century", issuer: "The Open University" },
        { title: "Social Media Strategy for Small Businesses", issuer: "Alison" },
        { title: "Diploma in Social Media Marketing", issuer: "Alison" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Building a growth, automation or monitoring system? Let us scope it.",
      text: "Open to consulting and partnership conversations across growth, marketing automation, CRM and decision-support systems.",
      cta: "Connect on LinkedIn",
      top: "Back to top",
    },
    footer: { rights: "All rights reserved.", note: "Website V2 preview" },
    whatsapp: {
      floatLabel: "Chat on WhatsApp",
      cta: "Chat on WhatsApp",
      message: "Hello Emad, I visited emadmstfa.com and would like to discuss a potential project.",
    },
    meta: {
      title: "Emad Moustafa — Digital Growth × AI Automation × MarTech",
      description: "Digital Growth Consultant × AI Automation Specialist × Technology Founder × Marketing Executive. I build growth, automation and monitoring systems that turn marketing, data and AI into measurable business outcomes.",
      ogLocale: "en_US",
      jobTitle: "Digital Growth Consultant · AI Automation Specialist · Technology Founder",
    },
  },

  ar: {
    lang: "ar",
    dir: "rtl",
    nav: { expertise: "الخبرات", work: "الأعمال", marketpilot: "ماركت بايلوت", stack: "الأدوات", about: "نبذة", contact: "تواصل" },
    switchLabel: "English",
    switchHref: "/",
    brandTagline: "النمو الرقمي · أتمتة الذكاء الاصطناعي",
    hero: {
      chip: "النمو الرقمي · أتمتة الذكاء الاصطناعي · تقنيات التسويق",
      subtitle: "أنظمة النمو والأتمتة ودعم القرار.",
      lead: "أساعد المؤسسات على تحويل التسويق والبيانات والذكاء الاصطناعي إلى أنظمة نمو وأتمتة ودعم قرار تصنع فرقًا قابلًا للقياس.",
      focus: "التخصص",
      rotating: ["النمو الرقمي", "الأتمتة بالذكاء الاصطناعي", "تقنيات التسويق وCRM", "الرصد الاستراتيجي", "الإنذار المبكر", "دعم القرار"],
      work: "استعرض أعمالًا مختارة",
      talk: "ابدأ حوارًا",
      roleLabel: "المسمّى الحالي",
      companyLabel: "الشركة",
      founderLabel: "المؤسِّس",
      focusLabel: "التخصص",
      roleValue: "المدير العام — وي ماركتينج",
      companyValue: "وي ماركتينج",
      founderValue: "MarketPilot",
      focusValue: "النمو · الذكاء الاصطناعي · البيانات",
    },
    stats: [
      { value: 12, suffix: "+", label: "سنة خبرة", sublabel: "رقمي ونمو وتقنية" },
      { value: 80, suffix: "+", label: "حملة", sublabel: "عبر الإعلانات المدفوعة والنمو" },
      { value: 10, suffix: "+", label: "قطاعًا", sublabel: "تنوّع في القطاعات" },
      { value: null, label: "المدير العام", sublabel: "وي ماركتينج" },
      { value: null, label: "المؤسِّس", sublabel: "MarketPilot" },
    ],
    expertise: {
      eyebrow: "الخبرات",
      title: "أربعة تخصصات، ونظام تشغيل واحد للنمو.",
      lead: "النمو والأتمتة وتقنيات التسويق وأنظمة القرار — مصمَّمة لتعمل معًا لا كتكتيكات منعزلة.",
      areas: [
        { id: "01", title: "النمو الرقمي", items: ["استراتيجية النمو", "التسويق بالأداء", "الإعلانات المدفوعة", "توليد العملاء المحتملين", "تحسين التحويل", "اكتساب العملاء رقميًا"] },
        { id: "02", title: "الذكاء الاصطناعي والأتمتة", items: ["سير عمل مدعوم بالذكاء الاصطناعي", "أتمتة الأعمال", "وكلاء الذكاء الاصطناعي", "أتمتة العمليات", "Zapier / Make / n8n", "دمج الذكاء الاصطناعي"] },
        { id: "03", title: "تقنيات التسويق وCRM", items: ["استراتيجية إدارة العملاء", "دورة حياة العميل المحتمل", "HubSpot · Zoho", "أتمتة التسويق", "تكاملات Meta و Google", "Conversion APIs · مسارات البيانات"] },
        { id: "04", title: "الرصد وأنظمة القرار", items: ["الرصد والتحليل", "أنظمة الإنذار المبكر", "الرصد الاستقصائي", "التقارير", "دعم القرار المدعوم بالبيانات", "التحليل بمساعدة الذكاء الاصطناعي"] },
      ],
    },
    work: {
      eyebrow: "أعمال مختارة",
      title: "أعمال مختارة بأثر ملموس على الأعمال.",
      lead: "مختارات من مشاريع النمو والأداء والمنتجات في الصحة والخدمات والعقار والمعارض والتقنية.",
      challenge: "التحدي",
      approach: "الاستراتيجية",
      outcome: "النتيجة",
      featuredEyebrow: "دراسات حالة مميزة",
      featuredTitle: "أعمال مختارة بأثر ملموس على الأعمال.",
      moreEyebrow: "المزيد من الأعمال",
      moreTitle: "مشاريع إضافية في قطاعات متنوعة.",
      viewCase: "اطّلع على دراسة الحالة",
      projectLabel: "المشروع",
    },
    marketpilot: {
      chip: "منتج · المؤسِّس",
      text: "منصة مدعومة بالذكاء الاصطناعي تحوّل الرصد وتحليل المصادر والبيانات إلى مخرجات جاهزة لاتخاذ القرار — بُنيت وتُدار بصفتي المؤسِّس.",
      cta1: "ناقش تجربة",
      cta2: "اطّلع على الحالة",
      points: ["الرصد", "تحليل المصادر والإعلام", "الإنذار المبكر", "التحليل بمساعدة الذكاء الاصطناعي", "التقارير", "دعم القرار"],
    },
    stack: {
      eyebrow: "الأدوات",
      title: "الأدوات التي تقف خلف الأنظمة.",
      lead: "مجموعة عملية تشمل الذكاء الاصطناعي والأتمتة وإدارة العملاء والإعلانات وبناء المنتجات.",
      groups: [
        { title: "الذكاء الاصطناعي", items: ["OpenAI", "Claude", "Gemini"] },
        { title: "الأتمتة", items: ["Zapier", "Make", "n8n"] },
        { title: "إدارة العملاء", items: ["HubSpot", "Zoho"] },
        { title: "الإعلانات", items: ["Meta", "Google", "TikTok", "Snapchat"] },
        { title: "البناء والتطوير", items: ["GitHub", "Supabase", "Laravel", "Next.js"] },
      ],
    },
    about: {
      eyebrow: "نبذة",
      title: "اثنا عشر عامًا في تحويل التسويق والبيانات والذكاء الاصطناعي إلى أنظمة.",
      lead: "من التسويق بالأداء إلى أنظمة النمو والأتمتة وتقنيات التسويق وأنظمة دعم القرار — أبني الطبقة التشغيلية خلف النتائج القابلة للقياس.",
      clientsLabel: "عملاء مختارون",
      experience: [
        { role: "المدير العام", org: "وي ماركتينج", period: "حاليًا", detail: "قيادة مشاريع النمو والأداء والتحول الرقمي عبر قطاعات متعددة في السعودية والمنطقة." },
        { role: "المؤسِّس", org: "MarketPilot", period: "قيد البناء", detail: "منصة مدعومة بالذكاء الاصطناعي للرصد والتحليل والإنذار المبكر ودعم القرار." },
        { role: "التسويق الرقمي والنمو والتقنية", org: "أكثر من 12 عامًا", period: "2013 — الآن", detail: "من التسويق بالأداء إلى أنظمة النمو والأتمتة وتقنيات التسويق ودعم القرار." },
      ],
      certifications: [
        { title: "الاستراتيجية المؤسسية", issuer: "University of London" },
        { title: "التسويق في القرن الحادي والعشرين", issuer: "The Open University" },
        { title: "استراتيجية التواصل للشركات الصغيرة", issuer: "Alison" },
        { title: "دبلوم التسويق عبر وسائل التواصل", issuer: "Alison" },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "تبني نظام نمو أو أتمتة أو رصد؟ لنتفق على نطاقه.",
      text: "متاح للنقاشات الاستشارية والشراكات في النمو وأتمتة التسويق وإدارة العملاء وأنظمة دعم القرار.",
      cta: "تواصل عبر LinkedIn",
      top: "إلى الأعلى",
    },
    footer: { rights: "جميع الحقوق محفوظة.", note: "النسخة الثانية — معاينة" },
    whatsapp: {
      floatLabel: "تواصل عبر واتساب",
      cta: "تواصل عبر واتساب",
      message: "مرحبًا عماد، زرت موقع emadmstfa.com وأرغب في مناقشة مشروع محتمل معك.",
    },
    meta: {
      title: "عماد مصطفى — النمو الرقمي × أتمتة الذكاء الاصطناعي × تقنيات التسويق",
      description: "مستشار نمو رقمي × متخصص أتمتة بالذكاء الاصطناعي × مؤسِّس تقني × تنفيذي تسويقي. أبني أنظمة النمو والأتمتة والرصد التي تحوّل التسويق والبيانات والذكاء الاصطناعي إلى نتائج أعمال قابلة للقياس.",
      ogLocale: "ar_AR",
      jobTitle: "المدير العام — وي ماركتينج · مؤسِّس MarketPilot",
    },
  },
};

export function getDict(lang: Lang): Dict {
  return dicts[lang];
}

export function pickClients(clients: Client[], lang: Lang): Client[] {
  return clients.map((c) => {
    if (lang === "en") return c;
    const ar = c.ar;
    if (!ar) return c;
    return {
      ...c,
      client: ar.client ?? c.client,
      category: ar.category ?? c.category,
      challenge: ar.challenge ?? c.challenge,
      strategy: ar.strategy ?? c.strategy,
      execution: ar.execution ?? c.execution,
      outcome: ar.outcome ?? c.outcome,
      highlight: ar.highlight ?? c.highlight,
      channels: ar.channels ?? c.channels,
      metrics: ar.metrics ?? c.metrics,
    };
  });
}
