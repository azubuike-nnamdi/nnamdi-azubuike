export type FunProject = {
  name: string
  kind: string
  summary: string
  stack: string
  href?: string
  live?: string
}

export const funProjects: FunProject[] = [
  {
    name: 'CTC Hub',
    kind: 'Full stack',
    summary:
      'Church management for Christ Treasure Centre, starting at the Yaba branch. Auth, members, and the data sit in one app.',
    stack: 'Next.js, Prisma, PostgreSQL, Auth.js',
    href: 'https://github.com/azubuike-nnamdi/ctc-hub',
    live: 'https://ctc-hub-4x3s.vercel.app',
  },
  {
    name: 'Eservone',
    kind: 'Mobile',
    summary:
      'A React Native app that introduces people to services and takes payment inside the app.',
    stack: 'Expo, React Native, TanStack Query, Zustand, Paystack',
    href: 'https://github.com/azubuike-nnamdi/eservone',
  },
  {
    name: 'Qoray',
    kind: 'Mobile',
    summary:
      'A React Native app for Qoray’s electric-mobility platform. People browse vehicles, pay, and handle charge and swap from the phone.',
    stack: 'React Native',
    live: 'https://myqoray.com/',
  },
  {
    name: 'Hyea Me Ha',
    kind: 'Mobile and API',
    summary:
      'A booking app for events, travel, and training in Ghana, with a NestJS API behind it.',
    stack: 'Expo, React Native, NestJS, PostgreSQL, Redis',
    href: 'https://github.com/azubuike-nnamdi/hyeameha-app',
  },
  {
    name: 'SentinelOps',
    kind: 'Backend',
    summary:
      'An API for incident detection and root cause analysis, with a Python service beside it.',
    stack: 'NestJS, MongoDB, Redis, OpenTelemetry',
    href: 'https://github.com/azubuike-nnamdi/sentinel-ops-api',
  },
  {
    name: 'Earnable',
    kind: 'Backend',
    summary:
      'An API that crawls a page and returns a monetization analysis, with an LLM in the loop.',
    stack: 'NestJS, PostgreSQL, Redis',
    href: 'https://github.com/azubuike-nnamdi/earnable-backend',
  },
]
