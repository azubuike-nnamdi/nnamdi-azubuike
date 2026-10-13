'use client'

import type { Article } from '@/lib/definitions'
import { tidyNoteText } from '@/lib/writing'
import Link from 'next/link'

type ArticlesProps = {
  articles: Article[]
  heading?: string
  intro?: string
  linked?: boolean
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

const Articles = ({
  articles,
  heading = 'Notes',
  intro = 'Written from delivery, for people who have to act on it.',
  linked = true,
}: ArticlesProps) => {
  return (
    <section className="fade-up" style={{ animationDelay: '220ms' }}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{heading}</h2>
        {linked && heading === 'Notes' ? (
          <Link href="/notes" className="section-more">
            All notes →
          </Link>
        ) : null}
      </div>
      <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">{intro}</p>

      <ul className="space-y-7">
        {articles.map((article) => {
          const href = article.href || article.uri || '#'
          const isExternal = article.kind !== 'full'
          const body = (
            <>
              <p className="mb-1.5 text-[0.8125rem] uppercase tracking-[0.16em] text-muted-foreground">
                {article.noteTypeLabel || 'Technical'}
              </p>

              <h3 className="line-clamp-2 font-display text-2xl font-medium tracking-tight text-foreground group-hover:underline group-hover:decoration-foreground/30 group-hover:underline-offset-4">
                {tidyNoteText(article.title)}
              </h3>

              {article.desc ? (
                <p className="mt-1.5 line-clamp-2 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
                  {tidyNoteText(article.desc)}
                </p>
              ) : null}

              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-muted-foreground">
                <span>{formatShortDate(article.publishedAt || article.date)}</span>
                <span className="opacity-40">·</span>
                <span>{article.readTime} min</span>
              </div>
            </>
          )

          return (
            <li key={article.id}>
              {linked ? (
                <Link
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group block"
                >
                  {body}
                </Link>
              ) : (
                <div className="group block">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Articles
