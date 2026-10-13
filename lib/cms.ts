import { getPayload } from 'payload'
import config from '@payload-config'
import { defaultAbout, defaultAboutProfile, type AboutProfile, type CmsAbout } from '@/lib/about'
import { tailorPortfolio, tailorSlug } from '@/lib/tailor'
import {
  cvSummary,
  defaultEducation,
  defaultExperience,
  defaultExpertise,
  toolkit,
  type CmsEducationItem,
  type CmsExperienceItem,
  type CmsExpertiseGroup,
  type ToolkitGroup,
} from '@/lib/experience'
import { funProjects as defaultFunProjects, type FunProject } from '@/lib/fun-projects'
import { defaultCommunityRoles, type CommunityRole } from '@/lib/community'
import {
  DEFAULT_WHATSAPP_MESSAGE,
  RESUME_URL,
  buildWhatsAppUrl,
} from '@/config/routes'
import { projectScreenshotFromUrl } from '@/lib/project'
import { asNoteType, noteTypeLabel, tidyNoteText, writingSection, type NoteType, type WritingSection } from '@/lib/writing'

export type CmsProject = {
  id: string
  name: string
  slug: string
  proof?: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  decisions?: string | null
  metrics: Array<{ label: string; value: string }>
  desc?: string | null
  action: string
  uri: string
  image?: string | null
  seoDescription?: string | null
  technologies: string[]
  order: number
  featured: boolean
}

export type CmsArticle = {
  id: string
  title: string
  kind: 'external' | 'full'
  slug?: string | null
  externalUrl?: string | null
  publishedAt: string
  date: string
  readTime: string
  summary?: string | null
  section: WritingSection
  noteType: NoteType
  noteTypeLabel: string
  desc?: string
  categories: string[]
  category: string[]
  image?: string
  href: string
  uri: string
  order: number
  content?: unknown
}

export type CmsFooterColumn = {
  id: string
  title: string
  links: Array<{
    id: string
    label: string
    url: string
    isEmail?: boolean | null
  }>
}

export type { CmsAbout }
export type { CmsExperienceItem }

export type CmsContact = {
  whatsappPhone: string
  whatsappMessage: string
  whatsappUrl: string
}

export type CmsFooterBrand = {
  copyrightName: string
  location: string
  timezone: string
}

export const defaultFooterBrand: CmsFooterBrand = {
  copyrightName: 'NNAMDI AZUBUIKE',
  location: 'LAGOS, NIGERIA',
  timezone: 'Africa/Lagos',
}

export type CmsSiteSettings = {
  about: CmsAbout
  contact: CmsContact
  resumeUrl: string
  experience: CmsExperienceItem[]
  experienceIntro: string
  profile: AboutProfile
  education: CmsEducationItem[]
  expertise: CmsExpertiseGroup[]
  toolkit: ToolkitGroup[]
  funProjects: FunProject[]
  community: CommunityRole[]
  footer: CmsFooterBrand
  navLinks: Array<{ id: string; name: string; href: string }>
  socialLinks: Array<{ id: string; name: string; uri: string }>
  footerColumns: CmsFooterColumn[]
}

type ProjectDoc = {
  id: string | number
  name: string
  slug?: string | null
  proof?: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  decisions?: string | null
  metrics?: Array<{ label: string; value: string }> | null
  desc?: string | null
  action: string
  uri: string
  image?: number | string | MediaDoc | null
  imageUrl?: string | null
  seoDescription?: string | null
  technologies?: Array<{ name: string }> | null
  order?: number | null
  featured?: boolean | null
}

type MediaDoc = {
  url?: string | null
}

type ArticleDoc = {
  id: string | number
  title: string
  kind: 'external' | 'full'
  slug?: string | null
  externalUrl?: string | null
  publishedAt: string
  readTime: string
  summary?: string | null
  section?: string | null
  noteType?: string | null
  categories?: Array<{ name: string }> | null
  image?: number | string | MediaDoc | null
  imageUrl?: string | null
  order?: number | null
  content?: unknown
}

