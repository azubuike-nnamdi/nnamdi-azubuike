import { FUN_URL } from '@/config/routes'

const items = [
  { id: 'top', label: 'Home', href: '/#top' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'do', label: 'What I do', href: '/#do' },
  { id: 'how', label: 'How', href: '/#how' },
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'fun', label: 'Fun', href: FUN_URL },
]

const link = "relative py-1.5 font-semibold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 [&.on]:text-primary [&.on]:after:scale-x-100 max-[980px]:block max-[980px]:border-b max-[980px]:border-[#eceae6] max-[980px]:py-3"

export default function SiteHeader() {
  return (
    <header id="hd" className="sticky top-0 z-40 border-b border-transparent bg-white/90 backdrop-blur-[10px] transition-colors [&.s]:border-[#eceae6]">
      <nav className="nav relative mx-auto flex h-[76px] w-full max-w-[1160px] items-center justify-between gap-5 px-7 max-[620px]:px-5 max-[980px]:[&.open_ul]:flex">
        <a className="text-[26px] font-extrabold tracking-[-0.06em]" href="/#top">
          NA<i className="text-primary not-italic">.</i>
        </a>
        <ul className="flex list-none gap-[34px] text-[15px] font-semibold max-[980px]:absolute max-[980px]:top-[76px] max-[980px]:right-0 max-[980px]:left-0 max-[980px]:z-30 max-[980px]:hidden max-[980px]:flex-col max-[980px]:gap-0 max-[980px]:border-b max-[980px]:border-[#eceae6] max-[980px]:bg-white max-[980px]:px-7 max-[980px]:pt-2 max-[980px]:pb-[18px]">
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.href} data-id={item.id} className={link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2.5">
          <button type="button" className="nav-toggle hidden rounded-[10px] border-[1.5px] border-[#111] bg-white px-3.5 py-2.5 text-sm font-bold text-[#111] max-[980px]:inline-flex" aria-expanded={false} aria-label="Open menu">
            Menu
          </button>
          <a className="inline-flex items-center rounded-[10px] bg-[#111] px-[18px] py-[11px] text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary" href="/#contact">
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  )
}
