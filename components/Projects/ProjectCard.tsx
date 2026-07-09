'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  slug: string;
  links: Array<{ title: string; url: string }>;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  slug,
  featured = false,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 shadow-xl shadow-purple-500/10 backdrop-blur-md transition-all duration-300 hover:border-purple-300/80 hover:shadow-2xl hover:shadow-purple-500/20">
        <div
          className="relative w-full shrink-0 overflow-hidden bg-purple-950/70"
          style={{ height: featured ? '320px' : '240px' }}
        >
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
              priority={featured}
            />
          </div>

        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-white drop-shadow-sm transition-colors group-hover:text-purple-100">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-300/25 bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-100 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/25"
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="rounded-full border border-purple-300/25 bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-100 backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/25">
                +{tags.length - 5} more
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
