import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ProjectCard from '@/components/Projects/ProjectCard';
import { projectsData } from '@/components/Projects/projectsData';
import BackButton from '@/components/ui/back-button';

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'All Projects - Kelvin Perez | WordPress & Full-Stack Developer',
  description:
    'Complete portfolio of enterprise WordPress platforms, full-stack solutions, and web development projects by Kelvin Perez. Featuring scalable architecture, performance optimization, and measurable business impact.',
  url: 'https://kelvinperez.com/projects',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projectsData.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        dateCreated: project.date,
        url: `https://kelvinperez.com/projects/${project.slug}`,
        keywords: project.tags.join(', '),
        author: {
          '@type': 'Person',
          name: 'Kelvin Perez',
          url: 'https://kelvinperez.com',
        },
        genre: 'Web Development',
        programmingLanguage: project.tags.filter((tag) =>
          [
            'WordPress',
            'PHP',
            'Next.js',
            'React',
            'TypeScript',
            'JavaScript',
            'Laravel',
          ].includes(tag),
        ),
        about: [
          ...project.tags.map((tag) => ({
            '@type': 'Thing',
            name: tag,
          })),
          ...project.tags
            .filter((tag) =>
              [
                'SEO',
                'DevOps',
                'Performance',
                'Security',
                'E-commerce',
              ].includes(tag),
            )
            .map((tech) => ({
              '@type': 'Thing',
              name: tech,
            })),
        ],
      },
    })),
  },
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'WordPress & Full-Stack Developer',
    url: 'https://kelvinperez.com',
    description:
      'WordPress & PHP full-stack developer with 8+ years of experience building enterprise-level platforms, scalable architectures, and high-performance web solutions.',
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
    ].map((tech) => ({
      '@type': 'Thing',
      name: tech,
    })),
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
      'Potential clients, employers, and collaborators interested in web development services',
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
        name: 'Projects',
        item: 'https://kelvinperez.com/projects',
      },
    ],
  },
};

export const metadata: Metadata = {
  title:
    'All Projects - WordPress & Full-Stack Development Portfolio | Kelvin Perez',
  description:
    'Complete portfolio showcasing enterprise WordPress platforms, full-stack solutions, and web development projects. Demonstrating expertise in WordPress, PHP, Next.js, React, TypeScript, SEO optimization, and DevOps with measurable business impact.',
  keywords: [
    'WordPress projects',
    'full-stack development',
    'PHP projects',
    'Next.js projects',
    'React projects',
    'web development portfolio',
    'enterprise WordPress',
    'SEO projects',
    'DevOps projects',
    'Kelvin Perez',
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
    url: 'https://kelvinperez.com/projects',
    title:
      'All Projects - WordPress & Full-Stack Development Portfolio | Kelvin Perez',
    description:
      'Complete portfolio showcasing enterprise WordPress platforms, full-stack solutions, and web development projects with measurable business impact.',
    siteName: 'Kelvin Perez - WordPress & Full-Stack Developer',
    images: [
      {
        url: 'https://kelvinperez.com/projects/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'All Projects - Kelvin Perez WordPress Development Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'All Projects - WordPress & Full-Stack Development Portfolio | Kelvin Perez',
    description:
      'Complete portfolio showcasing enterprise WordPress platforms, full-stack solutions, and web development projects with measurable business impact.',
    images: ['https://kelvinperez.com/projects/og-projects.jpg'],
    creator: '@kelvinperez',
  },
  alternates: {
    canonical: 'https://kelvinperez.com/projects',
  },
};

export default function ProjectsPage() {
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
                  <span className="font-medium text-purple-400">Projects</span>
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
                All Projects
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                A comprehensive showcase of enterprise WordPress platforms,
                full-stack solutions, and web development projects demonstrating
                scalable architecture, performance optimization, and measurable
                business impact.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project) => (
                <div
                  key={project.slug}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    slug={project.slug}
                    links={project.links}
                  />
                </div>
              ))}
            </div>

            {/* SEO Content */}
            <div className="prose prose-invert mt-16 max-w-none">
              <h2 className="mb-4 text-2xl font-bold text-purple-300">
                WordPress & Full-Stack Development Expertise
              </h2>
              <p className="mb-4 text-gray-300">
                This portfolio showcases my expertise in building
                enterprise-level WordPress platforms, custom PHP applications,
                and modern full-stack solutions. Each project demonstrates
                advanced technical skills in WordPress development, PHP
                programming, modern JavaScript frameworks, and comprehensive
                DevOps practices.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-purple-300">
                Technical Specializations
              </h3>
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-lg font-medium text-purple-200">
                    WordPress Development
                  </h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Custom WordPress themes and plugins</li>
                    <li>• Advanced Custom Fields (ACF) Pro</li>
                    <li>• Custom post types and taxonomies</li>
                    <li>• WordPress optimization and security</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-medium text-purple-200">
                    Modern Web Technologies
                  </h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Next.js 15 with App Router</li>
                    <li>• React 19 and TypeScript</li>
                    <li>• PHP 8.3+ and modern practices</li>
                    <li>• Tailwind CSS and responsive design</li>
                  </ul>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-purple-300">
                Business Impact & Results
              </h3>
              <p className="text-gray-300">
                Each project in this portfolio delivers measurable business
                value through improved performance, enhanced user experience,
                and technical excellence. From generating hundreds of
                SEO-optimized pages automatically to implementing
                enterprise-grade DevOps infrastructure, these solutions
                demonstrate the ability to transform business requirements into
                technical realities that drive growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

