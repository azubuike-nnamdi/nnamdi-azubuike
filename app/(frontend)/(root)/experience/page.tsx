import ExperienceLanding from '@/components/experience-landing'
import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Nnamdi Azubuike — Senior Frontend Engineer and Team Lead at MTN Nigeria, with prior roles at Weavii, Cellcore, and KudiGo.',
  openGraph: {
    title: 'Experience | Nnamdi Azubuike',
    description:
      'Team lead and senior frontend experience across MTN, Weavii, Cellcore, and KudiGo.',
    url: 'https://www.nnamdiazubuike.dev/experience',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Nnamdi Azubuike',
    description:
      'Team lead and senior frontend experience across MTN, Weavii, Cellcore, and KudiGo.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function Page() {
  const siteSettings = await getSiteSettings()

  return <ExperienceLanding experience={siteSettings.experience} />
}
