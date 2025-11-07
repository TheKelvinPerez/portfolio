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
  Bot,
} from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'WordPress Development',
    icon: <Zap className="h-4 w-4" />,
    skills: [
      'Custom Themes & Plugins',
      'ACF Pro',
      'CPTs & Taxonomies',
      'Gutenberg',
      'WP-CLI',
      'Composer',
      'REST API',
      'WPGraphQL',
    ],
  },
  {
    category: 'Front-End Development',
    icon: <Palette className="h-4 w-4" />,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Sass',
      'HTML5',
      'ES6+',
    ],
  },
  {
    category: 'Backend & Languages',
    icon: <Cpu className="h-4 w-4" />,
    skills: [
      'PHP 8.3+',
      'Node.js',
      'MySQL',
      'PostgreSQL',
      'Laravel',
      'REST APIs',
      'GraphQL',
      'Webhooks',
    ],
  },
  {
    category: 'SEO & Analytics',
    icon: <BarChart3 className="h-4 w-4" />,
    skills: [
      'Technical SEO',
      'Schema Markup',
      'Local SEO',
      'Google Search Console',
      'Google Analytics',
      'Tag Manager',
      'Core Web Vitals',
      'Conversion Optimization',
    ],
  },
  {
    category: 'Performance & Infrastructure',
    icon: <Rocket className="h-4 w-4" />,
    skills: [
      'Docker (DDEV)',
      'Redis Caching',
      'CDN (Cloudflare, BunnyCDN)',
      'Caddy',
      'Nginx',
      'Core Web Vitals Optimization',
      'PageSpeed Optimization',
      'SSL/TLS Configuration',
    ],
  },
  {
    category: 'E-commerce & Integrations',
    icon: <ShoppingCart className="h-4 w-4" />,
    skills: [
      'WooCommerce',
      'Payment Gateways',
      'CRM Integration (Salesforce, HubSpot)',
      'Email Marketing',
      'Shopify',
      'Product Data Management',
      'Order Fulfillment',
      'Subscription Systems',
    ],
  },
  {
    category: 'Design & UX',
    icon: <Sparkles className="h-4 w-4" />,
    skills: [
      'Figma',
      'Adobe XD',
      'Responsive Design',
      'WCAG Accessibility',
      'Color Theory',
      'Typography',
      'UI/UX Principles',
      'Design Systems',
    ],
  },
  {
    category: 'AI & Modern Tech',
    icon: <Bot className="h-4 w-4" />,
    skills: [
      'RAG Systems',
      'LLMs (OpenAI, Claude)',
      'AI Agents',
      'Prompt Engineering',
      'Vector Databases',
      'Headless CMS',
      'API Integration',
      'Automation',
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
          subheading="Comprehensive full-stack expertise across WordPress, modern web technologies, and AI integration"
          animationId="skills"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              data-gsap={`skill-category-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="mb-10 flex items-center gap-3">
                <div className="text-purple-300" data-gsap={`skill-icon-${index}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white" data-gsap={`skill-title-${index}`}>
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start gap-2 text-sm text-gray-200"
                    data-gsap={`skill-item-${index}-${skillIndex}`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-300" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 md:text-base">
            8+ years of hands-on experience building production-ready solutions
            for agencies and enterprise clients
          </p>
        </div>
      </div>
    </div>
  );
}
