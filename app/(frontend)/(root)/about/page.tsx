import { presentedRole } from '@/components/experience'
import Portrait from '@/components/portrait'
import {
  COMMUNITY_URL,
  EMAIL_URL,
  EXPERIENCE_URL,
  LINKEDIN_URL,
  NOTES_URL,
} from '@/config/routes'
import { renderLinkedText } from '@/lib/about'
import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'
import Link from 'next/link'

const description =
  'Nnamdi Azubuike, Software Engineering Lead at MTN Nigeria: the path into the seat, the work he still builds, and where he has worked.'

export const metadata: Metadata = {
  title: 'About',
  description,
  openGraph: {
    title: 'About | Nnamdi Azubuike',
    description,
    url: 'https://www.nnamdiazubuike.dev/about',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Nnamdi Azubuike',
    description,
    images: ['/og.png'],
  },
}

const sections = [
  { href: '#overview', label: 'Overview' },
  { href: '#practice', label: 'Practice' },
  { href: '#record', label: 'Record' },
  { href: '#study', label: 'Study' },
]

export default async function Page() {
  const settings = await getSiteSettings()
  const profile = settings.profile

  return (
    <article className="fade-up">
      <header className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] sm:items-center">
        <div>
          <p className="kicker">Profile</p>
          <h1 className="page-title mt-3">Nnamdi Azubuike</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{profile.lede}</p>
          <p className="mt-4 text-sm text-muted-foreground">{profile.meta}</p>
          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="On this page">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="text-sm text-muted-foreground underline decoration-foreground/20 underline-offset-[6px] hover:text-foreground"
              >
                {section.label}
              </a>
            ))}
          </nav>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={EMAIL_URL} className="text-link">
              Email
            </a>
            {settings.contact.whatsappUrl ? (
              <a
                href={settings.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                WhatsApp
              </a>
            ) : null}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="order-first sm:order-0">
          <Portrait />
        </div>
      </header>

      <section id="overview" className="mt-20 max-w-2xl scroll-mt-8">
        <p className="kicker">Overview</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {profile.overviewHeading}
        </h2>
        <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-muted-foreground">
          {profile.overview.map((paragraph) => (
            <p key={paragraph}>{renderLinkedText(paragraph)}</p>
          ))}
        </div>
      </section>

      <section id="practice" className="mt-20 scroll-mt-8">
        <p className="kicker">Practice</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {profile.practiceHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
          {profile.practiceIntro}
        </p>
        <ol className="mt-8 max-w-2xl border-t border-foreground/80">
          {profile.practice.map((item, index) => (
            <li key={item.title} className="border-b border-border py-6">
              <p className="text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">{profile.stack}</p>
      </section>

      <section id="record" className="mt-20 scroll-mt-8">
        <p className="kicker">Record</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Where the seats have been.
        </h2>
        <ul className="mt-8 border-t border-foreground/80">
          {settings.experience.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-1 border-b border-border py-5 sm:grid-cols-[minmax(11rem,16rem)_1fr] sm:gap-8"
            >
              <div>
                <p className="font-display text-xl">{item.company}</p>
                {item.period ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
                ) : null}
              </div>
              <p className="text-sm leading-6 text-muted-foreground sm:pt-1">
                {presentedRole(item)}
                {item.summary ? ` · ${item.summary}` : ''}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link href={EXPERIENCE_URL} className="text-link">
            Full experience
          </Link>
        </p>
      </section>

      <section id="study" className="mt-20 max-w-2xl scroll-mt-8">
        <p className="kicker">Study</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Study, and the rooms around the work.
        </h2>
        <ul className="mt-8 border-t border-foreground/80">
          {settings.education.map((item) => (
            <li key={item.title} className="border-b border-border py-5">
              <p className="text-[0.95rem] text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution}
                {item.detail ? ` · ${item.detail}` : ''}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          The campus and community seats are on{' '}
          <Link href={COMMUNITY_URL} className="text-link">
            Community
          </Link>
          .
        </p>
      </section>

      <section className="mt-20 max-w-2xl border-t border-foreground/80 pt-12">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          If this is the person you meant to find.
        </h2>
        <p className="mt-4 text-[0.95rem] leading-7 text-muted-foreground">
          The shorter writing is in{' '}
          <Link href={NOTES_URL} className="text-link">
            Notes
          </Link>
          . For a system, a team, or a seat,{' '}
          <a href={EMAIL_URL} className="text-link">
            email
          </a>
          {settings.contact.whatsappUrl ? (
            <>
              {' '}
              or{' '}
              <a
                href={settings.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                WhatsApp
              </a>
            </>
          ) : null}{' '}
          is the direct line.
        </p>
      </section>
    </article>
  )
}
