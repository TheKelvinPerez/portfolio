const DASHBOARD_DEMO_ISSUER_PATH = '/api/portfolio-demo/link';
const DASHBOARD_DEMO_ENTRY_PATH = '/demo/enter';
const MAX_SIGNED_URL_LIFETIME_SECONDS = 90;
const DEFAULT_TIMEOUT_IN_MILLISECONDS = 5_000;

export interface DashboardDemoUrlValidationOptions {
  allowedHost: string;
  allowInsecureLocalhost?: boolean;
}

export interface DashboardDemoResponseValidationOptions
  extends DashboardDemoUrlValidationOptions {
  expectedPort: string;
  nowInSeconds?: number;
}

export interface DashboardDemoRequestOptions
  extends DashboardDemoUrlValidationOptions {
  issuerUrl: string;
  token: string;
  requestId: string;
  nowInSeconds?: number;
  timeoutInMilliseconds?: number;
  fetcher?: typeof fetch;
}

export interface DashboardDemoRequestResult {
  isSuccess: boolean;
  url?: string;
  reason?:
    | 'invalid_configuration'
    | 'upstream_unavailable'
    | 'upstream_rejected'
    | 'invalid_response';
  upstreamStatus?: number;
}

function normalizeAllowedHost(allowedHost: string): string {
  const normalizedHost = allowedHost.trim().toLowerCase();

  if (
    normalizedHost === '' ||
    normalizedHost.includes('/') ||
    normalizedHost.includes(':') ||
    normalizedHost.includes('@') ||
    normalizedHost.includes('?') ||
    normalizedHost.includes('#')
  ) {
    throw new Error('The dashboard demo host is invalid.');
  }

  let parsedHost: URL;

  try {
    parsedHost = new URL(`https://${normalizedHost}`);
  } catch {
    throw new Error('The dashboard demo host is invalid.');
  }

  if (
    parsedHost.hostname.toLowerCase() !== normalizedHost ||
    parsedHost.pathname !== '/' ||
    parsedHost.search !== '' ||
    parsedHost.hash !== ''
  ) {
    throw new Error('The dashboard demo host is invalid.');
  }

  return normalizedHost;
}

function parseUrl(url: string): URL {
  try {
    return new URL(url);
  } catch {
    throw new Error('The dashboard demo URL is invalid.');
  }
}

function getEffectivePort(url: URL): string {
  if (url.port !== '') {
    return url.port;
  }

  return url.protocol === 'https:' ? '443' : '80';
}

function assertAllowedOrigin(
  url: URL,
  options: DashboardDemoUrlValidationOptions,
): void {
  const allowedHost = normalizeAllowedHost(options.allowedHost);
  const isHttps = url.protocol === 'https:';
  const isAllowedLocalHttp =
    options.allowInsecureLocalhost === true &&
    allowedHost === 'localhost' &&
    url.protocol === 'http:';

  if (
    (!isHttps && !isAllowedLocalHttp) ||
    url.hostname.toLowerCase() !== allowedHost ||
    url.username !== '' ||
    url.password !== '' ||
    url.hash !== ''
  ) {
    throw new Error('The dashboard demo URL origin is not allowed.');
  }

  if (isHttps && getEffectivePort(url) !== '443') {
    throw new Error('The dashboard demo HTTPS port is not allowed.');
  }
}

