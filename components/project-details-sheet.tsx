'use client'

import { ProjectDataType } from '@/lib/definitions'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { LinkPreview } from './ui/link-preview'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './ui/sheet'

interface ProjectDetailsSheetProps {
  project: ProjectDataType
  children: React.ReactNode
}

export default function ProjectDetailsSheet({
  project,
  children
}: Readonly<ProjectDetailsSheetProps>) {

  const handleViewProject = () => {
    window.open(project.uri, '_blank', 'noopener,noreferrer')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-black border-none">
        <SheetHeader>
          <SheetTitle className="text-3xl font-bold font-dancing-script text-white">
            {project.name}

          </SheetTitle>
          <SheetDescription className="sr-only">
            Project details for {project.name}
          </SheetDescription>
        </SheetHeader>

        {/* Scrollable Content */}
        <div className="no-scrollbar overflow-y-auto flex-1 px-4">
          <div className="space-y-8 py-6">
            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <LinkPreview url={project.uri}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  About This Project
                </h3>
              </LinkPreview>
              <p className="text-base leading-relaxed text-white">
                {project.desc}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm py-1.5 px-3 bg-gray-900 text-white border-gray-700 hover:border-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                My Contribution
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-sm text-gray-300">
                    Frontend architecture and implementation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-sm text-gray-300">
                    UI/UX component development
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-sm text-gray-300">
                    Performance optimization and testing
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer with CTA Button */}
        <div className="border-t border-gray-800 pt-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <LinkPreview url={project.uri}
            >
              <Button
                onClick={handleViewProject}
                className="w-full group relative overflow-hidden bg-white text-black hover:bg-gray-200 transition-all duration-300"
                size="lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Live Project
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </LinkPreview>
          </motion.div>
        </div>


      </SheetContent>
    </Sheet>
  )
}
