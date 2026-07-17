import assert from 'node:assert/strict';
import test from 'node:test';
import {
  requestDashboardDemoUrl,
  validateDashboardDemoIssuerUrl,
  validateDashboardDemoResponse,
} from '../lib/dashboard-demo';

const nowInSeconds = 1_800_000_000;
const signature = 'a'.repeat(64);

function buildPayload(
  overrides: Partial<{ url: string; expires_at: string }> = {},
) {
  const expiresInSeconds = nowInSeconds + 60;

  return {
    url: `https://app.lightcodelabs.ai/demo/enter?expires=${expiresInSeconds}&scenario=sales&persona=admin&signature=${signature}`,
    expires_at: new Date(expiresInSeconds * 1000).toISOString(),
    ...overrides,
  };
}

test('accepts the configured HTTPS issuer endpoint', () => {
  const issuerUrl = validateDashboardDemoIssuerUrl(
    'https://app.lightcodelabs.ai/api/portfolio-demo/link',
    {
      allowedHost: 'app.lightcodelabs.ai',
    },
  );

  assert.equal(
    issuerUrl.toString(),
    'https://app.lightcodelabs.ai/api/portfolio-demo/link',
  );
});

test('rejects an issuer endpoint on an unexpected host', () => {
  assert.throws(() =>
    validateDashboardDemoIssuerUrl(
      'https://attacker.example/api/portfolio-demo/link',
      {
        allowedHost: 'app.lightcodelabs.ai',
      },
    ),
  );
});

test('rejects an insecure production issuer endpoint', () => {
  assert.throws(() =>
    validateDashboardDemoIssuerUrl(
      'http://app.lightcodelabs.ai/api/portfolio-demo/link',
      {
        allowedHost: 'app.lightcodelabs.ai',
      },
    ),
  );
});

test('accepts a valid short lived dashboard entry URL', () => {
  const url = validateDashboardDemoResponse(buildPayload(), {
    allowedHost: 'app.lightcodelabs.ai',
    expectedPort: '443',
    nowInSeconds,
  });

  assert.equal(url, buildPayload().url);
});

test('rejects an entry URL on an unexpected host', () => {
  const payload = buildPayload({
    url: buildPayload().url.replace(
      'app.lightcodelabs.ai',
      'attacker.example',
    ),
  });

  assert.throws(() =>
    validateDashboardDemoResponse(payload, {
      allowedHost: 'app.lightcodelabs.ai',
      expectedPort: '443',
      nowInSeconds,
    }),
  );
});

test('rejects an entry URL with an unexpected path', () => {
  const payload = buildPayload({
    url: buildPayload().url.replace('/demo/enter', '/login'),
  });

  assert.throws(() =>
    validateDashboardDemoResponse(payload, {
      allowedHost: 'app.lightcodelabs.ai',
      expectedPort: '443',
      nowInSeconds,
    }),
  );
});

test('rejects an insecure entry URL and an unexpected HTTPS port', () => {
  const insecurePayload = buildPayload({
    url: buildPayload().url.replace('https://', 'http://'),
  });
  const unexpectedPortPayload = buildPayload({
    url: buildPayload().url.replace(
      'app.lightcodelabs.ai',
      'app.lightcodelabs.ai:8443',
    ),
  });

  assert.throws(() =>
    validateDashboardDemoResponse(insecurePayload, {
      allowedHost: 'app.lightcodelabs.ai',
      expectedPort: '443',
      nowInSeconds,
    }),
  );
  assert.throws(() =>
    validateDashboardDemoResponse(unexpectedPortPayload, {
      allowedHost: 'app.lightcodelabs.ai',
      expectedPort: '443',
      nowInSeconds,
    }),
  );
});

test('rejects duplicate signatures and mismatched expiry values', () => {
  const duplicateSignaturePayload = buildPayload({
    url: `${buildPayload().url}&signature=${signature}`,
  });
  const mismatchedExpiryPayload = buildPayload({
    expires_at: new Date((nowInSeconds + 30) * 1000).toISOString(),
  });

  assert.throws(() =>
    validateDashboardDemoResponse(duplicateSignaturePayload, {
      allowedHost: 'app.lightcodelabs.ai',
      expectedPort: '443',
      nowInSeconds,
    }),
  );
  assert.throws(() =>
    validateDashboardDemoResponse(mismatchedExpiryPayload, {
      allowedHost: 'app.lightcodelabs.ai',
      expectedPort: '443',
      nowInSeconds,
    }),
  );
});

