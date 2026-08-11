'use client'

import { useState } from 'react'
import type { Article } from '@/lib/definitions'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { ArticleCard } from './article-card'
import Link from 'next/link'

type ArticlesGridProps = {
  articles: Article[]
}

export const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(3)

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  const featuredArticle = articles[0]
  const secondaryArticles = articles.slice(1, 3)
  const remainingArticles = articles.slice(3, 3 + visibleCount)

  if (!featuredArticle) {
    return (
      <div className="mx-auto px-4 py-12 text-center text-muted-foreground">
        No articles published yet.
      </div>
    )
  }

  return (
    <div className=" mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Articles & Insights</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sharing my thoughts and learnings about web development, design, and technology
        </p>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <Link
              href={featuredArticle.href || featuredArticle.uri || '#'}
              target={featuredArticle.kind !== 'full' ? '_blank' : undefined}
              className="block h-full"
            >
              <ArticleCard article={featuredArticle} variant="featured" className="h-full" />
            </Link>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {secondaryArticles.map((article) => (
              <Link
                href={article.href || article.uri || '#'}
                key={article.id}
                target={article.kind !== 'full' ? '_blank' : undefined}
                className="block"
              >
                <ArticleCard article={article} variant="compact" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-12 border-t border-border/50" />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingArticles.map((article) => (
            <Link
              href={article.href || article.uri || '#'}
              key={article.id}
              target={article.kind !== 'full' ? '_blank' : undefined}
              className="block"
            >
              <ArticleCard article={article} variant="regular" />
            </Link>
          ))}
        </div>

        {visibleCount < articles.length - 3 && (
          <div className="text-center mt-12">
            <Button onClick={handleViewMore} variant="outline" className="group">
              View More Articles
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
