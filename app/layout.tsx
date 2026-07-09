import type { Metadata, Viewport } from 'next';
import {
  Inter as FontSans,
  La_Belle_Aurore as FontHandwriting,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Menu from '@/components/Hero/Menu/Menu';
import { Footer } from '@/components/footer';
import { ThemeProvider } from 'next-themes';
import { LoadingProvider } from '@/lib/context/LoadingContext';
import { PostHogProvider } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: {
    default: 'Kelvin Perez | Full Stack Laravel Developer',
    template: '%s | Kelvin Perez',
  },
  description:
    'Kelvin Perez is a full stack Laravel developer focused on Laravel, PHP, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI product integrations.',
  keywords: [
    'Kelvin Perez',
    'Full Stack Laravel Developer',
    'Laravel Developer',
    'PHP Developer',
    'Inertia Developer',
    'React Developer',
    'TypeScript Developer',
    'PostgreSQL Developer',
    'Docker Laravel',
    'WordPress Developer',
    'Shopify Developer',
  ],
  authors: [{ name: 'Kelvin Perez', url: 'https://kelvinperez.com' }],
  creator: 'Kelvin Perez',
  publisher: 'Kelvin Perez',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon0.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/icon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Kelvin Perez',
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    'msapplication-TileColor': '#da532c',
    'theme-color': '#000000',
    'apple-mobile-web-app-title': 'Kelvin Perez',
  },
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Kelvin Perez',
    title: 'Kelvin Perez | Full Stack Laravel Developer',
    description:
      'Full stack Laravel developer focused on Laravel, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI product integrations.',
    images: [
      {
        url: '/images/png/kelvin-perez-website-preview.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez Full Stack Laravel Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Perez | Full Stack Laravel Developer',
    description:
      'Laravel, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI product integrations.',
    images: ['/images/png/kelvin-perez-website-preview.png'],
    creator: '@thekelvinperez',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'dark light',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHandwriting = FontHandwriting({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-handwriting',
});

const MonaLisa = localFont({
  src: '../public/fonts/monolisa/MonoLisa-Regular.ttf',
  variable: '--font-monalisa',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={cn(
          'min-h-screen !overflow-x-hidden bg-bg-default font-sans antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          MonaLisa.variable,
        )}
      >
        <PostHogProvider>
          <LoadingProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Menu />
              <div className="mx-auto max-w-[1440px] bg-transparent px-4 sm:px-6 lg:px-8">
                {children}
              </div>
              <Footer />
            </ThemeProvider>
          </LoadingProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
