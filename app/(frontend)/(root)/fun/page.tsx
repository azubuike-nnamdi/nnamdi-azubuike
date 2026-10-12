import FunProjects from '@/components/fun-projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fun projects',
  description:
    'Side projects from Nnamdi Azubuike: full-stack apps, React Native, and NestJS APIs.',
}

export default function FunPage() {
  return <FunProjects />
}
