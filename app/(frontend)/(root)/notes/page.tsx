import WritingIndex from '@/components/writing/writing-index'
import { INSIGHTS_URL } from '@/config/routes'
import { getArticles } from '@/lib/cms'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Shorter technical writing from Nnamdi Azubuike on systems, delivery, and decisions that had to hold in production.',
  openGraph: {
    title: 'Notes | Nnamdi Azubuike',
    description:
      'Shorter technical writing on systems, delivery, and decisions that had to hold in production.',
    url: 'https://www.nnamdiazubuike.dev/notes',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notes | Nnamdi Azubuike',
    description:
      'Shorter technical writing on systems, delivery, and decisions that had to hold in production.',
    images: ['/og.png'],
  },
}

export default async function Page() {
  const articles = await getArticles({ section: 'note' })

  return (
    <WritingIndex
      items={articles}
      eyebrow="Writing"
      title="Notes"
      dek="Shorter writing from the work, filed by type. Everything here so far is technical."
      aside={
        <>
          Looking for the longer pieces? They live in{' '}
          <Link href={INSIGHTS_URL} className="text-link">
            Insights
          </Link>
          .
        </>
      }
      empty="No notes yet. Add one in Payload and set its section to Note."
    />
  )
}
