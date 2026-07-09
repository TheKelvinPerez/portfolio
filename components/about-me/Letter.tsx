'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import KelvinPerezPFP from '@/public/images/jpeg/TKP-PFP.jpeg';
import StyledLink from '@/components/ui/styled-link';

const letterContent = [
  {
    type: 'paragraph',
    text: "Hey, I'm Kelvin Perez from Miami, FL.",
  },
  {
    type: 'paragraph',
    text: "Right now I'm positioning myself for a full stack Laravel developer role. I know UI and UX, React, TypeScript, APIs, databases, Stripe, infrastructure, and the messy product work around all of it.",
  },
  {
    type: 'paragraph',
    text: "My background is WordPress heavy, and I'm not hiding that. WordPress is where I learned PHP, client work, SEO, content systems, performance, and how real business owners think about websites.",
  },
  {
    type: 'paragraph',
    text: 'The most recent chapter is Light Code Labs Dashboard. I tried to build an automation agency. The business did not work out the way I wanted, I ran out of runway and did not distribute it well enough. But I built the product.',
  },
  {
    type: 'paragraph',
    text: 'That dashboard is the proof. It captures a lead through a Chrome extension, brings it into Laravel, enriches it, builds generated site demos, handles chatbot capture, voice workflows, audits, queues, usage tracking, and runs in Docker with staging and production on Hetzner.',
  },
  { type: 'paragraph', text: "Now I'm focused on:" },
  {
    type: 'list',
    items: [
      'Laravel application development with PHP, Inertia, queues, jobs, policies, and service classes',
      'React and TypeScript interfaces that feel clean, fast, and usable',
      'PostgreSQL, MySQL, Stripe, webhooks, APIs, and product data workflows',
      'Docker, Linux servers, staging environments, deploy scripts, and queue workers',
      'WordPress and Shopify as the foundation that taught me business websites and ecommerce',
      'Applied AI integrations such as enrichment, generated copy, retrieval based chat, audits, OCR, and usage logging',
    ],
  },
  {
    type: 'paragraph',
    text: 'I am applying for Laravel developer roles because that is the clearest match for the work I want to keep doing. I want to build serious product software, own backend workflows, ship good UI, and work with a team that values practical execution.',
  },
  { type: 'paragraph', text: "Let's build useful software that actually works." },
  { type: 'closing', text: 'Wholeness and balanced vibrations' },
  { type: 'signature', name: 'Kelvin Perez' },
  {
    type: 'footer',
    name: 'Kelvin Perez',
    title: 'Full Stack Laravel Developer',
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
    baseOpacity = 0.9,
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
            rgba(255,255,255,${baseOpacity}) 60%,
            rgba(255,255,255,${baseOpacity * 0.8}) 75%,
            rgba(255,255,255,${baseOpacity * 0.6}) 85%,
            rgba(255,255,255,${baseOpacity * 0.3}) 95%,
            rgba(255,255,255,0) 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          display: 'inline',
        }}
      >
        {children}
      </span>
    );
  };

  // Helper to render text with links
  const renderTextWithLinks = (text: string) => {
    const patterns = /(Light Code Labs Dashboard|SunnySide247ac\.com|100\/100 PageSpeed scores)/g;
    const parts = text.split(patterns);

    return parts.map((part, index) => {
      if (part === 'Light Code Labs Dashboard') {
        return (
          <StyledLink key={index} href="/projects/light-code-labs-dashboard">
            {part}
          </StyledLink>
        );
      }
      if (part === 'SunnySide247ac.com') {
        return (
          <StyledLink key={index} href="https://sunnyside247ac.com">
            {part}
          </StyledLink>
        );
      }
      if (part === '100/100 PageSpeed scores') {
        return (
          <StyledLink
            key={index}
            href="https://pagespeed.web.dev/analysis/https-sunnyside247ac-com/bimc9jrugi?form_factor=desktop"
          >
            {part}
          </StyledLink>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative px-2 sm:px-5 lg:px-0">
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
        <div className="relative z-30 rotate-0 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="min-h-[1180px] space-y-4 p-4 pb-8 text-base text-white/90 sm:min-h-[1060px] sm:p-6 lg:min-h-[1160px] lg:space-y-5 lg:px-16 lg:py-14 lg:text-xl xl:px-24 xl:text-2xl">
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
