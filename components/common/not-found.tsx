"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Terminal, Home, ArrowLeft, RefreshCw, Code, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)


  const lines = [
    "cd /home/user/portfolio",
    "ls -la",
    'grep -r "page" .',
    "ERROR: Page not found (404)",
    "git checkout -b fix/missing-page",
    "npm run debug",
    "DEBUG: Route resolution failed",
    "cat /var/log/nginx/error.log",
    "CRITICAL: Cannot GET " + (typeof window !== "undefined" ? window.location.pathname : "/unknown-path"),
    "sudo systemctl restart portfolio-service",
    "ping -c 4 portfolio-server",
    "RESULT: 4 packets transmitted, 0 received, 100% packet loss",
    'echo "Initiating recovery sequence..."',
    "RECOVERY: Redirecting to homepage...",
  ]

  // Terminal typing effect
  useEffect(() => {
    setMounted(true)

    if (currentLineIndex < lines.length) {
      const timer = setTimeout(
        () => {
          setTerminalLines((prev) => [...prev, lines[currentLineIndex]])
          setCurrentLineIndex((prev) => prev + 1)
        },
        currentLineIndex === 0 ? 500 : Math.random() * 500 + 500,
      )

      return () => clearTimeout(timer)
    }
  }, [currentLineIndex])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Matrix-like background effect
  const MatrixBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0 flex flex-wrap gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="text-primary font-mono text-xs"
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Math.random() > 0.5 ? "0" : "1"}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <MatrixBackground />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="mr-2"
          >
            <RefreshCw className="h-6 w-6 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold">404</h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The resource you&apos;re looking for doesn&apos;t exist or has been moved to another dimension.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-2xl mb-8"
      >
        <div className="bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800">
          <div className="flex items-center px-4 py-2 bg-gray-900">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">terminal@portfolio ~</div>
            <Terminal className="h-4 w-4 text-gray-400" />
          </div>

          <div className="p-4 font-mono text-sm text-green-400 h-64 overflow-y-auto">
            {terminalLines.map((line, index) => (
              <div
                key={index}
                className={`mb-1 ${line.includes("ERROR") || line.includes("CRITICAL") ? "text-red-400" : line.includes("DEBUG") ? "text-yellow-400" : line.includes("RECOVERY") ? "text-blue-400" : "text-green-400"}`}
              >
                <span className="text-blue-400">user@portfolio:~$</span> {line}
              </div>
            ))}
            {currentLineIndex < lines.length && (
              <div className="mb-1">
                <span className="text-blue-400">user@portfolio:~$</span> {showCursor ? "▋" : " "}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/projects">
            <Code className="mr-2 h-4 w-4" />
            View Projects
          </Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/contact">
            <Coffee className="mr-2 h-4 w-4" />
            Contact Me
          </Link>
        </Button>
      </motion.div>

      <div className="absolute bottom-4 left-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="javascript:history.back()">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Link>
        </Button>
      </div>

      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}

