'use client'

import { motion, useScroll } from 'motion/react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      id="scroll-indicator"
      aria-hidden
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        originX: 0,
        zIndex: 50,
        pointerEvents: 'none',
        backgroundColor: 'var(--primary)',
      }}
    />
  )
}
