import type { FunProject } from '@/lib/fun-projects'
import Link from 'next/link'

type FunProjectsProps = {
  projects: FunProject[]
  showHeading?: boolean
}

function stackNames(stack: string) {
  return stack
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
}

export default function FunProjects({ projects, showHeading = true }: FunProjectsProps) {
  const Title = showHeading ? 'h2' : 'h3'

  return (
    <section>
      {showHeading ? (
        <div className="max-w-2xl">
          <p className="kicker">Side work</p>
          <h1 className="page-title mt-3">Fun projects</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Apps and APIs outside the day job. The code is on GitHub.
          </p>
        </div>
      ) : (
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Fun projects</h2>
      )}

      <ul className={showHeading ? 'mt-16' : 'mt-8'}>
        {projects.map((project) => {
          const names = project.stack ? stackNames(project.stack) : []

          return (
            <li key={project.name} className="border-t border-[#eceae6] py-10">
              <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
                <div>
                  <p className="kicker">{project.kind}</p>
                  <Title className="mt-2 text-[clamp(28px,3vw,40px)] leading-[1.1] font-extrabold tracking-[-0.03em]">
                    {project.name}
                  </Title>
                </div>
                {project.href || project.live ? (
                  <p className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.href ? (
                      <Link href={project.href} target="_blank" rel="noopener noreferrer" className="text-link">
                        GitHub
                      </Link>
                    ) : null}
                    {project.live ? (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">
                        Live
                      </Link>
                    ) : null}
                  </p>
                ) : null}
              </div>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[#5f5f66]">{project.summary}</p>
              {names.length > 0 ? (
                <p className="mt-3 text-[13px] font-semibold text-[#5f5f66]">
                  {names.map((name, index) => (
                    <span key={`${project.name}-${name}`} className="whitespace-nowrap">
                      {index > 0 ? (
                        <span aria-hidden className="mx-2 text-primary">
                          ·
                        </span>
                      ) : null}
                      {name}
                    </span>
                  ))}
                </p>
              ) : null}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
