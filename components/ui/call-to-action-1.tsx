'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface DownloadResumeCTAProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
}

export default function DownloadResumeCTA({
  heading = 'Need the quick version?',
  body = 'The resume is the concise version. This portfolio gives the working examples behind it.',
  buttonLabel = 'Open Resume',
}: DownloadResumeCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-20% 0px -20% 0px',
  });

  const resumeUrl =
    'https://docs.google.com/document/d/1bJNTpwSZcjrzHnnHX4YQW6BretFT_DmjNIuAcSbHKYk/edit?usp=sharing';

  const handleOpenResume = () => {
    window.open(resumeUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="mx-4 my-24 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 px-6 py-12 text-center text-white shadow-2xl shadow-purple-500/20 backdrop-blur-md md:mx-auto md:max-w-5xl md:px-10"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h2
        className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl"
        variants={itemVariants}
      >
        {heading}
      </motion.h2>
      <motion.p
        className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-200"
        variants={itemVariants}
      >
        {body}
      </motion.p>
      <motion.div className="mt-8" variants={itemVariants}>
        <button
          onClick={handleOpenResume}
          className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-alt-cta transition-all hover:from-violet-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-purple-400/30"
        >
          {buttonLabel}
        </button>
      </motion.div>
    </motion.section>
  );
}
