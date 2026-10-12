import Reveal from '@/components/reveal'
import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ABOUT_URL, EXPERIENCE_URL, NOTES_URL, PROJECT_URL } from '@/config/routes'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type WorkCard = {
  href: string
  image: string
}

type HomeRedesignProps = {
  resumeUrl: string
  work: {
    flyx: WorkCard
    numoni: WorkCard
    fibrex: WorkCard
    selfService: WorkCard
    platform: WorkCard
  }
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const wrap = 'mx-auto w-full max-w-[1160px] px-7 max-[620px]:px-5'
const reveal = 'rv transition duration-700 ease-out [&.out]:translate-y-[22px] [&.out]:opacity-0 [&.in]:translate-y-0 [&.in]:opacity-100 motion-reduce:!translate-y-0 motion-reduce:!opacity-100'
const kicker = 'text-[13px] font-bold tracking-[0.12em] text-primary uppercase'
const rule = 'mt-4 h-1 w-9 rounded bg-primary'
const title = 'mt-2.5 text-[clamp(30px,3.6vw,44px)] leading-[1.1] font-extrabold tracking-[-0.03em]'
const button = 'inline-flex items-center gap-2.5 rounded-xl px-[22px] py-3.5 text-[15px] font-semibold transition duration-200 hover:-translate-y-0.5'
const buttonLine = `${button} border-[1.5px] border-[#111] hover:bg-[#111] hover:text-white`
const buttonFill = `${button} bg-primary text-white shadow-[0_10px_24px_-12px_#F26B1D]`
const section = 'py-[110px] max-[620px]:py-20'
const headingRow = 'mb-[52px] flex items-end justify-between gap-5 max-[620px]:flex-col max-[620px]:items-start'
const tool = 'flex aspect-square flex-col items-center justify-center gap-2.5 rounded-[18px] border-[1.5px] border-[#eceae6] bg-white text-center text-[13px] font-bold transition duration-200 hover:-translate-y-0.75 hover:border-primary max-[980px]:aspect-auto max-[980px]:px-1 max-[980px]:py-4 max-[980px]:text-[11px]'
const glyph = 'text-[22px] font-extrabold tracking-[-0.04em] max-[980px]:text-lg'

export default function HomeRedesign({ resumeUrl, work }: HomeRedesignProps) {
  return (
    <Reveal>
      <main id="top">
        <div className={`${wrap} grid grid-cols-1 items-center gap-10 pt-15 pb-10 min-[981px]:grid-cols-2`}>
          <div className={reveal}>
            <div className="text-lg font-bold">
              Hi, I’m<span className="mt-1.5 block h-[3px] w-[34px] rounded-sm bg-primary" />
            </div>
            <h1 className="my-[18px] text-[clamp(52px,7vw,92px)] leading-[0.98] font-extrabold tracking-[-0.045em]">
              Nnamdi
              <br />
              <em className="text-primary not-italic">Azubuike</em>
            </h1>
            <div className="text-[19px] font-semibold text-[#5f5f66]">Software Engineering Lead · MTN Nigeria</div>
            <p className="mt-[22px] mb-[34px] max-w-[440px] text-lg text-[#5f5f66]">
              I lead the teams behind MTN’s self-service, payments and connectivity products, used by over a million people a month.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a className={buttonFill} href="#work">
                View my work <Arrow />
              </a>
              <a className={buttonLine} href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Download CV{' '}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className={`${reveal} relative aspect-square w-full max-w-[520px] justify-self-end max-[980px]:mx-auto max-[980px]:max-w-[440px]`}>
            <div className="absolute top-[16%] right-[8%] bottom-[6%] left-[14%] rounded-[48%_52%_46%_54%/56%_48%_52%_44%] bg-primary" />
            <div className="absolute top-[6%] right-[16%] bottom-[6%] left-[22%] overflow-hidden rounded-t-[200px] rounded-b-3xl border-[3px] border-[#111] bg-[#f4f1ec]">
              <Image src="/img/portrait.jpg" alt="Nnamdi Azubuike" fill priority sizes="440px" className="object-cover object-[center_18%]" />
            </div>
            <svg className="absolute top-0 left-0 w-[110px] text-[#111]" viewBox="0 0 110 130" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
              <path d="M55 0v52" />
              <path d="M25 82c0-17 13-30 30-30s30 13 30 30z" fill="#fff" />
              <path d="M48 92h14" stroke="#F26B1D" />
              <path d="M55 98v6M44 100l-4 6M66 100l4 6" stroke="#F26B1D" />
            </svg>
            <svg className="absolute top-[4%] -right-1.5 w-[120px] text-[#111]" viewBox="0 0 120 110" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 90h108M14 90v8M106 90v8" />
              <rect x="16" y="40" width="10" height="50" fill="#fff" />
              <rect x="28" y="34" width="10" height="56" fill="#fff" />
              <rect x="40" y="46" width="9" height="44" fill="#F26B1D" />
              <path d="M76 70h26l-4 20H80z" fill="#F26B1D" />
              <path d="M89 70V38M89 52c-8-2-13-9-12-18 8 2 12 9 12 18zM89 46c7-3 13-10 12-18-8 2-12 9-12 18z" fill="#fff" />
            </svg>
            <svg className="absolute bottom-[8%] left-[2%] w-[110px] text-[#111]" viewBox="0 0 110 70" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="4" y="4" width="102" height="62" rx="14" fill="#fff" />
              <path d="M38 22 26 35l12 13M72 22l12 13-12 13" />
              <path d="M60 20 50 50" stroke="#F26B1D" />
            </svg>
            <div className="absolute right-0 bottom-[16%] flex items-center gap-2.5 rounded-[14px] border-[1.5px] border-[#111] bg-white px-3.5 py-2.5 text-sm font-bold shadow-[4px_4px_0_#111]">
              <b className="text-xl text-primary">1M+</b>users a month
            </div>
          </div>
        </div>

        <section id="about" className={section}>
          <div className={`${wrap} grid grid-cols-1 items-center gap-[70px] min-[981px]:grid-cols-[0.9fr_1.1fr]`}>
            <div className={reveal}>
              <div className={kicker}>Who I am</div>
              <h2 className={title}>An engineer who stays through release.</h2>
              <div className={rule} />
              <p className="mt-[22px] text-[22px] leading-normal text-[#333]">
                Lagos-based engineering lead. I set technical direction, build shared foundations, and keep products healthy once they are live.
              </p>
              <div className="mt-[34px] grid grid-cols-2 gap-x-[18px] gap-y-[22px] min-[621px]:grid-cols-3">
                <Trait icon="bulb">Systems thinker</Trait>
                <Trait icon="shield">Security-minded</Trait>
                <Trait icon="people">Team builder</Trait>
                <Trait icon="trend">Production-first</Trait>
                <Trait icon="card">Payments</Trait>
                <Trait icon="book">Writer</Trait>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className={buttonLine} href={ABOUT_URL}>
                  Read more <Arrow />
                </Link>
                <Link className={buttonLine} href={NOTES_URL}>
                  Notes <Arrow />
                </Link>
              </div>
            </div>
            <div className={`${reveal} grid grid-cols-2 gap-4`}>
              <div className="rounded-[20px] border-[1.5px] border-[#111] bg-[#111] p-[26px] text-white transition duration-200 hover:-translate-y-0.75 hover:border-primary">
                <b className="block text-[44px] leading-none font-extrabold tracking-[-0.04em]">
                  1M<i className="text-primary not-italic">+</i>
                </b>
                <span className="mt-2 block text-[15px] font-medium text-[#b9b9c0]">People a month on products I lead</span>
              </div>
              <div className="rounded-[20px] border-[1.5px] border-[#eceae6] p-[26px] transition duration-200 hover:-translate-y-0.75 hover:border-primary">
                <b className="block text-[44px] leading-none font-extrabold tracking-[-0.04em]">7</b>
                <span className="mt-2 block text-[15px] font-medium text-[#5f5f66]">Products in one shared codebase</span>
              </div>
              <div className="rounded-[20px] border-[1.5px] border-[#eceae6] p-[26px] transition duration-200 hover:-translate-y-0.75 hover:border-primary">
                <b className="block text-[44px] leading-none font-extrabold tracking-[-0.04em]">2023</b>
                <span className="mt-2 block text-[15px] font-medium text-[#5f5f66]">Leading MTN delivery since</span>
              </div>
              <div className="rounded-[20px] border-[1.5px] border-[#eceae6] p-[26px] transition duration-200 hover:-translate-y-0.75 hover:border-primary">
                <b className="block text-[44px] leading-none font-extrabold tracking-[-0.04em]">4</b>
                <span className="mt-2 block text-[15px] font-medium text-[#5f5f66]">Streams: self-service, messaging, connectivity, payments</span>
              </div>
            </div>
          </div>
        </section>

        <section id="do" className={`${section} bg-[#fbf8f5]`}>
          <div className={wrap}>
            <div className={`${headingRow} ${reveal}`}>
              <div>
                <div className={kicker}>What I do</div>
                <h2 className={title}>Lead the build, end to end.</h2>
                <div className={rule} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[18px] min-[621px]:grid-cols-2 min-[981px]:grid-cols-4">
              <DoCard title="Direction" text="Decide what to build with product and business owners." icon="compass" />
              <DoCard title="Platform" text="Shared auth, payments and design system for every app." icon="layers" />
              <DoCard title="People" text="Structure, review and mentor teams so delivery never stalls." icon="people" />
              <DoCard title="Production" text="Hardening, uptime and NDPR-aware delivery after launch." icon="shield" />
            </div>
          </div>
        </section>

        <section id="how" className={section}>
          <div className={wrap}>
            <div className={`${headingRow} ${reveal}`}>
              <div>
                <div className={kicker}>How I do it</div>
                <h2 className={title}>A process built for production.</h2>
                <div className={rule} />
              </div>
              <Link className={buttonLine} href={EXPERIENCE_URL}>
                View more experience <Arrow />
              </Link>
            </div>
            <div className={`${reveal} relative mb-20 grid grid-cols-2 gap-y-9 min-[621px]:grid-cols-2 min-[981px]:grid-cols-5 before:absolute before:top-9 before:right-[10%] before:left-[10%] before:border-t-2 before:border-dashed before:border-[#f5c3a2] max-[980px]:before:hidden`}>
              <Step n="01" title="Understand" text="The users, the business and the risk." icon="search" />
              <Step n="02" title="Architect" text="Shared packages before features." icon="blocks" />
              <Step n="03" title="Build" text="In one monorepo, reviewed." icon="code" />
              <Step n="04" title="Harden" text="Sessions, payments, rate limits." icon="lock" />
              <Step n="05" title="Ship & observe" text="SIT, UAT, production, traced." icon="pulse" />
            </div>
            <div className={`${reveal} grid grid-cols-4 gap-2.5 min-[981px]:grid-cols-8 min-[981px]:gap-3.5`}>
              <div className={tool}><span className={glyph}>Next</span>Next.js</div>
              <div className={tool}><span className={glyph}>TS</span>TypeScript</div>
              <div className={tool}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                  <circle cx="12" cy="12" r="1.6" fill="currentColor" />
                </svg>
                React
              </div>
              <div className={tool}><span className={glyph}>Nx</span>Nx / Turbo</div>
              <div className={tool}>
                <LockIcon size={28} />
                NextAuth
              </div>
              <div className={tool}>
                <PulseIcon size={28} />
                OpenTelemetry
              </div>
              <div className={tool}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 2 3 7v10l9 5 9-5V7z" />
                </svg>
                Node.js
              </div>
              <div className={tool}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="6" cy="18" r="2.5" />
                  <circle cx="18" cy="8" r="2.5" />
                  <path d="M6 8.5v7M18 10.5c0 4-6 3-11 5.5" />
                </svg>
                Git
              </div>
            </div>
          </div>
        </section>

        <section id="work" className={`${section} bg-[#fbf8f5]`}>
          <div className={wrap}>
            <div className={`${headingRow} ${reveal}`}>
              <div>
                <div className={kicker}>What I’ve done</div>
                <h2 className={title}>Problems solved, in production.</h2>
                <div className={rule} />
              </div>
              <Link className={buttonLine} href={PROJECT_URL}>
                All projects <Arrow />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-[22px] min-[621px]:grid-cols-2 min-[981px]:grid-cols-3">
              <Case href={work.flyx.href} image={work.flyx.image} title="MTN FlyX" badge="Wireless" shot={<FlyxShot />} solution="A customer and agent portal that onboards homes and SMEs onto wireless broadband." />
              <Case href={work.numoni.href} image={work.numoni.image} title="nuMoni" badge="Payments" shot={<NumoniShot />} solution="A merchant portal and admin platform for loyalty, rewards and payments." />
              <Case href={work.fibrex.href} image={work.fibrex.image} title="MTN FibreX" badge="Self-service" shot={<FibrexShot />} solution="Plans and payments on the shared payment system." />
              <Case href={work.selfService.href} image={work.selfService.image} title="MTN Self-Service" badge="1M+ / month" shot={<SelfShot />} solution="One portal for airtime, data, bills and account, on a shared monorepo." />
              <Case href={work.platform.href} title="Shared platform" badge="Monorepo" shot={<PlatformShot />} solution="Shared auth, payment guards, rate limits and tracing for every app." />
            </div>

            <div className="mt-[90px]">
              <div className={`${kicker} ${reveal}`}>Experience</div>
              <div className="mt-10 grid grid-cols-1 gap-[30px] min-[981px]:grid-cols-3">
                <div className={`${reveal} flex gap-[18px]`}>
                  <div className="grid size-16 flex-none place-items-center rounded-full bg-[#fff3ea] text-[#111] shadow-none">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M9 7V5h6v2M3 12h18" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-sm font-extrabold text-primary">2023 – Present</small>
                    <h4 className="text-[17px] leading-snug font-extrabold">Software Engineering Lead</h4>
                    <em className="text-sm font-semibold text-primary not-italic">Estuary Business Solutions · MTN Nigeria</em>
                    <p className="mt-1.5 text-[14.5px] text-[#5f5f66]">Leads delivery across the Next.js monorepo.</p>
                  </div>
                </div>
                <div className={`${reveal} flex gap-[18px]`}>
                  <div className="grid size-16 flex-none place-items-center rounded-full bg-[#fff3ea] text-[#111] shadow-none">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
                      <path d="M12 3 3 8l9 5 9-5zM3 13l9 5 9-5" />
                    </svg>
                  </div>
                  <div>
                    <small className="text-sm font-extrabold text-primary">Platform</small>
                    <h4 className="text-[17px] leading-snug font-extrabold">Shared packages</h4>
                    <em className="text-sm font-semibold text-primary not-italic">Auth · Payments · Design system</em>
                    <p className="mt-1.5 text-[14.5px] text-[#5f5f66]">Used by every app in the estate.</p>
                  </div>
                </div>
                <div className={`${reveal} flex gap-4.5`}>
                  <div className="grid size-16 flex-none place-items-center rounded-full bg-[#fff3ea] text-[#111] shadow-none">
                    <PulseIcon size={26} />
                  </div>
                  <div>
                    <small className="text-sm font-extrabold text-primary">Reliability</small>
                    <h4 className="text-[17px] leading-snug font-extrabold">Production hardening</h4>
                    <em className="text-sm font-semibold text-primary not-italic">SIT · UAT · Production</em>
                    <p className="mt-1.5 text-[14.5px] text-[#5f5f66]">Sessions, payment guards, tracing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Reveal>
  )
}

function Case({
  href,
  title,
  shot,
  image = '',
  badge,
  solution,
}: {
  href: string
  title: string
  shot: ReactNode
  image?: string
  badge: string
  solution: string
}) {
  return (
    <Link className={`${reveal} block h-full text-inherit no-underline`} href={href}>
      <Card className="h-full gap-4 overflow-hidden py-0 pt-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_46px_-28px_rgba(0,0,0,0.45)]">
        <div className="relative bg-[#111]">
          <div className="absolute inset-0 z-10 bg-black/35" />
          {image ? (
            <img src={image} alt={`${title} product screenshot`} className="relative aspect-video w-full object-cover brightness-60 grayscale" />
          ) : (
            <div className="relative grid aspect-video place-items-center brightness-60 grayscale">{shot}</div>
          )}
        </div>
        <CardHeader className="pb-5">
          <CardAction>
            <Badge variant="secondary">{badge}</Badge>
          </CardAction>
          <CardTitle>
            <h3 className="text-lg leading-none font-extrabold tracking-[-0.02em]">{title}</h3>
          </CardTitle>
          <CardDescription className="line-clamp-2">{solution}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

function Trait({ icon, children }: { icon: string; children: string }) {
  return (
    <div className="flex items-center gap-2.5 text-[14.5px] font-bold [&_svg]:shrink-0 [&_svg]:text-primary">
      <TraitIcon name={icon} />
      {children}
    </div>
  )
}

function DoCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <div className={`${reveal} rounded-[20px] border-[1.5px] border-[#eceae6] bg-white px-[26px] py-[30px] transition duration-300 hover:-translate-y-1.5 hover:border-[#111] hover:shadow-[0_22px_40px_-26px_rgba(0,0,0,0.35)]`}>
      <div className="mb-[22px] grid size-14 place-items-center rounded-2xl bg-[#fff3ea] text-primary">
        <TraitIcon name={icon} size={26} />
      </div>
      <h3 className="text-[21px] leading-tight font-extrabold tracking-[-0.02em]">{title}</h3>
      <p className="mt-2 text-[15px] text-[#5f5f66]">{text}</p>
    </div>
  )
}

function Step({ n, title, text, icon }: { n: string; title: string; text: string; icon: string }) {
  return (
    <div className="group relative text-center">
      <div className="mx-auto mb-4 grid size-[72px] place-items-center rounded-full border-[1.5px] border-[#111] bg-white shadow-none transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
        <TraitIcon name={icon} size={26} />
      </div>
      <small className="text-sm font-extrabold text-primary">{n}</small>
      <h4 className="my-0.5 text-[17px] font-extrabold">{title}</h4>
      <p className="mx-auto max-w-40 text-sm leading-snug text-[#5f5f66]">{text}</p>
    </div>
  )
}

function LockIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function PulseIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  )
}

