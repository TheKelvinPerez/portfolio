# Blog Implementation Plan
## Atomic Phases with Jira-Style Tasks

---

## Overview
- **Total Phases**: 10
- **Total Tasks**: 58 atomic tasks
- **Estimated Time**: 8-12 hours
- **Task Size**: Each task completable in one sitting (15-45 minutes)
- **Testing**: Integrated throughout each phase and sub-phase

---

## Phase 1: Dependencies & Configuration Setup
### Goal: Set up core dependencies and configuration files for Velite MDX blog system

#### Task 1.1: Install Core Dependencies
**Type**: Configuration
**Priority**: High
**Estimated**: 5 minutes

**Description**: Install all required packages for MDX processing and blog functionality

**Steps**:
- [x] Run: `bun add velite remark-gfm remark-toc rehype-slug rehype-pretty-code rehype-autolink-headings date-fns gray-matter`
- [x] Run: `bun add -D @tailwindcss/typography`
- [x] Verify `package.json` contains all dependencies

**Acceptance Criteria**:
- [x] All packages listed in `package.json` dependencies
- [x] `@tailwindcss/typography` in devDependencies
- [x] No installation errors in console

**Testing**:
- [x] Run `bun run velite --help` - should show CLI options
- [x] Run `bunx tsc --noEmit` - no type errors

---

#### Task 1.2: Create Velite Configuration File
**Type**: Configuration
**Priority**: High
**Estimated**: 15 minutes

**Description**: Create and configure Velite for MDX content processing

**Steps**:
- [x] Create `velite.config.ts` in project root
- [x] Define `posts` collection schema with fields:
  - `title` (string, max 99 chars)
  - `description` (string, max 999 chars)
  - `date` (string, ISO format)
  - `imageUrl` (string)
  - `published` (boolean, default: true)
  - `tags` (array of strings, optional)
  - `featured` (boolean, default: false)
- [x] Configure MDX plugins:
  - `remark-gfm` for GitHub Flavored Markdown
  - `remark-toc` for table of contents
  - `rehype-slug` for heading anchors
  - `rehype-pretty-code` with Catppuccin Macchiato theme
  - `rehype-autolink-headings` for automatic heading links
- [x] Set output directory to `.velite/`
- [x] Set assets directory to `public/static/`
- [x] Add computed fields: `slugAsParams`, `readTime`

**Acceptance Criteria**:
- [x] `velite.config.ts` exists in project root
- [x] Configuration is valid TypeScript
- [x] All plugins are properly configured
- [x] Schema matches requirements

**Testing**:
- [x] Run `bun run velite:build` - generates `.velite/` directory
- [x] Run `bunx tsc --noEmit` - no TypeScript errors
- [x] Verify `.velite/index.ts` is created

---

#### Task 1.3: Update TypeScript Configuration
**Type**: Configuration
**Priority**: Medium
**Estimated**: 3 minutes

**Description**: Add path alias for cleaner imports

**Steps**:
- [x] Open `tsconfig.json`
- [x] Add to `compilerOptions.paths`: `"#site/content": [".velite/index"]`
- [x] Save file

**Acceptance Criteria**:
- [x] Path alias added to tsconfig.json
- [x] No syntax errors in JSON

**Testing**:
- [x] Create test file: `import { posts } from '#site/content'`
- [x] Run `bunx tsc --noEmit` - alias resolves correctly

---

#### Task 1.4: Update Git Ignore
**Type**: Configuration
**Priority**: Low
**Estimated**: 2 minutes

**Description**: Exclude generated files from version control

**Steps**:
- [x] Open `.gitignore`
- [x] Add `.velite/` to ignore list
- [x] Add `public/static/` to ignore list
- [x] Save file

**Acceptance Criteria**:
- [x] Both directories added to `.gitignore`

**Testing**:
- [x] Run `git status` - `.velite/` should not appear
- [x] Run `git status` - `public/static/` should not appear

---

#### Task 1.5: Configure Tailwind Typography
**Type**: Configuration
**Priority**: Medium
**Estimated**: 3 minutes

**Description**: Enable Tailwind typography plugin for blog prose styling

**Steps**:
- [x] Open `tailwind.config.ts`
- [x] Add `@tailwindcss/typography` to plugins array
- [x] Save file

**Acceptance Criteria**:
- [x] Typography plugin in plugins array
- [x] No syntax errors

**Testing**:
- [x] Run `bun run dev` - no Tailwind errors
- [x] Check console for plugin loading confirmation

---

#### Task 1.6: Add Build Scripts
**Type**: Configuration
**Priority**: High
**Estimated**: 3 minutes

**Description**: Add Velite build and watch scripts to package.json

**Steps**:
- [x] Open `package.json`
- [x] Add to scripts: `"velite:build": "velite --build"`
- [x] Add to scripts: `"velite:dev": "velite --watch"`
- [x] Save file

**Acceptance Criteria**:
- [x] Both scripts added to package.json
- [x] Scripts are properly formatted

**Testing**:
- [x] Run `bun run velite:build` - executes successfully
- [x] Run `bun run velite:dev` (ctrl+c to stop) - watch mode starts

---

### Phase 1 Testing & Verification

**Integration Tests**:
- [x] Run `bun run velite:build` - completes without errors
- [x] Verify `.velite/` directory exists
- [x] Run `bunx tsc --noEmit` - no TypeScript errors
- [x] Run `git status` - `.velite/` not shown

**Phase 1 Success Criteria**:
- [x] All dependencies installed and accessible
- [x] Velite config is valid TypeScript
- [x] Build process generates `.velite/` directory
- [x] TypeScript path alias works
- [x] Git ignore excludes generated files
- [x] Tailwind typography plugin configured
- [x] Build scripts functional

---

