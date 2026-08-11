'use client'

import type { ProjectDataType } from '@/lib/definitions'
import ProjectCaseStudy from '@/components/projects/project-case-study'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface ProjectDetailsSheetProps {
  project: ProjectDataType
  children: React.ReactNode
}

export default function ProjectDetailsSheet({
  project,
  children,
}: Readonly<ProjectDetailsSheetProps>) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-full flex-col border-border bg-background sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-3xl font-bold text-highlight">
            {project.name}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Project details for {project.name}
          </SheetDescription>
        </SheetHeader>

        <div className="no-scrollbar flex-1 overflow-y-auto px-4 pb-6">
          <ProjectCaseStudy project={project} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
