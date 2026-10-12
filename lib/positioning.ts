import type { CmsAbout } from '@/lib/about'

/**
 * Homepage narrative, drawn from the public record:
 * Software Engineering Lead at MTN Nigeria (LinkedIn), scope across
 * myMTN, messaging, Bulk SMS, IoT, cloud, FibreX, and FlyX.
 * The landing headline is a sentence about the work, not a role label.
 * The role sits on the line above it.
 */
export const positioning = {
  eyebrow: 'Software Engineering Lead · MTN Nigeria',
  headline: 'Engineering on products people use.',
  lede:
    "I'm Nnamdi Azubuike. I lead engineering at MTN Nigeria across self-service, messaging, connectivity, and payments. More than a million people use those products in a month, and I stay with the shared code through release.",
  body: '',
  highlights: ['1 million', 'MTN Nigeria', 'payments'],
  proof: [
    { value: '1M+', label: 'people a month' },
    { value: '5+', label: 'years in engineering' },
    { value: '6', label: 'engineers led' },
  ],
} as const

const legacyHeadlines = new Set([
  'frontend engineer',
  'team lead',
  'senior frontend engineer',
  'engineering leadership',
  'engineering lead',
])

/** Ignore stored specialist or generic-leadership headlines. */
export function resolveHeroCopy(about: CmsAbout): {
  headline: string
  lede: string
  body: string
  highlights: string[]
} {
  const role = about.role.trim().toLowerCase()
  const isLegacy =
    legacyHeadlines.has(role) ||
    about.intro.trim().toLowerCase().startsWith('for 6+ years') ||
    about.intro.trim().toLowerCase().startsWith('technical direction, delivery management') ||
    about.intro.trim().toLowerCase().startsWith('i set technical direction') ||
    about.intro.trim().toLowerCase().startsWith('software engineering lead at mtn')

  if (isLegacy) {
    return {
      headline: positioning.headline,
      lede: positioning.lede,
      body: positioning.body,
      highlights: [...positioning.highlights],
    }
  }

  return {
    headline: positioning.headline,
    lede: about.intro.trim() || positioning.lede,
    body: about.body.trim() || positioning.body,
    highlights: about.highlights.length > 0 ? about.highlights : [...positioning.highlights],
  }
}

export const scope = [
  {
    domain: 'Consumer',
    detail: 'myMTN and self-service for airtime, data, bills, and account.',
  },
  {
    domain: 'Messaging',
    detail: 'MTN Messaging and Bulk SMS for enterprise traffic.',
  },
  {
    domain: 'Connectivity',
    detail: 'FibreX and FlyX, from plan and payment through to live service.',
  },
  {
    domain: 'Operations',
    detail: 'IoT monitoring and cloud, inside the same product estate.',
  },
  {
    domain: 'Payments',
    detail: 'Billing and fibre payments, plus nuMoni’s merchant and admin money flows.',
  },
  {
    domain: 'Platform',
    detail: 'Shared auth, a design system, and the monorepo the products sit on.',
  },
] as const

export const responsibilities = [
  {
    title: 'Direction',
    detail:
      'Technical choices with product owners, business owners, and architects — what to build, and what the system has to survive.',
  },
  {
    title: 'Standards',
    detail:
      'Reviews, shared libraries, and practices that let several teams ship one estate without drifting apart.',
  },
  {
    title: 'People',
    detail:
      'Team structure, mentoring, and delivery that continues when one person is out of the room.',
  },
  {
    title: 'Production',
    detail:
      'Uptime, hardening, NDPR-aware delivery, and the system after it is already live.',
  },
] as const
