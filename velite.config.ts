import { defineCollection, defineConfig, s } from 'velite'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// Define the posts collection schema
const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      imageUrl: s.string(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      featured: s.boolean().default(false),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slugAsParams: meta.path.replace(/^posts\//, '').replace(/\.mdx$/, ''),
    })),
})

// Export Velite configuration
export default defineConfig({
  collections: { posts },
  output: {
    data: '.velite',
    assets: 'public/static',
  },
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [
        remarkToc,
        {
          heading: 'toc|table[ -]of[ -]contents?',
          tight: true,
        },
      ],
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'catppuccin-macchiato',
          onVisitLine(node: any) {
            // Prevent empty lines from collapsing in code blocks
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            // Add custom styling for highlighted lines
            node.properties.className = ['line--highlighted']
          },
          onVisitHighlightedChars(node: any) {
            // Add custom styling for highlighted characters
            node.properties.className = ['chars--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
