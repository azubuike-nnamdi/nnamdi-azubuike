import { HomeArticles } from '@/components/article/home-articles'
import { getArticles } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Technical writing by Nnamdi Azubuike on frontend engineering, tooling, APIs, and production systems.',
  openGraph: {
    title: 'Articles | Nnamdi Azubuike',
    description:
      'Notes and guides on React, Next.js, tooling, and shipping software in production.',
    url: 'https://www.nnamdiazubuike.dev/articles',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Nnamdi Azubuike',
    description:
      'Notes and guides on React, Next.js, tooling, and shipping software in production.',
    images: ['/og.png'],
  },
}

export default async function Page() {
  const articles = await getArticles()

  return (
    <div>
      <HomeArticles articles={articles} />
    </div>
  )
}
