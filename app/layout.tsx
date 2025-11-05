import type { Metadata, Viewport } from 'next';
import {
  Inter as FontSans,
  La_Belle_Aurore as FontHandwriting,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Menu from '@/components/Hero/Menu/Menu';
import { ThemeProvider } from 'next-themes';
import { LoadingProvider } from '@/lib/context/LoadingContext';
import ScrollRestoration from '@/components/ScrollRestoration';
import { PostHogProvider } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: {
    default: 'Kelvin Perez | Full-Stack WordPress Developer & PHP Expert',
    template: '%s | Kelvin Perez',
  },
  description:
    'Kelvin Perez is a Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. With extensive experience building enterprise-level WordPress solutions, custom themes, plugins, and headless WordPress applications, Kelvin delivers scalable, high-performance web applications that power e-commerce stores and business-critical websites.',
  keywords: [
    'Kelvin Perez',
    'Full-Stack WordPress Developer',
    'Senior WordPress Developer',
    'PHP Developer',
    'Custom WordPress Development',
    'WooCommerce Development',
    'WordPress Expert',
    'React WordPress Integration',
    'Headless WordPress',
    'WordPress Plugin Development',
    'WordPress Theme Development',
    'Enterprise WordPress Solutions',
    'E-commerce Development',
    'WordPress Performance Optimization',
    'Custom WordPress Themes',
    'WordPress REST API',
    'Modern WordPress Development',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Kelvin Perez',
    title: 'Kelvin Perez | Full-Stack WordPress Developer & PHP Expert',
    description:
      'Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. Expert in enterprise-level WordPress solutions, custom themes, plugins, and headless WordPress applications.',
    images: [
      {
        url: '/images/png/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez - Full-Stack WordPress Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Perez | Full-Stack WordPress Developer & PHP Expert',
    description:
      'Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. Expert in enterprise-level WordPress solutions.',
    images: ['/images/png/portfolio-preview.png'],
    creator: '@KelvinPerezDev',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-bg-default font-sans antialiased',
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
              {/* <NoiseTexture /> */}
              {/* <ScrollRestoration /> - Temporarily disabled to test contact form scroll fix */}
              <Menu />
              <div className="mx-auto max-w-[1440px] bg-transparent px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </ThemeProvider>
          </LoadingProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
