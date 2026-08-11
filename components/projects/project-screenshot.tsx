'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type ProjectScreenshotProps = {
  src: string
  alt: string
}

export default function ProjectScreenshot({ src, alt }: ProjectScreenshotProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const isMicrolink = src.startsWith('https://api.microlink.io')

  useEffect(() => {
    let cancelled = false
    const img = new window.Image()

    img.onload = () => {
      if (!cancelled) setLoadedSrc(src)
    }
    img.onerror = () => {
      if (!cancelled) setFailedSrc(src)
    }
    img.src = src

    return () => {
      cancelled = true
      img.onload = null
      img.onerror = null
    }
  }, [src])

  if (failedSrc === src || loadedSrc !== src) return null

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border animate-in fade-in duration-500">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized={isMicrolink}
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 42rem"
      />
    </div>
  )
}