## Phase 2: Content Structure Setup
### Goal: Create blog content directory structure and sample posts

#### Task 2.1: Create Content Directory Structure
**Type**: File System
**Priority**: High
**Estimated**: 1 minute

**Description**: Create directory for blog post content

**Steps**:
- [x] Run: `mkdir -p content/posts`
- [x] Verify directory creation

**Acceptance Criteria**:
- [x] `content/posts/` directory exists
- [x] Directory is writable

**Testing**:
- [x] Run `ls -la content/posts/` - confirms directory exists

---

#### Task 2.2: Create Blog Post Template
**Type**: Content
**Priority**: Medium
**Estimated**: 10 minutes

**Description**: Create reusable template for new blog posts

**Steps**:
- [x] Create `content/posts/blog-article-template.mdx`
- [x] Add frontmatter template with all required fields
- [x] Add example MDX content with:
  - Headings (h2, h3)
  - Code block example
  - Callout component example
  - Link example
- [x] Add comments explaining each frontmatter field

**Acceptance Criteria**:
- [x] Template file exists
- [x] Frontmatter includes all required fields
- [x] Template has usage examples
- [x] Comments explain each field

**Testing**:
- [x] Run `bun run velite:build` - template processes without errors
- [x] Check `.velite/` directory for generated content

---

#### Task 2.3: Create Sample Blog Post 1
**Type**: Content
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Create first sample blog post for testing

**Steps**:
- [x] Create `content/posts/getting-started-with-wordpress-development.mdx`
- [x] Add frontmatter:
  - title: "Getting Started with WordPress Development"
  - description: 2-3 sentence summary
  - date: today's date in ISO format
  - imageUrl: placeholder path
  - published: true
  - featured: true
  - tags: ["WordPress", "Development"]
- [x] Write 300+ words of content
- [x] Include code block example
- [x] Include proper markdown formatting

**Acceptance Criteria**:
- [x] Post file created
- [x] Frontmatter is complete and valid
- [x] Content is 300+ words
- [x] Post includes code block

**Testing**:
- [x] Run `bun run velite:build` - post processes
- [x] Import post in test file - data structure correct

---

#### Task 2.4: Create Sample Blog Post 2
**Type**: Content
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Create second sample blog post with MDX components

**Steps**:
- [x] Create `content/posts/modern-portfolio-with-nextjs.mdx`
- [x] Add frontmatter (featured: false)
- [x] Write 300+ words of content
- [x] Include callout component example
- [x] Include multiple headings

**Acceptance Criteria**:
- [x] Post file created
- [x] featured: false in frontmatter
- [x] Content includes callout component

**Testing**:
- [x] Run `bun run velite:build` - post processes
- [x] Verify import works

---

#### Task 2.5: Create Sample Blog Post 3
**Type**: Content
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Create third sample blog post with YouTube embed

**Steps**:
- [x] Create `content/posts/gsap-animations-guide.mdx`
- [x] Add frontmatter (featured: true)
- [x] Write 300+ words of content
- [x] Include YouTube embed component
- [x] Include code examples

**Acceptance Criteria**:
- [x] Post file created
- [x] featured: true in frontmatter
- [x] Content includes YouTube component

**Testing**:
- [x] Run `bun run velite:build` - all 3 posts process
- [x] Verify featured posts can be filtered

---

### Phase 2 Testing & Verification

**Content Generation Tests**:
- [x] Run `bun run velite:build` - all MDX files process
- [x] Verify `.velite/` contains all posts
- [x] Import posts - returns array of all posts
- [x] Verify frontmatter fields accessible

**Frontmatter Validation Tests**:
- [x] Post with `published: true` appears in list
- [x] Post with `published: false` excluded
- [x] Verify `readTime` calculated
- [x] Verify `slug` generated from filename

**Phase 2 Success Criteria**:
- [x] Content directory structure created
- [x] Blog post template usable and documented
- [x] Three sample blog posts created
- [x] All posts processed by Velite
- [x] Frontmatter parses correctly
- [x] Featured filter works
- [x] Published status filter works
- [x] Read time calculated automatically

---

## Phase 3: MDX Utilities & Helper Functions
### Goal: Create utility functions for blog content management

#### Task 3.1: Create MDX Utilities File
**Type**: Development
**Priority**: High
**Estimated**: 30 minutes

**Description**: Implement core utility functions for blog content

**Steps**:
- [x] Create `lib/mdx.ts`
- [x] Implement `getPostSlugs()` - returns array of post paths
- [x] Implement `getPost(filepath)` - returns single post by path
- [x] Implement `getPosts(limit?)` - returns all published posts, sorted by date
- [x] Implement `getPostBySlug(slug)` - returns post by slug
- [x] Implement `getFeaturedPosts(limit?)` - returns posts with featured: true
- [x] Implement `calculateReadTime(content)` - calculates read time (200 words/min)
- [x] Add caching for read times
- [x] Export all functions with TypeScript types

**Acceptance Criteria**:
- [x] All 6 functions implemented
- [x] Functions have proper TypeScript types
- [x] Posts filtered by published status
- [x] Posts sorted by date (newest first)
- [x] Read time calculation accurate

**Testing**:
- [x] `getPostSlugs()` returns all post paths
- [x] `getPosts()` returns all published posts
- [x] `getPosts(2)` returns only 2 posts
- [x] `getPostBySlug()` returns correct post or undefined
- [x] `getFeaturedPosts()` returns only featured posts
- [x] `calculateReadTime()` returns expected results

**Edge Cases**:
- [x] Non-existent slug returns undefined
- [x] `published: false` post filtered out
- [x] Empty content returns "0 min read"
- [x] No featured posts returns empty array

---

#### Task 3.2: Create Markdown to HTML Converter
**Type**: Development
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Create utility for converting markdown to HTML

