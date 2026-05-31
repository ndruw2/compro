/**
 * Single source of truth for the Indra Bayu consulting site.
 *
 * Personal brand, first-person voice. To adjust positioning, edit this file only —
 * components read everything from here.
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly blurb: string;
  readonly points: readonly string[];
}

export interface ApproachStep {
  readonly step: string;
  readonly title: string;
  readonly body: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export const site = {
  brand: {
    name: 'Indra Bayu',
    role: 'Software Consultant & Engineer',
    tagline: 'I build custom software and AI that fits how your business actually works.',
    intro:
      "I'm an independent software consultant. I partner with teams to design, build, and ship custom platforms, automation, and AI features — shaped around your real workflow, not a template. You work directly with me, end to end.",
    locationLabel: 'Indonesia · working worldwide',
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies readonly NavLink[],

  // Outcome-framed, in-demand offerings (2026). Honest — no fabricated metrics.
  services: [
    {
      id: 'ai-integration',
      title: 'AI Integration',
      blurb:
        'Embed LLMs and automation into the tools your team already uses — to cut cost and speed up response times.',
      points: ['LLM features in existing apps', 'RAG over your own data', 'Guardrails & evaluation'],
    },
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      blurb:
        'Agentic workflows that handle repetitive, judgment-light work — customer service, ops, and back-office tasks.',
      points: ['Task & workflow agents', 'Tool / API orchestration', 'Human-in-the-loop controls'],
    },
    {
      id: 'doc-processing',
      title: 'Document & Data Processing',
      blurb:
        'Pipelines that extract, classify, and route documents and data automatically, with accuracy you can trust.',
      points: ['Intelligent extraction', 'Validation & routing', 'Dashboards & reporting'],
    },
    {
      id: 'custom-dev',
      title: 'Custom Software Development',
      blurb:
        'Web platforms, internal tools, and APIs built to match your exact business process — full-stack, production-ready.',
      points: ['Web & internal platforms', 'API & integration design', 'MVP to production'],
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      blurb:
        'Architecture reviews, technology selection, and pragmatic AI-adoption roadmaps grounded in how you operate.',
      points: ['Architecture & scalability', 'Build-vs-buy guidance', 'AI adoption roadmap'],
    },
  ] satisfies readonly Service[],

  approach: [
    {
      step: '01',
      title: 'Understand the work',
      body: 'I start with your process, not a tech stack — learning the workflow, the constraints, and the people who use it daily.',
    },
    {
      step: '02',
      title: 'Design around it',
      body: 'Architecture and UX are shaped to fit how you work, so the software removes friction instead of adding it.',
    },
    {
      step: '03',
      title: 'Build iteratively',
      body: 'Short cycles, working software early, continuous feedback. You see progress and steer it the whole way.',
    },
    {
      step: '04',
      title: 'Stay accountable',
      body: 'I measure success by outcomes, not deliverables — and stay involved after launch to make sure it lands.',
    },
  ] satisfies readonly ApproachStep[],

  about: {
    heading: 'A senior engineer you work with directly',
    body: [
      "I've spent my career building production software — from web platforms and internal tools to data pipelines and, more recently, applied AI. I work hands-on across the stack, so the person scoping your project is the person writing the code.",
      'I take on a small number of engagements at a time and treat each one like a long-term partnership. Selected work and references are available on request.',
    ],
    highlights: [
      'Full-stack product engineering',
      'Applied AI & automation',
      'Direct, senior-level delivery',
    ],
  },

  contact: {
    // Replace with real handles before launch.
    email: 'hello@indrabayu.dev',
    // E.164 without '+' for the wa.me link.
    whatsapp: '6281234567890',
    whatsappDisplay: '+62 812-3456-7890',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'GitHub', href: 'https://github.com/ndruw2' },
      { label: 'Email', href: 'mailto:hello@indrabayu.dev' },
    ] satisfies readonly SocialLink[],
  },

  seo: {
    title: 'Indra Bayu — Software Consultant & Engineer',
    description:
      'Indra Bayu is an independent software consultant building custom software, automation, and applied AI shaped around your business process.',
    url: 'https://finendra.pages.dev',
    locale: 'en',
    ogImage: '/og-image.png',
  },
} as const;

export type Site = typeof site;
