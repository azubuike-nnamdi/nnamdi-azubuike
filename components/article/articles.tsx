'use client'

import type { Article } from '@/lib/definitions'
import Link from 'next/link'

type ArticlesProps = {
  articles: Article[]
}

function formatShortDate(date: string) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <section className="fade-up" style={{ animationDelay: '220ms' }}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Notes</h2>
        <Link href="/notes" className="text-sm text-muted-foreground hover:text-foreground">
          All notes
        </Link>
      </div>
      <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
        Written from delivery, for people who have to act on it.
      </p>

      <ul className="space-y-7">
        {articles.map((article) => {
          const href = article.href || article.uri || '#'
          const isExternal = article.kind !== 'full'

          return (
            <li key={article.id}>
              <Link
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <p className="mb-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {article.noteTypeLabel || 'Technical'}
                </p>

                <h3 className="font-display text-2xl font-medium tracking-tight text-foreground group-hover:underline group-hover:decoration-foreground/30 group-hover:underline-offset-4">
                  {article.title}
                </h3>

                {article.desc ? (
                  <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
                    {article.desc}
                  </p>
                ) : null}

                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                  <span>{formatShortDate(article.publishedAt || article.date)}</span>
                  <span className="opacity-40">·</span>
                  <span>{article.readTime} min</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Articles
