# Laravel Portfolio Launch Specification

## Overview

**Goal:** Launch a focused Laravel portfolio by Monday, July 20, 2026, so the job search can begin with one clear professional identity and credible technical proof.

**Problem Statement:** The portfolio has been repositioned around Laravel, but it is not ready to launch. The strongest project still uses placeholder or unrelated media, the dashboard demo is not deployed, several public artifacts still describe a WordPress focused portfolio, the main case study needs deeper technical evidence, and final performance and production QA remain incomplete.

**Target Users:**

1. Engineering managers hiring Laravel and PHP developers.
2. Senior developers reviewing technical depth.
3. Recruiters screening for Laravel, Inertia, React, and TypeScript experience.
4. Agencies and product teams looking for a developer who can own backend workflows and polished frontend delivery.

**Primary Success Metric:** Within thirty seconds, a reviewer understands that Kelvin is targeting Full Stack Laravel roles and can immediately inspect real proof from the Light Code Labs Dashboard.

**Launch Target:** End of day Monday, July 20, 2026, Central Time.

## Current Verified State

1. The Laravel portfolio refactor is locally promoted to `main` at commit `05ead32`.
2. Local `main` is six commits ahead of `origin/main` and has not been pushed.
3. The portfolio production build passes.
4. The build reports six existing unused variable warnings.
5. The portfolio dashboard route has thirteen passing focused tests.
6. The Laravel dashboard demo branch has twenty nine passing focused tests with one hundred forty three assertions.
7. The Laravel dashboard demo code remains on `feat/portfolio-demo-mode` and is not merged into dashboard `main`.
8. The dedicated demo runtime and demo database are not yet deployed.
9. The flagship project image is an older portfolio screenshot rather than the Laravel dashboard.
10. The Chrome extension, Shopify, and general WordPress entries use unrelated or generic imagery.
11. The introduction video has no configured media and displays an empty placeholder.
12. The generated sample site section does not link to a real generated site.
13. The GitHub README, social preview image, machine readable public description, and older tracked planning notes still contain stale WordPress positioning or internal development references.
14. The homepage forces dynamic rendering even though its public content can be statically rendered.
15. The homepage currently contains four resume calls to action.

## Product Principles

1. Proof matters more than project count.
2. Every public claim must be supported by code, a real artifact, a verified result, or a clearly labeled sample.
3. WordPress remains part of the career foundation, but Laravel is the headline.
4. The Light Code Labs Dashboard is the flagship project.
5. The portfolio launch must not depend on the demo runtime being ready.
6. Empty placeholders must never appear in production.
7. A smaller set of complete projects is stronger than a larger set of generic entries.
8. The existing cosmic purple visual identity remains the design foundation.
9. The Monday deadline favors focused completion over a large redesign.
10. Public artifacts must not expose internal development tooling references or private implementation notes.

## Launch Scope Decisions

### Required Project Set

The launch project grid will contain these three projects:

1. Light Code Labs Dashboard, flagship Laravel proof.
2. SunnySide 24/7 AC, supporting WordPress and PHP proof.
3. Chrome Extension Lead Capture, supporting integration proof.

The Shopify Ecommerce Systems and WordPress Agency Builds entries will remain hidden until they have real screenshots, specific responsibilities, and verifiable outcomes.

### Dashboard Demo Decision

The portfolio can launch without the live dashboard demo. A nonsecret feature flag must control every demo call to action.

1. If the dedicated runtime passes production QA before launch, enable the calls to action.
2. If the runtime is not ready, hide every demo call to action.
3. Never ship a button that predictably leads to the retry page.

### Video Decision

The introduction video is optional for Monday.

1. If a real video URL is configured and verified, render the section.
2. If no video exists, do not render the section.
3. Do not display an empty video placeholder in production.

### Content Scope Decision

The launch focuses on one deep case study and two credible supporting projects. A blog, additional case studies, and broader content production happen after launch.

## Success Criteria

