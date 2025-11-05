'use client';

import { MoveUpRight, Zap, Gauge, Clock, DollarSign, TrendingUp } from 'lucide-react';
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
      duration: 0.6,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="impact-metrics-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      // Then stagger animate stat cards
      .to(
        '[data-gsap^="stat-card-"]',
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.2',
      );
  }, []);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div
            data-gsap="stat-card-0"
            className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <Zap className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              487
              <span className="text-sm tracking-normal text-purple-400">
                pages
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Automated service pages
            </p>
          </div>

          <div
            data-gsap="stat-card-1"
            className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <Gauge className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              1s
              <span className="text-sm tracking-normal text-purple-400">
                response
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Server response time
            </p>
          </div>

          <div
            data-gsap="stat-card-2"
            className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <MoveUpRight className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              100
              <span className="text-sm tracking-normal text-purple-400">
                /100
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              PageSpeed score
            </p>
          </div>

          <div
            data-gsap="stat-card-3"
            className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <Clock className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              90%
              <span className="text-sm tracking-normal text-purple-400">
                saved
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Content creation time
            </p>
          </div>

          <div
            data-gsap="stat-card-4"
            className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <DollarSign className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              $73K-230K
              <span className="text-sm tracking-normal text-purple-400">
                value
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Development equivalent
            </p>
          </div>

          <div
            data-gsap="stat-card-5"
            className="flex flex-col justify-between gap-0 rounded-md border border-purple-700/50 bg-gradient-to-br from-purple-900/20 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
            <TrendingUp className="mb-10 h-4 w-4 text-purple-400" />
            <h2 className="flex flex-row items-end gap-4 text-left text-4xl font-regular tracking-tighter text-white max-w-xl">
              $50K-100K
              <span className="text-sm tracking-normal text-purple-400">
                /year
              </span>
            </h2>
            <p className="text-base leading-relaxed tracking-tight text-gray-300 max-w-xl text-left">
              Annual SEO value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
