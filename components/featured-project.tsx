'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { PROJECT_URL } from '@/config/routes'
import { ProjectData } from '@/data'
import ProjectDetailsSheet from './project-details-sheet'


const FeatureProject = () => {
  return (
    <section className='text-gray-600 dark:text-gray-400 mt-12'>
      <h2 className='text-2xl font-bold font-dancing-script underline decoration-1 underline-offset-8 mb-8'>Featured Work</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10'>
        {
          ProjectData.slice(0, 4).map((project) => (
            <ProjectDetailsSheet key={project.id} project={project}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group block text-left w-full cursor-pointer h-full p-4 -mx-4 rounded-xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 group-hover:text-white dark:group-hover:text-white transition-colors">
                  {project?.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  {project?.desc}
                </p>
              </motion.button>
            </ProjectDetailsSheet>
          ))
        }
      </div>
      <div className='mt-12 flex'>
        <Link
          href={PROJECT_URL}
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white pb-0.5"
        >
          View all projects
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

export default FeatureProject
