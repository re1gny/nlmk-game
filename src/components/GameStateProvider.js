import { useCallback, useMemo, useState } from 'react';
import { GameStateContext } from '../contexts/GameState';
import { PATH_POINTS } from '../constants/pathPoints';
import { useScreen } from '../hooks/useScreen';

const INITIAL_PATH = null;
const INITIAL_CHARACTER = 5;
const INITIAL_TRACK = null;
const INITIAL_GRADE = null;

export function GameStateProvider({ children }) {
  const { reset } = useScreen();

  const [path, setPath] = useState(INITIAL_PATH)
  const [character, setCharacter] = useState(INITIAL_CHARACTER)
  const [track, setTrack] = useState(INITIAL_TRACK)
  const [grade, setGrade] = useState(INITIAL_GRADE)

  const handleReset = useCallback(() => {
    reset();
    setPath(INITIAL_PATH);
    setCharacter(INITIAL_CHARACTER);
    setTrack(INITIAL_TRACK);
    setGrade(INITIAL_GRADE);
  }, [reset]);

  const handleSetCharacter = useCallback((character) => {
    setCharacter(character);
    setPath([PATH_POINTS.START]);
  }, []);

  const handleSetProgress = useCallback((track, grade) => {
    setTrack(track);
    setGrade(grade);
    setPath(prev => [...prev, PATH_POINTS[track][grade]]);
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
