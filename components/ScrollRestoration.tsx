'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Store original scroll restoration setting
    const originalScrollRestoration = history.scrollRestoration;

    // Disable scroll restoration for this page load
    history.scrollRestoration = 'manual';

    // Function to force scroll to top
    const forceScrollToTop = () => {
      console.log('📍 ScrollRestoration: Forcing scroll to top (during loading)');
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
      console.log('📍 ScrollRestoration: Loading screen completed, stopping forced scroll');
      // Stop the interval when loading is complete
      clearInterval(scrollInterval);
    };

    window.addEventListener('loadingScreenComplete', handleLoadingComplete);

    // Restore normal scroll restoration after loading is complete
    const restoreTimeout = setTimeout(() => {
      history.scrollRestoration = originalScrollRestoration;
      console.log('📍 ScrollRestoration: Restored normal scroll restoration');
    }, 1000); // 1 second is enough now

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(restoreTimeout);
      window.removeEventListener('loadingScreenComplete', handleLoadingComplete);
      // Restore original scroll restoration setting
      history.scrollRestoration = originalScrollRestoration;
    };
  }, []);

  return null;
}