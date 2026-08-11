'use client'

import Articles from './article/articles'
import FeatureProject from './featured-project'
import type { Article, ProjectDataType } from '@/lib/definitions'
import Link from 'next/link'

type LandingPageProps = {
  projects: ProjectDataType[]
  articles: Article[]
}

export default function LandingPage({ projects, articles }: LandingPageProps) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section className="fade-up max-w-2xl" style={{ animationDelay: '60ms' }}>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-highlight sm:text-5xl">
          Nnamdi Azubuike
        </h1>
        <p className="mt-3 text-base text-foreground/90 sm:text-lg">
          Software Engineer,{' '}
          <span className="text-mark">Frontend Lead</span>, Product Builder
        </p>
        <div className="mt-3 h-px w-16 bg-highlight" />

        <div className="mt-8 space-y-5 text-[1.05rem] leading-8 text-foreground/90 sm:text-lg sm:leading-9">
          <p>
            I build products with code for real people — thoughtful interfaces and solid systems.
            I keep learning through{' '}
            <span className="text-mark">algorithms</span>,{' '}
            <span className="text-mark">functional programming</span>, and how{' '}
            <span className="text-mark">AI</span> can help us ship better software.
          </p>
          <p className="text-muted-foreground">
            I&apos;m a father to a beautiful daughter. Outside work, I write on my{' '}
            <Link href="/articles" className="soft-link">
              blog
            </Link>
            , ship side projects, and volunteer in communities that shaped me — giving back where I
            can.
          </p>
        </div>
      </section>

      <FeatureProject projects={projects} />
      <Articles articles={articles} />
    </div>
  )
}
