import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export interface StyledButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'back' | 'external' | 'github';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
  onClick?: () => void;
  'data-gsap'?: string;
  disabled?: false;
  icon?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function StyledButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  target = '_self',
  rel = '',
  onClick,
  'data-gsap': dataGsap,
  disabled = false,
  icon,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
}: StyledButtonProps) {
  // Base classes for all buttons
  const baseClasses = variant === 'github'
    ? 'flex items-center rounded-full text-center transition-all duration-200 cursor-pointer'
    : 'grid place-items-center rounded-full text-center transition-all duration-200 cursor-pointer';

  // Size-specific classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: variant === 'github' ? 'px-6 py-3 text-sm lg:px-8 lg:py-3 lg:text-base min-w-[120px]' : 'px-6 py-3 text-sm lg:px-8 lg:py-3 lg:text-base',
    lg: 'px-8 py-3 text-base lg:px-10 lg:py-4 lg:text-lg'
  };

  // Consistent styling for all variants with unified hover effects
  const variantClasses = {
    primary: 'text-white shadow-alt-cta hover:bg-gradient-to-b hover:from-white/40 hover:to-[#2F2D2D]/20 hover:shadow-alt-cta',
    secondary: 'text-white shadow-alt-cta hover:bg-gradient-to-b hover:from-white/40 hover:to-[#2F2D2D]/20 hover:shadow-alt-cta',
    back: 'text-white shadow-alt-cta hover:bg-gradient-to-b hover:from-white/40 hover:to-[#2F2D2D]/20 hover:shadow-alt-cta',
    external: 'text-white shadow-alt-cta hover:bg-gradient-to-b hover:from-white/40 hover:to-[#2F2D2D]/20 hover:shadow-alt-cta',
    github: 'text-white shadow-alt-cta hover:bg-gradient-to-b hover:from-white/40 hover:to-[#2F2D2D]/20 hover:shadow-alt-cta'
  };

  const buttonClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const renderContent = () => {
    switch (variant) {
      case 'back':
        return (
          <>
            <ArrowLeft className="h-4 w-4 transition-all group-hover:text-white mr-2" />
            {children}
          </>
        );
      case 'external':
        return (
          <>
            {children}
            <ExternalLink className="h-4 w-4 ml-2 transition-all group-hover:text-white" />
          </>
        );
      case 'github':
        return (
          <>
            {icon && (
              <Image
                src={icon}
                alt={iconAlt || 'Icon'}
                width={iconWidth}
                height={iconHeight}
                className="transition-all group-hover:brightness-0 mr-2"
              />
            )}
            {children}
          </>
        );
      default:
        return <>{children}</>;
    }
  };

  const commonProps = {
    className: buttonClasses,
    onClick,
    'data-gsap': dataGsap,
  };

  if (href) {
    if (target === '_blank') {
      return (
        <a
          href={href}
          target="_blank"
          rel={rel || 'noopener noreferrer'}
          {...commonProps}
        >
          {renderContent()}
        </a>
      );
    } else {
      return (
        <Link href={href} {...commonProps}>
          {renderContent()}
        </Link>
      );
    }
  }

  return (
    <button type="button" {...commonProps}>
      {renderContent()}
    </button>
  );
}