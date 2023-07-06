import { useEffect } from 'react';

export function useOnClickOutside(ref, handler, boundsRef) {
  useEffect(() => {
    const listener = (event) => {
      if (boundsRef?.current && !boundsRef.current.contains(event.target)) {
        return;
      }
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  },
    [ref, boundsRef, handler]
  );
}