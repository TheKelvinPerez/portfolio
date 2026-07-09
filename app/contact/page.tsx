import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ConversationalContactForm from '@/components/ui/conversational-contact-form';
import BackButton from '@/components/ui/back-button';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Kelvin Perez | Full Stack Laravel Developer',
  description:
    'Contact Kelvin Perez about full stack Laravel developer roles, contract Laravel work, React and TypeScript product UI, PHP, databases, infrastructure, WordPress, and Shopify projects.',
  url: 'https://kelvinperez.com/contact',
  provider: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Full Stack Laravel Developer',
    url: 'https://kelvinperez.com',
    email: 'contact@kelvinperez.com',
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
    ].map((tech) => ({
      '@type': 'Thing',
      name: tech,
    })),
  },
};

export const metadata: Metadata = {
  title: 'Contact | Full Stack Laravel Developer',
  description:
    'Contact Kelvin Perez about full stack Laravel roles, contract Laravel work, React and TypeScript product UI, PHP, databases, infrastructure, WordPress, and Shopify projects.',
  keywords: [
    'hire Laravel developer',
    'full stack Laravel developer',
    'Laravel developer remote',
    'PHP developer remote',
    'React TypeScript developer',
    'Inertia developer',
    'Kelvin Perez contact',
  ],
  authors: [{ name: 'Kelvin Perez', url: 'https://kelvinperez.com' }],
  creator: 'Kelvin Perez',
  publisher: 'Kelvin Perez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kelvinperez.com/contact',
    title: 'Contact | Full Stack Laravel Developer',
    description:
      'Available for remote full stack Laravel roles and selective contract work around Laravel, PHP, React, TypeScript, databases, and product workflows.',
    siteName: 'Kelvin Perez Portfolio',
    images: [
      {
        url: 'https://kelvinperez.com/images/png/kelvin-perez-website-preview.png',
        width: 1200,
        height: 630,
        alt: 'Contact Kelvin Perez Full Stack Laravel Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Full Stack Laravel Developer',
    description:
      'Available for remote Laravel roles and selective contract work.',
    images: ['https://kelvinperez.com/images/png/kelvin-perez-website-preview.png'],
    creator: '@thekelvinperez',
  },
  alternates: {
    canonical: 'https://kelvinperez.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-20 lg:py-40">
        <div className="min-h-[100dvh] rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/50 via-purple-900/25 to-purple-950/60">
          <div className="mx-auto max-w-7xl px-10 py-16 lg:px-4">
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
                  <span className="font-medium text-purple-200">Contact</span>
                </li>
              </ol>
            </nav>

            <div className="mb-8 flex justify-center lg:justify-start">
              <BackButton className="border-purple-300/40 text-purple-100 transition-all duration-300 hover:border-purple-200 hover:bg-purple-900/30 hover:text-white" />
            </div>

            <div className="mb-16 text-center">
              <h1 className="mb-6 bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                Contact
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                I am looking for remote full stack Laravel roles and selective
                contract work around Laravel, PHP, React, TypeScript, databases,
                integrations, and product workflows.
              </p>
            </div>

            <ConversationalContactForm />

            <div className="mt-16 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 text-gray-300 shadow-xl shadow-purple-500/10 backdrop-blur-md">
              <h2 className="mb-3 text-2xl font-bold text-white">
                Best Role Fit
              </h2>
              <p className="max-w-4xl leading-7">
                The strongest match is a full stack Laravel role where I can
                contribute across backend workflows, React and TypeScript
                product UI, databases, integrations, queues, and production
                operations. WordPress and Shopify explain the path, but Laravel
                is the role I am aiming for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
