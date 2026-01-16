'use client';

import React, { useState } from 'react';

interface CopyCodeProps {
  code: string;
  language?: string;
}

export function CopyCode({ code, language = 'text' }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="group relative my-4">
      <pre className="rounded-lg bg-gray-900 p-4">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
