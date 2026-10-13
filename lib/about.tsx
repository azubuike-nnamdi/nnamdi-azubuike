import Link from 'next/link'
import type { ReactNode } from 'react'

export type CmsAbout = {
  role: string
  title: string
  intro: string
  body: string
  highlights: string[]
}

export const defaultAbout: CmsAbout = {
  role: 'Software Engineering Lead',
  title: 'MTN Nigeria',
  intro:
    "I'm Nnamdi Azubuike. I lead engineering at MTN Nigeria across self-service, messaging, connectivity, and payments. More than a million people use those products in a month, and I stay with the shared code through release.",
  body: '',
  highlights: ['1 million', 'MTN Nigeria', 'payments'],
}

export type AboutPractice = {
  title: string
  detail: string
}

export type AboutProfile = {
  lede: string
  meta: string
  overviewHeading: string
  overview: string[]
  practiceHeading: string
  practiceIntro: string
  practice: AboutPractice[]
  stack: string
}

/** Copy on /about. Link tokens use [[label|/path]]. */
export const defaultAboutProfile: AboutProfile = {
  lede:
    'Software Engineering Lead at MTN Nigeria. I still sit in the code: reviews, shared libraries, and the release after it is live.',
  meta: 'Product engineering · Platforms · Production · Lagos · since 2021',
  overviewHeading: 'The path into the role.',
  overview: [
    'I lead engineering at MTN Nigeria, and I still write the code. The products are on [[Work|/projects]].',
    'I started with a frontend internship on a gift-card platform, then payments in PHP and Laravel, then Next.js on products that take real money and real traffic. At MTN I started on the frontend. I now lead the engineering.',
    'Contract work has run alongside that. At Numoni I built the merchant and admin platforms for loyalty, rewards, and payments. At Weavii I built an artist–fan product, and the UI system and the tests were part of the feature. I stay with a product after it is in production.',
  ],
  practiceHeading: 'What I still build.',
  practiceIntro:
    'The hands-on part: the surfaces, the shared layer under them, and the week after a release.',
  practice: [
    {
      title: 'Surfaces',
      detail:
        'The journeys a customer has to finish: plan, pay, account, reward, book. React and Next.js, with TanStack Query and Zustand where the cache and the local state have to agree after a mutation.',
    },
    {
      title: 'The shared layer',
      detail:
        'Several products in one monorepo. Shared auth, payment pieces, and design-system utilities, so a fix in the library reaches every app that imports it. Nx and Turbo carry the build.',
    },
    {
      title: 'The week after launch',
      detail:
        'SIT, UAT, and production stay with the same people who shipped the release. Session hardening, payment guards, rate limits, and OpenTelemetry are part of that week.',
    },
  ],
  stack:
    'Working stack: TypeScript, React, Next.js, TanStack Query, Zustand, Nx, Turbo, Jest, OpenTelemetry, and AI. I use AI in the engineering: implementation, review, and the shared code. APIs are Node.js and NestJS. Mobile apps are React Native and Expo.',
}

export function profileForCms(profile: AboutProfile = defaultAboutProfile) {
  return {
    lede: profile.lede,
    meta: profile.meta,
    overviewHeading: profile.overviewHeading,
    overview: profile.overview.map((text) => ({ text })),
    practiceHeading: profile.practiceHeading,
    practiceIntro: profile.practiceIntro,
    practice: profile.practice.map((item) => ({
      title: item.title,
      detail: item.detail,
    })),
    stack: profile.stack,
  }
}

/** Emphasize highlight terms in plain text (longest match first). */
export function renderHighlightedText(text: string, highlights: string[]): ReactNode[] {
  const terms = [...highlights]
    .map((term) => term.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)

  if (terms.length === 0) return [text]

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'g')
  return text.split(pattern).map((part, index) => {
    if (terms.includes(part)) {
      return (
        <span key={`${part}-${index}`} className="text-mark">
          {part}
        </span>
      )
    }
    return part
  })
}

/** Render [[label|/href]] tokens as soft links. */
export function renderLinkedText(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /\[\[([^\]|]+)\|([^\]]+)\]\]/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const label = match[1].trim()
    const href = match[2].trim()
    nodes.push(
      <Link key={`${href}-${match.index}`} href={href} className="soft-link">
        {label}
      </Link>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : [text]
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
