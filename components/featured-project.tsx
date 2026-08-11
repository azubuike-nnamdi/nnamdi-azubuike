'use client'

import { PROJECT_URL } from '@/config/routes'
import type { ProjectDataType } from '@/lib/definitions'
import ProjectDetailsSheet from './project-details-sheet'
import Link from 'next/link'

type FeatureProjectProps = {
  projects: ProjectDataType[]
}

function shortDesc(desc: string) {
  const cleaned = desc.trim()
  if (cleaned.length <= 72) return cleaned
  const sentence = cleaned.split(/(?<=[.!?])\s+/)[0]
  if (sentence && sentence.length <= 88) return sentence
  return `${cleaned.slice(0, 70).trimEnd()}...`
}

const FeatureProject = ({ projects }: FeatureProjectProps) => {
  return (
    <section className="fade-up" style={{ animationDelay: '140ms' }}>
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h2 className="section-label">featured work</h2>
        <Link href={PROJECT_URL} className="text-sm text-muted-foreground transition-colors hover:text-highlight">
          see all
        </Link>
      </div>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectDetailsSheet project={project}>
              <button className="group grid w-full cursor-pointer grid-cols-1 gap-1 text-left sm:grid-cols-[minmax(7rem,11rem)_1fr] sm:items-baseline sm:gap-4">
                <span className="font-display text-base font-semibold text-highlight transition-colors group-hover:text-glow sm:text-lg">
                  {project.name.trim()}
                </span>
                <span className="text-[0.95rem] leading-7 text-muted-foreground transition-colors group-hover:text-foreground/85">
                  {shortDesc(project.desc)}
                </span>
              </button>
            </ProjectDetailsSheet>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeatureProject
