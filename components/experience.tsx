import { EXPERIENCE_URL } from '@/config/routes'
import type { CmsExperienceItem } from '@/lib/experience'
import Link from 'next/link'

type ExperienceProps = {
  experience: CmsExperienceItem[]
  /** Homepage preview: show only the first N roles. */
  limit?: number
  /** Cap bullets per role (0 hides bullets). */
  highlightLimit?: number
  showViewMore?: boolean
  /** Hide the section label when the page already has an h1. */
  showHeading?: boolean
  /** Homepage hides promotion chips so the section reads as scope, not a title. */
  showBadge?: boolean
}

export function presentedRole(item: CmsExperienceItem) {
  const company = item.company.toLowerCase()
  const role = item.role.toLowerCase()
  const atMtn = company.includes('estuary') || company.includes('mtn')
  const legacyTitle =
    role.includes('frontend') || role.includes('team lead') || role.includes('engineering lead')

  if (atMtn && legacyTitle) return 'Software Engineering Lead'
  return item.role
}

function HighlightText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g)
  return parts.map((part, index) => {
    if (!/^https?:\/\//.test(part)) return <span key={index}>{part}</span>
    const label = part.replace(/^https?:\/\//, '').replace(/\/$/, '')
    return (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
      >
        {label}
      </a>
    )
  })
}

function visibleBadge(item: CmsExperienceItem, showBadge: boolean) {
  if (!showBadge || !item.badge) return null
  if (/^promoted to/i.test(item.badge)) return null
  return item.badge
}

function ExperienceList({
  items,
  highlightLimit,
  showBadge = true,
}: {
  items: CmsExperienceItem[]
  highlightLimit?: number
  showBadge?: boolean
}) {
  return (
    <div className="channel-list">
      {items.map((item) => {
        const highlights =
          typeof highlightLimit === 'number'
            ? item.highlights.slice(0, highlightLimit)
            : item.highlights
        const badge = visibleBadge(item, showBadge)

        return (
          <article key={`${item.company}-${item.role}-${item.period ?? ''}`} className="card">
            {item.period ? <p className="k">{item.period}</p> : null}
            <h3>{presentedRole(item)}</h3>
            <p>{item.company}</p>
            {badge ? <p>{badge}</p> : null}
            {item.summary ? <p>{item.summary}</p> : null}
            {highlights.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm leading-6" style={{ color: 'var(--mute)' }}>
                {highlights.map((highlight) => (
                  <li key={highlight}>
                    <HighlightText text={highlight} />
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

export default function Experience({
  experience,
  limit,
  highlightLimit,
  showViewMore = false,
  showHeading = true,
  showBadge = true,
}: ExperienceProps) {
  if (experience.length === 0) return null

  const items =
    typeof limit === 'number' && limit > 0 ? experience.slice(0, limit) : experience
  const hasMore = showViewMore && experience.length > items.length

  return (
    <section className="fade-up" style={{ animationDelay: '180ms' }}>
      {showHeading ? (
        <>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Where this sits
            </h2>
            {hasMore ? (
              <Link href={EXPERIENCE_URL} className="section-more">
                Full experience →
              </Link>
            ) : null}
          </div>
          <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Scope on the current mandate: the estate, the teams, and what is already in production.
          </p>
        </>
      ) : null}

      <ExperienceList items={items} highlightLimit={highlightLimit} showBadge={showBadge} />
    </section>
  )
}
