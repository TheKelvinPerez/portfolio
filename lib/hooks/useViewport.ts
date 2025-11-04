'use client';

import { useEffect, useState } from 'react';

interface ViewportDimensions {
  width: number;
  height: number;
}

export function useViewport() {
  const [dimensions, setDimensions] = useState<ViewportDimensions>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Use actual dimensions instead of hardcoded values
        const calculatedDimensions = {
          width: width,
          height: height,
        };

        console.log('useViewport - Update:', {
          actualWidth: width,
          actualHeight: height,
          calculatedWidth: calculatedDimensions.width,
          calculatedHeight: calculatedDimensions.height,
          difference: width - calculatedDimensions.width,
          isMobile: width <= 768
        });

        setDimensions(calculatedDimensions);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}