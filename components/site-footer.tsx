import {
  GITHUB_URL,
  HASHNODE_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/config/routes'

type SiteFooterProps = {
  whatsappUrl?: string
}

const social = 'grid size-[46px] place-items-center rounded-xl border-[1.5px] border-[#111] text-sm font-extrabold transition duration-200 hover:bg-[#111] hover:text-white'

export default function SiteFooter({ whatsappUrl = '' }: SiteFooterProps) {
  return (
    <footer id="contact" className="bg-[#fbf8f5] pt-20 pb-[30px]">
      <div className="mx-auto w-full max-w-[1160px] px-7 max-[620px]:px-5">
        <div className="grid grid-cols-1 items-start gap-10 min-[621px]:grid-cols-2 min-[981px]:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-[980px]:col-span-full">
            <h2 className="m-0 text-[clamp(32px,3.8vw,48px)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              Let’s build something that <em className="text-primary not-italic">ships.</em>
            </h2>
            <div className="mt-4 h-1 w-9 rounded bg-primary" />
          </div>
          <ul className="grid list-none gap-4 font-semibold">
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 [&_svg]:shrink-0 [&_svg]:text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Message on LinkedIn
              </a>
            </li>
            <li>
              {whatsappUrl ? (
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 [&_svg]:shrink-0 [&_svg]:text-primary">
                  <PhoneIcon />
                  WhatsApp
                </a>
              ) : (
                <span className="flex items-center gap-3 [&_svg]:shrink-0 [&_svg]:text-primary">
                  <PhoneIcon />
                  WhatsApp
                </span>
              )}
            </li>
            <li>
              <span className="flex items-center gap-3 [&_svg]:shrink-0 [&_svg]:text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
                  <path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Lagos, Nigeria
              </span>
            </li>
          </ul>
          <div>
            <b>Connect</b>
            <div className="mt-4 flex gap-3">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={social}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={social}>
                in
              </a>
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className={social}>
                X
              </a>
              <a href={HASHNODE_URL} target="_blank" rel="noopener noreferrer" aria-label="Notes" className={social}>
                ✎
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[70px] text-center text-sm text-[#5f5f66]">© {new Date().getFullYear()} Nnamdi Azubuike</div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  )
}
