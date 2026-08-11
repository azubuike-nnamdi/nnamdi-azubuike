import ContactPage from '@/components/contact/contact-page'
import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nnamdi Azubuike — collaborations, consulting, and frontend work.',
}

export default async function Page() {
  const { contact } = await getSiteSettings()

  return (
    <ContactPage
      whatsappUrl={contact.whatsappUrl}
      whatsappPhone={contact.whatsappPhone}
    />
  )
}
