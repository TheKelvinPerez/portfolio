'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import SectionHeading from '@/components/SectionHeading';
import StyledLink from '@/components/ui/styled-link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  BoltIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  FlagIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';

const timelineData = [
  {
    title: '2016',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-0"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <BuildingOfficeIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Digital Age Marketing Group</h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-0"
        >
          Started my professional web development journey at Digital Age Marketing Group while continuing to learn coding fundamentals. This role provided the foundation for my WordPress expertise.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-0"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-0-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Developed 20+ custom WordPress themes and plugins</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-0-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Collaborated with design and marketing teams</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-0-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Gained foundational UI/UX, color theory, typography skills</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-0-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Stack: WordPress, PHP 7+, Sass, jQuery, Adobe XD, Git</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2017',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-1"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <ComputerDesktopIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">
            Commitment to Web Development
          </h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-1"
        >
          Really hunkered down and decided this was the path I wanted to take as
          a web developer. Started learning PHP and WordPress as my foundation.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-1"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-1-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">PHP fundamentals</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-1-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">WordPress basics</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-1-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                First internship at marketing company
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2018',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <PaintBrushIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">
            Mastering the Fundamentals
          </h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-2"
        >
          Worked at marketing companies, diving deep into WordPress, CSS, and
          design. Started discovering the intersection of development and user
          experience.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-2"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-2-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Custom WordPress development
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-2-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Advanced Custom Fields
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-2-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Adobe XD & Figma design
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-2-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Color theory & typography
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2019',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <RocketLaunchIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">ViViFi Agency Founded</h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-3"
        >
          Founded my boutique digital agency while continuing to master modern JavaScript and React. Delivered custom WordPress solutions for SMBs and creatives, building 12+ high-converting websites.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-3"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-3-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">12+ high-converting WordPress websites</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-3-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">100% client satisfaction, 40% repeat business</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-3-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Created reusable agency starter themes</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-3-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">JavaScript proficiency & React fundamentals</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-3-4"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">UI/UX design principles & TypeScript exploration</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-3-5"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Stack: WordPress, PHP, Sass, JavaScript (ES6+), Figma, Adobe XD, Gulp</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2020',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-4"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <RocketLaunchIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Entrepreneurial Leap</h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-4"
        >
          COVID hit and I had enough experience to work independently. Built a
          Chrome extension startup with my brother for Amazon dropshipping
          automation.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-4"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-4-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Chrome extension development
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-4-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm font-semibold text-gray-100">
                20K MRR achieved
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-4-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Amazon dropshipping automation
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-4-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                First major startup success
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2021',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <BriefcaseIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Light Code Labs Founded</h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-5"
        >
          Launched Light Code Labs as a full-stack WordPress engineering consultancy. Also explored blockchain and NFT projects, achieving massive success while building foundational WordPress expertise.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-5"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-5-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Architected custom WordPress CMS for multi-location HVAC brand</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-5-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Automated 487+ service pages with CPTs, ACF Pro, schema markup</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-5-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">90% reduction in content creation time</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-5-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">$50K-$100K annual organic traffic value</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-5-4"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">$28M+ NFT code generation success</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-5-5"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">Stack: WordPress, PHP 8.3, ACF Pro, Tailwind CSS, Vite, Docker (DDEV), Caddy, MySQL, Next.js, TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2022',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-6"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <GlobeAltIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">
            Success & Spiritual Journey
          </h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-6"
        >
          Launched another ultra-successful NFT project ($300K). Experienced
          extreme burnout and began spiritual journey traveling the world for
          healing and perspective.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-6"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-6-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm font-semibold text-gray-100">
                $500K NFT project
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-6-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                World travel (Peru, Thailand, Cambodia, Laos, India)
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-6-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Early AI spiritual coach experiments
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-6-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Spiritual growth & healing
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-7"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <CpuChipIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">
            AI Discovery & Deep Dive
          </h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-7"
        >
          Returned to Miami with fresh perspective. Discovered the AI revolution
          and immediately recognized its transformative potential. Dove deep
          into LLMs, RAG systems, and AI agents.
        </p>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-7"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-7-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">OpenAI API mastery</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-7-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                LLM integration expertise
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-7-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                RAG systems development
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-7-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">AI agent automation</span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-7-4"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                TypeScript + AI workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2024-2025',
    content: (
      <div className="space-y-4">
        <div
          className="mb-4 flex items-center gap-3"
          data-gsap="timeline-header-8"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700">
            <FlagIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">
            Full Circle: Back to WordPress & PHP
          </h4>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed text-white md:text-base"
          data-gsap="timeline-text-8"
        >
          The full circle moment arrived when my father&apos;s HVAC company
          needed a website. I explored modern tools like Astro, but WordPress
          called me back home. Built{' '}
          <StyledLink href="https://sunnyside247ac.com">
            a site
          </StyledLink>{' '}
          with 487+ dynamically generated
          pages using Advanced Custom Fields, custom templates, and dynamic
          rewrite rules. This time, I could see the complete picture - React,
          TypeScript, Tailwind, and Vite all interconnecting with WordPress in
          ways I couldn&apos;t comprehend as a junior developer.
        </p>
        <div
          className="mb-4 rounded-2xl border border-yellow-600/30 bg-yellow-900/20 p-4"
          data-gsap="timeline-quote-8"
        >
          <p className="text-sm italic leading-relaxed text-yellow-200/90 md:text-base">
            &quot;It was like coming home. WordPress wasn&apos;t just where I
            started - it was where all my experience with modern JavaScript, AI,
            and full-stack development converged into something powerful. Now I
            see the potential clearly - WordPress with modern tools is
            transformative.&quot;
          </p>
        </div>
        <div
          className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20"
          data-gsap="timeline-achievements-8"
        >
          <h5 className="mb-4 font-semibold text-purple-400">Key Achievements</h5>
          <div className="space-y-3">
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-0"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm font-semibold text-gray-100">
                487+ page WordPress site with dynamic generation
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-1"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Advanced Custom Fields + custom template mastery
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-2"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Dynamic rewrite rules for scalable routing
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-3"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Modern WordPress with React & TypeScript
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-4"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                WordPress + Tailwind CSS + Vite workflow
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-5"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Laravel & PHP framework expertise
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-6"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Custom plugin & theme development
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-7"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                AI integration with WordPress & PHP
              </span>
            </div>
            <div
              className="flex items-start space-x-3"
              data-gsap="timeline-bullet-8-8"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-100">
                Headless WordPress architectures
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TimelineComponent() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('[data-gsap="timeline-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="timeline-subheading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap="timeline-container"]', { opacity: 0, y: 30 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="timeline-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('[data-gsap="timeline-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="timeline-subheading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.2',
      )
      .to(
        '[data-gsap="timeline-container"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.1',
      );

    // Set initial states for all timeline elements
    timelineData.forEach((_, index) => {
      const headerSelector = `[data-gsap="timeline-header-${index}"]`;
      const textSelector = `[data-gsap="timeline-text-${index}"]`;
      const quoteSelector = `[data-gsap="timeline-quote-${index}"]`;
      const achievementsSelector = `[data-gsap="timeline-achievements-${index}"]`;

      // Set initial states - consistent with other sections
      gsap.set(headerSelector, { opacity: 0, y: 30 });
      gsap.set(textSelector, { opacity: 0, y: 30 });
      if (document.querySelector(quoteSelector)) {
        gsap.set(quoteSelector, { opacity: 0, y: 30 });
      }
      gsap.set(achievementsSelector, { opacity: 0, y: 30, scale: 0.95 });

      // Animate individual bullet points with stagger
      const bullets = document.querySelectorAll(
        `[data-gsap^="timeline-bullet-${index}-"]`,
      );
      if (bullets.length > 0) {
        gsap.set(bullets, { opacity: 0, y: 20 });
      }
    });

    // Create single cohesive timeline for all timeline elements
    const mainTimelineTl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="timeline-container"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate all timeline elements in sequence with consistent stagger
    mainTimelineTl
      // First animate all headers
      .to('[data-gsap^="timeline-header-"]', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      })
      // Then animate all text content
      .to('[data-gsap^="timeline-text-"]', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.2')
      // Then animate all quote sections if they exist
      .to('[data-gsap^="timeline-quote-"]', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.2')
      // Then animate all achievement cards
      .to('[data-gsap^="timeline-achievements-"]', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.2')
      // Finally animate all bullet points
      .to('[data-gsap^="timeline-bullet-"]', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
      }, '-=0.2');
  });

  return (
    <div id="timeline" className="mt-40 w-full">
      <SectionHeading
        heading="Professional Experience & Journey"
        subheading="8+ Years of Evolution: From Digital Age Marketing Group through ViViFi Agency to Light Code Labs, with technical growth and entrepreneurial success"
        animationId="timeline"
      />
      <div data-gsap="timeline-container">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}