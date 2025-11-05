'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Stats } from '@/components/ui/stats-section';

export default function ImpactMetrics() {
  return (
    <div className="mx-auto mt-20 w-full max-w-7xl px-4">
      <SectionHeading
        heading="By The Numbers"
        subheading="Measurable impact delivering enterprise-level WordPress solutions"
        animationId="impact-metrics"
      />
      <Stats />
    </div>
  );
}
