'use client';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import SectionHeading from '@/components/SectionHeading';
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
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid';

const timelineData = [
  {
    title: '2016',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <AcademicCapIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">The Beginning</h4>
        </div>
        <p className="text-white text-sm md:text-base leading-relaxed">
          Started my coding journey, watched coding videos and learned about web development. This was when I first heard about learning how to code and fell in love with the possibilities.
        </p>
      </div>
    ),
  },
  {
    title: '2017',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <ComputerDesktopIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Commitment to Web Development</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Really hunkered down and decided this was the path I wanted to take as a web developer. Started learning PHP and WordPress as my foundation.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">PHP fundamentals</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">WordPress basics</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">First internship at marketing company</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <PaintBrushIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Mastering the Fundamentals</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Worked at marketing companies, diving deep into WordPress, CSS, and design. Started discovering the intersection of development and user experience.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Custom WordPress development</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Advanced Custom Fields</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Adobe XD & Figma design</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Color theory & typography</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <BoltIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">JavaScript & Modern Stack Transition</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Mastered JavaScript and began exploring React and TypeScript. Started seeing the potential of modern development beyond traditional CMS approaches.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">JavaScript proficiency</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">React fundamentals</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">UI/UX design principles</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">TypeScript exploration</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <RocketLaunchIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Entrepreneurial Leap</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          COVID hit and I had enough experience to work independently. Built a Chrome extension startup with my brother for Amazon dropshipping automation.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Chrome extension development</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">20K MRR achieved</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Amazon dropshipping automation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">First major startup success</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <CurrencyDollarIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Crypto & Blockchain Era</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Feeling confident in JavaScript and React skills, discovered crypto, NFTs, and blockchain. Dove deep into Solidity and launched successful NFT projects.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Solidity programming</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">NFT project launches</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">$28M+ code generation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Massive personal success</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Next.js & TypeScript mastery</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <GlobeAltIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Success & Spiritual Journey</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Launched another ultra-successful NFT project ($300K). Experienced extreme burnout and began spiritual journey traveling the world for healing and perspective.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">$300K NFT project</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">World travel (Peru, Thailand, Cambodia, Laos, India)</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Early AI spiritual coach experiments</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Spiritual growth & healing</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <CpuChipIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">AI Discovery & Deep Dive</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Returned to Miami with fresh perspective. Discovered the AI revolution and immediately recognized its transformative potential. Dove deep into LLMs, RAG systems, and AI agents.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">OpenAI API mastery</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">LLM integration expertise</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">RAG systems development</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">AI agent automation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">TypeScript + AI workflows</span>
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
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <FlagIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">AI-Powered Creator & Entrepreneur</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Fully embraced AI-first development with TypeScript, React, and Next.js. Started live streaming, building in public, and creating AI-powered tools for the developer community.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <a href="https://youtube.com/@0xAquawolf" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                Live streaming & content creation
                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <a href="https://github.com/0xAquaWolf/AquaKit" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center gap-1">
                AquaKit AI starter kit (50+ stars)
                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <a href="https://github.com/0xAquaWolf/portfolio" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center gap-1">
                Open source portfolio (76+ stars)
                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Building in public methodology</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">AI-powered UI/UX design workflows</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Next.js + AI integration mastery</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Entrepreneurship through technology</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];


export default function TimelineComponent() {
  return (
    <div id="timeline" className="w-full mt-40">
      <SectionHeading
        heading="My Developer Journey"
        subheading="8+ Years of Evolution: From PHP foundations to AI-powered development, live streaming, and building in public"
      />
      <Timeline data={timelineData} />
    </div>
  );
}
