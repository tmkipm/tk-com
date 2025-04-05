import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tylerknibbs.com'),
  title: {
    default: "Tyler Knibbs - Data Analyst & Developer",
    template: "%s | Tyler Knibbs"
  },
  description: "Portfolio of Tyler Knibbs, Data Analyst & Developer specializing in SQL, Power BI, Python, and Azure, with expertise in data migrations and analytics automation.",
  keywords: ["Data Analyst", "Developer", "SQL", "Power BI", "Python", "Azure", "Data Engineering"],
  authors: [{ name: "Tyler Knibbs" }],
  creator: "Tyler Knibbs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tylerknibbs.com",
    title: "Tyler Knibbs - Data Analyst & Developer",
    description: "Portfolio of Tyler Knibbs, Data Analyst & Developer specializing in SQL, Power BI, and cloud technologies.",
    siteName: "Tyler Knibbs Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tyler Knibbs Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Knibbs - Data Analyst & Developer",
    description: "Portfolio of Tyler Knibbs, Data Analyst & Developer specializing in SQL, Power BI, and cloud technologies.",
    images: ["/images/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-gray-900`}
      >
        <ThemeProvider>
          {/* Skip to content link for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-black focus:z-50">
            Skip to content
          </a>
          <div className="flex flex-col flex-grow">
            <NavBar />
            <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
              {/* <PageTransitionWrapper> */}
                {children} { /* Temporarily removed wrapper */ }
              {/* </PageTransitionWrapper> */}
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
