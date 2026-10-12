import HomeRedesign from '@/components/home-redesign'
import { getProjects, getSiteSettings } from '@/lib/cms'
import { projectHref } from '@/lib/project'

export default async function Page() {
  const [projects, settings] = await Promise.all([getProjects(), getSiteSettings()])

  const cardFor = (pattern: RegExp) => {
    const project = projects.find((item) => pattern.test(item.name))
    return {
      href: project ? projectHref(project) : '/projects',
      image: project?.image?.trim() || '',
    }
  }

  return (
    <HomeRedesign
      resumeUrl={settings.resumeUrl}
      work={{
        flyx: cardFor(/flyx/i),
        numoni: cardFor(/numoni/i),
        fibrex: cardFor(/fibrex/i),
        selfService: cardFor(/self-?service/i),
        platform: { href: '/projects', image: '' },
      }}
    />
  )
}
