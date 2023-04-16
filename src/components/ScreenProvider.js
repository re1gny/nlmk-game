import { useCallback, useMemo, useState } from 'react';
import { ScreenContext } from '../contexts/Screen';
import { SCREENS } from '../constants/screens';

const BACKGROUND_TOGGLE_MAP = {
  dark: 'light',
  light: 'dark',
};

export const SCREEN_SWITCH_DURATION = 200;

export function ScreenProvider({ children }) {
  const [screen, setScreen] = useState(SCREENS.SCREEN_1);
  const [screenSwitching, setScreenSwitching] = useState(false);
  const [background, setBackground] = useState('light');

  const next = useCallback((screen) => {
    setScreenSwitching(true);
    setTimeout(() => {
      setScreen(screen);
      setScreenSwitching(false);
    }, SCREEN_SWITCH_DURATION)
  }, []);

  const toggleBackground = useCallback(() => {
    setBackground(prev => BACKGROUND_TOGGLE_MAP[prev]);
  }, []);

  const config = useMemo(
    () => ({ background, toggleBackground, screenSwitchingDuration: SCREEN_SWITCH_DURATION }),
    [background, toggleBackground],
    );
  const value = useMemo(
    () => ({ screen, next, config, screenSwitching }),
    [screen, next, config, screenSwitching],
    );

  return (
    <ScreenContext.Provider value={value}>
      {children}
    </ScreenContext.Provider>
  )
}