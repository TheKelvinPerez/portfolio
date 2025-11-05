# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun run dev` (uses Bun runtime)
- **Build production**: `bun run build` 
- **Start production**: `bun run start`
- **Add shadcn/ui components**: `bun run scn:add [component-name]`
- **Add Aceternity UI components**: `bun run ace:add [component-name]`
- **Install dependencies**: `bun install`
- **Clean and reinstall**: `bun run clean` (removes node_modules, .next, and reinstalls)

## Code Quality

- **Formatting**: Prettier with Tailwind plugin (configured in .prettierrc)
- **Linting**: ESLint with Next.js core web vitals config
- **No dedicated test framework configured**

## Environment Variables Required

```bash
NEXT_PUBLIC_POSTHOG_KEY=""
NEXT_PUBLIC_POSTHOG_HOST=""
```

## Architecture Overview

This is a modern portfolio website showcasing WordPress development expertise, built with Next.js 15, TypeScript, and React 19. The site features:

- **Framework**: Next.js 15 App Router with Server Components
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: GSAP (primary) and Framer Motion for rich interactive animations
- **Analytics**: PostHog for user behavior tracking and analytics
- **Content**: Static project showcase, timeline, books, gear, and contact form

## Key Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `projects/` - Project showcase pages with dynamic routing
  - `providers.tsx` - PostHog analytics provider setup
  - `layout.tsx` - Root layout with theme provider and global styles
  - `page.tsx` - Homepage with all main sections
- `components/` - Reusable React components organized by feature
  - `Hero/` - Hero section with main introduction
  - `Timeline/` - Professional experience timeline
  - `Projects/` - Project showcase with static data
  - `Books/` - Book recommendations section
  - `Gear/` - Equipment and tools showcase
  - `Home/` - FAQ and other homepage sections
  - `about-me/` - About section components
  - `ui/` - Reusable UI components (forms, call-to-action, effects)
  - `magicui/` - Magic UI components library
  - `footer.tsx` - Site footer
- `lib/` - Utility functions and configurations
  - `context/` - React context providers (LoadingContext)
  - `utils.ts` - Utility functions

## Code Style Guidelines (from .cursorrules)

- **TypeScript**: Use TypeScript for all code; prefer interfaces over types, avoid enums (use maps instead)
- **Programming Style**: Use functional and declarative programming patterns; avoid classes
- **React Patterns**: Prefer React Server Components; minimize 'use client', useEffect, and setState
- **Components**: Use Shadcn UI, Radix, and Tailwind for components; wrap client components in Suspense
- **Design**: Mobile-first responsive design approach
- **Naming**: Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- **File Structure**: exported component, subcomponents, helpers, static content, types
- **Directories**: Use lowercase with dashes (e.g., auth-wizard)
- **Performance**: Optimize Web Vitals (LCP, CLS, FID); use dynamic loading for non-critical components

## Package Management

- **Runtime**: Uses Bun as the JavaScript runtime and package manager
- **Package Manager**: Configured to use pnpm@9.15.4 as fallback package manager
- **Dependencies**: Key libraries include GSAP, Framer Motion, PostHog, and Tailwind CSS

## Animation Libraries

- **GSAP**: Primary animation library (@gsap/react for React integration)
- **Framer Motion**: Secondary animation library for React components
- **Canvas Confetti**: For celebration animations

## Testing

No test framework is currently configured in this project.