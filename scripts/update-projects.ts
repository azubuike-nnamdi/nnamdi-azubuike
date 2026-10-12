import { getPayload } from 'payload'
import config from '../payload.config'
import { ProjectData } from './seed-data'
import { slugify } from '../lib/project'
import { defaultExperience } from '../lib/experience'
import { defaultFooterBrand } from '../lib/cms'

async function main() {
  const payload = await getPayload({ config })

  console.log('Upserting experience in site settings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      about: {
        role: 'Software Engineering Lead',
        title: 'MTN Nigeria',
        intro:
          "I'm Nnamdi Azubuike. I lead engineering at MTN Nigeria across self-service, messaging, connectivity, and payments. More than a million people use those products in a month, and I stay with the shared code through release.",
        body: '',
        highlights: [{ term: '1 million' }, { term: 'MTN Nigeria' }, { term: 'payments' }],
      },
      experience: defaultExperience.map((item) => ({
        company: item.company,
        role: item.role,
        badge: item.badge,
        period: item.period,
        summary: item.summary,
        highlights: item.highlights.map((text) => ({ text })),
      })),
      footer: defaultFooterBrand,
    },
  })

  console.log('Upserting project case-study fields...')

  for (const [index, project] of ProjectData.entries()) {
    const name = project.name.trim()
    const slug = project.slug || slugify(name)

    const existing = await payload.find({
      collection: 'projects',
      where: {
        or: [{ name: { equals: name } }, { slug: { equals: slug } }],
      },
      limit: 1,
      depth: 0,
    })

    const data = {
      name,
      slug,
      proof: project.proof,
      problem: project.problem,
      role: project.role,
      outcome: project.outcome,
      decisions: project.decisions,
      metrics: project.metrics,
      desc: project.desc,
      action: project.action,
      uri: project.uri,
      // Clear static overrides so live URL screenshots are used by default.
      imageUrl: project.imageUrl ?? null,
      seoDescription: project.seoDescription || project.proof,
      technologies: project.technologies.map((techName) => ({ name: techName })),
      order: index + 1,
      featured: index < 4,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'projects',
        id: existing.docs[0].id,
        data,
      })
      console.log(`  updated ${name}`)
    } else {
      await payload.create({
        collection: 'projects',
        data,
      })
      console.log(`  created ${name}`)
    }
  }

  console.log('Done.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
