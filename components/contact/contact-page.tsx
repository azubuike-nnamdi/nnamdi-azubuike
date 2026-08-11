import {
  EMAIL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  TWITTER_URL,
} from '@/config/routes'
import Link from 'next/link'

const channels = [
  {
    label: 'Email',
    detail: EMAIL,
    href: EMAIL_URL,
    external: false,
  },
  {
    label: 'LinkedIn',
    detail: 'nnamdi-azubuike',
    href: LINKEDIN_URL,
    external: true,
  },
  {
    label: 'GitHub',
    detail: 'azubuike-nnamdi',
    href: GITHUB_URL,
    external: true,
  },
  {
    label: 'Twitter',
    detail: '@_iamclement_',
    href: TWITTER_URL,
    external: true,
  },
  {
    label: 'Resume',
    detail: 'View CV',
    href: RESUME_URL,
    external: true,
  },
] as const

export default function ContactPage() {
  return (
    <div className="fade-up space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-4xl">
          Contact
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Open to collaborations, consulting, and interesting frontend work. Reach out directly —
          I usually reply within a couple of days.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <Link
          href={EMAIL_URL}
          className="inline-flex items-center rounded-full border border-highlight bg-highlight/10 px-4 py-2 text-sm font-medium text-highlight transition-colors hover:bg-highlight/20"
        >
          Email me
        </Link>
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-chip"
        >
          LinkedIn
        </Link>
      </div>

      <ul className="space-y-5 border-t border-border pt-8">
        {channels.map((channel) => (
          <li
            key={channel.label}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[7rem_1fr] sm:items-baseline sm:gap-5"
          >
            <span className="section-label">{channel.label}</span>
            <Link
              href={channel.href}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="soft-link w-fit text-[0.95rem]"
            >
              {channel.detail}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
