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
 *  Copy-paste template (add inside the array):
 * ------------------------------------------------------------
 *  {
 *    slug: "client-slug",                 // معرّف فريد، إنجليزي بدون مسافات
 *    client: "اسم العميل",                 // الاسم الظاهر على الموقع
 *    category: "القطاع · نوع العمل",        // مثال: "Healthcare · Performance Marketing"
 *    challenge: "التحدي بكلمة أو سطر",
 *    strategy: "الاستراتيجية",
 *    execution: "ما نُفّذ فعليًا",
 *    outcome: "النتيجة النهائية",
 *    channels: ["Meta", "Google"],        // القنوات المستخدمة
 *    highlight: "+45% sales in 3 months", // شارة اختيارية — احذف السطر إن لم توجد
 *    metrics: [                           // حتى 4 مؤشرات — الأرقام الفعلية فقط
 *      { value: "+45%", label: "Sales growth" },
 *      { value: "3 mo", label: "Time to result" },
 *    ],
 *  },
 *
 *  قواعد مهمة:
 *  1) كل رقم هنا يجب أن يكون موثّقًا من تقرير أو ملف رسمي — لا تقديرات.
 *  2) metrics اختيارية: احذف الحقل كاملًا لعميل بلا أرقام.
 *  3) الترتيب في المصفوفة = ترتيب الظهور على الموقع.
 *  4) لا تنسَ الفاصلة (,) بعد كل كائن.
 * ============================================================
 */

export type ClientMetric = { value: string; label: string };

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
  metrics?: { value: string; label: string }[];
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
  },
];


/** أسماء متوافقة مع الاستدعاءات القديمة | Backward-compatible aliases */
export type CaseStudy = Client;
export const caseStudies: CaseStudy[] = clients;
