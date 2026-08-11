import type { CmsExperienceItem } from '@/lib/experience'

type ExperienceListProps = {
  experience: CmsExperienceItem[]
}

export default function ExperienceList({ experience }: ExperienceListProps) {
  if (experience.length === 0) return null

  return (
    <ul className="space-y-8">
      {experience.map((item) => (
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
