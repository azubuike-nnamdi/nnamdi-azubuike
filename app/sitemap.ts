import { getArticles, getProjects } from '@/lib/cms'
import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.nnamdiazubuike.dev'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, articles] = await Promise.all([getProjects(), getArticles()])

  const staticRoutes = ['', '/projects', '/notes', '/insights', '/about', '/experience', '/contact']

  const projectRoutes = projects
    .filter((project) => project.slug)
    .map((project) => `/projects/${project.slug}`)

  const articleRoutes = articles
    .filter((article) => article.kind === 'full' && article.slug)
    .map((article) => `/articles/${article.slug}`)

  return [...staticRoutes, ...projectRoutes, ...articleRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' || path === '/about' ? 1 : 0.7,
  }))
}
