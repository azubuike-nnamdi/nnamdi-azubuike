import { NOTES_URL } from '@/config/routes'
import { getArticleBySlug } from '@/lib/cms'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article not found' }
  }

  const description =
    article.summary?.trim() ||
    article.desc?.trim() ||
    `${article.title} — article by Nnamdi Azubuike`
  const images = article.image
    ? [{ url: article.image, width: 1200, height: 630, alt: article.title }]
    : [{ url: '/og.png', width: 1200, height: 630, alt: article.title }]

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      url: `https://www.nnamdiazubuike.dev/articles/${article.slug}`,
      type: 'article',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: images.map((image) => image.url),
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const indexHref = NOTES_URL
  const indexLabel = 'All notes'

  return (
    <article className="fade-up mx-auto max-w-2xl">
      <Link href={indexHref} className="text-sm text-muted-foreground hover:text-foreground">
        {indexLabel}
      </Link>

      <header className="mt-8 mb-10 space-y-4">
        <div className="k flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>{article.noteTypeLabel}</span>
          <span>·</span>
          <span>{article.readTime} min read</span>
          <span>·</span>
          <span>{article.date}</span>
        </div>
        <h1 className="page-title">{article.title}</h1>
        {article.summary ? (
          <p className="text-lg leading-8 text-muted-foreground">{article.summary}</p>
        ) : null}
      </header>

      {article.image ? (
        <div className="relative mb-10 aspect-video overflow-hidden rounded-xl border border-border">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        </div>
      ) : null}

      {article.content ? (
        <RichText data={article.content as never} />
      ) : null}
    </article>
  )
}
