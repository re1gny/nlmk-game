import { createContext } from 'react';

export const INITIAL_SCREEN = {
  screen: null,
  next: () => undefined,
}

export const ScreenContext = createContext(INITIAL_SCREEN)
