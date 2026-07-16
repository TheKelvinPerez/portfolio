# Dashboard Demo Integration Handoff

## Goal

Add one permanent portfolio button that opens a fresh, read only Light Code Labs dashboard demo. The portfolio must never store or expose an expiring signed URL.

## Reviewer Flow

1. The portfolio button always points to the local server route `/dashboard-demo`.
2. The portfolio server sends an authenticated request to the dashboard link issuer.
3. The dashboard returns a signed entry URL that is valid for about 60 seconds.
4. The portfolio validates the returned URL and redirects the reviewer immediately.
5. The dashboard starts a read only demo session that lasts about two hours.

## Dashboard Contract

Request:

```http
POST {DASHBOARD_DEMO_ISSUER_URL}
Authorization: Bearer {DASHBOARD_DEMO_TOKEN}
Accept: application/json
Content-Type: application/json

{
  "scenario": "sales",
  "persona": "admin"
}
```

Successful response:

```json
{
  "url": "https://demo.lightcodelabs.ai/demo/enter?...",
  "expires_at": "2026-07-15T20:30:00Z"
}
```

The dashboard endpoint must rate limit requests, accept only known scenarios and personas, and return a URL for the configured demo host and demo database. The issuer URL itself is a deployment secret and must not be rendered into browser JavaScript.

Configure the dedicated dashboard demo runtime with:

```text
PORTFOLIO_DEMO_URL=https://demo.lightcodelabs.ai
PORTFOLIO_DEMO_ISSUER_TOKEN_HASH=<sha256 of DASHBOARD_DEMO_TOKEN>
PORTFOLIO_DEMO_LINK_LIFETIME=60
```

Next.js stores the raw token in the portfolio server environment. Laravel stores only its lowercase SHA256 hash.

## Portfolio Configuration

Store these values in server environment variables for the Next.js deployment. Do not prefix them with `NEXT_PUBLIC_`, and do not place the token in React props, project data, browser storage, or a client bundle.

```text
DASHBOARD_DEMO_ISSUER_URL=
DASHBOARD_DEMO_TOKEN=
DASHBOARD_DEMO_ALLOWED_HOST=demo.lightcodelabs.ai
```

## Portfolio Server Route

The App Router handler is implemented at `app/dashboard-demo/route.ts`. Its validation and server request logic live in `lib/dashboard-demo.ts`. The public portfolio button always opens `/dashboard-demo`.

The route performs these checks before redirecting:

1. Use a five second upstream timeout and disable response caching.
2. Send the bearer token only from server code.
3. Require a successful JSON response containing `url` and `expires_at`.
4. Require HTTPS in production, while allowing an explicitly configured `localhost` HTTP endpoint during local development.
5. Require the exact host from `DASHBOARD_DEMO_ALLOWED_HOST`.
6. Require the path `/demo/enter`.
7. Reject a response whose expiry is missing or already passed.
8. Redirect with a temporary status so browsers and CDNs do not cache the signed URL.
9. Require the signed query expiry and the JSON `expires_at` value to match within one second.
10. Reject signed URLs that are expired or valid for more than 90 seconds.
11. Redirect with HTTP 302 and explicit private, no store headers.
12. Return a friendly retry page with HTTP 503 when the issuer is unavailable. Log only the request ID, failure reason, and upstream status.

The portfolio server sends the bearer token directly to Laravel. The browser receives only the temporary redirect response, so it never receives the token or issuer response body. CORS is not required because the exchange is server to server.

For local development, create an ignored `.env.local` file:

```text
DASHBOARD_DEMO_ISSUER_URL=http://localhost:8002/api/portfolio-demo/link
DASHBOARD_DEMO_TOKEN=portfolio-demo-local-8002
DASHBOARD_DEMO_ALLOWED_HOST=localhost
```

Production must use the HTTPS demo runtime and its production token:

```text
DASHBOARD_DEMO_ISSUER_URL=https://demo.lightcodelabs.ai/api/portfolio-demo/link
DASHBOARD_DEMO_TOKEN=<production secret>
DASHBOARD_DEMO_ALLOWED_HOST=demo.lightcodelabs.ai
```

## Button Requirement

Every dashboard demo call to action must use only `/dashboard-demo`. Do not paste a signed dashboard URL into page content, project data, React code, or frontend configuration.

## Acceptance Checks

1. Clicking the button in a private browser window opens the dashboard without a login form.
2. Clicking the same permanent button again later produces another working session.
3. The browser source and network requests never reveal `DASHBOARD_DEMO_TOKEN`.
4. A response for any host other than `DASHBOARD_DEMO_ALLOWED_HOST` is rejected.
5. An expired, malformed, or missing issuer response shows the retry page and does not redirect.
6. The portfolio route is not cached by the application, deployment host, or CDN.
7. The dashboard session is visibly marked as demo mode and all mutations and external side effects remain blocked.
8. `bun run test:dashboard-demo` passes before deployment.

## Dashboard Dependency

The Laravel issuer is implemented on the dashboard portfolio demo feature branch at `POST /api/portfolio-demo/link`. Keep the public button hidden until the dedicated demo runtime is deployed with the issuer token hash and public demo URL configured. Do not use a manually generated signed URL as a fallback.
