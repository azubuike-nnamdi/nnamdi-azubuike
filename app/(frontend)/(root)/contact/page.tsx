import ContactPage from '@/components/contact/contact-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nnamdi Azubuike — collaborations, consulting, and frontend work.',
}

export default function Page() {
  return <ContactPage />
}
