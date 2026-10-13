import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'

const description =
  'Campus and community seats held by Nnamdi Azubuike: Google Developer Groups, the Nigeria Association of Computing Students at Kwara State University, KwaraBuild, and Africa’s Talking.'

export const metadata: Metadata = {
  title: 'Community',
  description,
  openGraph: {
    title: 'Community | Nnamdi Azubuike',
    description,
    url: 'https://www.nnamdiazubuike.dev/community',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nnamdi Azubuike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community | Nnamdi Azubuike',
    description,
    images: ['/og.png'],
  },
}

export default async function CommunityPage() {
  const { community } = await getSiteSettings()

  return (
    <article>
      <header className="max-w-3xl">
        <p className="kicker">Community</p>
        <h1 className="page-title mt-3">The rooms I held before the title.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5f66]">
          Campus government, then the communities in Kwara and beyond. These seats were not a job.
        </p>
      </header>

      <ol className="mt-16">
        {community.map((item, index) => (
          <li
            key={`${item.organization}-${item.role}`}
            className="grid grid-cols-1 gap-4 border-t border-[#eceae6] py-12 min-[621px]:grid-cols-[4.5rem_minmax(0,1fr)] min-[621px]:gap-10"
          >
            <p className="text-[clamp(28px,3vw,40px)] leading-none font-extrabold tracking-[-0.04em] text-primary tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </p>
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-x-8 gap-y-4">
                {item.logos.map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.mark ? 'h-16' : 'h-9'} w-auto max-w-[min(100%,28rem)] object-contain object-left`}
                  />
                ))}
              </div>
              {item.period ? (
                <p className="text-[13px] font-bold tracking-[0.12em] text-primary uppercase">
                  {item.period}
                </p>
              ) : null}
              <h2 className="mt-2 text-[clamp(28px,3vw,40px)] leading-[1.1] font-extrabold tracking-[-0.03em]">
                {item.role}
              </h2>
              <p className="mt-2 text-[15px] text-[#5f5f66]">{item.organization}</p>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[#5f5f66]">{item.summary}</p>
              {item.responsibilities?.length ? (
                <ul className="mt-4 max-w-2xl space-y-2">
                  {item.responsibilities.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[0.95rem] leading-7 text-[#5f5f66]"
                    >
                      <span aria-hidden className="mt-[0.7rem] h-1 w-1 flex-none rounded-full bg-primary" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.links?.length ? (
                <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-primary no-underline underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <p className="max-w-3xl border-t border-[#eceae6] pt-12 text-[clamp(28px,3.4vw,44px)] leading-[1.15] font-extrabold tracking-[-0.03em]">
        The engineering came later. The habit of holding a room came first.
      </p>
    </article>
  )
}
