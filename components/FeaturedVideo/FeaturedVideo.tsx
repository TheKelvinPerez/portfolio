'use client';

import { motion, useInView } from 'framer-motion';
import { Play, Video } from 'lucide-react';
import { useMemo, useRef } from 'react';

const introVideoUrl = process.env.NEXT_PUBLIC_INTRO_LOOM_URL || '';

function getLoomEmbedUrl(url: string) {
  if (!url) {
    return '';
  }

  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
    const videoId = pathParts[pathParts.length - 1];

    if (!videoId) {
      return '';
    }

    if (parsedUrl.hostname.includes('loom.com')) {
      return `https://www.loom.com/embed/${videoId}`;
    }

    return url;
  } catch {
    return '';
  }
}

export default function FeaturedVideo() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-20% 0px -20% 0px',
  });
  const loomEmbedUrl = useMemo(() => getLoomEmbedUrl(introVideoUrl), []);

  const containerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      id="intro-video"
      ref={containerRef}
      className="mx-auto mt-20 w-full max-w-7xl px-4 py-16 text-white"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="grid gap-8 rounded-[2rem] border border-violet-200/25 bg-[linear-gradient(135deg,rgba(76,29,149,0.34),rgba(30,27,75,0.24),rgba(17,24,39,0.68))] p-5 shadow-[0_30px_90px_rgba(36,18,82,0.28)] backdrop-blur-2xl lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
        <motion.div
          className="flex flex-col justify-between gap-8 p-1 md:p-4"
          variants={itemVariants}
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-purple-200">
              <span className="h-px w-8 bg-purple-200/80" />
              Introduction
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-none text-white md:text-6xl">
              A short intro before the projects.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-purple-100/80 md:text-lg">
              This is where I explain what I am looking for, why Laravel is the
              direction, and how to review the dashboard project.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ['01', 'Who I am'],
              ['02', 'What I build'],
              ['03', 'Why Laravel'],
            ].map(([number, label]) => (
              <div
                key={number}
                className="flex min-h-16 items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-4 text-sm text-white/80"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-300/20 text-xs font-semibold text-purple-100">
                  {number}
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-zinc-950/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_24px_80px_rgba(0,0,0,0.24)]"
          variants={itemVariants}
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-purple-300/20 text-purple-100">
                <Video className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Loom intro</p>
                <p className="text-xs uppercase tracking-[0.18em] text-purple-100/60">
                  Personal walkthrough
                </p>
              </div>
            </div>
            <div className="hidden gap-1.5 sm:flex">
              {Array.from({ length: 7 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-8 rounded-full ${
                    index === 0 ? 'bg-purple-200' : 'bg-white/15'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="aspect-video min-h-[260px]">
            {loomEmbedUrl ? (
              <iframe
                src={loomEmbedUrl}
                title="Kelvin Perez introduction video"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-5 bg-[radial-gradient(circle_at_50%_36%,rgba(168,85,247,0.26),transparent_34%),linear-gradient(135deg,rgba(24,16,54,0.92),rgba(8,10,28,0.96))] px-6 pt-20 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/15 text-white shadow-[0_18px_60px_rgba(124,58,237,0.42)] backdrop-blur-xl">
                  <Play className="ml-1 h-9 w-9 fill-white" />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-white">
                    Intro video will be added here
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-purple-100/70">
                    Until then, the dashboard case study and selected projects
                    below are ready to review.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