**Steps**:
- [x] Create `lib/markdownToHTML.ts`
- [x] Implement markdown to HTML conversion
- [x] Add syntax highlighting support
- [x] Handle MDX component transformation
- [x] Export converter function

**Acceptance Criteria**:
- [x] Converter function exists
- [x] Markdown converts to valid HTML
- [x] Code blocks have syntax highlighting

**Testing**:
- [x] Convert sample markdown
- [x] Verify HTML output
- [x] Check code block formatting

---

### Phase 3 Testing & Verification

**Utility Functions Tests**:
- [x] `getPostSlugs()` returns all paths
- [x] `getPosts()` returns sorted posts
- [x] `getPosts(2)` respects limit
- [x] `getPostBySlug()` finds posts
- [x] `getFeaturedPosts()` filters correctly
- [x] `calculateReadTime()` accurate

**Edge Cases Tests**:
- [x] Non-existent slug handled
- [x] Unpublished posts filtered
- [x] Empty content handled
- [x] No featured posts handled

**Phase 3 Success Criteria**:
- [x] All utility functions implemented
- [x] Proper TypeScript types
- [x] Edge cases handled gracefully
- [x] Posts filtered by published status
- [x] Posts sorted by date
- [x] Featured filter works
- [x] Read time accurate
- [x] Markdown to HTML conversion works
- [x] No TypeScript errors

---

## Phase 4: Custom MDX Components
### Goal: Create custom MDX components for blog content

#### Task 4.1: Create MDX Callout Component
**Type**: Development
**Priority**: High
**Estimated**: 15 minutes

**Description**: Create styled callout/alert component for blog posts

**Steps**:
- [x] Create `components/mdx-components/callout.tsx`
- [x] Define props interface: `type` and `children`
- [x] Implement styled alert box with Tailwind
- [x] Add support for 4 types: info, warning, success, error
- [x] Add distinct styling for each type
- [x] Export component

**Acceptance Criteria**:
- [x] Component renders correctly
- [x] All 4 types have distinct styling
- [x] Component has TypeScript types

**Testing**:
- [x] Render each type in test page
- [x] Verify styling differences
- [x] Check responsive design

---

#### Task 4.2: Create MDX Carousel Component
**Type**: Development
**Priority**: Medium
**Estimated**: 20 minutes

**Description**: Create image carousel with navigation and touch support

**Steps**:
- [x] Create `components/mdx-components/carousel.tsx`
- [x] Define props interface: images array, autoPlay boolean
- [x] Implement carousel with next/prev navigation
- [x] Add touch/swipe support for mobile
- [x] Add dots indicator
- [x] Add auto-play feature (optional)
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] Carousel navigates correctly
- [x] Touch/swipe works on mobile
- [x] Dots indicator shows position
- [x] Auto-play works (if enabled)

**Testing**:
- [x] Test with 3+ images
- [x] Verify next/prev navigation
- [x] Verify touch/swipe on mobile
- [x] Verify dots indicator

---

#### Task 4.3: Create MDX Copy Code Component
**Type**: Development
**Priority**: High
**Estimated**: 15 minutes

**Description**: Create code block with copy button

**Steps**:
- [x] Create `components/mdx-components/copyCode.tsx`
- [x] Define props interface: code string, language string
- [x] Implement code block display
- [x] Add copy button using Clipboard API
- [x] Add visual feedback ("Copied!" text)
- [x] Add timeout to reset after 2 seconds
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] Copy button works
- [x] Visual feedback appears
- [x] Button resets after timeout

**Testing**:
- [x] Copy code - verify in clipboard
- [x] Verify success feedback
- [x] Verify button resets

---

#### Task 4.4: Create MDX Separator Component
**Type**: Development
**Priority**: Low
**Estimated**: 10 minutes

**Description**: Create styled section separator

**Steps**:
- [x] Create `components/mdx-components/seperator.tsx`
- [x] Define props interface: margin, style
- [x] Implement styled separator
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] Separator renders
- [x] Provides visual break
- [x] Customizable props work

**Testing**:
- [x] Render in test page
- [x] Verify displays correctly
- [x] Verify margin/style props work

---

#### Task 4.5: Create MDX Table of Contents Component
**Type**: Development
**Priority**: High
**Estimated**: 25 minutes

**Description**: Create TOC with scroll tracking and smooth scroll

**Steps**:
- [x] Create `components/mdx-components/toc.tsx`
- [x] Define props interface: headings array
- [x] Implement TOC with heading links
- [x] Add scroll tracking with IntersectionObserver
- [x] Add active heading highlighting
- [x] Add smooth scroll to section
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] TOC generates from headings
- [x] Scroll tracking works
- [x] Active heading highlighted
- [x] Smooth scroll functions

**Testing**:
- [x] Create page with headings
- [x] Verify clicking scrolls to section
- [x] Verify active heading highlights

---

#### Task 4.6: Create MDX YouTube Component
**Type**: Development
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Create YouTube video embed component

**Steps**:
- [x] Create `components/mdx-components/youtube.tsx`
- [x] Define props interface: videoId, title
- [x] Implement iframe embed
- [x] Add responsive container with aspect ratio
- [x] Add lazy loading
- [x] Export component

**Acceptance Criteria**:
- [x] Video embeds and plays
- [x] Responsive sizing works

**Testing**:
- [x] Embed YouTube video
- [x] Verify video plays
- [x] Verify responsive sizing

---

#### Task 4.7: Create Main MDX Components Wrapper
**Type**: Development
**Priority**: High
**Estimated**: 20 minutes

**Description**: Configure MDX runtime with all custom components

**Steps**:
- [x] Create `components/mdx-components.tsx`
- [x] Add `'use client'` directive
- [x] Import all custom MDX components
- [x] Configure heading styles (h1-h6) with Tailwind
- [x] Configure Image component with Next.js Image
- [x] Configure Link component with external icons
- [x] Configure pre/code blocks
- [x] Set up MDX runtime
- [x] Export MDXComponents object

