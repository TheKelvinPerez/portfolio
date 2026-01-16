'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Callout } from './mdx-components/callout';
import { Carousel } from './mdx-components/carousel';
import { CopyCode } from './mdx-components/copyCode';
import { Separator } from './mdx-components/seperator';
import { YouTube } from './mdx-components/youtube';

export const mdxComponents = {
    Callout,
    Carousel,
    CopyCode,
    Separator,
    YouTube,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={className
          ? `mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ${className}`
          : 'mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100'}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={className
          ? `mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 first:mt-0 ${className}`
          : 'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 first:mt-0'}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={className
          ? `mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${className}`
          : 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className={className
          ? `mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${className}`
          : 'mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h5
        className={className
          ? `mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${className}`
          : 'mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100'}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h6
        className={className
          ? `mt-8 scroll-m-20 text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${className}`
          : 'mt-8 scroll-m-20 text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100'}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={className
          ? `leading-7 [&:not(:first-child)]:mt-6 ${className}`
          : 'leading-7 [&:not(:first-child)]:mt-6'}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className={className
          ? `my-6 ml-6 list-disc ${className}`
          : 'my-6 ml-6 list-disc'}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className={className
          ? `my-6 ml-6 list-decimal ${className}`
          : 'my-6 ml-6 list-decimal'}
        {...props}
      />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li
        className={className
          ? `mt-2 ${className}`
          : 'mt-2'}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={className
          ? `mt-6 border-l-4 pl-6 italic text-gray-700 dark:text-gray-300 ${className}`
          : 'mt-6 border-l-4 pl-6 italic text-gray-700 dark:text-gray-300'}
        {...props}
      />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={className
            ? `w-full ${className}`
            : 'w-full'}
          {...props}
        />
      </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={className
          ? `m-0 border-t p-0 even:bg-gray-100 dark:even:bg-gray-800 ${className}`
          : 'm-0 border-t p-0 even:bg-gray-100 dark:even:bg-gray-800'}
        {...props}
      />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className={className
          ? `border px-4 py-2 text-left font-bold dark:border-gray-700 ${className}`
          : 'border px-4 py-2 text-left font-bold dark:border-gray-700'}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className={className
          ? `border px-4 py-2 text-left dark:border-gray-700 ${className}`
          : 'border px-4 py-2 text-left dark:border-gray-700'}
        {...props}
      />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className={className
          ? `mb-4 mt-6 overflow-x-auto rounded-lg bg-gray-900 px-4 py-4 text-sm ${className}`
          : 'mb-4 mt-6 overflow-x-auto rounded-lg bg-gray-900 px-4 py-4 text-sm'}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={className
          ? `relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-gray-800 ${className}`
          : 'relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-gray-800'}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <Link
        href={props.href || '#'}
        className={className
          ? `font-medium text-blue-600 underline underline-offset-4 dark:text-blue-400 ${className}`
          : 'font-medium text-blue-600 underline underline-offset-4 dark:text-blue-400'}
        {...props}
      />
    ),
    img: ({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      // @ts-ignore
      return (
        <Image
          className={className
            ? `rounded-lg ${className}`
            : 'rounded-lg'}
          width={800}
          height={400}
          // @ts-ignore
          src={props.src || ''}
          // @ts-ignore
          alt={props.alt || ''}
        />
      );
    },
    hr: ({ ...props }) => (
      <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />
    ),
  };
