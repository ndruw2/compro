/**
 * Single source of truth for the FINENDRA company-profile site.
 *
 * The brand name is a WORKING PLACEHOLDER ("FINENDRA" = Fina + Indra via the
 * Javanese "-endra" royal suffix). To swap the final name, change `brand.name`,
 * `brand.nameAksara`, and the contact handles below — nothing else references
 * the literal name.
 *
 * NOTE on `brand.nameAksara`: this is a best-effort Aksara Jawa (Javanese script)
 * transliteration rendered with the Noto Sans Javanese webfont. It is decorative
 * (aria-hidden) and SHOULD BE REVIEWED by a native reader before launch.
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly blurb: string;
  /** Bento span hint: 'wide' | 'tall' | 'normal' */
  readonly span: 'wide' | 'tall' | 'normal';
  readonly points: readonly string[];
}

export interface ApproachStep {
  readonly step: string;
  readonly title: string;
  readonly body: string;
}

export interface Engagement {
  readonly sector: string;
  readonly title: string;
  readonly summary: string;
  readonly outcome: string;
}

export interface Founder {
  readonly name: string;
  readonly role: string;
  readonly focus: string;
  /** initials used for the avatar monogram */
  readonly initials: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export const site = {
  brand: {
    name: 'FINENDRA',
    /** Best-effort Aksara Jawa rendering of the name — REVIEW before launch. */
    nameAksara: 'ꦥ꦳ꦶꦤꦺꦤ꧀ꦢꦿ',
    suffix: 'Consulting',
    tagline: 'Bespoke software, shaped around your business process.',
    intro:
      'We are a custom development consultancy. Every engagement is treated like a long-term client relationship — we study how your business actually runs, then build software that fits it precisely. No templates, no forced workflows.',
    locationLabel: 'Indonesia · working worldwide',
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ] satisfies readonly NavLink[],

  services: [
    {
      id: 'custom-dev',
      title: 'Custom Software Development',
      blurb:
        'Web platforms, internal tools, and APIs built to match your exact business process — not the other way around.',
      span: 'wide',
      points: ['Web & internal platforms', 'API & integration design', 'Process-driven architecture'],
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      blurb:
        'We map the manual steps that slow your team down and replace them with reliable, observable automation.',
      span: 'normal',
      points: ['Pipeline & job orchestration', 'Data & document workflows'],
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      blurb:
        'Architecture reviews, technology selection, and pragmatic roadmaps grounded in how your business really operates.',
      span: 'normal',
      points: ['Architecture & scalability', 'Build-vs-buy guidance'],
    },
    {
      id: 'ai',
      title: 'Applied AI & Data',
      blurb:
        'Practical AI features and data products that solve a named problem and earn their keep.',
      span: 'tall',
      points: ['LLM-powered features', 'Data pipelines & dashboards', 'Retrieval & automation agents'],
    },
    {
      id: 'product',
      title: 'Product Engineering',
      blurb:
        'From first prototype to production — we partner through the whole build, iterating with your business.',
      span: 'normal',
      points: ['MVP to production', 'Iterative delivery'],
    },
  ] satisfies readonly Service[],

  approach: [
    {
      step: '01',
      title: 'Understand the business',
      body: 'We start with your process, not a tech stack. We learn the workflow, the constraints, and the people who use it daily.',
    },
    {
      step: '02',
      title: 'Design around the process',
      body: 'Architecture and UX are shaped to fit how you work — bespoke by default, so the software removes friction instead of adding it.',
    },
    {
      step: '03',
      title: 'Build iteratively',
      body: 'Short cycles, working software early, and continuous feedback. You see progress and steer it the whole way.',
    },
    {
      step: '04',
      title: 'Partner long-term',
      body: 'Every project is treated like a client relationship. We stay accountable for outcomes, not just deliverables.',
    },
  ] satisfies readonly ApproachStep[],

  // Honest capability framing (no fabricated client logos) until real case studies exist.
  work: [
    {
      sector: 'Operations',
      title: 'Process-fit internal platforms',
      summary: 'Replacing spreadsheets and manual handoffs with tools modelled on the real workflow.',
      outcome: 'Less rework, clearer ownership, faster cycle times.',
    },
    {
      sector: 'Automation',
      title: 'Content & data pipelines',
      summary: 'Automated multi-step pipelines that move, transform, and publish data reliably.',
      outcome: 'Hours of manual work removed each week.',
    },
    {
      sector: 'Applied AI',
      title: 'LLM-assisted workflows',
      summary: 'Embedding language models into real business steps with guardrails and observability.',
      outcome: 'Faster decisions without losing control.',
    },
  ] satisfies readonly Engagement[],

  // EDIT roles/focus freely — these are placeholders for the founding team.
  founders: [
    { name: 'Indra Bayu', role: 'Founder & Principal Consultant', focus: 'Architecture · client strategy', initials: 'IB' },
    { name: 'Fina Alamanda', role: 'Co-Founder & Delivery Lead', focus: 'Product · delivery', initials: 'FA' },
    { name: 'Malika Shanum', role: 'Design & Experience Lead', focus: 'UX · brand · research', initials: 'MS' },
    { name: 'Elfathan Akhyar', role: 'Engineering Lead', focus: 'Platforms · integration', initials: 'EA' },
    { name: 'Arrayan Aqsha', role: 'Automation & Data Lead', focus: 'Automation · applied AI', initials: 'AA' },
  ] satisfies readonly Founder[],

  contact: {
    // Replace with the real handles before launch.
    email: 'hello@finendra.com',
    // E.164 without '+' for the wa.me link.
    whatsapp: '6281234567890',
    whatsappDisplay: '+62 812-3456-7890',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'Instagram', href: 'https://www.instagram.com/' },
      { label: 'GitHub', href: 'https://github.com/ndruw2' },
    ] satisfies readonly SocialLink[],
  },

  seo: {
    title: 'FINENDRA — Bespoke Software Consulting',
    description:
      'FINENDRA is a custom software development consultancy. We build web platforms, automation, and applied AI shaped precisely around your business process.',
    url: 'https://finendra.pages.dev',
    locale: 'en',
    ogImage: '/og-image.png',
  },
} as const;

export type Site = typeof site;
