import { RichText } from '@payloadcms/richtext-lexical/react'
import { getArticleBySlug } from '@/lib/cms'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article not found' }
  }

  return {
    title: article.title,
    description: article.summary || undefined,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="fade-up mx-auto max-w-2xl">
      <Link href="/articles" className="soft-link text-sm">
        ← articles
      </Link>

      <header className="mt-8 mb-10 space-y-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted-foreground">
          <span>{article.readTime} min read</span>
          <span className="text-border">|</span>
          <span>{article.date}</span>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-5xl">
          {article.title}
        </h1>
        {article.summary ? (
          <p className="text-lg leading-8 text-muted-foreground">{article.summary}</p>
        ) : null}
      </header>

      {article.image ? (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-border">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        </div>
      ) : null}

      {article.content ? (
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-display prose-a:text-highlight">
          <RichText data={article.content as never} />
        </div>
      ) : null}
    </article>
  )
}
