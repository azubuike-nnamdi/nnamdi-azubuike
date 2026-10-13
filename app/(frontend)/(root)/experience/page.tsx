import ExperienceLanding from '@/components/experience-landing'
import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Nnamdi Azubuike — Software Engineering Lead at MTN Nigeria, with earlier product work at Numoni, Weavii, Cellcore, and Kudigo.',
  openGraph: {
    title: 'Experience | Nnamdi Azubuike',
    description:
      'Software Engineering Lead at MTN Nigeria, with earlier work at Numoni, Weavii, Cellcore, and Kudigo.',
    url: 'https://www.nnamdiazubuike.dev/experience',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Nnamdi Azubuike',
    description:
      'Software Engineering Lead at MTN Nigeria, with earlier work at Numoni, Weavii, Cellcore, and Kudigo.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function Page() {
  const siteSettings = await getSiteSettings()

  return (
    <ExperienceLanding
      experience={siteSettings.experience}
      intro={siteSettings.experienceIntro}
      education={siteSettings.education}
      expertise={siteSettings.expertise}
      toolkit={siteSettings.toolkit}
      resumeUrl={siteSettings.resumeUrl}
    />
  )
}
