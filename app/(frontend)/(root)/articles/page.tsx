import { HomeArticles } from '@/components/article/home-articles'
import { getArticles } from '@/lib/cms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Articles',
}

export default async function Page() {
  const articles = await getArticles()

  return (
    <div>
      <HomeArticles articles={articles} />
    </div>
  )
}
