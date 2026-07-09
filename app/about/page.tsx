import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import AboutMe from '@/components/about-me/AboutMe';
import BackButton from '@/components/ui/back-button';
import FAQ from '@/components/Home/FAQ';
import ConversationalContactForm from '@/components/ui/conversational-contact-form';
import CallToAction from '@/components/ui/call-to-action-1';
import Skills from '@/components/Skills/Skills';
import TimelineComponent from '@/components/Timeline/Timeline';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Kelvin Perez | Full Stack Laravel Developer',
  description:
    'About Kelvin Perez, a full stack Laravel developer with a WordPress foundation, product dashboard experience, React and TypeScript UI skills, infrastructure exposure, and ecommerce range.',
  url: 'https://kelvinperez.com/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Full Stack Laravel Developer',
    description:
      'Full stack Laravel developer focused on Laravel, PHP, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI product integrations.',
    url: 'https://kelvinperez.com',
    knowsAbout: [
      'Laravel',
      'PHP',
      'Inertia',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Stripe',
      'WordPress',
      'Shopify',
      'UI and UX Design',
    ].map((tech) => ({
      '@type': 'Thing',
      name: tech,
    })),
    sameAs: [
      'https://github.com/TheKelvinPerez',
      'https://linkedin.com/in/kelvinperez',
      'https://twitter.com/kelvinperez',
    ],
  },
};

export const metadata: Metadata = {
  title: 'About | Full Stack Laravel Developer',
  description:
    'Learn about Kelvin Perez, a full stack Laravel developer with WordPress roots, product dashboard experience, React and TypeScript UI skills, infrastructure exposure, and ecommerce range.',
  keywords: [
    'Kelvin Perez',
    'Laravel developer',
    'full stack Laravel developer',
    'PHP developer',
    'React developer',
    'TypeScript developer',
    'Inertia developer',
    'WordPress developer',
    'Shopify developer',
  ],
  authors: [{ name: 'Kelvin Perez', url: 'https://kelvinperez.com' }],
  creator: 'Kelvin Perez',
  publisher: 'Kelvin Perez',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://kelvinperez.com/about',
    title: 'About | Full Stack Laravel Developer',
    description:
      'Laravel first developer story with WordPress roots, product dashboard proof, React and TypeScript UI, infrastructure, and ecommerce range.',
    siteName: 'Kelvin Perez Portfolio',
    images: [
      {
        url: 'https://kelvinperez.com/images/png/kelvin-perez-website-preview.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez Full Stack Laravel Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Full Stack Laravel Developer',
    description:
      'Laravel first developer story with WordPress roots and product dashboard proof.',
    images: ['https://kelvinperez.com/images/png/kelvin-perez-website-preview.png'],
    creator: '@thekelvinperez',
  },
  alternates: {
    canonical: 'https://kelvinperez.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-[100dvh]">
        <div className="py-20 lg:py-40">
          <div className="min-h-[100dvh] rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/50 via-purple-900/25 to-purple-950/60">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
              <nav
                className="mb-8 flex items-center justify-center lg:items-start lg:justify-start"
                aria-label="Breadcrumb"
              >
                <ol className="flex items-center space-x-2 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center transition-colors hover:text-purple-200"
                      aria-label="Navigate to home page"
                    >
                      <Home className="mr-1 h-4 w-4" />
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mx-2 text-gray-500">/</span>
                    <span className="font-medium text-purple-200">About</span>
                  </li>
                </ol>
              </nav>

              <div className="mb-8 flex justify-center lg:justify-start">
                <BackButton className="border-purple-300/40 text-purple-100 transition-all duration-300 hover:border-purple-200 hover:bg-purple-900/30 hover:text-white" />
              </div>

              <div className="mb-16 text-center">
                <h1 className="mb-6 bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                  About Kelvin Perez
                </h1>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                  WordPress is the foundation, the dashboard is the proof, and
                  Laravel is the direction.
                </p>
              </div>

              <AboutMe />
              <CallToAction />
              <Skills />
              <TimelineComponent />

              <div className="mt-20">
                <FAQ />
              </div>

              <div className="mb-12 mt-20">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-12 text-center">
                    <h2 className="mb-4 bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                      Let's Connect
                    </h2>
                    <p className="text-lg text-gray-300">
                      Have a Laravel role, product dashboard, or serious PHP
                      project in mind? Send it over.
                    </p>
                  </div>
                  <ConversationalContactForm />
                </div>
              </div>

              <div className="mt-16 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 text-gray-300 shadow-xl shadow-purple-500/10 backdrop-blur-md">
                <h2 className="mb-3 text-2xl font-bold text-white">
                  Positioning
                </h2>
                <p className="max-w-4xl leading-7">
                  I am not trying to erase the WordPress chapter. It is the
                  reason I understand PHP, client websites, CMS workflows,
                  local SEO, and business owners. The current chapter is
                  Laravel product work, led by the Light Code Labs Dashboard and the
                  systems around it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
