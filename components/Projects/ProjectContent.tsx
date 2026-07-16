'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe2, KeyRound, MonitorPlay } from 'lucide-react';
import Markdown from 'react-markdown';
import RelatedProjects from './RelatedProjects';
import { Project, projectsData } from './projectsData';
import StyledButton from '@/components/ui/styled-button';

interface ProjectContentProps extends Project {}

export default function ProjectContent({
  title,
  date,
  imageUrl,
  tags,
  links,
  fullDescription,
  description,
  slug,
}: ProjectContentProps) {
  const [isLoading, setIsLoading] = useState(true);

  const getPrimaryLink = () => {
    const liveLink = links.find(
      (link) =>
        link.title.toLowerCase().includes('live') ||
        link.title.toLowerCase().includes('site') ||
        link.title.toLowerCase().includes('demo'),
    );

    if (liveLink) return liveLink;

    const githubLink = links.find((link) =>
      link.title.toLowerCase().includes('github'),
    );

    return githubLink || links[0];
  };

  const primaryLink = getPrimaryLink();
  const isPrimaryLinkInternal = primaryLink?.url?.startsWith('/');

  return (
    <div className="flex flex-col gap-8">
      <div className="relative z-[99] flex items-center">
        <StyledButton
          onClick={() => window.history.back()}
          variant="back"
          size="md"
          className="group flex cursor-pointer items-center gap-2"
        >
          Back to Projects
        </StyledButton>
      </div>

      <a
        href={primaryLink?.url}
        target={isPrimaryLinkInternal ? undefined : '_blank'}
        rel={isPrimaryLinkInternal ? undefined : 'noopener noreferrer'}
        className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 hover:scale-[1.01]"
      >
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300 ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-32 w-32 animate-pulse rounded-full bg-gray-700" />
        </div>

        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } group-hover:scale-105`}
          priority
          onLoad={() => setIsLoading(false)}
        />

        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20">
          <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-gray-400 backdrop-blur-sm">
              <ExternalLink className="h-4 w-4" />
              {primaryLink?.title}
            </div>
          </div>
        </div>
      </a>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold text-gray-100">{title}</h1>
            <span className="text-gray-300">{date}</span>
          </div>
          <article className="prose prose-purple prose-invert mt-6 max-w-none [&_ol>li::marker]:text-gray-300 [&_ul>li::marker]:text-gray-300">
            <Markdown>{fullDescription}</Markdown>
          </article>
        </div>

        <div className="h-fit lg:sticky lg:top-8">
          <div className="space-y-8 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md transition-all duration-300 hover:border-purple-300/80 hover:shadow-2xl hover:shadow-purple-500/20">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Project Links
              </h2>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith('/') ? undefined : '_blank'}
                    rel={
                      link.url.startsWith('/')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="flex items-center gap-2 text-purple-100 transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="border border-purple-300/25 bg-purple-500/15 text-purple-100"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {slug === 'light-code-labs-dashboard' && (
        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <div
            id="walkthrough"
            className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md"
          >
            <MonitorPlay className="mb-5 h-6 w-6 text-purple-200" />
            <h2 className="text-xl font-semibold text-white">
              Workflow overview
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The workflow starts with browser based lead capture, moves into
              Laravel intake, then continues through enrichment, generated site
              options, chatbot setup, and a sample public site.
            </p>
          </div>
          <div
            id="demo-access"
            className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md"
          >
            <KeyRound className="mb-5 h-6 w-6 text-purple-200" />
            <h2 className="text-xl font-semibold text-white">Demo access</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Demo access is scoped around a prepared sample lead so the product
              can be reviewed without exposing private client data.
            </p>
            <StyledButton
              href="/dashboard-demo"
              variant="external"
              size="md"
              className="mt-5 w-full sm:w-fit"
            >
              Open live demo
            </StyledButton>
          </div>
          <div
            id="generated-site"
            className="rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md"
          >
            <Globe2 className="mb-5 h-6 w-6 text-amber-200" />
            <h2 className="text-xl font-semibold text-white">
              Generated sample site
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The public sample site is the visible result from the workflow:
              one captured business lead turned into a sales site direction.
            </p>
          </div>
        </section>
      )}

      {(slug === 'shopify-ecommerce-systems' ||
        slug === 'wordpress-agency-builds') && (
        <section
          id="case-study-context"
          className="mt-12 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md"
        >
          <h2 className="text-xl font-semibold text-white">
            Case Study Context
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            This supporting project exists to show range around the main Laravel
            story. The dashboard is the headline, while this work shows the PHP,
            ecommerce, CMS, UI, and business website experience that built the
            foundation.
          </p>
        </section>
      )}

      {slug === 'chrome-extension-lead-capture' && (
        <section
          id="install-flow"
          className="mt-12 rounded-2xl border border-purple-500/70 bg-gradient-to-br from-purple-800/40 to-purple-950/70 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md"
        >
          <h2 className="text-xl font-semibold text-white">Install Flow</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            The extension is distributed from the dashboard, configured with an
            API key, and used inside the browser while researching public
            business leads. Once captured, the lead appears in Laravel and moves
            into the product workflow.
          </p>
        </section>
      )}

      {slug === 'sunnyside-247-ac-website' && (
        <div className="mt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-100">
            Performance Results
          </h2>
          <p className="mb-6 text-gray-400">
            Achieving perfect 100/100 Google PageSpeed scores through advanced
            optimization techniques, efficient caching strategies, and modern
            development practices.
          </p>
          <a
            href="https://pagespeed.web.dev/analysis/https-sunnyside247ac-com/bimc9jrugi?form_factor=desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/projects/sunnyside-pagespeed.png"
              alt="SunnySide 24/7 AC PageSpeed Score, 100/100"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-xl"
            />
          </a>
        </div>
      )}

      <RelatedProjects
        currentProject={{
          title,
          date,
          imageUrl,
          tags,
          links,
          fullDescription,
          description,
          slug,
        }}
        allProjects={projectsData}
      />
    </div>
  );
}