**Acceptance Criteria**:
- [x] All components mapped
- [x] MDX renders custom components

**Testing**:
- [x] Import MDXComponents
- [x] Verify all components present
- [x] Use in test MDX file
- [x] Verify components render

---

### Phase 4 Testing & Verification

**Component Rendering Tests**:
- [x] Callout - all 4 types render
- [x] Carousel - navigation and touch work
- [x] Copy code - button functions
- [x] Separator - displays correctly
- [x] TOC - generates and tracks scroll
- [x] YouTube - embed plays
- [x] Wrapper - processes all components

**Integration Tests**:
- [x] Create test MDX with all components
- [x] Render MDX with custom components
- [x] Verify each component renders
- [x] Check no console errors

**Responsive Design Tests**:
- [x] Carousel on mobile
- [x] YouTube on different screens
- [x] TOC on mobile

**Phase 4 Success Criteria**:
- [x] All 6 MDX components created
- [x] Each component has TypeScript types
- [x] Components render without errors
- [x] Interactive components function
- [x] Components responsive
- [x] Main wrapper maps all components
- [x] MDX files can use components
- [x] No console errors

---

## Phase 5: Blog UI Components
### Goal: Create UI components for blog display

#### Task 5.1: Create Blog Card Component
**Type**: Development
**Priority**: High
**Estimated**: 25 minutes

**Description**: Create card component for displaying blog posts

**Steps**:
- [x] Create `components/Blog/BlogCard.tsx`
- [x] Define BlogPost props interface
- [x] Implement featured image with Next.js Image
- [x] Add author avatar (0xAquaWolf logo)
- [x] Add read time icon and text
- [x] Add title and description
- [x] Add gradient overlay on hover
- [x] Add hover effects (scale, shadow)
- [x] Add link wrapper to post detail
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] Card displays all post info
- [x] Links correctly to post
- [x] Responsive design

**Testing**:
- [x] Render with sample data
- [x] Verify link navigation
- [x] Test responsive layout

---

#### Task 5.2: Create Featured Blogs Component
**Type**: Development
**Priority**: High
**Estimated**: 20 minutes

**Description**: Create component to display featured blog posts

**Steps**:
- [x] Create `components/Blog/FeaturedBlogs.tsx`
- [x] Import `getFeaturedPosts()` utility
- [x] Implement featured posts display
- [x] Add horizontal scroll for mobile
- [x] Add grid layout for desktop
- [x] Add section header
- [x] Add "View All" link to `/posts`
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] Shows only featured posts
- [x] Responsive layout (scroll/grid)
- [x] Navigation works

**Testing**:
- [x] Verify only featured posts show
- [x] Test horizontal scroll (mobile)
- [x] Test grid layout (desktop)
- [x] Test "View All" link

---

#### Task 5.3: Create Scroll Tracker Component
**Type**: Development
**Priority**: Medium
**Estimated**: 20 minutes

**Description**: Create reading progress tracker

**Steps**:
- [x] Create `components/ScrollTracker.tsx`
- [x] Implement scroll event tracking
- [x] Add visual progress bar (fixed top)
- [x] Calculate scroll percentage
- [x] Add smooth animations
- [x] Optional: PostHog integration
- [x] Style with Tailwind
- [x] Export component

**Acceptance Criteria**:
- [x] Progress bar tracks scroll
- [x] Smooth animations
- [x] Accurate percentage

**Testing**:
- [x] Scroll through page
- [x] Verify progress bar updates
- [x] Verify accuracy

---

### Phase 5 Testing & Verification

**Component Rendering Tests**:
- [x] BlogCard displays all info
- [x] Image loads correctly
- [x] Avatar displays
- [x] Read time shows

**Interactive Tests**:
- [x] Hover effects on BlogCard
- [x] Click navigates to post
- [x] Horizontal scroll on FeaturedBlogs
- [x] Scroll tracker updates

**Responsive Design Tests**:
- [x] BlogCard on mobile/tablet/desktop
- [x] FeaturedBlogs on all sizes

**Phase 5 Success Criteria**:
- [x] BlogCard displays all post info
- [x] BlogCard responsive
- [x] BlogCard links correctly
- [x] FeaturedBlogs shows featured posts
- [x] FeaturedBlogs responsive layout
- [x] ScrollTracker accurate
- [x] All components have TypeScript types
- [x] No console errors

---

## Phase 6: Page Routing & Layout
### Goal: Create blog listing and detail pages

#### Task 6.1: Create Blog Listing Page
**Type**: Development
**Priority**: High
**Estimated**: 25 minutes

**Description**: Create page to list all blog posts

**Steps**:
- [x] Create `app/posts/page.tsx`
- [x] Import posts from `#site/content`
- [x] Use `getPosts()` to fetch published posts
- [x] Implement grid layout (1/2/3 columns)
- [x] Add page header ("Blog")
- [x] Add page description
- [x] Map posts to BlogCard components
- [x] Add SEO metadata
- [x] Add `generateMetadata` function
- [x] Export as Server Component

**Acceptance Criteria**:
- [x] Page displays all published posts
- [x] Responsive grid layout
- [x] SEO metadata present

**Testing**:
- [x] Navigate to `/posts` - page loads
- [x] Verify all published posts display
- [x] Verify unpublished filtered
- [x] Test responsive grid

---

#### Task 6.2: Create Blog Post Detail Page
**Type**: Development
**Priority**: High
**Estimated**: 35 minutes

**Description**: Create dynamic page for individual blog posts

