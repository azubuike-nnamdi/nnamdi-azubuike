import WritingIndex from '@/components/writing/writing-index'
import { getArticles } from '@/lib/cms'
import type { Metadata } from 'next'

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
      dek="Shorter writing from the work, filed by type."
      empty="No notes yet. Add one in Payload and set its section to Note."
    />
  )
}
