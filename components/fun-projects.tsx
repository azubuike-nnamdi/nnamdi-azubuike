import { funProjects } from '@/lib/fun-projects'
import Link from 'next/link'

type FunProjectsProps = {
  showHeading?: boolean
}

export default function FunProjects({ showHeading = true }: FunProjectsProps) {
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

      <ul className="mt-10 border-t border-foreground/80">
        {funProjects.map((project) => (
          <li key={project.name} className="border-b border-border py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              {showHeading ? (
                <h2 className="font-display text-2xl font-medium">{project.name}</h2>
              ) : (
                <h3 className="font-display text-2xl font-medium">{project.name}</h3>
              )}
              <p className="kicker">{project.kind}</p>
            </div>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
              {project.summary}
            </p>
            {project.stack ? (
              <p className="mt-2 text-sm text-muted-foreground">{project.stack}</p>
            ) : null}
            {project.href || project.live ? (
              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    GitHub
                  </Link>
                ) : null}
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Live
                  </Link>
                ) : null}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
