'use client'

import Articles from './article/articles'
import FunProjects from './fun-projects'
import ContactPage from './contact/contact-page'
import Experience from './experience'
import FeatureProject from './featured-project'
import Portrait from './portrait'
import PracticeAreas from './practice-areas'
import { CONTACT_URL, PROJECT_URL } from '@/config/routes'
import {
  defaultAbout,
  renderLinkedText,
  type CmsAbout,
} from '@/lib/about'
import type { CmsExperienceItem } from '@/lib/experience'
import type { FunProject } from '@/lib/fun-projects'
import type { Article, ProjectDataType } from '@/lib/definitions'
import { positioning, resolveHeroCopy } from '@/lib/positioning'
import Link from 'next/link'

type HeroOverride = {
  eyebrow: string
  headline: string
  lede: string
  skills?: string[]
}

type LandingPageProps = {
  projects: ProjectDataType[]
  articles: Article[]
  about?: CmsAbout
  experience?: CmsExperienceItem[]
  funProjects?: FunProject[]
  whatsappUrl?: string
  whatsappPhone?: string
  resumeUrl?: string
  heroOverride?: HeroOverride
  onePage?: boolean
}

export default function LandingPage({
  projects,
  articles,
  about = defaultAbout,
  experience = [],
  funProjects = [],
  whatsappUrl = '',
  whatsappPhone = '',
  resumeUrl = '',
  heroOverride,
  onePage = false,
}: LandingPageProps) {
  const hero = heroOverride
    ? { headline: heroOverride.headline, lede: heroOverride.lede, body: '' }
    : resolveHeroCopy(about)
  const eyebrow = heroOverride?.eyebrow ?? positioning.eyebrow
  const contactHref = onePage ? '#contact' : CONTACT_URL
  const workHref = onePage ? '#work' : PROJECT_URL

  return (
    <div id={onePage ? 'top' : undefined} className="space-y-14 sm:space-y-20">
      {/* No fade-up on the hero — opacity:0 blocks LCP (PageSpeed NO_LCP). */}
      <section className="grid gap-8 pt-6 sm:grid-cols-[minmax(0,1fr)_13rem] sm:items-center sm:gap-8 sm:pt-8 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-14 md:pt-10">
        <div>
          <p className="kicker">{eyebrow}</p>
          {heroOverride?.skills && heroOverride.skills.length > 0 ? (
            <p className="kicker mt-3 max-w-xl">
              {heroOverride.skills.join(' · ')}
            </p>
          ) : null}
          <h1 className="page-title mt-3">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/90">{hero.lede}</p>
          {hero.body ? (
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              {renderLinkedText(hero.body)}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href={contactHref} className="btn-primary">
              Start a conversation
            </Link>
            <Link href={workHref} className="text-link text-sm">
              Selected work
            </Link>
            {whatsappUrl ? (
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                WhatsApp
              </Link>
            ) : null}
          </div>
        </div>
        <div className="order-first sm:order-none">
          <Portrait />
        </div>
      </section>

      <dl className="grid grid-cols-3 border-y border-foreground/80">
        {positioning.proof.map((item) => (
          <div key={item.label} className="px-0 py-5 sm:px-4 sm:first:pl-0">
            <dt className="font-display text-3xl font-medium sm:text-4xl">{item.value}</dt>
            <dd className="mt-1 text-[0.8125rem] uppercase tracking-[0.14em] text-muted-foreground">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>

      {onePage ? (
        <section id="about" className="scroll-mt-8">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            The path into the role.
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[0.95rem] leading-7 text-muted-foreground">
            <p>
              I lead engineering at MTN Nigeria, and I still write the code. The products are in{' '}
              <Link href="#work" className="text-link">
                selected work
              </Link>
              .
            </p>
            <p>
              I started with a frontend internship on a gift-card platform, then payments in PHP and
              Laravel, then Next.js on products that take real money and real traffic. At MTN I
              started on the frontend. I now lead the engineering.
            </p>
            <p>
              Contract work has run alongside that. At Numoni I built the merchant and admin
              platforms for loyalty, rewards, and payments. At Weavii I built an artist–fan product,
              and the UI system and the tests were part of the feature. I stay with a product after
              it is in production.
            </p>
          </div>
        </section>
      ) : null}

      <PracticeAreas />
      <div id={onePage ? 'work' : undefined} className={onePage ? 'scroll-mt-8' : undefined}>
        <FeatureProject projects={projects} linked={!onePage} />
      </div>
      <div id={onePage ? 'experience' : undefined} className={onePage ? 'scroll-mt-8' : undefined}>
        <Experience
          experience={experience}
          limit={onePage ? undefined : 1}
          highlightLimit={onePage ? undefined : 3}
          showViewMore={!onePage}
          showBadge={false}
        />
      </div>
      <div id={onePage ? 'notes' : undefined} className={onePage ? 'scroll-mt-8' : undefined}>
        <Articles articles={articles} linked={!onePage} />
      </div>
      {onePage ? (
        <div id="fun" className="scroll-mt-8">
          <FunProjects projects={funProjects} showHeading={false} />
        </div>
      ) : null}
      <section id={onePage ? 'contact' : undefined} className="scroll-mt-8 border-t border-foreground/80 pt-10">
        <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Have a product that needs direction?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          For a product estate, a payments platform, or a team that has to reach production and stay there.
        </p>
        {onePage ? (
          <div className="mt-10">
            <ContactPage
              whatsappUrl={whatsappUrl}
              whatsappPhone={whatsappPhone}
              resumeUrl={resumeUrl}
              showIntro={false}
            />
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href={CONTACT_URL} className="btn-primary">
              Start a conversation
            </Link>
            {whatsappUrl ? (
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                WhatsApp
              </Link>
            ) : null}
          </div>
        )}
      </section>
    </div>
  )
}
