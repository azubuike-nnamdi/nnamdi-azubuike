import LandingPage from '@/components/landing-page'
import { getArticles, getProjects, getSiteSettings, getTailoredPage } from '@/lib/cms'
import { audienceLabel, tailoredIntro } from '@/lib/tailor'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getTailoredPage(slug)

  if (!page) {
    return { title: 'Page not found', robots: { index: false, follow: false } }
  }

  return {
    title: audienceLabel(page.audience),
    description: tailoredIntro(page.lede),
    robots: { index: false, follow: false },
  }
}

export default async function TailoredPortfolioPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getTailoredPage(slug)
  if (!page) notFound()

  const [projects, articles, siteSettings] = await Promise.all([
    getProjects(),
    getArticles({ section: 'note', limit: 4 }),
    getSiteSettings(),
  ])

  const bySlug = new Map(projects.map((project) => [project.slug, project]))
  const selected = page.projectSlugs
    .map((projectSlug) => bySlug.get(projectSlug))
    .filter((project) => project !== undefined)

  const experience = [...siteSettings.experience]
  const matchIndex = experience.findIndex((item) => item.company === page.experienceCompany)
  if (matchIndex > 0) {
    const [match] = experience.splice(matchIndex, 1)
    experience.unshift(match)
  }

  return (
    <LandingPage
      projects={selected.length > 0 ? selected : projects.slice(0, 4)}
      articles={articles}
      about={siteSettings.about}
      experience={experience}
      whatsappUrl={siteSettings.contact.whatsappUrl}
      whatsappPhone={siteSettings.contact.whatsappPhone}
      resumeUrl={siteSettings.resumeUrl}
      onePage
      heroOverride={{
        eyebrow: audienceLabel(page.audience),
        headline: page.headline,
        lede: tailoredIntro(page.lede),
        skills: page.skills,
      }}
    />
  )
}
