import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSiteSettings } from "@/lib/cms";
import { personJsonLd } from "@/lib/person-jsonld";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { URL } from "node:url";
import "./globals.css";
import "./redesign.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${jakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
          />
          <SiteHeader />
          {children}
          <SiteFooter whatsappUrl={siteSettings.contact.whatsappUrl} />
          <Script id="site-behavior" strategy="afterInteractive">
            {`(function () {
  var header = document.getElementById('hd');
  var nav = header && header.querySelector('.nav');
  var toggle = header && header.querySelector('.nav-toggle');
  if (header && nav && !header.dataset.bound) {
    header.dataset.bound = '1';
    var onScroll = function () {
      header.classList.toggle('s', window.scrollY > 10);
      var links = nav.querySelectorAll('ul a[data-id]');
      if (location.pathname !== '/') {
        links.forEach(function (link) {
          link.classList.toggle('on', link.getAttribute('data-id') === 'fun' && location.pathname === '/fun');
        });
        return;
      }
      var active = 'top';
      links.forEach(function (link) {
        var id = link.getAttribute('data-id');
        var section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < 200) active = id;
      });
      links.forEach(function (link) {
        link.classList.toggle('on', link.getAttribute('data-id') === active);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        toggle.textContent = open ? 'Close' : 'Menu';
      });
    }
  }
})();`}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
