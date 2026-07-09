'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Stats } from '@/components/ui/stats-section';

export default function ImpactMetrics() {
  return (
    <div className="mx-auto mt-20 w-full max-w-7xl px-4">
      <SectionHeading
        heading="Proof Points"
        subheading="The short version of what the portfolio is meant to prove"
        animationId="impact-metrics"
      />
      <Stats />
    </div>
  );
}
