import { NextResponse } from 'next/server';
import { requestDashboardDemoUrl } from '@/lib/dashboard-demo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const noStoreHeaders = {
  'Cache-Control': 'no-store, private, max-age=0',
  Pragma: 'no-cache',
  'X-Robots-Tag': 'noindex, nofollow',
};

function unavailableResponse(): NextResponse {
  return new NextResponse(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dashboard demo unavailable</title>
  </head>
  <body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0812;color:#fff;font-family:system-ui,sans-serif">
    <main style="max-width:36rem;padding:2rem;text-align:center">
      <h1 style="font-size:2rem;margin:0 0 1rem">The dashboard demo is temporarily unavailable</h1>
      <p style="color:#d4d4d8;line-height:1.6">Please try again in a moment. The portfolio is still available while the demo reconnects.</p>
      <a href="/" style="display:inline-block;margin-top:1rem;color:#ddd6fe">Return to the portfolio</a>
    </main>
  </body>
</html>`,
    {
      status: 503,
      headers: {
        ...noStoreHeaders,
        'Content-Type': 'text/html; charset=utf-8',
      },
    },
  );
}

export async function GET(): Promise<NextResponse> {
  const issuerUrl = process.env.DASHBOARD_DEMO_ISSUER_URL ?? '';
  const token = process.env.DASHBOARD_DEMO_TOKEN ?? '';
  const allowedHost = process.env.DASHBOARD_DEMO_ALLOWED_HOST ?? '';
  const requestId = crypto.randomUUID();
  const allowInsecureLocalhost =
    process.env.NODE_ENV !== 'production' &&
    allowedHost.trim().toLowerCase() === 'localhost';
  const result = await requestDashboardDemoUrl({
    issuerUrl,
    token,
    allowedHost,
    requestId,
    allowInsecureLocalhost,
  });

  if (!result.isSuccess || !result.url) {
    console.error('Dashboard demo launch failed', {
      requestId,
      reason: result.reason,
      upstreamStatus: result.upstreamStatus,
    });

    return unavailableResponse();
  }

  const response = NextResponse.redirect(result.url, 302);

  for (const [name, value] of Object.entries(noStoreHeaders)) {
    response.headers.set(name, value);
  }

  return response;
}
