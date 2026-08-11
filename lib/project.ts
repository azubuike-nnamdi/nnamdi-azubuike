export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function projectHref(project: { slug?: string | null; id: string | number }): string {
  if (project.slug) return `/projects/${project.slug}`
  return '/projects'
}

export function projectMetaDescription(project: {
  seoDescription?: string | null
  proof?: string | null
  outcome?: string | null
  desc?: string | null
  name: string
}): string {
  return (
    project.seoDescription?.trim() ||
    project.proof?.trim() ||
    project.outcome?.trim() ||
    project.desc?.trim() ||
    `${project.name} — project by Nnamdi Azubuike`
  )
}
