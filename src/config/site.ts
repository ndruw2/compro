/**
 * Single source of truth for the Indra Bayu consulting site.
 * Personal brand, first-person voice. Edit here only.
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
      "I'm an independent software consultant. I partner with teams to design, build, and ship custom platforms, automation, and AI features, shaped around your real workflow, not a template. You work directly with me, end to end.",
    locationLabel: 'Indonesia · working worldwide',
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies readonly NavLink[],

  services: [
    {
      id: 'ai-integration',
      title: 'AI Integration',
      blurb:
        'Embed LLMs and automation into the tools your team already uses, cutting cost and speeding up response times.',
      points: ['LLM features in existing apps', 'RAG over your own data', 'Guardrails & evaluation'],
    },
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      blurb:
        'Agentic workflows that handle repetitive, judgment-light work: customer service, ops, and back-office tasks.',
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
        'Web platforms, internal tools, and APIs built to match your exact business process, full-stack, production-ready.',
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

  approach: {
    cycleLabel: 'Continuous\nDelivery',
    steps: [
      {
        step: '01',
        title: 'Discover',
        body: 'Scope the problem together. Understand workflows, constraints, and what success looks like before writing a line of code.',
      },
      {
        step: '02',
        title: 'Design',
        body: 'Architecture and approach shaped to fit the process. Plan the first sprint; scope it to a slice of real value.',
      },
      {
        step: '03',
        title: 'Build',
        body: 'Short delivery cycles with working software from the start. You test and give feedback at the end of every sprint.',
      },
      {
        step: '04',
        title: 'Iterate',
        body: 'Each cycle makes the product sharper. Review, reprioritize, and loop back until the outcome is right.',
      },
    ] satisfies readonly ApproachStep[],
  },

  about: {
    advisorLabel: 'Advisor',
    heading: 'A senior engineer you work with directly',
    body: [
      "I've spent my career building production software: from web platforms and internal tools to data pipelines and, more recently, applied AI. I work hands-on across the stack, so the person scoping your project is the person writing the code.",
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
    whatsapp: '6281234567890',
    whatsappDisplay: '+62 812-3456-7890',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'GitHub', href: 'https://github.com/ndruw2' },
      { label: 'Email', href: 'mailto:hello@indrabayu.dev' },
    ] satisfies readonly SocialLink[],
  },

  seo: {
    title: 'Indra Bayu, Software Consultant & Engineer',
    description:
      'Indra Bayu is an independent software consultant building custom software, automation, and applied AI shaped around your business process.',
    url: 'https://finendra.pages.dev',
    locale: 'en',
    ogImage: '/og-image.png',
  },
} as const;

export type Site = typeof site;
