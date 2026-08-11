import type { CmsExperienceItem } from '@/lib/experience'
import { EXPERIENCE_URL } from '@/config/routes'
import Link from 'next/link'

type ExperienceProps = {
  experience: CmsExperienceItem[]
  /** Homepage preview: show only the first N roles. */
  limit?: number
  showViewMore?: boolean
  /** Hide the section label when the page already has an h1. */
  showHeading?: boolean
}

function ExperienceList({ items }: { items: CmsExperienceItem[] }) {
  return (
    <ul className="space-y-8">
      {items.map((item) => (
        <li key={`${item.company}-${item.role}-${item.period ?? ''}`}>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(7rem,11rem)_1fr] sm:items-baseline sm:gap-4">
            <div>
              <p className="font-display text-base font-semibold text-highlight sm:text-lg">
                {item.company}
              </p>
              {item.period ? (
                <p className="mt-0.5 text-sm text-muted-foreground">{item.period}</p>
              ) : null}
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[0.95rem] font-medium leading-7 text-foreground">
                  {item.role}
                </p>
                {item.summary ? (
                  <p className="mt-1 text-[0.95rem] leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                ) : null}
              </div>
              {item.highlights.length > 0 ? (
                <ul className="space-y-2 text-[0.95rem] leading-7 text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-highlight/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Experience({
  experience,
  limit,
  showViewMore = false,
  showHeading = true,
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
            <h2 className="section-label">experience</h2>
            {hasMore ? (
              <Link
                href={EXPERIENCE_URL}
                className="text-sm text-muted-foreground transition-colors hover:text-highlight"
              >
                view more
              </Link>
            ) : null}
          </div>
          <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Roles where I owned delivery, not just tickets.
          </p>
        </>
      ) : null}

      <ExperienceList items={items} />

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
