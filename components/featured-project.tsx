'use client'

import { PROJECT_URL } from '@/config/routes'
import type { ProjectDataType } from '@/lib/definitions'
import { projectHref } from '@/lib/project'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

function SystemShot({ src, name }: { src?: string | null; name: string }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
      {showImage && src ? (
        <Image
          src={src}
          alt=""
          fill
          unoptimized={/^https?:/i.test(src)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
          className="object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="flex h-full items-end px-5 pb-4 font-display text-2xl text-foreground/70">
          {name}
        </span>
      )}
    </div>
  )
}

const FeatureProject = ({ projects, linked = true }: FeatureProjectProps) => {
  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Selected systems
        </h2>
        {linked ? (
          <Link href={PROJECT_URL} className="section-more">
            All work →
          </Link>
        ) : null}
      </div>

      <ul className="grid gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
        {projects.map((project) => {
          const name = project.name.trim()
          const body = (
            <>
              <SystemShot src={project.image} name={name} />
              <span className="mt-3 block font-display text-2xl text-foreground group-hover:underline group-hover:decoration-foreground/30 group-hover:underline-offset-4">
                {name}
              </span>
              <span className="mt-1 line-clamp-1 text-sm leading-6 text-muted-foreground">
                {shortDesc(project)}
              </span>
            </>
          )

          return (
            <li key={project.id}>
              {linked ? (
                <Link href={projectHref(project)} className="group block">
                  {body}
                </Link>
              ) : (
                <div className="group block">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FeatureProject
