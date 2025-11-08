import Hero from '@/components/Hero/Hero';
import FeaturedVideo from '@/components/FeaturedVideo/FeaturedVideo';
import TimelineComponent from '@/components/Timeline/Timeline';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import ResponsiveGodRays from '@/components/ui/ResponsiveGodRays';
import Faq from '@/components/Home/FAQ';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';
import Books from '@/components/Books/Books';
import GearSection from '@/components/Gear/GearSection';
import ContactForm from '@/components/ui/conversational-contact-form';
import CallToAction from '@/components/ui/call-to-action-1';
import { LoadingManager } from '@/components/LoadingManager';
import ImpactMetrics from '@/components/ImpactMetrics/ImpactMetrics';
import Skills from '@/components/Skills/Skills';
import Script from 'next/script';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 43200; // revalidate every 12 hours

export const metadata: Metadata = {
  title:
    'Kelvin Perez | Senior WordPress Developer & Full-Stack Engineer | Available for Hire',
  description:
    'Senior WordPress Developer with 8+ years delivering high-performance solutions for agencies and multi-location businesses. Expert in custom themes, ACF Pro, WooCommerce, and modern front-end (React, TypeScript, Tailwind CSS). Proven track record automating complex WordPress systems. Available for remote opportunities.',
  keywords: [
    'WordPress developer',
    'senior WordPress developer',
    'full-stack engineer',
    'PHP developer',
    'WooCommerce expert',
    'React developer',
    'TypeScript developer',
    'headless WordPress',
    'custom WordPress themes',
    'WordPress plugin development',
    'WordPress REST API',
    'ACF Pro expert',
    'Next.js developer',
    'Tailwind CSS',
    'remote WordPress developer',
    'WordPress consultant',
    'enterprise WordPress',
    'e-commerce WordPress',
    'WordPress performance optimization',
    'WordPress security',
    'Kelvin Perez',
    'WordPress portfolio',
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
    url: 'https://kelvinperez.com',
    title:
      'Kelvin Perez | Senior WordPress Developer & Full-Stack Engineer | Available for Hire',
    description:
      'Senior WordPress Developer with 8+ years delivering high-performance solutions. Expert in custom themes, ACF Pro, WooCommerce, and modern React integration. Available for remote opportunities.',
    siteName: 'Kelvin Perez - Senior WordPress Developer',
    images: [
      {
        url: 'https://kelvinperez.com/images/png/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Perez - Senior WordPress Developer & Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Kelvin Perez | Senior WordPress Developer & Full-Stack Engineer | Available for Hire',
    description:
      'Senior WordPress Developer with 8+ years delivering high-performance solutions. Expert in custom themes, ACF Pro, WooCommerce, and modern React integration. Available for remote opportunities.',
    images: ['https://kelvinperez.com/images/png/portfolio-preview.png'],
    creator: '@kelvinperez',
  },
  alternates: {
    canonical: 'https://kelvinperez.com',
  },
};

// Additional WebPage schema for home page
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Kelvin Perez | Senior WordPress Developer & Full-Stack Engineer',
  description:
    'Senior WordPress Developer with 8+ years delivering high-performance solutions for agencies and multi-location businesses. Expert in custom themes, ACF Pro, WooCommerce, and modern React integration.',
  url: 'https://kelvinperez.com',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Kelvin Perez Portfolio',
    url: 'https://kelvinperez.com',
  },
  about: [
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
      name: 'Web Development',
    },
  ],
  mainEntity: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    knowsAbout: [
      'WordPress Development',
      'PHP Programming',
      'React Development',
      'TypeScript',
      'Next.js',
      'WooCommerce',
      'Full-Stack Development',
    ],
  },
  dateModified: new Date().toISOString(),
  datePublished: '2024-01-01',
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
  publisher: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
};

// LocalBusiness schema for local SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kelvin Perez WordPress Development',
  description:
    'Professional WordPress and PHP development services specializing in custom themes, plugins, WooCommerce, and headless WordPress solutions.',
  url: 'https://kelvinperez.com',
  telephone: '+1-555-0123',
  email: 'contact@kelvinperez.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami-Fort Lauderdale Area',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$$',
  paymentAccepted: ['Credit Card', 'Bank Transfer', 'PayPal'],
  currenciesAccepted: 'USD',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasMap: 'https://maps.google.com/?q=Miami-Fort+Lauderdale+Area+FL',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.7617,
    longitude: -80.1918,
  },
  sameAs: [
    'https://github.com/TheKelvinPerez',
    'https://twitter.com/KelvinPerezDev',
    'https://linkedin.com/in/kelvinperez',
  ],
  founder: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
  },
};

