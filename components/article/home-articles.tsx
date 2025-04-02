"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Bookmark, Share2, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArticlesData } from "@/data"

export const HomeArticles = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4)

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  const mainArticle = ArticlesData[0]
  const secondaryArticles = ArticlesData.slice(1, 3)
  const articlesToShow = ArticlesData.slice(3, 3 + visibleCount)

  return (
    <main className=" mx-auto px-4 py-12">
      {/* Magazine Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
          The <span className="text-[#D3BD44]">Journal</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Curated articles, insights, and stories from our team of writers and contributors. Discover the latest trends,
          tips, and thought leadership.
        </p>
      </header>

      {/* Hero Article */}
      <section className="mb-20">
        <Link href={mainArticle.uri}>
          <div className="group relative">
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden rounded-xl">
              <Image
                src={mainArticle.image || "/placeholder.svg"}
                alt={mainArticle.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2 sm:gap-0 mb-3 sm:mb-4">
                <Badge className="bg-[#D3BD44] hover:bg-[#D3BD44] text-black px-3 py-1 w-fit">Editor&apos;s Pick</Badge>
                <div className="flex items-center text-white/90 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {mainArticle.date}
                </div>
                <div className="flex items-center text-white/90 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {mainArticle.readTime} min read
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 max-w-4xl">{mainArticle.title}</h1>

              <p className="text-white/80 text-base sm:text-lg mb-4 sm:mb-6 max-w-3xl line-clamp-2 sm:line-clamp-none">{mainArticle.desc}</p>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <Button className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 text-sm sm:text-base">Read Article</Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white text-white hover:bg-white hover:text-black h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Bookmark className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white text-white hover:bg-white hover:text-black h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Secondary Articles */}
      <section className="mb-20">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow mx-4"></div>
          <Link href="/trending" className="text-[#D3BD44] hover:text-[#bda937] flex items-center text-sm font-medium">
            See All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={article.uri}>
                <Card className="overflow-hidden border-0 shadow-none bg-transparent hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 group">
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2 relative overflow-hidden rounded-xl aspect-[4/3]">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="md:col-span-3 flex flex-col justify-center">
                      <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime} min read
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {article.views || 1000} views
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 dark:text-[#D3BD44] mb-3 group-hover:text-[#D3BD44] dark:group-hover:text-[#e6d06e] transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{article.desc}</p>

                      <div className="text-[#D3BD44] font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        Continue Reading <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              {index < secondaryArticles.length - 1 && <Separator className="my-8" />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="mb-16">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow mx-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articlesToShow.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={article.uri}>
                <Card className="overflow-hidden border-0 shadow-none bg-transparent hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 h-full group">
                  <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-4">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="px-0">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} min read
                      </div>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 dark:text-[#D3BD44] mb-3 line-clamp-2 group-hover:text-[#D3BD44] dark:group-hover:text-[#e6d06e] transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{article.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {visibleCount < ArticlesData.length - 3 && (
          <div className="text-center mt-12">
            <Button
              onClick={handleViewMore}
              className="bg-[#D3BD44] text-black px-8 py-2 rounded-md transition-all duration-300 hover:bg-[#bda937] font-medium"
            >
              Load More Articles
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}

