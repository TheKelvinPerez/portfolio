import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ProjectCard from '@/components/Projects/ProjectCard';
import { projectsData } from '@/components/Projects/projectsData';
import BackButton from '@/components/ui/back-button';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Laravel and Full Stack Projects by Kelvin Perez',
  description:
    'Project portfolio for Kelvin Perez, focused on Laravel, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI integrations.',
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
      },
    })),
  },
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Full Stack Laravel Developer',
    url: 'https://kelvinperez.com',
  },
};

export const metadata: Metadata = {
  title: 'Projects | Full Stack Laravel Developer',
  description:
    'Laravel first project portfolio featuring Light Code Labs Dashboard, Chrome extension lead capture, WordPress platform work, Shopify ecommerce systems, and supporting case studies.',
  keywords: [
    'Laravel projects',
    'full stack Laravel portfolio',
    'Inertia React projects',
    'TypeScript projects',
    'PostgreSQL projects',
    'Docker Laravel',
    'WordPress projects',
    'Shopify projects',
    'Kelvin Perez',
  ],
  authors: [{ name: 'Kelvin Perez', url: 'https://kelvinperez.com' }],
  creator: 'Kelvin Perez',
  publisher: 'Kelvin Perez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kelvinperez.com/projects',
    title: 'Projects | Full Stack Laravel Developer',
    description:
      'Laravel first project portfolio featuring Light Code Labs Dashboard, Chrome extension lead capture, WordPress platform work, Shopify ecommerce systems, and supporting case studies.',
    siteName: 'Kelvin Perez Portfolio',
    images: [
      {
        url: 'https://kelvinperez.com/images/png/kelvin-perez-website-preview.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez Laravel project portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Full Stack Laravel Developer',
    description:
      'Laravel first project portfolio with WordPress and Shopify supporting proof.',
    images: ['https://kelvinperez.com/images/png/kelvin-perez-website-preview.png'],
    creator: '@thekelvinperez',
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
                  <span className="font-medium text-purple-200">Projects</span>
                </li>
              </ol>
            </nav>

            <div className="mb-8 flex justify-center lg:justify-start">
              <BackButton className="border-purple-300/40 text-purple-100 transition-all duration-300 hover:border-purple-200 hover:bg-purple-900/30 hover:text-white" />
            </div>

            <div className="mb-16 text-center">
              <h1 className="mb-6 bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                Project Proof
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                The dashboard is the main proof. WordPress, Shopify, and the
                Chrome extension show the path that built the foundation around
                product work.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={project.slug}
                  className={`transform transition-all duration-300 hover:scale-[1.02] ${
                    index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    slug={project.slug}
                    links={project.links}
                    featured={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 text-gray-300 shadow-xl shadow-purple-500/10 backdrop-blur-md">
              <h2 className="mb-3 text-2xl font-bold text-white">
                Where To Start
              </h2>
              <p className="max-w-4xl leading-7">
                Start with Light Code Labs Dashboard. It is the clearest example
                of the Laravel, product, UI, integrations, queue, and
                infrastructure work I want to keep doing. SunnySide, the
                WordPress agency work, the Chrome extension, and Shopify show
                the path that built the foundation around it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
