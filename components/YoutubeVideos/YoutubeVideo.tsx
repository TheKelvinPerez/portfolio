'use client';

import VideoGrid from "./VideoGrid";
import SectionHeading from "../SectionHeading";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function YoutubeVideos() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for youtube videos section
    gsap.set('[data-gsap="videos-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="videos-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap="videos-grid"]', { opacity: 0, y: 30 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="videos-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    });
    
    tl.to('[data-gsap="videos-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    .to('[data-gsap="videos-subheading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3')
    .to('[data-gsap="videos-grid"]', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.2');
  });

  return (
    <div id="videos" className="px-8">
      <SectionHeading
        heading="Watched by Thousands of People"
        subheading="Live Streaming weekly: WordPress, AI, Next.js, React, PHP, Startups, AI Dev Workflows, Neovim"
        animationId="videos"
      />
      <div data-gsap="videos-grid">
        <VideoGrid />
      </div>
    </div>
  );
}
