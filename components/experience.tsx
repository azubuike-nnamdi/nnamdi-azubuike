import type { CmsExperienceItem } from '@/lib/experience'
import { EXPERIENCE_URL } from '@/config/routes'
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
    <ul className="border-t border-foreground/80">
      {items.map((item) => {
        const highlights =
          typeof highlightLimit === 'number'
            ? item.highlights.slice(0, highlightLimit)
            : item.highlights
        const badge = visibleBadge(item, showBadge)

        return (
          <li
            key={`${item.company}-${item.role}-${item.period ?? ''}`}
            className="grid grid-cols-1 gap-3 border-b border-border py-6 sm:grid-cols-[minmax(11rem,15rem)_1fr] sm:gap-10"
          >
            <div>
              <p className="font-display text-lg leading-snug text-foreground">{item.company}</p>
              {item.period ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
              ) : null}
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-base text-foreground">{presentedRole(item)}</p>
                {badge ? (
                  <p className="mt-1 text-sm text-muted-foreground">{badge}</p>
                ) : null}
                {item.summary ? (
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                ) : null}
              </div>
              {highlights.length > 0 ? (
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        )
      })}
    </ul>
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
              <Link
                href={EXPERIENCE_URL}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                view more
              </Link>
            ) : null}
          </div>
          <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Scope on the current mandate: the estate, the teams, and what is already in production.
          </p>
        </>
      ) : null}

      <ExperienceList items={items} highlightLimit={highlightLimit} showBadge={showBadge} />

      {hasMore ? (
        <div className="mt-6">
          <Link href={EXPERIENCE_URL} className="soft-link text-sm">
            view full experience →
          </Link>
        </div>
      ) : null}
    </section>
  )
}
