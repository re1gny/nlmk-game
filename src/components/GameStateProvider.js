import { useCallback, useMemo, useState } from 'react';
import { GameStateContext } from '../contexts/GameState';
import { PATH_POINTS } from '../constants/pathPoints';
import { useScreen } from '../hooks/useScreen';

export function GameStateProvider({ children }) {
  const { reset } = useScreen();

  const [path, setPath] = useState([])
  const [character, setCharacter] = useState(null)
  const [track, setTrack] = useState(null)
  const [grade, setGrade] = useState(null)

  const handleReset = useCallback(() => {
    reset();
    setPath([]);
    setCharacter(null);
    setTrack(null);
    setGrade(null);
  }, [reset]);

  const handleSetCharacter = useCallback((character) => {
    setCharacter(character)
  }, []);

  const handleSetProgress = useCallback((track, grade) => {
    setTrack(track)
    setGrade(grade)
    setPath(prev => [...prev, PATH_POINTS[track][grade]])
  }, []);

  const value = useMemo(() => ({
    track,
    character,
    grade,
    path,
    setCharacter: handleSetCharacter,
    setProgress: handleSetProgress,
    reset: handleReset,
  }), [track, character, grade, path, handleSetCharacter, handleSetProgress, handleReset]);

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  )
}
