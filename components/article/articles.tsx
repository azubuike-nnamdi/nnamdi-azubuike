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
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h2 className="section-label">recent posts</h2>
        <Link href="/articles" className="text-sm text-muted-foreground transition-colors hover:text-highlight">
          see all
        </Link>
      </div>

      <ul className="space-y-7">
        {articles.map((article) => {
          const href = article.href || article.uri || '#'
          const isExternal = article.kind !== 'full'
          const categories = article.category ?? []

          return (
            <li key={article.id}>
              <Link
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                  <span>{article.readTime} min read</span>
                  <span className="opacity-40">|</span>
                  <span>{formatShortDate(article.date)}</span>
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-highlight sm:text-xl">
                  {article.title}
                </h3>

                {article.desc ? (
                  <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
                    {article.desc}
                  </p>
                ) : null}

                {categories.length > 0 ? (
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-glow/90">
                    {categories.slice(0, 3).map((category) => (
                      <span key={category}>#{category.toLowerCase()}</span>
                    ))}
                  </div>
                ) : null}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Articles
