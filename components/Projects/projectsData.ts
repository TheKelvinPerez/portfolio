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
      'Sophisticated, locally-focused HVAC website built on WordPress with advanced SEO optimization, scalable architecture generating 487 pages dynamically. Features custom post types, Advanced Custom Fields, modern build tooling (Vite + Tailwind v4), and enterprise-grade DevOps deployment with Caddy, Docker monitoring, and automated SSL.',
    date: 'August 2025',
    imageUrl: '/projects/sunnyside-hvac.jpg',
    tags: [
      'WordPress',
      'PHP 8.3',
      'Vite',
      'Tailwind v4',
      'ACF Pro',
      'DevOps',
      'Caddy',
      'Docker',
      'SEO',
    ],
    slug: 'sunnyside-247-ac-website',
    links: [
      { title: 'Live Site', url: 'https://sunnyside247ac.com' },
      {
        title: '100 Google PageSpeed Score',
        url: 'https://pagespeed.web.dev/analysis/https-sunnyside247ac-com/bimc9jrugi?form_factor=desktop',
      },
      { title: 'GitHub', url: 'https://github.com/TheKelvinPerez/sunnysideac-wp' },
    ],
    fullDescription:
      '# Problem\n\n' +
      'A family-owned HVAC business in South Florida was struggling to compete with larger companies in local search results. They needed comprehensive online coverage across 30+ cities and 15+ service types, but manually creating hundreds of location-specific pages would be:\n\n' +
      '- **Time-Prohibitive**: 487 pages would take months to create manually\n' +
      '- **Inconsistent**: Manual creation leads to content quality variations\n' +
      '- **Unmaintainable**: Updating business info across hundreds of pages becomes impossible\n' +
      '- **Limited SEO Impact**: Without proper structure and automation, achieving local search dominance is unfeasible\n\n' +
      '**Core Challenge**: Create a scalable, enterprise-level platform that generates hundreds of SEO-optimized pages dynamically while maintaining consistency, delivering measurable ROI through organic search traffic, and remaining easy to manage.\n\n' +
      '# Action\n\n' +
      '### WordPress Architecture & Automation\n' +
      'Engineered a sophisticated content management system using **custom post types** and **Advanced Custom Fields Pro**:\n\n' +
      '- **3 Custom Post Types**: 31 Cities, 15 Services, 8 Brands with relationship management\n' +
      '- **Dynamic URL Generation**: Custom rewrite rules creating SEO-friendly URLs like `/miami/ac-repair/`\n' +
      '- **Automated Content**: 487 total pages (465 service-city combinations + 31 city pages + 15 service pages) generated from structured data\n' +
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
      "- **Caddy v2 Web Server**: Automatic HTTPS with Let's Encrypt, HTTP/3 support, multi-site configuration\n" +
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
      '- **487 Dynamic Landing Pages**: Service-city combinations auto-generated with SEO optimization\n' +
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
    title: 'Personal Portfolio - Next.js 15 Modern Platform',
    description:
      'High-performance portfolio built with Next.js 15, React 19, and TypeScript. Features GSAP animations, shadcn/ui components, and modern development practices. Demonstrates full-stack expertise through real project case studies and technical implementation.',
    date: 'September 2025',
    imageUrl: '/images/png/kelvin-perez-website-preview.png',
    tags: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'GSAP',
      'Framer Motion',
      'shadcn/ui',
      'Tailwind CSS',
      'Bun Runtime',
    ],
    slug: 'personal-portfolio-nextjs',
    links: [
      { title: 'Live Site', url: 'https://kelvinperez.com' },
      { title: 'GitHub', url: 'https://github.com/TheKelvinPerez/portfolio' },
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
      '### Cutting-Edge Tech Stack\n' +
      'Built with the latest modern web technologies to demonstrate current expertise:\n\n' +
      '**Core Framework**:\n' +
      '- **Next.js 15**: Latest App Router with Server Components and Turbopack\n' +
      '- **React 19**: Newest React features with improved Server Components\n' +
      '- **TypeScript 5**: End-to-end type safety for maintainable codebase\n' +
      '- **Bun Runtime**: Ultra-fast JavaScript runtime and package manager\n\n' +
      '**Animation & UX Excellence**:\n' +
      '- **GSAP 3.13**: Professional animation library with React integration\n' +
      '- **Framer Motion 11**: Modern React animation framework\n' +
      '- **Canvas Confetti**: Celebration animations for interactive elements\n' +
      '- **Paper Design Shaders**: Advanced visual effects\n\n' +
      '**Component Architecture**:\n' +
      '- **shadcn/ui**: Modern, accessible component library built on Radix UI\n' +
      '- **Tailwind CSS 3.4**: Utility-first CSS framework with custom design system\n' +
      '- **Lucide React**: Modern icon library\n' +
      '- **Headless UI**: Unstyled, accessible component primitives\n\n' +
      '**Performance & Analytics**:\n' +
      '- **PostHog**: Product analytics for user behavior tracking\n' +
      '- **Next.js Image**: Optimized image loading with WebP support\n' +
      '- **Tailwind Animate**: Smooth transitions and animations\n\n' +
      '### Modern Development Practices\n' +
      'Implemented industry-standard development workflows:\n\n' +
      '**Code Quality**:\n' +
      '- **ESLint 8**: Next.js core web vitals configuration\n' +
      '- **Prettier**: Consistent code formatting with Tailwind plugin\n' +
      '- **TypeScript**: Strict mode for maximum type safety\n' +
      '- **React Hook Form**: Optimized form handling with validation\n\n' +
      '**Build Optimization**:\n' +
      '- **Turbopack**: Blazing-fast bundler for development and production\n' +
      '- **Dynamic Imports**: Code splitting for optimal performance\n' +
      '- **Server Components**: Reduced client-side JavaScript bundle\n' +
      '- **Static Generation**: Maximum performance with SSG where appropriate\n\n' +
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
      "- Full circle moment building Father's HVAC site, rediscovering WordPress potential\n\n" +
      '# Results\n\n' +
      '### Professional Positioning Achieved\n' +
      '- **Clear WordPress Specialist Identity**: Portfolio immediately communicates WordPress & PHP expertise\n' +
      '- **Business Value Communication**: Quantified project impacts ($73K-230K development value)\n' +
      '- **Full-Stack Credibility**: Demonstrated backend, frontend, DevOps, and SEO capabilities\n' +
      '- **Unique Narrative**: Full circle journey differentiates from typical developer portfolios\n\n' +
      '### Modern Web Development Excellence\n' +
      '- **Cutting-Edge Stack**: Demonstrates proficiency with latest Next.js 15, React 19, and TypeScript 5\n' +
      '- **Performance Optimized**: Leverages Server Components, Turbopack, and modern bundling techniques\n' +
      '- **Type Safety**: Full TypeScript implementation with strict mode for enterprise-grade code\n' +
      '- **Animation Mastery**: Professional GSAP and Framer Motion implementations\n\n' +
      '### Enterprise-Ready Architecture\n' +
      '- **Scalable Structure**: Component-based architecture with reusable, type-safe components\n' +
      '- **Modern Tooling**: Bun runtime, Turbopack bundler, and latest build optimizations\n' +
      '- **Accessibility**: Full WCAG compliance with Radix UI and semantic HTML\n' +
      '- **Analytics Integration**: PostHog for product analytics and user behavior insights\n\n' +
      '### Developer Experience Excellence\n' +
      '- **Modern DX**: Hot Module Replacement, strict TypeScript, and comprehensive linting\n' +
      '- **Component Library**: Consistent design system with shadcn/ui and custom components\n' +
      '- **Build Performance**: Optimized builds with Turbopack and code splitting\n' +
      '- **Maintainable Code**: Professional code standards with automated formatting\n\n' +
      '### Business Value Demonstrated\n' +
      '- **Technical Leadership**: Shows ability to evaluate and implement cutting-edge technologies\n' +
      '- **Performance Focus**: Optimized Web Vitals and modern performance techniques\n' +
      '- **Scalable Solutions**: Architecture designed for growth and maintainability\n' +
      '- **Full-Stack Perspective**: Backend expertise demonstrated through modern frontend implementation\n\n' +
      '---\n\n' +
      "**Key Takeaway**: This portfolio demonstrates mastery of modern web development through the latest Next.js 15, React 19, and TypeScript ecosystem. By combining cutting-edge technology with strategic content, it showcases not just technical skills but the ability to deliver enterprise-grade solutions. The implementation itself serves as proof of expertise - from Turbopack optimization to GSAP animations, every technical choice reflects current best practices and performance-first thinking.",
  },
];