1. [ ] The hero identifies Kelvin as a Full Stack Laravel Developer.
2. [ ] The Light Code Labs Dashboard is the first and strongest project on the homepage and projects page.
3. [ ] The flagship section uses a real sanitized dashboard artifact.
4. [ ] The flagship case study explains architecture, responsibilities, technical decisions, security, testing, deployment, results, and lessons.
5. [ ] Every visible project has a real and relevant image.
6. [ ] Every visible link works and leads to meaningful content.
7. [ ] No empty media placeholder appears in production.
8. [ ] No unverified or misleading metric appears in public content.
9. [ ] Dashboard demo calls to action appear only when the dedicated runtime is ready.
10. [ ] The dashboard demo token never reaches browser code, browser storage, page source, or public configuration.
11. [ ] The resume opens without requiring permission and presents the same Laravel focused story.
12. [ ] A real contact form submission reaches the configured inbox.
13. [ ] The GitHub README and social preview present the Laravel direction.
14. [ ] Public artifacts contain no internal development tooling references or obsolete planning material.
15. [ ] The homepage is statically rendered unless a verified runtime requirement proves otherwise.
16. [ ] The production build completes without errors or warnings.
17. [ ] The thirteen portfolio dashboard route tests pass.
18. [ ] The twenty nine Laravel dashboard demo tests pass before dashboard promotion.
19. [ ] Production mobile Lighthouse scores reach at least 95 for Performance and 100 for Accessibility, Best Practices, and SEO.
20. [ ] Desktop Lighthouse targets 100 across all four categories.
21. [ ] The portfolio works with keyboard navigation and reduced motion enabled.
22. [ ] The final production deployment passes homepage, projects, contact, resume, metadata, and demo availability smoke checks.
23. [ ] The user explicitly approves the production push.

## Requirements

### 1. Homepage Narrative And Hierarchy

The homepage must communicate role, proof, career path, and contact options without repeating the same message.

Required order:

1. Hero.
2. Verified proof points.
3. Light Code Labs Dashboard feature.
4. Selected projects.
5. Timeline and relevant skills.
6. About letter.
7. Books only if page length and performance remain acceptable.
8. Frequently asked questions.
9. Contact form.
10. One resume call to action.

Requirements:

1. Remove the empty introduction video from its current position.
2. Render a completed introduction video later in the page only if one exists.
3. Consolidate four resume calls to action into one strong call to action.
4. Keep the first screen concise and role focused.
5. Keep WordPress and ecommerce in supporting language rather than the hero headline.
6. Avoid repeating the agency outcome in every section.

### 2. Flagship Dashboard Artifact

The flagship feature must use evidence from the real product rather than a decorative interface mockup.

Required launch assets:

1. One sanitized dashboard overview screenshot.
2. One screenshot showing a meaningful Laravel backed workflow, such as lead intake, enrichment, or generated site options.
3. One simplified architecture diagram showing the browser capture, Laravel intake, jobs, data storage, generated output, and public result.
4. One real generated sample site link, if a safe public sample is available.
5. One updated social preview image using the Laravel positioning.

Artifact rules:

1. Remove or replace the hard coded `248`, `156`, and `24.3%` dashboard values unless they are explicitly labeled as fictional demo data.
2. Remove the nonfunctional play control from the dashboard mockup.
3. Never expose private customer data, access tokens, email addresses, phone numbers, or production secrets.
4. Use fictional demo records or carefully sanitized screenshots.
5. Keep imagery legible on mobile and desktop.

### 3. Light Code Labs Dashboard Case Study

The case study must be strong enough to support a five to seven minute interview walkthrough.

Required structure:

1. Project summary.
2. Business problem.
3. Kelvin's role and ownership.
4. Technology stack.
5. End to end workflow.
6. Architecture diagram.
7. Laravel application structure.
8. Data model and database decisions.
9. Queues, jobs, and background processing.
10. Authentication, authorization, and data safety.
11. External service boundaries.
12. Testing strategy and representative test results.
13. Deployment architecture.
14. Three important engineering decisions and their tradeoffs.
15. Honest business outcome.
16. Technical lessons and what would be improved next.
17. Review path with clear links.

