import React from 'react';
import Image from 'next/image';
import KelvinPerezPFP from '@/public/images/jpeg/TKP-PFP.jpeg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <div className="my-8 flex justify-center">
        <Image
          src={KelvinPerezPFP}
          alt="Kelvin Perez"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>What&apos;s Up Everyone, I&apos;m Kelvin Perez from Miami, FL</p>
            <p>
              My journey started in 2015 when I discovered the Learn to Code
              movement. I dove headfirst into web development, starting with
              WordPress and PHP internships, then moving into e-commerce and
              marketing agency work.
            </p>
            <p>
              In 2020, I pivoted to indie hacking and built a Chrome extension
              for Amazon dropshipping that grew to $20K MRR. Then came the
              crypto era in 2021 - successful, but it led to complete burnout.
            </p>
            <p>
              So I took a radical step: a two-year sabbatical traveling the
              world, focusing on healing and rediscovery. When I returned, I
              dove deep into AI - RAG, LLMs, model architectures - seeing the
              bigger picture of where tech was heading.
            </p>
            <p>
              Then came the full circle moment. Building my father&apos;s HVAC
              website brought me back to WordPress, and everything clicked. This
              time, I could see how it all interconnects - React, TypeScript,
              Tailwind, modern JavaScript frameworks, headless architecture. I
              fell in love with WordPress all over again, but with a complete
              understanding of the modern ecosystem.
            </p>
            <p>Now I&apos;m back in the mix, specializing in:</p>
            <ul className="list-disc pl-6">
              <li>
                WordPress & PHP Full-Stack Development with Modern JavaScript
              </li>
              <li>Custom Theme & Plugin Development</li>
              <li>
                AI Integration (RAG, LLMs, Context-Aware Systems)
              </li>
              <li>E-commerce Solutions (WooCommerce, Shopify)</li>
              <li>Headless WordPress & React Integration</li>
            </ul>
            <p>
              I bridge traditional WordPress development with cutting-edge
              technologies, creating scalable solutions that are technically
              robust and built for real-world business needs. The journey from
              novice developer to building $20K MRR products, healing from
              burnout, and mastering AI has given me a unique perspective on
              both the technical and human side of building technology that
              matters.
            </p>
            <p>Let&apos;s build the future together.</p>
            <div className="relative flex flex-col items-center gap-2">
              <div className="self-start">
                Wholeness & Balanced Vibrations 🙏
              </div>
            </div>
            <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
              <div className="text-white">Kelvin Perez</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Image
                  src={KelvinPerezPFP}
                  alt="Kelvin Perez PFP"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div className="lg:ml-4">
                <div className="text-xl font-semibold text-white lg:text-2xl">
                  Kelvin Perez
                </div>
                <div className="text-[12px] lg:text-lg">
                  WordPress & PHP Full-Stack Developer
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
