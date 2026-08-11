import LandingPage from '@/components/landing-page'
import { getArticles, getProjects } from '@/lib/cms'

export default async function Page() {
  const [projects, articles] = await Promise.all([
    getProjects({ featured: true, limit: 4 }),
    getArticles({ limit: 4 }),
  ])

  const featuredProjects =
    projects.length > 0 ? projects : await getProjects({ limit: 4 })

  return <LandingPage projects={featuredProjects} articles={articles} />
}
