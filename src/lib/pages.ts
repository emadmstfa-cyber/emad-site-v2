/**
 * ============================================================
 *  Content pages | صفحات المحتوى
 * ============================================================
 * About · How I Work · Agency · Insights (articles)
 *
 * قواعد:
 *  1) لا أرقام غير موثّقة. أرقام دراسات الحالة من case-studies.ts / clients.ts / تقارير العملاء فقط.
 *  2) كل صفحة بنسختين EN + AR.
 *  3) لإضافة مقال: أضف كائنًا إلى articles (slug فريد) — يظهر تلقائيًا في /insights و/ar/insights والـ sitemap.
 * ============================================================
 */

export type Block = {
  h?: string;
  p?: string[];
  ul?: string[];
  ol?: string[];
  callout?: string;
};

export type Faq = { q: string; a: string };

export type PageCopy = {
  title: string;
  description: string;
  eyebrow: string;
  answer: string;
  blocks: Block[];
  faq?: Faq[];
};

export const AGENCY_URL = "https://www.wemarketing.media";

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

export const aboutPage: Record<"en" | "ar", PageCopy> = {
  en: {
    eyebrow: "About",
    title: "About Emad Moustafa — growth, automation and MarTech systems",
    description:
      "Emad Moustafa is Managing Director of WE Marketing and founder of MarketPilot. He designs growth, automation and MarTech systems for companies in Saudi Arabia and the UAE.",
    answer:
      "Emad Moustafa is Managing Director of WE Marketing and founder of MarketPilot. He designs growth, automation and MarTech systems that connect advertising to measurable business results for companies in Saudi Arabia and the UAE.",
    blocks: [
      {
        h: "What I do",
        p: [
          "I have worked in digital marketing, growth and technology for more than 12 years. Today I lead WE Marketing (Dubai · Riyadh · Damascus) and build MarketPilot, an AI-powered platform for monitoring, analysis and early warning.",
        ],
        ul: [
          "Growth systems: measurement, ad-platform integrations (Meta, Google, TikTok, Snapchat) and CRM connections, so every lead has a known source.",
          "Automation: lead routing, follow-up and reporting workflows built with Zapier, Make and n8n.",
          "Decision support: dashboards and AI-assisted analysis that show a decision-maker what to do next.",
        ],
      },
      {
        h: "What I do not do",
        p: [
          "I do not promise sales figures before I have seen the data, and I do not measure success by clicks or impressions alone. A click, an enquiry, a qualified lead and a customer are four different numbers, and I report them separately.",
        ],
      },
      {
        h: "Where I work",
        p: [
          "Saudi Arabia and the UAE, in Arabic and English. Sectors include healthcare, real estate, B2B technology, events and recruitment.",
        ],
      },
      {
        h: "How this relates to WE Marketing",
        p: [
          "WE Marketing runs campaigns and advertising for clients. I design the growth, automation and MarTech system those campaigns operate inside: tracking, CRM, follow-up and reporting. The two work together; they are not the same service.",
        ],
      },
      {
        h: "Selected results, with their limits",
        ul: [
          "Saed Recruitment: +45% sales within three months of launch; 2,407 messaging conversations at an average SAR 22.76 each.",
          "Dr. Salwa Althaqafi (TikTok lead generation, 26 July – 3 October 2026): 400 conversions at SAR 22.72 each.",
          "Code It (September 2026): 285 leads across four platforms at SAR 155.91 per lead, including an awareness campaign run by management decision.",
        ],
        callout:
          "Figures come from platform and client reports for the stated period. A conversion or a lead is not a sale, and results differ by sector, budget and season. Each case study states its definitions.",
      },
    ],
    faq: [
      {
        q: "Who is Emad Moustafa?",
        a: "Managing Director of WE Marketing and founder of MarketPilot, working on growth, automation and MarTech systems in Saudi Arabia and the UAE.",
      },
      {
        q: "What is the difference between Emad Moustafa and WE Marketing?",
        a: "WE Marketing executes campaigns and advertising. Emad designs the growth, automation and MarTech systems that make campaign results measurable.",
      },
    ],
  },
  ar: {
    eyebrow: "نبذة",
    title: "نبذة عن عماد مصطفى — أنظمة النمو والأتمتة وMarTech",
    description:
      "عماد مصطفى هو المدير العام لـ WE Marketing ومؤسس MarketPilot. يصمم أنظمة النمو والأتمتة وتقنيات التسويق للشركات في السعودية والإمارات.",
    answer:
      "عماد مصطفى هو المدير العام لـ WE Marketing ومؤسس MarketPilot. يصمم أنظمة النمو والأتمتة وتقنيات التسويق التي تربط الإعلانات بنتائج أعمال قابلة للقياس للشركات في السعودية والإمارات.",
    blocks: [
      {
        h: "ماذا أفعل",
        p: [
          "أعمل في التسويق الرقمي والنمو والتقنية منذ أكثر من 12 عامًا. أقود اليوم WE Marketing (دبي • الرياض • دمشق) وأبني MarketPilot، منصة مدعومة بالذكاء الاصطناعي للرصد والتحليل والإنذار المبكر.",
        ],
        ul: [
          "أنظمة النمو: القياس وربط منصات الإعلان (Meta وGoogle وTikTok وSnapchat) بالـ CRM، ليكون لكل عميل محتمل مصدر معروف.",
          "الأتمتة: مسارات توجيه العملاء المحتملين والمتابعة والتقارير عبر Zapier وMake وn8n.",
          "دعم القرار: لوحات وتحليل بمساعدة الذكاء الاصطناعي يوضح لصاحب القرار ما يفعله بعد ذلك.",
        ],
      },
      {
        h: "ما لا أفعله",
        p: [
          "لا أعد بأرقام مبيعات قبل أن أرى البيانات، ولا أقيس النجاح بالنقرات أو الظهور وحدهما. النقرة والاستفسار والعميل المحتمل المؤهل والعميل الفعلي أربعة أرقام مختلفة، وأعرضها منفصلة.",
        ],
      },
      {
        h: "أين أعمل",
        p: [
          "السعودية والإمارات، بالعربية والإنجليزية. من القطاعات التي عملت فيها: الرعاية الصحية والعقار وتقنية B2B والفعاليات والتوظيف.",
        ],
      },
      {
        h: "العلاقة مع WE Marketing",
        p: [
          "تنفّذ WE Marketing الحملات والإعلانات للعملاء. أما أنا فأصمم نظام النمو والأتمتة وMarTech الذي تعمل داخله هذه الحملات: التتبع والـ CRM والمتابعة والتقارير. الجهتان تعملان معًا، لكنهما ليستا الخدمة نفسها.",
        ],
      },
      {
        h: "نتائج مختارة مع حدودها",
        ul: [
          "ساعد للاستقدام: +45% في المبيعات خلال ثلاثة أشهر من الإطلاق؛ 2,407 محادثة بمتوسط 22.76 ر.س للمحادثة.",
          "د. سلوى الثقفي (توليد عملاء عبر TikTok، 26 يوليو – 3 أكتوبر 2026): 400 تحويل بتكلفة 22.72 ر.س للتحويل.",
          "كود إت (سبتمبر 2026): 285 ليدًا عبر أربع منصات بتكلفة 155.91 ر.س لكل ليد، وتشمل حملة وعي بقرار من الإدارة.",
        ],
        callout:
          "الأرقام من تقارير المنصات والعملاء للفترة المذكورة. التحويل أو الليد ليس بيعًا، والنتائج تختلف حسب القطاع والميزانية والموسم. كل دراسة حالة توضح تعريفاتها.",
      },
    ],
    faq: [
      {
        q: "من هو عماد مصطفى؟",
        a: "المدير العام لـ WE Marketing ومؤسس MarketPilot، ويعمل على أنظمة النمو والأتمتة وMarTech في السعودية والإمارات.",
      },
      {
        q: "ما الفرق بين عماد مصطفى وWE Marketing؟",
        a: "تنفّذ WE Marketing الحملات والإعلانات، بينما يصمم عماد أنظمة النمو والأتمتة وMarTech التي تجعل نتائج الحملات قابلة للقياس.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  HOW I WORK                                                         */
/* ------------------------------------------------------------------ */

export type HowStep = { title: string; text: string };
export type HowCopy = PageCopy & {
  compareTitle: string;
  compareHeads: [string, string, string];
  compareRows: [string, string, string][];
  stepsTitle: string;
  steps: HowStep[];
  limitsTitle: string;
  limits: string;
};

export const howIWorkPage: Record<"en" | "ar", HowCopy> = {
  en: {
    eyebrow: "How I work",
    title: "How I work — growth systems, not ad management",
    description:
      "How Emad Moustafa builds growth systems: measurable goals, measurement first, testing, separating clicks from enquiries from customers, and automation.",
    answer:
      "I build growth systems rather than manage ads. The ad platform is one component; the system is the connection between an ad, an enquiry, a qualified lead and a customer, measured and automated end to end.",
    blocks: [],
    compareTitle: "A traditional ad agency versus a growth system",
    compareHeads: ["", "Traditional ad agency", "My approach"],
    compareRows: [
      ["Unit of work", "A campaign", "The whole path from ad to customer"],
      ["Success metric", "Clicks, impressions, cost per lead", "Qualified leads, meetings, customers"],
      ["Measurement", "Added later, if at all", "Set up first, before spend"],
      ["Data", "Monthly platform reports", "Connected CRM and decision dashboard"],
      ["Follow-up", "Manual", "Automated routing and reminders, with a human closing"],
    ],
    stepsTitle: "Five steps",
    steps: [
      { title: "Define a measurable goal", text: "What counts as a qualified customer, what is one worth, and what cost is acceptable?" },
      { title: "Set up measurement first", text: "Pixels, Conversion APIs, UTM parameters and the CRM connection are tested before the first riyal is spent." },
      { title: "Test small, decide by rule", text: "Start with a test budget and write down in advance when to stop, when to change and when to scale." },
      { title: "Separate the stages", text: "Click, enquiry, qualified lead and customer are reported as four separate numbers and never merged into one." },
      { title: "Automate and improve", text: "Routing, scoring, alerts and reporting are automated with Zapier, Make or n8n, so the team spends time on conversations that matter." },
    ],
    limitsTitle: "What I do not promise",
    limits:
      "I do not guarantee sales figures. I can commit that each riyal spent is traceable to a result, and that decisions are taken from data. Sales also depend on the offer, the price and the sales team.",
    faq: [
      {
        q: "What is a growth system?",
        a: "A measured connection between advertising, enquiries, qualified leads and customers, with tracking, CRM and automation around the ad platforms.",
      },
      {
        q: "How is this different from hiring an ad agency?",
        a: "An ad agency usually optimises campaigns inside a platform. A growth system also covers measurement, CRM, follow-up automation and reporting. WE Marketing executes the campaigns; this page describes the system they operate inside.",
      },
    ],
  },
  ar: {
    eyebrow: "منهجيتي",
    title: "منهجيتي — أنظمة نمو وليس إدارة إعلانات",
    description:
      "كيف يبني عماد مصطفى أنظمة النمو: هدف قابل للقياس، قياس أولاً، اختبار، فصل النقرات عن الاستفسارات عن العملاء، وأتمتة.",
    answer:
      "أبني أنظمة نمو ولا أكتفي بإدارة الإعلانات. منصة الإعلان مكوّن واحد، أما النظام فهو الربط بين الإعلان والاستفسار والعميل المحتمل المؤهل والعميل الفعلي، مقاسًا ومؤتمتًا من البداية إلى النهاية.",
    blocks: [],
    compareTitle: "وكالة إعلانات تقليدية مقابل نظام نمو",
    compareHeads: ["", "وكالة إعلانات تقليدية", "أسلوبي"],
    compareRows: [
      ["وحدة العمل", "حملة", "المسار كاملًا من الإعلان إلى العميل"],
      ["مقياس النجاح", "نقرات وظهور وتكلفة الليد", "ليدز مؤهلة واجتماعات وعملاء"],
      ["القياس", "يُضاف لاحقًا إن أُضيف", "يُجهَّز أولًا قبل الصرف"],
      ["البيانات", "تقارير شهرية من المنصة", "CRM مربوط ولوحة قرار"],
      ["المتابعة", "يدوية", "توجيه وتذكير آليان، وإنسان يغلق الصفقة"],
    ],
    stepsTitle: "خمس خطوات",
    steps: [
      { title: "تحديد هدف قابل للقياس", text: "ما العميل المؤهل؟ وكم قيمته؟ وما التكلفة المقبولة؟" },
      { title: "تجهيز القياس أولًا", text: "نختبر Pixel وConversion API وUTM وربط الـ CRM قبل صرف أول ريال." },
      { title: "اختبار صغير وقرار بقاعدة", text: "نبدأ بميزانية اختبار، ونكتب مسبقًا متى نوقف ومتى نعدّل ومتى نوسّع." },
      { title: "فصل المراحل", text: "النقرة والاستفسار والليد المؤهل والعميل تُعرض كأربعة أرقام منفصلة ولا تُدمج في رقم واحد." },
      { title: "أتمتة وتحسين", text: "التوجيه والتقييم والتنبيهات والتقارير تُؤتمت عبر Zapier أو Make أو n8n، ليقضي الفريق وقته في المحادثات المهمة." },
    ],
    limitsTitle: "ما لا أعد به",
    limits:
      "لا أضمن أرقام مبيعات. أستطيع الالتزام بأن كل ريال مصروف يمكن تتبعه إلى نتيجة، وأن القرارات تُتخذ بالبيانات. فالمبيعات تعتمد أيضًا على العرض والسعر وفريق المبيعات.",
    faq: [
      {
        q: "ما هو نظام النمو؟",
        a: "ربط مقاس بين الإعلانات والاستفسارات والعملاء المحتملين المؤهلين والعملاء، مع تتبع وCRM وأتمتة حول منصات الإعلان.",
      },
      {
        q: "ما الفرق بينه وبين التعاقد مع وكالة إعلانات؟",
        a: "وكالة الإعلانات تحسّن الحملات غالبًا داخل المنصة، أما نظام النمو فيشمل القياس والـ CRM وأتمتة المتابعة والتقارير. تنفّذ WE Marketing الحملات، وتصف هذه الصفحة النظام الذي تعمل داخله.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  AGENCY                                                             */
/* ------------------------------------------------------------------ */

export type AgencyCopy = PageCopy & { cta: string; tableHeads: [string, string]; tableRows: [string, string][] };

export const agencyPage: Record<"en" | "ar", AgencyCopy> = {
  en: {
    eyebrow: "WE Marketing",
    title: "WE Marketing — the agency behind the campaigns",
    description:
      "WE Marketing is the performance marketing agency led by Emad Moustafa, working from Dubai, Riyadh and Damascus for companies in Saudi Arabia and the UAE.",
    answer:
      "WE Marketing runs campaigns and advertising for companies in Saudi Arabia and the UAE, from Dubai, Riyadh and Damascus. Emad Moustafa is Managing Director and designs the growth, automation and MarTech systems those campaigns operate inside.",
    blocks: [
      {
        h: "Who does what",
        p: [
          "The agency plans, launches and optimises paid campaigns on Meta, Google, TikTok and Snapchat. The system around them (tracking, CRM, follow-up automation and reporting) is designed by Emad and built with the client's team.",
        ],
      },
      {
        h: "When to contact which",
        ul: [
          "You need campaigns launched and managed: start with WE Marketing.",
          "You are spending already but cannot tell which spend produces customers: start with the growth system, then the campaigns.",
        ],
      },
    ],
    tableHeads: ["WE Marketing", "Emad Moustafa"],
    tableRows: [
      ["Campaign planning and execution", "Growth strategy and system design"],
      ["Media buying and creative testing", "Measurement, CRM and automation architecture"],
      ["Campaign reporting", "Decision dashboards and monitoring"],
    ],
    cta: "Visit WE Marketing",
  },
  ar: {
    eyebrow: "WE Marketing",
    title: "WE Marketing — الوكالة التي تنفّذ الحملات",
    description:
      "WE Marketing وكالة تسويق بالأداء يقودها عماد مصطفى، وتعمل من دبي والرياض ودمشق لخدمة الشركات في السعودية والإمارات.",
    answer:
      "تنفّذ WE Marketing الحملات والإعلانات للشركات في السعودية والإمارات من دبي والرياض ودمشق. عماد مصطفى هو المدير العام، ويصمم أنظمة النمو والأتمتة وMarTech التي تعمل داخلها هذه الحملات.",
    blocks: [
      {
        h: "من يفعل ماذا",
        p: [
          "تخطط الوكالة الحملات المدفوعة وتطلقها وتحسّنها على Meta وGoogle وTikTok وSnapchat. أما النظام المحيط بها (التتبع والـ CRM وأتمتة المتابعة والتقارير) فيصممه عماد ويبنيه مع فريق العميل.",
        ],
      },
      {
        h: "متى تتواصل مع من",
        ul: [
          "تحتاج حملات تُطلق وتُدار: ابدأ مع WE Marketing.",
          "تنفق فعلًا ولا تعرف أي إنفاق يجلب عملاء: ابدأ بنظام النمو ثم الحملات.",
        ],
      },
    ],
    tableHeads: ["WE Marketing", "عماد مصطفى"],
    tableRows: [
      ["تخطيط الحملات وتنفيذها", "استراتيجية النمو وتصميم النظام"],
      ["شراء الإعلام واختبار المحتوى", "هندسة القياس والـ CRM والأتمتة"],
      ["تقارير الحملات", "لوحات القرار والمراقبة"],
    ],
    cta: "زيارة WE Marketing",
  },
};

/* ------------------------------------------------------------------ */
/*  INSIGHTS                                                           */
/* ------------------------------------------------------------------ */

export type Article = {
  slug: string;
  date: string; // ISO
  en: PageCopy;
  ar: PageCopy;
};

export const articles: Article[] = [
  {
    slug: "growth-system-ads-ai-saudi",
    date: "2026-11-07",
    en: {
      eyebrow: "Insights",
      title: "How to build a lead-generation system that combines ads and AI in the Saudi market",
      description:
        "A lead-generation system is a chain, not a campaign: channel, capture, qualification, follow-up and measurement. Where AI helps and where it does not.",
      answer:
        "An effective lead-generation system is not one good campaign. It is a connected chain: a channel, a capture point, qualification, follow-up and measurement. AI does not replace the strategy; it shortens the loops inside it.",
      blocks: [
        {
          h: "The five links of the chain",
          ol: [
            "Channel: start where the buyer actually looks. Search for high intent, short video for discovery, WhatsApp for conversation.",
            "Capture: a short form or a single WhatsApp number, with UTM parameters. Every enquiry must carry its source.",
            "Qualification: AI can classify incoming messages (serious, general question, not a fit) in seconds, but you set the criteria.",
            "Follow-up: automate the first reply and the reminders, and hand the qualified lead to a person.",
            "Measurement: connect the final outcome (meeting, quote, contract) back to the ad it came from.",
          ],
        },
        {
          h: "A common mistake",
          p: ["Automating follow-up before defining what a qualified lead is. The result is faster handling of weak leads."],
        },
        {
          h: "Separate conversations from sales",
          p: [
            "In the Saed Recruitment case, messaging campaigns produced 2,407 conversations at an average SAR 22.76 each, and sales rose 45% within three months of launch. The conversation count is a leading indicator; the sales figure is the business result. They are reported separately, and the campaign contributed to the second without being the only cause.",
          ],
        },
        {
          h: "Where to start",
          p: ["Ask one question first: can you name which campaign produced your last three customers? If not, the priority is measurement, not more advertising."],
        },
      ],
      faq: [
        {
          q: "Does AI replace the marketing strategy?",
          a: "No. AI speeds up classification, replies and reporting. The strategy, the definition of a qualified lead and the offer remain human decisions.",
        },
        {
          q: "Which channel should a Saudi B2B company start with?",
          a: "It depends on the sales cycle and offer. Search usually captures existing demand and video platforms create it; test both against the same qualified-lead definition before deciding.",
        },
      ],
    },
    ar: {
      eyebrow: "Insights",
      title: "كيف تبني نظام توليد عملاء يجمع بين الإعلانات والذكاء الاصطناعي في السوق السعودي؟",
      description:
        "نظام توليد العملاء سلسلة وليس حملة: قناة والتقاط وتأهيل ومتابعة وقياس. أين يفيد الذكاء الاصطناعي وأين لا يفيد.",
      answer:
        "نظام توليد العملاء الفعّال ليس حملة جيدة، بل سلسلة مترابطة: قناة جذب، ونقطة التقاط، وتأهيل، ومتابعة، وقياس. الذكاء الاصطناعي لا يحل محل الاستراتيجية، بل يختصر الحلقات داخلها.",
      blocks: [
        {
          h: "حلقات السلسلة الخمس",
          ol: [
            "القناة: ابدأ من حيث يبحث المشتري فعلًا. البحث للنية العالية، والفيديو القصير للاكتشاف، وواتساب للحوار.",
            "الالتقاط: نموذج قصير أو رقم واتساب موحّد مع UTM. كل استفسار يجب أن يحمل مصدره.",
            "التأهيل: يستطيع الذكاء الاصطناعي تصنيف الرسائل الواردة (جاد، سؤال عام، غير مناسب) في ثوانٍ، لكن المعايير تحددها أنت.",
            "المتابعة: أتمتة الرد الأول والتذكيرات، وتسليم الليد المؤهل لشخص.",
            "القياس: ربط النتيجة النهائية (اجتماع، عرض سعر، عقد) بالإعلان الذي جاءت منه.",
          ],
        },
        {
          h: "خطأ شائع",
          p: ["أتمتة المتابعة قبل تعريف الليد المؤهل. النتيجة سرعة أكبر في معالجة ليدز ضعيفة."],
        },
        {
          h: "افصل المحادثات عن المبيعات",
          p: [
            "في حالة ساعد للاستقدام، حققت حملات المراسلة 2,407 محادثة بمتوسط 22.76 ر.س للمحادثة، وارتفعت المبيعات 45% خلال ثلاثة أشهر من الإطلاق. عدد المحادثات مؤشر مبكر، والمبيعات هي النتيجة التجارية. يُعرضان منفصلين، وقد أسهمت الحملة في الثانية دون أن تكون سببها الوحيد.",
          ],
        },
        {
          h: "من أين تبدأ",
          p: ["اسأل سؤالًا واحدًا أولًا: هل تعرف أي حملة جلبت آخر ثلاثة عملاء؟ إن لم تعرف، فالأولوية للقياس وليست لمزيد من الإعلان."],
        },
      ],
      faq: [
        {
          q: "هل يحل الذكاء الاصطناعي محل استراتيجية التسويق؟",
          a: "لا. يسرّع الذكاء الاصطناعي التصنيف والردود والتقارير، أما الاستراتيجية وتعريف الليد المؤهل والعرض فقرارات بشرية.",
        },
        {
          q: "بأي قناة تبدأ شركة B2B سعودية؟",
          a: "يتوقف ذلك على دورة البيع والعرض. البحث يلتقط غالبًا طلبًا قائمًا، ومنصات الفيديو تصنع الطلب؛ اختبر الاثنين بتعريف واحد لليد المؤهل قبل أن تقرر.",
        },
      ],
    },
  },
  {
    slug: "media-buyer-vs-growth-systems",
    date: "2026-11-07",
    en: {
      eyebrow: "Insights",
      title: "The difference between a traditional media buyer and someone who builds growth systems",
      description:
        "A media buyer optimises inside an ad platform. A growth-systems builder also owns measurement, CRM, follow-up automation and the link from spend to revenue.",
      answer:
        "A media buyer answers: how do I get a cheaper result from this platform? A growth-systems builder answers: how does spend turn into traceable, repeatable revenue? Both matter; they cover different scope.",
      blocks: [
        {
          h: "The media buyer",
          p: ["Masters targeting, creative and budget management inside the platform, and measures with CPM, CPC and cost per lead."],
        },
        {
          h: "The growth-systems builder",
          p: ["Does all of that and adds: measurement design, CRM integration, follow-up automation, unifying data from several platforms and connecting advertising to revenue."],
        },
        {
          h: "Which one do you need?",
          ul: [
            "A media buyer, when your channel and funnel are mature and you need optimisation inside the platform.",
            "A growth-systems builder, when you spend but cannot tell which spend works, or when leads are lost after they arrive.",
          ],
          callout:
            "The difference is scope of responsibility, not quality. The best arrangement is both together: a team that executes and a system that measures and connects.",
        },
      ],
      faq: [
        {
          q: "Is a growth-systems builder replacing the media buyer?",
          a: "No. The media buyer executes campaigns; the system makes their results measurable and connects them to the CRM.",
        },
      ],
    },
    ar: {
      eyebrow: "Insights",
      title: "الفرق بين Media Buyer التقليدي وبين من يبني Growth Systems",
      description:
        "المشتري الإعلاني يحسّن داخل منصة الإعلان، أما باني أنظمة النمو فيتولى أيضًا القياس والـ CRM وأتمتة المتابعة والربط بين الإنفاق والإيراد.",
      answer:
        "المشتري الإعلاني (Media Buyer) يجيب عن سؤال: كيف أحصل على نتيجة أرخص من هذه المنصة؟ وباني أنظمة النمو يجيب عن: كيف يتحول الإنفاق إلى إيراد قابل للتتبع والتكرار؟ كلاهما مهم، لكن نطاق عملهما مختلف.",
      blocks: [
        {
          h: "المشتري الإعلاني",
          p: ["يتقن الاستهداف والمحتوى الإبداعي وإدارة الميزانية داخل المنصة، ويقيس بـ CPM وCPC وتكلفة الليد."],
        },
        {
          h: "باني أنظمة النمو",
          p: ["يفعل ذلك كله ويضيف: تصميم القياس، وتكامل الـ CRM، وأتمتة المتابعة، وتوحيد بيانات عدة منصات، وربط الإعلان بالإيراد."],
        },
        {
          h: "أيهما تحتاج؟",
          ul: [
            "المشتري الإعلاني: عندما تكون قناتك ومسارك ناضجين وتحتاج تحسينًا داخل المنصة.",
            "باني أنظمة النمو: عندما تنفق ولا تعرف أي إنفاق يعمل فعلًا، أو عندما تضيع الليدز بعد وصولها.",
          ],
          callout: "الفرق في نطاق المسؤولية وليس في الجودة. الأفضل أن يعمل الاثنان معًا: فريق ينفّذ، ونظام يقيس ويربط.",
        },
      ],
      faq: [
        {
          q: "هل يحل باني الأنظمة محل المشتري الإعلاني؟",
          a: "لا. المشتري الإعلاني ينفّذ الحملات، والنظام يجعل نتائجها قابلة للقياس ويربطها بالـ CRM.",
        },
      ],
    },
  },
  {
    slug: "ai-lead-quality-not-quantity",
    date: "2026-11-07",
    en: {
      eyebrow: "Insights",
      title: "How we use AI to improve lead quality, not just lead count",
      description:
        "Three places AI improves lead quality: before the ad, at intake and after the sale. With a real example and the limits of the numbers.",
      answer:
        "A high lead count can hide poor quality. AI helps in three places: before the ad, when a lead arrives, and after the sale.",
      blocks: [
        {
          h: "1. Before the ad",
          p: ["Analyse the messages and questions you already receive to learn what a serious buyer looks like, then build the message and audience around that."],
        },
        {
          h: "2. At intake",
          p: ["Classify the enquiry automatically and ask two qualifying questions on WhatsApp (budget and timeline) before handing it to sales."],
        },
        {
          h: "3. After the sale",
          p: ["Send quality signals back to the platforms through a Conversion API, so the algorithm learns from real customers rather than from every form submission."],
        },
        {
          h: "A real example, with its limits",
          p: [
            "In the CODE IT campaign (September 2026), total spend across Snapchat, Meta, Google and TikTok was SAR 44,435 for 285 leads, or SAR 155.91 per lead. Leads flow into MiniCRM and SAVOXX through automated workflows, and the lead form was hardened with phone-number OTP verification, which deliberately reduces lead volume.",
          ],
          callout:
            "SAR 155.91 is total spend divided by leads. It includes an awareness campaign run by management decision, so it is a blended figure, not the cost of a sales-qualified lead or of a customer. Closing the sale is the sales team's responsibility.",
        },
        {
          h: "A caution",
          p: ["Automation does not fix bad data. If the targeting is wrong, a model will classify the wrong leads with more precision."],
        },
      ],
      faq: [
        {
          q: "Does stricter lead filtering reduce results?",
          a: "It reduces lead volume on purpose. Compare lead counts only with periods that used the same form and filter, and judge quality by what happens after the lead arrives.",
        },
      ],
    },
    ar: {
      eyebrow: "Insights",
      title: "كيف نستخدم الذكاء الاصطناعي لتحسين جودة الليدز وليس عددها فقط؟",
      description:
        "ثلاثة مواضع يحسّن فيها الذكاء الاصطناعي جودة الليدز: قبل الإعلان وعند الاستلام وبعد البيع. مع مثال حقيقي وحدود الأرقام.",
      answer:
        "كثرة الليدز قد تخفي ضعف الجودة. يفيد الذكاء الاصطناعي في ثلاثة مواضع: قبل الإعلان، وعند وصول الليد، وبعد البيع.",
      blocks: [
        {
          h: "1. قبل الإعلان",
          p: ["حلّل الرسائل والأسئلة التي تصلك فعلًا لتعرف كيف يبدو المشتري الجاد، ثم ابنِ الرسالة والجمهور على أساسها."],
        },
        {
          h: "2. عند الاستلام",
          p: ["صنّف الاستفسار آليًا واطرح سؤالين تأهيليين على واتساب (الميزانية والجدول الزمني) قبل تحويله إلى المبيعات."],
        },
        {
          h: "3. بعد البيع",
          p: ["أرسل إشارات الجودة إلى المنصات عبر Conversion API، فتتعلم الخوارزمية من العملاء الفعليين وليس من كل نموذج مُرسَل."],
        },
        {
          h: "مثال حقيقي مع حدوده",
          p: [
            "في حملة كود إت (سبتمبر 2026) بلغ إجمالي الإنفاق عبر Snapchat وMeta وGoogle وTikTok 44,435 ر.س مقابل 285 ليدًا، أي 155.91 ر.س لكل ليد. تتدفق الليدز إلى MiniCRM وSAVOXX عبر مسارات آلية، وشُدِّد نموذج الليد بتحقق OTP من رقم الجوال، وهو ما يقلل عدد الليدز عمدًا.",
          ],
          callout:
            "الرقم 155.91 ر.س هو إجمالي الإنفاق مقسومًا على عدد الليدز. ويشمل حملة وعي بقرار من الإدارة، فهو رقم مجمّع وليس تكلفة ليد مؤهل مبيعيًا ولا تكلفة عميل. وإقفال البيع مسؤولية فريق المبيعات.",
        },
        {
          h: "تنبيه",
          p: ["الأتمتة لا تصلح بيانات سيئة. إن كان الاستهداف خاطئًا فسيصنّف النموذج ليدز خاطئة بدقة أعلى."],
        },
      ],
      faq: [
        {
          q: "هل يقلل تشديد فلترة الليدز النتائج؟",
          a: "يقلل عدد الليدز عمدًا. قارن الأعداد فقط مع فترات استخدمت النموذج والفلتر نفسيهما، واحكم على الجودة بما يحدث بعد وصول الليد.",
        },
      ],
    },
  },
  {
    slug: "why-ads-alone-are-not-enough-2026",
    date: "2026-11-07",
    en: {
      eyebrow: "Insights",
      title: "Why managing Google or Meta ads alone is not enough in 2026",
      description:
        "Platforms now optimise on your behalf. The edge shifts to measurement, privacy-resilient tracking, follow-up speed and an independent source of truth.",
      answer:
        "Platforms now optimise for you with tools such as Performance Max and Advantage+. When everyone has the same tools, the edge moves to the quality of the data you feed the algorithm, not to campaign settings.",
      blocks: [
        {
          h: "Four reasons platform management alone falls short",
          ol: [
            "Measurement: a platform measures what it can see. It does not see what happens in WhatsApp, on the phone or in the meeting.",
            "Privacy: browser signals shrink, so server-side tracking and Conversion APIs become necessary.",
            "Follow-up: hours of delay waste leads you already paid for.",
            "Decisions: every platform credits itself, so you need an independent source of truth.",
          ],
        },
        {
          h: "This is not an argument against ads",
          p: ["Ads are the engine. On their own, though, they are a component of a system, not the whole system."],
        },
      ],
      faq: [
        {
          q: "Do I still need a Google or Meta specialist?",
          a: "Yes. The point is that platform expertise should sit inside a measured system with CRM, follow-up and an independent view of results.",
        },
      ],
    },
    ar: {
      eyebrow: "Insights",
      title: "لماذا لا يكفي إدارة إعلانات Google أو Meta وحدها في 2026؟",
      description:
        "المنصات تحسّن الآن بالنيابة عنك. تنتقل الميزة إلى القياس والتتبع المقاوم لقيود الخصوصية وسرعة المتابعة ومصدر مستقل للحقيقة.",
      answer:
        "أصبحت المنصات تحسّن بالنيابة عنك بأدوات مثل Performance Max وAdvantage+. وحين تتساوى الأدوات بين الجميع، تنتقل الميزة إلى جودة البيانات التي تغذي الخوارزمية، لا إلى إعدادات الحملة.",
      blocks: [
        {
          h: "أربعة أسباب لعدم كفاية إدارة المنصة وحدها",
          ol: [
            "القياس: المنصة تقيس ما تراه، ولا ترى ما يحدث في واتساب أو على الهاتف أو في الاجتماع.",
            "الخصوصية: تقل إشارات المتصفح، فيصبح التتبع من جهة الخادم وConversion API ضرورة.",
            "المتابعة: تأخر الرد ساعات يضيّع ليدز دفعت ثمنها.",
            "القرار: كل منصة تنسب النتيجة لنفسها، فتحتاج إلى مصدر مستقل للحقيقة.",
          ],
        },
        {
          h: "هذا ليس تقليلًا من الإعلانات",
          p: ["الإعلانات هي المحرك. لكنها وحدها جزء من نظام وليست النظام كله."],
        },
      ],
      faq: [
        {
          q: "هل ما زلت بحاجة إلى متخصص في Google أو Meta؟",
          a: "نعم. المقصود أن تكون خبرة المنصة داخل نظام مقيس يضم CRM ومتابعة ورؤية مستقلة للنتائج.",
        },
      ],
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
