
import { HomeArticles } from '@/components/home-articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Articles',
}

export default function Page() {
  return (
    <div>
      <HomeArticles />
    </div>
  )
}
