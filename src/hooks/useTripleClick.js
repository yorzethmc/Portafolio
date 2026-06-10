import { useState, useRef, useCallback } from 'react';

export const useTripleClick = (callback, timeout = 2000) => {
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef(null);

  const handleClick = useCallback(() => {
    setClickCount((prev) => {
      const current = prev + 1;
      
      if (current === 3) {
        callback();
        clearTimeout(timerRef.current);
        return 0; // Reset
      }

      // Start/Restart the timer
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setClickCount(0); // Reset if too slow
      }, timeout);

      return current;
    });
  }, [callback, timeout]);

  return handleClick;
};
