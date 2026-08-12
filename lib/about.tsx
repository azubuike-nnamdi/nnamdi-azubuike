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
  role: 'Frontend Engineer',
  title: 'Team Lead',
  intro:
    "For 6+ years, I've built and shipped software across telecom, financial systems, and enterprise operations; solving problems where reliability, scalability, security, and user experience matter.",
  body:
    "I've led and worked hands-on across platforms serving over 1 million users, from system architecture and backend services to APIs and frontend applications. I go beyond marking tickets as done; I think about the bigger picture: how a system is designed, how it scales, how secure and resilient it is, and how easily it can evolve as the business grows.",
  highlights: ['financial systems', '1 million', 'telecom'],
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
