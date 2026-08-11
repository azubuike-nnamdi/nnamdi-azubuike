export type CmsExperienceItem = {
  company: string
  role: string
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

/** Full experience from CV — used on /experience and as CMS defaults. */
export const defaultExperience: CmsExperienceItem[] = [
  {
    company: 'MTN Nigeria',
    role: 'Senior Frontend Engineer (Team Lead)',
    period: 'March 2023 — Present',
    summary: 'Lagos, Nigeria',
    highlights: [
      'Led and collaborated with a cross-functional frontend team of 6 engineers to deliver large-scale React and Next.js self-service portals used by 1M+ monthly users.',
      'Built and scaled user-facing features enabling data and airtime purchases, bill payments, bulk SMS purchases, usage tracking, and IoT device monitoring, serving high-traffic consumer and enterprise use cases.',
      'Led the design and implementation of the organisation-wide frontend design system, defining reusable components, layout patterns, and UI standards adopted across multiple product teams.',
      'Built and maintained a frontend boilerplate starter kit with the organisation’s design system and core tooling preconfigured, enabling teams to bootstrap new projects without starting from scratch.',
      'Acted as frontend technical owner for the design system, reviewing contributions, enforcing best practices, and mentoring engineers on scalable UI architecture.',
      'Collaborated with backend and product teams to translate complex business requirements into maintainable frontend solutions.',
      'Mentored junior engineers through code reviews, pairing sessions, and architectural guidance.',
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
    label: 'Frameworks & Libraries',
    items: 'React, Next.js, TypeScript',
  },
  {
    label: 'State & Data',
    items: 'Redux Toolkit, Zustand, React Query, REST APIs',
  },
  {
    label: 'UI & Styling',
    items: 'Tailwind CSS, CSS Modules, Responsive Design, Design Systems',
  },
  {
    label: 'Performance',
    items: 'Code-splitting, memoisation, lazy loading, Web Vitals optimisation',
  },
  {
    label: 'Quality & Testing',
    items: 'Jest, React Testing Library, Cypress',
  },
  {
    label: 'Accessibility',
    items: 'Semantic HTML, ARIA basics, WCAG awareness',
  },
]

export const cvSummary =
  'Frontend engineer specializing in React and Next.js with 4+ years building production-grade web applications. Strong focus on component architecture, state management (Redux, Zustand, React Query), performance optimization, and accessible UI systems. Experienced in translating complex product requirements into maintainable frontend codebases used at scale.'
