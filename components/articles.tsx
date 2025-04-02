"use client";

import { ArticlesData } from "@/data";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

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
      <Button className="my-4 underline bg-white dark:bg-[#181810] text-black dark:text-[#D3BD44] hover:bg-gray-100 dark:hover:bg-[#2A2B27]">
        <Link href={"/articles"}>Find More Here</Link>
      </Button>
    </main>
  );
};

export default Articles;


