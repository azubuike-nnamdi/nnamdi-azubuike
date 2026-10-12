import BackToTop from "@/components/ui/back-to-top";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSiteSettings } from "@/lib/cms";
import { personJsonLd } from "@/lib/person-jsonld";
import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { URL } from "node:url";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteDescription =
  "Software Engineering Lead at MTN Nigeria. I lead engineering across self-service, messaging, connectivity, and payments — products used by more than a million people a month.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nnamdiazubuike.dev"),
  title: {
    default: "Nnamdi Azubuike",
    template: "%s | Nnamdi Azubuike",
  },
  description: siteDescription,
  keywords: [
    "Nnamdi Azubuike",
    "Software Engineering Lead",
    "MTN Nigeria",
    "Fintech",
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
        alt: "Nnamdi Azubuike — Software Engineering Lead, MTN Nigeria",
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
  icons: {
    icon: [
      { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/img/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
        className={`${instrumentSans.variable} ${newsreader.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
          />
          <div className="site-shell">
            <Header navLinks={siteSettings.navLinks} />
            <main className="pt-10 sm:pt-14">{children}</main>
            <Footer
              columns={siteSettings.footerColumns}
              socialLinks={siteSettings.socialLinks}
              brand={siteSettings.footer}
            />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
