'use client'
import { PortfolioData } from '@/data'
import React from 'react'
import { AnimatedLink } from './ui/animated-link'
import FeatureProject from './featured-project'
import Articles from './article/articles'
import { ModeToggle } from './theme-toggle'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 md:gap-4 md:p-0 p-6"
    >
      <ModeToggle />
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:overflow-y-hidden md:p-16"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="dark:text-[#D3BD44] text-black font-extrabold md:text-[50px] text-3xl leading-none"
        >
          Hi, I&apos;m Nnamdi.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex md:gap-5 gap-2 md:text-sm text-[10px] text-gray-600 dark:text-gray-400 my-2"
        >
          <p className="underline">Software Engineer</p>
          <p className="underline">Community Preacher</p>
          <p className="underline">Writer</p>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="my-8 text-gray-600 dark:text-gray-400"
        >
          I&apos;m a proficient and forward-thinking software engineer,
          specializing in pioneering innovative products and solutions,
          particularly within the frontend ecosystem.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-8 text-gray-600 dark:text-gray-400"
        >
          In addition to my technical expertise, I devote time to documenting my
          learning journey by researching and crafting articles on frontend
          technologies. You can find my insights shared on platforms such as
          Hashnode, as well as my experiences on Medium.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex gap-6 text-gray-600 dark:text-gray-400 md:pt-12">
            {PortfolioData.map((portfolio) => (
              <div key={portfolio.id} className="">
                <AnimatedLink
                  href={portfolio.uri}
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {portfolio.name}
                </AnimatedLink>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:h-screen md:w-5/6 md:overflow-y-auto md:pt-14 pt-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <FeatureProject />
        <Articles />
      </motion.div>
    </motion.main>
  )
}
