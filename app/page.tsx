import Hero from '@/components/Hero/Hero';
import FeaturedVideo from '@/components/FeaturedVideo/FeaturedVideo';
import TimelineComponent from '@/components/Timeline/Timeline';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import { Footer } from '@/components/footer';
import ResponsiveGodRays from '@/components/ui/ResponsiveGodRays';
import Faq from '@/components/Home/FAQ';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';
import Books from '@/components/Books/Books';
import GearSection from '@/components/Gear/GearSection';
import ContactForm from '@/components/ui/conversational-contact-form';
import CallToAction from '@/components/ui/call-to-action-1';
import { LoadingManager } from '@/components/LoadingManager';
import Script from 'next/script';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 43200; // revalidate every 12 hours

export const metadata: Metadata = {
  title: 'Kelvin Perez | Full-Stack WordPress Developer & PHP Expert',
  description:
    'Kelvin Perez is a Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. Expert in enterprise-level WordPress solutions, custom themes, plugins, and headless WordPress applications.',
  openGraph: {
    title: 'Kelvin Perez | Full-Stack WordPress Developer & PHP Expert',
    description:
      'Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration. Expert in enterprise-level WordPress solutions.',
    type: 'website',
    url: '/',
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
      'Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration.',
    images: ['/images/png/portfolio-preview.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kelvin Perez',
  url: 'https://kelvinperez.com',
  image: 'https://kelvinperez.com/images/png/portfolio-preview.png',
  jobTitle: 'Senior Full-Stack WordPress Developer',
  description:
    'Senior Full-Stack WordPress & PHP Developer specializing in custom WordPress development, WooCommerce, and modern React integration.',
  sameAs: [
    'https://github.com/TheKelvinPerez',
    'https://twitter.com/KelvinPerezDev',
    'https://linkedin.com/in/kelvinperez',
  ],
  knowsAbout: [
    'WordPress Development',
    'PHP Development',
    'WooCommerce',
    'React',
    'JavaScript',
    'TypeScript',
    'Full-Stack Development',
    'Headless WordPress',
    'WordPress REST API',
    'Custom Theme Development',
    'Plugin Development',
    'E-commerce Solutions',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Your University',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

const professionalServiceData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kelvin Perez WordPress Development Services',
  description:
    'Professional WordPress and PHP development services specializing in custom themes, plugins, WooCommerce, and headless WordPress solutions.',
  provider: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'WordPress Development',
    'WooCommerce Development',
    'Custom Theme Development',
    'Plugin Development',
    'Headless WordPress',
    'WordPress Consulting',
  ],
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kelvin Perez Portfolio',
  description:
    'Portfolio and blog of Kelvin Perez, a Senior Full-Stack WordPress & PHP Developer.',
  url: 'https://kelvinperez.com',
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
  inLanguage: 'en-US',
};

export default function Home() {
  noStore();

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-data-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <LoadingManager />
      <main className="bg-transparent">
        <ResponsiveGodRays />
        <Hero />
        {/* <FeaturedVideo /> */}
        <AboutMe />
        <CallToAction />
        <TimelineComponent />
        <SecondQuote />
        <CallToAction />
        <Projects />
        <Books />
        <GearSection />
        <Faq />
        <ContactForm />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
