import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
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
              My journey started back in 2015 when I stumbled upon the Learn to
              Code movement. I watched a video about coding that completely
              changed my perspective, and I dove headfirst into web
              technologies. As a novice developer, I was absorbing everything I
              could about HTML, CSS, JavaScript - the fundamentals.
            </p>
            <p>
              That early passion led me to land an internship working with
              WordPress, Shopify, and PHP for an e-commerce store. I was
              learning on the job, building real solutions for real businesses.
              From there, I moved into working with marketing companies, honing
              my skills in the fast-paced world of client work and
              campaign-driven development.
            </p>
            <p>
              Then 2020 hit. COVID changed everything, and I pivoted hard into
              indie hacking. I built a Chrome extension for Amazon dropshipping
              - a beast of a project that scraped 400+ Amazon pages. It was an
              intense technical challenge, but the hustle paid off. That
              extension grew to $20K MRR. But after some time, I parted ways
              with my business partner and moved on to my next chapter.
            </p>
            <p>
              2021 was my crypto era. I dove deep into the space and became
              really successful. But that success came at a brutal cost -
              burnout hit me like a freight train. I was completely fried, lost,
              shipwrecked at sea with no boat.
            </p>
            <p>
              So I did something radical. I took a sabbatical and traveled the
              world. For two years, I focused entirely on my well-being,
              consciousness, health, and mental health. It was a spiritual
              journey of healing and rediscovery. I was so broken I honestly
              didn&apos;t even want to code anymore.
            </p>
            <p>
              But eventually, I found my way back to myself. When I returned, I
              became obsessed with AI - diving deep into RAG, LLMs, context
              windows, different model architectures. I was learning how all
              these pieces interconnect, seeing the bigger picture of where
              technology was heading. I even started live streaming my coding
              journey for a while.
            </p>
            <p>
              Then came the full circle moment. My father, who runs an HVAC air
              conditioning company, needed a website. I looked at all the modern
              tools and technologies available, but what really called to me was
              WordPress - the very platform where I had started my journey as a
              junior developer.
            </p>
            <p>
              It was like coming home. I initially built the site in Astro, but
              then rebuilt it in WordPress - and honestly, the WordPress version
              turned out even better. Using Advanced Custom Fields, custom
              templates, and dynamic rewrite rules, I was able to generate 480+
              pages dynamically. The power and flexibility blew me away.
            </p>
            <p>
              This is when everything clicked. I almost fell in love with
              WordPress all over again. But this time was different - I could
              see the full picture. The React ecosystem, modern JavaScript,
              TypeScript, Tailwind CSS, Vite as your bundler - it all
              interconnects with WordPress in ways I couldn&apos;t comprehend as
              a junior developer.
            </p>
            <p>
              Now I see so much potential in WordPress. The modern WordPress
              ecosystem with Gutenberg blocks, React-based editors, headless CMS
              architecture, custom blocks consuming REST APIs - it&apos;s not
              just powerful, it&apos;s transformative. The intersection of
              traditional CMS power and modern JavaScript frameworks is where I
              thrive.
            </p>
            <p>So, now I&apos;m back in the mix, wearing a bunch of hats:</p>
            <ul className="list-disc pl-6">
              <li>
                WordPress & PHP Full-Stack Developer with Modern JavaScript
                Expertise
              </li>
              <li>Custom Theme & Plugin Developer</li>
              <li>
                AI Integration Specialist (RAG, LLMs, Context-Aware Systems)
              </li>
              <li>E-commerce Solutions Architect (WooCommerce, Shopify)</li>
              <li>Headless WordPress & React Integration Expert</li>
            </ul>
            <p>
              My mission is to bridge traditional WordPress development with
              cutting-edge technologies - React, TypeScript, AI, and modern
              build tools. I create powerful end-to-end solutions that are
              technically robust, scalable, performant, and meaningfully crafted
              for real-world business needs.
            </p>
            <p>
              The journey from novice developer watching YouTube tutorials to
              building $20K MRR products, exploring crypto, healing from
              burnout, mastering AI, and coming full circle back to WordPress
              has given me a unique perspective. I understand the full stack -
              not just technically, but the human side of building technology
              that matters.
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
                <Image src={AquaWolfPFP} alt="Kelvin Perez PFP" />
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
