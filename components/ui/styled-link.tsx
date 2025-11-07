import React from 'react';
import { cn } from '@/lib/utils';

interface StyledLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable link component with consistent styling across the portfolio.
 * Uses yellow colors similar to the letter component for visual consistency.
 */
export function StyledLink({
  href,
  children,
  className,
  target,
  rel,
  ...props
}: StyledLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  return (
    <a
      href={href}
      target={target || (isExternal ? '_blank' : undefined)}
      rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      className={cn(
        'text-yellow-300 underline transition-colors hover:text-yellow-200',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default StyledLink;