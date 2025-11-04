'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  tags: string[];
  slug: string;
  links: Array<{ title: string; url: string }>;
}

export default function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  tags,
  slug,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Fixed Image Container - Always 240px tall */}
        <div className="relative w-full shrink-0 overflow-hidden bg-gray-800" style={{ height: '240px' }}>
          <div className="absolute inset-0">
            <Image
              src={imageError ? '/images/placeholder-project.svg' : imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-500 ${
                isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
              } group-hover:scale-105`}
              onLoad={() => setIsLoading(false)}
              onError={() => setImageError(true)}
              priority
            />
          </div>

          {/* Coming Soon Badge */}
          {date === 'Coming Soon' && (
            <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-sm font-semibold text-white shadow-lg">
              Coming Soon
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Title & Description */}
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-gray-100 transition-colors group-hover:text-purple-400">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="rounded-full bg-purple-600/20 px-3 py-1 text-xs text-purple-300">
                +{tags.length - 5} more
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
