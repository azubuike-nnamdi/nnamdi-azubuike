import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
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
  title: {
    default: "Nnamdi Azubuike",
    template: "%s | Nnamdi Azubuike",
  },
  description: "Nnamdi Azubuike's Portfolio, a software engineer focused on building scalable and efficient applications",
  openGraph: {
    title: 'Nnamdi Azubuike',
    description: 'Nnamdi Azubuike is a software engineer focused on building scalable and efficient applications.',
    url: 'https://www.nnamdiazubuike.dev/',
    siteName: 'Nnamdi Azubuike',
    images: [
      {
        url: 'https://www.nnamdiazubuike.dev/',
        width: 800,
        height: 600,
        alt: 'Nnamdi Azubuike',
      },
    ],
    locale: 'en_US',
    type: 'website',

  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ZnbKzL4y7SZDMOuyp5S-FGRdAlkQ_xE6rzyx8jWpXgA" />
      </head>
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
