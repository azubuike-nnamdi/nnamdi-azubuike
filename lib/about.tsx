import type { ReactNode } from 'react'
import Link from 'next/link'

export type CmsAbout = {
  role: string
  title: string
  intro: string
  body: string
  highlights: string[]
}

export const defaultAbout: CmsAbout = {
  role: 'Team Lead',
  title: 'Senior Frontend Engineer',
  intro:
    'I build and scale frontend platforms that hold up in production — React, Next.js, and Node.js systems focused on performance, reliability, and maintainable architecture.',
  body:
    'At MTN, I lead frontend delivery for self-service products used by over 1 million people across payments, data, and messaging — from delivery through production support. Outside work, I [[write|/articles]], mentor, and volunteer in communities that shaped me.',
  highlights: ['React', 'Next.js', 'Node.js'],
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