type SiteSettingsDoc = {
  about?: {
    role?: string | null
    title?: string | null
    intro?: string | null
    body?: string | null
    highlights?: Array<{ id?: string | null; term: string }> | null
  } | null
  contact?: {
    whatsappPhone?: string | null
    whatsappMessage?: string | null
  } | null
  resume?: {
    url?: string | null
  } | null
  experience?: Array<{
    id?: string | null
    company: string
    role: string
    badge?: string | null
    period?: string | null
    summary?: string | null
    highlights?: Array<{ id?: string | null; text: string }> | null
  }> | null
  experienceIntro?: string | null
  profile?: {
    lede?: string | null
    meta?: string | null
    overviewHeading?: string | null
    overview?: Array<{ id?: string | null; text: string }> | null
    practiceHeading?: string | null
    practiceIntro?: string | null
    practice?: Array<{ id?: string | null; title: string; detail: string }> | null
    stack?: string | null
  } | null
  education?: Array<{
    id?: string | null
    title: string
    institution: string
    detail?: string | null
  }> | null
  expertise?: Array<{ id?: string | null; label: string; items: string }> | null
  toolkit?: Array<{
    id?: string | null
    label: string
    items?: Array<{ id?: string | null; name: string }> | null
  }> | null
  funProjects?: Array<{
    id?: string | null
    name: string
    kind: string
    summary: string
    stack?: string | null
    github?: string | null
    live?: string | null
  }> | null
  community?: Array<{
    id?: string | null
    shortName?: string | null
    period?: string | null
    role: string
    organization: string
    summary: string
    responsibilities?: Array<{ id?: string | null; text: string }> | null
    logos?: Array<{
      id?: string | null
      src: string
      alt: string
      mark?: boolean | null
    }> | null
    links?: Array<{ id?: string | null; label: string; href: string }> | null
  }> | null
  navLinks?: Array<{ id?: string | null; name: string; href: string }> | null
  socialLinks?: Array<{ id?: string | null; name: string; uri: string }> | null
  footer?: {
    copyrightName?: string | null
    location?: string | null
    timezone?: string | null
  } | null
  footerColumns?: Array<{
    id?: string | null
    title: string
    links?: Array<{
      id?: string | null
      label: string
      url: string
      isEmail?: boolean | null
    }> | null
  }> | null
}

async function getPayloadClient() {
  return getPayload({ config })
}

function formatArticleDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function mapProject(doc: ProjectDoc): CmsProject {
  const imageFromUpload =
    doc.image && typeof doc.image === 'object' && 'url' in doc.image && doc.image.url
      ? doc.image.url
      : undefined

  return {
    id: String(doc.id),
    name: doc.name,
    slug: doc.slug?.trim() || String(doc.id),
    proof: doc.proof,
    problem: doc.problem,
    role: doc.role,
    outcome: doc.outcome,
    decisions: doc.decisions,
    metrics: (doc.metrics ?? [])
      .map((metric) => ({
        label: metric.label.trim(),
        value: metric.value.trim(),
      }))
      .filter((metric) => metric.label && metric.value),
    desc: doc.desc,
    action: doc.action,
    uri: doc.uri,
    image:
      imageFromUpload ||
      doc.imageUrl?.trim() ||
      projectScreenshotFromUrl(doc.uri) ||
      null,
    seoDescription: doc.seoDescription,
    technologies: (doc.technologies ?? []).map((tech) => tech.name),
    order: doc.order ?? 0,
    featured: Boolean(doc.featured),
  }
}

function mapArticle(doc: ArticleDoc): CmsArticle {
  const imageFromUpload =
    doc.image && typeof doc.image === 'object' && 'url' in doc.image && doc.image.url
      ? doc.image.url
      : undefined
  const image = imageFromUpload || doc.imageUrl || undefined
  const categories = (doc.categories ?? []).map((category) => category.name)
  const href =
    doc.kind === 'full' && doc.slug
      ? `/articles/${doc.slug}`
      : doc.externalUrl || '#'

  return {
    id: String(doc.id),
    title: tidyNoteText(doc.title),
    kind: doc.kind,
    slug: doc.slug,
    externalUrl: doc.externalUrl,
    publishedAt: doc.publishedAt,
    date: formatArticleDate(doc.publishedAt),
    readTime: doc.readTime,
    summary: doc.summary ? tidyNoteText(doc.summary) : doc.summary,
    desc: doc.summary ? tidyNoteText(doc.summary) : undefined,
    section: writingSection(doc.section),
    noteType: asNoteType(doc.noteType),
    noteTypeLabel: noteTypeLabel(doc.noteType),
    categories,
    category: categories,
    image,
    href,
    uri: href,
    order: doc.order ?? 0,
    content: doc.content,
  }
}

