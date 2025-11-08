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
      "I'm a full-stack developer with 8+ years of experience specializing in WordPress, PHP, Laravel, and modern web development. My core stack includes PHP, Laravel, WordPress, MySQL, JavaScript/TypeScript, React, and Next.js. I work extensively with WooCommerce, custom themes/plugins, REST APIs, and can integrate AI capabilities when needed.",
    icon: '🚀',
    iconPosition: 'left' as const,
    id: 1,
    question: "What's your technical expertise and stack?",
  },
  {
    answer:
      "I've built custom WordPress themes and plugins, enterprise Laravel applications, WooCommerce e-commerce solutions, membership platforms, headless CMS implementations, and Chrome extensions. Notable achievements include a $20K MRR Chrome extension and NFT projects generating $28M+ in sales.",
    icon: '🏗️',
    iconPosition: 'right' as const,
    id: 2,
    question: 'What types of projects have you built?',
  },
  {
    answer:
      "Yes! I'm actively seeking full-time or contract opportunities in WordPress development, Laravel applications, PHP projects, and full-stack web development. I'm especially interested in roles that involve building scalable solutions and working with modern web technologies.",
    icon: '🤝',
    iconPosition: 'left' as const,
    id: 3,
    question: 'Are you available for hire?',
  },
  {
    answer:
      "I'm currently seeking remote opportunities only. I have extensive experience collaborating with distributed teams and am adaptable to different time zones and work schedules. I prioritize clear communication and meeting deadlines consistently in remote work environments.",
    icon: '🌍',
    iconPosition: 'right' as const,
    id: 4,
    question: "What's your work preference and availability?",
  },
  {
    answer:
      'I prioritize writing clean, maintainable code following industry best practices and coding standards. I emphasize security, performance optimization, comprehensive documentation, and thorough testing. My code is designed to be easily scalable and maintainable by other developers.',
    icon: '📚',
    iconPosition: 'left' as const,
    id: 5,
    question: 'How do you ensure code quality?',
  },
  {
    answer:
      'I have proven entrepreneurial experience launching successful products including a $20K MRR Chrome extension and NFT projects generating $28M+. I understand product development from ideation to launch, rapid prototyping, MVP creation, and building solutions that solve real business problems.',
    icon: '💡',
    iconPosition: 'right' as const,
    id: 6,
    question: 'Do you have startup or product experience?',
  },
  {
    answer:
      "I excel at problem-solving, self-directed learning, and adapting to new technologies quickly. I'm comfortable working independently or as part of a team, and I bring strong communication skills to technical discussions. I'm proactive about identifying issues and proposing solutions.",
    icon: '⚡',
    iconPosition: 'left' as const,
    id: 7,
    question: 'What soft skills do you bring to a team?',
  },
  {
    answer:
      "I have extensive experience with Git version control, CI/CD pipelines, Docker, modern deployment platforms (Vercel, Netlify), database management, and API integration. I'm comfortable with Agile methodologies and familiar with project management tools like Jira and Linear.",
    icon: '⚙️',
    iconPosition: 'right' as const,
    id: 8,
    question: "What's your experience with development workflows?",
  },
  {
    answer:
      "I stay current through continuous learning, exploring new technologies, and applying them to real projects. I'm experienced with modern frameworks, AI integration (OpenAI, Anthropic APIs), and I'm always eager to learn new tools and technologies that improve development efficiency.",
    icon: '📈',
    iconPosition: 'left' as const,
    id: 9,
    question: 'How do you stay current with technology?',
  },
  {
    answer:
      "I'm motivated by building solutions that solve real problems and create value for users. I enjoy the challenge of optimizing performance, architecting scalable systems, and seeing projects through from concept to completion. I take pride in writing quality code and delivering results.",
    icon: '🎯',
    iconPosition: 'right' as const,
    id: 10,
    question: 'What motivates you as a developer?',
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
          subheading="Common questions about my AI expertise, startup experience, and approach to building intelligent applications"
          animationId="faq"
        />
        <div data-gsap="faq-container">
          <FaqAccordion
            data={defaultData.map((item, index) => ({
              ...item,
              animationKey: `faq-item-${index}`,
            }))}
            className="max-w-[700px]"
          />
        </div>
      </div>
    </>
  );
}
