'use client'
import { motion } from 'framer-motion'
import Articles from './article/articles'
import FeatureProject from './featured-project'

export default function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-6 md:px-0"
      >
        <div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="my-2 text-gray-600 dark:text-gray-400"
          >
            I build products with code for real people. While refactoring UIs, I continuously sharpen my problem-solving skills through algorithm and data-structure challenges, explore functional programming languages at a surface level, and experiment with AI. I also write about newly learned ideas and insights as I grow.
          </motion.p>
        </div>
        <FeatureProject />
        <Articles />
      </motion.div>
    </motion.main>
  )
}