function mapSiteSettings(doc: SiteSettingsDoc): CmsSiteSettings {
  const about = doc.about
  const highlights = (about?.highlights ?? [])
    .map((item) => item.term.trim())
    .filter(Boolean)

  const whatsappMessage =
    doc.contact?.whatsappMessage?.trim() || DEFAULT_WHATSAPP_MESSAGE
  const whatsappPhone = doc.contact?.whatsappPhone?.trim() || ''
  const whatsappUrl = buildWhatsAppUrl(whatsappPhone, whatsappMessage)

  const experienceFromCms = (doc.experience ?? [])
    .map((item) => ({
      company: item.company.trim(),
      role: item.role.trim(),
      badge: item.badge?.trim() || undefined,
      period: item.period?.trim() || undefined,
      summary: item.summary?.trim() || undefined,
      highlights: (item.highlights ?? [])
        .map((highlight) => highlight.text.trim())
        .filter(Boolean),
    }))
    .filter((item) => item.company && item.role)

  const communityFromCms = (doc.community ?? [])
    .map((item) => ({
      shortName: item.shortName?.trim() || undefined,
      period: item.period?.trim() || undefined,
      role: item.role.trim(),
      organization: item.organization.trim(),
      summary: item.summary.trim(),
      responsibilities: (item.responsibilities ?? [])
        .map((line) => line.text.trim())
        .filter(Boolean),
      logos: (item.logos ?? [])
        .map((logo) => ({
          src: logo.src.trim(),
          alt: logo.alt.trim(),
          mark: Boolean(logo.mark),
        }))
        .filter((logo) => logo.src),
      links: (item.links ?? [])
        .map((link) => ({
          label: link.label.trim(),
          href: link.href.trim(),
        }))
        .filter((link) => link.label && link.href),
    }))
    .filter((item) => item.role && item.organization && item.summary)

  const community = communityFromCms.length > 0 ? communityFromCms : defaultCommunityRoles

  const overview = (doc.profile?.overview ?? [])
    .map((item) => item.text.trim())
    .filter(Boolean)
  const practice = (doc.profile?.practice ?? [])
    .map((item) => ({ title: item.title.trim(), detail: item.detail.trim() }))
    .filter((item) => item.title && item.detail)
  const profile: AboutProfile = {
    lede: doc.profile?.lede?.trim() || defaultAboutProfile.lede,
    meta: doc.profile?.meta?.trim() || defaultAboutProfile.meta,
    overviewHeading: doc.profile?.overviewHeading?.trim() || defaultAboutProfile.overviewHeading,
    overview: overview.length > 0 ? overview : defaultAboutProfile.overview,
    practiceHeading: doc.profile?.practiceHeading?.trim() || defaultAboutProfile.practiceHeading,
    practiceIntro: doc.profile?.practiceIntro?.trim() || defaultAboutProfile.practiceIntro,
    practice: practice.length > 0 ? practice : defaultAboutProfile.practice,
    stack: doc.profile?.stack?.trim() || defaultAboutProfile.stack,
  }

  const educationFromCms = (doc.education ?? [])
    .map((item) => ({
      title: item.title.trim(),
      institution: item.institution.trim(),
      detail: item.detail?.trim() || undefined,
    }))
    .filter((item) => item.title && item.institution)

  const expertiseFromCms = (doc.expertise ?? [])
    .map((item) => ({ label: item.label.trim(), items: item.items.trim() }))
    .filter((item) => item.label && item.items)

  const toolkitFromCms = (doc.toolkit ?? [])
    .map((group) => ({
      label: group.label.trim(),
      items: (group.items ?? []).map((item) => item.name.trim()).filter(Boolean),
    }))
    .filter((group) => group.label && group.items.length > 0)

  const funFromCms = (doc.funProjects ?? [])
    .map((project) => ({
      name: project.name.trim(),
      kind: project.kind.trim(),
      summary: project.summary.trim(),
      stack: project.stack?.trim() || '',
      href: project.github?.trim() || undefined,
      live: project.live?.trim() || undefined,
    }))
    .filter((project) => project.name && project.kind && project.summary)

  const resumeFromSocial = (doc.socialLinks ?? []).find((link) =>
    /resume|cv/i.test(link.name),
  )?.uri
  const resumeUrl = doc.resume?.url?.trim() || resumeFromSocial?.trim() || RESUME_URL

  return {
    about: {
      role: about?.role?.trim() || defaultAbout.role,
      title: about?.title?.trim() || defaultAbout.title,
      intro: about?.intro?.trim() || defaultAbout.intro,
      body: about?.body?.trim() || defaultAbout.body,
      highlights: highlights.length > 0 ? highlights : defaultAbout.highlights,
    },
    contact: {
      whatsappPhone,
      whatsappMessage,
      whatsappUrl,
    },
    resumeUrl,
    experience: experienceFromCms.length > 0 ? experienceFromCms : defaultExperience,
    experienceIntro: doc.experienceIntro?.trim() || cvSummary,
    profile,
    education: educationFromCms.length > 0 ? educationFromCms : defaultEducation,
    expertise: expertiseFromCms.length > 0 ? expertiseFromCms : defaultExpertise,
    toolkit: toolkitFromCms.length > 0 ? toolkitFromCms : toolkit,
    funProjects: funFromCms.length > 0 ? funFromCms : defaultFunProjects,
    community,
    footer: {
      copyrightName: doc.footer?.copyrightName?.trim() || defaultFooterBrand.copyrightName,
      location: doc.footer?.location?.trim() || defaultFooterBrand.location,
      timezone: doc.footer?.timezone?.trim() || defaultFooterBrand.timezone,
    },
    navLinks: (doc.navLinks ?? []).map((link, index) => ({
      id: link.id ?? String(index),
      name: link.name,
      href: link.href,
    })),
    socialLinks: (doc.socialLinks ?? []).map((link, index) => ({
      id: link.id ?? String(index),
      name: link.name,
      uri: /resume|cv/i.test(link.name) ? resumeUrl : link.uri,
    })),
    footerColumns: (doc.footerColumns ?? []).map((column, index) => ({
      id: column.id ?? String(index),
      title: column.title,
      links: (column.links ?? []).map((link, linkIndex) => ({
        id: link.id ?? String(linkIndex),
        label: link.label,
        url: link.url,
        isEmail: link.isEmail,
      })),
    })),
  }
}

