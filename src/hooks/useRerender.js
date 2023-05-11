import { useState } from 'react';

export function useRerender() {
  const [state, setState] = useState(0);

  function rerender() {
    setState(prev => prev + 1);
  }

  return rerender;
}