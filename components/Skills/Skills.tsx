'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../SectionHeading';
import {
  Zap,
  Palette,
  Cpu,
  BarChart3,
  Rocket,
  ShoppingCart,
  Sparkles,
  Workflow,
} from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Laravel Application Development',
    icon: <Zap className="h-4 w-4" />,
    skills: [
      'Laravel',
      'PHP 8.3+',
      'Inertia',
      'Queues & Jobs',
      'Policies',
      'Form Requests',
      'Service Classes',
      'REST APIs',
    ],
  },
  {
    category: 'React Product UI',
    icon: <Palette className="h-4 w-4" />,
    skills: [
      'React',
      'TypeScript',
      'Inertia Pages',
      'Tailwind CSS',
      'Vite',
      'Component Systems',
      'Responsive UI',
      'Form UX',
      'Dashboard UX',
    ],
  },
  {
    category: 'Databases & Integrations',
    icon: <Cpu className="h-4 w-4" />,
    skills: [
      'PostgreSQL',
      'MySQL',
      'Stripe',
      'Webhooks',
      'Scheduled Jobs',
      'Usage Tracking',
      'Data Enrichment',
      'External APIs',
      'Chrome Extension APIs',
    ],
  },
  {
    category: 'Product Data & SEO',
    icon: <BarChart3 className="h-4 w-4" />,
    skills: [
      'Technical SEO',
      'Schema Markup',
      'Local SEO',
      'Analytics',
      'Lead Data',
      'Audit Reports',
      'Core Web Vitals',
      'Content Models',
      'Conversion Optimization',
    ],
  },
  {
    category: 'Performance & Infrastructure',
    icon: <Rocket className="h-4 w-4" />,
    skills: [
      'Docker',
      'Hetzner VPS',
      'Caddy',
      'Nginx',
      'Staging Environments',
      'Deploy Scripts',
      'Queue Workers',
      'Health Checks',
      'SSL and DNS',
      'Linux Servers',
    ],
  },
  {
    category: 'Ecommerce Experience',
    icon: <ShoppingCart className="h-4 w-4" />,
    skills: [
      'Shopify',
      'Liquid',
      'WooCommerce',
      'Checkout UX',
      'Product Data Management',
      'CRM Integrations',
      'Payment Workflows',
      'Subscription Systems',
      'Storefront QA',
    ],
  },
  {
    category: 'WordPress & PHP Foundation',
    icon: <Sparkles className="h-4 w-4" />,
    skills: [
      'Custom Themes',
      'ACF Pro',
      'CPTs',
      'WP-CLI',
      'Composer',
      'Gutenberg',
      'Performance',
      'Client CMS UX',
    ],
  },
  {
    category: 'Applied AI Product Work',
    icon: <Workflow className="h-4 w-4" />,
    skills: [
      'OpenAI API',
      'Structured Outputs',
      'RAG Style Retrieval',
      'Chatbot Knowledge Bases',
      'Site Copy Generation',
      'Audit Generation',
      'Spam Classification',
      'Usage Logging',
    ],
  },
];

export default function Skills() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="skills-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="skills-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap^="skill-category-"]', { opacity: 0, y: 30, scale: 0.95 });
    gsap.set('[data-gsap^="skill-icon-"]', { opacity: 0, x: -20, scale: 0.8 });
    gsap.set('[data-gsap^="skill-title-"]', { opacity: 0, y: 15 });
    gsap.set('[data-gsap^="skill-item-"]', { opacity: 0, x: -15, y: 10 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="skills-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate heading and subheading first
    tl.to('[data-gsap="skills-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="skills-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.2',
      )
      // Then stagger animate skill category cards
      .to(
        '[data-gsap^="skill-category-"]',
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        },
        '-=0.1',
      )
      // Then stagger animate icons and titles within each card
      .to(
        '[data-gsap^="skill-icon-"]',
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: 'back.out(1.7)',
        },
        '-=0.2',
      )
      .to(
        '[data-gsap^="skill-title-"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      // Finally stagger animate all bullet points
      .to(
        '[data-gsap^="skill-item-"]',
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.3,
          stagger: 0.02,
          ease: 'power2.out',
        },
        '-=0.2',
      );
  });

  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="Skills & Technologies"
          subheading="The parts of the stack I can contribute to on a Laravel product team"
          animationId="skills"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              data-gsap={`skill-category-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md transition-all duration-300 hover:border-purple-300/80 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="grid h-9 w-9 place-items-center rounded-full border border-purple-300/30 bg-purple-500/20 text-purple-200"
                  data-gsap={`skill-icon-${index}`}
                >
                  {category.icon}
                </div>
                <h3
                  className="text-base font-bold leading-snug text-white md:text-lg"
                  data-gsap={`skill-title-${index}`}
                >
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full border border-purple-300/20 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
                    data-gsap={`skill-item-${index}-${skillIndex}`}
                  >
                    <span>{skill}</span>
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 md:text-base">
            8+ years of hands on work across product dashboards, business
            websites, ecommerce systems, and the infrastructure around them
          </p>
        </div>
      </div>
    </div>
  );
}
