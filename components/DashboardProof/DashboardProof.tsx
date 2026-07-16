import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Braces,
  Database,
  Globe2,
  MonitorPlay,
  Play,
  Server,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const proofChips = [
  {
    label: 'Laravel',
    icon: <Database className="h-4 w-4" />,
  },
  {
    label: 'Inertia and React',
    icon: <MonitorPlay className="h-4 w-4" />,
  },
  {
    label: 'Lead capture',
    icon: <Braces className="h-4 w-4" />,
  },
  {
    label: 'Docker on Hetzner',
    icon: <Server className="h-4 w-4" />,
  },
];

const workflow = [
  {
    title: 'Capture sample lead',
    body: 'The Chrome extension pulls public Google Maps lead context into Laravel.',
  },
  {
    title: 'Enrich and assemble',
    body: 'Jobs organize the lead, reviews, photos, copy, audits, and site options.',
  },
  {
    title: 'Publish demo',
    body: 'The dashboard produces generated sales site directions and demo URLs.',
  },
];

const dashboardStats = [
  {
    label: 'New leads',
    value: '248',
    delta: '+12%',
  },
  {
    label: 'Demos generated',
    value: '156',
    delta: '+9%',
  },
  {
    label: 'Conversion rate',
    value: '24.3%',
    delta: '+6%',
  },
];

const mediaActions = [
  {
    label: 'Demo login',
    icon: <UserRound className="h-4 w-4" />,
  },
  {
    label: 'Sample site',
    icon: <Globe2 className="h-4 w-4" />,
  },
  {
    label: 'Safe sample lead',
    icon: <ShieldCheck className="h-4 w-4" />,
  },
];

