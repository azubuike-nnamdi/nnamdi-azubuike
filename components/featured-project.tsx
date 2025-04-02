import Link from 'next/link'
import React from 'react'

import { Button } from './ui/button'
import { ProjectData } from '@/data'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { AnimatedLink } from './ui/animated-link'
import { PROJECT_URL } from '@/config/routes'


const FeatureProject = () => {
  return (
    <main className='text-gray-600 dark:text-gray-400'>
      <h1 className='text-2xl font-bold'>Featured Projects</h1>
      {
        ProjectData.slice(0, 3).map((project) => (
          <Link href={project.uri} target='_blank' key={project.id} className="text-gray-600 dark:text-gray-400">
            <Card className='bg-white dark:bg-[#181810] text-gray-600 dark:text-gray-400 my-3 hover:bg-gray-100 dark:hover:bg-[#2A2B27] transition-all duration-300'>
              <CardHeader>
                <CardTitle>{project?.name}</CardTitle>
              </CardHeader>
              <CardContent className='text-gray-600 dark:text-gray-400 text-md my-2'>
                <p>{project?.desc}</p>
              </CardContent>
              <CardFooter>
                <span className='underline text-sm'>{project?.action}</span>
              </CardFooter>
            </Card>
          </Link>
        ))
      }
      <Button className='my-4 underline bg-white dark:bg-[#181810] text-[#D3BD44] hover:bg-gray-100 dark:hover:bg-[#2A2B27]'>
        <Link href={PROJECT_URL}>
          View More Projects
        </Link>
      </Button>
    </main>
  )
}

export default FeatureProject