test('rejects expired and excessive entry lifetimes', () => {
  const expired = nowInSeconds - 1;
  const excessive = nowInSeconds + 300;

  assert.throws(() =>
    validateDashboardDemoResponse(
      buildPayload({
        url: buildPayload().url.replace(
          String(nowInSeconds + 60),
          String(expired),
        ),
        expires_at: new Date(expired * 1000).toISOString(),
      }),
      {
        allowedHost: 'app.lightcodelabs.ai',
        expectedPort: '443',
        nowInSeconds,
      },
    ),
  );

  assert.throws(() =>
    validateDashboardDemoResponse(
      buildPayload({
        url: buildPayload().url.replace(
          String(nowInSeconds + 60),
          String(excessive),
        ),
        expires_at: new Date(excessive * 1000).toISOString(),
      }),
      {
        allowedHost: 'app.lightcodelabs.ai',
        expectedPort: '443',
        nowInSeconds,
      },
    ),
  );
});

test('keeps the bearer token in the server request and returns the validated URL', async () => {
  let capturedInput: string | URL | Request = '';
  let capturedInit: RequestInit | undefined;

  const fetcher = (async (
    input: string | URL | Request,
    init?: RequestInit,
  ) => {
    capturedInput = input;
    capturedInit = init;

    return new Response(JSON.stringify(buildPayload()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }) as typeof fetch;

  const result = await requestDashboardDemoUrl({
    issuerUrl: 'https://app.lightcodelabs.ai/api/portfolio-demo/link',
    token: 'server-secret',
    allowedHost: 'app.lightcodelabs.ai',
    requestId: 'request-123',
    nowInSeconds,
    fetcher,
  });

  assert.equal(result.isSuccess, true);
  assert.equal(result.url, buildPayload().url);
  assert.equal(
    capturedInput.toString(),
    'https://app.lightcodelabs.ai/api/portfolio-demo/link',
  );
  assert.equal(
    new Headers(capturedInit?.headers).get('Authorization'),
    'Bearer server-secret',
  );
  assert.equal(capturedInit?.cache, 'no-store');
  assert.equal(capturedInit?.redirect, 'error');
  assert.equal(
    capturedInit?.body,
    JSON.stringify({ scenario: 'sales', persona: 'admin' }),
  );
});

test('does not call the issuer when configuration is unsafe', async () => {
  let wasCalled = false;
  const fetcher = (async () => {
    wasCalled = true;
    return new Response();
  }) as typeof fetch;

  const result = await requestDashboardDemoUrl({
    issuerUrl: 'https://attacker.example/api/portfolio-demo/link',
    token: 'server-secret',
    allowedHost: 'app.lightcodelabs.ai',
    requestId: 'request-123',
    nowInSeconds,
    fetcher,
  });

  assert.equal(result.isSuccess, false);
  assert.equal(result.reason, 'invalid_configuration');
  assert.equal(wasCalled, false);
});

test('returns the upstream status without exposing the response body', async () => {
  const result = await requestDashboardDemoUrl({
    issuerUrl: 'https://app.lightcodelabs.ai/api/portfolio-demo/link',
    token: 'server-secret',
    allowedHost: 'app.lightcodelabs.ai',
    requestId: 'request-123',
    nowInSeconds,
    fetcher: (async () =>
      new Response(JSON.stringify({ token: 'must-not-be-returned' }), {
        status: 429,
      })) as typeof fetch,
  });

  assert.deepEqual(result, {
    isSuccess: false,
    reason: 'upstream_rejected',
    upstreamStatus: 429,
  });
});

test('allows a localhost issuer only when local HTTP is explicitly enabled', async () => {
  const localExpiresInSeconds = nowInSeconds + 60;
  const localPayload = {
    url: `http://localhost:8002/demo/enter?expires=${localExpiresInSeconds}&scenario=sales&persona=admin&signature=${signature}`,
    expires_at: new Date(localExpiresInSeconds * 1000).toISOString(),
  };

  const result = await requestDashboardDemoUrl({
    issuerUrl: 'http://localhost:8002/api/portfolio-demo/link',
    token: 'server-secret',
    allowedHost: 'localhost',
    requestId: 'request-123',
    nowInSeconds,
    allowInsecureLocalhost: true,
    fetcher: (async () =>
      new Response(JSON.stringify(localPayload), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })) as typeof fetch,
  });

  assert.equal(result.isSuccess, true);
  assert.equal(result.url, localPayload.url);
});
