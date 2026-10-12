import type { ProjectDataType } from '@/lib/definitions'
import { toolkit, type CmsExperienceItem } from '@/lib/experience'

export type TailorDomain = 'frontend' | 'payments' | 'lead'

export type TailoredCopy = {
  audience: string
  domain: TailorDomain
  headline: string
  lede: string
  skills: string[]
  projectSlugs: string[]
  experienceCompany: string
}

const OWN_TITLE = 'Software Engineering Lead'

const DOMAIN_TERMS: Record<TailorDomain, string[]> = {
  frontend: [
    'frontend',
    'front-end',
    'front end',
    'react',
    'next.js',
    'nextjs',
    'vue',
    'nuxt',
    'svelte',
    'css',
    'tailwind',
    'interface',
    'ui',
  ],
  payments: [
    'payment',
    'payments',
    'fintech',
    'billing',
    'wallet',
    'merchant',
    'loyalty',
    'settlement',
  ],
  lead: ['lead', 'leadership', 'manager', 'mentor', 'mentoring', 'architecture', 'director'],
}

const HEADLINES: Record<TailorDomain, string> = {
  frontend: 'Interfaces on products people use.',
  payments: 'Payments on products people use.',
  lead: 'Engineering on products people use.',
}

const FALLBACK_AUDIENCE: Record<TailorDomain, string> = {
  frontend: 'senior frontend engineer',
  payments: 'payments engineer',
  lead: 'software engineering lead',
}

function haystackOf(parts: Array<string | null | undefined>): string {
  return parts
    .filter((part): part is string => Boolean(part?.trim()))
    .join(' ')
    .toLowerCase()
}

function countTerms(haystack: string, terms: string[]): number {
  return terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0)
}

export function tailorDomain(text: string): TailorDomain {
  const haystack = text.toLowerCase()
  const ranked = (Object.keys(DOMAIN_TERMS) as TailorDomain[])
    .map((domain) => ({ domain, score: countTerms(haystack, DOMAIN_TERMS[domain]) }))
    .sort((a, b) => b.score - a.score)

  return ranked[0]?.score ? ranked[0].domain : 'lead'
}

const GENERIC_SUFFIXES = new Set(['js', 'css', 'ui'])
const NO_STEM = new Set(['next'])

const SKILL_ALIASES: Record<string, string[]> = {
  ai: [
    'artificial intelligence',
    'generative ai',
    'genai',
    'llm',
    'llms',
    'large language model',
    'large language models',
  ],
  nestjs: ['nest js'],
  postgresql: ['postgres'],
  mongodb: ['mongo'],
  reactnative: ['react native'],
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
}

function splitSkillLabel(label: string): string[] {
  return label
    .split(/,|\band\b/i)
    .map((part) => part.trim())
    .filter((part) => part.length > 1)
}

function canonicalKey(label: string): string {
  const words = tokenize(label)
  const core = words.filter((word) => !GENERIC_SUFFIXES.has(word))
  const compact = (core.length > 0 ? core : words).join('')
  if (compact === 'reactjs') return 'react'
  return compact
}

function mentionsSkill(text: string, label: string): boolean {
  const words = tokenize(label)
  if (words.length === 0) return false

  const hay = tokenize(text)
  const compact = words.join('')
  if (hay.includes(compact)) return true
  if (words.length === 1) return hay.includes(words[0])

  const phrase = words.join(' ')
  if (hay.join(' ').includes(phrase)) return true

  const core = words.filter((word) => !GENERIC_SUFFIXES.has(word))
  if (core.length === 1 && core.length < words.length && !NO_STEM.has(core[0])) {
    return hay.includes(core[0])
  }

  const aliases = SKILL_ALIASES[canonicalKey(label)] ?? []
  return aliases.some((alias) => {
    const aliasWords = tokenize(alias)
    if (aliasWords.length === 1) return hay.includes(aliasWords[0])
    return hay.join(' ').includes(aliasWords.join(' '))
  })
}