The case study must answer these interview questions:

1. Why did this belong in Laravel?
2. How does a captured lead move through the system?
3. What belongs in controllers, requests, services, jobs, policies, and models?
4. How are slow or failure prone operations handled?
5. How is private data protected?
6. How is the system tested?
7. How is it deployed and monitored?
8. What did Kelvin personally build?
9. What would Kelvin change with more time?

### 4. Supporting Projects

#### SunnySide 24/7 AC

1. Keep the real site screenshot and PageSpeed evidence.
2. Verify the live site and PageSpeed link.
3. Verify every numerical claim before launch.
4. Explain the custom theme, content model, editor experience, performance work, and business result.
5. Remove valuation language unless a defensible source exists.

#### Chrome Extension Lead Capture

1. Replace the unrelated AquaKit image with a real extension screenshot.
2. Show the capture interface or installation flow.
3. Explain authentication and the request sent to Laravel.
4. Show how a captured record appears in the dashboard.
5. Link back to the flagship case study.

#### Hidden Projects

1. Hide Shopify Ecommerce Systems for launch.
2. Hide WordPress Agency Builds for launch.
3. Restore either project only after adding a real artifact, specific responsibilities, technical detail, and a verifiable result.

### 5. Dashboard Demo Integration

The existing security contract remains the source of truth.

Portfolio requirements:

1. Keep `/dashboard-demo` as the permanent public route.
2. Store issuer URL, token, and allowed host in server environment variables.
3. Keep the token out of public environment variables and client components.
4. Validate the exact scheme, host, port, path, signature lifetime, and response expiration.
5. Keep the five second timeout and private no store response behavior.
6. Return a friendly 503 response when the issuer is unavailable.
7. Add a nonsecret `DASHBOARD_DEMO_ENABLED` flag for call to action visibility.
8. Hide every demo call to action unless the flag is enabled.

Laravel dashboard requirements:

1. Complete user QA on `feat/portfolio-demo-mode`.
2. Keep the dedicated demo database separate from production data.
3. Keep mutations, billing, mail, telephony, webhooks, and outbound requests blocked in demo mode.
4. Keep signed entry links short lived.
5. Keep the authenticated demo session limited to approximately two hours.
6. Merge only after explicit QA approval.
7. Deploy only after explicit go live approval.
8. Seed and verify realistic fictional demo data.
9. Verify the full portfolio button to dashboard session flow in a private browser window.

### 6. Resume And Contact

Resume requirements:

1. Update the linked resume to match the Laravel portfolio story.
2. Make the Light Code Labs Dashboard the leading project.
3. Keep WordPress as the PHP and client delivery foundation.
4. Verify that the document opens without sign in or access approval.
5. Use one resume call to action on the homepage.

Contact requirements:

1. Configure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in production.
2. Submit a real test message and confirm delivery.
3. Verify reply handling uses the visitor's email address correctly.
4. Verify validation, loading, success, and error states.
5. Add or verify spam protection.
6. Keep an accessible email link as a fallback.
7. Add an `.env.example` file with every required key and no secret values.

### 7. Public Brand And Metadata Cleanup

1. Rewrite `README.md` around Laravel, Inertia, React, TypeScript, and the dashboard project.
2. Replace the WordPress social preview image with a Laravel focused preview.
3. Update Open Graph and social metadata.
4. Remove the placeholder Google verification value unless a real value is configured.
5. Verify canonical URLs, sitemap entries, and robots behavior.
6. Update or remove the stale machine readable public portfolio description.
7. Remove tracked internal development instructions and obsolete resume task notes from the public repository.
8. Verify GitHub, LinkedIn, email, and resume links.
9. Use consistent social profile handles across metadata, navigation, and the footer.

### 8. Performance And Accessibility

