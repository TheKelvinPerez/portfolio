'use client';
import React, { useState, useEffect } from 'react';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function NewNavbar() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setActive(null); // Close any open dropdowns
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-10 z-50 mx-auto hidden max-w-2xl transition-all duration-500 ease-out md:block',
        isVisible
          ? 'translate-y-0 scale-100 opacity-100'
          : 'pointer-events-none -translate-y-16 scale-95 opacity-0',
        className,
      )}
      style={{
        transitionProperty: 'transform, opacity, scale',
        transitionTimingFunction: isVisible
          ? 'cubic-bezier(0.16, 1, 0.3, 1)'
          : 'cubic-bezier(0.7, 0, 0.84, 0)',
      }}
    >
      <Menu setActive={setActive}>
        <Link
          href="/"
          className="cursor-pointer rounded-full px-4 py-2 font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex min-w-[120px] flex-col space-y-3 text-sm">
            <HoveredLink href="/#about">About Me</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Videos">
          <div className="flex min-w-[140px] flex-col space-y-3 text-sm">
            <HoveredLink href="/#videos">YouTube Videos</HoveredLink>
            <HoveredLink href="https://www.youtube.com/@TheKelvinPerez">
              YouTube Channel
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex min-w-[120px] flex-col space-y-3 text-sm">
            <HoveredLink href="/#projects">View Projects</HoveredLink>
            <HoveredLink href="https://github.com/TheKelvinPerez">
              GitHub
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex min-w-[100px] flex-col space-y-3 text-sm">
            <HoveredLink href="/posts">All Posts</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

