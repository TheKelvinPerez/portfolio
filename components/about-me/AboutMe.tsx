import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';

export default function AboutMe() {
  return (
    <div id="about" className="mx-auto max-w-[1000px] px-4 mt-40">
      <SectionHeading
        heading="Who is Kelvin Perez?"
        subheading="8+ Years of Experience: WordPress & PHP Full-Stack Developer with expertise in React"
      />
      <Letter />
    </div>
  );
}
