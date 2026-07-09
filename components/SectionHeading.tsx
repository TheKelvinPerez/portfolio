import React from 'react';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  animationId?: string;
}

export default function SectionHeading({
  heading,
  subheading,
  animationId,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 text-white lg:mb-12">
      <h2 
        className="mb-3 text-center text-3xl font-bold leading-tight text-white md:text-4xl"
        {...(animationId && { 'data-gsap': `${animationId}-heading` })}
      >
        {heading}
      </h2>
      {subheading && (
        <p 
          className="mx-auto max-w-4xl text-center text-base leading-7 text-gray-300/80 lg:text-lg"
          {...(animationId && { 'data-gsap': `${animationId}-subheading` })}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