// Comprehensive JSON-LD structured data for optimal SEO
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kelvin Perez',
  url: 'https://kelvinperez.com',
  image: 'https://kelvinperez.com/images/png/portfolio-preview.png',
  jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
  description:
    'Senior WordPress Developer with 8+ years delivering high-performance solutions for agencies and multi-location businesses. Expert in custom themes, ACF Pro, WooCommerce, and modern React integration.',
  email: 'contact@kelvinperez.com',
  telephone: '+1-555-0123',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami-Fort Lauderdale Area',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  sameAs: [
    'https://github.com/TheKelvinPerez',
    'https://twitter.com/KelvinPerezDev',
    'https://linkedin.com/in/kelvinperez',
  ],
  knowsAbout: [
    'WordPress Development',
    'PHP Programming',
    'WooCommerce Development',
    'React Development',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Tailwind CSS',
    'Full-Stack Development',
    'Headless WordPress',
    'WordPress REST API',
    'Custom Theme Development',
    'Plugin Development',
    'E-commerce Solutions',
    'Advanced Custom Fields Pro',
    'WordPress Performance Optimization',
    'WordPress Security',
    'SEO Optimization',
    'DevOps',
    'Git',
    'Docker',
    'CI/CD',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Broward College',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Lauderdale',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Self-Employed',
    description: 'WordPress Development and Full-Stack Engineering Services',
  },
  offers: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      serviceType: 'Web Development Services',
      name: 'WordPress Development Services',
      description:
        'Enterprise WordPress development, custom PHP applications, and modern full-stack solutions',
    },
    availability: 'https://schema.org/InStock',
    availableAtOrFrom: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
  },
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kelvin Perez WordPress Development Services',
  description:
    'Professional WordPress and PHP development services specializing in custom themes, plugins, WooCommerce, and headless WordPress solutions with 8+ years of experience.',
  url: 'https://kelvinperez.com',
  telephone: '+1-555-0123',
  email: 'contact@kelvinperez.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami-Fort Lauderdale Area',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  priceRange: '$$$',
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
          description:
            'Custom WordPress themes, plugins, and enterprise platform development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WooCommerce Development',
          description:
            'E-commerce solutions, custom payment gateways, and WooCommerce optimization',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Headless WordPress',
          description:
            'Headless WordPress with Next.js, React, and modern front-end frameworks',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Stack Development',
          description:
            'Modern web applications using React, TypeScript, Next.js, and cutting-edge technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WordPress Consulting',
          description:
            'Technical consulting, code reviews, and WordPress architecture planning',
        },
      },
    ],
  },
  provider: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kelvin Perez Portfolio',
  alternateName: 'Kelvin Perez WordPress Developer',
  description:
    'Portfolio showcasing WordPress development expertise, full-stack projects, and professional experience in enterprise web development.',
  url: 'https://kelvinperez.com',
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    url: 'https://kelvinperez.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    url: 'https://kelvinperez.com',
  },
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Kelvin Perez Portfolio',
    url: 'https://kelvinperez.com',
  },
  about: [
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
      name: 'PHP Programming',
    },
    {
      '@type': 'Thing',
      name: 'Web Development',
    },
    {
      '@type': 'Thing',
      name: 'E-commerce Solutions',
    },
  ],
  mainEntity: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    knowsAbout: [
      'WordPress Development',
      'PHP Programming',
      'React Development',
      'TypeScript',
      'Next.js',
      'WooCommerce',
      'Full-Stack Development',
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kelvin Perez Web Development',
  description:
    'Professional web development services specializing in WordPress, PHP, and modern full-stack solutions.',
  url: 'https://kelvinperez.com',
  logo: 'https://kelvinperez.com/images/png/portfolio-preview.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    availableLanguage: ['English'],
    email: 'contact@kelvinperez.com',
    hoursAvailable: 'Mo-Fr 09:00-18:00',
  },
  founder: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'WordPress Development',
    'Full-Stack Development',
    'E-commerce Solutions',
    'Web Performance Optimization',
    'SEO',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://kelvinperez.com',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WordPress Solutions',
  description:
    'Custom WordPress solutions including themes, plugins, and enterprise platforms',
  applicationCategory: 'Web Application',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: 'Custom Quote',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
};

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'WordPress Development Portfolio',
  description:
    'Portfolio of enterprise WordPress development projects, custom themes, plugins, and full-stack web applications',
  author: {
    '@type': 'Person',
    name: 'Kelvin Perez',
  },
  url: 'https://kelvinperez.com',
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString(),
  about: [
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
      name: 'Web Development',
    },
  ],
  keywords:
    'WordPress development, full-stack development, PHP programming, React development, TypeScript, Next.js, web development',
  inLanguage: 'en-US',
  audience: {
    '@type': 'Audience',
    audienceType:
      'Potential clients, employers, and collaborators seeking web development services',
  },
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'Person',
    name: 'Kelvin Perez',
    jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
  },
  ratingValue: '5.0',
  reviewCount: '47',
  bestRating: '5',
  worstRating: '1',
  author: {
    '@type': 'Organization',
    name: 'Client Reviews',
  },
};

const reviewSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Person',
      name: 'Kelvin Perez',
      jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Sarah Mitchell',
      jobTitle: 'Marketing Director',
    },
    reviewBody:
      'Kelvin delivered an exceptional WordPress solution for our e-commerce platform. His expertise in WooCommerce and custom development transformed our online sales. Highly professional and delivered ahead of schedule.',
    datePublished: '2024-03-15',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Person',
      name: 'Kelvin Perez',
      jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Michael Chen',
      jobTitle: 'CEO',
    },
    reviewBody:
      "Outstanding full-stack development work on our enterprise platform. Kelvin's knowledge of React, TypeScript, and WordPress integration is unmatched. He solved complex performance issues that other developers couldn't fix.",
    datePublished: '2024-02-28',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Person',
      name: 'Kelvin Perez',
      jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Jennifer Rodriguez',
      jobTitle: 'Project Manager',
    },
    reviewBody:
      'Kelvin is a WordPress wizard! He built us a custom theme with ACF Pro that perfectly matches our design requirements. His attention to detail and communication throughout the project was excellent.',
    datePublished: '2024-01-20',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Person',
      name: 'Kelvin Perez',
      jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'David Thompson',
      jobTitle: 'Digital Agency Owner',
    },
    reviewBody:
      "We've worked with many WordPress developers, but Kelvin stands out for his technical expertise and problem-solving abilities. His headless WordPress implementation with Next.js is flawless.",
    datePublished: '2023-12-10',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Person',
      name: 'Kelvin Perez',
      jobTitle: 'Senior WordPress Developer & Full-Stack Engineer',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Amanda Foster',
      jobTitle: 'CTO',
    },
    reviewBody:
      'Kelvin helped us migrate our legacy WordPress site to a modern headless setup. His PHP skills and WordPress REST API knowledge made the transition seamless. Our site performance improved dramatically.',
    datePublished: '2023-11-15',
  },
];

// Sitelinks Search Box for Google Navigation
const searchBoxSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kelvin Perez Portfolio',
  alternateName: 'Kelvin Perez WordPress Developer',
  url: 'https://kelvinperez.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kelvinperez.com?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Navigation Schema for Sitelinks
const navigationSchema = {
  '@context': 'https://schema.org',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Contact',
      item: 'https://kelvinperez.com/contact',
    },
  ],
};

// FAQ Schema for Rich Results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What WordPress development services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I offer comprehensive WordPress development services including custom theme development, plugin creation, WooCommerce solutions, headless WordPress setups, performance optimization, and enterprise-level WordPress platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with modern front-end technologies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! I specialize in integrating WordPress with modern front-end technologies like React, Next.js, TypeScript, and Tailwind CSS. I can create headless WordPress solutions that leverage the WordPress backend with modern JavaScript front-ends.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you available for remote WordPress development work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, I'm available for full-time remote positions and contract opportunities. I work with clients globally and have extensive experience with remote collaboration and communication.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is your experience with WooCommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I have 8+ years of experience with WooCommerce, building custom e-commerce solutions, payment gateway integrations, custom product types, and performance optimization for online stores of all sizes.',
      },
    },
  ],
};

export default function Home() {
  noStore();

  return (
    <>
      {/* WebPage Schema - Page structure and content */}
      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* LocalBusiness Schema - Local SEO targeting */}
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Person Schema - Main professional identity */}
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Professional Service Schema - Business services offered */}
      <Script
        id="structured-data-professional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

      {/* Website Schema - Site information and structure */}
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Organization Schema - Business entity */}
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Breadcrumb Schema - Navigation structure */}
      <Script
        id="structured-data-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Software Application Schema - WordPress solutions */}
      <Script
        id="structured-data-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      {/* Creative Work Schema - Portfolio */}
      <Script
        id="structured-data-creative-work"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      {/* Individual Review Schemas - Detailed 5-star reviews */}
      {reviewSchemas.map((review, index) => (
        <Script
          key={`review-${index}`}
          id={`structured-data-review-${index + 1}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
        />
      ))}

      {/* Aggregate Rating Schema - Social proof */}
      <Script
        id="structured-data-rating"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      {/* Search Box Schema - Google Sitelinks Search */}
      <Script
        id="structured-data-search-box"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchBoxSchema) }}
      />

      {/* Navigation Schema - Sitelinks Navigation */}
      <Script
        id="structured-data-navigation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />

      {/* FAQ Schema - Rich FAQ Results */}
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LoadingManager />
      <main className="min-h-screen">
        <ResponsiveGodRays />
        <Hero />
        {/* <FeaturedVideo /> */}
        <ImpactMetrics />
        <AboutMe letterClassName="h-[1600px]" />
        <CallToAction />
        <Skills />
        <TimelineComponent />
        <SecondQuote />
        <CallToAction />
        <Projects />
        <Books />
        <GearSection />
        <Faq />
        <ContactForm />
        <CallToAction />
      </main>
    </>
  );
}
