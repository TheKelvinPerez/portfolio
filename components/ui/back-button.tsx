'use client';

import StyledButton from './styled-button';

export interface BackButtonProps {
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export default function BackButton({
  className = '',
  ariaLabel = 'Navigate back to previous page',
  children = 'Back'
}: BackButtonProps) {
  return (
    <StyledButton
      variant="back"
      onClick={() => window.history.back()}
      className={`flex items-center justify-center min-w-[100px] ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </StyledButton>
  );
}