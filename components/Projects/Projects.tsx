'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from './projectsData';

export default function Projects() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for projects section
    gsap.set('[data-gsap="projects-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="projects-subheading"]', { opacity: 0, y: 25 });

    // Set initial states for project cards
    gsap.set('[data-gsap^="project-card-"]', { opacity: 0, y: 30, scale: 0.95 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="projects-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate heading and subheading first
    tl.to('[data-gsap="projects-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    .to(
      '[data-gsap="projects-subheading"]',
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.3',
    )
    // Then stagger animate project cards
    .to(
      '[data-gsap^="project-card-"]',
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      },
      '-=0.2',
    );
  }, []);

  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="Showcasing completed work and upcoming Laravel & WordPress projects focused on scalable, high-performance solutions"
        animationId="projects"
      />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" data-gsap="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            data-gsap={`project-card-${index}`}
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
          </div>
        ))}
      </div>
    </div>
  );
}
