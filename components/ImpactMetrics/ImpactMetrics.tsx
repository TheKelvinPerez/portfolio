'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NumberTicker from '@/components/magicui/number-ticker';

interface Metric {
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  isAnimated?: boolean;
}

const metrics: Metric[] = [
  {
    value: 487,
    label: 'Automated Pages',
    suffix: '+',
    isAnimated: true,
  },
  {
    value: 1,
    label: 'Server Response Time',
    suffix: 'ms',
    isAnimated: true,
  },
  {
    value: 100,
    label: 'PageSpeed Score',
    suffix: '/100',
    isAnimated: true,
  },
  {
    value: 90,
    label: 'Time Savings',
    suffix: '%',
    isAnimated: true,
  },
  {
    value: '73K-230K',
    label: 'Dev Value Generated',
    prefix: '$',
    isAnimated: false,
  },
  {
    value: '50K-100K',
    label: 'Annual SEO Value',
    prefix: '$',
    isAnimated: false,
  },
];

export default function ImpactMetrics() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="metrics-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="metrics-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap^="metric-card-"]', { opacity: 0, y: 30, scale: 0.95 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="metrics-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('[data-gsap="metrics-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="metrics-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        '[data-gsap^="metric-card-"]',
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.2)',
        },
        '-=0.2',
      );
  });

  return (
    <div className="mx-auto mt-40 w-full max-w-7xl px-4">
      <div className="mb-12 text-center">
        <h2
          data-gsap="metrics-heading"
          className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          By The Numbers
        </h2>
        <p
          data-gsap="metrics-subheading"
          className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl"
        >
          Measurable impact delivering enterprise-level WordPress solutions
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            data-gsap={`metric-card-${index}`}
            className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="relative z-10">
              <div className="mb-3 flex items-baseline justify-center gap-1 text-center">
                {metric.prefix && (
                  <span className="text-3xl font-bold text-cyan-400 md:text-4xl">
                    {metric.prefix}
                  </span>
                )}
                {metric.isAnimated ? (
                  <div className="text-5xl font-bold text-white md:text-6xl">
                    <NumberTicker value={metric.value as number} />
                  </div>
                ) : (
                  <span className="text-5xl font-bold text-white md:text-6xl">
                    {metric.value}
                  </span>
                )}
                {metric.suffix && (
                  <span className="text-3xl font-bold text-cyan-400 md:text-4xl">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="text-center text-base font-medium text-gray-300 md:text-lg">
                {metric.label}
              </p>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </div>
        ))}
      </div>

      {/* Additional context */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 md:text-base">
          Real-world results from the SunnySide 24/7 AC enterprise WordPress
          platform
        </p>
      </div>
    </div>
  );
}
