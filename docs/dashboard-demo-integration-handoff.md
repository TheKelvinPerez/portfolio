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

WordPress stores the raw token. Laravel stores only its lowercase SHA256 hash.

## Portfolio Configuration

Store these values in server environment variables. For WordPress, define them in `wp-config.php` from host environment values. Do not save the token in a page builder, theme setting, custom field, or browser bundle.

```text
DASHBOARD_DEMO_ISSUER_URL=
DASHBOARD_DEMO_TOKEN=
DASHBOARD_DEMO_ALLOWED_HOST=demo.lightcodelabs.ai
```

## Portfolio Server Route

The route must perform these checks before redirecting:

1. Use a five second upstream timeout and disable response caching.
2. Send the bearer token only from server code.
3. Require a successful JSON response containing `url` and `expires_at`.
4. Require HTTPS in production.
5. Require the exact host from `DASHBOARD_DEMO_ALLOWED_HOST`.
6. Require the path `/demo/enter`.
7. Reject a response whose expiry is missing or already passed.
8. Redirect with a temporary status so browsers and CDNs do not cache the signed URL.
9. Return a friendly retry page with HTTP 503 when the issuer is unavailable. Log the upstream status, but never log the bearer token or complete signed URL.

The WordPress integration is implemented as a site plugin at `wordpress/plugins/lightcodelabs-dashboard-demo`. It registers `/dashboard-demo`, performs the server request with `wp_remote_post`, validates the returned signed URL, and redirects with `wp_safe_redirect`.

Install and activate the plugin, then define these values from host environment variables in `wp-config.php`:

```php
define('DASHBOARD_DEMO_ISSUER_URL', getenv('DASHBOARD_DEMO_ISSUER_URL') ?: '');
define('DASHBOARD_DEMO_TOKEN', getenv('DASHBOARD_DEMO_TOKEN') ?: '');
define('DASHBOARD_DEMO_ALLOWED_HOST', getenv('DASHBOARD_DEMO_ALLOWED_HOST') ?: '');
```

Add the permanent button anywhere WordPress accepts a shortcode:

```text
[lightcodelabs_dashboard_demo label="Open dashboard demo"]
```

The shortcode always links to `/dashboard-demo`. It never contains the issuer URL, bearer token, or signed entry URL.

## Button Requirement

Every dashboard demo call to action must use only `/dashboard-demo`. Do not paste a signed dashboard URL into page content, project data, WordPress fields, or frontend code.

## Acceptance Checks

1. Clicking the button in a private browser window opens the dashboard without a login form.
2. Clicking the same permanent button again later produces another working session.
3. The browser source and network requests never reveal `DASHBOARD_DEMO_TOKEN`.
4. A response for any host other than `DASHBOARD_DEMO_ALLOWED_HOST` is rejected.
5. An expired, malformed, or missing issuer response shows the retry page and does not redirect.
6. The portfolio route is not cached by the application, host, or CDN.
7. The dashboard session is visibly marked as demo mode and all mutations and external side effects remain blocked.

## Dashboard Dependency

The dashboard issuer is implemented on the portfolio demo feature branch at `POST /api/portfolio-demo/link`. Keep the public button hidden until the dedicated demo runtime is deployed with the issuer token hash and public demo URL configured. Do not use a manually generated signed URL as a fallback.
