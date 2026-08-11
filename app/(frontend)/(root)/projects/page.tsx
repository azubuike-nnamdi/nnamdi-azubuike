import ProjectLanding from '@/components/projects/project-landing'
import { getProjects } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Products and platforms Nnamdi Azubuike has helped design and ship — including MTN self-service, FibreX, Numoni, and more.',
  openGraph: {
    title: 'Projects | Nnamdi Azubuike',
    description:
      'Products and platforms shipped in production — self-service, payments, and product frontends.',
    url: 'https://www.nnamdiazubuike.dev/projects',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Nnamdi Azubuike',
    description:
      'Products and platforms shipped in production — self-service, payments, and product frontends.',
    images: ['/og.png'],
  },
}

export default async function Page() {
  const projects = await getProjects()

  return <ProjectLanding projects={projects} />
}