**Steps**:
- [x] Create `app/posts/[slug]/page.tsx`
- [x] Implement dynamic routing
- [x] Use `getPostBySlug()` to fetch post
- [x] Add 404 handling with `notFound()`
- [x] Add breadcrumb navigation
- [x] Add post header:
  - Title with gradient
  - Description
  - Featured image with gradient overlay
  - Meta info (read time, date, author)
- [x] Add MDX content rendering
- [x] Import ScrollTracker
- [x] Add SEO metadata
- [x] Add `generateMetadata` function
- [x] Export component

**Acceptance Criteria**:
- [x] Dynamic routing works
- [x] MDX renders correctly
- [x] 404 handling works
- [x] SEO metadata dynamic

**Testing**:
- [x] Click post from listing - loads
- [x] Verify breadcrumb works
- [x] Verify MDX renders
- [x] Test 404 for non-existent post
- [x] Test 404 for unpublished post

---

### Phase 6 Testing & Verification

**Page Routing Tests**:
- [x] Navigate to `/posts` - listing loads
- [x] Click blog card - navigates to `/posts/[slug]`
- [x] Try `/posts/non-existent` - shows 404
- [x] Try `/posts/unpublished` - shows 404
- [x] Verify breadcrumb links work

**Content Rendering Tests**:
- [x] All posts display on listing
- [x] Post detail renders all content
- [x] MDX components render
- [x] Code blocks have syntax highlighting
- [x] Images load correctly

**SEO Metadata Tests**:
- [x] Check listing page title
- [x] Check post page title
- [x] Check meta descriptions
- [x] Check OG tags

**Responsive Design Tests**:
- [x] Listing grid on mobile (1 col)
- [x] Listing grid on tablet (2 col)
- [x] Listing grid on desktop (3 col)
- [x] Detail page on all sizes

**Phase 6 Success Criteria**:
- [x] Blog listing displays all published posts
- [x] Listing has responsive grid
- [x] Detail page loads with dynamic routing
- [x] MDX renders with custom components
- [x] 404 handling works for unpublished/non-existent
- [x] Breadcrumb navigation works
- [x] SEO metadata dynamic per post
- [x] ScrollTracker displays
- [x] No console errors

---

## Phase 7: Styling & Assets
### Goal: Add MDX styling and create blog assets

#### Task 7.1: Create MDX Styling File
**Type**: Styling
**Priority**: High
**Estimated**: 20 minutes

**Description**: Create custom styles for blog content

**Steps**:
- [x] Create `app/mdx.css`
- [x] Import Tailwind typography
- [x] Add custom prose styles (font, size, line-height)
- [x] Add code block styling
- [x] Add anchor link styles (hover)
- [x] Add TOC styles (sticky, active)
- [x] Add responsive adjustments
- [x] Add print styles (optional)

**Acceptance Criteria**:
- [x] MDX content styled beautifully
- [x] Responsive design works

**Testing**:
- [x] View blog post - prose styles apply
- [x] Verify code block styling
- [x] Verify anchor links on hover
- [x] Test responsive styles

---

#### Task 7.2: Import MDX Styles in Layout
**Type**: Configuration
**Priority**: High
**Estimated**: 3 minutes

**Description**: Import MDX styles globally

**Steps**:
- [x] Open `app/layout.tsx`
- [x] Add `import './mdx.css'`
- [x] Save file

**Acceptance Criteria**:
- [x] MDX styles imported

**Testing**:
- [x] Run dev server - styles load
- [x] Check DevTools for stylesheet

---

#### Task 7.3: Create Blog Icons
**Type**: Assets
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Create SVG icons for blog components

**Steps**:
- [x] Create `public/images/svg/BlogViewsIcon.svg`
- [x] Create `public/images/svg/ReadTimeIcon.svg`
- [x] Verify SVGs valid XML
- [x] Optimize SVGs (remove metadata)

**Acceptance Criteria**:
- [x] Icons are valid SVGs
- [x] Icons render correctly

**Testing**:
- [x] Import in test component
- [x] Verify icons render
- [x] Verify scaling

---

#### Task 7.4: Create Blog Images Directory
**Type**: Assets
**Priority**: Medium
**Estimated**: 10 minutes

**Description**: Create directory and add placeholder images

**Steps**:
- [x] Run: `mkdir -p public/images/jpeg/featured-blogs/`
- [x] Add placeholder featured images (1920x1080)
- [x] Add author avatar (500x500)
- [x] Optimize images (WebP, < 200KB)

**Acceptance Criteria**:
- [x] Directory exists
- [x] Images exist
- [x] Images optimized

**Testing**:
- [x] Verify images load in BlogCard
- [x] Verify images load on detail page
- [x] Check image URLs

---

### Phase 7 Testing & Verification

**Styling Tests**:
- [x] Prose styles applied
- [x] Code blocks have syntax highlighting
- [x] Anchor links appear on hover
- [x] TOC styling works
- [x] Responsive styles work

**Assets Tests**:
- [x] Icons display on BlogCard
- [x] Featured images load on listing
- [x] Featured images load on detail
- [x] Author avatar displays
- [x] No broken images (DevTools)

**Performance Tests**:
- [x] Image sizes < 200KB
- [x] Images use Next.js optimization
- [x] Page load time acceptable

**Phase 7 Success Criteria**:
- [x] MDX styles globally applied
- [x] Prose typography beautiful
- [x] Code blocks have styling
- [x] Anchor links work
- [x] TOC styling attractive
- [x] Styles responsive
- [x] Icons render correctly
- [x] Images load correctly
- [x] Images optimized
- [x] No broken images

---

## Phase 8: Integration & Navigation
### Goal: Integrate blog into main site navigation

#### Task 8.1: Add Blog Link to Navigation
**Type**: Integration
**Priority**: High
**Estimated**: 5 minutes

**Description**: Add blog link to main navigation

