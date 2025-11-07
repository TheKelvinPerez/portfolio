'use client';

import {
  MoveUpRight,
  Zap,
  Gauge,
  Clock,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Stats() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="impact-metrics-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="impact-metrics-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap^="stat-card-"]', { opacity: 0, y: 30, scale: 0.95 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="impact-metrics-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate heading and subheading first
    tl.to('[data-gsap="impact-metrics-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="impact-metrics-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.2',
      )
      // Then stagger animate stat cards
      .to(
        '[data-gsap^="stat-card-"]',
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        },
        '-=0.1',
      );
  }, []);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div
            data-gsap="stat-card-0"
            className="flex flex-col justify-between gap-0 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-400/30"
          >
            <Zap className="mb-10 h-4 w-4 text-purple-300" />
            <h2 className="font-regular flex max-w-xl flex-row items-end gap-4 text-left text-4xl tracking-tighter text-white drop-shadow-sm">
              487
              <span className="text-sm tracking-normal text-purple-300">
                pages
              </span>
            </h2>
            <p className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-200">
              Automated service pages
            </p>
          </div>

          <div
            data-gsap="stat-card-1"
            className="flex flex-col justify-between gap-0 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-400/30"
          >
            <Gauge className="mb-10 h-4 w-4 text-purple-300" />
            <h2 className="font-regular flex max-w-xl flex-row items-end gap-4 text-left text-4xl tracking-tighter text-white drop-shadow-sm">
              1s
              <span className="text-sm tracking-normal text-purple-300">
                response
              </span>
            </h2>
            <p className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-200">
              Server response time
            </p>
          </div>

          <a
            href="https://pagespeed.web.dev/analysis/https-sunnyside247ac-com/bimc9jrugi?form_factor=desktop"
            target="_blank"
            rel="noopener noreferrer"
            data-gsap="stat-card-2"
            className="flex flex-col justify-between gap-0 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-400/30"
          >
            <MoveUpRight className="mb-10 h-4 w-4 text-purple-300" />
            <h2 className="font-regular flex max-w-xl flex-row items-end gap-4 text-left text-4xl tracking-tighter text-white drop-shadow-sm">
              100
              <span className="text-sm tracking-normal text-purple-300">
                /100
              </span>
            </h2>
            <p className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-200">
              PageSpeed score
            </p>
          </a>

          <div
            data-gsap="stat-card-3"
            className="flex flex-col justify-between gap-0 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-400/30"
          >
            <Clock className="mb-10 h-4 w-4 text-purple-300" />
            <h2 className="font-regular flex max-w-xl flex-row items-end gap-4 text-left text-4xl tracking-tighter text-white drop-shadow-sm">
              90%
              <span className="text-sm tracking-normal text-purple-300">
                saved
              </span>
            </h2>
            <p className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-200">
              Content creation time
            </p>
          </div>

          <div
            data-gsap="stat-card-4"
            className="flex flex-col justify-between gap-0 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-400/30"
          >
            <DollarSign className="mb-10 h-4 w-4 text-purple-300" />
            <h2 className="font-regular flex max-w-xl flex-row items-end gap-4 text-left text-4xl tracking-tighter text-white drop-shadow-sm">
              $73K-230K
              <span className="text-sm tracking-normal text-purple-300">
                value
              </span>
            </h2>
            <p className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-200">
              Development equivalent
            </p>
          </div>

          <div
            data-gsap="stat-card-5"
            className="flex flex-col justify-between gap-0 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-400/30"
          >
            <TrendingUp className="mb-10 h-4 w-4 text-purple-300" />
            <h2 className="font-regular flex max-w-xl flex-row items-end gap-4 text-left text-4xl tracking-tighter text-white drop-shadow-sm">
              $50K-100K
              <span className="text-sm tracking-normal text-purple-300">
                /year
              </span>
            </h2>
            <p className="max-w-xl text-left text-base leading-relaxed tracking-tight text-gray-200">
              Annual SEO value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
