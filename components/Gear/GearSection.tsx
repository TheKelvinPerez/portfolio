'use client';

import React from 'react';
import SectionHeading from "@/components/SectionHeading";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  DesktopIcon,
  CameraIcon,
  VideoIcon,
  KeyboardIcon,
  HomeIcon,
  GlobeIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const gearItems = [
  {
    Icon: DesktopIcon,
    name: "MacBook Pro 16\" M1 Max",
    description: "M1 Max chip with 64GB RAM - my powerhouse development machine for coding, design, and video editing.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/macbook-pro-16-m1-max.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: CameraIcon,
    name: "Insta360 Link 2",
    description: "4K AI-powered webcam with tracking and gesture control - perfect for video calls and content creation.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/insta360-link-2.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-400/20 to-pink-600/20" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: KeyboardIcon,
    name: "Dygma Raise",
    description: "Split ergonomic mechanical keyboard with wireless connectivity for comfortable typing during long coding sessions.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/split-ergonomic-keyboard.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-green-400/20 to-teal-600/20" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: HomeIcon,
    name: "Standing Desk",
    description: "Height-adjustable standing desk for better posture and health during long work sessions.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/standing-desk.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/20" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "1 Gigabit Fiber Optic",
    description: "Ultra-fast 1Gbps fiber internet connection for seamless development, streaming, and uploads.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/fiber-internet.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CodeIcon,
    name: "WordPress Development Suite",
    description: "Complete WordPress development environment with local servers, debugging tools, and premium plugins for enterprise-level development.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/wordpress-dev-suite.png",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: VideoIcon,
    name: "Productivity Setup",
    description: "Complete workstation setup optimized for development productivity and content creation workflows.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/productivity-setup.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-600/20" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function GearSection() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for gear section
    gsap.set('[data-gsap="gear-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="gear-subheading"]', { opacity: 0, y: 25 });

    // Set initial states for gear cards - only animate opacity to preserve grid layout and hover effects
    gsap.set('[data-gsap^="gear-item-"]', { opacity: 0 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="gear-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate heading and subheading first
    tl.to('[data-gsap="gear-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    .to(
      '[data-gsap="gear-subheading"]',
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.3',
    )
    // Then stagger animate gear items
    .to(
      '[data-gsap^="gear-item-"]',
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      },
      '-=0.2',
    );
  }, []);

  return (
    <section id="gear" className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeading
        heading="My Gear"
        subheading="The tools and equipment I use daily for development, content creation, and productivity"
        animationId="gear"
      />
      <BentoGrid className="lg:grid-rows-4" data-gsap="gear-grid">
        {gearItems.map((item, index) => (
          <div
            key={item.name}
            data-gsap={`gear-item-${index}`}
            className={item.className}
          >
            <BentoCard {...item} />
          </div>
        ))}
      </BentoGrid>
    </section>
  );
}
