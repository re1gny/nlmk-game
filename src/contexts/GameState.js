import { createContext } from 'react';

export const INITIAL_GAME_STATE = {
  track: [],
  character: null,
  grade: null,
  addTrackPoint: () => undefined,
  selectCharacter: () => undefined,
  upGrade: () => undefined,
}

export const GameStateContext = createContext(INITIAL_GAME_STATE)
