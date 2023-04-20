import { useCallback, useMemo, useState } from 'react';
import { ScreenContext } from '../contexts/Screen';
import { SCREENS } from '../constants/screens';

export const SCREEN_SWITCH_DURATION = 200;

export function ScreenProvider({ children }) {
  /////////////////// for development ////////////////////////////////////
  const urlParams = new URLSearchParams(window.location.search);
  const screenParam = urlParams.get('screen');
  ////////////////////////////////////////////////////////////////////////

  const [screen, setScreen] = useState(screenParam ?? SCREENS.SCREEN_1);
  const [screenSwitching, setScreenSwitching] = useState(false);
  const [background, setBackground] = useState('light');

  const next = useCallback((screen) => {
    setScreenSwitching(true);
    setTimeout(() => {
      setScreen(screen);
      setScreenSwitching(false);
    }, SCREEN_SWITCH_DURATION)
  }, []);

  const setDarkBackground = useCallback(() => {
    setBackground('dark');
  }, []);

  const setLightBackground = useCallback(() => {
    setBackground('light');
  }, []);

  const config = useMemo(
    () => ({ background, setDarkBackground, setLightBackground, screenSwitchingDuration: SCREEN_SWITCH_DURATION }),
    [background, setDarkBackground, setLightBackground],
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