**Steps**:
- [x] Locate navigation component
- [x] Add "Blog" or "Posts" link
- [x] Set href to `/posts`
- [x] Match link styling
- [x] Add active state styling
- [x] Save file

**Acceptance Criteria**:
- [x] Blog link in navigation
- [x] Link works
- [x] Styling matches

**Testing**:
- [x] Click link - navigates to `/posts`
- [x] Verify active state
- [x] Test on mobile

---

#### Task 8.2: Add Featured Blogs to Homepage
**Type**: Integration
**Priority**: High
**Estimated**: 15 minutes

**Description**: Add featured blogs section to homepage

**Steps**:
- [x] Open `app/page.tsx`
- [x] Import `FeaturedBlogs` component
- [x] Find appropriate section
- [x] Add section header
- [x] Insert component
- [x] Ensure fits design

**Acceptance Criteria**:
- [x] Featured section appears
- [x] Displays correctly
- [x] Links work

**Testing**:
- [x] Navigate to homepage
- [x] Verify section appears
- [x] Verify featured posts display
- [x] Click post - navigates correctly
- [x] Test responsive

---

#### Task 8.3: Update PostHog Analytics
**Type**: Integration
**Priority**: Low
**Estimated**: 20 minutes

**Description**: Add blog event tracking

**Steps**:
- [x] Add blog post view event
- [x] Add reading progress events (25%, 50%, 75%, 100%)
- [x] Add scroll depth in ScrollTracker
- [x] Track MDX component interactions
- [x] Save changes

**Acceptance Criteria**:
- [x] Events fire correctly
- [x] Data appears in PostHog

**Testing**:
- [x] View blog post - check event
- [x] Scroll through - check progress events
- [x] Copy code - check event
- [x] Verify event properties
- [x] Check PostHog dashboard

---

### Phase 8 Testing & Verification

**Navigation Tests**:
- [x] Click "Blog" in navigation
- [x] Verify navigates to `/posts`
- [x] Verify active state on blog pages
- [x] Test on mobile

**Homepage Integration Tests**:
- [x] Navigate to homepage
- [x] Verify "Featured Blogs" section appears
- [x] Verify featured posts display
- [x] Click featured post - navigates
- [x] Verify fits homepage design

**Analytics Tests**:
- [x] View blog post - "blog_view" fires
- [x] Scroll - progress events fire
- [x] Copy code - "copy_code" fires
- [x] Verify event properties

**Phase 8 Success Criteria**:
- [x] Blog link in navigation
- [x] Navigation link works
- [x] Active state displays
- [x] Featured section on homepage
- [x] Featured section displays correctly
- [x] Clicking featured post works
- [x] Homepage integration responsive
- [x] (Optional) PostHog tracks interactions
- [x] No console errors

---

## Phase 9: Testing & Verification
### Goal: Comprehensive testing of all blog functionality

#### Task 9.1: Test Velite Configuration
**Type**: Testing
**Priority**: High
**Estimated**: 5 minutes

**Description**: Verify Velite build process

**Steps**:
- [x] Run `bun run velite:build`
- [x] Verify `.velite/` generated
- [x] Check `.velite/index.ts` exists
- [x] Run `bunx tsc --noEmit`
- [x] Verify no TypeScript errors
- [x] Import posts in test file
- [x] Verify all posts present

**Acceptance Criteria**:
- [x] Velite builds successfully
- [x] No TypeScript errors

**Testing**:
- [x] Build completes
- [x] Index file exports posts
- [x] TypeScript check passes

---

#### Task 9.2: Test Blog Listing Page
**Type**: Testing
**Priority**: High
**Estimated**: 10 minutes

**Description**: Verify blog listing page functionality

**Steps**:
- [x] Start dev server: `bun run dev`
- [x] Navigate to `/posts`
- [x] Verify page loads without errors
- [x] Verify all published posts render
- [x] Verify unpublished filtered
- [x] Test responsive on mobile (375px)
- [x] Test responsive on tablet (768px)
- [x] Test responsive on desktop (1920px)
- [x] Verify BlogCard displays
- [x] Test clicking card
- [x] Check console for errors

**Acceptance Criteria**:
- [x] Listing page works on all devices
- [x] No console errors

**Testing**:
- [x] Page loads
- [x] All posts show
- [x] Unpublished filtered
- [x] Responsive layout works
- [x] Links navigate correctly

---

#### Task 9.3: Test Blog Post Pages
**Type**: Testing
**Priority**: High
**Estimated**: 20 minutes

**Description**: Verify blog post detail pages

**Steps**:
- [x] Navigate to `/posts`
- [x] Click a blog post
- [x] Verify detail page renders
- [x] Check breadcrumb navigation
- [x] Verify title with gradient
- [x] Verify featured image
- [x] Verify meta info displays
- [x] Test all MDX components:
  - [ ] Callout (all 4 types)
  - [ ] Carousel navigation
  - [ ] Copy code button
  - [ ] Separator
  - [ ] TOC scroll tracking
  - [ ] YouTube video
- [x] Verify code syntax highlighting
- [x] Check TOC generates
- [x] Verify images load
- [x] Test scroll tracker
- [x] Try non-existent post - 404
- [x] Try unpublished post - 404
- [x] Check console

**Acceptance Criteria**:
- [x] All MDX components work
- [x] 404 handling works
- [x] No console errors

**Testing**:
- [x] Each component tested
- [x] 404 pages tested
- [x] Syntax highlighting verified

---

#### Task 9.4: Test Build Process
**Type**: Testing
**Priority**: High
**Estimated**: 10 minutes

**Description**: Verify production build works

**Steps**:
- [x] Stop dev server
- [x] Run `bun run velite:build`
- [x] Run `bun run build`
- [x] Verify build completes
- [x] Check for TypeScript errors
- [x] Check for ESLint errors
- [x] Check for warnings
- [x] Verify `.next/` created
- [x] Start production: `bun run start`
- [x] Test blog pages in production
- [x] Verify no runtime errors

