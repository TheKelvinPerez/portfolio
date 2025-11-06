'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import KelvinPerezPFP from '@/public/images/jpeg/TKP-PFP.jpeg';

const letterContent = [
  {
    type: 'paragraph',
    text: "Hey, I'm Kelvin Perez from Miami, FL",
  },
  {
    type: 'paragraph',
    text: "I'm a Senior WordPress Developer with 8+ years delivering high-performance solutions for agencies and multi-location businesses. My journey started in 2015 at Broward College, then diving into WordPress and PHP at Digital Age Marketing Group, then founding ViViFi agency in 2019 where I delivered 12+ websites with 100% client satisfaction.",
  },
  {
    type: 'paragraph',
    text: 'Between agency work, I built a Chrome extension that hit $20K MRR and launched NFT projects generating $28M+ in sales. After burnout, I traveled the world for two years, then dove deep into AI - RAG systems, LLMs, and modern architectures.',
  },
  {
    type: 'paragraph',
    text: "The full circle moment came building my father's HVAC site SunnySide247ac.com. I architected a WordPress custom theme automating 487 pages with ACF Pro, cutting content creation by 90%, generating $50K-$100K annual SEO value, and achieving 1ms response times with 100/100 PageSpeed scores.",
  },
  { type: 'paragraph', text: "Now I'm specializing in:" },
  {
    type: 'list',
    items: [
      'WordPress & PHP Development (PHP 8.3+, ACF Pro, Custom Themes & Plugins)',
      'Modern Front-End (React, Next.js, TypeScript, Tailwind CSS)',
      'E-commerce (WooCommerce, Payment Gateways, CRM Integration)',
      'Performance & DevOps (Docker, Redis, CDN, Core Web Vitals)',
      'SEO & Analytics (Technical SEO, Schema Markup, Local SEO)',
      'AI Integration (RAG, LLMs, Automation)',
    ],
  },
  {
    type: 'paragraph',
    text: 'I thrive in collaborative agency environments, managing projects while partnering with designers, marketers and stake holders. My diverse journey has given me a unique perspective on creating technically robust solutions for real-world business needs.',
  },
  { type: 'paragraph', text: "Let's build something amazing together." },
  { type: 'closing', text: 'Wholeness & Balanced Vibrations 🙏' },
  { type: 'signature', name: 'Kelvin Perez' },
  {
    type: 'footer',
    name: 'Kelvin Perez',
    title: 'Senior WordPress Developer & Full-Stack Engineer',
  },
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

        setDisplayedContent((prev) => {
          const newContent = [...prev];

          // Initialize section if it doesn't exist
          if (!newContent[currentSectionIndex]) {
            if (currentSection.type === 'paragraph') {
              newContent[currentSectionIndex] = {
                type: 'paragraph',
                text: '',
                complete: false,
              };
            } else if (currentSection.type === 'list') {
              newContent[currentSectionIndex] = {
                type: 'list',
                items: [],
                complete: false,
              };
            } else if (currentSection.type === 'closing') {
              newContent[currentSectionIndex] = {
                type: 'closing',
                text: '',
                complete: false,
              };
            } else if (currentSection.type === 'signature') {
              newContent[currentSectionIndex] = {
                type: 'signature',
                name: '',
                complete: false,
              };
            } else if (currentSection.type === 'footer') {
              newContent[currentSectionIndex] = {
                type: 'footer',
                name: '',
                title: '',
                complete: false,
              };
            }
          }

          // Type content based on section type
          if (
            currentSection.type === 'paragraph' ||
            currentSection.type === 'closing'
          ) {
            if (
              currentSection.text &&
              currentCharIndex < currentSection.text.length
            ) {
              newContent[currentSectionIndex].text =
                currentSection.text!.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'signature') {
            if (
              currentSection.text &&
              currentCharIndex < currentSection.text.length
            ) {
              newContent[currentSectionIndex].text =
                currentSection.text!.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'signature') {
            if (
              currentSection.name &&
              currentCharIndex < currentSection.name.length
            ) {
              newContent[currentSectionIndex].name =
                currentSection.name!.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'footer') {
            if (
              currentSection.name &&
              currentCharIndex < currentSection.name.length
            ) {
              newContent[currentSectionIndex].name =
                currentSection.name!.substring(0, currentCharIndex + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else if (
              currentSection.name &&
              currentSection.title &&
              currentCharIndex - currentSection.name.length <
                currentSection.title.length
            ) {
              const titleProgress =
                currentCharIndex - currentSection.name!.length;
              newContent[currentSectionIndex].title =
                currentSection.title!.substring(0, titleProgress + 1);
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              newContent[currentSectionIndex].complete = true;
              setCurrentSectionIndex(currentSectionIndex + 1);
              setCurrentCharIndex(0);
            }
          } else if (currentSection.type === 'list') {
            const totalText = currentSection.items?.join('\n') || '';
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
            newContent[currentSectionIndex] = {
              ...currentSection,
              complete: true,
            };
            setCurrentSectionIndex(currentSectionIndex + 1);
            setCurrentCharIndex(0);
          }

          return newContent;
        });
      } else {
        setIsTyping(false);
      }
    };

    const typingSpeed = 5; // Faster speed for quicker fade-in
    const timer = setTimeout(typeNextChar, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentSectionIndex, currentCharIndex, isTyping]);

  const GradientFade = ({
    children,
    isActive,
    baseOpacity = 0.8,
  }: {
    children: React.ReactNode;
    isActive: boolean;
    baseOpacity?: number;
  }) => {
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
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))',
        }}
      >
        {children}
      </span>
    );
  };

  // Helper to render text with links
  const renderTextWithLinks = (text: string) => {
    const patterns = /(SunnySide247ac\.com|100\/100 PageSpeed scores)/g;
    const parts = text.split(patterns);

    return parts.map((part, index) => {
      if (part === 'SunnySide247ac.com') {
        return (
          <a
            key={index}
            href="https://sunnyside247ac.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
          >
            {part}
          </a>
        );
      }
      if (part === '100/100 PageSpeed scores') {
        return (
          <a
            key={index}
            href="https://pagespeed.web.dev/analysis/https-sunnyside247ac-com/bimc9jrugi?form_factor=desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative px-4 sm:px-5 lg:px-0">
      <div
        className="my-6 flex justify-center lg:my-8"
        data-gsap="about-profile-pic"
      >
        <Image
          src={KelvinPerezPFP}
          alt="Kelvin Perez"
          width={200}
          height={200}
          className="h-32 w-32 rounded-full object-cover shadow-lg lg:h-48 lg:w-48"
        />
      </div>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="h-[1900px] space-y-4 p-4 text-base text-white/80 lg:h-[1700px] lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <div className="space-y-4">
              {displayedContent.map((section, index) => {
                const isCurrentSection =
                  isTyping && index === currentSectionIndex;

                if (section.type === 'paragraph') {
                  return (
                    <p key={index} className="leading-relaxed">
                      <GradientFade isActive={isCurrentSection}>
                        {renderTextWithLinks(section.text)}
                      </GradientFade>
                    </p>
                  );
                }

                if (section.type === 'list') {
                  return (
                    <ul key={index} className="list-disc space-y-2 pl-6">
                      {section.items.map((item: string, itemIndex: number) => {
                        const isCurrentItem =
                          isCurrentSection &&
                          itemIndex === section.items.length - 1 &&
                          item.length > 0;
                        return (
                          <li key={itemIndex} className="leading-relaxed">
                            <GradientFade isActive={isCurrentItem}>
                              {item}
                            </GradientFade>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }

                return null;
              })}
            </div>

            {displayedContent.length > 0 && (
              <>
                {/* Closing section */}
                {displayedContent.some(
                  (section) => section.type === 'closing',
                ) && (
                  <div className="relative flex flex-col items-center gap-2">
                    {displayedContent.map((section, index) => {
                      if (section.type === 'closing') {
                        const isCurrentSection =
                          isTyping && index === currentSectionIndex;
                        return (
                          <div key={index} className="self-start">
                            <GradientFade isActive={isCurrentSection}>
                              {section.text}
                            </GradientFade>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

                {/* Signature section */}
                {displayedContent.some(
                  (section) => section.type === 'signature',
                ) && (
                  <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
                    {displayedContent.map((section, index) => {
                      if (section.type === 'signature') {
                        const isCurrentSection =
                          isTyping && index === currentSectionIndex;
                        return (
                          <div key={index} className="text-white">
                            <GradientFade
                              isActive={isCurrentSection}
                              baseOpacity={1}
                            >
                              {section.name}
                            </GradientFade>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

                {/* Footer section */}
                {displayedContent.some(
                  (section) => section.type === 'footer',
                ) && (
                  <div className="flex items-center gap-2 lg:gap-2">
                    <div>
                      <Image
                        src={KelvinPerezPFP}
                        alt="Kelvin Perez PFP"
                        width={64}
                        height={64}
                        className="h-12 w-12 rounded-full object-cover lg:h-16 lg:w-16"
                      />
                    </div>
                    <div className="lg:ml-4">
                      {displayedContent.map((section, index) => {
                        if (section.type === 'footer') {
                          const isCurrentSection =
                            isTyping && index === currentSectionIndex;
                          const isTypingName =
                            isCurrentSection && !section.title;
                          const isTypingTitle =
                            isCurrentSection && section.title;
                          return (
                            <div key={index}>
                              <div className="text-xl font-semibold text-white lg:text-2xl">
                                <GradientFade
                                  isActive={isTypingName}
                                  baseOpacity={1}
                                >
                                  {section.name}
                                </GradientFade>
                              </div>
                              <div className="text-[12px] lg:text-lg">
                                <GradientFade
                                  isActive={isTypingTitle}
                                  baseOpacity={0.8}
                                >
                                  {section.title}
                                </GradientFade>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
