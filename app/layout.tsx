import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { URL } from "node:url";
import "./globals.css";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const caveat = localFont({
  variable: '--caveat',
  src: [
    {
      path: './fonts/Caveat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Caveat-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Caveat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Caveat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const dancingScript = localFont({
  variable: '--dancing-script',
  src: [
    {
      path: './fonts/DancingScript-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DancingScript-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/DancingScript-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/DancingScript-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})



export const metadata: Metadata = {
  metadataBase: new URL('https://www.nnamdiazubuike.dev'),
  title: {
    default: "Nnamdi Azubuike",
    template: "%s | Nnamdi Azubuike",
  },
  description: "Nnamdi Azubuike's Portfolio, a software engineer focused on building scalable and efficient applications",
  keywords: ["Nnamdi Azubuike", "Software Engineer", "Frontend Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Nnamdi Azubuike", url: "https://www.nnamdiazubuike.dev" }],
  creator: "Nnamdi Azubuike",
  publisher: "Nnamdi Azubuike",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Nnamdi Azubuike',
    description: 'Nnamdi Azubuike is a software engineer focused on building scalable and efficient applications.',
    url: 'https://www.nnamdiazubuike.dev/',
    siteName: 'Nnamdi Azubuike',
    images: [
      {
        url: '/nnamdi.svg',
        width: 1200,
        height: 630,
        alt: 'Nnamdi Azubuike',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nnamdi Azubuike',
    description: 'Nnamdi Azubuike is a software engineer focused on building scalable and efficient applications.',
    images: ['/nnamdi.svg'],
  },
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/icon-192x192.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/icon-192x192.png",
    },
  ],
  manifest: '/manifest.json',
  verification: {
    google: 'ZnbKzL4y7SZDMOuyp5S-FGRdAlkQ_xE6rzyx8jWpXgA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${caveat.variable} ${openSans.variable} ${dancingScript.variable} font-sans antialiased md:px-28 md:py-12 `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <section className="py-12">
            {children}
          </section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