1. Remove `force-dynamic` and `noStore()` from the static homepage unless a measured requirement remains.
2. Preserve static generation for public content.
3. Lazy load optional video embeds.
4. Ensure optional external scripts do not load without configuration.
5. Audit whether both GSAP and Framer Motion are required on the homepage.
6. Reduce unnecessary client components and initial JavaScript.
7. Optimize project screenshots with correct dimensions and responsive image sizes.
8. Clean all existing build warnings.
9. Respect `prefers-reduced-motion` throughout the site.
10. Verify visible focus states and keyboard operation.
11. Verify heading order, landmarks, labels, and useful alternative text.
12. Test mobile layouts at narrow, medium, and wide breakpoints.
13. Prevent layout shift from images, fonts, loading states, and embeds.

Performance gates:

1. Largest Contentful Paint at or below 2.5 seconds on the production mobile test.
2. Cumulative Layout Shift at or below 0.1.
3. Interaction to Next Paint at or below 200 milliseconds when measurable.
4. Mobile Lighthouse Performance at or above 95.
5. Accessibility, Best Practices, and SEO at 100.
6. Desktop target of 100 across all categories.

### 9. Verification And Production Launch

Required portfolio CLI verification:

```bash
bun install --frozen-lockfile
bun run test:dashboard-demo
bun run build
git diff --check
```

Required Laravel dashboard verification:

```bash
php artisan test \
  tests/Feature/PortfolioDemoEntryTest.php \
  tests/Feature/PortfolioDemoLinkIssuerTest.php \
  tests/Feature/PortfolioDemoSafetyTest.php \
  tests/Feature/PortfolioDemoSeedTest.php
```

Required human QA:

1. Review the homepage on mobile and desktop.
2. Review every project card and project detail page.
3. Test navigation with a keyboard.
4. Test reduced motion.
5. Open the resume in a private browser window.
6. Submit the contact form and confirm delivery.
7. Verify every external link.
8. Verify the social preview image.
9. Verify that hidden projects and empty video sections are absent.
10. Verify that demo calls to action match actual demo availability.
11. If enabled, complete the dashboard demo flow in a private browser window.

Production checks:

1. Homepage returns HTTP 200.
2. Projects, About, and Contact return HTTP 200.
3. Every visible project detail route returns HTTP 200.
4. Sitemap and robots files return HTTP 200.
5. Contact submission succeeds.
6. Resume opens without permission prompts.
7. Demo route either works end to end or is absent from visible calls to action.
8. Production metadata uses kelvinperez.com rather than localhost.
9. Local `main`, `origin/main`, and the production deployment reference the approved commit.

## Technical Context

### Portfolio Stack

1. Next.js 15 App Router.
2. React 19.
3. TypeScript.
4. Tailwind CSS.
5. GSAP and Framer Motion.
6. Bun for install, tests, and builds.
7. Web3Forms for contact delivery.

### Dashboard Stack

1. Laravel.
2. Inertia.
3. React and TypeScript.
4. PostgreSQL.
5. Queues and background jobs.
6. Docker based deployment on Hetzner.

### Portfolio Environment Contract

Required values:

```text
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=
DASHBOARD_DEMO_ENABLED=false
DASHBOARD_DEMO_ISSUER_URL=
DASHBOARD_DEMO_TOKEN=
DASHBOARD_DEMO_ALLOWED_HOST=
```

Optional values:

```text
NEXT_PUBLIC_INTRO_LOOM_URL=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
```

The demo token must remain server only.

## Scope Boundaries

### In Scope

1. Laravel focused portfolio copy and hierarchy.
2. Real project media.
3. A deep Light Code Labs Dashboard case study.
4. Three launch projects.
5. Conditional dashboard demo access.
6. Resume and contact verification.
7. Public README and metadata cleanup.
8. Performance and accessibility work.
9. Production deployment and smoke testing.

### Out Of Scope For Monday

1. Rebuilding the portfolio in WordPress.
2. Adding a blog.
3. Building a new content management system.
4. Adding more project categories.
5. Completing generic Shopify or agency case studies.
6. Expanding analytics.
7. A full visual redesign.
8. New dashboard product features unrelated to safe demo access.
9. Multiple demo personas.
10. Publishing private dashboard source code.

