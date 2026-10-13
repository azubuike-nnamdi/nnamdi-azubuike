'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ABOUT_URL, COMMUNITY_URL, CONTACT_URL, FUN_URL, PROJECT_URL } from '@/config/routes'
import { PanelLeft, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const items = [
  { id: 'top', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: ABOUT_URL },
  { id: 'do', label: 'What I do', href: '/#do' },
  { id: 'how', label: 'How', href: '/#how' },
  { id: 'work', label: 'Work', href: PROJECT_URL },
  { id: 'community', label: 'Community', href: COMMUNITY_URL },
  { id: 'fun', label: 'Fun', href: FUN_URL },
]

const link =
  'relative py-1.5 font-semibold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 [&.on]:text-primary [&.on]:after:scale-x-100'

function isCurrent(pathname: string, href: string) {
  if (href.startsWith('/#')) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [openedOn, setOpenedOn] = useState<string | null>(null)
  const open = openedOn === pathname

  function setOpen(next: boolean) {
    setOpenedOn(next ? pathname : null)
  }

  return (
    <header id="hd" className="sticky top-0 z-40 border-b border-transparent bg-white/90 backdrop-blur-[10px] transition-colors [&.s]:border-[#eceae6]">
      <nav className="nav relative mx-auto flex h-19 w-full max-w-290 items-center justify-between gap-5 px-7 max-[620px]:px-5">
        <a className="text-[26px] font-extrabold tracking-[-0.06em]" href="/">
          NA<i className="text-primary not-italic">.</i>
        </a>
        <ul className="hidden list-none gap-8.5 text-[15px] font-semibold min-[981px]:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.href} data-id={item.id} className={link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2.5">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="grid size-11 place-items-center rounded-[10px] border-[1.5px] border-[#111] bg-white text-[#111] min-[981px]:hidden"
              aria-label="Open menu"
            >
              <PanelLeft className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="left"
              showCloseButton={false}
              className="w-[min(100%,20rem)] gap-0 border-[#eceae6] bg-white p-0 text-[#111] shadow-none"
            >
              <SheetHeader className="flex-row items-center justify-between border-b border-[#eceae6] px-5 py-4">
                <SheetTitle className="text-[22px] font-extrabold tracking-[-0.04em]">
                  NA<i className="text-primary not-italic">.</i>
                </SheetTitle>
                <SheetDescription className="sr-only">Site pages</SheetDescription>
                <SheetClose className="grid size-11 place-items-center rounded-[10px] border-[1.5px] border-[#111]" aria-label="Close menu">
                  <X className="size-5" />
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col px-5 py-2">
                {items.map((item) => {
                  const active = isCurrent(pathname, item.href)
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      data-id={item.id}
                      onClick={(event) => {
                        event.preventDefault()
                        setOpen(false)
                        router.push(item.href)
                      }}
                      className={`border-b border-[#eceae6] py-3.5 text-[15px] font-semibold ${active ? 'text-primary' : 'text-[#111]'}`}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <a className="inline-flex items-center rounded-[10px] bg-[#111] px-[18px] py-[11px] text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary" href={CONTACT_URL}>
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  )
}
