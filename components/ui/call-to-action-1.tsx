'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DownloadResumeCTA() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="cta-container"]', { opacity: 0, y: 50, scale: 0.95 });
    gsap.set('[data-gsap="cta-badge"]', { opacity: 0, y: 30 });
    gsap.set('[data-gsap="cta-title"]', { opacity: 0, y: 40 });
    gsap.set('[data-gsap="cta-description"]', { opacity: 0, y: 30 });
    gsap.set('[data-gsap="cta-button"]', { opacity: 0, y: 20, scale: 0.9 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="cta-container"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    });

    tl.to('[data-gsap="cta-container"]', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
    })
    .to('[data-gsap="cta-badge"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4')
    .to('[data-gsap="cta-title"]', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
    }, '-=0.3')
    .to('[data-gsap="cta-description"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3')
    .to('[data-gsap="cta-button"]', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
    }, '-=0.2');
  });

  return (
    <>
      <div 
        className="mx-2 mt-60 flex max-w-5xl flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#5524B7] to-[#380B60] p-10 py-16 text-center font-sans text-white md:mx-auto md:w-full"
        data-gsap="cta-container"
      >
        <div 
          className="flex flex-wrap items-center justify-center rounded-full border border-purple-500/40 bg-purple-600/10 p-1 text-sm backdrop-blur"
          data-gsap="cta-badge"
        >
          <div className="flex items-center">
            <span className="mr-2 text-lg">💼</span>
            <span className="mr-2 text-lg">🚀</span>
            <span className="text-lg">📈</span>
          </div>
          <p className="ml-2 font-medium">
            Trusted by leading companies and startups
          </p>
        </div>
        <h1 
          className="mt-5 max-w-xl bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl md:leading-[60px]"
          data-gsap="cta-title"
        >
          See my credentials & expertise
        </h1>
        <p 
          className="mt-4 max-w-md text-white/80"
          data-gsap="cta-description"
        >
          Download my resume to learn more about my experience, skills, and how
          I can help bring your next project to life.
        </p>
        <a
          href="https://docs.google.com/document/d/15DKjg8zZwIXyBa8Bva6vI90dvgSh34HxlHaPAnwGOJE/edit?usp=sharing"
          download
          className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-3 text-sm uppercase text-white transition-all hover:bg-violet-700"
          data-gsap="cta-button"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
