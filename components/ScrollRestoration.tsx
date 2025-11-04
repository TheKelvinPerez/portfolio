'use client';

import { useEffect } from 'react';
import { useLoading } from '@/lib/context/LoadingContext';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const { isLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Only run scroll restoration on homepage while loading is active
    const isHomepage = pathname === '/';
    if (!isHomepage || !isLoading) {
      return;
    }

    // Store original scroll restoration setting
    const originalScrollRestoration = history.scrollRestoration;

    // Disable scroll restoration for this page load
    history.scrollRestoration = 'manual';

    // Function to force scroll to top
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Scroll to top immediately - this happens while loading screen is visible
    forceScrollToTop();

    // Continue forcing scroll to top while loading screen is active
    // This ensures we stay at top even if browser tries to restore scroll
    const scrollInterval = setInterval(() => {
      forceScrollToTop();
    }, 50); // Every 50ms while loading

    // Listen for loading screen completion to STOP forcing scroll
    const handleLoadingComplete = () => {
      // Stop the interval when loading is complete
      clearInterval(scrollInterval);
    };

    window.addEventListener('loadingScreenComplete', handleLoadingComplete);

    // Restore normal scroll restoration after loading is complete
    const restoreTimeout = setTimeout(() => {
      history.scrollRestoration = originalScrollRestoration;
    }, 1000);

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(restoreTimeout);
      window.removeEventListener('loadingScreenComplete', handleLoadingComplete);
      // Restore original scroll restoration setting
      history.scrollRestoration = originalScrollRestoration;
    };
  }, [pathname, isLoading]);

  return null;
}