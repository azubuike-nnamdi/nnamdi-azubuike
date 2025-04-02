"use client";

import { ArticlesData } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const Articles = () => {
  return (
    <main className="text-gray-600 dark:text-gray-400 my-3">
      <h1 className="text-2xl font-bold">Recent Articles</h1>
      {ArticlesData.slice(0, 3).map((article) => (
        <Link href={article.uri} target="_blank" key={article.id}>
          <Card className="bg-white dark:bg-[#181810] text-gray-600 dark:text-gray-400 my-3 hover:bg-gray-100 dark:hover:bg-[#2A2B27] transition-all duration-300">
            <div className="flex px-5 py-3 text-xs">
              <div className="flex gap-3">
                <div>{article.date}</div> -
                <div>{article.readTime} mins read</div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <span className="underline text-sm">{article?.readMore}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
      <Button className="my-4 underline bg-white dark:bg-[#181810] text-[#D3BD44] hover:bg-gray-100 dark:hover:bg-[#2A2B27]">
        <Link href={"/articles"}>Find More Here</Link>
      </Button>
    </main>
  );
};

export default Articles;

export const HomeArticles = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const articlesToShow = ArticlesData.slice(3, 3 + visibleCount);
  return (
    <main>
      <section className="md:flex ">
        <div>
          {ArticlesData.slice(0, 1).map((article) => (
            <Link href={article.uri} key={article.id}>
              <Card className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle>
                    {/* {article.title} */}
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={1200}
                        height={300}
                        className="hover:scale-110 transition-all duration-300 overflow-hidden"
                      />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400 text-md my-2">
                  <div className="flex py-3 text-xs">
                    <div className="flex gap-3">
                      <div>{article.date}</div> -
                      <div>{article.readTime} mins read</div>
                    </div>
                  </div>
                  <h1 className="text-[#D3BD44] font-extrabold text-2xl">
                    {article.title}
                  </h1>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500 dark:text-[#B7B6B5] ">{article?.desc}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        <div className=" md:w-6/12">
          {ArticlesData.slice(1, 3).map((article) => (
            <Link href={article.uri} key={article.id}>
              <Card className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle>
                    {/* {article.title} */}
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={500}
                        height={300}
                        className="hover:scale-110 transition-all duration-300 overflow-hidden"
                      />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400 text-md my-2">
                  <div className="flex py-3 text-xs">
                    <div className="flex gap-3">
                      <div>{article.date}</div> -
                      <div>{article.readTime} mins read</div>
                    </div>
                  </div>
                  <h1 className="text-[#D3BD44] font-extrabold text-2xl">
                    {article.title}
                  </h1>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500 dark:text-[#B7B6B5] ">{article?.desc}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <hr className="md:my-12" />
      <section className="md:grid grid-cols-3">
        {articlesToShow.map((article) => (
          <Link href={article.uri} key={article.id}>
            <Card className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  {/* {article.title} */}
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={1200}
                      height={300}
                      className="hover:scale-110 transition-all duration-300 overflow-hidden"
                    />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400 text-md my-2">
                <div className="flex py-3 text-xs">
                  <div className="flex gap-3">
                    <div>{article.date}</div> -
                    <div>{article.readTime} mins read</div>
                  </div>
                </div>
                <h1 className="text-[#D3BD44] font-extrabold text-2xl">
                  {article.title}
                </h1>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 dark:text-[#B7B6B5] ">{article?.desc}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
        {visibleCount < ArticlesData.length - 3 && (
          <div className="col-span-3 text-center my-4">
            <Button
              onClick={handleViewMore}
              className="bg-[#D3BD44] text-black px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#bda937]"
            >
              View More
            </Button>
          </div>
        )}
      </section>
    </main>
  );
};
