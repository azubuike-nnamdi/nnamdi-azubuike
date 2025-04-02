
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Article } from "@/lib/definitions";

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "regular" | "compact";
  className?: string;
}

export const ArticleCard = ({ article, variant = "regular", className }: ArticleCardProps) => {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <Card
      className={cn(
        "group overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md",
        isFeatured ? "h-full" : "h-full",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="relative aspect-[16/9] bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 p-4 w-full">
          <Badge className="bg-primary hover:bg-primary/90 mb-2">{article.category}</Badge>
          <h2 className={cn(
            "text-white font-bold leading-tight mb-2 transition-colors",
            isFeatured ? "text-3xl" : isCompact ? "text-lg" : "text-xl"
          )}>
            {article.title}
          </h2>
        </div>
      </div>

      <CardContent className="pt-4">
        <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <Book className="mr-1 h-3 w-3" />
            <span>{article.readTime} min read</span>
          </div>
        </div>

        {!isCompact && (
          <p className="text-muted-foreground line-clamp-2">{article.desc}</p>
        )}
      </CardContent>

      {isFeatured && (
        <CardFooter className="pt-0">
          <div className="inline-flex items-center text-primary font-medium text-sm transition-colors hover:text-primary/80">
            Read article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
