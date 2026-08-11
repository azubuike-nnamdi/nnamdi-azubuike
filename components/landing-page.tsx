'use client'

import Articles from './article/articles'
import FeatureProject from './featured-project'
import { CONTACT_URL, PROJECT_URL } from '@/config/routes'
import {
  defaultAbout,
  renderHighlightedText,
  renderLinkedText,
  type CmsAbout,
} from '@/lib/about'
import type { Article, ProjectDataType } from '@/lib/definitions'
import Link from 'next/link'

type LandingPageProps = {
  projects: ProjectDataType[]
  articles: Article[]
  about?: CmsAbout
  whatsappUrl?: string
}

export default function LandingPage({
  projects,
  articles,
  about = defaultAbout,
  whatsappUrl = '',
}: LandingPageProps) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section className="fade-up max-w-2xl" style={{ animationDelay: '60ms' }}>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-highlight sm:text-5xl">
          Nnamdi Azubuike
        </h1>
        <p className="mt-3 text-base text-foreground/90 sm:text-lg">
          <span className="text-mark">{about.role}</span>
          <span className="text-muted-foreground"> · </span>
          {about.title}
        </p>
        <div className="mt-3 h-px w-16 bg-highlight" />

        <div className="mt-8 space-y-5 text-[1.05rem] leading-8 text-foreground/90 sm:text-lg sm:leading-9">
          <p>{renderHighlightedText(about.intro, about.highlights)}</p>
          <p className="text-muted-foreground">{renderLinkedText(about.body)}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={CONTACT_URL}
            className="inline-flex items-center rounded-full border border-highlight bg-highlight/10 px-4 py-2 text-sm font-medium text-highlight transition-colors hover:bg-highlight/20"
          >
            Get in touch
          </Link>
          {whatsappUrl ? (
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-chip"
            >
              WhatsApp
            </Link>
          ) : null}
          <Link href={PROJECT_URL} className="nav-chip">
            /projects
          </Link>
        </div>
      </section>

      <FeatureProject projects={projects} />
      <Articles articles={articles} />
    </div>
  )
}
