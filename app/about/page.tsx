import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import AboutMe from '@/components/about-me/AboutMe';
import BackButton from '@/components/ui/back-button';
import FAQ from '@/components/Home/FAQ';
import ConversationalContactForm from '@/components/ui/conversational-contact-form';

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Kelvin Perez - Senior WordPress Developer & Full-Stack Engineer',
  description: 'Learn about Kelvin Perez - Senior WordPress Developer with 8+ years experience building high-performance solutions for agencies and multi-location businesses. Expertise in WordPress development, PHP programming, modern JavaScript frameworks, and comprehensive DevOps practices.',
  url: 'https://kelvinperez.com/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    description: 'WordPress & PHP full-stack developer with 8+ years of experience building enterprise-level platforms, scalable architectures, and high-performance web solutions.',
    url: 'https://kelvinperez.com',
    birthPlace: {
      '@type': 'Place',
      name: 'Miami, FL',
    },
    knowsAbout: [
      'WordPress Development',
      'PHP Programming',
      'Next.js',
      'React',
      'TypeScript',
      'SEO Optimization',
      'DevOps',
      'Performance Optimization',
      'Full-Stack Development',
      'E-commerce Development',
      'Custom WordPress Themes',
      'WordPress Plugin Development',
      'ACF Pro',
      'WooCommerce',
      'Tailwind CSS',
      'GSAP Animations',
    ].map((tech) => ({
      '@type': 'Thing',
      name: tech,
    })),
    offers: {
      '@type': 'Service',
      serviceType: 'Web Development Services',
      description: 'Enterprise WordPress development, custom PHP solutions, full-stack web development, SEO optimization, and DevOps consulting',
      provider: {
        '@type': 'Person',
        name: 'Kelvin Perez',
      },
    },
    sameAs: [
      'https://github.com/TheKelvinPerez',
      'https://linkedin.com/in/kelvinperez',
      'https://twitter.com/kelvinperez',
    ],
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
      name: 'Full-Stack Development',
    },
    {
      '@type': 'Thing',
      name: 'Enterprise Solutions',
    },
  ],
  audience: {
    '@type': 'Audience',
    audienceType:
      'Potential clients, employers, and collaborators interested in WordPress development and full-stack web development services',
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
        name: 'About',
        item: 'https://kelvinperez.com/about',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'About Kelvin Perez - Senior WordPress Developer & Full-Stack Engineer',
  description: 'Learn about Kelvin Perez - Senior WordPress Developer with 8+ years experience building high-performance solutions for agencies and multi-location businesses. Expertise in WordPress, PHP, Next.js, React, TypeScript, SEO optimization, and DevOps with measurable business impact.',
  keywords: [
    'Kelvin Perez',
    'WordPress developer',
    'senior WordPress developer',
    'full-stack developer',
    'PHP developer',
    'Next.js developer',
    'React developer',
    'TypeScript developer',
    'web developer Miami',
    'WordPress expert',
    'SEO specialist',
    'DevOps engineer',
    'WordPress development Miami',
    'custom WordPress themes',
    'WordPress plugin development',
    'enterprise WordPress solutions',
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
    type: 'profile',
    locale: 'en_US',
    url: 'https://kelvinperez.com/about',
    title: 'About Kelvin Perez - Senior WordPress Developer & Full-Stack Engineer',
    description: 'Learn about Kelvin Perez - Senior WordPress Developer with 8+ years experience building high-performance solutions. Expertise in WordPress, PHP, Next.js, React, TypeScript, and comprehensive DevOps practices.',
    siteName: 'Kelvin Perez - WordPress & Full-Stack Developer',
    images: [
      {
        url: 'https://kelvinperez.com/images/png/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez - Senior WordPress Developer & Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kelvin Perez - Senior WordPress Developer',
    description: 'Senior WordPress Developer with 8+ years experience building high-performance solutions. Expertise in WordPress, PHP, Next.js, React, TypeScript, and DevOps.',
    images: ['https://kelvinperez.com/images/png/about-og-image.jpg'],
    creator: '@kelvinperez',
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
      <main className="min-h-screen">
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
                    <span className="font-medium text-purple-400">About</span>
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
                  About Kelvin Perez
                </h1>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                  Senior WordPress Developer & Full-Stack Engineer with 8+ years
                  experience building enterprise-level platforms, scalable architectures,
                  and high-performance web solutions that deliver measurable business impact.
                </p>
              </div>

              {/* AboutMe Component with animations */}
              <div className="max-w-5xl mx-auto">
                <AboutMe />
              </div>

              {/* FAQ Section */}
              <div className="mt-20">
                <FAQ />
              </div>

              {/* Contact Form Section */}
              <div className="mt-20 mb-12">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                      Let's Connect
                    </h2>
                    <p className="text-lg text-gray-300">
                      Have a question or want to discuss a project? I'd love to hear from you.
                    </p>
                  </div>
                  <ConversationalContactForm />
                </div>
              </div>

              {/* SEO Content */}
              <div className="prose prose-invert mt-16 max-w-none">
                <h2 className="mb-4 text-2xl font-bold text-purple-300">
                  Professional Journey & Expertise
                </h2>
                <p className="mb-4 text-gray-300">
                  My journey as a WordPress & PHP full-stack developer began in 2015 at
                  Broward College, evolving through agency work at Digital Age Marketing
                  Group, founding ViViFi agency in 2019, and ultimately specializing in
                  enterprise WordPress solutions. This path has provided unique perspectives
                  on both business needs and technical implementation.
                </p>

                <h3 className="mb-3 text-xl font-semibold text-purple-300">
                  Technical Excellence & Business Impact
                </h3>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-lg font-medium text-purple-200">
                      Core Technologies
                    </h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• WordPress Development (Custom Themes & Plugins)</li>
                      <li>• PHP 8.3+ (PSR-4, Composer, Modern Practices)</li>
                      <li>• Next.js 15 & React 19 (App Router, Server Components)</li>
                      <li>• TypeScript 5 (Type Safety, Enterprise Architecture)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-medium text-purple-200">
                      Specialized Skills
                    </h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• ACF Pro & Custom Post Types</li>
                      <li>• WooCommerce & E-commerce Solutions</li>
                      <li>• SEO Optimization & Schema Markup</li>
                      <li>• DevOps (Docker, Caddy, Performance Tuning)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-purple-300">
                  Proven Results & Measurable Impact
                </h3>
                <p className="text-gray-300">
                  My work consistently delivers measurable business value, from generating
                  $50K-100K in annual organic SEO traffic through automated content systems,
                  to achieving 100/100 Google PageSpeed scores with sub-1ms response times.
                  Each project demonstrates the ability to transform complex business requirements
                  into scalable technical solutions that drive growth and efficiency.
                </p>

                <div className="mt-8 rounded-lg bg-purple-900/20 p-6 border border-purple-500/30">
                  <h4 className="mb-3 text-lg font-semibold text-purple-200">
                    Available for Collaboration
                  </h4>
                  <p className="mb-4 text-gray-300">
                    Currently seeking opportunities to collaborate with agencies, businesses,
                    and development teams on complex WordPress projects, enterprise-level solutions,
                    and innovative web applications. Let's build something exceptional together.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-800/40 px-3 py-1 text-sm text-purple-200">
                      WordPress Development
                    </span>
                    <span className="rounded-full bg-purple-800/40 px-3 py-1 text-sm text-purple-200">
                      Full-Stack Solutions
                    </span>
                    <span className="rounded-full bg-purple-800/40 px-3 py-1 text-sm text-purple-200">
                      SEO Optimization
                    </span>
                    <span className="rounded-full bg-purple-800/40 px-3 py-1 text-sm text-purple-200">
                      DevOps Consulting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}