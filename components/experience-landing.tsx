import Experience from '@/components/experience'
import type {
  CmsEducationItem,
  CmsExperienceItem,
  CmsExpertiseGroup,
  ToolkitGroup,
} from '@/lib/experience'
import Link from 'next/link'

type ExperienceLandingProps = {
  experience: CmsExperienceItem[]
  intro: string
  education: CmsEducationItem[]
  expertise: CmsExpertiseGroup[]
  toolkit: ToolkitGroup[]
  resumeUrl: string
}

export default function ExperienceLanding({
  experience,
  intro,
  education,
  expertise,
  toolkit,
  resumeUrl,
}: ExperienceLandingProps) {
  return (
    <div className="space-y-16">
      <header className="max-w-2xl">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <h1 className="page-title mt-6">Experience</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p>
        <p className="mt-4">
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm"
          >
            Download CV
          </Link>
        </p>
      </header>

      <Experience experience={experience} showHeading={false} />

      <section className="space-y-6">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">The toolkit</h2>
        <ul className="note-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {toolkit.map((group) => (
            <li key={group.label} className="card">
              <p className="k">{group.label}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.95rem] leading-6 text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="section-label">scope</h2>
        <ul className="space-y-3">
          {expertise.map((group) => (
            <li
              key={group.label}
              className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(9rem,13rem)_1fr] sm:items-baseline sm:gap-4"
            >
              <span className="text-sm text-muted-foreground">{group.label}</span>
              <span className="text-[0.95rem] leading-7 text-foreground/90">
                {group.items}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="section-label">education</h2>
        <ul className="space-y-4">
          {education.map((item) => (
            <li key={`${item.title}-${item.institution}`}>
              <p className="text-[0.95rem] font-medium leading-7 text-foreground">
                {item.title}
              </p>
              <p className="text-[0.95rem] leading-7 text-muted-foreground">
                {item.institution}
                {item.detail ? ` · ${item.detail}` : ''}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
