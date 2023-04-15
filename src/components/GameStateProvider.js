import { useCallback, useMemo, useState } from 'react';
import { GameStateContext } from '../contexts/GameState';

export function GameStateProvider({ children }) {
  const [track, setTrack] = useState([])
  const [character, setCharacter] = useState(null)
  const [grade, setGrade] = useState(0)

  const addTrackPoint = useCallback((point) => {
    setTrack(prev => [...prev, point])
  }, []);

  const selectCharacter = useCallback((character) => {
    setCharacter(character)
  }, []);

  const upGrade = useCallback(() => {
    setGrade(prev => prev + 1)
  }, []);

  const value = useMemo(() => ({
    track, character, grade, addTrackPoint, selectCharacter, upGrade
  }), [track, character, grade, addTrackPoint, selectCharacter, upGrade]);

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  )
}
