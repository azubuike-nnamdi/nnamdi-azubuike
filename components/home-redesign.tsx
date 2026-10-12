import Reveal from '@/components/reveal'
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

function Ext() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomeRedesign({ resumeUrl, work }: HomeRedesignProps) {
  return (
    <Reveal>
      <main id="top">
        <div className="w hero">
          <div className="rv">
            <div className="hi">
              Hi, I’m<span />
            </div>
            <h1>
              Nnamdi
              <br />
              <em>Azubuike</em>
            </h1>
            <div className="role">Software Engineering Lead · MTN Nigeria</div>
            <p className="lead">
              I lead the teams behind MTN’s self-service, payments and connectivity products, used by over a million people a month.
            </p>
            <div className="cta">
              <a className="btn btn-o" href="#work">
                View my work <Arrow />
              </a>
              <a className="btn btn-l" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Download CV{' '}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="art rv">
            <div className="blob" />
            <div className="pic">
              <Image src="/img/portrait.jpg" alt="Nnamdi Azubuike" fill priority sizes="440px" />
            </div>
            <svg className="doodle d1" viewBox="0 0 110 130" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
              <path d="M55 0v52" />
              <path d="M25 82c0-17 13-30 30-30s30 13 30 30z" fill="#fff" />
              <path d="M48 92h14" stroke="#F26B1D" />
              <path d="M55 98v6M44 100l-4 6M66 100l4 6" stroke="#F26B1D" />
            </svg>
            <svg className="doodle d2" viewBox="0 0 120 110" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 90h108M14 90v8M106 90v8" />
              <rect x="16" y="40" width="10" height="50" fill="#fff" />
              <rect x="28" y="34" width="10" height="56" fill="#fff" />
              <rect x="40" y="46" width="9" height="44" fill="#F26B1D" />
              <path d="M76 70h26l-4 20H80z" fill="#F26B1D" />
              <path d="M89 70V38M89 52c-8-2-13-9-12-18 8 2 12 9 12 18zM89 46c7-3 13-10 12-18-8 2-12 9-12 18z" fill="#fff" />
            </svg>
            <svg className="doodle d3" viewBox="0 0 110 70" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="4" y="4" width="102" height="62" rx="14" fill="#fff" />
              <path d="M38 22 26 35l12 13M72 22l12 13-12 13" />
              <path d="M60 20 50 50" stroke="#F26B1D" />
            </svg>
            <div className="chip c1">
              <b>1M+</b>users a month
            </div>
          </div>
        </div>

        <section id="about">
          <div className="w about">
            <div className="rv">
              <div className="k">Who I am</div>
              <h2>An engineer who stays through release.</h2>
              <div className="bar" />
              <p className="big">
                Lagos-based engineering lead. I set technical direction, build shared foundations, and keep products healthy once they are live.
              </p>
              <div className="traits">
                <Trait icon="bulb">Systems thinker</Trait>
                <Trait icon="shield">Security-minded</Trait>
                <Trait icon="people">Team builder</Trait>
                <Trait icon="trend">Production-first</Trait>
                <Trait icon="card">Payments</Trait>
                <Trait icon="book">Writer</Trait>
              </div>
              <div className="more">
                <Link className="btn btn-l" href={ABOUT_URL}>
                  Read more <Arrow />
                </Link>
                <Link className="btn btn-l" href={NOTES_URL}>
                  Notes <Arrow />
                </Link>
              </div>
            </div>
            <div className="facts rv">
              <div className="fact dark">
                <b>
                  1M<i>+</i>
                </b>
                <span>People a month on products I lead</span>
              </div>
              <div className="fact">
                <b>7</b>
                <span>Products in one shared codebase</span>
              </div>
              <div className="fact">
                <b>2023</b>
                <span>Leading MTN delivery since</span>
              </div>
              <div className="fact">
                <b>4</b>
                <span>Streams: self-service, messaging, connectivity, payments</span>
              </div>
            </div>
          </div>
        </section>

        <section id="do" className="soft">
          <div className="w">
            <div className="head rv">
              <div>
                <div className="k">What I do</div>
                <h2>Lead the build, end to end.</h2>
                <div className="bar" />
              </div>
            </div>
            <div className="do">
              <DoCard title="Direction" text="Decide what to build with product and business owners." icon="compass" />
              <DoCard title="Platform" text="Shared auth, payments and design system for every app." icon="layers" />
              <DoCard title="People" text="Structure, review and mentor teams so delivery never stalls." icon="people" />
              <DoCard title="Production" text="Hardening, uptime and NDPR-aware delivery after launch." icon="shield" />
            </div>
          </div>
        </section>

        <section id="how">
          <div className="w">
            <div className="head rv">
              <div>
                <div className="k">How I do it</div>
                <h2>A process built for production.</h2>
                <div className="bar" />
              </div>
              <Link className="btn btn-l" href={EXPERIENCE_URL}>
                View more experience <Arrow />
              </Link>
            </div>
            <div className="steps rv">
              <Step n="01" title="Understand" text="The users, the business and the risk." icon="search" />
              <Step n="02" title="Architect" text="Shared packages before features." icon="blocks" />
              <Step n="03" title="Build" text="In one monorepo, reviewed." icon="code" />
              <Step n="04" title="Harden" text="Sessions, payments, rate limits." icon="lock" />
              <Step n="05" title="Ship & observe" text="SIT, UAT, production, traced." icon="pulse" />
            </div>
            <div className="tools rv">
              <div className="tool"><span className="g">Next</span>Next.js</div>
              <div className="tool"><span className="g">TS</span>TypeScript</div>
              <div className="tool">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                  <circle cx="12" cy="12" r="1.6" fill="currentColor" />
                </svg>
                React
              </div>
              <div className="tool"><span className="g">Nx</span>Nx / Turbo</div>
              <div className="tool">
                <LockIcon size={28} />
                NextAuth
              </div>
              <div className="tool">
                <PulseIcon size={28} />
                OpenTelemetry
              </div>
              <div className="tool">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 2 3 7v10l9 5 9-5V7z" />
                </svg>
                Node.js
              </div>
              <div className="tool">
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

        <section id="work" className="soft">
          <div className="w">
            <div className="head rv">
              <div>
                <div className="k">What I’ve done</div>
                <h2>Problems solved, in production.</h2>
                <div className="bar" />
              </div>
              <Link className="btn btn-l" href={PROJECT_URL}>
                All projects <Arrow />
              </Link>
            </div>

            <div className="work">
              <Case href={work.flyx.href} image={work.flyx.image} title="MTN FlyX" shot={<FlyxShot />} problem="Homes and SMEs outside fibre coverage could not get MTN broadband." solution="A customer and agent portal that onboards them onto wireless broadband." stack={['Next.js', 'TypeScript', 'Payments']} />
              <Case href={work.numoni.href} image={work.numoni.image} title="nuMoni" shot={<NumoniShot />} problem="Merchants needed loyalty, rewards and payments in one place." solution="A merchant portal and admin platform, both live in production." stack={['Next.js', 'Admin', 'Payments']} />
              <Case href={work.fibrex.href} image={work.fibrex.image} title="MTN FibreX" shot={<FibrexShot />} problem="Fibre customers needed to choose plans and pay without friction." solution="Self-service plans and payments on the shared payment system." stack={['Next.js', 'Self-service', 'Payments']} />
            </div>

            <div className="work2">
              <Case href={work.selfService.href} image={work.selfService.image} title="MTN Self-Service" shot={<SelfShot />} problem="A million-plus people a month needed one place for airtime, data, bills and account." solution="One self-service portal on a shared monorepo with common auth and payments." stack={['1M+ users / month', 'Next.js', 'NextAuth']} />
              <Case href={work.platform.href} title="Shared platform" dark shot={<PlatformShot />} problem="Many teams in one codebase risked drift and payment security gaps." solution="Shared auth helpers, payment guards, rate limits and OpenTelemetry tracing." stack={['Security', 'Observability', 'Monorepo']} />
            </div>

            <div className="exp">
              <div className="k rv">Experience</div>
              <div className="line">
                <div className="ev rv">
                  <div className="ring">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M9 7V5h6v2M3 12h18" />
                    </svg>
                  </div>
                  <div>
                    <small>2023 – Present</small>
                    <h4>Software Engineering Lead</h4>
                    <em>Estuary Business Solutions · MTN Nigeria</em>
                    <p>Leads delivery across the Next.js monorepo.</p>
                  </div>
                </div>
                <div className="ev rv">
                  <div className="ring">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
                      <path d="M12 3 3 8l9 5 9-5zM3 13l9 5 9-5" />
                    </svg>
                  </div>
                  <div>
                    <small>Platform</small>
                    <h4>Shared packages</h4>
                    <em>Auth · Payments · Design system</em>
                    <p>Used by every app in the estate.</p>
                  </div>
                </div>
                <div className="ev rv">
                  <div className="ring">
                    <PulseIcon size={26} />
                  </div>
                  <div>
                    <small>Reliability</small>
                    <h4>Production hardening</h4>
                    <em>SIT · UAT · Production</em>
                    <p>Sessions, payment guards, tracing.</p>
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
  problem,
  solution,
  stack,
  dark = false,
}: {
  href: string
  title: string
  shot: ReactNode
  image?: string
  problem: string
  solution: string
  stack: string[]
  dark?: boolean
}) {
  return (
    <Link className="case rv" href={href}>
      <div className="shot" style={dark && !image ? { background: '#111' } : undefined}>
        {image ? <img src={image} alt={`${title} product screenshot`} /> : shot}
      </div>
      <div className="body">
        <h3>
          {title} <Ext />
        </h3>
        <div className="ps">
          <div className="p">
            <b>Problem</b>
            {problem}
          </div>
          <div className="s">
            <b>Solution</b>
            {solution}
          </div>
        </div>
        <div className="stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

function Trait({ icon, children }: { icon: string; children: string }) {
  return (
    <div className="trait">
      <TraitIcon name={icon} />
      {children}
    </div>
  )
}

function DoCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <div className="card rv">
      <div className="ic">
        <TraitIcon name={icon} size={26} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function Step({ n, title, text, icon }: { n: string; title: string; text: string; icon: string }) {
  return (
    <div className="step">
      <div className="ring">
        <TraitIcon name={icon} size={26} />
      </div>
      <small>{n}</small>
      <h4>{title}</h4>
      <p>{text}</p>
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
