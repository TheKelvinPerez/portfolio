import React from 'react';
import Link from 'next/link';
import { BlogCard } from './BlogCard';
import { getFeaturedPosts } from '@/lib/mdx';

export function FeaturedBlogs() {
  const featuredPosts = getFeaturedPosts(3);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Featured Posts
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Check out my latest thoughts and tutorials
            </p>
          </div>
          <Link
            href="/posts"
            className="hidden rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 sm:block"
          >
            View All
          </Link>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {/* Mobile horizontal scroll container */}
          <div className="flex gap-4 overflow-x-auto pb-4 sm:hidden snap-x snap-mandatory">
            {featuredPosts.map((post) => (
              <div key={post.slug} className="flex-shrink-0 w-[85vw] snap-center">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden sm:contents">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/posts"
            className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
