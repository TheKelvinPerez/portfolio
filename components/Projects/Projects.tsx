'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';
import { projectsData } from './projectsData';

// Container variants for projects section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Match GSAP stagger of 0.15
      delayChildren: 0.2,
    },
  },
};

// Mobile optimized container variants
const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Faster stagger on mobile
      delayChildren: 0.1,
    },
  },
};

// Project card variants
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Matches GSAP power2.out
    },
  },
};

// Mobile optimized card variants
const mobileCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Projects() {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="Enterprise WordPress platforms and full-stack solutions demonstrating scalable architecture, performance optimization, and measurable business impact"
        animationId="projects"
      />
      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={isMobile ? mobileContainerVariants : containerVariants}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={isMobile ? mobileCardVariants : cardVariants}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              date={project.date}
              imageUrl={project.imageUrl}
              tags={project.tags}
              slug={project.slug}
              links={project.links}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
