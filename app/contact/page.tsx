import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ConversationalContactForm from '@/components/ui/conversational-contact-form';
import BackButton from '@/components/ui/back-button';

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Kelvin Perez | WordPress & Full-Stack Developer',
  description:
    'Get in touch with Kelvin Perez, an experienced WordPress & PHP full-stack developer. Available for remote opportunities in WordPress development, Laravel applications, e-commerce solutions, and enterprise web development.',
  url: 'https://kelvinperez.com/contact',
  mainEntity: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    availableLanguage: ['English'],
    email: 'contact@kelvinperez.com',
    hoursAvailable: 'Mo-Fr 09:00-18:00',
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
  },
  provider: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'WordPress & Full-Stack Developer',
    url: 'https://kelvinperez.com',
    email: 'contact@kelvinperez.com',
    description:
      'WordPress & PHP full-stack developer with 8+ years of experience building enterprise-level platforms, scalable architectures, and high-performance web solutions.',
    knowsAbout: [
      'WordPress Development',
      'PHP Programming',
      'Laravel Framework',
      'Next.js',
      'React',
      'TypeScript',
      'WooCommerce',
      'E-commerce Development',
      'SEO Optimization',
      'DevOps',
      'Performance Optimization',
      'Full-Stack Development',
      'Enterprise Solutions',
      'Custom Web Applications',
    ].map((tech) => ({
      '@type': 'Thing',
      name: tech,
    })),
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        serviceType: 'Web Development Services',
        name: 'WordPress & Full-Stack Development',
        description: 'Enterprise WordPress development, custom PHP applications, Laravel solutions, and modern full-stack web development services.',
        provider: {
          '@type': 'Person',
          name: 'Kelvin Perez',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'WordPress Development',
                description: 'Custom WordPress themes, plugins, and enterprise platform development',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'PHP Development',
                description: 'Custom PHP applications, API development, and backend solutions',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Laravel Development',
                description: 'Enterprise Laravel applications, e-commerce platforms, and API systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Full-Stack Development',
                description: 'Modern web applications using Next.js, React, TypeScript, and cutting-edge technologies',
              },
            },
          ],
        },
      },
      availability: 'https://schema.org/InStock',
      availabilityStarts: '2024-01-01T09:00:00-05:00',
      offeredThrough: {
        '@type': 'WebSite',
        name: 'Kelvin Perez - WordPress & Full-Stack Developer',
        url: 'https://kelvinperez.com',
      },
    },
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Web Development',
    },
    {
      '@type': 'Thing',
      name: 'WordPress Development',
    },
    {
      '@type': 'Thing',
      name: 'PHP Programming',
    },
    {
      '@type': 'Thing',
      name: 'Full-Stack Development',
    },
    {
      '@type': 'Thing',
      name: 'Enterprise Solutions',
    },
    {
      '@type': 'Thing',
      name: 'E-commerce Development',
    },
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Potential clients, employers, and collaborators seeking web development services',
  },
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Kelvin Perez - WordPress & Full-Stack Developer',
    url: 'https://kelvinperez.com',
  },
  dateModified: new Date().toISOString(),
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kelvinperez.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://kelvinperez.com/contact',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Contact Kelvin Perez | WordPress & Full-Stack Developer | Available for Hire',
  description:
    'Get in touch with Kelvin Perez, an experienced WordPress & PHP full-stack developer with 8+ years of experience. Available for remote opportunities in WordPress development, Laravel applications, e-commerce solutions, and enterprise web development. Let\'s discuss your project.',
  keywords: [
    'contact WordPress developer',
    'hire PHP developer',
    'WordPress development services',
    'Laravel developer for hire',
    'full-stack developer contact',
    'remote web developer',
    'enterprise WordPress solutions',
    'e-commerce development',
    'custom PHP applications',
    'Next.js developer',
    'React developer',
    'TypeScript developer',
    'SEO optimization services',
    'DevOps consulting',
    'web development consultant',
    'Kelvin Perez contact',
  ],
  authors: [{ name: 'Kelvin Perez', url: 'https://kelvinperez.com' }],
  creator: 'Kelvin Perez',
  publisher: 'Kelvin Perez',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kelvinperez.com/contact',
    title: 'Contact Kelvin Perez | WordPress & Full-Stack Developer | Available for Hire',
    description:
      'Available for remote opportunities in WordPress development, Laravel applications, and full-stack web development. Let\'s discuss your project and how I can help your team succeed.',
    siteName: 'Kelvin Perez - WordPress & Full-Stack Developer',
    images: [
      {
        url: 'https://kelvinperez.com/contact/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Kelvin Perez - WordPress Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Kelvin Perez | WordPress & Full-Stack Developer | Available for Hire',
    description:
      'Available for remote opportunities in WordPress development, Laravel applications, and full-stack web development. Let\'s discuss your project.',
    images: ['https://kelvinperez.com/contact/og-contact.jpg'],
    creator: '@kelvinperez',
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
        <div className="min-h-screen rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          <div className="mx-auto max-w-7xl px-10 py-16 lg:px-4">
            {/* Breadcrumbs */}
            <nav
              className="mb-8 flex items-center justify-center lg:items-start lg:justify-start"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/"
                    className="flex items-center transition-colors hover:text-purple-400"
                    aria-label="Navigate to home page"
                  >
                    <Home className="mr-1 h-4 w-4" />
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="font-medium text-purple-400">Contact</span>
                </li>
              </ol>
            </nav>

            {/* Back Button */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <BackButton className="border-purple-500/60 text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-900/40 hover:text-purple-200" />
            </div>

            {/* Page Header */}
            <div className="mb-16 text-center">
              <h1 className="mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                Get In Touch
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                I'm actively seeking remote opportunities in WordPress, PHP, Laravel,
                and full-stack development. Whether you need custom solutions, e-commerce
                development, or enterprise applications, let's discuss how I can help your team.
              </p>
            </div>

            {/* Contact Form Section */}
            <ConversationalContactForm />

            {/* Additional Contact Information */}
            <div className="prose prose-invert mt-16 max-w-none">
              <h2 className="mb-4 text-2xl font-bold text-purple-300">
                Let's Work Together
              </h2>
              <p className="mb-6 text-gray-300">
                With 8+ years of experience in web development, I specialize in building
                enterprise-level WordPress platforms, custom PHP applications, and modern
                full-stack solutions. I'm passionate about creating scalable architectures
                that deliver measurable business value.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-purple-300">
                    Services Offered
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• WordPress Development & Customization</li>
                    <li>• PHP Application Development</li>
                    <li>• Laravel Framework Solutions</li>
                    <li>• WooCommerce & E-commerce</li>
                    <li>• Next.js & React Development</li>
                    <li>• SEO Optimization & Performance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-purple-300">
                    Why Work With Me
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 8+ Years of Professional Experience</li>
                    <li>• Enterprise-Grade Solutions</li>
                    <li>• Modern Development Practices</li>
                    <li>• Performance-Focused Approach</li>
                    <li>• Clear Communication & Collaboration</li>
                    <li>• Remote-First Work Ethic</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-800/20 to-purple-900/40 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-xl font-semibold text-purple-200">
                  Current Availability
                </h3>
                <p className="text-gray-200">
                  I'm currently available for full-time remote positions and contract opportunities.
                  I'm particularly interested in projects involving WordPress development, PHP/Laravel
                  applications, or modern full-stack work with Next.js and React. If you're looking for
                  a developer who combines technical expertise with business acumen, I'd love to hear
                  about your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}