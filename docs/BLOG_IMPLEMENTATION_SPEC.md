# Blog Implementation Specification
## Porting Velite Blog from feature/velite-blog to feature/ai-agents-dev

**Branch:** `feature/ai-agents-dev`
**Source:** `feature/velite-blog`
**Author:** 0xAquaWolf
**Date Created:** 2025-01-14

---

## Overview

This specification outlines the implementation of a MDX-based blog system using Velite, ported from the `feature/velite-blog` branch. The blog will support rich content with code syntax highlighting, automatic read time calculation, table of contents, and various MDX components.

---

## Architecture

### Content Management
- **Framework**: Velite v0.1.1 - Content layer for Next.js
- **Content Format**: MDX (Markdown + JSX)
- **Content Location**: `content/posts/*.mdx`
- **Generated Data**: `.velite/` directory (gitignored)

### Key Dependencies
```json
{
  "velite": "^0.1.1",
  "remark-gfm": "^4.0.0",
  "remark-toc": "^9.0.0",
  "rehype-slug": "latest",
  "rehype-pretty-code": "latest",
  "rehype-autolink-headings": "latest",
  "date-fns": "latest",
  "gray-matter": "latest"
}
```

---

## File Structure

### New Files to Create

```
portfolio/
├── velite.config.ts                 # Velite configuration
├── content/                         # Blog content directory
│   └── posts/                       # MDX blog posts
│       ├── blog-article-template.mdx
│       ├── *.mdx                    # Blog posts
│       └── ...
├── app/
│   ├── posts/
│   │   ├── page.tsx                 # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx             # Individual blog post page
│   └── mdx.css                      # MDX styling
├── components/
│   ├── Blog/
│   │   ├── BlogCard.tsx             # Blog card component
│   │   └── FeaturedBlogs.tsx        # Featured blogs section
│   └── mdx-components.tsx           # Main MDX components wrapper
│   └── mdx-components/              # MDX custom components
│       ├── callout.tsx
│       ├── carousel.tsx
│       ├── copyCode.tsx             # Code block with copy button
│       ├── seperator.tsx
│       ├── toc.tsx                  # Table of contents
│       └── youtube.tsx
├── lib/
│   ├── mdx.ts                       # MDX utilities (from velite-blog)
│   └── markdownToHTML.ts            # Markdown conversion utilities
├── .velite/                         # Generated content (gitignored)
└── public/
    └── images/
        ├── svg/
        │   ├── BlogViewsIcon.svg
        │   └── ReadTimeIcon.svg
        └── jpeg/
            └── featured-blogs/      # Blog featured images
```

---

## Implementation Steps

### Phase 1: Core Setup

1. **Install Dependencies**
   ```bash
   bun add velite remark-gfm remark-toc rehype-slug rehype-pretty-code rehype-autolink-headings date-fns gray-matter
   bun add -D @tailwindcss/typography
   ```

2. **Create Velite Configuration** (`velite.config.ts`)
   - Define `posts` collection schema
   - Configure MDX plugins:
     - `remark-gfm` for GitHub Flavored Markdown
     - `remark-toc` for table of contents
     - `rehype-slug` for heading anchors
     - `rehype-pretty-code` with Catppuccin Macchiato theme
     - `rehype-autolink-headings` for anchor links
   - Set output directory: `.velite/`
   - Set assets directory: `public/static/`
   - Add computed fields: `slugAsParams`, `readTime`

3. **Update `tsconfig.json`**
   - Add path alias: `"#site/content": [".velite/index"]`

4. **Update `.gitignore`**
   - Add `.velite/` to ignore generated content
   - Add `public/static/` for processed assets

---

### Phase 2: Content Structure

1. **Create Content Directory**
   ```bash
   mkdir -p content/posts
   ```

2. **Create Blog Post Template** (`content/posts/blog-article-template.mdx`)
   - Frontmatter schema:
     ```yaml
     ---
     title: string (max 99 chars)
     description: string (max 999 chars)
     date: ISO date string
     imageUrl: string
     published: boolean (default: true)
     tags: string[] (optional)
     featured: boolean (default: false)
     readTime: string (auto-calculated)
     ---
     ```

3. **Sample Posts**
   - Create at least 3-4 sample blog posts
   - Include various MDX components (code blocks, callouts, YouTube embeds, etc.)

---

### Phase 3: Pages & Routing

1. **Blog Listing Page** (`app/posts/page.tsx`)
   - Grid layout displaying all posts
   - Each post card shows:
     - Featured image
     - Author avatar (0xAquaWolf logo)
     - Title
     - Description
     - Read time
     - Date
   - Import posts from `#site/content`

2. **Blog Post Detail Page** (`app/posts/[slug]/page.tsx`)
   - Breadcrumb navigation (Home > Posts > Title)
   - Post header:
     - Title with gradient styling
     - Description
     - Featured image with overlay
     - Meta info (read time, views, date, author)
   - MDX content rendering
   - Scroll tracker component
   - 404 handling for unpublished/non-existent posts

---

### Phase 4: MDX Components

1. **MDX Components Wrapper** (`components/mdx-components.tsx`)
   - Use `'use client'` directive
   - Import custom MDX components
   - Configure heading styles (h1-h6)
   - Configure Image component with Next.js Image
   - Configure Link component with proper styling
   - Set up runtime for MDX compilation

2. **Custom MDX Components**
   - **Callout**: Styled alert/callout boxes
   - **Carousel**: Image carousel component
   - **Copy Code**: Code blocks with copy button
   - **Separator**: Section separator
   - **TOC**: Table of contents with scroll tracking
   - **YouTube**: YouTube video embed component

