import { createContext } from 'react';

export const INITIAL_SCREEN = {
  screen: null,
  screenSwitching: false,
  config: {
    background: null,
    screenSwitchingDuration: 0,
    setDarkBackground: () => undefined,
    setLightBackground: () => undefined,
  },
  next: () => undefined,
}

export const ScreenContext = createContext(INITIAL_SCREEN)
