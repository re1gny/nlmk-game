import { useContext } from 'react';
import { GameStateContext } from '../contexts/GameState';

export function useGameState() {
  return useContext(GameStateContext)
}