export function skillVocabulary(projects: ProjectDataType[]): string[] {
  const labels = [
    ...toolkit.flatMap((group) => group.items.flatMap(splitSkillLabel)),
    ...projects.flatMap((project) => project.technologies.map((tech) => tech.trim()).filter(Boolean)),
  ]
  const seen = new Set<string>()
  const skills: string[] = []

  for (const label of labels) {
    const key = canonicalKey(label)
    if (!key || seen.has(key)) continue
    seen.add(key)
    skills.push(label)
  }

  return skills
}

function occursOutside(text: string, skill: string, containers: string[]): boolean {
  let hay = ` ${tokenize(text).join(' ')} `
  const needle = tokenize(skill).join(' ')

  for (const container of containers) {
    const phrase = tokenize(container).join(' ')
    if (phrase === needle || !phrase.includes(needle)) continue
    hay = hay.split(` ${phrase} `).join(' ')
  }

  return hay.includes(` ${needle} `)
}

export function matchedSkills(text: string, projects: ProjectDataType[]): string[] {
  const haystack = text.toLowerCase()
  const matched = skillVocabulary(projects).filter((skill) => mentionsSkill(text, skill))
  const visible = matched.filter((skill) => {
    const words = tokenize(skill)
    if (words.length !== 1) return true
    return occursOutside(text, skill, matched)
  })

  return visible
    .map((skill) => ({ skill, index: haystack.indexOf(tokenize(skill)[0] ?? skill.toLowerCase()) }))
    .sort((a, b) => (a.index < 0 ? 1 : b.index < 0 ? -1 : a.index - b.index))
    .map((item) => item.skill)
}

function skillKeys(skills: string[]): Set<string> {
  return new Set(skills.map(canonicalKey))
}

function listNames(names: string[]): string {
  if (names.length === 0) return 'the selected work'
  if (names.length === 1) return names[0]
  if (names.length === 2) return `${names[0]} and ${names[1]}`
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`
}

export function tailorPortfolio(input: {
  jobTitle: string
  description: string
  projects: ProjectDataType[]
  experience: CmsExperienceItem[]
}): TailoredCopy {
  const haystack = haystackOf([input.jobTitle, input.description])
  const domain = tailorDomain(haystack)
  const audience = input.jobTitle.trim().replace(/\s+/g, ' ').slice(0, 80) || FALLBACK_AUDIENCE[domain]
  const skills = matchedSkills(haystack, input.projects)
  const keys = skillKeys(skills)

  const rankedProjects = input.projects
    .filter((project) => project.slug)
    .map((project) => {
      const matched = new Set(
        project.technologies
          .map((tech) => canonicalKey(tech))
          .filter((key) => key && keys.has(key)),
      )
      return { project, score: matched.size }
    })
    .sort((a, b) => b.score - a.score || (a.project.order ?? 0) - (b.project.order ?? 0))

  const chosen = rankedProjects.slice(0, 4)
  const names = chosen.slice(0, 3).map((item) => item.project.name)

  const rankedExperience = input.experience
    .map((item, index) => {
      const blob = haystackOf([item.company, item.role, item.summary, ...item.highlights])
      const score = skills.reduce((total, skill) => total + (mentionsSkill(blob, skill) ? 1 : 0), 0)
      return { item, score, index }
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)

  return {
    audience,
    domain,
    headline: HEADLINES[domain],
    lede: `I'm Nnamdi Azubuike, ${OWN_TITLE} at MTN Nigeria. The closest work is ${listNames(names)}.`,
    skills,
    projectSlugs: chosen.map((item) => item.project.slug as string),
    experienceCompany: rankedExperience[0]?.item.company ?? '',
  }
}

export function audienceLabel(audience: string): string {
  return audience.trim().replace(/\s+/g, ' ').toLowerCase()
}

export function tailoredIntro(lede: string): string {
  return lede
    .replace(/\s*This page is prepared for a .+? role\.\s*/i, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function tailorSlug(title: string): string {
  const base =
    title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'role'
  const suffix = Math.random().toString(36).slice(2, 8)
  return `${base}-${suffix}`
}
