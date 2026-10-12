import { FUN_URL } from '@/config/routes'

const items = [
  { id: 'top', label: 'Home', href: '/#top' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'do', label: 'What I do', href: '/#do' },
  { id: 'how', label: 'How', href: '/#how' },
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'fun', label: 'Fun', href: FUN_URL },
]

export default function SiteHeader() {
  return (
    <header id="hd" className="site-header">
      <nav className="w nav">
        <a className="logo" href="/#top">
          NA<i>.</i>
        </a>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.href} data-id={item.id}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button type="button" className="nav-toggle" aria-expanded={false} aria-label="Open menu">
            Menu
          </button>
          <a className="btn" href="/#contact">
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  )
}
