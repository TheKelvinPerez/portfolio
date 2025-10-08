'use client';

import { GodRays } from '@paper-design/shaders-react';
import { useViewport } from '@/lib/hooks/useViewport';

export default function ResponsiveGodRays() {
  const { width, height } = useViewport();

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 -z-10 h-[100dvh] w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
      }}
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
    </div>
  );
}

