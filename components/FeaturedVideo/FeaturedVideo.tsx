'use client';

import ResponsiveYouTube from '@/components/ui/ResponsiveYouTube';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturedVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-20% 0px -20% 0px"
  });

  // Container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  // Title variant
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  // Video section variant
  const videoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] // power2.out equivalent
      }
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="mb-12 text-center" variants={titleVariants}>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Featured Video
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Watch my latest work and insights
          </p>
        </motion.div>
        <motion.div variants={videoVariants}>
          <ResponsiveYouTube
            video="4Q85SxxnUZc" // Introduction video
            title="Introduction Video"
            className="max-w-4xl mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
