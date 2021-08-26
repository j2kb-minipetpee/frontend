import { useEffect, useRef } from 'react';

export const useMountedEffect = (callback: () => void, args?: any[]) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    callback();
  }, [...args, mounted]);
};
