'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import KelvinPerezPFP from '@/public/images/jpeg/TKP-PFP.jpeg';

const letterContent = [
  { type: 'paragraph', text: "What's Up Everyone, I'm Kelvin Perez from Miami, FL" },
  { type: 'paragraph', text: "My journey started in 2015 when I discovered the Learn to Code movement. I dove headfirst into web development, starting with WordPress and PHP internships, then moving into e-commerce and marketing agency work." },
  { type: 'paragraph', text: "In 2020, I pivoted to indie hacking and built a Chrome extension for Amazon dropshipping that grew to $20K MRR. Then came the crypto era in 2021 - successful, but it led to complete burnout." },
  { type: 'paragraph', text: "So I took a radical step: a two-year sabbatical traveling the world, focusing on healing and rediscovery. When I returned, I dove deep into AI - RAG, LLMs, model architectures - seeing the bigger picture of where tech was heading." },
  { type: 'paragraph', text: "Then came the full circle moment. Building my father's HVAC website brought me back to WordPress, and everything clicked. This time, I could see how it all interconnects - React, TypeScript, Tailwind, modern JavaScript frameworks, headless architecture. I fell in love with WordPress all over again, but with a complete understanding of the modern ecosystem." },
  { type: 'paragraph', text: "Now I'm back in the mix, specializing in:" },
  { type: 'list', items: [
    "WordPress & PHP Full-Stack Development with Modern JavaScript",
    "Custom Theme & Plugin Development",
    "AI Integration (RAG, LLMs, Context-Aware Systems)",
    "E-commerce Solutions (WooCommerce, Shopify)",
    "Headless WordPress & React Integration"
  ]},
  { type: 'paragraph', text: "I bridge traditional WordPress development with cutting-edge technologies, creating scalable solutions that are technically robust and built for real-world business needs. The journey from novice developer to building $20K MRR products, healing from burnout, and mastering AI has given me a unique perspective on both the technical and human side of building technology that matters." },
  { type: 'paragraph', text: "Let's build the future together." },
  { type: 'closing', text: "Wholeness & Balanced Vibrations 🙏" },
  { type: 'signature', name: "Kelvin Perez" },
  { type: 'footer', name: "Kelvin Perez", title: "WordPress & PHP Full-Stack Developer" }
];

