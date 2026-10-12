import {
  EMAIL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/config/routes'
import Link from 'next/link'

type ContactPageProps = {
  whatsappUrl?: string
  whatsappPhone?: string
  resumeUrl: string
  showIntro?: boolean
}

export default function ContactPage({
  whatsappUrl = '',
  whatsappPhone = '',
  resumeUrl,
  showIntro = true,
}: ContactPageProps) {
  const channels = [
    {
      label: 'Email',
      detail: EMAIL,
      href: EMAIL_URL,
      external: false,
    },
    ...(whatsappUrl
      ? [
          {
            label: 'WhatsApp',
            detail: whatsappPhone ? `+${whatsappPhone.replace(/\D/g, '')}` : 'Chat on WhatsApp',
            href: whatsappUrl,
            external: true,
          },
        ]
      : []),
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
      href: resumeUrl,
      external: true,
    },
  ]

  return (
    <div className="space-y-12">
      {showIntro ? (
        <header className="max-w-2xl">
          <p className="kicker">Contact</p>
          <h1 className="page-title mt-3">Start a conversation.</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            For a product estate, a payments platform, or a team that needs a clear technical
            direction through production. I usually reply within a couple of days.
          </p>
        </header>
      ) : null}

      <ul className="border-t border-foreground/80">
        {channels.map((channel) => (
          <li
            key={channel.label}
            className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline"
          >
            <span className="kicker">{channel.label}</span>
            <Link
              href={channel.href}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-link w-fit text-lg"
            >
              {channel.detail}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
