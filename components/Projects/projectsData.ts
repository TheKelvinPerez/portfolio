export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    title: 'Light Code Labs Dashboard',
    description:
      'A Laravel, Inertia, and React platform that turns a captured Google Maps lead into a generated sales site demo with enrichment, chatbot capture, voice workflows, queues, usage tracking, and Docker based deployment.',
    date: '2026',
    imageUrl: '/projects/portfolio.png',
    tags: [
      'Laravel',
      'PHP',
      'Inertia',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Queues',
      'Stripe',
      'OpenAI',
      'Chrome Extension',
      'Hetzner',
    ],
    slug: 'light-code-labs-dashboard',
    links: [
      {
        title: 'Workflow Overview',
        url: '/projects/light-code-labs-dashboard#walkthrough',
      },
      {
        title: 'Demo Access',
        url: '/projects/light-code-labs-dashboard#demo-access',
      },
      {
        title: 'Generated Sample Site',
        url: '/projects/light-code-labs-dashboard#generated-site',
      },
    ],
    fullDescription:
      '# Light Code Labs Dashboard\n\n' +
      'I tried to build an automation agency. The business did not get the distribution it needed, but the product became the proof. I built the Laravel platform that could have powered the agency.\n\n' +
      'This is the main portfolio piece because it shows the role I am aiming for now: full stack Laravel development with React, TypeScript, databases, product thinking, integrations, queues, and infrastructure.\n\n' +
      '## What It Does\n\n' +
      '1. Captures a public business lead from Google Maps through a Chrome extension.\n\n' +
      '2. Stores profile data, photos, reviews, website crawl context, and enrichment results inside the dashboard.\n\n' +
      '3. Generates sales site options from that lead so a prospect can see a real demo before becoming a client.\n\n' +
      '4. Publishes preview and live URLs with chatbot capture, form routing, and follow up workflows.\n\n' +
      '5. Tracks product usage, model usage, queued work, and operational status from the Laravel app.\n\n' +
      '## Laravel Proof\n\n' +
      'The dashboard is built with Laravel, Inertia, React, TypeScript, PostgreSQL, queues, jobs, policies, reusable services, and Docker. It runs with staging and production environments on a Hetzner VPS.\n\n' +
      'The important part is not that the agency worked. The important part is that the software works, and the software has the same moving parts a Laravel team would expect in a production product.\n\n' +
      '## Applied AI Inside The Product\n\n' +
      'The product uses OpenAI enrichment, generated site copy, retrieval based chatbot knowledge, marketing audit writing, request triage, spam classification, OCR extraction, and usage logging. These are product integrations, not portfolio decoration.\n\n' +
      '## Review Path\n\n' +
      '1. Start with the workflow overview to see how lead capture moves into Laravel.\n\n' +
      '2. Review the dashboard flow for enrichment, generated site options, chatbot setup, and usage tracking.\n\n' +
      '3. Use the generated sample site as the public facing result from the workflow.\n\n' +
      '4. Treat the demo access as a focused product walkthrough, not a client case study.\n\n' +
      '## Honest Outcome\n\n' +
      'I ran out of runway on the business side. I did not distribute the agency well enough. But I did build the product, and that is why this belongs at the top of the portfolio. I am applying for Laravel developer roles, and this is the clearest proof that I can build serious Laravel applications.',
  },
  {
    title: 'SunnySide 24/7 AC WordPress Platform',
    description:
      'A custom WordPress and PHP platform for a South Florida HVAC business, using structured content, ACF Pro, dynamic service pages, local SEO, modern build tooling, and performance work.',
    date: '2025',
    imageUrl: '/projects/sunnyside-hvac.jpg',
    tags: [
      'WordPress',
      'PHP',
      'ACF Pro',
      'Tailwind CSS',
      'Vite',
      'MySQL',
      'Local SEO',
      'Performance',
    ],
    slug: 'sunnyside-247-ac-website',
    links: [
      { title: 'Live Site', url: 'https://sunnyside247ac.com' },
      {
        title: 'PageSpeed Result',
        url: 'https://pagespeed.web.dev/analysis/https-sunnyside247ac-com/bimc9jrugi?form_factor=desktop',
      },
      {
        title: 'GitHub',
        url: 'https://github.com/TheKelvinPerez/sunnysideac-wp',
      },
    ],
    fullDescription:
      '# SunnySide 24/7 AC WordPress Platform\n\n' +
      'This project shows the WordPress and PHP foundation that led into my Laravel work. The goal was to give a local HVAC company a scalable content system instead of a small brochure site.\n\n' +
      '## What I Built\n\n' +
      '1. Custom WordPress theme with PHP, ACF Pro, and structured content models.\n\n' +
      '2. Dynamic service and city page generation for local search coverage.\n\n' +
      '3. Modern frontend workflow using Tailwind CSS and Vite.\n\n' +
      '4. Schema, sitemap, metadata, and performance work for local SEO.\n\n' +
      '5. Deployment and server configuration work to keep the site fast and stable.\n\n' +
      '## Why It Matters\n\n' +
      'This is the older chapter of the portfolio, and it still matters. WordPress is where I learned PHP, client work, content architecture, SEO, and the reality of building for non technical business owners.',
  },
  {
    title: 'Chrome Extension Lead Capture',
    description:
      'The companion capture tool for Light Code Labs. It connects the browser workflow to the Laravel dashboard so a Google Maps lead can move directly into the product pipeline.',
    date: '2026',
    imageUrl: '/projects/aquakit.png',
    tags: [
      'Chrome Extension',
      'JavaScript',
      'Laravel API',
      'Lead Capture',
      'Browser Workflow',
      'Product Integration',
    ],
    slug: 'chrome-extension-lead-capture',
    links: [
      {
        title: 'Install Flow',
        url: '/projects/chrome-extension-lead-capture#install-flow',
      },
      {
        title: 'Dashboard Case Study',
        url: '/projects/light-code-labs-dashboard',
      },
    ],
    fullDescription:
      '# Chrome Extension Lead Capture\n\n' +
      'This extension is part of the Light Code Labs system. It connects the browser research workflow to the Laravel dashboard so lead capture starts from the place where the business data is found.\n\n' +
      '## What It Does\n\n' +
      '1. Runs inside the browser while researching businesses on Google Maps.\n\n' +
      '2. Captures public business data needed to start a lead record.\n\n' +
      '3. Sends that data into the Laravel dashboard through an authenticated workflow.\n\n' +
      '4. Lets the dashboard continue with enrichment, generated site demos, chatbot setup, and follow up workflows.\n\n' +
      '## Install Flow\n\n' +
      'The extension is distributed through the dashboard and configured with an API key. The important part for this portfolio is the workflow: capture the public business data, send it through an authenticated request, and create a lead record Laravel can continue processing.\n\n' +
      '## Why It Matters\n\n' +
      'This shows that the dashboard was not just a static admin panel. It connected a real browser workflow to a backend product flow.',
  },
  {
    title: 'Shopify Ecommerce Systems',
    description:
      'Supporting ecommerce work that shows storefront judgment, product data experience, theme level thinking, and comfort working around online store operations.',
    date: 'Supporting Work',
    imageUrl: '/projects/aquastack.jpg',
    tags: [
      'Shopify',
      'Liquid',
      'Theme Development',
      'Ecommerce',
      'Product Data',
      'Conversion UX',
    ],
    slug: 'shopify-ecommerce-systems',
    links: [
      {
        title: 'Ecommerce Context',
        url: '/projects/shopify-ecommerce-systems#case-study-context',
      },
    ],
    fullDescription:
      '# Shopify Ecommerce Systems\n\n' +
      'Shopify is not the headline of this portfolio, but it matters because ecommerce has its own constraints: storefront UX, product data, merchandising, checkout paths, app integrations, and operational details that affect revenue.\n\n' +
      '## What This Shows\n\n' +
      '1. Comfort working inside ecommerce storefronts and theme systems.\n\n' +
      '2. Product data and collection structure awareness.\n\n' +
      '3. UI judgment around conversion paths, merchandising, and checkout support.\n\n' +
      '4. A broader product mindset beyond internal dashboards.\n\n' +
      '## Why It Matters\n\n' +
      'This supports the Laravel story by showing that I understand customer facing workflows, not only admin panels.',
  },
  {
    title: 'WordPress Agency Builds',
    description:
      'Selected WordPress and PHP work from the agency chapter, focused on custom themes, ACF Pro, client sites, UI, SEO, and the foundation that led into Laravel.',
    date: 'Foundation Work',
    imageUrl: '/projects/wordpress-modern-theme.jpg',
    tags: [
      'WordPress',
      'PHP',
      'Custom Themes',
      'ACF Pro',
      'Client Work',
      'UI and UX',
      'SEO',
    ],
    slug: 'wordpress-agency-builds',
    links: [
      {
        title: 'WordPress Context',
        url: '/projects/wordpress-agency-builds#case-study-context',
      },
    ],
    fullDescription:
      '# WordPress Agency Builds\n\n' +
      'WordPress is the foundation of my PHP work. This chapter shows the client facing side of the journey: custom themes, ACF Pro, structured content, SEO, performance, and working with real business owners.\n\n' +
      '## What This Shows\n\n' +
      '1. PHP and CMS experience before the Laravel focus.\n\n' +
      '2. Custom theme work, ACF Pro, content models, and client editable websites.\n\n' +
      '3. UI, SEO, performance, launch work, and support experience.\n\n' +
      '4. The ability to turn business requirements into maintainable web systems.\n\n' +
      '## Why It Matters\n\n' +
      'The portfolio is Laravel first now, but this chapter explains where the PHP foundation came from.',
  },
];
