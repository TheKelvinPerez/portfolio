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

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-24 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Selected Work"
        subheading="The dashboard comes first. The other projects show the path that led into Laravel."
        animationId="projects"
      />
      <motion.div
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={
              index < 2
                ? 'lg:col-span-3'
                : 'lg:col-span-2'
            }
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              slug={project.slug}
              links={project.links}
              featured={index === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
