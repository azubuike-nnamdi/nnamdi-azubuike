'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return

    const nodes = [...root.querySelectorAll<HTMLElement>('.rv')]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const show = (node: Element) => node.classList.add('in')

    const inView = nodes.filter((node) => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    })
    if (reduce || inView.length === 0) nodes.forEach(show)
    else inView.forEach(show)
    root.classList.add('reveal-on')

    if (reduce || typeof IntersectionObserver === 'undefined') {
      nodes.forEach(show)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 },
    )

    nodes.forEach((node) => {
      if (!node.classList.contains('in')) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="redesign">
      {children}
    </div>
  )
}
