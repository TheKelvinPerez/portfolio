'use client';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for all timeline sub-components
    gsap.set('[data-gsap*="timeline-dot-"]', { opacity: 0, scale: 0 });
    gsap.set('[data-gsap*="timeline-year-"]', { opacity: 0, x: -100 });
    gsap.set('[data-gsap*="timeline-content-"]', { opacity: 0, x: 100 });
    gsap.set('[data-gsap*="timeline-header-"]', { opacity: 0, x: 80 });
    gsap.set('[data-gsap*="timeline-text-"]', { opacity: 0, x: 60 });
    gsap.set('[data-gsap*="timeline-achievements-"]', { opacity: 0, x: 40 });
    gsap.set('[data-gsap*="timeline-bullet-"]', { opacity: 0, x: 30 });

    // Create detailed animations for each timeline item
    data.forEach((_, index) => {
      const dot = `[data-gsap="timeline-dot-${index}"]`;
      const year = `[data-gsap="timeline-year-${index}"]`;
      const yearMobile = `[data-gsap="timeline-year-mobile-${index}"]`;
      const content = `[data-gsap="timeline-content-${index}"]`;
      const header = `[data-gsap="timeline-header-${index}"]`;
      const text = `[data-gsap="timeline-text-${index}"]`;
      const achievements = `[data-gsap="timeline-achievements-${index}"]`;
      
      // Create timeline for this specific item
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: dot,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        }
      });

      // Phase 1: Timeline dot (anchor point)
      tl.to(dot, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
      
      // Phase 2: Year title (from left) - faster timing
      .to([year, yearMobile], {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '+=0.1')
      
      // Phase 3: Content animations (from right) - one after the other
      .to(content, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '+=0.3')
      
      // Additional detailed animations if elements exist
      if (document.querySelector(header)) {
        tl.to(header, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.5'); // Start during content animation
      }
      
      if (document.querySelector(text)) {
        tl.to(text, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.3'); // Start slightly after header
      }
      
      if (document.querySelector(achievements)) {
        tl.to(achievements, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.1'); // Start slightly after text
        
        // Individual bullet points (faster stagger)
        const bullets = [
          `[data-gsap="timeline-bullet-${index}-0"]`,
          `[data-gsap="timeline-bullet-${index}-1"]`,
          `[data-gsap="timeline-bullet-${index}-2"]`,
          `[data-gsap="timeline-bullet-${index}-3"]`,
          `[data-gsap="timeline-bullet-${index}-4"]`,
        ];
        
        bullets.forEach((bullet, bulletIndex) => {
          if (document.querySelector(bullet)) {
            tl.to(bullet, {
              opacity: 1,
              x: 0,
              duration: 0.4,
              ease: 'power2.out',
            }, `+=${bulletIndex * 0.05}`); // Much faster bullet stagger
          }
        });
      }
    });
  }, [data]);

  return (
    <div
      className="w-full bg-transparent font-sans dark:bg-transparent md:px-10"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        {/* Section heading will be handled by parent component */}
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div 
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 dark:bg-gray-900 md:left-3"
                data-gsap={`timeline-dot-${index}`}
              >
                <div className="h-4 w-4 rounded-full border border-blue-400 bg-blue-500 p-2 dark:border-blue-400 dark:bg-blue-500" />
              </div>
              <h3 
                className="hidden text-xl font-bold text-blue-400 dark:text-blue-400 md:block md:pl-20 md:text-5xl"
                data-gsap={`timeline-year-${index}`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 
                className="mb-4 block text-left text-2xl font-bold text-blue-400 dark:text-blue-400 md:hidden"
                data-gsap={`timeline-year-mobile-${index}`}
              >
                {item.title}
              </h3>
              <div data-gsap={`timeline-content-${index}`}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-gray-700 md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
