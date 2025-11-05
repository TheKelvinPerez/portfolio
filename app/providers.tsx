'use client'

import { useEffect } from "react"
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize PostHog with Partytown support
    if (typeof window !== 'undefined') {
      console.log('PostHog: Initializing with Partytown support');
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        defaults: '2025-05-24',
        // Enable Partytown support
        loaded: () => {
          console.log('✅ PostHog loaded successfully');
          // Make posthog available globally for testing
          window.posthog = posthog;
          console.log('✅ PostHog available globally as window.posthog');

          // Add test method to check if it's working
          window.testPostHog = () => {
            if (window.posthog && typeof window.posthog.capture === 'function') {
              window.posthog.capture('console_test_event', {
                test: 'Testing from console',
                timestamp: new Date().toISOString()
              });
              console.log('✅ PostHog test event sent successfully!');
            } else {
              console.log('❌ PostHog not ready yet, please wait a moment and try again');
            }
          };
          console.log('💡 Use window.testPostHog() to test PostHog from console');
        }
      })
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}