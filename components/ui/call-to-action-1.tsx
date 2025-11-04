'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function DownloadResumeCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-20% 0px -20% 0px"
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState('ats');

  const resumeOptions = [
    {
      id: 'ats',
      name: 'ATS Friendly',
      description: 'Optimized for applicant tracking systems',
      url: 'https://docs.google.com/document/d/15DKjg8zZwIXyBa8Bva6vI90dvgSh34HxlHaPAnwGOJE/edit?usp=sharing'
    },
    {
      id: 'modern',
      name: 'Modern Design',
      description: 'Visually appealing modern design',
      url: 'https://docs.google.com/document/d/15DKjg8zZwIXyBa8Bva6vI90dvgSh34HxlHaPAnwGOJE/edit?usp=sharing' // placeholder
    }
  ];

  const handleDownload = () => {
    const selected = resumeOptions.find(option => option.id === selectedResume);
    if (selected) {
      window.open(selected.url, '_blank');
    }
    setIsDropdownOpen(false);
  };

  // Container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out equivalent
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual element variants
  const badgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] // power2.out equivalent
      }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94] // power2.out equivalent
      }
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] // power2.out equivalent
      }
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.68, -0.55, 0.265, 1.55] // back.out(1.7) equivalent
      }
    },
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        className="mx-2 my-60 flex max-w-5xl flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#5524B7] to-[#380B60] p-10 py-16 text-center font-sans text-white md:mx-auto md:w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-wrap items-center justify-center rounded-full border border-purple-500/40 bg-purple-600/10 p-1 text-sm backdrop-blur"
          variants={badgeVariants}
        >
          <div className="flex items-center">
            <span className="mr-2 text-lg">💼</span>
            <span className="mr-2 text-lg">🚀</span>
            <span className="text-lg">📈</span>
          </div>
          <p className="ml-2 font-medium">
            Trusted by leading companies and startups
          </p>
        </motion.div>
        <motion.h1 
          className="mt-5 max-w-xl bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl md:leading-[60px]"
          variants={titleVariants}
        >
          See my credentials & expertise
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-md text-white/80"
          variants={descriptionVariants}
        >
          Download my resume to learn more about my experience, skills, and how
          I can help bring your next project to life.
        </motion.p>
        <motion.div className="mt-8 relative" variants={buttonVariants}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center justify-between rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 text-sm uppercase text-white transition-all hover:from-violet-700 hover:to-purple-700 shadow-lg min-w-[200px]"
          >
            <span>Download Resume</span>
            <svg
              className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full min-w-[250px] rounded-lg bg-white shadow-lg border border-gray-200 z-10">
              <div className="py-2">
                {resumeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      window.open(option.url, '_blank');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    <div className="font-medium">{option.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
