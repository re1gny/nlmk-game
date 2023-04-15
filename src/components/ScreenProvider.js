import { useCallback, useMemo, useState } from 'react';
import { ScreenContext } from '../contexts/Screen';
import { SCREENS } from '../constants/screens';

export function ScreenProvider({ children }) {
  const [screen, setScreen] = useState(SCREENS.SCREEN_1)

  const next = useCallback((screen) => {
    setScreen(screen)
  }, []);

  const value = useMemo(() => ({ screen, next }), [screen, next]);

  return (
    <ScreenContext.Provider value={value}>
      {children}
    </ScreenContext.Provider>
  )
}