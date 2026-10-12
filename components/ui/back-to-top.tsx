'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(window.innerHeight * 1.4, 900)
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    // Scroll does not bubble, so listen in the capture phase as well as on window.
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll, { capture: true })
    }
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      }}
      className="fixed right-4 bottom-4 z-40 border border-border bg-background px-3.5 py-2 text-[0.8125rem] text-foreground shadow-[0_1px_2px_rgba(28,25,21,0.12)] hover:bg-secondary sm:right-6 sm:bottom-6"
    >
      Back to top
    </button>
  )
}
