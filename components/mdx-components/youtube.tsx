import React from 'react';

interface YouTubeProps {
  videoId: string;
  title?: string;
}

export function YouTube({ videoId, title = 'YouTube video' }: YouTubeProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