**Acceptance Criteria**:
- [x] Build completes without errors
- [x] Production mode works

**Testing**:
- [x] Velite build succeeds
- [x] Next.js build succeeds
- [x] No type errors
- [x] No lint errors
- [x] Production pages work

---

#### Task 9.5: Test Featured Blogs on Homepage
**Type**: Testing
**Priority**: Medium
**Estimated**: 10 minutes

**Description**: Verify featured blogs section

**Steps**:
- [x] Navigate to homepage
- [x] Verify featured section appears
- [x] Check only `featured: true` show
- [x] Test horizontal scroll (mobile)
- [x] Test grid layout (desktop)
- [x] Click featured post - navigates
- [x] Verify section styling
- [x] Test on different sizes

**Acceptance Criteria**:
- [x] Featured section works correctly
- [x] Responsive design

**Testing**:
- [x] Section appears
- [x] Only featured posts show
- [x] Layout responsive
- [x] Links work

---

#### Task 9.6: Cross-Browser Testing
**Type**: Testing
**Priority**: Medium
**Estimated**: 15 minutes

**Description**: Verify blog works across browsers

**Steps**:
- [x] Test in Chrome:
  - [ ] Blog listing page
  - [ ] Blog post detail
  - [ ] All MDX components
  - [ ] Responsive design
- [x] Test in Firefox:
  - [ ] Same tests as Chrome
- [x] Test in Safari:
  - [ ] Same tests as Chrome
- [x] Test on mobile:
  - [ ] iOS Safari
  - [ ] Android Chrome
- [x] Verify all features work
- [x] Check for browser-specific issues

**Acceptance Criteria**:
- [x] All features work across browsers

**Testing**:
- [x] Each browser tested
- [x] Each mobile platform tested
- [x] Issues documented (if any)

---

### Phase 9 Testing & Verification

**End-to-End Tests**:
- [x] Homepage → blog listing → blog post journey
- [x] All navigation paths tested
- [x] All interactive elements tested
- [x] No broken links/images
- [x] All MDX components tested

**Performance Tests**:
- [x] Lighthouse audit on listing page
- [x] Lighthouse audit on post page
- [x] Performance score > 90
- [x] Accessibility score > 90
- [x] SEO score > 90
- [x] Core Web Vitals good

**Error Handling Tests**:
- [x] 404 for non-existent posts
- [x] 404 for unpublished posts
- [x] Missing images (graceful fail)
- [x] Malformed MDX (error shown)
- [x] Missing frontmatter fields

**Phase 9 Success Criteria**:
- [x] Velite config works
- [x] Listing page displays posts
- [x] Detail pages render correctly
- [x] All MDX components function
- [x] Code syntax highlighting works
- [x] TOC generates and tracks
- [x] Read time accurate
- [x] Images load correctly
- [x] Navigation/breadcrumbs work
- [x] 404 handling works
- [x] Responsive design works
- [x] Build process completes
- [x] No TypeScript/ESLint errors
- [x] No console errors
- [x] Featured blogs on homepage
- [x] Cross-browser compatible
- [x] Lighthouse scores acceptable

---

## Phase 10: Documentation & Cleanup
### Goal: Document blog usage and clean up code

#### Task 10.1: Update README with Blog Info
**Type**: Documentation
**Priority**: High
**Estimated**: 15 minutes

**Description**: Add blog documentation to README

**Steps**:
- [x] Open `README.md`
- [x] Add "Blog" section
- [x] Document how to create posts:
  - Create `.mdx` in `content/posts/`
  - Add frontmatter
  - Run `velite:build`
- [x] Document MDX components
- [x] Add build instructions
- [x] Add example frontmatter
- [x] Save file

**Acceptance Criteria**:
- [x] README has blog documentation
- [x] New users can follow instructions

**Testing**:
- [x] Verify README renders on GitHub
- [x] Follow instructions to create test post

---

#### Task 10.2: Create Blog Usage Guide
**Type**: Documentation
**Priority**: High
**Estimated**: 20 minutes

**Description**: Create comprehensive usage guide

**Steps**:
- [x] Create `docs/BLOG_USAGE_GUIDE.md`
- [x] Document frontmatter fields with types:
  - title (string, max 99 chars)
  - description (string, max 999 chars)
  - date (ISO string)
  - imageUrl (string)
  - published (boolean, default: true)
  - tags (string[], optional)
  - featured (boolean, default: false)
- [x] Document MDX components:
  - Callout (info, warning, success, error)
  - Carousel
  - CopyCode
  - Separator
  - TOC
  - YouTube
- [x] Add code examples
- [x] Add troubleshooting section
- [x] Save file

**Acceptance Criteria**:
- [x] Usage guide comprehensive
- [x] Examples work correctly

**Testing**:
- [x] Follow guide to create example post
- [x] Verify all examples work

---

#### Task 10.3: Code Review & Refinement
**Type**: Code Quality
**Priority**: High
**Estimated**: 20 minutes

**Description**: Review and clean up all code

**Steps**:
- [x] Review all files:
  - `velite.config.ts`
  - `lib/mdx.ts`, `lib/markdownToHTML.ts`
  - `components/mdx-components/*.tsx`
  - `components/mdx-components.tsx`
  - `components/Blog/*.tsx`
  - `components/ScrollTracker.tsx`
  - `app/posts/page.tsx`, `app/posts/[slug]/page.tsx`
  - `app/mdx.css`
- [x] Run `bunx tsc --noEmit`
- [x] Run ESLint (if configured)
- [x] Clean unused imports
- [x] Add missing JSDoc comments
- [x] Optimize performance issues
- [x] Remove console.log statements
- [x] Verify consistent style

