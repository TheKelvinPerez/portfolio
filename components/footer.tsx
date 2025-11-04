import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '@/public/images/svg/Youtube-Logo.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-default mt-10 px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="#about"
            className="transition-colors hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            href="#books"
            className="transition-colors hover:text-gray-300"
          >
            Books
          </Link>
          <Link href="#gear" className="transition-colors hover:text-gray-300">
            Gear
          </Link>
          <Link href="#faq" className="transition-colors hover:text-gray-300">
            FAQ
          </Link>
          <Link href="#contact-me" className="transition-colors hover:text-gray-300">
            Contact
          </Link>
        </nav>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.youtube.com/@TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={YouTubeLogo}
                alt="YouTube Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://twitter.com/TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={TwitterLogo}
                alt="X/Twitter Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://github.com/TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={GithubLogo}
                alt="GitHub Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/TheKelvinPerez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center transition-opacity hover:opacity-80"
            >
              <Image
                src={LinkedinLogo}
                alt="LinkedIn Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm">
          © {currentYear} Kelvin Perez, All rights reserved
        </p>
      </div>
    </footer>
  );
}
