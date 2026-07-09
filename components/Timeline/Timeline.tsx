'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';

interface TimelineEntry {
  title: string;
  heading: string;
  icon: React.ReactNode;
  body: string;
  points: string[];
}

const journey: TimelineEntry[] = [
  {
    title: '2016',
    heading: 'WordPress and PHP foundation',
    icon: <BuildingOfficeIcon className="h-4 w-4 text-white" />,
    body: 'Started professional web development in agency environments, building the PHP and WordPress foundation that still supports my work today.',
    points: [
      'Custom WordPress themes and client websites',
      'PHP, CSS, jQuery, Git, and production CMS work',
      'Collaboration with designers, marketers, and business owners',
    ],
  },
  {
    title: '2017 to 2018',
    heading: 'UI, UX, and frontend depth',
    icon: <PaintBrushIcon className="h-4 w-4 text-white" />,
    body: 'Started connecting code with interface quality. This is where design, typography, responsive layout, and user experience became part of how I build.',
    points: [
      'Advanced Custom Fields and structured WordPress content',
      'Figma, Adobe XD, color, spacing, and responsive design',
      'Modern JavaScript, Sass, reusable components, and page systems',
    ],
  },
  {
    title: '2019',
    heading: 'ViViFi agency work',
    icon: <RocketLaunchIcon className="h-4 w-4 text-white" />,
    body: 'Founded a boutique agency and shipped client websites while learning how to scope work, communicate clearly, and deliver under real business constraints.',
    points: [
      'WordPress builds for small businesses and creatives',
      'Client communication, revisions, launch work, and support',
      'Reusable starter patterns for faster delivery',
    ],
  },
  {
    title: '2020',
    heading: 'Chrome extension product work',
    icon: <CodeBracketIcon className="h-4 w-4 text-white" />,
    body: 'Moved beyond websites into product workflows by building browser tooling for ecommerce operations with my brother.',
    points: [
      'Chrome extension development',
      'Browser automation workflows tied to business operations',
      'Early product thinking around subscriptions, onboarding, and support',
    ],
  },
  {
    title: '2021',
    heading: 'Light Code Labs and NFT systems',
    icon: <CpuChipIcon className="h-4 w-4 text-white" />,
    body: 'Worked through faster moving product surfaces, including NFT launch systems, while continuing to sharpen WordPress, PHP, and modern frontend skills.',
    points: [
      'Technical systems for high traffic launch moments',
      'Light Code Labs as the ongoing studio identity',
      'React, TypeScript, and product architecture exploration',
    ],
  },
  {
    title: '2022',
    heading: 'Burnout, travel, and reset',
    icon: <GlobeAltIcon className="h-4 w-4 text-white" />,
    body: 'After an intense run, I burned out and traveled. That chapter matters because it changed how I think about pace, focus, and the kind of work I want to build long term.',
    points: [
      'Travel through Peru, Thailand, Cambodia, Laos, and India',
      'A reset around health, discipline, and direction',
      'A clearer preference for useful product work over hype cycles',
    ],
  },
  {
    title: '2023 to 2024',
    heading: 'Modern stack and ecommerce range',
    icon: <ShoppingBagIcon className="h-4 w-4 text-white" />,
    body: 'Came back into the work with a broader stack: React, TypeScript, Shopify, WordPress, applied AI integrations, and stronger backend instincts.',
    points: [
      'Shopify and ecommerce workflow experience',
      'WordPress performance and local SEO systems',
      'OpenAI integrations, retrieval based chat, audits, and enrichment workflows',
    ],
  },
  {
    title: '2025 to now',
    heading: 'Laravel platform focus',
    icon: <ServerStackIcon className="h-4 w-4 text-white" />,
    body: 'Built Light Code Labs Dashboard, a Laravel, Inertia, React, TypeScript, PostgreSQL, and Docker product that turns a captured business lead into a generated sales site demo.',
    points: [
      'Laravel dashboard, queues, jobs, policies, and product workflows',
      'Chrome extension lead capture feeding the Laravel application',
      'Docker, staging, production, Hetzner hosting, and operational tooling',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

function MilestoneCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="space-y-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-300/35 bg-gradient-to-r from-purple-500 to-blue-500">
          {entry.icon}
        </div>
        <h4 className="text-xl font-bold text-white">{entry.heading}</h4>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-white md:text-base">
        {entry.body}
      </p>
      <div className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md transition-all duration-300 hover:border-purple-300/80 hover:shadow-2xl hover:shadow-purple-500/20">
        <h5 className="mb-4 font-semibold text-purple-200">What changed</h5>
        <div className="space-y-3">
          {entry.points.map((point) => (
            <div key={point} className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-300" />
              <span className="text-sm text-gray-100">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const timelineData = journey.map((entry) => ({
  title: entry.title,
  content: <MilestoneCard entry={entry} />,
}));

export default function TimelineComponent() {
  return (
    <div id="timeline" className="mt-40 w-full">
      <SectionHeading
        heading="The Journey"
        subheading="The path from WordPress and PHP into product dashboards, ecommerce, infrastructure, and the Laravel role I am aiming for now"
        animationId="timeline"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <Timeline data={timelineData} />
      </motion.div>
    </div>
  );
}
