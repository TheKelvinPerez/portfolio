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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Force restore scroll when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
    // Explicitly restore scroll when loading completes
    document.body.style.overflow = 'auto';
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