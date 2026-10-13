import { encode } from 'qss'

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** selfservice.mtn.ng answers with a bot check. The public app is my.mtn.ng. */
function screenshotTarget(uri: string) {
  try {
    const host = new URL(uri).hostname.replace(/^www\./, '')
    if (host === 'selfservice.mtn.ng') return 'https://my.mtn.ng/'
  } catch {
    return uri
  }
  return uri
}

/** Live screenshot of a project URL via Microlink (no stored PNG required). */
export function projectScreenshotFromUrl(
  uri: string,
  options?: { width?: number; height?: number },
): string | null {
  const url = uri.trim()
  if (!/^https?:\/\//i.test(url)) return null

  const width = options?.width ?? 1440
  const height = options?.height ?? 900
  const params = encode({
    url: screenshotTarget(url),
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorScheme: 'light',
    waitUntil: 'load',
    waitForTimeout: 3000,
    'viewport.width': width,
    'viewport.height': height,
  })

  return `https://api.microlink.io/?${params}`
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
