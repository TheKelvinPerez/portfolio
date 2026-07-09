'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (typeof window !== 'undefined' && posthogKey) {
      posthog.init(posthogKey, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        defaults: '2025-05-24',
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
