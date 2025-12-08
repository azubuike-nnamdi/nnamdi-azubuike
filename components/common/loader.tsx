"use client"

import { Progress } from "@/components/ui/progress"
import { AnimatePresence, motion } from "framer-motion"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Generate random values once for animation bars (lazy initialization)
  const [barAnimations] = useState(() =>
    Array.from({ length: 8 }, () => ({
      scaleY: 1.5 + Math.random(),
      duration: 1 + Math.random() * 2,
    })),
  )

  // Simulate loading progress
  useEffect(() => {
    // Fast initial progress up to 70%
    const timer1 = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 70) {
            clearInterval(interval)
            return prev
          }
          return prev + 2
        })
      }, 100)

      return () => clearInterval(interval)
    }, 300)

    // Slower progress from 70% to 99%
    const timer2 = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 99) {
            clearInterval(interval)
            return 99
          }
          return prev + 0.5
        })
      }, 200)

      return () => clearInterval(interval)
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Set complete when progress reaches 100
  useEffect(() => {
    if (progress >= 99) {
      const timer = setTimeout(() => {
        setProgress(100)
        setIsComplete(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center text-gray-400 space-y-8 max-w-md w-full px-4">
        <motion.div
          className="relative"
          animate={{
            rotate: [0, 360],
            scale: [1, isComplete ? 1.2 : 1, 1],
          }}
          transition={{
            rotate: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" },
            scale: { duration: 0.5 },
          }}
        >
          <Loader className="h-16 w-16" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: isComplete ? [1, 0] : [1, 0.7, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: isComplete ? 0.5 : 1.5,
              ease: "easeInOut",
            }}
          >
            <div className="h-5 w-5 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>

        <div className="w-full space-y-2">
          <div className="flex justify-between items-center mb-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={Math.floor(progress)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-medium"
              >
                {isComplete ? "Ready!" : "Loading assets..."}
              </motion.span>
              <motion.span
                key={`percent-${Math.floor(progress)}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-bold"
              >
                {Math.floor(progress)}%
              </motion.span>
            </AnimatePresence>
          </div>

          <Progress value={progress} className="h-2 bg-gray-800" />

          <AnimatePresence>
            {!isComplete && (
              <motion.div
                className="flex justify-center overflow-hidden h-6"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 24, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <motion.div
                  className="flex space-x-1 items-center text-xs text-gray-500"
                  animate={{ x: [-20, 0, 20, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                >
                  {progress < 30 && (
                    <>
                      <span>Initializing</span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        ...
                      </motion.span>
                    </>
                  )}

                  {progress >= 30 && progress < 60 && (
                    <>
                      <span>Loading components</span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        ...
                      </motion.span>
                    </>
                  )}

                  {progress >= 60 && progress < 90 && (
                    <>
                      <span>Preparing data</span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        ...
                      </motion.span>
                    </>
                  )}

                  {progress >= 90 && (
                    <>
                      <span>Almost there</span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        ...
                      </motion.span>
                    </>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="grid grid-cols-4 gap-2 w-full max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 40 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 bg-gray-700 rounded-full"
              animate={{
                scaleY: [1, barAnimations[i].scaleY, 1],
                opacity: [0.5, 0.8, 0.5],
                backgroundColor: i % 2 === 0 ? ["#333", "#555", "#333"] : ["#444", "#666", "#444"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: barAnimations[i].duration,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        <motion.p
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
          }}
          className="text-center text-sm"
        >
          {isComplete ? "Redirecting to page..." : "Please wait while we load your experience..."}
        </motion.p>
      </div>
    </div>
  )
}

