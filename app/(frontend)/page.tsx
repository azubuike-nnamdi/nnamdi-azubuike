import LandingPage from '@/components/landing-page'
import { getArticles, getProjects, getSiteSettings } from '@/lib/cms'

export default async function Page() {
  const [projects, articles, siteSettings] = await Promise.all([
    getProjects({ featured: true, limit: 4 }),
    getArticles({ limit: 4 }),
    getSiteSettings(),
  ])

  const featuredProjects =
    projects.length > 0 ? projects : await getProjects({ limit: 4 })

  return (
    <LandingPage
      projects={featuredProjects}
      articles={articles}
      about={siteSettings.about}
      experience={siteSettings.experience}
      whatsappUrl={siteSettings.contact.whatsappUrl}
    />
  )
}
