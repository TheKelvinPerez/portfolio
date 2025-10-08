'use client';

import VideoGrid from "./VideoGrid";
import SectionHeading from "../SectionHeading";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function YoutubeVideos() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { 
    once: true, 
    margin: "-20% 0px -20% 0px" 
  });

  // Grid variant
  const gridVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div id="videos" className="px-8">
      <SectionHeading
        heading="Watched by Thousands of People"
        subheading="Live Streaming weekly: WordPress, AI, Next.js, React, PHP, Startups, AI Dev Workflows, Neovim"
        animationId="videos"
      />
      <motion.div 
        ref={gridRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={gridVariants}
      >
        <VideoGrid />
      </motion.div>
    </div>
  );
}
