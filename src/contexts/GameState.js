import { createContext } from 'react';

export const INITIAL_GAME_STATE = {
  character: null,
  track: null,
  grade: null,
  path: null,
  setCharacter: () => undefined,
  setProgress: () => undefined,
  reset: () => undefined,
}

export const GameStateContext = createContext(INITIAL_GAME_STATE)
