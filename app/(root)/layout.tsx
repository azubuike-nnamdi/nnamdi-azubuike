import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: {
    default: "Nnamdi Azubuike",
    template: "%s | Nnamdi Azubuike",
  },
  description: "Nnamdi Azubuike's Portfolio, a software engineer focused on building scalable and efficient applications",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      url: "./favicon.svg",
    },
    {
      rel: "apple",
      url: "./favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-7 pt-36">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
