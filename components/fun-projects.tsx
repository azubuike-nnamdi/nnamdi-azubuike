import type { FunProject } from '@/lib/fun-projects'
import Link from 'next/link'

type FunProjectsProps = {
  projects: FunProject[]
  showHeading?: boolean
}

export default function FunProjects({ projects, showHeading = true }: FunProjectsProps) {
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

      <div className="note-grid" style={{ marginTop: 36 }}>
        {projects.map((project) => (
          <article key={project.name} className="card">
            <p className="k">{project.kind}</p>
            {showHeading ? <h2>{project.name}</h2> : <h3>{project.name}</h3>}
            <p>{project.summary}</p>
            {project.stack ? <p>{project.stack}</p> : null}
            {project.href || project.live ? (
              <p className="flex flex-wrap gap-x-5 gap-y-2">
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
          </article>
        ))}
      </div>
    </section>
  )
}
