import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSiteSettings } from "@/lib/cms";
import type { Metadata } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { URL } from "node:url";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteDescription =
  "Software Engineer who builds and scales frontend apps, backend services, and production systems with React, Next.js, Node.js, and NestJS — focused on performance, reliability, and maintainable architecture.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nnamdiazubuike.dev"),
  title: {
    default: "Nnamdi Azubuike",
    template: "%s | Nnamdi Azubuike",
  },
  description: siteDescription,
  keywords: [
    "Nnamdi Azubuike",
    "Software Engineer",
    "Frontend Lead",
    "Product Builder",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Nnamdi Azubuike", url: "https://www.nnamdiazubuike.dev" }],
  creator: "Nnamdi Azubuike",
  publisher: "Nnamdi Azubuike",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nnamdi Azubuike",
    description: siteDescription,
    url: "https://www.nnamdiazubuike.dev/",
    siteName: "Nnamdi Azubuike",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nnamdi Azubuike — Software Engineer, Frontend Lead, and Product Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nnamdi Azubuike",
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/img/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      url: "/img/favicon.svg",
    },
  ],
  manifest: "/manifest.json",
  verification: {
    google: "ZnbKzL4y7SZDMOuyp5S-FGRdAlkQ_xE6rzyx8jWpXgA",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${syne.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="site-shell">
            <Header navLinks={siteSettings.navLinks} />
            <main className="pt-10 sm:pt-14">{children}</main>
            <Footer
              columns={siteSettings.footerColumns}
              socialLinks={siteSettings.socialLinks}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
