'use client'
import { PortfolioData } from '@/data'
import React from 'react'
import { AnimatedLink } from './ui/animated-link'
import FeatureProject from './featured-project'
import Articles from './articles'
import { ModeToggle } from './theme-toggle'

export default function LandingPage() {
  return (
    <main className="grid md:grid-cols-2 md:gap-4 md:p-0 p-6 animate-fade-in"
      style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <ModeToggle />
      <div className="md:overflow-y-hidden md:p-16">
        <p className="dark:text-[#D3BD44] text-black font-extrabold md:text-[50px] text-3xl leading-none animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Hi, I&apos;m Nnamdi.
        </p>
        <div className="flex md:gap-5 gap-2 md:text-sm text-[10px] text-gray-600 dark:text-gray-400 my-2">
          <p className="underline">Software Engineer</p>
          <p className="underline">Community Preacher</p>
          <p className="underline">Writer</p>
        </div>
        <p className="my-8 text-gray-600 dark:text-gray-400">
          I&apos;m a proficient and forward-thinking software engineer,
          specializing in pioneering innovative products and solutions,
          particularly within the frontend ecosystem.
        </p>
        <p className="my-8 text-gray-600 dark:text-gray-400">
          In addition to my technical expertise, I devote time to documenting my
          learning journey by researching and crafting articles on frontend
          technologies. You can find my insights shared on platforms such as
          Hashnode, as well as my experiences on Medium.
        </p>
        <div>
          <div className="flex gap-6 text-gray-600 dark:text-gray-400 md:pt-12">
            {PortfolioData.map((portfolio) => (
              <div key={portfolio.id} className="">
                <AnimatedLink
                  href={portfolio.uri}
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {portfolio.name}
                </AnimatedLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:h-screen md:w-5/6 md:overflow-y-auto md:pt-14 pt-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <FeatureProject />
        <Articles />
        {/* <FeatureProject />
        <FeatureProject /> */}
      </div>
    </main>
  )
}