3. **MDX Styling** (`app/mdx.css`)
   - Import Tailwind typography plugin styles
   - Custom prose styles for blog content
   - Code block styling
   - Anchor link styles
   - Table of contents styles

---

### Phase 5: Blog Components

1. **BlogCard Component** (`components/Blog/BlogCard.tsx`)
   - Props interface: `BlogPost`
   - Displays:
     - Featured image
     - Author avatar
     - Read time icon and text
     - Title
     - Description
   - Gradient overlay effect
   - Responsive sizing (mobile/desktop)

2. **FeaturedBlogs Component** (`components/Blog/FeaturedBlogs.tsx`)
   - Display featured posts on homepage
   - Horizontal scroll or grid layout
   - Filter posts by `featured: true`

---

### Phase 6: Utilities & Hooks

1. **MDX Utilities** (`lib/mdx.ts`)
   - `getPostSlugs()` - Get all post file paths
   - `getPost(filepath)` - Get single post with frontmatter
   - `getPosts(limit?)` - Get all posts sorted by date
   - `getPostBySlug(slug)` - Get post by slug
   - `getFeaturedPosts(limit?)` - Get featured posts
   - `calculateReadTime(content)` - Auto-calculate read time
   - Caching system for read times

2. **Scroll Tracker Component** (`components/ScrollTracker.tsx`)
   - Track reading progress
   - Optional: Integrate with PostHog analytics

---

### Phase 7: Styling & Assets

1. **Typography Plugin Setup**
   ```bash
   bun add -D @tailwindcss/typography
   ```
   Add to `tailwind.config.ts`:
   ```ts
   plugins: [require("@tailwindcss/typography")],
   ```

2. **Create Required Icons** (`public/images/svg/`)
   - `BlogViewsIcon.svg`
   - `ReadTimeIcon.svg`

3. **Create Blog Images** (`public/images/jpeg/featured-blogs/`)
   - Add placeholder/blog featured images
   - Include author avatar: `blog-aquawolf-logo.png`

---

### Phase 8: Integration

1. **Update Main Navigation**
   - Add "Blog" or "Posts" link to navigation
   - Link to `/posts`

2. **Add Featured Blogs to Homepage** (Optional)
   - Import and use `FeaturedBlogs` component
   - Display in appropriate section

3. **Update PostHog Analytics** (Optional)
   - Track blog post views
   - Track reading progress
   - Track scroll depth

---

## Post Schema

```typescript
interface Post {
  slug: string;              // URL path
  slugAsParams: string;      // Slug parameters
  title: string;             // Post title
  description: string;       // Post description
  date: string;              // ISO date string
  imageUrl: string;          // Featured image URL
  published: boolean;        // Published status
  tags?: string[];           // Optional tags
  featured: boolean;         // Featured post flag
  readTime: string;          // Auto-calculated read time
  body: string;              // MDX content
}
```

---

## MDX Features Supported

- GitHub Flavored Markdown (GFM)
- Table of Contents (TOC)
- Syntax Highlighting (Catppuccin Macchiato theme)
- Automatic heading anchors
- Custom components:
  - Callouts
  - Carousels
  - YouTube embeds
  - Code blocks with copy button
  - Section separators
- Image optimization with Next.js Image
- Internal/external links
- Tables, lists, blockquotes

---

## Build Process

1. **Velite Build Script** (Add to `package.json`)
   ```json
   {
     "scripts": {
       "velite:build": "velite --build",
       "velite:dev": "velite --watch"
     }
   }
   ```

2. **Integration with Next.js Build**
   - Run `velite:build` before `next build`
   - Use `velite:watch` during development

3. **Content Generation**
   - Velite generates `.velite/index.ts` with typed content exports
   - Import posts: `import { posts } from '#site/content'`

---

## Testing Checklist

- [ ] Velite configuration works correctly
- [ ] Blog posts render on listing page
- [ ] Individual blog posts render correctly
- [ ] MDX components function properly
- [ ] Code syntax highlighting works
- [ ] Table of contents generates correctly
- [ ] Read time calculation is accurate
- [ ] Images load and display correctly
- [ ] Navigation and breadcrumbs work
- [ ] 404 handling works for unpublished posts
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Build process completes successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors

---

## Future Enhancements (Optional)

1. **Search Functionality**
   - Add search bar for blog posts
   - Use Fuse.js or similar

2. **Tag Filtering**
   - Filter posts by tags
   - Tag cloud component

3. **RSS Feed**
   - Generate RSS feed for blog posts

4. **Comments System**
   - Integrate with comment service (e.g., giscus, utterances)

5. **Analytics Dashboard**
   - View count tracking
   - Popular posts

6. **Dark/Light Mode**
   - Theme toggle for blog posts
   - Syntax theme adjustment

7. **Newsletter Integration**
   - Subscribe form in blog posts
   - Integration with existing newsletter component

---

## Notes

- All blog content is stored as MDX files in `content/posts/`
- Velite generates TypeScript types and index file automatically
- Build process must include Velite generation step
- Images should be optimized for web (WebP format recommended)
- Code blocks use Catppuccin Macchiato theme
- Read time is calculated at 200 words per minute
- Generated assets are stored in `public/static/`

---

## References

- Velite Documentation: https://velite.dev
- MDX Documentation: https://mdxjs.com
- Remark Plugins: https://github.com/remarkjs/remark
- Rehype Plugins: https://github.com/rehypejs/rehype
