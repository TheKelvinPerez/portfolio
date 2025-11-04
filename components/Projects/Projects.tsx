'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    title: 'SunnySide 24/7 AC - Enterprise WordPress Platform',
    description:
      'Sophisticated, locally-focused HVAC website built on WordPress with advanced SEO optimization, scalable architecture generating 480+ pages dynamically. Features custom post types, Advanced Custom Fields, modern build tooling (Vite + Tailwind v4), and enterprise-grade DevOps deployment with Caddy, Docker monitoring, and automated SSL.',
    date: 'August 2025',
    imageUrl: '/projects/sunnyside-hvac.jpg',
    tags: ['WordPress', 'PHP 8.3', 'Vite', 'Tailwind v4', 'ACF Pro', 'DevOps', 'Caddy', 'Docker', 'SEO'],
    slug: 'sunnyside-247-ac-website',
    links: [
      { title: 'Live Site', url: 'https://sunnyside247ac.com' },
    ],
    fullDescription:
      '# Problem\n\n' +
      'A family-owned HVAC business in South Florida was struggling to compete with larger companies in local search results. They needed comprehensive online coverage across 30+ cities and 15+ service types, but manually creating hundreds of location-specific pages would be:\n\n' +
      '- **Time-Prohibitive**: 420+ pages would take months to create manually\n' +
      '- **Inconsistent**: Manual creation leads to content quality variations\n' +
      '- **Unmaintainable**: Updating business info across hundreds of pages becomes impossible\n' +
      '- **Limited SEO Impact**: Without proper structure and automation, achieving local search dominance is unfeasible\n\n' +
      '**Core Challenge**: Create a scalable, enterprise-level platform that generates hundreds of SEO-optimized pages dynamically while maintaining consistency, delivering measurable ROI through organic search traffic, and remaining easy to manage.\n\n' +
      '# Action\n\n' +
      '### WordPress Architecture & Automation\n' +
      'Engineered a sophisticated content management system using **custom post types** and **Advanced Custom Fields Pro**:\n\n' +
      '- **3 Custom Post Types**: 31 Cities, 15 Services, 8 Brands with relationship management\n' +
      '- **Dynamic URL Generation**: Custom rewrite rules creating SEO-friendly URLs like `/miami/ac-repair/`\n' +
      '- **Automated Content**: 487 total pages (420+ service-city combinations) generated from structured data\n' +
      '- **Component-Based Design**: 25+ reusable template components using React-style patterns\n' +
      '- **Smart Taxonomy**: Hierarchical service categories with meta-field relationships\n\n' +
      '### Modern Development Stack\n' +
      'Implemented cutting-edge tooling for optimal performance:\n\n' +
      '- **PHP 8.3+**: Modern practices with PSR-4 autoloading, Composer, PHPDotenv\n' +
      '- **Vite 6.3.6**: Hot Module Replacement (HMR) for real-time development, intelligent asset pipeline\n' +
      '- **Tailwind CSS v4**: CSS-native configuration, utility-first approach\n' +
      '- **DDEV Docker**: Containerized development environment ensuring consistency\n\n' +
      '### Enterprise DevOps Infrastructure\n' +
      'Deployed production-ready infrastructure with enterprise-grade security:\n\n' +
      '- **Caddy v2 Web Server**: Automatic HTTPS with Let\'s Encrypt, HTTP/3 support, multi-site configuration\n' +
      '- **PHP 8.3-FPM**: Dynamic process management, security hardening, resource optimization\n' +
      '- **MySQL 8**: Multi-tenant setup with dedicated users and performance tuning\n' +
      '- **Docker Monitoring**: Uptime Kuma for automated health checks and alerting\n' +
      '- **Security Hardening**: Comprehensive headers (HSTS, CSP, XSS Protection), TLS 1.3, file protection\n\n' +
      '### Advanced SEO Strategy\n' +
      'Built comprehensive local SEO foundation:\n\n' +
      '- **Custom Sitemap Provider**: PHP class generating dynamic service-city combination URLs\n' +
      '- **Schema Markup**: LocalBusiness and Organization schema with geo-targeting for 30+ cities\n' +
      '- **Performance Optimization**: 1-year cache for static assets, dynamic scaling, efficient queries\n' +
      '- **Rich Snippets**: Enhanced meta tags (Open Graph, Twitter Cards) for better visibility\n\n' +
      '# Results\n\n' +
      '### Business Impact & ROI\n' +
      '- **90%+ Time Savings**: Automated content generation reduced creation time from months to days\n' +
      '- **487 SEO-Optimized Pages**: Massive organic search footprint covering entire South Florida market\n' +
      '- **$50K-100K Annual SEO Value**: Equivalent in organic traffic to paid advertising spend\n' +
      '- **Scalable Growth**: Easy addition of new cities/services without technical debt\n' +
      '- **Centralized Management**: Single-point updates across all 487 pages instantly\n\n' +
      '### Technical Excellence Delivered\n' +
      '- **420+ Dynamic Landing Pages**: Service-city combinations auto-generated with SEO optimization\n' +
      '- **Enterprise Architecture**: Production-ready with monitoring, security, and performance optimization\n' +
      '- **Modern Development Workflow**: HMR, environment detection, automated builds and deployments\n' +
      '- **Local Search Dominance**: Comprehensive coverage with rich snippets and structured data\n' +
      '- **Zero Technical Debt**: Maintainable, scalable codebase using modern best practices\n\n' +
      '### Market Value Created\n' +
      '**Development Investment Equivalent**: $73,000-230,000\n' +
      '- Custom WordPress Theme: $8,000-25,000\n' +
      '- Advanced SEO Implementation: $15,000-50,000\n' +
      '- Content Strategy (487 pages): $30,000-100,000+\n' +
      '- Local SEO Optimization: $5,000-15,000\n' +
      '- Custom Development: $10,000-30,000\n' +
      '- DevOps Infrastructure: $5,000-10,000\n\n' +
      '**Annual Ongoing Value**: $42,000-156,000\n' +
      '- SEO Management: $2,000-8,000/month\n' +
      '- Content Updates: $1,000-3,000/month\n' +
      '- Technical Maintenance: $500-2,000/month\n\n' +
      '### Skills Demonstrated\n' +
      '**Backend**: Custom WordPress themes, PHP 8.3+ (PSR-4, Composer), MySQL optimization, ACF Pro\n\n' +
      '**Frontend**: Modern JavaScript (ES modules), Tailwind v4, Vite, responsive design\n\n' +
      '**DevOps**: Caddy v2, Docker (DDEV, Uptime Kuma), PHP-FPM tuning, SSL automation, security hardening\n\n' +
      '**SEO**: Technical implementation, schema markup, content automation, local optimization, custom sitemaps\n\n' +
      '---\n\n' +
      '**Key Takeaway**: This project demonstrates the ability to deliver enterprise-level WordPress solutions that create measurable business value. By combining modern development practices, automation, and strategic SEO, I delivered a platform worth $73K-230K in development value while generating $50K-100K in annual organic search traffic - transforming a local HVAC business into a regional market leader.',
  },
  {
    title: 'Personal Portfolio - Next.js 15 Portfolio',
    description:
      'Modern portfolio website built with Next.js 15, featuring Drizzle ORM with Turso database, shadcn/ui components, and GSAP animations. Showcases WordPress & PHP expertise with comprehensive project case studies and technical skill demonstrations.',
    date: 'September 2025',
    imageUrl: '/projects/portfolio.png',
    tags: ['Next.js 15', 'TypeScript', 'Drizzle ORM', 'Turso', 'shadcn/ui', 'GSAP', 'Portfolio'],
    slug: 'personal-portfolio-nextjs',
    links: [
      { title: 'Live Site', url: 'https://kelvinperez.com' },
      { title: 'GitHub', url: 'https://github.com/KelvinPerez/portfolio' },
    ],
    fullDescription:
      '# Problem\n\n' +
      'As a WordPress & PHP full-stack developer with 8+ years of experience, I faced a challenge: **How do I effectively showcase backend expertise, DevOps capabilities, and business value in a portfolio?**\n\n' +
      'Most portfolio templates are designed for frontend developers and fail to:\n\n' +
      '- **Communicate Backend Depth**: Show advanced WordPress architecture, PHP expertise, and database optimization\n' +
      '- **Demonstrate Business Impact**: Quantify ROI and market value of technical solutions\n' +
      '- **Tell the Journey**: Connect technical evolution with personal growth story\n' +
      '- **Prove Full-Stack Range**: Show DevOps, SEO, and infrastructure capabilities beyond just code\n\n' +
      '**Core Challenge**: Build a portfolio that positions me as an enterprise-level WordPress & PHP specialist while showcasing the full circle journey back to WordPress with modern tools and perspective.\n\n' +
      '# Action\n\n' +
      '### Modern Tech Stack Implementation\n' +
      'Built the portfolio using Next.js 15 to demonstrate modern full-stack capabilities:\n\n' +
      '**Backend & Data Layer**:\n' +
      '- **Drizzle ORM + Turso**: Type-safe database with SQLite for efficient data management\n' +
      '- **API Integration**: YouTube and GitHub APIs for dynamic content\n' +
      '- **Type Safety**: End-to-end TypeScript for maintainable codebase\n\n' +
      '**Frontend Excellence**:\n' +
      '- **Next.js 15 App Router**: Server Components for optimal performance\n' +
      '- **shadcn/ui**: Consistent, accessible component library\n' +
      '- **GSAP + Framer Motion**: Professional animations for engaging UX\n' +
      '- **Tailwind CSS**: Responsive, mobile-first design system\n\n' +
      '**Performance Optimization**:\n' +
      '- Optimized Web Vitals (LCP, CLS, FID)\n' +
      '- Dynamic component loading and code splitting\n' +
      '- Next.js Image optimization\n' +
      '- Efficient data fetching and state management\n\n' +
      '### Strategic Content Architecture\n' +
      'Designed content to showcase WordPress & PHP expertise:\n\n' +
      '**Interactive Developer Timeline**:\n' +
      '- 8+ year journey from novice to WordPress specialist\n' +
      '- Visual progression through technologies (PHP, WordPress, Laravel, AI)\n' +
      '- GSAP animations highlighting key milestones\n' +
      '- Full circle moment: returning to WordPress with modern perspective\n\n' +
      '**Comprehensive Case Studies**:\n' +
      '- **Enterprise WordPress Platform**: 480+ dynamically generated pages, $73K-230K value\n' +
      '- **Technical Deep Dives**: Custom post types, ACF Pro, PHP 8.3+, Vite, Tailwind v4\n' +
      '- **DevOps Showcase**: Caddy v2, Docker, PHP-FPM tuning, MySQL optimization\n' +
      '- **SEO Strategy**: Schema markup, custom sitemaps, $50K-100K annual organic value\n\n' +
      '**About Me Narrative**:\n' +
      '- Personal story connecting technical growth with life journey\n' +
      '- Learn to Code movement origin (2015) to enterprise WordPress solutions (2025)\n' +
      '- Emphasis on WordPress, PHP, Laravel, and AI integration expertise\n' +
      '- Full circle moment building father\'s HVAC site, rediscovering WordPress potential\n\n' +
      '# Results\n\n' +
      '### Professional Positioning Achieved\n' +
      '- **Clear WordPress Specialist Identity**: Portfolio immediately communicates WordPress & PHP expertise\n' +
      '- **Business Value Communication**: Quantified project impacts ($73K-230K development value)\n' +
      '- **Full-Stack Credibility**: Demonstrated backend, frontend, DevOps, and SEO capabilities\n' +
      '- **Unique Narrative**: Full circle journey differentiates from typical developer portfolios\n\n' +
      '### Technical Excellence Demonstrated\n' +
      '- **Modern Development**: Next.js 15, TypeScript, cutting-edge tools showing current proficiency\n' +
      '- **WordPress Depth**: Detailed case studies proving enterprise-level WordPress capabilities\n' +
      '- **DevOps Expertise**: Infrastructure work (Caddy, Docker, PHP-FPM) often missing from portfolios\n' +
      '- **Performance Focus**: Optimized Web Vitals and efficient resource utilization\n\n' +
      '### User Experience & Engagement\n' +
      '- **Professional Design**: High-quality UI reflecting attention to detail and design sensibility\n' +
      '- **Interactive Elements**: GSAP animations create engaging, memorable experience\n' +
      '- **Mobile-First**: Responsive design ensuring accessibility across all devices\n' +
      '- **SEO Optimized**: Technical SEO best practices for maximum visibility\n\n' +
      '### Portfolio as Proof of Concept\n' +
      '- **Practices What I Preach**: Modern development stack demonstrates current capabilities\n' +
      '- **Performance**: Fast loading, optimized assets show technical competence\n' +
      '- **Maintainable Code**: Type-safe, well-architected codebase proves professional standards\n' +
      '- **Business Understanding**: Market value analysis shows ability to connect tech to ROI\n\n' +
      '---\n\n' +
      '**Key Takeaway**: This portfolio successfully positions me as an enterprise-level WordPress & PHP full-stack developer by combining modern technical implementation with strategic content that quantifies business value. It tells a unique full circle story while proving technical depth across the entire stack - from custom WordPress themes and PHP optimization to DevOps infrastructure and SEO strategy. The result is a portfolio that doesn\'t just showcase projects, but demonstrates the ability to deliver measurable business results through technical excellence.',
  },
];

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
