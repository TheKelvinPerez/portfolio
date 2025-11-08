'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import HeroCTA from './HeroCTA';

export default function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const posthog = usePostHog();

  // Listen for loading screen completion event
  useEffect(() => {
    const handleLoadingComplete = () => {
      setShouldAnimate(true);
    };

    // Add event listener for loading screen completion
    window.addEventListener('loadingScreenComplete', handleLoadingComplete);

    // Send a simple test event when component mounts
    if (posthog) {
      console.log('PostHog: Sending hero_component_mounted event');
      posthog.capture('hero_component_mounted', {
        component: 'Hero',
        action: 'mount',
        timestamp: new Date().toISOString(),
      });
    } else {
      console.log('PostHog: Not initialized yet');
    }

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener(
        'loadingScreenComplete',
        handleLoadingComplete,
      );
    };
  }, [posthog]);

  useGSAP(() => {
    if (!shouldAnimate) {
      return;
    }

    // Send PostHog test event when hero animation starts
    posthog.capture('hero_animation_started', {
      component: 'Hero',
      action: 'animation_start',
      timestamp: new Date().toISOString(),
    });

    // Create a timeline for the staggered animation
    const tl = gsap.timeline();

    // Set initial states with different directions
    gsap.set('[data-gsap="tech-badge"]', { opacity: 0, y: -20 }); // fade down
    gsap.set('[data-gsap="hero-text"]', { opacity: 0, scale: 0.9 }); // fade in (scale)
    gsap.set('[data-gsap="cta-view-projects"]', { opacity: 0, x: -30 }); // from left
    gsap.set('[data-gsap="cta-book-call"]', { opacity: 0, x: 30 }); // from right
    gsap.set('[data-gsap="tech-subtitle"]', { opacity: 0, y: -15 }); // fade down
    gsap.set('[data-gsap="logo-cloud"]', { opacity: 0, scale: 0.95 }); // fade in (scale)
    gsap.set('[data-gsap="curve-text"]', { opacity: 0, y: 20 }); // fade up

    // Animate elements in sequence with varied directions
    tl.to('[data-gsap="tech-badge"]', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="hero-text"]',
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .to(
        '[data-gsap="cta-view-projects"]',
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .to(
        '[data-gsap="cta-book-call"]',
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        '[data-gsap="tech-subtitle"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .to(
        '[data-gsap="logo-cloud"]',
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4',
      )
      .to(
        '[data-gsap="curve-text"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4',
      );
  }, [shouldAnimate]);

  return (
    <div className="relative mt-12 flex min-h-[100dvh] flex-col px-2 md:mt-4 md:px-10 lg:justify-center">
      <div className="flex flex-1 flex-col justify-center py-4 md:py-0">
        <HeroCTA />
      </div>
      {/* <LogoCloud /> */}
    </div>
  );
}
