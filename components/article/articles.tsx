"use client";

import { ArticlesData } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AnimatedLink } from "../ui/animated-link";

const Articles = () => {
  return (
    <section className="text-gray-600 dark:text-gray-400 mt-16 mb-12">
      <h2 className="text-2xl font-bold font-dancing-script underline decoration-1 underline-offset-8 mb-8">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12">
        {ArticlesData.slice(0, 4).map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="transition-all"
          >
            <Link href={article.uri} target="_blank" className="group block p-4 -mx-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min read
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors lowercase">
                {article.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                {article.desc}
              </p>

              <div className="mt-4 flex items-center gap-3 text-[11px] font-medium">
                {/* <span className="text-gray-500 italic">#{article.category?.map() || 'dev'}</span> */}

              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex">
        <AnimatedLink
          href="/articles"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white pb-0.5"
        >
          Read all posts
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </AnimatedLink>
      </div>
    </section>
  );
};

export default Articles;
