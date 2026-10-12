import TailorForm from '@/components/tailor-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tailor',
  robots: { index: false, follow: false },
}

export default function TailorPage() {
  return (
    <section className="pt-8 md:pt-16">
      <p className="kicker">Private</p>
      <h1 className="page-title mt-3">Prepare a page for a role.</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/90">
        Paste a job post. The page that comes back reorders work already on the site and says it
        was prepared for that role. Your title stays Software Engineering Lead.
      </p>
      <TailorForm />
    </section>
  )
}