### Post Launch Enhancements

1. Technical blog.
2. Additional Laravel proof projects.
3. More detailed code walkthroughs.
4. Completed Shopify and agency case studies.
5. Expanded analytics after the privacy and performance impact is reviewed.
6. Continuous integration for portfolio tests and builds.
7. Additional videos and written interview preparation material.

## Execution Schedule

### Thursday, July 16

1. Complete and approve this specification.
2. Create the launch asset shot list.
3. Identify the exact dashboard screens that can be shown safely.
4. Confirm the three project launch set.
5. Confirm the demo fallback rule.

### Friday, July 17

1. Capture and sanitize real dashboard and extension screenshots.
2. Replace every unrelated project image.
3. Build the architecture diagram.
4. Rewrite the flagship case study.
5. Hide incomplete project entries.
6. Tighten homepage order and resume calls to action.

### Saturday, July 18

1. Complete dashboard demo user QA.
2. Merge and deploy the demo implementation only if QA is approved.
3. Otherwise, verify every demo call to action is hidden.
4. Update the resume link and content.
5. Verify the contact form and environment contract.
6. Replace the social preview image.
7. Clean the public README and stale public files.

### Sunday, July 19

1. Complete performance work.
2. Clean build warnings.
3. Complete mobile, accessibility, reduced motion, and link QA.
4. Run Lighthouse against the production candidate.
5. Fix launch blocking findings.
6. Prepare the final production commit for approval.

### Monday, July 20

1. Run the complete verification suite.
2. Complete the final visual review.
3. Receive explicit production approval.
4. Push and deploy the approved commit.
5. Run production smoke checks.
6. Confirm the job search version of the portfolio, resume, and contact path are aligned.
7. Begin the Laravel job search journey.

## Risks And Fallbacks

### Demo Runtime Delay

**Risk:** The dedicated runtime is not ready by Monday.

**Fallback:** Launch with all demo calls to action hidden. Enable them after a separate production QA cycle.

### Missing Video

**Risk:** The introduction or product walkthrough is not recorded.

**Fallback:** Remove the video section. Use real screenshots and the architecture diagram.

### Missing Supporting Project Proof

**Risk:** Shopify or general agency work cannot be documented credibly by Monday.

**Fallback:** Keep those projects hidden and launch with three complete projects.

### Unverified Metrics

**Risk:** A number cannot be supported before launch.

**Fallback:** Remove the number and describe the observable result without exaggeration.

### Performance Miss

**Risk:** Heavy motion or embeds prevent the performance gate.

**Fallback:** Remove the optional video, reduce motion code, and prioritize the hiring proof path.

### Production Approval Delay

**Risk:** The portfolio is technically complete but has not received final approval.

**Fallback:** Keep the approved production candidate local. Do not push until explicit approval is given.

## Open Decisions With Safe Defaults

1. **Will the dashboard demo ship Monday?** Default to hidden unless the dedicated runtime passes full QA.
2. **Will the introduction video ship Monday?** Default to hidden unless a finished video is configured.
3. **Will Books remain on the homepage?** Keep them only if page length and performance remain within the launch gates.
4. **Will analytics remain enabled?** Keep analytics optional and do not let it delay launch.

## Definition Of Done

The portfolio is finished for the Monday launch when:

1. The Laravel identity is consistent across the website, social preview, README, and resume.
2. The dashboard case study contains real proof and supports an interview walkthrough.
3. Every visible project is specific, credible, and visually relevant.
4. No broken, empty, misleading, or internal content is public.
5. Contact and resume paths work in private browser sessions.
6. The dashboard demo is either fully working or completely hidden.
7. Automated verification and human QA pass.
8. The user approves the production release.
9. The approved commit is deployed and verified on kelvinperez.com.
10. The portfolio is ready to support active Laravel job applications.

---

**Created:** July 16, 2026

**Status:** Draft, ready for review and implementation planning
