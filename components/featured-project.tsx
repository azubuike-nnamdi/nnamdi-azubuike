'use client'

import { PROJECT_URL } from '@/config/routes'
import type { ProjectDataType } from '@/lib/definitions'
import { projectHref } from '@/lib/project'
import Link from 'next/link'

type FeatureProjectProps = {
  projects: ProjectDataType[]
  linked?: boolean
}

function shortDesc(project: ProjectDataType) {
  const proof = project.proof?.trim()
  if (proof) return proof

  const cleaned = (project.desc ?? '').trim()
  if (!cleaned) return 'View case study'
  if (cleaned.length <= 120) return cleaned
  const sentence = cleaned.split(/(?<=[.!?])\s+/)[0]
  if (sentence && sentence.length <= 140) return sentence
  return `${cleaned.slice(0, 117).trimEnd()}...`
}

const FeatureProject = ({ projects, linked = true }: FeatureProjectProps) => {
  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Selected systems
        </h2>
        {linked ? (
          <Link href={PROJECT_URL} className="text-sm text-muted-foreground hover:text-foreground">
            All work
          </Link>
        ) : null}
      </div>

      <ul className="border-t border-foreground/80">
        {projects.map((project, index) => {
          const className =
            'group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[3rem_14rem_1fr] sm:items-baseline'
          const body = (
            <>
              <span className="pt-2 text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-2xl text-foreground group-hover:underline group-hover:decoration-foreground/30 group-hover:underline-offset-4">
                {project.name.trim()}
              </span>
              <span className="col-start-2 text-sm leading-6 text-muted-foreground sm:col-start-auto sm:text-base">
                {shortDesc(project)}
              </span>
            </>
          )

          return (
            <li key={project.id}>
              {linked ? (
                <Link href={projectHref(project)} className={className}>
                  {body}
                </Link>
              ) : (
                <div className={className}>{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FeatureProject
