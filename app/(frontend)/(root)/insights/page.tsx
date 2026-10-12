import WritingIndex from '@/components/writing/writing-index'
import { NOTES_URL } from '@/config/routes'
import { getArticles } from '@/lib/cms'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Longer writing from Nnamdi Azubuike on architecture, delivery, and decisions a team has to live with.',
  openGraph: {
    title: 'Insights | Nnamdi Azubuike',
    description:
      'Longer writing on architecture, delivery, and decisions a team has to live with.',
    url: 'https://www.nnamdiazubuike.dev/insights',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Nnamdi Azubuike',
    description:
      'Longer writing on architecture, delivery, and decisions a team has to live with.',
    images: ['/og.png'],
  },
}

export default async function Page() {
  const articles = await getArticles({ section: 'insight' })

  return (
    <WritingIndex
      items={articles}
      eyebrow="Writing"
      title="Insights"
      dek="Longer writing: architecture, delivery, and the decisions a team has to live with."
      aside={
        <>
          Shorter pieces stay in{' '}
          <Link href={NOTES_URL} className="text-link">
            Notes
          </Link>
          .
        </>
      }
      empty="No insights yet."
    />
  )
}
