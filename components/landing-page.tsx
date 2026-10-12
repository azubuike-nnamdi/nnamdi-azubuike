'use client'

import Articles from './article/articles'
import Experience from './experience'
import FeatureProject from './featured-project'
import OperatingModel from './operating-model'
import Portrait from './portrait'
import PracticeAreas from './practice-areas'
import { CONTACT_URL, PROJECT_URL } from '@/config/routes'
import {
  defaultAbout,
  renderLinkedText,
  type CmsAbout,
} from '@/lib/about'
import type { CmsExperienceItem } from '@/lib/experience'
import type { Article, ProjectDataType } from '@/lib/definitions'
import { positioning, resolveHeroCopy } from '@/lib/positioning'
import Link from 'next/link'

type LandingPageProps = {
  projects: ProjectDataType[]
  articles: Article[]
  about?: CmsAbout
  experience?: CmsExperienceItem[]
  whatsappUrl?: string
}

export default function LandingPage({
  projects,
  articles,
  about = defaultAbout,
  experience = [],
  whatsappUrl = '',
}: LandingPageProps) {
  const hero = resolveHeroCopy(about)

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* No fade-up on the hero — opacity:0 blocks LCP (PageSpeed NO_LCP). */}
      <section className="grid gap-12 pt-8 md:grid-cols-[minmax(0,1fr)_16rem] md:items-center md:gap-14 md:pt-16">
        <div>
          <p className="kicker">{positioning.eyebrow}</p>
          <h1 className="page-title mt-3">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/90">{hero.lede}</p>
          {hero.body ? (
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              {renderLinkedText(hero.body)}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href={CONTACT_URL} className="text-link">
              Start a conversation
            </Link>
            <Link href={PROJECT_URL} className="text-link">
              Selected work
            </Link>
            {whatsappUrl ? (
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                WhatsApp
              </Link>
            ) : null}
          </div>
        </div>
        <div className="order-first flex justify-center md:order-none md:justify-end">
          <Portrait />
        </div>
      </section>

      <dl className="grid grid-cols-3 border-y border-foreground/80">
        {positioning.proof.map((item) => (
          <div key={item.label} className="px-0 py-5 sm:px-4 sm:first:pl-0">
            <dt className="font-display text-3xl font-medium sm:text-4xl">{item.value}</dt>
            <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>

      <OperatingModel />
      <PracticeAreas />
      <FeatureProject projects={projects} />
      <Experience experience={experience} limit={1} highlightLimit={3} showViewMore showBadge={false} />
      <Articles articles={articles} />

      <section className="border-t border-foreground/80 pt-12">
        <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          A portfolio that needs a direction.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          For a product estate, a payments platform, or a team that has to reach production and stay there.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href={CONTACT_URL} className="text-link">
            Start a conversation
          </Link>
          {whatsappUrl ? (
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              WhatsApp
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  )
}