function TraitIcon({ name, size = 22 }: { name: string; size?: number }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (name === 'shield') {
    return (
      <svg {...props}>
        <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
        {size > 22 ? <path d="m9 12 2 2 4-4" /> : null}
      </svg>
    )
  }
  if (name === 'people') {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c1-3.5 3.5-5 6-5s5 1.5 6 5M15 15c2.5-.5 5 1 6 4" />
      </svg>
    )
  }
  if (name === 'trend') {
    return (
      <svg {...props}>
        <path d="M4 17 10 11l4 4 6-7M15 8h5v5" />
      </svg>
    )
  }
  if (name === 'card') {
    return (
      <svg {...props}>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    )
  }
  if (name === 'book') {
    return (
      <svg {...props}>
        <path d="M4 5h11a3 3 0 0 1 3 3v12H7a3 3 0 0 1-3-3zM18 8h2v12" />
      </svg>
    )
  }
  if (name === 'compass') {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </svg>
    )
  }
  if (name === 'layers') {
    return (
      <svg {...props}>
        <path d="M12 3 3 8l9 5 9-5zM3 13l9 5 9-5" />
      </svg>
    )
  }
  if (name === 'search') {
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.5-4.5" />
      </svg>
    )
  }
  if (name === 'blocks') {
    return (
      <svg {...props}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
        <path d="M6.5 10v2h11v-2M12 12v2" />
      </svg>
    )
  }
  if (name === 'code') {
    return (
      <svg {...props}>
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
      </svg>
    )
  }
  if (name === 'lock') return <LockIcon size={size} />
  if (name === 'pulse') return <PulseIcon size={size} />
  return (
    <svg {...props}>
      <path d="M12 3v3M5 8l2 1.5M19 8l-2 1.5M8 15a4 4 0 1 1 8 0c0 2-2 3-2 4h-4c0-1-2-2-2-4zM10 22h4" />
    </svg>
  )
}

