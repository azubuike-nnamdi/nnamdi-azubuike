import type { ProjectDataType } from '@/lib/definitions'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import ProjectScreenshot from '@/components/projects/project-screenshot'

type ProjectCaseStudyProps = {
  project: ProjectDataType
}

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-2">
      <h3 className="section-label">{label}</h3>
      <div className="text-[0.95rem] leading-7 text-foreground/90">{children}</div>
    </section>
  )
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const hasCaseStudy = Boolean(project.problem || project.role || project.outcome)
  const metrics = project.metrics ?? []

  return (
    <div className="space-y-8">
      {project.proof ? (
        <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {project.proof}
        </p>
      ) : null}

      {project.image ? (
        <ProjectScreenshot src={project.image} alt={`${project.name} screenshot`} />
      ) : null}

      {hasCaseStudy ? (
        <div className="space-y-5">
          {project.problem ? (
            <Section label="problem">{project.problem}</Section>
          ) : null}
          {project.role ? <Section label="role">{project.role}</Section> : null}
          {project.decisions ? (
            <Section label="decisions">{project.decisions}</Section>
          ) : null}
          {metrics.length > 0 ? (
            <Section label="metrics">
              <ul className="space-y-2">
                {metrics.map((metric) => (
                  <li
                    key={`${metric.label}-${metric.value}`}
                    className="grid grid-cols-[minmax(7rem,11rem)_1fr] gap-3 sm:gap-4"
                  >
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-medium text-foreground">{metric.value}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}
          {project.outcome ? (
            <Section label="outcome">{project.outcome}</Section>
          ) : null}
        </div>
      ) : project.desc ? (
        <Section label="about">{project.desc}</Section>
      ) : null}

      {hasCaseStudy && project.desc ? (
        <Section label="notes">{project.desc}</Section>
      ) : null}

      <Section label="stack">
        <p>{project.technologies.join(' · ')}</p>
      </Section>

      <Link
        href={project.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 text-sm text-background"
      >
        {project.action || 'View live project'}
        <ExternalLink className="h-4 w-4" />
      </Link>
    </div>
  )
}
