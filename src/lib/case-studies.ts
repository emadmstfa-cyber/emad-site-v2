/**
 * ============================================================
 *  Featured Case Studies | دراسات الحالة المميزة
 * ============================================================
 *
 * ملف واحد لكل دراسات الحالة المميزة. | Single file for featured case studies.
 *
 * قواعد:
 *  1) الأرقام هنا موثّقة فقط — لا اختراع ولا تقدير.
 *  2) ar إلزامية لكل مشروع (الموقع ثنائي اللغة).
 *  3) gallery: استخدم "placeholder" إن لم تتوفر صورة حقيقية — لا صور وهمية.
 *  4) لإضافة مشروع مميز جديد: أضف كائنًا هنا، وأضف الـslug إلى `featuredSlugs`.
 * ============================================================
 */

export type Metric = { value: string; label: string };

export type GalleryItem = { kind: "placeholder" | "image"; label: string; src?: string };

export type CaseStudyCopy = {
  industry: string;
  period?: string;
  heroResult: string;
  summary: string;
  services: string[];
  challenge: string;
  strategy: string[];
  execution: string[];
  resultsLabel: string;
  results: Metric[];
  funnel?: string[];
  roleLabel: string;
  role: string[];
  platformsLabel: string;
  platforms: string[];
  galleryLabel: string;
  ctaTitle: string;
  ctaText: string;
  whatsapp: string;
};

export type CaseStudyDetail = {
  slug: string;
  client: string;
  project?: string;
  heroMetrics: Metric[];
  gallery: GalleryItem[];
  en: CaseStudyCopy;
  ar: CaseStudyCopy;
};