export async function getProjects(options?: { featured?: boolean; limit?: number }) {
  const payload = await getPayloadClient()
  const where =
    options?.featured === undefined
      ? undefined
      : {
          featured: {
            equals: options.featured,
          },
        }

  const result = await payload.find({
    collection: 'projects',
    where,
    sort: 'order',
    limit: options?.limit ?? 100,
    depth: 1,
  })

  return result.docs.map((doc) => mapProject(doc as ProjectDoc))
}

export async function getProjectBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 1,
  })

  const doc = result.docs[0] as ProjectDoc | undefined
  if (!doc) return null

  return mapProject(doc)
}

export async function getArticles(options?: {
  limit?: number
  section?: WritingSection
}) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'articles',
    sort: '-publishedAt',
    limit: 100,
    depth: 1,
  })

  const articles = result.docs
    .map((doc) => mapArticle(doc as ArticleDoc))
    .filter((article) => (options?.section ? article.section === options.section : true))

  return typeof options?.limit === 'number' ? articles.slice(0, options.limit) : articles
}

export async function getArticleBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'articles',
    where: {
      and: [{ slug: { equals: slug } }, { kind: { equals: 'full' } }],
    },
    limit: 1,
    depth: 1,
  })

  const doc = result.docs[0] as ArticleDoc | undefined
  if (!doc) return null

  return mapArticle(doc)
}

export async function getSiteSettings(): Promise<CmsSiteSettings> {
  const payload = await getPayloadClient()
  const doc = await payload.findGlobal({
    slug: 'site-settings',
    depth: 0,
  })

  return mapSiteSettings(doc as SiteSettingsDoc)
}

export type TailoredPageRecord = {
  slug: string
  audience: string
  headline: string
  lede: string
  skills: string[]
  projectSlugs: string[]
  experienceCompany: string
}

function mapTailoredPage(doc: {
  slug: string
  audience: string
  headline: string
  lede: string
  skills?: Array<string | null> | null
  projectSlugs?: Array<{ slug?: string | null } | string> | null
  experienceCompany?: string | null
}): TailoredPageRecord {
  const projectSlugs = (doc.projectSlugs ?? [])
    .map((item) => (typeof item === 'string' ? item : item.slug))
    .filter((slug): slug is string => Boolean(slug))
  const skills = (doc.skills ?? []).filter((skill): skill is string => Boolean(skill?.trim()))

  return {
    slug: doc.slug,
    audience: doc.audience,
    headline: doc.headline,
    lede: doc.lede,
    skills,
    projectSlugs,
    experienceCompany: doc.experienceCompany ?? '',
  }
}

export async function getTailoredPage(slug: string): Promise<TailoredPageRecord | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'tailored-pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })

  const doc = result.docs[0]
  if (!doc) return null
  return mapTailoredPage(doc)
}

export async function createTailoredPage(input: {
  jobTitle: string
  description: string
}): Promise<TailoredPageRecord> {
  const payload = await getPayloadClient()
  const [projects, settings] = await Promise.all([getProjects(), getSiteSettings()])
  const copy = tailorPortfolio({
    jobTitle: input.jobTitle,
    description: input.description,
    projects,
    experience: settings.experience,
  })
  const slug = tailorSlug(copy.audience)

  const doc = await payload.create({
    collection: 'tailored-pages',
    overrideAccess: true,
    data: {
      slug,
      audience: copy.audience,
      headline: copy.headline,
      lede: copy.lede,
      skills: copy.skills,
      projectSlugs: copy.projectSlugs.map((projectSlug) => ({ slug: projectSlug })),
      experienceCompany: copy.experienceCompany,
    },
  })

  return mapTailoredPage(doc)
}
