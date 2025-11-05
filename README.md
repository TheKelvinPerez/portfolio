<h1 align="center">Kelvin Perez - WordPress Developer Portfolio</h1>

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<div align="center">
<img src="https://img.shields.io/github/forks/TheKelvinPerez/portfolio.svg?style=for-the-badge" alt="Forks">
<img src="https://img.shields.io/github/issues/TheKelvinPerez/portfolio.svg?style=for-the-badge" alt="Issues">
<img src="https://img.shields.io/github/license/TheKelvinPerez/portfolio.svg?style=for-the-badge" alt="License">
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <p align="center">
    A modern, high-performance portfolio website showcasing my expertise as a Senior Full-Stack WordPress & PHP Developer. Built with Next.js 15, React 19, and cutting-edge web technologies.
    <br />
    <a href="https://kelvinperez.com">View Live Site</a>
    ·
    <a href="https://github.com/TheKelvinPerez/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheKelvinPerez/portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

<h2 align="center">About This Project</h2>

This is my professional portfolio website, designed to showcase my WordPress development expertise, projects, and professional experience. The site demonstrates modern web development practices with a focus on performance, accessibility, and user experience.

### Key Features

- **Modern Tech Stack**: Built with Next.js 15 App Router and React 19
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Rich Animations**: GSAP and Framer Motion for smooth, professional animations
- **Performance Optimized**: Fast loading times, optimized assets, and Core Web Vitals focused
- **Dark Mode**: Theme switching with next-themes
- **SEO Optimized**: Structured data, meta tags, sitemap, and robots.txt
- **Analytics**: PostHog integration for user behavior tracking
- **PWA Ready**: Progressive Web App capabilities with manifest configuration

### Portfolio Sections

- **Hero**: Introduction with call-to-action and animated effects
- **About Me**: Professional background and expertise
- **Timeline**: Career progression and work experience
- **Projects**: Detailed case studies of WordPress development work
- **Books**: Recommended reading for developers
- **Gear**: Equipment and tools I use
- **FAQ**: Common questions about services and approach
- **Contact Form**: Conversational contact interface

<br>
<h3 align="center">Built With</h3>
<div align="center">
<img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP">
<img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
<img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
<img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
<img src="https://img.shields.io/badge/PostHog-FF6F00?style=for-the-badge&logo=posthog&logoColor=white" alt="PostHog">
</div>
<br>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- **Bun** (JavaScript runtime and package manager)
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=""
NEXT_PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"
```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/TheKelvinPerez/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```sh
   bun install
   ```

3. Start the development server
   ```sh
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```sh
bun run dev          # Start development server with Turbopack
bun run build        # Build for production
bun run start        # Start production server
bun run scn:add      # Add shadcn/ui components
bun run ace:add      # Add Aceternity UI components
bun run clean        # Clean install (removes node_modules, .next)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ARCHITECTURE -->

## Architecture & Tech Stack

### Framework & Core
- **Next.js 15**: App Router with Server Components
- **React 19**: Latest React with concurrent features
- **TypeScript**: Full type safety throughout the application
- **Bun**: Fast JavaScript runtime and package manager

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components built on Radix UI
- **Magic UI**: Additional UI component library
- **next-themes**: Theme management with dark mode support

### Animation & Effects
- **GSAP** (@gsap/react): Professional-grade animation library
- **Framer Motion**: Declarative React animations
- **Canvas Confetti**: Celebration animations
- **@paper-design/shaders-react**: WebGL shader effects

### Analytics & Performance
- **PostHog**: User analytics and event tracking
- **Core Web Vitals**: Optimized for LCP, CLS, FID
- **Dynamic Rendering**: 12-hour revalidation strategy

### Icons & Assets
- **Lucide React**: Icon library
- **Heroicons**: Additional icon set
- **Google Fonts**: Inter, La Belle Aurore
- **Custom Fonts**: MonoLisa monospace font

### Code Quality
- **ESLint**: Next.js core web vitals configuration
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript Strict Mode**: Enhanced type checking

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT STRUCTURE -->

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── providers.tsx      # PostHog analytics provider
│   ├── projects/          # Project showcase pages
│   ├── robots.ts          # SEO robots configuration
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/            # React components
│   ├── Hero/             # Hero section
│   ├── Timeline/         # Experience timeline
│   ├── Projects/         # Project showcase
│   ├── Books/            # Book recommendations
│   ├── Gear/             # Equipment section
│   ├── about-me/         # About section
│   ├── ui/               # Reusable UI components
│   ├── magicui/          # Magic UI components
│   └── footer.tsx        # Site footer
├── lib/                   # Utilities and configurations
│   ├── context/          # React context providers
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

This portfolio serves as:

- **Professional Showcase**: Demonstrating WordPress development expertise
- **Case Study Platform**: Detailed project walkthroughs
- **Contact Point**: For potential clients and collaborators
- **Learning Resource**: Modern Next.js and React patterns

Feel free to:
- Fork for inspiration
- Use as a template (attribution appreciated)
- Study the code and implementation patterns
- Report issues or suggest improvements

<!-- LICENSE -->

## License

Distributed under the GPL License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- **Twitter/X**: [@KelvinPerezDev](https://twitter.com/KelvinPerezDev)
- **GitHub**: [@TheKelvinPerez](https://github.com/TheKelvinPerez)
- **Website**: [kelvinperez.com](https://kelvinperez.com)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

### Documentation & Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### UI Libraries & Tools
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Aceternity UI](https://ui.aceternity.com/) - Modern UI components
- [Lucide Icons](https://lucide.dev/) - Icon library
- [PostHog](https://posthog.com/) - Product analytics
- [Bun](https://bun.sh/) - JavaScript runtime

### Inspiration & Community
- The Next.js and React communities
- WordPress developer community
- Open source contributors worldwide

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Farewell

Wholeness and balanced vibrations 🙌

Built with ❤️ by [Kelvin Perez](https://kelvinperez.com)