export default function Letter() {
  const [displayedContent, setDisplayedContent] = useState<any[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentSectionIndex(0);
      setCurrentCharIndex(0);
      setDisplayedContent([]);
    };

    // Listen for custom event to start typing
    window.addEventListener('startTypewriter', startTyping);

    return () => {
      window.removeEventListener('startTypewriter', startTyping);
    };
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    const typeNextChar = () => {
      if (currentSectionIndex < letterContent.length) {
        const currentSection = letterContent[currentSectionIndex];

        setDisplayedContent(prev => {
          const newContent = [...prev];

          // Initialize section if it doesn't exist
          if (!newContent[currentSectionIndex]) {
            if (currentSection.type === 'paragraph') {
              newContent[currentSectionIndex] = { type: 'paragraph', text: '', complete: false };
            } else if (currentSection.type === 'list') {
              newContent[currentSectionIndex] = { type: 'list', items: [], complete: false };
            } else if (currentSection.type === 'closing') {
              newContent[currentSectionIndex] = { type: 'closing', text: '', complete: false };
            } else if (currentSection.type === 'signature') {
              newContent[currentSectionIndex] = { type: 'signature', name: '', complete: false };
            } else if (currentSection.type === 'footer') {
              newContent[currentSectionIndex] = { type: 'footer', name: '', title: '', complete: false };
            }
          }

          // Type content based on section type
          if (currentSection.type === 'paragraph' || currentSection.type === 'closing') {
            if (currentCharIndex < currentSection.text.length) {
              newContent[currentSectionIndex].text = currentSection.text.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'signature') {
            if (currentCharIndex < currentSection.name.length) {
              newContent[currentSectionIndex].name = currentSection.name.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'footer') {
            if (currentCharIndex < currentSection.name.length) {
              newContent[currentSectionIndex].name = currentSection.name.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else if (currentCharIndex - currentSection.name.length < currentSection.title.length) {
              const titleProgress = currentCharIndex - currentSection.name.length;
              newContent[currentSectionIndex].title = currentSection.title.substring(0, titleProgress + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'list') {
            const totalText = currentSection.items.join('\n');
            if (currentCharIndex < totalText.length) {
              const typedText = totalText.substring(0, currentCharIndex + 1);
              const typedItems = typedText.split('\n');
              newContent[currentSectionIndex].items = typedItems;
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else {
            // Skip completed sections
            newContent[currentSectionIndex] = { ...currentSection, complete: true };
            setCurrentSectionIndex(currentSectionIndex + 1);
            setCurrentCharIndex(0);
          }

          return newContent;
        });
      } else {
        setIsTyping(false);
      }
    };

    const typingSpeed = 8; // Faster typing speed
    const timer = setTimeout(typeNextChar, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentSectionIndex, currentCharIndex, isTyping]);

  const Cursor = () => (
    <span
      className="inline-block w-4 h-7 bg-white ml-1 animate-pulse"
      style={{
        verticalAlign: 'text-bottom',
        backgroundColor: 'white',
        borderRadius: '2px'
      }}
    />
  );

  const GradientFade = ({ children, isActive, baseOpacity = 0.8 }: { children: React.ReactNode; isActive: boolean; baseOpacity?: number }) => {
    if (!isActive) return children;

    return (
      <span
        style={{
          background: `linear-gradient(to right,
            rgba(255,255,255,${baseOpacity}) 0%,
            rgba(255,255,255,${baseOpacity}) 70%,
            rgba(255,255,255,${baseOpacity * 0.8}) 85%,
            rgba(255,255,255,${baseOpacity * 0.3}) 95%,
            rgba(255,255,255,0) 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))'
        }}
      >
        {children}
      </span>
    );
  };

  return (
    <div className="relative px-5 lg:px-0">
      <div className="my-8 flex justify-center" data-gsap="about-profile-pic">
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
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl" data-gsap="about-letter">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <div className="space-y-4">
              {displayedContent.map((section, index) => {
                const isCurrentSection = isTyping && index === currentSectionIndex;

                if (section.type === 'paragraph') {
                  return (
                    <p key={index} className="leading-relaxed">
                      <GradientFade isActive={isCurrentSection}>
                        {section.text}
                      </GradientFade>
                      {isCurrentSection && <Cursor />}
                    </p>
                  );
                }

                if (section.type === 'list') {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2">
                      {section.items.map((item: string, itemIndex: number) => {
                        const isCurrentItem = isCurrentSection && itemIndex === section.items.length - 1 && item.length > 0;
                        return (
                          <li key={itemIndex} className="leading-relaxed">
                            <GradientFade isActive={isCurrentItem}>
                              {item}
                            </GradientFade>
                            {isCurrentItem && <Cursor />}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }

                return null;
              })}
            </div>

            {/* Closing section */}
            {displayedContent.some(section => section.type === 'closing') && (
              <div className="relative flex flex-col items-center gap-2">
                {displayedContent.map((section, index) => {
                  if (section.type === 'closing') {
                    const isCurrentSection = isTyping && index === currentSectionIndex;
                    return (
                      <div key={index} className="self-start">
                        <GradientFade isActive={isCurrentSection}>
                          {section.text}
                        </GradientFade>
                        {isCurrentSection && <Cursor />}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {/* Signature section */}
            {displayedContent.some(section => section.type === 'signature') && (
              <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
                {displayedContent.map((section, index) => {
                  if (section.type === 'signature') {
                    const isCurrentSection = isTyping && index === currentSectionIndex;
                    return (
                      <div key={index} className="text-white">
                        <GradientFade isActive={isCurrentSection} baseOpacity={1}>
                          {section.name}
                        </GradientFade>
                        {isCurrentSection && <Cursor />}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {/* Footer section */}
            {displayedContent.some(section => section.type === 'footer') && (
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
                  {displayedContent.map((section, index) => {
                    if (section.type === 'footer') {
                      const isCurrentSection = isTyping && index === currentSectionIndex;
                      const isTypingName = isCurrentSection && !section.title;
                      const isTypingTitle = isCurrentSection && section.title;
                      return (
                        <div key={index}>
                          <div className="text-xl font-semibold text-white lg:text-2xl">
                            <GradientFade isActive={isTypingName} baseOpacity={1}>
                              {section.name}
                            </GradientFade>
                            {isTypingName && <Cursor />}
                          </div>
                          <div className="text-[12px] lg:text-lg">
                            <GradientFade isActive={isTypingTitle} baseOpacity={0.8}>
                              {section.title}
                            </GradientFade>
                            {isTypingTitle && <Cursor />}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}