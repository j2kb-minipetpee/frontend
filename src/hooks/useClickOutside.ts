import React, { useEffect } from 'react';

export const useClickOutside = (targetRef: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const outSideCallback = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (targetRef && !targetRef.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', outSideCallback);
    return () => {
      document.removeEventListener('mousedown', outSideCallback);
    };
  }, [targetRef, callback]);
};