export const caseStudiesDetailed: CaseStudyDetail[] = [
  {
    slug: "saed-recruitment",
    client: "Saed Recruitment",
    heroMetrics: [
      { value: "+45%", label: "Sales growth" },
      { value: "2,407", label: "Conversations" },
      { value: "1.84M+", label: "Impressions" },
      { value: "SAR 22.76", label: "Avg. cost / conversation" },
    ],
    gallery: [
      { kind: "placeholder", label: "Campaign creative 1" },
      { kind: "placeholder", label: "Campaign creative 2" },
      { kind: "placeholder", label: "Ads manager performance" },
      { kind: "placeholder", label: "Messaging results" },
    ],
    en: {
      industry: "Recruitment · Services",
      heroResult: "+45% Sales Growth",
      summary: "Performance marketing activity contributed to a 45% increase in sales.",
      services: ["Performance Marketing", "Meta Ads", "Growth"],
      challenge:
        "Raise the quality of incoming requests and turn digital marketing from reach and engagement into a channel that contributes to real commercial growth.",
      strategy: [
        "Performance marketing",
        "Campaign restructuring",
        "Audience segmentation",
        "Message-focused acquisition",
        "Creative testing",
        "Continuous optimization",
        "Retargeting",
      ],
      execution: [
        "Meta Ads",
        "Instagram",
        "Messaging campaigns",
        "Lead and conversation acquisition",
        "Campaign optimization",
      ],
      resultsLabel: "Results",
      results: [
        { value: "2,407", label: "Messaging conversations started" },
        { value: "1.84M+", label: "Ad impressions" },
        { value: "13K+", label: "Link clicks" },
        { value: "SAR 22.76", label: "Avg. cost per messaging conversation" },
      ],
      funnel: ["Ads", "Clicks", "Messaging Conversations", "Sales Growth"],
      roleLabel: "My role",
      role: ["Growth Strategy", "Performance Marketing", "Campaign Direction", "Optimization", "Reporting"],
      platformsLabel: "Platforms & tools",
      platforms: ["Meta Ads", "Instagram", "Messaging"],
      galleryLabel: "Visual gallery",
      ctaTitle: "Let us scope a similar engagement",
      ctaText: "Tell me about your growth target and I will come back with a practical plan.",
      whatsapp:
        "Hello Emad, I reviewed the Saed Recruitment case study and would like to discuss a similar growth and performance marketing project.",
    },
    ar: {
      industry: "الاستقدام · الخدمات",
      heroResult: "+45% نمو في المبيعات",
      summary: "أسهم نشاط التسويق بالأداء في زيادة المبيعات بنسبة 45%.",
      services: ["التسويق بالأداء", "إعلانات Meta", "النمو"],
      challenge:
        "رفع جودة الطلبات، وتحويل التسويق الرقمي من مجرد وصول وتفاعل إلى قناة تساعد على تحقيق نمو تجاري فعلي.",
      strategy: [
        "التسويق بالأداء",
        "إعادة هيكلة الحملات",
        "تقسيم الجمهور",
        "اكتساب قائم على الرسالة",
        "اختبار المحتوى الإبداعي",
        "تحسين مستمر",
        "إعادة الاستهداف",
      ],
      execution: [
        "إعلانات Meta",
        "إنستغرام",
        "حملات المراسلة",
        "اكتساب العملاء المحتملين والمحادثات",
        "تحسين الحملات",
      ],
      resultsLabel: "النتائج",
      results: [
        { value: "2,407", label: "محادثة مراسلة بدأت" },
        { value: "1.84 مليون+", label: "ظهور إعلاني" },
        { value: "13 ألف+", label: "نقرة على الرابط" },
        { value: "22.76 ر.س", label: "متوسط تكلفة المحادثة" },
      ],
      funnel: ["الإعلانات", "النقرات", "المحادثات", "نمو المبيعات"],
      roleLabel: "دوري",
      role: ["استراتيجية النمو", "التسويق بالأداء", "إدارة الحملات", "التحسين", "التقارير"],
      platformsLabel: "المنصات والأدوات",
      platforms: ["إعلانات Meta", "إنستغرام", "المراسلة"],
      galleryLabel: "معرض بصري",
      ctaTitle: "لنحدد نطاق مشروع مشابه",
      ctaText: "أخبرني بهدف النمو لديك وسأعود إليك بخطة عملية.",
      whatsapp:
        "مرحبًا عماد، اطلعت على دراسة حالة ساعد للاستقدام وأرغب في مناقشة مشروع مشابه في النمو والتسويق بالأداء.",
    },
  },

  {
    slug: "dr-salwa-althaqafi",
    client: "Dr. Salwa Althaqafi",
    heroMetrics: [
      { value: "400", label: "Conversions" },
      { value: "1.34M+", label: "Impressions" },
      { value: "15,479", label: "Clicks" },
      { value: "SAR 22.72", label: "Cost / conversion" },
    ],
    gallery: [
      { kind: "placeholder", label: "Paid media performance" },
      { kind: "placeholder", label: "Campaign creative" },
      { kind: "placeholder", label: "Social media design" },
      { kind: "placeholder", label: "Dashboard view" },
    ],
    en: {
      industry: "Healthcare · Personal Brand · Medical Marketing",
      period: "26 July – 3 October 2026",
      heroResult: "400 Conversions",
      summary:
        "Paid media turned into a working acquisition channel for a specialised medical practice, at SAR 22.72 per conversion.",
      services: ["Paid Media", "TikTok Lead Generation", "Content Direction"],
      challenge:
        "Develop the digital presence and turn paid media into a real channel for attracting enquiries and potential clients for specialised medical services.",
      strategy: [
        "Content strategy",
        "Paid media",
        "TikTok lead generation",
        "Creative direction",
        "Audience testing",
        "Conversion optimization",
      ],
      execution: [
        "TikTok Ads",
        "Lead generation",
        "Content development",
        "Creative testing",
        "Campaign optimization",
      ],
      resultsLabel: "Results",
      results: [
        { value: "SAR 9,086.15", label: "Ad spend" },
        { value: "1,342,899", label: "Impressions" },
        { value: "15,479", label: "Clicks" },
        { value: "1.15%", label: "CTR" },
        { value: "SAR 0.59", label: "CPC" },
        { value: "SAR 6.77", label: "CPM" },
        { value: "400", label: "Conversions" },
        { value: "SAR 22.72", label: "Cost per conversion" },
      ],
      roleLabel: "My role",
      role: ["Digital Growth Strategy", "Performance Marketing", "Content Direction", "Campaign Optimization", "Reporting"],
      platformsLabel: "Platforms & tools",
      platforms: ["TikTok Ads", "Lead Generation"],
      galleryLabel: "Visual gallery",
      ctaTitle: "Healthcare growth, done properly",
      ctaText: "If you run a clinic or medical brand, we can scope a paid media and lead generation plan.",
      whatsapp:
        "Hello Emad, I reviewed the Dr. Salwa Althaqafi case study and would like to discuss digital growth and lead generation for a healthcare brand.",
    },
    ar: {
      industry: "الرعاية الصحية · علامة شخصية · التسويق الطبي",
      period: "26 يوليو – 3 أكتوبر 2026",
      heroResult: "400 تحويل",
      summary: "تحوّلت الإعلانات المدفوعة إلى قناة استقطاب فعلية لمنشأة طبية متخصصة، بتكلفة 22.72 ر.س لكل تحويل.",
      services: ["الإعلانات المدفوعة", "توليد العملاء عبر TikTok", "إدارة المحتوى"],
      challenge:
        "تطوير الحضور الرقمي وتحويل الإعلانات المدفوعة إلى قناة فعلية لاستقطاب الاستفسارات والعملاء المحتملين لخدمات طبية متخصصة.",
      strategy: [
        "استراتيجية المحتوى",
        "الإعلانات المدفوعة",
        "توليد العملاء عبر TikTok",
        "إدارة المحتوى الإبداعي",
        "اختبار الجماهير",
        "تحسين التحويل",
      ],
      execution: ["إعلانات TikTok", "توليد العملاء", "تطوير المحتوى", "اختبار المحتوى الإبداعي", "تحسين الحملات"],
      resultsLabel: "النتائج",
      results: [
        { value: "9,086.15 ر.س", label: "الإنفاق الإعلاني" },
        { value: "1,342,899", label: "الظهور" },
        { value: "15,479", label: "النقرات" },
        { value: "1.15%", label: "نسبة النقر" },
        { value: "0.59 ر.س", label: "تكلفة النقرة" },
        { value: "6.77 ر.س", label: "تكلفة الألف ظهور" },
        { value: "400", label: "التحويلات" },
        { value: "22.72 ر.س", label: "تكلفة التحويل" },
      ],
      roleLabel: "دوري",
      role: ["استراتيجية النمو الرقمي", "التسويق بالأداء", "إدارة المحتوى", "تحسين الحملات", "التقارير"],
      platformsLabel: "المنصات والأدوات",
      platforms: ["إعلانات TikTok", "توليد العملاء"],
      galleryLabel: "معرض بصري",
      ctaTitle: "نمو القطاع الصحي بشكل صحيح",
      ctaText: "إن كنت تدير عيادة أو علامة طبية، نستطيع تحديد خطة إعلانات مدفوعة وتوليد عملاء.",
      whatsapp:
        "مرحبًا عماد، اطلعت على دراسة حالة د. سلوى الثقفي وأرغب في مناقشة النمو الرقمي واستقطاب العملاء لعلامة أو منشأة صحية.",
    },
  },

  {
    slug: "wehej-real-estate",
    client: "Wehej Real Estate",
    project: "Durrat Al Janadriyah",
    heroMetrics: [
      { value: "10.38M+", label: "Total impressions" },
      { value: "1.46M+", label: "Content views" },
      { value: "22K+", label: "Clicks & visits" },
      { value: "90%+", label: "New audience" },
    ],
    gallery: [
      { kind: "placeholder", label: "TikTok campaign creative" },
      { kind: "placeholder", label: "X campaign creative" },
      { kind: "placeholder", label: "Snapchat campaign creative" },
      { kind: "placeholder", label: "Campaign report" },
    ],
    en: {
      industry: "Real Estate",
      heroResult: "10.38M+ Total Impressions",
      summary:
        "A multi-platform awareness campaign for Durrat Al Janadriyah around the Cityscape period, reaching a largely new audience.",
      services: ["Media Planning", "Multi-platform Campaigns", "Awareness"],
      challenge:
        "Build strong market awareness for the Durrat Al Janadriyah project during a concentrated campaign period around Cityscape.",
      strategy: [
        "Multi-platform paid media",
        "Real estate audience targeting",
        "Visual content amplification",
        "Platform-specific media distribution",
        "Awareness-focused campaign structure",
      ],
      execution: ["TikTok", "X", "Snapchat", "Instagram"],
      resultsLabel: "Results",
      results: [
        { value: "10.38M+", label: "Total impressions" },
        { value: "1.465M+", label: "Content views" },
        { value: "22K+", label: "Clicks and visits" },
        { value: "90%+", label: "New audience" },
      ],
      roleLabel: "My role",
      role: ["Digital Strategy", "Media Planning", "Campaign Direction", "Performance Monitoring", "Reporting"],
      platformsLabel: "Platform performance",
      platforms: [
        "TikTok — 5,025,841 impressions · 4,339 clicks",
        "X — 4,766,537 impressions · 11 campaigns",
        "Snapchat — 4,592,843 impressions · 7,011 clicks",
      ],
      galleryLabel: "Visual gallery",
      ctaTitle: "Real estate campaigns that build awareness",
      ctaText: "If you have a launch or an off-plan project, we can plan the media around it.",
      whatsapp:
        "Hello Emad, I reviewed the Wehej Real Estate case study and would like to discuss digital marketing and campaign growth for a real estate project.",
    },
    ar: {
      industry: "العقار",
      heroResult: "10.38 مليون+ ظهور إجمالي",
      summary: "حملة وعي متعددة المنصات لمشروع درة الجنادرية حول فترة سيتي سكيب، وصلت إلى جمهور جديد بنسبة كبيرة.",
      services: ["تخطيط إعلامي", "حملات متعددة المنصات", "بناء الوعي"],
      challenge:
        "بناء وعي قوي بالسوق لمشروع درة الجنادرية خلال فترة حملة مركّزة حول سيتي سكيب.",
      strategy: [
        "إعلانات مدفوعة متعددة المنصات",
        "استهداف الجمهور العقاري",
        "توسيع أثر المحتوى البصري",
        "توزيع إعلامي مخصص لكل منصة",
        "هيكلة حملة تركّز على الوعي",
      ],
      execution: ["TikTok", "X", "Snapchat", "إنستغرام"],
      resultsLabel: "النتائج",
      results: [
        { value: "10.38 مليون+", label: "إجمالي الظهور" },
        { value: "1.465 مليون+", label: "مشاهدات المحتوى" },
        { value: "22 ألف+", label: "النقرات والزيارات" },
        { value: "90%+", label: "جمهور جديد" },
      ],
      roleLabel: "دوري",
      role: ["الاستراتيجية الرقمية", "التخطيط الإعلامي", "إدارة الحملة", "متابعة الأداء", "التقارير"],
      platformsLabel: "أداء المنصات",
      platforms: [
        "TikTok — 5,025,841 ظهور · 4,339 نقرة",
        "X — 4,766,537 ظهور · 11 حملة",
        "Snapchat — 4,592,843 ظهور · 7,011 نقرة",
      ],
      galleryLabel: "معرض بصري",
      ctaTitle: "حملات عقارية تبني الوعي",
      ctaText: "إن كان لديك إطلاق أو مشروع على الخارطة، نستطيع تخطيط الإعلام حوله.",
      whatsapp:
        "مرحبًا عماد، اطلعت على دراسة حالة وهيج العقارية وأرغب في مناقشة التسويق الرقمي والحملات لمشروع عقاري.",
    },
  },
];

export const featuredSlugs: string[] = caseStudiesDetailed.map((c) => c.slug);

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return caseStudiesDetailed.find((c) => c.slug === slug);
}
