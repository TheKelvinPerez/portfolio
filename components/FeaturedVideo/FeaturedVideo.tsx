'use client';

import ResponsiveYouTube from '@/components/ui/ResponsiveYouTube';
import Introduction from '@/components/Introduction/Introduction';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FeaturedVideo() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for individual elements with scoped selectors
    gsap.set('[data-gsap="intro-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="intro-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap="video-section"]', { opacity: 0, y: 40 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="intro-heading"]',
        start: 'top 80%', // Start when element is 80% down the viewport
        end: 'bottom 20%',
        toggleActions: 'play none none none', // Only play once
      }
    });
    
    tl.to('[data-gsap="intro-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    .to('[data-gsap="intro-subheading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3') // Start 0.3s before previous animation ends
    .to('[data-gsap="video-section"]', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.2'); // Start 0.2s before previous animation ends
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Introduction />
        <div data-gsap="video-section">
          <ResponsiveYouTube
            video="4Q85SxxnUZc" // Introduction video
            title="Introduction Video"
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
