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
import { LoadingManager } from '@/components/LoadingManager';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: 'Kelvin Perez Portfolio & Blog',

  description:
    'Kelvin Perez is a Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. With extensive experience building enterprise-level WordPress solutions, custom themes, plugins, and headless WordPress applications, Kelvin delivers scalable, high-performance web applications that power e-commerce stores and business-critical websites.',
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
    images: '/images/png/portfolio-preview.png',
    siteName: 'Kelvin Perez',
    title: 'Kelvin Perez Portfolio & Blog',
    description:
      'Kelvin Perez is a Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. With extensive experience building enterprise-level WordPress solutions, custom themes, plugins, and headless WordPress applications, Kelvin delivers scalable, high-performance web applications that power e-commerce stores and business-critical websites.',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/png/portfolio-preview.png',
    title: 'Kelvin Perez Portfolio & Blog',
    description:
      'Kelvin Perez is a Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. With extensive experience building enterprise-level WordPress solutions, custom themes, plugins, and headless WordPress applications, Kelvin delivers scalable, high-performance web applications that power e-commerce stores and business-critical websites.',
  },
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
          'min-h-screen overflow-y-hidden bg-bg-default font-sans antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          MonaLisa.variable,
        )}
      >
        <LoadingProvider>
          <LoadingManager />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <NoiseTexture /> */}
            <Menu />
            <div className="mx-auto max-w-[1440px] bg-transparent px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
