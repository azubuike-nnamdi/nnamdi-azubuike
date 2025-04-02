import NotFound from "@/components/common/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The resource you're looking for doesn't exist or has been moved to another dimension.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
