import React from 'react';

interface SeparatorProps {
  margin?: string;
  style?: 'solid' | 'dashed' | 'dotted';
}

export function Separator({ margin = 'my-8', style = 'solid' }: SeparatorProps) {
  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  return (
    <div className={`flex items-center ${margin}`}>
      <div className={`flex-1 border-t border-gray-300 dark:border-gray-700 ${styleClasses[style]}`} />
      <div className="mx-4 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m0-12l-3 3m3-3l3 3"
          />
        </svg>
      </div>
      <div className={`flex-1 border-t border-gray-300 dark:border-gray-700 ${styleClasses[style]}`} />
    </div>
  );
}
