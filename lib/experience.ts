export type CmsExperienceItem = {
  company: string
  role: string
  /** Short promotion / status chip, e.g. "Promoted to Team Lead" */
  badge?: string
  period?: string
  summary?: string
  highlights: string[]
}

export type CmsEducationItem = {
  title: string
  institution: string
  detail?: string
}

export type CmsExpertiseGroup = {
  label: string
  items: string
}

export type ToolkitGroup = {
  label: string
  items: string[]
}

/** Full experience from CV — used on /experience and as CMS defaults. */
export const defaultExperience: CmsExperienceItem[] = [
  {
    company: 'Estuary Business Solutions',
    role: 'Software Engineering Lead',
    period: 'March 2023 — Present',
    summary: 'MTN Nigeria · Lagos',
    highlights: [
      'Led systems delivery across MTN Nigeria’s Next.js monorepo (Nx/Turbo) — self-service marketplace, FibreX, Bulk SMS, admin dashboard, cloud, and related apps — platforms used by 1M+ monthly users.',
      'Built and evolved shared platform packages: NextAuth session helpers, server-to-server auth checks, reusable payment systems, and design-system utilities consumed across apps.',
      'Shipped production hardening — hardened cookies/session config, payment and financial-record guards, replay/rate-limit patterns, and OpenTelemetry instrumentation — with support across SIT, UAT, and production.',
      'Owned high-traffic technical flows (airtime, data, billing, fibre plan/payments, enterprise SMS) and mentored engineers through reviews, pairing, and architecture guidance.',
    ],
  },
  {
    company: 'Numoni',
    role: 'Frontend Engineer',
    period: 'September 2025 — January 2026',
    summary:
      'Contract · Loyalty, rewards & payments · Merchant portal + Admin platform',
    highlights: [
      'Built the merchant portal (merchant.numoni.io) for day-to-day ops: multi-branch setup with maps, reward tables, deals & promos, POS, and payment/POS transaction history.',
      'Built the admin platform (admin.numoni.io) for operators: merchant KYC, customers, charities, roles & permissions, bonuses, settlements/reports, support, alerts, and e-commerce admin.',
      'Shared stack across both apps — Next.js, React, TanStack Query, Zustand, React Hook Form + Zod, Tailwind, and shadcn — with table-heavy dashboards and mutation-safe cache invalidation.',
    ],
  },
  {
    company: 'Weavii',
    role: 'Senior Frontend Engineer',
    period: 'March 2024 — November 2024',
    summary: 'Berlin, Germany',
    highlights: [
      'Contributed to the development of a music-centric web platform connecting artists and fans, enabling video uploads, likes, comments, and reshares to drive community engagement.',
      'Designed and built reusable UI components and design frameworks, which greatly improved code maintainability, consistency, and developer productivity.',
      'Configured unit tests using Jest and React Testing Library to improve reliability and catch regressions in key user flows.',
      'Worked closely with backend engineers to integrate APIs smoothly, ensuring fast data loading, stable state management, and a good overall user experience.',
    ],
  },
  {
    company: 'Cellcore',
    role: 'Frontend Engineer',
    period: 'August 2022 — March 2023',
    summary: 'PHP, Laravel, and Bootstrap production web applications.',
    highlights: [
      'Worked primarily with PHP, Laravel, and Bootstrap to build and maintain responsive web applications used in production.',
      'Developed and improved user-facing pages, focusing on clean layouts, consistency, and cross-device compatibility.',
      'Refactored legacy frontend code into a more modular structure, improving page load times and overall application performance.',
      'Integrated Flutterwave payment services to support secure and reliable transactions, improving user trust and checkout flow.',
      'Collaborated with product and backend teams to deliver features efficiently while maintaining frontend stability and application security.',
    ],
  },
  {
    company: 'KudiGo',
    role: 'Frontend Engineer Intern',
    period: 'March 2021 — July 2022',
    summary: 'Gift card web platform — React.js and Tailwind CSS.',
    highlights: [
      'Completed a frontend engineering internship focused on learning and applying React.js, Tailwind CSS, and modern frontend fundamentals in a production environment.',
      'Worked on a gift card web platform, building user-facing features and responsive layouts while ensuring cross-browser compatibility.',
      'Translated UI/UX designs into interactive React components and integrated REST APIs under the guidance of senior engineers.',
      'Learned and applied performance optimisation techniques and basic unit testing with Jest, improving application stability and responsiveness.',
      'Gained hands-on experience with state management, component structuring, and frontend best practices in a remote team setup.',
    ],
  },
]

export const defaultEducation: CmsEducationItem[] = [
  {
    title: 'Master of Science (MSc), Information Technology',
    institution: 'Miva Open University',
    detail: 'In progress',
  },
  {
    title: 'Bachelor of Science (BSc), Computer Science',
    institution: 'Kwara State University, Malete',
  },
  {
    title: 'Level 2 IVQ Diploma IT Systems Support',
    institution: 'City & Guilds',
  },
]

export const defaultExpertise: CmsExpertiseGroup[] = [
  {
    label: 'Leadership',
    items: 'Technical direction, delivery ownership, mentoring, architecture reviews',
  },
  {
    label: 'Fintech',
    items: 'Payments, billing, airtime, data, fibre, loyalty, settlements',
  },
  {
    label: 'Platforms',
    items: 'Next.js monorepos, shared auth, design systems, Nx/Turbo',
  },
  {
    label: 'Product engineering',
    items: 'React, Next.js, TypeScript, TanStack Query, Zustand',
  },
  {
    label: 'Quality',
    items: 'Jest, React Testing Library, Cypress, payment and session guards',
  },
  {
    label: 'Operations',
    items: 'SIT, UAT, production support, OpenTelemetry, rate limits',
  },
]

/** Tools named on the projects and the about page. Not a copy of anyone else's list. */
export const toolkit: ToolkitGroup[] = [
  {
    label: 'Core',
    items: ['TypeScript', 'React', 'Next.js', 'Vue and Nuxt', 'Svelte', 'HTML, CSS, and SQL'],
  },
  {
    label: 'State',
    items: ['TanStack Query', 'Zustand', 'Redux Toolkit', 'React Hook Form and Zod'],
  },
  {
    label: 'Interface',
    items: ['Tailwind CSS', 'shadcn/ui', 'Material UI', 'Bootstrap', 'Storybook'],
  },
  {
    label: 'Platform',
    items: ['Nx', 'Turbo', 'NextAuth', 'Design-system packages'],
  },
  {
    label: 'Quality',
    items: ['Jest', 'React Testing Library', 'Cypress', 'OpenTelemetry'],
  },
  {
    label: 'Earlier',
    items: ['PHP', 'Laravel'],
  },
]

export const cvSummary =
  'Software Engineering Lead at MTN Nigeria. I lead engineering across self-service, messaging, connectivity, and payments — products used by more than a million people a month.'
