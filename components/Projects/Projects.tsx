import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    title: 'AquaKit - AI Next.js Starter Kit',
    description:
      'Open-source Next.js starter kit for AI applications, live-streamed during development. Work in progress with 50+ GitHub stars, featuring modern tools, responsive design, and performance optimization. Full development process documented on YouTube.',
    date: 'September 2025',
    imageUrl: '/projects/aquakit.png',
    tags: ['Next.js', 'AI Integration', 'TypeScript', 'Convex', 'Open Source', 'Starter Kit'],
    slug: 'aquakit-ai-nextjs-starter',
    links: [
      { title: 'Live Site', url: 'https://aquakitt.com' },
      { title: 'GitHub (50+ ⭐)', url: 'https://github.com/0xAquaWolf/AquaKit' },
      { title: 'Live Stream Playlist', url: 'https://www.youtube.com/watch?v=4Q85SxxnUZc&list=PLwbt1uBf9iqDQyGKEJVj2iA3FFsNxMiXj&pp=gAQB' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Developers building AI-powered applications often struggle with setting up the foundational architecture, spending valuable time on boilerplate code instead of focusing on AI features. Most existing starter kits lack AI-specific optimizations and modern development patterns.\n\n' +
      'The challenge was creating a comprehensive starter kit that provides everything developers need to rapidly prototype and deploy AI applications while maintaining code quality and performance standards.\n\n' +
      '## Action\n\n' +
      'Built AquaKit as a modern Next.js starter kit specifically optimized for AI applications, featuring Convex backend integration, responsive design patterns, and performance optimization tools. The entire development process was live-streamed on YouTube, providing transparency and educational value to the developer community.\n\n' +
      'Implemented dynamic theme switching, system-level preferences detection, and comprehensive development utilities while documenting each step through live coding sessions. Open-sourced the project on GitHub with detailed documentation, examples, and best practices for AI application development.\n\n' +
      '## Results\n\n' +
      'AquaKit has gained significant traction in the developer community:\n\n' +
      '- 50+ GitHub stars from developers worldwide\n' +
      '- Educational YouTube series documenting full development process\n' +
      '- Active community engagement and contributions\n' +
      '- Comprehensive documentation and examples\n' +
      '- Modern development workflow with TypeScript\n' +
      '- Optimized performance and responsive design\n' +
      '- Ready-to-deploy AI application foundation\n' +
      '- Positive feedback from developers following the live streams',
  },
  {
    title: 'Personal Portfolio - Open Source Project',
    description:
      'Modern portfolio and blog website built with Next.js 14, featuring Velite CMS, Drizzle ORM with Turso database, and shadcn/ui components. Open-sourced with 76+ stars and 17 forks, complete development process live-streamed on YouTube.',
    date: 'September 2025',
    imageUrl: '/projects/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'Velite CMS', 'Drizzle ORM', 'Turso', 'Open Source', 'Portfolio'],
    slug: 'personal-portfolio-nextjs',
    links: [
      { title: 'Live Site', url: 'https://0xaquawolf.com' },
      { title: 'GitHub (76+ ⭐)', url: 'https://github.com/0xAquaWolf/portfolio' },
      { title: 'Live Stream Playlist', url: 'https://www.youtube.com/watch?v=Jl4qtdWivgU&list=PLwbt1uBf9iqDWt3IRiW-GhrXrASUG6wsX' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Developers need a professional portfolio that showcases their technical skills while serving as a functional development playground. Most portfolio templates are either too simple or overly complex, lacking the balance between impressive visuals and practical functionality.\n\n' +
      'The challenge was creating a portfolio that demonstrates advanced technical capabilities while remaining maintainable and providing real value through blog content and project showcases.\n\n' +
      '## Action\n\n' +
      'Built a comprehensive portfolio website using Next.js 14 with modern development patterns including Velite for content management, Drizzle ORM with Turso database for data persistence, and shadcn/ui for consistent design. The entire development process was documented through live streaming.\n\n' +
      'Implemented advanced features like dynamic content processing, real-time project showcases, blog functionality with MDX support, and responsive design optimized for all devices. Focused on performance optimization, SEO, and modern development best practices.\n\n' +
      '## Results\n\n' +
      'The portfolio project has achieved significant community recognition:\n\n' +
      '- 76+ GitHub stars from the developer community\n' +
      '- 17 forks showing active interest and contributions\n' +
      '- Complete development documentation through YouTube live streams\n' +
      '- Modern tech stack showcasing current development capabilities\n' +
      '- High-performance website with optimized loading speeds\n' +
      '- Functional blog with advanced content management\n' +
      '- Professional project showcases with detailed case studies\n' +
      '- Active community engagement and positive feedback',
  },
  {
    title: 'SunnySide 24/7 AC Business Website',
    description:
      'Designed and developed a complete business website from concept to launch - created all UI/UX designs in Figma then built the responsive site using Astro with custom branding and optimized user experience.',
    date: 'August 2025',
    imageUrl: '/projects/sunnyside-hvac.jpg',
    tags: ['Figma', 'UI/UX Design', 'Astro', 'JavaScript', 'Responsive Design', 'SEO'],
    slug: 'sunnyside-247-ac-website',
    links: [
      { title: 'Live Site', url: 'https://sunnyside247ac.com' },
      { title: 'GitHub', url: 'https://github.com/0xaquawolf/sunnyside-hvac' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'A family HVAC business in South Florida needed a professional online presence to compete with larger companies and attract new customers. Their existing web presence was outdated and failed to showcase their expertise or make it easy for customers to contact them for emergency services.\n\n' +
      'The challenge was creating a modern, mobile-friendly website that would rank well in local search results while clearly communicating their 24/7 availability and comprehensive service coverage across South Florida.\n\n' +
      '## Action\n\n' +
      'Started with complete UI/UX design process in Figma - creating wireframes, designing the user experience flow, and developing a comprehensive design system with the professional yellow/orange brand color scheme. Crafted every visual element from logo placement to call-to-action buttons with focus on conversion and user engagement.\n\n' +
      'Translated the Figma designs pixel-perfectly into a high-performance website using Astro for optimal loading speeds and SEO. Implemented responsive design patterns, integrated structured JSON-LD schema markup for local SEO, and built interactive elements including the logo marquee. Every design decision was intentionally crafted to convey warmth, reliability, and professional HVAC expertise.\n\n' +
      '## Results\n\n' +
      'The complete design-to-development process delivered exceptional results:\n\n' +
      '- Pixel-perfect implementation from Figma designs to live site\n' +
      '- 90+ Google PageSpeed performance score\n' +
      '- Professional brand presence across South Florida market\n' +
      '- Intuitive user experience optimized for customer conversion\n' +
      '- Mobile-first responsive design tested across all devices\n' +
      '- SEO-optimized for local HVAC searches\n' +
      '- Successfully represents family business values and expertise',
  },
  {
    title: 'AquaStack - Universal React Native + Next.js Mono Repo',
    description:
      'Universal React monorepo combining Next.js web app, Expo mobile client, and Convex backend with Better Auth. Features complete type safety, real-time database, and unified development workflow across platforms.',
    date: 'September 2025',
    imageUrl: '/projects/aquastack.jpg',
    tags: ['React', 'Expo', 'Next.js', 'Convex', 'Better Auth', 'Turborepo', 'TypeScript', 'Monorepo'],
    slug: 'aquastack-universal-react',
    links: [
      { title: 'GitHub', url: 'https://github.com/0xAquaWolf/aquastack' },
    ],
    fullDescription:
      '## Project Overview\n\n' +
      'AquaStack is a universal React monorepo that combines Next.js web applications, Expo mobile clients, and Convex backends with Better Auth security. The project demonstrates full-stack type safety and real-time capabilities across multiple platforms from a single codebase.\n\n' +
      'The architecture leverages shared packages for common types, UI components, and utilities while maintaining platform-specific optimizations. This approach maximizes code reuse and ensures consistent user experience across web and mobile applications.\n\n' +
      '## Technical Architecture\n\n' +
      'Built with Turborepo for efficient monorepo management, the system features:\n\n' +
      '- **Backend**: Convex real-time database with Better Auth integration for secure authentication\n' +
      '- **Web App**: Next.js with App Router, Convex client, and Better Auth session management\n' +
      '- **Mobile App**: Expo Router with NativeWind styling, Zustand state management\n' +
      '- **Shared Packages**: Centralized types, UI components, and auth utilities\n\n' +
      'The system provides complete end-to-end type safety with generated types from Convex schemas flowing through to all client applications.\n\n' +
      '## Key Features & Implementation\n\n' +
      '### Real-time Data Synchronization\n' +
      '- Convex real-time database ensures instant updates across all connected clients\n' +
      '- Automatic type generation maintains consistency between backend and frontend\n' +
      '- Optimistic updates and conflict resolution for smooth user experience\n\n' +
      '### Unified Authentication\n' +
      '- Better Auth integration across web and mobile platforms\n' +
      '- Session management with secure token handling\n' +
      '- Shared auth utilities simplify cross-platform implementation\n\n' +
      '### Development Workflow\n' +
      '- Turborepo orchestrates builds and development servers\n' +
      '- Hot reloading across all platforms during development\n' +
      '- Comprehensive testing suite for end-to-end validation\n\n' +
      '## Documentation & Testing\n\n' +
      'The project includes extensive documentation covering:\n' +
      '- Architecture overview and implementation details\n' +
      '- Testing guide for full-stack validation\n' +
      '- Development workflow and troubleshooting\n' +
      '- Type safety deep dive and best practices\n\n' +
      '## Expected Outcomes\n\n' +
      'AquaStack delivers significant improvements in development efficiency:\n\n' +
      '- 90%+ type safety across the entire stack\n' +
      '- Real-time synchronization across all platforms\n' +
      '- Unified development and deployment workflow\n' +
      '- Comprehensive documentation for team onboarding\n' +
      '- Scalable architecture for complex applications\n' +
      '- Production-ready authentication and data management',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="Showcasing completed work and upcoming Laravel & WordPress projects focused on scalable, high-performance solutions"
      />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageUrl={project.imageUrl}
            tags={project.tags}
            slug={project.slug}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
