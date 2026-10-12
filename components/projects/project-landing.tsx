'use client'

import type { ProjectDataType } from '@/lib/definitions'
import { projectHref } from '@/lib/project'
import Link from 'next/link'
import { useMemo, useState, type ReactNode } from 'react'

type ProjectLandingProps = {
  projects: ProjectDataType[]
}

const baselineStack = new Set([
  'react',
  'next.js',
  'nextjs',
  'tailwind',
  'tailwind css',
  'typescript',
  'shadcn',
  'shadcn/ui',
])

function normalizeTech(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

function isBaseline(value: string) {
  return baselineStack.has(normalizeTech(value).replace(/\./g, ''))
    || baselineStack.has(normalizeTech(value))
}

function listBlurb(project: ProjectDataType) {
  return (
    project.proof?.trim() ||
    project.outcome?.trim() ||
    project.desc?.trim() ||
    ''
  )
}

function proofMetric(project: ProjectDataType) {
  const metric = project.metrics?.find((item) => {
    const value = item.value.trim()
    return value.length > 0 && value.length <= 16 && /\d/.test(value) && item.label.trim()
  })
  if (!metric) return ''
  return `${metric.value.trim()} ${metric.label.trim().toLowerCase()}`
}

function stackLine(technologies: string[]) {
  const distinct = technologies.filter((tech) => !isBaseline(tech))
  return (distinct.length > 0 ? distinct : technologies).slice(0, 4).join(' · ')
}

export default function ProjectLanding({ projects }: ProjectLandingProps) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const techFilters = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>()

    for (const project of projects) {
      const seen = new Set<string>()
      for (const tech of project.technologies) {
        if (isBaseline(tech)) continue
        const key = normalizeTech(tech)
        if (!key || seen.has(key)) continue
        seen.add(key)
        const current = counts.get(key)
        counts.set(key, {
          label: current?.label ?? tech.trim(),
          count: (current?.count ?? 0) + 1,
        })
      }
    }

    return [...counts.entries()]
      .filter(([, value]) => value.count >= 2)
      .sort((a, b) => b[1].count - a[1].count || a[1].label.localeCompare(b[1].label))
      .slice(0, 5)
      .map(([key, value]) => ({ key, label: value.label }))
  }, [projects])

  const hasFeatured = projects.some((project) => project.featured)
  const hasUnfeatured = projects.some((project) => !project.featured)

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return projects.filter((project) => {
      if (filter === 'featured' && !project.featured) return false
      if (filter.startsWith('tech:')) {
        const key = filter.slice(5)
        const matches = project.technologies.some((tech) => normalizeTech(tech) === key)
        if (!matches) return false
      }
      if (!needle) return true

      const haystack = [
        project.name,
        project.proof,
        project.outcome,
        project.role,
        project.problem,
        project.desc,
        ...project.technologies,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return haystack.includes(needle)
    })
  }, [filter, projects, query])

  return (
    <div className="fade-up">
      <p className="kicker">Work</p>
      <h1 className="page-title mt-3">Selected systems</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
        Production systems, with the outcome in the line under the name. Search the work, or narrow it by what it was built with.
      </p>

      <div className="mt-10 flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </FilterButton>
          {hasFeatured && hasUnfeatured ? (
            <FilterButton active={filter === 'featured'} onClick={() => setFilter('featured')}>
              Featured
            </FilterButton>
          ) : null}
          {techFilters.map((tech) => (
            <FilterButton
              key={tech.key}
              active={filter === `tech:${tech.key}`}
              onClick={() => setFilter(`tech:${tech.key}`)}
            >
              {tech.label}
            </FilterButton>
          ))}
        </div>
        <label className="block w-full border-b border-border sm:max-w-xs">
          <span className="sr-only">Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted-foreground">Nothing matches that search.</p>
      ) : (
        <ul>
          {visible.map((project, index) => {
            const href = projectHref(project)
            const live = /^https?:\/\//i.test(project.uri.trim()) ? project.uri.trim() : ''
            const metric = proofMetric(project)
            const stack = stackLine(project.technologies)
            const blurb = listBlurb(project)

            return (
              <li key={project.id} className="border-b border-border py-8">
                <div className="grid gap-2 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-6">
                  <span className="pt-2 text-xs tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                      <Link
                        href={href}
                        className="hover:underline hover:decoration-foreground/30 hover:underline-offset-4"
                      >
                        {project.name.trim()}
                      </Link>
                    </h2>
                    {blurb ? (
                      <p className="mt-2 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
                        {blurb}
                      </p>
                    ) : null}
                    <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      {metric ? <span>{metric}</span> : null}
                      {stack ? <span>{stack}</span> : null}
                      <Link
                        href={href}
                        className="text-foreground underline decoration-foreground/30 underline-offset-4"
                      >
                        Case study
                      </Link>
                      {live ? (
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-foreground/20 underline-offset-4 hover:text-foreground"
                        >
                          Live
                        </a>
                      ) : null}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sm ${
        active
          ? 'text-foreground underline decoration-foreground/40 underline-offset-[6px]'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {children}
    </button>
  )
}