export function validateDashboardDemoIssuerUrl(
  issuerUrl: string,
  options: DashboardDemoUrlValidationOptions,
): URL {
  const url = parseUrl(issuerUrl);

  assertAllowedOrigin(url, options);

  if (url.pathname !== DASHBOARD_DEMO_ISSUER_PATH || url.search !== '') {
    throw new Error('The dashboard demo issuer path is not allowed.');
  }

  return url;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function validateDashboardDemoResponse(
  payload: unknown,
  options: DashboardDemoResponseValidationOptions,
): string {
  if (!isRecord(payload)) {
    throw new Error('The dashboard demo response is invalid.');
  }

  const urlValue = payload.url;
  const expiresAtValue = payload.expires_at;

  if (
    typeof urlValue !== 'string' ||
    urlValue === '' ||
    typeof expiresAtValue !== 'string' ||
    expiresAtValue === ''
  ) {
    throw new Error('The dashboard demo response is incomplete.');
  }

  const url = parseUrl(urlValue);

  assertAllowedOrigin(url, options);

  if (
    url.pathname !== DASHBOARD_DEMO_ENTRY_PATH ||
    getEffectivePort(url) !== options.expectedPort
  ) {
    throw new Error('The dashboard demo entry URL is not allowed.');
  }

  const expiresValues = url.searchParams.getAll('expires');
  const signatureValues = url.searchParams.getAll('signature');
  const signedExpiryValue = expiresValues[0];
  const signatureValue = signatureValues[0];

  if (
    expiresValues.length !== 1 ||
    signatureValues.length !== 1 ||
    !/^\d+$/.test(signedExpiryValue ?? '') ||
    !/^[a-f0-9]{64}$/i.test(signatureValue ?? '')
  ) {
    throw new Error('The dashboard demo signature is invalid.');
  }

  const signedExpiryInSeconds = Number(signedExpiryValue);
  const responseExpiryInMilliseconds = Date.parse(expiresAtValue);
  const responseExpiryInSeconds = Math.floor(
    responseExpiryInMilliseconds / 1000,
  );
  const nowInSeconds = options.nowInSeconds ?? Math.floor(Date.now() / 1000);

  if (
    !Number.isSafeInteger(signedExpiryInSeconds) ||
    !Number.isFinite(responseExpiryInMilliseconds) ||
    signedExpiryInSeconds <= nowInSeconds ||
    responseExpiryInSeconds <= nowInSeconds ||
    signedExpiryInSeconds > nowInSeconds + MAX_SIGNED_URL_LIFETIME_SECONDS ||
    responseExpiryInSeconds > nowInSeconds + MAX_SIGNED_URL_LIFETIME_SECONDS ||
    Math.abs(signedExpiryInSeconds - responseExpiryInSeconds) > 1
  ) {
    throw new Error('The dashboard demo URL lifetime is invalid.');
  }

  return urlValue;
}

export async function requestDashboardDemoUrl(
  options: DashboardDemoRequestOptions,
): Promise<DashboardDemoRequestResult> {
  if (options.token.trim() === '' || options.requestId.trim() === '') {
    return {
      isSuccess: false,
      reason: 'invalid_configuration',
    };
  }

  let issuerUrl: URL;

  try {
    issuerUrl = validateDashboardDemoIssuerUrl(options.issuerUrl, options);
  } catch {
    return {
      isSuccess: false,
      reason: 'invalid_configuration',
    };
  }

  const abortController = new AbortController();
  const timeout = setTimeout(
    () => abortController.abort(),
    options.timeoutInMilliseconds ?? DEFAULT_TIMEOUT_IN_MILLISECONDS,
  );

  try {
    const response = await (options.fetcher ?? fetch)(issuerUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${options.token}`,
        'Content-Type': 'application/json',
        'X-Request-ID': options.requestId,
      },
      body: JSON.stringify({
        scenario: 'sales',
        persona: 'admin',
      }),
      cache: 'no-store',
      redirect: 'error',
      signal: abortController.signal,
    });

    if (!response.ok) {
      return {
        isSuccess: false,
        reason: 'upstream_rejected',
        upstreamStatus: response.status,
      };
    }

    let payload: unknown;

    try {
      payload = await response.json();
    } catch {
      return {
        isSuccess: false,
        reason: 'invalid_response',
        upstreamStatus: response.status,
      };
    }

    try {
      return {
        isSuccess: true,
        url: validateDashboardDemoResponse(payload, {
          allowedHost: options.allowedHost,
          allowInsecureLocalhost: options.allowInsecureLocalhost,
          expectedPort: getEffectivePort(issuerUrl),
          nowInSeconds: options.nowInSeconds,
        }),
      };
    } catch {
      return {
        isSuccess: false,
        reason: 'invalid_response',
        upstreamStatus: response.status,
      };
    }
  } catch {
    return {
      isSuccess: false,
      reason: 'upstream_unavailable',
    };
  } finally {
    clearTimeout(timeout);
  }
}
