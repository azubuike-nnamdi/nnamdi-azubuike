import { getPayload } from 'payload'
import config from '../payload.config'
import {
  ArticlesData,
  FooterData,
  NavData,
  PortfolioData,
  ProjectData,
} from './seed-data'
import {
  ARTICLE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PROJECT_URL,
  RESUME_URL,
  TWITTER_URL,
} from '../config/routes'
import { defaultExperience } from '../lib/experience'

function parseLooseDate(value: string): string {
  const normalized = value
    .replace(/,/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  const parsed = new Date(normalized)
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString()
  }

  // Handle formats like "February, 22, 2023" or "October, 15 2022"
  const match = normalized.match(/([A-Za-z]+)\s+(\d{1,2})\s+(\d{4})/)
  if (match) {
    const fallback = new Date(`${match[1]} ${match[2]}, ${match[3]}`)
    if (!Number.isNaN(fallback.getTime())) {
      return fallback.toISOString()
    }
  }

  return new Date().toISOString()
}

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding site settings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      about: {
        role: 'Frontend Engineer',
        title: 'Team Lead',
        intro:
          "For 6+ years, I've built and shipped software across telecom, financial systems, and enterprise operations — solving problems where reliability, scalability, security, and user experience matter.",
        body:
          "I've led and worked hands-on across platforms serving over 1 million users, from system architecture and backend services to APIs and frontend applications. I go beyond marking tickets as done — I think about the bigger picture: how a system is designed, how it scales, how secure and resilient it is, and how easily it can evolve as the business grows.",
        highlights: [
          { term: 'financial systems' },
          { term: '1 million' },
          { term: 'telecom' },
        ],
      },
      contact: {
        whatsappPhone: '2347034947199',
        whatsappMessage:
          'Hello Nnamdi, I came from your website and would like to talk.',
      },
      experience: defaultExperience.map((item) => ({
        company: item.company,
        role: item.role,
        badge: item.badge,
        period: item.period,
        summary: item.summary,
        highlights: item.highlights.map((text) => ({ text })),
      })),
      footer: {
        copyrightName: 'NNAMDI AZUBUIKE',
        location: 'LAGOS, NIGERIA',
        timezone: 'Africa/Lagos',
      },
      navLinks: NavData.map((item) => ({
        name: item.name,
        href: item.href,
      })),
      socialLinks: PortfolioData.map((item) => ({
        name: item.name,
        uri: item.uri,
      })),
      footerColumns: FooterData.map((column) => {
        const links = Object.keys(column)
          .filter((key) => key !== 'id' && key !== 'title' && !key.endsWith('Uri'))
          .flatMap((key) => {
            const uri = column[`${key}Uri`]
            const label = column[key]
            if (typeof uri !== 'string' || typeof label !== 'string') return []
            return [
              {
                label,
                url: uri,
                isEmail: key === 'email',
              },
            ]
          })

        return {
          title: column.title,
          links,
        }
      }),
    },
  })

  console.log('Seeding projects...')
  const existingProjects = await payload.find({
    collection: 'projects',
    limit: 1000,
  })

  for (const project of existingProjects.docs) {
    await payload.delete({
      collection: 'projects',
      id: project.id,
    })
  }

  for (const [index, project] of ProjectData.entries()) {
    await payload.create({
      collection: 'projects',
      data: {
        name: project.name.trim(),
        slug: project.slug || project.name.trim().toLowerCase().replace(/\s+/g, '-'),
        proof: project.proof,
        problem: project.problem,
        role: project.role,
        outcome: project.outcome,
        decisions: project.decisions,
        metrics: project.metrics,
        desc: project.desc,
        action: project.action,
        uri: project.uri,
        seoDescription: project.seoDescription || project.proof,
        imageUrl: project.imageUrl,
        technologies: project.technologies.map((name) => ({ name })),
        order: index + 1,
        featured: index < 4,
      },
    })
  }

  console.log('Seeding articles...')
  const existingArticles = await payload.find({
    collection: 'articles',
    limit: 1000,
  })

  for (const article of existingArticles.docs) {
    await payload.delete({
      collection: 'articles',
      id: article.id,
    })
  }

  for (const [index, article] of ArticlesData.entries()) {
    await payload.create({
      collection: 'articles',
      data: {
        title: article.title,
        kind: 'external',
        externalUrl: article.uri,
        publishedAt: parseLooseDate(article.date),
        readTime: article.readTime,
        summary: article.desc,
        categories: (article.category ?? []).map((name) => ({ name })),
        imageUrl: article.image,
        order: index + 1,
      },
    })
  }

  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (existingUsers.totalDocs === 0) {
    const email = process.env.PAYLOAD_ADMIN_EMAIL || 'admin@nnamdiazubuike.dev'
    const password = process.env.PAYLOAD_ADMIN_PASSWORD || 'changeme123'

    console.log(`Creating admin user ${email}...`)
    await payload.create({
      collection: 'users',
      data: {
        email,
        password,
      },
    })
  }

  console.log('Seed complete.')
  console.log(`Nav defaults: ${PROJECT_URL}, ${ARTICLE_URL}`)
  console.log(`Social defaults: ${GITHUB_URL}, ${TWITTER_URL}, ${LINKEDIN_URL}, ${RESUME_URL}`)
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
