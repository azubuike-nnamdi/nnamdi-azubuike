import HomeRedesign from '@/components/home-redesign'
import { getProjects, getSiteSettings } from '@/lib/cms'
import { communityNamesFrom } from '@/lib/community'
import { projectHref } from '@/lib/project'

export default async function Page() {
  const [projects, settings] = await Promise.all([getProjects(), getSiteSettings()])

  const liveApps = [
    { slug: 'mtn-bulk-sms', name: 'Bulk SMS', href: 'https://sms.mtn.ng/' },
    { slug: 'mtn-iot', name: 'IoT', href: 'https://iot.mtn.ng/' },
    { slug: 'mtn-cloud', name: 'Cloud', href: 'http://cloud.mtn.ng/' },
    { slug: 'mtn-messaging', name: 'Messaging', href: 'https://messaging.mtn.ng/' },
    { slug: 'mtn-dashboard', name: 'Dashboard', href: 'https://dashboard.mtn.ng/' },
    { slug: 'mtn-go', name: 'Go', href: 'http://go.mtn.ng/' },
  ].map((app) => {
    const project = projects.find((item) => item.slug === app.slug)
    return { name: app.name, href: project?.uri?.trim() || app.href }
  })

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
      communityNames={communityNamesFrom(settings.community)}
      liveApps={liveApps}
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
