"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '@/public/images/svg/Youtube-Logo.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // GSAP animations for footer
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      // Set initial states
      gsap.set('[data-gsap="footer-logo"]', { opacity: 0, y: 20 });
      gsap.set('[data-gsap="footer-nav"]', { opacity: 0, y: 30 });
      gsap.set('[data-gsap="footer-contact"]', { opacity: 0, y: 35 });
      gsap.set('[data-gsap="footer-social"]', { opacity: 0, y: 40, scale: 0.9 });
      gsap.set('[data-gsap="footer-copyright"]', { opacity: 0, y: 50 });

      // Set initial states for nav links
      const navLinks = document.querySelectorAll('[data-gsap^="footer-link-"]');
      if (navLinks.length > 0) {
        gsap.set(navLinks, { opacity: 0, y: 20 });
      }

      // Set initial states for social icons
      const socialIcons = document.querySelectorAll('[data-gsap^="footer-social-"]');
      if (socialIcons.length > 0) {
        gsap.set(socialIcons, { opacity: 0, scale: 0.8 });
      }

      // Create timeline for footer animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 150%',
          end: 'bottom 10%',
          toggleActions: 'play none none none',
        },
      });

      tl.to('[data-gsap="footer-logo"]', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
        .to('[data-gsap="footer-nav"]', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.3')
        .to('[data-gsap="footer-contact"]', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.3')
        .to(
          '[data-gsap="footer-social"]',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.3',
        )
        .to(
          '[data-gsap="footer-copyright"]',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.2',
        );

      // Animate individual nav links with stagger
      if (navLinks.length > 0) {
        tl.to(navLinks, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }, '-=0.5');
      }

      // Animate social icons with stagger
      if (socialIcons.length > 0) {
        tl.to(socialIcons, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
        }, '-=0.6');
      }
    }, 100);
  });

  return (
    <footer className="bg-bg-default mt-10 px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div data-gsap="footer-logo" className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/svg/kp-logo-v2.svg"
              alt="Kelvin Perez Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">Kelvin Perez</span>
          </Link>
        </div>
        <nav data-gsap="footer-nav" className="mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            data-gsap="footer-link-1"
            href="#about"
            className="transition-colors hover:text-gray-300"
          >
            About
          </Link>
          <Link
            data-gsap="footer-link-2"
            href="#projects"
            className="transition-colors hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            data-gsap="footer-link-3"
            href="#books"
            className="transition-colors hover:text-gray-300"
          >
            Books
          </Link>
          <Link data-gsap="footer-link-4" href="#gear" className="transition-colors hover:text-gray-300">
            Gear
          </Link>
          <Link data-gsap="footer-link-5" href="#faq" className="transition-colors hover:text-gray-300">
            FAQ
          </Link>
          <Link data-gsap="footer-link-6" href="#contact-me" className="transition-colors hover:text-gray-300">
            Contact
          </Link>
        </nav>

        <div data-gsap="footer-contact" className="mb-6 flex flex-col items-center gap-2 text-center text-sm text-gray-300">
          <p>
            <a href="tel:+13053399449" className="transition-colors hover:text-white">
              305-339-9449
            </a>
            {' • '}
            <a href="mailto:thekelvinperez@gmail.com" className="transition-colors hover:text-white">
              thekelvinperez@gmail.com
            </a>
          </p>
          <p>Miami-Fort Lauderdale Area, Florida</p>
        </div>

        <div data-gsap="footer-social" className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              data-gsap="footer-social-1"
              href="https://www.youtube.com/@TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={YouTubeLogo}
                alt="YouTube Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              data-gsap="footer-social-2"
              href="https://twitter.com/TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={TwitterLogo}
                alt="X/Twitter Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              data-gsap="footer-social-3"
              href="https://github.com/TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={GithubLogo}
                alt="GitHub Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              data-gsap="footer-social-4"
              href="https://www.linkedin.com/in/TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={LinkedinLogo}
                alt="LinkedIn Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        <p data-gsap="footer-copyright" className="mt-8 text-center text-sm">
          © {currentYear} Kelvin Perez, All rights reserved
        </p>
      </div>
    </footer>
  );
}
