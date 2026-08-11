import ProjectLanding from '@/components/projects/project-landing'
import { getProjects } from '@/lib/cms'

export const metadata = {
  title: 'Projects - Nnamdi Azubuike',
  description: 'Projects - Nnamdi Azubuike',
}

export default async function Page() {
  const projects = await getProjects()

  return <ProjectLanding projects={projects} />
}
