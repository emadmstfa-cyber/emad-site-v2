/**
 * ============================================================
 *  بيانات العملاء والمشاريع  |  Client & project data
 * ============================================================
 *
 * هذا هو الملف الوحيد الذي تُعدّله لإضافة عميل أو مشروع.
 * This is the ONLY file you edit to add a client or project.
 *
 * ------------------------------------------------------------
 *  قالب جاهز — انسخه والصقه داخل المصفوفة:
 * ------------------------------------------------------------
 *  {
 *    slug: "client-slug",                 // معرّف فريد، إنجليزي بدون مسافات
 *    client: "اسم العميل (إنجليزي)",
 *    category: "Sector · Type",
 *    challenge: "...",
 *    strategy: "...",
 *    execution: "...",
 *    outcome: "...",
 *    channels: ["Meta", "Google"],
 *    highlight: "+45% sales in 3 months", // شارة اختيارية
 *    metrics: [                           // حتى 4 مؤشرات — أرقام موثّقة فقط
 *      { value: "+45%", label: "Sales growth" },
 *    ],
 *    ar: {                                // النسخة العربية (نفس الحقول)
 *      client: "اسم العميل",
 *      category: "القطاع · النوع",
 *      challenge: "...",
 *      strategy: "...",
 *      execution: "...",
 *      outcome: "...",
 *      highlight: "+45% مبيعات في 3 أشهر",
 *      metrics: [
 *        { value: "+45%", label: "نمو المبيعات" },
 *      ],
 *    },
 *  },
 *
 *  قواعد مهمة:
 *  1) كل رقم هنا يجب أن يكون موثّقًا من تقرير أو ملف رسمي — لا تقديرات.
 *  2) metrics اختيارية: احذف الحقل كاملًا لعميل بلا أرقام.
 *  3) ar اختيارية: إن حذفتها سيظهر النص الإنجليزي في النسخة العربية.
 *  4) الترتيب في المصفوفة = ترتيب الظهور على الموقع.
 *  5) لا تنسَ الفاصلة (,) بعد كل كائن.
 * ============================================================
 */

export type ClientMetric = { value: string; label: string };

export type ClientAr = {
  client?: string;
  category?: string;
  challenge?: string;
  strategy?: string;
  execution?: string;
  outcome?: string;
  highlight?: string;
  channels?: string[];
  metrics?: ClientMetric[];
};

export type Client = {
  slug: string;
  client: string;
  category: string;
  challenge: string;
  strategy: string;
  execution: string;
  outcome: string;
  channels: string[];
  highlight?: string;
  metrics?: ClientMetric[];
  ar?: ClientAr;
};

