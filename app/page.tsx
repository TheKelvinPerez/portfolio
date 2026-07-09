import Hero from '@/components/Hero/Hero';
import TimelineComponent from '@/components/Timeline/Timeline';
import AboutMe from '@/components/about-me/AboutMe';
import ResponsiveGodRays from '@/components/ui/ResponsiveGodRays';
import Faq from '@/components/Home/FAQ';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';
import Books from '@/components/Books/Books';
import ContactForm from '@/components/ui/conversational-contact-form';
import CallToAction from '@/components/ui/call-to-action-1';
import { LoadingManager } from '@/components/LoadingManager';
import DashboardProof from '@/components/DashboardProof/DashboardProof';
import FeaturedVideo from '@/components/FeaturedVideo/FeaturedVideo';
import Script from 'next/script';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 43200;

const siteUrl = 'https://kelvinperez.com';
const previewImage = `${siteUrl}/images/png/kelvin-perez-website-preview.png`;

export const metadata: Metadata = {
  title:
    'Kelvin Perez | Full Stack Laravel Developer | Inertia, React, TypeScript',
  description:
    'Full stack Laravel developer with production experience across Laravel, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI integrations.',
  keywords: [
    'Laravel developer',
    'full stack Laravel developer',
    'PHP developer',
    'Inertia developer',
    'React developer',
    'TypeScript developer',
    'PostgreSQL developer',
    'Docker Laravel',
    'Laravel queues',
    'Laravel SaaS',
    'WordPress developer',
    'Shopify developer',
    'Kelvin Perez',
  ],
  authors: [{ name: 'Kelvin Perez', url: siteUrl }],
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
    url: siteUrl,
    title:
      'Kelvin Perez | Full Stack Laravel Developer | Inertia, React, TypeScript',
    description:
      'Portfolio focused on Laravel product work, including a dashboard built from scratch with Inertia, React, TypeScript, PostgreSQL, Docker, queues, and applied AI integrations.',
    siteName: 'Kelvin Perez Portfolio',
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez Full Stack Laravel Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Kelvin Perez | Full Stack Laravel Developer | Inertia, React, TypeScript',
    description:
      'Laravel, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI integrations.',
    images: [previewImage],
    creator: '@thekelvinperez',
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kelvin Perez',
  url: siteUrl,
  image: previewImage,
  jobTitle: 'Full Stack Laravel Developer',
  description:
    'Full stack Laravel developer focused on Laravel, Inertia, React, TypeScript, PostgreSQL, Docker, WordPress, Shopify, and applied AI product integrations.',
  email: 'contact@kelvinperez.com',
  sameAs: [
    'https://github.com/TheKelvinPerez',
    'https://twitter.com/KelvinPerezDev',
    'https://linkedin.com/in/kelvinperez',
  ],
  knowsAbout: [
    'Laravel',
    'PHP',
    'Inertia',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Queues',
    'Stripe',
    'OpenAI API',
    'WordPress',
    'Shopify',
    'UI and UX Design',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kelvin Perez Portfolio',
  description:
    'Portfolio for Kelvin Perez, a full stack Laravel developer with WordPress, Shopify, React, TypeScript, and infrastructure experience.',
  url: siteUrl,
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    url: siteUrl,
  },
  inLanguage: 'en-US',
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Light Code Labs Dashboard',
  description:
    'Laravel, Inertia, and React platform that turns captured business leads into generated sales site demos with enrichment, queues, chatbot capture, and usage observability.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What role am I aiming for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I am aiming for a full stack Laravel developer role where I can work across Laravel, PHP, Inertia, React, TypeScript, databases, APIs, queues, and product features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the dashboard the main project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Light Code Labs Dashboard is the strongest project here because I built it from scratch. It captures a business lead, stores it in Laravel, enriches it, generates sales site demos, supports chatbot capture, handles voice workflows, tracks usage, and runs like a real product.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are WordPress and Shopify still here?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress is how I built my PHP foundation, client work, content systems, local SEO, and performance experience. Shopify shows ecommerce range. Laravel is the direction, but those chapters still matter.',
      },
    },
  ],
};

export default function Home() {
  noStore();

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="structured-data-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LoadingManager />
      <main className="min-h-[100dvh]">
        <ResponsiveGodRays />
        <Hero />
        <FeaturedVideo />
        <DashboardProof />
        <Projects />
        <CallToAction
          heading="Need the quick version?"
          body="The resume gives the concise scan of the same story: Laravel product work, React and TypeScript UI, PHP, databases, infrastructure, and recent project highlights."
        />
        <AboutMe />
        <CallToAction
          heading="For the formal work history"
          body="The letter explains the transition. The resume keeps it structured with roles, stack, project highlights, and the work history behind the portfolio."
        />
        <TimelineComponent />
        <CallToAction
          heading="Want the resume next?"
          body="The journey shows how the work evolved. The resume keeps the same story concise for screening and technical review."
        />
        <Books />
        <Faq />
        <ContactForm />
        <CallToAction
          heading="Keep the resume handy"
          body="The resume is available as a Google Doc. This site gives the project context, timeline, and case studies behind it."
        />
      </main>
    </>
  );
}
