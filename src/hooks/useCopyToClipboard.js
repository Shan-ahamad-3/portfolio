import { useState, useCallback } from 'react';

/**
 * Handles one-click clipboard copying with temporary feedback state.
 */
export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text) => {
    if (!navigator?.clipboard) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
      } catch {
        setCopied(false);
      }
      document.body.removeChild(textarea);
    } else {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
      }).catch(() => {
        setCopied(false);
      });
    }

    setTimeout(() => {
      setCopied(false);
    }, resetDelay);
  }, [resetDelay]);

  return { copied, copy };
}

