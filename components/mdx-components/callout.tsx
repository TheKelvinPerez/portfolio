import React from 'react';

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'error';
  children: React.ReactNode;
}

const styles = {
  info: 'border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-700',
  warning: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-700',
  success: 'border-green-500 bg-green-50 dark:bg-green-950 dark:border-green-700',
  error: 'border-red-500 bg-red-50 dark:bg-red-950 dark:border-red-700',
};

const icons = {
  info: 'ℹ️',
  warning: '⚠️',
  success: '✅',
  error: '❌',
};

export function Callout({ type, children }: CalloutProps) {
  return (
    <div
      className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]} prose prose-sm dark:prose-invert max-w-none`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl" role="img" aria-label={type}>
          {icons[type]}
        </span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