function FlyxShot() {
  return (
    <svg width="230" height="160" viewBox="0 0 230 160" fill="none" stroke="#111" strokeWidth="2.4" strokeLinejoin="round" aria-hidden>
      <rect x="30" y="14" width="170" height="108" rx="8" fill="#fff" />
      <path d="M14 132h202l-10 12H24z" fill="#fff" />
      <rect x="42" y="26" width="146" height="10" rx="3" fill="#111" />
      <rect x="42" y="44" width="40" height="66" rx="4" fill="#F26B1D" stroke="none" />
      <rect x="90" y="44" width="98" height="18" rx="4" />
      <rect x="90" y="68" width="98" height="18" rx="4" />
      <rect x="90" y="92" width="60" height="18" rx="4" fill="#111" />
    </svg>
  )
}

function NumoniShot() {
  return (
    <svg width="230" height="160" viewBox="0 0 230 160" fill="none" stroke="#111" strokeWidth="2.4" strokeLinejoin="round" aria-hidden>
      <rect x="30" y="14" width="170" height="108" rx="8" fill="#fff" />
      <path d="M14 132h202l-10 12H24z" fill="#fff" />
      <rect x="42" y="26" width="60" height="38" rx="4" />
      <rect x="110" y="26" width="78" height="38" rx="4" fill="#111" />
      <path d="M48 104l18-14 16 8 20-20 18 10 20-16 18 6 20-10" stroke="#F26B1D" strokeWidth="3" strokeLinecap="round" />
      <circle cx="56" cy="45" r="8" fill="#F26B1D" stroke="none" />
    </svg>
  )
}

