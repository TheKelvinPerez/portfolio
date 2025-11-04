"use client";

import React, { useEffect, useRef } from "react";
import QuoteCircles from "../../public/images/svg/2nd-quote-circles.svg";
import QuoteBGBlur from "../../public/images/svg/2nd-quote-bg-blur.svg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SecondQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);

  useEffect(() => {
    console.log("SecondQuote: Component mounting and setting up animations");
    if (!containerRef.current || !quoteRef.current) {
      console.log("SecondQuote: Missing refs - containerRef:", !!containerRef.current, "quoteRef:", !!quoteRef.current);
      return;
    }

    // Clean up any existing split text
    if (splitTextRef.current) {
      splitTextRef.current.revert();
    }

    // Create new SplitText instance for words - preserve gradient styling
    splitTextRef.current = SplitText.create(quoteRef.current, {
      type: "words",
      wordsClass: "word"
    });
    console.log("SecondQuote: SplitText created, found", splitTextRef.current.words.length, "words");

    // Set initial states
    gsap.set(backgroundRef.current, { opacity: 0 });
    gsap.set(authorRef.current, { opacity: 0, y: 20 });

    // Apply gradient styling to each word and set initial animation state
    splitTextRef.current.words.forEach((word, index) => {
      word.style.background = 'linear-gradient(to bottom, white, #CC53C7)';
      word.style.webkitBackgroundClip = 'text';
      word.style.backgroundClip = 'text';
      word.style.webkitTextFillColor = 'transparent';
      word.style.color = 'transparent';
      word.style.display = 'inline-block';
      word.style.marginRight = '0.5rem';
      word.style.fontKerning = 'none';
      word.style.textRendering = 'optimizeSpeed';

      gsap.set(word, { opacity: 0, y: 30 });
    });

    // Create staggered animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Animation sequence: background -> staggered words -> author
    tl.to(backgroundRef.current, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    })
    .to(splitTextRef.current.words, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1,
    }, "-=0.6")
    .to(
      authorRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    );

    return () => {
      tl.kill();
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-20 lg:mt-40 min-h-[400px] lg:min-h-[500px]">
      <div className="flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <div
            ref={quoteRef}
            className="bg-gradient-to-b from-white to-[#CC53C7] bg-clip-text text-2xl font-medium text-transparent lg:text-6xl"
            style={{
              fontKerning: 'none',
              textRendering: 'optimizeSpeed'
            }}
          >
            Simplicity is the ultimate sophistication.
          </div>
          <div
            ref={authorRef}
            className="mt-2 text-lg font-extralight text-white/50 lg:text-2xl"
          >
            - Leonardo Da Vinci
          </div>
        </div>
        <div ref={backgroundRef} className="absolute inset-0 z-[1] flex items-center justify-center">
          {/* Background Blur - positioned behind circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={QuoteBGBlur}
              alt="Quote BG Blur"
              width={1200}
              height={600}
              className="object-contain opacity-40"
              style={{ maxWidth: '100vw', maxHeight: '100vh' }}
            />
          </div>
          {/* Circles - centered */}
          <div className="relative z-10 flex items-center justify-center pointer-events-none">
            <Image
              src={QuoteCircles}
              alt="Quote Circles"
              width={800}
              height={400}
              className="object-contain"
              style={{ maxWidth: '80vw', maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
