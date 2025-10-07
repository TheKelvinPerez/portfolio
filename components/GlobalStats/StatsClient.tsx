'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NumberTicker from '../magicui/number-ticker';

interface Stat {
  value: number;
  label: string;
}

interface StatsClientProps {
  statsData: Stat[];
  isDebug?: boolean;
}

export default function StatsClient({ statsData, isDebug = false }: StatsClientProps) {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="stats-title"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="stat-item"]', { opacity: 0, y: 30 });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="stats-title"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    });

    // Animate title first
    tl.to('[data-gsap="stats-title"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    // Then stagger the stat items
    .to('[data-gsap="stat-item"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.2, // 0.2s delay between each stat item
    }, '-=0.2'); // Start 0.2s before title animation ends
  });

  return (
    <section className="mx-auto mb-20 max-w-[1440px] px-4 py-12 text-white lg:mb-32">
      <div className="mx-auto max-w-6xl">
        <h2 
          className="mb-8 text-center text-base font-semibold lg:text-2xl"
          data-gsap="stats-title"
        >
          Global Stats {isDebug ? '(Debug Mode)' : ''}
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row text-white">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="mb-8 w-full px-6 text-center md:mb-0 md:w-1/3"
              data-gsap="stat-item"
            >
              <p className="mb-2 text-4xl font-bold lg:text-5xl">
                <NumberTicker value={stat.value} />
              </p>
              <p className="text-sm text-gray-400 lg:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}