function FibrexShot() {
  return (
    <svg width="230" height="160" viewBox="0 0 230 160" fill="none" stroke="#111" strokeWidth="2.4" strokeLinejoin="round" aria-hidden>
      <rect x="82" y="8" width="70" height="140" rx="14" fill="#fff" transform="rotate(8 117 78)" />
      <g transform="rotate(8 117 78)">
        <rect x="94" y="28" width="46" height="8" rx="3" fill="#111" />
        <circle cx="102" cy="54" r="7" fill="#F26B1D" stroke="none" />
        <rect x="114" y="49" width="26" height="10" rx="3" />
        <circle cx="102" cy="78" r="7" fill="#F26B1D" stroke="none" />
        <rect x="114" y="73" width="26" height="10" rx="3" />
        <circle cx="102" cy="102" r="7" fill="#F26B1D" stroke="none" />
        <rect x="114" y="97" width="26" height="10" rx="3" />
      </g>
    </svg>
  )
}

function SelfShot() {
  return (
    <svg width="170" height="150" viewBox="0 0 170 150" fill="none" stroke="#111" strokeWidth="2.4" strokeLinejoin="round" aria-hidden>
      <rect x="20" y="20" width="96" height="70" rx="8" fill="#fff" />
      <rect x="30" y="32" width="76" height="8" rx="3" fill="#111" />
      <rect x="30" y="48" width="34" height="30" rx="4" fill="#F26B1D" stroke="none" />
      <rect x="70" y="48" width="36" height="30" rx="4" />
      <rect x="100" y="56" width="50" height="86" rx="10" fill="#fff" />
      <rect x="110" y="70" width="30" height="16" rx="3" fill="#F26B1D" stroke="none" />
      <rect x="110" y="92" width="30" height="8" rx="3" />
      <rect x="110" y="106" width="30" height="8" rx="3" />
    </svg>
  )
}

function PlatformShot() {
  return (
    <svg width="170" height="150" viewBox="0 0 170 150" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M85 14 30 38v34c0 30 22 50 55 62 33-12 55-32 55-62V38z" />
      <path d="m64 76 15 15 29-30" stroke="#F26B1D" strokeWidth="5" />
    </svg>
  )
}
