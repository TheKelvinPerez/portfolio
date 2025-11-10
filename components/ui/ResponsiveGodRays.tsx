'use client';

import { GodRays } from '@paper-design/shaders-react';
import { useViewport } from '@/lib/hooks/useViewport';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { useLoading } from '@/lib/context/LoadingContext';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ResponsiveGodRays() {
  const { width, height } = useViewport();
  const { isComplete: loadingComplete, setAssetLoaded } = useLoading();
  const [canAnimate, setCanAnimate] = useState(false);

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  // Check if mobile device (768px and below)
  const isMobile = width <= 768;

  // Mark shader as loaded with realistic timing
  useEffect(() => {
    const shaderLoadTimer = setTimeout(() => {
      setAssetLoaded('god-rays-shader');
    }, 800);

    return () => clearTimeout(shaderLoadTimer);
  }, [setAssetLoaded]);

  // Listen for loadingScreenComplete event
  useEffect(() => {
    const handleLoadingComplete = () => {
      setCanAnimate(true);
    };

    window.addEventListener('loadingScreenComplete', handleLoadingComplete);

    if (loadingComplete) {
      setCanAnimate(true);
    }

    return () => {
      window.removeEventListener('loadingScreenComplete', handleLoadingComplete);
    };
  }, [loadingComplete]);

  // Only render shader when it should be active and not on mobile
  const shouldRenderShader = canAnimate && isIntersecting && !isMobile;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="pointer-events-none absolute left-0 top-0 -z-10 h-[100dvh] w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
      }}
    >
      <AnimatePresence mode="wait">
        {isMobile ? (
          // Mobile: Show static background image
          <motion.div
            key="mobile-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/jpeg/GodRaysMobileBg.jpg)',
              }}
            />
          </motion.div>
        ) : (
          // Desktop: Show shader
          shouldRenderShader && (
            <motion.div
              key="god-rays-shader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <GodRays
                width={width}
                height={height}
                colors={['#a600ff6e', '#6200fff0', '#ffffff', '#33fff5']}
                colorBack="#000000"
                colorBloom="#0000ff"
                bloom={0.4}
                intensity={0.8}
                density={0.3}
                spotty={0.3}
                midSize={0.2}
                midIntensity={0.4}
                speed={0.75}
                offsetY={-0.55}
              />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

