'use client';

import { useState, useEffect } from 'react';
import { useLoading } from '@/lib/context/LoadingContext';
import { useAssetPreloader } from '@/lib/hooks/useAssetPreloader';
import LoadingScreen from './LoadingScreen';

export function LoadingManager() {
  const { progress, isComplete } = useLoading();
  const [showContent, setShowContent] = useState(false);

  // Initialize asset preloading
  useAssetPreloader();

  // Log when LoadingManager mounts
  useEffect(() => {
    console.log('🎬 LoadingManager: Component mounted');
    console.log('📊 LoadingManager: Initial state:', { progress, isComplete, showContent });

    return () => {
      console.log('🛑 LoadingManager: Component unmounting, restoring scroll');
      // Force restore scroll when component unmounts
      document.body.style.overflow = 'auto';
      console.log('✅ LoadingManager: Scroll restored to auto');
    };
  }, []);

  // Log progress and completion state changes
  useEffect(() => {
    console.log('📈 LoadingManager: State update:', { progress, isComplete, showContent });
  }, [progress, isComplete, showContent]);

  const handleLoadingComplete = () => {
    console.log('🏁 LoadingManager: Loading complete, hiding loading screen');
    setShowContent(true);
    // Explicitly restore scroll when loading completes
    document.body.style.overflow = 'auto';
    console.log('✅ LoadingManager: Scroll restored to auto on completion');
  };

  return (
    <>
      {!showContent && (
        <LoadingScreen
          progress={progress}
          isComplete={isComplete}
          onComplete={handleLoadingComplete}
        />
      )}
    </>
  );
}