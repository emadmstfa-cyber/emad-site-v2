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

export const navLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#marketpilot", label: "MarketPilot" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const rotatingExpertise: readonly string[] = [
  "Digital Growth",
  "AI Automation",
  "MarTech & CRM",
  "Strategic Monitoring",
  "Early Warning",
  "Decision Support",
];

export type Stat = {
  value: number | null;
  suffix?: string;
  label: string;
  sublabel: string;
};

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years Experience", sublabel: "Digital, growth and technology" },
  { value: 80, suffix: "+", label: "Campaigns", sublabel: "Across paid media and growth" },
  { value: 10, suffix: "+", label: "Sectors", sublabel: "Diversified industry exposure" },
  { value: null, label: "Managing Director", sublabel: "WE Marketing" },
  { value: null, label: "Founder", sublabel: "MarketPilot" },
];

export type ExpertiseArea = { id: string; title: string; items: string[] };

export const expertise: ExpertiseArea[] = [
  {
    id: "01",
    title: "Digital Growth",
    items: [
      "Growth Strategy",
      "Performance Marketing",
      "Paid Media",
      "Lead Generation",
      "Conversion Optimization",
      "Digital Customer Acquisition",
    ],
  },
  {
    id: "02",
    title: "AI & Automation",
    items: [
      "AI-powered workflows",
      "Business automation",
      "AI agents",
      "Process automation",
      "Zapier / Make / n8n",
      "AI integration",
    ],
  },
  {
    id: "03",
    title: "MarTech & CRM",
    items: [
      "CRM strategy",
      "Lead lifecycle",
      "HubSpot · Zoho",
      "Marketing automation",
      "Meta / Google integrations",
      "Conversion APIs · Data workflows",
    ],
  },
  {
    id: "04",
    title: "Monitoring & Decision Systems",
    items: [
      "Monitoring & Analysis",
      "Early Warning Systems",
      "Investigative Monitoring",
      "Reporting",
      "Data-assisted decision support",
      "AI-assisted analysis",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  challenge: string;
  strategy: string;
  execution: string;
  outcome: string;
  channels: string[];
  highlight?: string;
};

export const caseStudies: CaseStudy[] = [
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
  },
  {
    slug: "mep-expo",
    client: "MEP Expo — Middle East Poultry Expo",
    category: "Event · Visitor Acquisition",
    challenge: "Drive qualified visitor acquisition at scale.",
    strategy: "Performance acquisition layered with content and remarketing.",
    execution: "Multi-channel paid acquisition, creative system and conversion tracking.",
    outcome: "Campaign structure and acquisition system delivered.",
    channels: ["Meta", "Google", "TikTok"],
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

export const marketPilotPoints: readonly string[] = [
  "Monitoring",
  "Media / Source Analysis",
  "Early Warning",
  "AI-assisted analysis",
  "Reports",
  "Decision Support",
];

export const techStack = {
  ai: ["OpenAI", "Claude", "Gemini"],
  automation: ["Zapier", "Make", "n8n"],
  crm: ["HubSpot", "Zoho"],
  ads: ["Meta", "Google", "TikTok", "Snapchat"],
  dev: ["GitHub", "Supabase", "Laravel", "Next.js"],
} as const;

export const experience = [
  {
    role: "Managing Director",
    org: "WE Marketing",
    period: "Current",
    detail: "Leading growth, performance and digital transformation engagements across sectors in KSA and the region.",
  },
  {
    role: "Founder",
    org: "MarketPilot",
    period: "Building",
    detail: "AI-powered monitoring, analysis, early warning and decision support platform.",
  },
  {
    role: "Digital Marketing, Growth & Technology",
    org: "12+ years",
    period: "2013 — Present",
    detail: "From performance marketing to growth systems, automation, MarTech and decision intelligence.",
  },
] as const;

export const certifications = [
  { title: "Corporate Strategy", issuer: "University of London" },
  { title: "Marketing in the 21st Century", issuer: "The Open University" },
  { title: "Social Media Strategy for Small Businesses", issuer: "Alison" },
  { title: "Diploma in Social Media Marketing", issuer: "Alison" },
] as const;
