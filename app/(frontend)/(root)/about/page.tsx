import { presentedRole } from '@/components/experience'
import Portrait from '@/components/portrait'
import {
  EMAIL_URL,
  EXPERIENCE_URL,
  LINKEDIN_URL,
  NOTES_URL,
  PROJECT_URL,
} from '@/config/routes'
import { getSiteSettings } from '@/lib/cms'
import { defaultEducation } from '@/lib/experience'
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

const practice = [
  {
    title: 'Surfaces',
    detail:
      'The journeys a customer has to finish: plan, pay, account, reward, book. React and Next.js, with TanStack Query and Zustand where the cache and the local state have to agree after a mutation.',
  },
  {
    title: 'The shared layer',
    detail:
      'Several products in one monorepo. Shared auth, payment pieces, and design-system utilities, so a fix in the library reaches every app that imports it. Nx and Turbo carry the build.',
  },
  {
    title: 'The week after launch',
    detail:
      'SIT, UAT, and production stay with the same people who shipped the release. Session hardening, payment guards, rate limits, and OpenTelemetry are part of that week.',
  },
]

export default async function Page() {
  const settings = await getSiteSettings()

  return (
    <article className="fade-up">
      <header className="grid gap-10 md:grid-cols-[minmax(0,1fr)_14rem] md:items-end md:gap-14">
        <div>
          <p className="kicker">Profile</p>
          <h1 className="page-title mt-3">Nnamdi Azubuike</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            Software Engineering Lead at MTN Nigeria. I still sit in the code: reviews, shared
            libraries, and the release after it is live.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Product engineering · Platforms · Production · Lagos · since 2021
          </p>
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
        <div className="order-first flex justify-center md:order-0 md:justify-end">
          <Portrait />
        </div>
      </header>

      <section id="overview" className="mt-20 max-w-2xl scroll-mt-8">
        <p className="kicker">Overview</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          The seat, and the path into it.
        </h2>
        <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-muted-foreground">
          <p>
            I hold the lead seat on a telco product estate, and I still write the code that seat
            depends on. The record of the products is on{' '}
            <Link href={PROJECT_URL} className="text-link">
              the work
            </Link>
            .
          </p>
          <p>
            The path started as a frontend internship on a gift-card platform, then payments work
            in PHP and Laravel, then Next.js on products that take real money and real traffic.
            The MTN role began in that frontend work. It is now the lead seat.
          </p>
          <p>
            Contract seats have sat beside it. Numoni was the merchant and admin platforms for
            loyalty, rewards, and payments. Weavii was an artist–fan product, with the UI system
            and the tests treated as part of the feature. Across those seats the constant is
            production ownership.
          </p>
        </div>
      </section>

      <section id="practice" className="mt-20 scroll-mt-8">
        <p className="kicker">Practice</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          What I still build.
        </h2>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
          The hands-on part: the surfaces, the shared layer under them, and the week after a
          release.
        </p>
        <ol className="mt-8 max-w-2xl border-t border-foreground/80">
          {practice.map((item, index) => (
            <li key={item.title} className="border-b border-border py-6">
              <p className="text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
          Working stack: TypeScript, React, Next.js, TanStack Query, Zustand, Nx, Turbo, Jest,
          OpenTelemetry.
        </p>
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
          {defaultEducation.map((item) => (
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
          Outside the role I stay close to{' '}
          <a
            href="https://gdg.community.dev/gdg-ilorin/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GDG Ilorin
          </a>
          ,{' '}
          <a
            href="https://gdg.community.dev/gdg-ibadan/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GDG Ibadan
          </a>
          , and{' '}
          <a
            href="https://kwarabuild.com/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kwarabuild
          </a>
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
