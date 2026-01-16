import { posts } from '#site/content';
import { Post } from '#site/content';

/**
 * Get all post slugs/paths
 * @returns Array of post paths
 */
export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

/**
 * Get a single post by its filepath
 * @param filepath - The filepath to search for
 * @returns The post or undefined
 */
export function getPost(filepath: string): Post | undefined {
  return posts.find((post) => post.filepath === filepath);
}

/**
 * Get all published posts sorted by date (newest first)
 * @param limit - Optional limit to restrict number of posts
 * @returns Array of published posts
 */
export function getPosts(limit?: number): Post[] {
  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return limit ? publishedPosts.slice(0, limit) : publishedPosts;
}

/**
 * Get a post by its slug
 * @param slug - The post slug
 * @returns The post or undefined
 */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * Get featured posts sorted by date (newest first)
 * @param limit - Optional limit to restrict number of posts
 * @returns Array of featured posts
 */
export function getFeaturedPosts(limit?: number): Post[] {
  const featured = posts
    .filter((post) => post.published && post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Calculate read time for content
 * @param content - The content to analyze
 * @returns Read time in minutes
 */
export function calculateReadTime(content: string): string {
  if (!content || content.trim().length === 0) {
    return '0 min read';
  }

  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}