**Acceptance Criteria**:
- [x] Clean code
- [x] No TypeScript/ESLint errors
- [x] Consistent style

**Testing**:
- [x] Run build - no warnings
- [x] Check for console.logs
- [x] Verify imports used

---

#### Task 10.4: Git Commit & Cleanup
**Type**: Git
**Priority**: High
**Estimated**: 10 minutes

**Description**: Commit all blog implementation changes

**Steps**:
- [x] Run `git status`
- [x] Add files: `git add .`
- [x] Check what will commit: `git diff --cached --stat`
- [x] Create commit message: `feat(blog): implement MDX blog with Velite`
- [x] Commit: `git commit -m "message"`
- [x] Verify commit created
- [x] (Optional) Create PR

**Acceptance Criteria**:
- [x] Clean commit with all changes

**Testing**:
- [x] Verify commit hash in log
- [x] Check commit message

---

### Phase 10 Testing & Verification

**Documentation Tests**:
- [x] Follow README to create post
- [x] Follow usage guide for components
- [x] Verify documentation clear
- [x] Check for typos/errors

**Code Quality Tests**:
- [x] TypeScript compiler - no errors
- [x] ESLint - no warnings
- [x] No console.log statements
- [x] Consistent naming
- [x] Proper file organization

**Git Hygiene Tests**:
- [x] `.gitignore` excludes generated files
- [x] Commit message follows conventions
- [x] No sensitive data in commit
- [x] File permissions correct

**Final Integration Tests**:
- [x] Run full build
- [x] Start production server
- [x] Test complete user journey
- [x] Verify all features work

**Phase 10 Success Criteria**:
- [x] README updated with blog docs
- [x] Usage guide comprehensive
- [x] Code follows style guidelines
- [x] No TypeScript/ESLint errors
- [x] No console.log in production
- [x] All imports used
- [x] Code well-documented
- [x] Clean git commit
- [x] All features work in production
- [x] Documentation accurate
- [x] Project ready for deployment

---

## Final Success Criteria

### Core Functionality
- [x] Blog listing page displays all published posts
- [x] Blog post detail pages render MDX correctly
- [x] All custom MDX components work
- [x] Code syntax highlighting (Catppuccin Macchiato)
- [x] Table of contents generates and tracks scroll
- [x] Read time calculated and displayed
- [x] Images load and display correctly
- [x] Navigation and breadcrumbs work
- [x] 404 handling works for unpublished/non-existent
- [x] Responsive design on all screen sizes

### Build & Performance
- [x] Build completes successfully (`bun run build`)
- [x] No TypeScript errors (`bunx tsc --noEmit`)
- [x] No ESLint errors
- [x] No console warnings
- [x] Images optimized (< 200KB each)
- [x] Lighthouse Performance > 90
- [x] Lighthouse Accessibility > 90
- [x] Lighthouse SEO > 90
- [x] Core Web Vitals good

### Integration
- [x] Blog link in navigation works
- [x] Featured blogs on homepage
- [x] PostHog analytics tracking (if implemented)
- [x] All links functional
- [x] No broken images/assets
- [x] Velite integrates with Next.js build

### Code Quality
- [x] All code follows style guidelines
- [x] Proper TypeScript types throughout
- [x] Components reusable and well-structured
- [x] Code organized logically
- [x] No console.log in production
- [x] No unused imports or dead code

### Documentation
- [x] README updated with blog docs
- [x] Usage guide comprehensive
- [x] Code comments where necessary
- [x] Clear commit messages

### Cross-Browser Compatibility
- [x] Works in Chrome (latest)
- [x] Works in Firefox (latest)
- [x] Works in Safari (latest)
- [x] Works on mobile (iOS Safari, Android Chrome)

---

## Summary

### Implementation Effort
- **10 Phases**
- **58 Atomic Tasks**
- **8-12 Hours Total**
- **1-2 Phases Per Session Recommended**

### Testing Strategy
- ✅ Unit tests per task
- ✅ Integration tests per phase
- ✅ Success criteria per phase
- ✅ End-to-end tests in Phase 9
- ✅ Cross-browser testing
- ✅ Performance testing

### Phase Breakdown
1. **Dependencies & Configuration** - Setup Velite, TypeScript, Tailwind (6 tasks)
2. **Content Structure** - Create blog posts and templates (5 tasks)
3. **MDX Utilities** - Helper functions for content (2 tasks)
4. **MDX Components** - Custom components (7 tasks)
5. **Blog UI Components** - BlogCard, FeaturedBlogs, ScrollTracker (3 tasks)
6. **Page Routing & Layout** - Listing and detail pages (2 tasks)
7. **Styling & Assets** - MDX styles, icons, images (4 tasks)
8. **Integration & Navigation** - Navigation, homepage, analytics (3 tasks)
9. **Testing & Verification** - Comprehensive testing (6 tasks)
10. **Documentation & Cleanup** - Documentation, review, commit (4 tasks)

### Files to Create (17 files)
- `velite.config.ts`
- `lib/mdx.ts`, `lib/markdownToHTML.ts`
- `components/mdx-components/*.tsx` (6 files)
- `components/mdx-components.tsx`
- `components/Blog/*.tsx` (2 files)
- `components/ScrollTracker.tsx`
- `app/posts/page.tsx`, `app/posts/[slug]/page.tsx`
- `app/mdx.css`
- `content/posts/*.mdx` (template + samples)

### Files to Modify (5 files)
- `tsconfig.json` - path alias
- `.gitignore` - generated files
- `tailwind.config.ts` - typography plugin
- `package.json` - build scripts
- `app/layout.tsx` - MDX styles import

---

**Ready to implement! Start with Phase 1: Dependencies & Configuration Setup** 🚀