export default function DashboardProof() {
  return (
    <section
      id="dashboard-proof"
      className="mx-auto mt-24 w-full max-w-7xl px-4 py-16 text-white"
    >
      <SectionHeading
        heading="Light Code Labs Dashboard"
        subheading="A Laravel product dashboard built from an agency attempt, with the working product as the proof"
        animationId="dashboard-proof"
      />

      <article className="relative overflow-hidden rounded-[2rem] border border-violet-200/40 bg-[linear-gradient(135deg,rgba(168,85,247,0.16),rgba(79,70,229,0.11),rgba(236,72,153,0.1))] shadow-[0_26px_78px_rgba(33,18,72,0.22)] ring-1 ring-white/15 backdrop-blur-2xl">
        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10 xl:p-12">
            <div>
              <p className="mb-5 text-sm font-semibold tracking-wide text-violet-200">
                Flagship Laravel project
              </p>
              <h3 className="max-w-2xl text-4xl font-semibold leading-[0.98] tracking-normal text-white md:text-6xl">
                The product survived the business attempt.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                I tried to build an automation agency. The agency did not get
                the distribution it needed, but the product is real: a working
                Laravel, Inertia, and React dashboard that turns a captured lead
                into generated sales site demos.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {proofChips.map((chip) => (
                <div
                  key={chip.label}
                  className="flex h-14 items-center gap-3 rounded-2xl border border-violet-100/25 bg-white/[0.09] px-5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
                >
                  <span className="text-violet-100">{chip.icon}</span>
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/light-code-labs-dashboard"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-6 text-sm font-semibold text-zinc-950 shadow-[0_20px_50px_rgba(124,58,237,0.34)] transition hover:bg-violet-100"
              >
                View case study
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="/dashboard-demo"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-violet-100/25 bg-white/[0.09] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:bg-white/[0.14]"
              >
                <UserRound className="h-4 w-4" />
                Open live demo
              </a>
            </div>
          </div>

          <div className="border-t border-violet-100/20 p-4 md:p-6 lg:border-l lg:border-t-0 lg:p-8">
            <div className="flex min-h-[430px] flex-col justify-between rounded-[1.75rem] border border-violet-100/25 bg-white/[0.085] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_56px_rgba(33,18,72,0.18)] backdrop-blur-2xl md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-violet-100/80">
                    Product walkthrough
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Lead capture to generated demo
                  </h4>
                </div>
                <MonitorPlay className="h-8 w-8 text-white/80" />
              </div>

              <div className="relative my-8 overflow-hidden rounded-2xl border border-violet-100/25 bg-[linear-gradient(135deg,rgba(28,24,52,0.74),rgba(14,16,30,0.7))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute left-1/2 top-1/2 z-20 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/15 text-white shadow-[0_18px_60px_rgba(124,58,237,0.42)] backdrop-blur-xl">
                  <Play className="ml-1 h-9 w-9 fill-white" />
                </div>

                <div className="grid min-h-[260px] grid-cols-[112px_1fr] text-left">
                  <aside className="border-r border-violet-100/20 bg-white/[0.045] p-4">
                    <div className="mb-5 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-violet-300/80" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                    </div>
                    {['Overview', 'Leads', 'Demos', 'Sites', 'Settings'].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`mb-2 rounded-lg px-2.5 py-2 text-[10px] ${
                            index === 0
                              ? 'bg-white/[0.1] text-white'
                              : 'text-zinc-400'
                          }`}
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </aside>

                  <div className="p-5">
                    <p className="text-sm font-semibold text-white">
                      Dashboard
                    </p>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {dashboardStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-violet-100/20 bg-white/[0.055] p-3"
                        >
                          <p className="text-[10px] text-zinc-300">
                            {stat.label}
                          </p>
                          <div className="mt-2 flex items-end justify-between gap-2">
                            <span className="text-xl font-semibold text-white">
                              {stat.value}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-300">
                              {stat.delta}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-[1.4fr_0.8fr]">
                      <div className="rounded-xl border border-violet-100/20 bg-white/[0.05] p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-[10px] text-zinc-300">
                            Demo site timeline
                          </span>
                          <span className="h-1.5 w-16 rounded-full bg-violet-300/50" />
                        </div>
                        <svg
                          viewBox="0 0 280 92"
                          aria-hidden="true"
                          className="h-24 w-full"
                        >
                          <defs>
                            <linearGradient
                              id="dashboard-proof-line"
                              x1="0"
                              x2="1"
                              y1="0"
                              y2="0"
                            >
                              <stop stopColor="#60a5fa" />
                              <stop offset="1" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 72 C38 68 38 20 78 29 C118 38 108 70 148 61 C188 52 184 30 218 37 C248 43 248 10 280 16"
                            fill="none"
                            stroke="url(#dashboard-proof-line)"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M0 72 C38 68 38 20 78 29 C118 38 108 70 148 61 C188 52 184 30 218 37 C248 43 248 10 280 16 L280 92 L0 92 Z"
                            fill="url(#dashboard-proof-line)"
                            opacity="0.12"
                          />
                        </svg>
                      </div>

                      <div className="rounded-xl border border-violet-100/20 bg-white/[0.05] p-4">
                        <p className="mb-4 text-[10px] text-zinc-300">
                          Sample leads
                        </p>
                        {['Acme Inc.', 'Brightstone Co.', 'Northwind Labs'].map(
                          (lead, index) => (
                            <div
                              key={lead}
                              className={`mb-2 flex items-center justify-between rounded-lg border border-violet-100/20 bg-white/[0.055] px-2.5 py-2 ${
                                index === 2 ? 'opacity-50' : ''
                              }`}
                            >
                              <span className="text-[10px] text-zinc-300">
                                {lead}
                              </span>
                              <span className="text-[9px] text-zinc-400">
                                Demo
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="-mt-2 mb-6 text-center text-sm leading-6 text-white/75">
                The workflow connects browser capture, Laravel intake,
                enrichment, generated site options, and a safe sample URL.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {mediaActions.map((action) => (
                  <div
                    key={action.label}
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-violet-100/25 bg-white/[0.09] px-3 text-center text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
                  >
                    <span className="text-violet-100">{action.icon}</span>
                    {action.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-violet-100/20 p-5 md:p-6">
          <div className="grid gap-4 rounded-3xl border border-violet-100/25 bg-white/[0.08] p-5 backdrop-blur-xl lg:grid-cols-3">
            {workflow.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 lg:border-r lg:border-violet-100/20 lg:pr-6 last:lg:border-r-0"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-200/40 bg-white/[0.08] text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-4 rounded-3xl border border-violet-100/25 bg-white/[0.08] p-5 text-sm leading-6 text-white/80 backdrop-blur-xl">
            <Bot className="mt-0.5 h-5 w-5 shrink-0 text-violet-100" />
            <p>
              Applied AI features include enrichment, generated copy, retrieval
              based chat, audits, OCR, triage, spam classification, and usage
              logging inside the product.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