export const clients: Client[] = [
  {
    slug: "consultants-eye-center",
    client: "Consultants Eye Center",
    category: "Healthcare · Performance Marketing",
    challenge: "Improve qualified bookings and marketing efficiency.",
    strategy: "Performance structure plus conversion optimization and audience refinement.",
    execution: "Paid media restructuring, funnel fixes, creative iteration and measurement hardening.",
    outcome: "Delivered measurable growth in bookings and profitability.",
    channels: ["Meta", "Google", "CRM"],
    highlight: "+35% bookings · +30% profits",
    metrics: [
      { value: "+35%", label: "Bookings" },
      { value: "+30%", label: "Profits" },
    ],
    ar: {
      client: "مركز Consultants Eye للعيون",
      category: "الرعاية الصحية · التسويق بالأداء",
      challenge: "تحسين الحجوزات المؤهلة وكفاءة التسويق.",
      strategy: "هيكلة الأداء مع تحسين التحويل وتنقيح الجمهور.",
      execution: "إعادة هيكلة الإعلانات المدفوعة، إصلاح مسار التحويل، تحسين المحتوى الإبداعي، وتقوية القياس.",
      outcome: "نمو قابل للقياس في الحجوزات والربحية.",
      highlight: "+35% حجوزات · +30% أرباح",
      metrics: [
        { value: "+35%", label: "الحجوزات" },
        { value: "+30%", label: "الأرباح" },
      ],
    },
  },
  {
    slug: "saed-recruitment",
    client: "Saed Recruitment",
    category: "Services · Growth",
    challenge: "Accelerate sales from digital channels within a tight window.",
    strategy: "Growth system focused on lead quality and close rate.",
    execution: "Campaign architecture, lead lifecycle and automation across CRM.",
    outcome: "Delivered within three months of launch.",
    channels: ["Meta", "Google", "CRM / Automation"],
    highlight: "+45% sales in 3 months",
    metrics: [
      { value: "+45%", label: "Sales growth" },
      { value: "3 mo", label: "Time to result" },
    ],
    ar: {
      client: "سعيد للتوظيف",
      category: "الخدمات · النمو",
      challenge: "تسريع المبيعات من القنوات الرقمية خلال مدة قصيرة.",
      strategy: "نظام نمو يركّز على جودة العملاء المحتملين ومعدّل الإغلاق.",
      execution: "هندسة الحملات ودورة حياة العميل والأتمتة عبر نظام إدارة العملاء.",
      outcome: "تحقّق خلال ثلاثة أشهر من الإطلاق.",
      highlight: "+45% مبيعات في 3 أشهر",
      metrics: [
        { value: "+45%", label: "نمو المبيعات" },
        { value: "3 أشهر", label: "زمن النتيجة" },
      ],
    },
  },
  {
    slug: "mep-expo",
    client: "MEP Expo — Middle East Poultry Expo",
    category: "Event · Visitor Acquisition",
    challenge: "Drive qualified visitor acquisition at scale.",
    strategy: "Performance acquisition layered with content and remarketing.",
    execution: "Multi-channel paid acquisition, creative system and conversion tracking.",
    outcome: "Multi-channel acquisition delivered against confirmed September 2026 campaign data.",
    channels: ["Meta", "X"],
    metrics: [
      { value: "SAR 78,286", label: "Ad investment" },
      { value: "44.1M", label: "Impressions" },
      { value: "497,221", label: "Link clicks" },
      { value: "SAR 175", label: "Cost / sign-up" },
    ],
    ar: {
      client: "معرض الشرق الأوسط للدواجن (MEP Expo)",
      category: "المعارض · جذب الزوار",
      challenge: "جذب زوار مؤهّلين على نطاق واسع.",
      strategy: "اكتساب بالأداء مدعوم بالمحتوى وإعادة الاستهداف.",
      execution: "حملات اكتساب متعددة القنوات ونظام محتوى إبداعي وتتبّع التحويلات.",
      outcome: "اكتساب متعدد القنوات وفق بيانات الحملات المؤكدة لسبتمبر 2026.",
      metrics: [
        { value: "78,286 ر.س", label: "الإنفاق الإعلاني" },
        { value: "44.1 مليون", label: "الظهور" },
        { value: "497,221", label: "نقرات الرابط" },
        { value: "175 ر.س", label: "تكلفة التسجيل" },
      ],
    },
  },
  {
    slug: "code-it",
    client: "Code It (CODE IT)",
    category: "B2B Technology · Lead Generation",
    challenge: "Generate qualified pipeline across POS and accounting solutions for three sectors.",
    strategy: "Multi-platform performance engine with CRM automation and lead-quality hardening.",
    execution: "Snapchat, Meta, Google and TikTok campaigns wired into MiniCRM and SAVOXX via 18 Zapier workflows.",
    outcome: "Confirmed September 2026 performance across four platforms.",
    channels: ["Snapchat", "Meta", "Google", "MiniCRM"],
    highlight: "285 leads · 155.91 SAR / lead",
    metrics: [
      { value: "44,435 SAR", label: "Spend" },
      { value: "4.28M", label: "Impressions" },
      { value: "11,664", label: "Clicks" },
      { value: "285", label: "Leads" },
    ],
    ar: {
      client: "كود إت (CODE IT)",
      category: "تقنية B2B · توليد العملاء",
      challenge: "توليد مسار عملاء مؤهّل لحلول نقاط البيع والمحاسبة في ثلاثة قطاعات.",
      strategy: "محرك أداء متعدد المنصات مع أتمتة إدارة العملاء وتقوية جودة الليدز.",
      execution: "حملات Snapchat وMeta وGoogle وTikTok مربوطة بـMiniCRM وSAVOXX عبر 18 مسار Zapier.",
      outcome: "أداء مؤكد لسبتمبر 2026 عبر أربع منصات.",
      highlight: "285 ليدًا · 155.91 ر.س/ليد",
      metrics: [
        { value: "44,435 ر.س", label: "الإنفاق" },
        { value: "4.28 مليون", label: "الظهور" },
        { value: "11,664", label: "النقرات" },
        { value: "285", label: "الليدز" },
      ],
    },
  },
  {
    slug: "marketpilot",
    client: "MarketPilot",
    category: "Product · AI Platform",
    challenge: "Turn monitoring, data and AI into decision-ready output.",
    strategy: "Platform and workflows for monitoring, analysis and early warning.",
    execution: "Monitoring, source analysis, AI-assisted analysis, reporting and decision support.",
    outcome: "Founder-built platform for AI-powered monitoring, analysis and decision support.",
    channels: ["Next.js", "Supabase", "OpenAI", "Automation"],
    ar: {
      client: "MarketPilot",
      category: "منتج · منصة ذكاء اصطناعي",
      challenge: "تحويل الرصد والبيانات والذكاء الاصطناعي إلى مخرجات جاهزة للقرار.",
      strategy: "منصة ومسارات عمل للرصد والتحليل والإنذار المبكر.",
      execution: "الرصد وتحليل المصادر والتحليل بمساعدة الذكاء الاصطناعي والتقارير ودعم القرار.",
      outcome: "منصة بناها المؤسِّس للرصد والتحليل ودعم القرار بالذكاء الاصطناعي.",
    },
  },
  {
    slug: "almabani-mostadam",
    client: "Almabani / Mostadam",
    category: "Real Estate · Communications",
    challenge: "Support communication objectives linked to Mostadam.",
    strategy: "Digital campaign plus targeted communication.",
    execution: "Campaign planning, creative and channel activation.",
    outcome: "Digital campaign and targeted communication delivered.",
    channels: ["Meta", "Google"],
    ar: {
      client: "المباني / مستدام",
      category: "العقار · الاتصال",
      challenge: "دعم أهداف الاتصال المرتبطة بمستدام.",
      strategy: "حملة رقمية مع تواصل موجّه.",
      execution: "تخطيط الحملة والمحتوى الإبداعي وتفعيل القنوات.",
      outcome: "تسليم حملة رقمية وتواصل موجّه.",
    },
  },
  {
    slug: "deem-real-estate",
    client: "Deem Real Estate",
    category: "Real Estate · Campaigns",
    challenge: "Strengthen demand and campaign performance.",
    strategy: "Performance marketing with funnel and creative optimization.",
    execution: "Paid media execution and measurement.",
    outcome: "Performance marketing framework delivered across paid channels.",
    channels: ["Meta", "Google", "Snapchat"],
    ar: {
      client: "ديم العقارية",
      category: "العقار · الحملات",
      challenge: "تقوية الطلب وأداء الحملات.",
      strategy: "تسويق بالأداء مع تحسين المسار والمحتوى الإبداعي.",
      execution: "تنفيذ الإعلانات المدفوعة والقياس.",
      outcome: "تسليم إطار تسويق بالأداء عبر القنوات المدفوعة.",
    },
  },
];

/** أسماء متوافقة مع الاستدعاءات القديمة | Backward-compatible aliases */
export type CaseStudy = Client;
export const caseStudies: CaseStudy[] = clients;
