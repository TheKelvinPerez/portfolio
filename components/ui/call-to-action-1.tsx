'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DownloadResumeCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-20% 0px -20% 0px',
  });

  // Single resume URL
  const resumeUrl =
    'https://docs.google.com/document/d/1bJNTpwSZcjrzHnnHX4YQW6BretFT_DmjNIuAcSbHKYk/edit?usp=sharing';

  const handleDownload = () => {
    window.open(resumeUrl, '_blank');
  };

  // COMMENTED OUT - Multiple resume options for future design
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedResume, setSelectedResume] = useState('ats');
  // const resumeOptions = [
  //   {
  //     id: 'ats',
  //     name: 'ATS Friendly',
  //     description: 'Optimized for applicant tracking systems',
  //     url: 'https://docs.google.com/document/d/15DKjg8zZwIXyBa8Bva6vI90dvgSh34HxlHaPAnwGOJE/edit?usp=sharing'
  //   },
  //   {
  //     id: 'modern',
  //     name: 'Modern Design',
  //     description: 'Visually appealing modern design',
  //     url: 'https://docs.google.com/document/d/15DKjg8zZwIXyBa8Bva6vI90dvgSh34HxlHaPAnwGOJE/edit?usp=sharing'
  //   }
  // ];

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
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out equivalent
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out equivalent
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out equivalent
      },
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
        ease: [0.68, -0.55, 0.265, 1.55], // back.out(1.7) equivalent
      },
    },
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        className="mx-2 my-60 flex max-w-5xl flex-col items-center justify-center rounded-2xl border-2 border-purple-500/40 bg-gradient-to-b from-purple-700/80 to-purple-900/90 p-10 py-16 text-center font-sans text-white shadow-2xl shadow-purple-500/20 backdrop-blur-md md:mx-auto md:w-full"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.h1
          className="max-w-xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-sm md:text-5xl md:leading-[60px]"
          variants={titleVariants}
        >
          See my credentials & expertise
        </motion.h1>
        <motion.p
          className="mt-4 max-w-md text-white/90"
          variants={descriptionVariants}
        >
          Download my resume to learn more about my experience, skills, and how
          I can help bring your next project to life.
        </motion.p>
        <motion.div className="mt-8" variants={buttonVariants}>
          <button
            onClick={handleDownload}
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-3 text-sm uppercase text-white shadow-xl transition-all hover:from-violet-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-purple-400/30"
          >
            <span>Download Resume</span>
          </button>

          {/* COMMENTED OUT - Dropdown for multiple resume options for future design */}
          {/* <button
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
          )} */}
        </motion.div>
      </motion.div>
    </>
  );
}
