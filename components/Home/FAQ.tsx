'use client';

import { useGSAP } from '@gsap/react';
import { FaqAccordion } from '@/components/ui/faq-chat-accordion';
import SectionHeading from '@/components/SectionHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Script from 'next/script';

const defaultData = [
  {
    answer:
      'I am looking for a full stack Laravel developer role where I can contribute across backend workflows, Inertia, React, TypeScript, databases, APIs, queues, and product features.',
    id: 1,
    question: 'What role are you looking for?',
  },
  {
    answer:
      'Light Code Labs Dashboard is the strongest project here because I built it from scratch. It takes a captured business lead, stores it in Laravel, enriches it, generates sales site demos, supports chatbot capture, handles voice workflows, tracks usage, and runs like a real product.',
    id: 2,
    question: 'Why is Light Code Labs Dashboard first?',
  },
  {
    answer:
      'Laravel, PHP, Inertia, React, TypeScript, PostgreSQL, MySQL, Tailwind CSS, Docker, queues, jobs, Stripe, webhooks, and REST APIs. WordPress and Shopify are still part of the background, but Laravel is the role direction.',
    id: 3,
    question: 'What stack do you work with?',
  },
  {
    answer:
      'Yes. I can work beyond the app code when the product needs it. The dashboard runs with Docker, staging and production environments, queue workers, deploy scripts, Linux servers, Caddy, DNS, SSL, and Hetzner.',
    id: 4,
    question: 'Do you work with infrastructure?',
  },
  {
    answer:
      'Yes. WordPress is how I built my PHP foundation. It is where I learned client work, content systems, ACF Pro, local SEO, custom themes, and performance work. I am keeping it as part of the path, not the headline.',
    id: 5,
    question: 'Why include WordPress?',
  },
  {
    answer:
      'Shopify shows ecommerce range. I can work with storefronts, themes, product data, conversion UX, and the business side of online stores. It supports the full stack story, but it is not the main focus.',
    id: 6,
    question: 'Where does Shopify fit in?',
  },
  {
    answer:
      'They show up inside the product, not as decoration. The dashboard uses OpenAI for enrichment, generated site copy, retrieval based chatbot knowledge, audit writing, request triage, spam classification, OCR extraction, and usage logging.',
    id: 7,
    question: 'Where do the product AI features fit?',
  },
  {
    answer:
      'The agency did not become the business I wanted. I ran out of runway and did not solve distribution. I am not framing that as a business win. I am framing the dashboard as a working Laravel product I built end to end.',
    id: 8,
    question: 'How are you framing the agency attempt?',
  },
  {
    answer:
      'Yes. I am looking for full time Laravel roles and selective contract work that lines up with Laravel, PHP, React, TypeScript, databases, product dashboards, and backend workflows.',
    id: 9,
    question: 'Are you available?',
  },
  {
    answer:
      'Start with Light Code Labs Dashboard. That is the best signal for how I think through Laravel architecture, product workflows, UI, integrations, queues, and infrastructure. After that, the Chrome extension and WordPress projects show the path that led there.',
    id: 10,
    question: 'Where should someone start?',
  },
];

// FAQ structured data for SEO
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: defaultData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="faq-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="faq-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap="faq-container"]', { opacity: 0, y: 30 });

    // Create main timeline for section animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="faq-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('[data-gsap="faq-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="faq-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        '[data-gsap="faq-container"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.2',
      );

    // Animate individual FAQ items with stagger
    const faqItems = document.querySelectorAll('[data-gsap^="faq-item-"]');
    const faqTriggers = document.querySelectorAll('[data-gsap$="-trigger"]');

    if (faqItems.length > 0 && faqTriggers.length > 0) {
      // Set initial state for FAQ items
      gsap.set(faqItems, {
        opacity: 0,
        y: 30,
        scale: 0.95,
      });

      // Set initial state for FAQ triggers
      gsap.set(faqTriggers, {
        opacity: 0,
        y: 20,
        scale: 0.9,
      });

      // Create timeline for FAQ stagger animation
      const faqTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-gsap="faq-container"]',
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      // Animate FAQ items with stagger
      faqTl
        .to(faqItems, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        })
        .to(
          faqTriggers,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.6',
        );
    }
  });

  return (
    <>
      {/* FAQ Structured Data for SEO */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div id="faq" className="flex flex-col items-center justify-center gap-4">
        <SectionHeading
          heading="FAQs"
          subheading="The short answers I would give in a first conversation"
          animationId="faq"
        />
        <div data-gsap="faq-container">
          <FaqAccordion
            data={defaultData.map((item, index) => ({
              ...item,
              animationKey: `faq-item-${index}`,
            }))}
            className="max-w-[760px]"
            timestamp=""
          />
        </div>
      </div>
    </>
  );
}
