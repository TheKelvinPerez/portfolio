'use client';
import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutMe() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for about section
    gsap.set('[data-gsap="about-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="about-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap="about-profile-pic"]', { opacity: 0, scale: 0.8, y: 20 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="about-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('[data-gsap="about-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="about-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        '[data-gsap="about-profile-pic"]',
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.7)',
          onStart: () => {
            // Trigger typewriter effect
            window.dispatchEvent(new CustomEvent('startTypewriter'));
          },
        },
        '-=0.2',
      );
  });

  return (
    <div id="about" className="mx-auto max-w-[1000px] px-4 mt-40">
      <SectionHeading
        heading="Who is Kelvin Perez?"
        subheading="8+ Years of Experience: WordPress & PHP Full-Stack Developer with expertise in React"
        animationId="about"
      />
      <Letter />
    </div>
  );
}
