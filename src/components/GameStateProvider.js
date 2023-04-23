import { useCallback, useMemo, useState } from 'react';
import { GameStateContext } from '../contexts/GameState';
import { PATH_POINTS } from '../constants/pathPoints';
import { useScreen } from '../hooks/useScreen';

const INITIAL_PATH = [];
const INITIAL_CHARACTER = 5;
const INITIAL_TRACK = null;
const INITIAL_GRADE = null;
const INITIAL_MESSAGE_ID = 0;

export function GameStateProvider({ children }) {
  const { reset } = useScreen();

  const [path, setPath] = useState(INITIAL_PATH)
  const [character, setCharacter] = useState(INITIAL_CHARACTER)
  const [track, setTrack] = useState(INITIAL_TRACK)
  const [grade, setGrade] = useState(INITIAL_GRADE)
  const [isHorizontalGameShown, setIsHorizontalGameShown] = useState(false);
  const [messageId, setMessageId] = useState(INITIAL_MESSAGE_ID);

  const handleReset = useCallback(() => {
    reset();
    setPath(INITIAL_PATH);
    setCharacter(INITIAL_CHARACTER);
    setTrack(INITIAL_TRACK);
    setGrade(INITIAL_GRADE);
    setIsHorizontalGameShown(false);
    setMessageId(INITIAL_MESSAGE_ID);
  }, [reset]);

  const handleSetCharacter = useCallback((character) => {
    setCharacter(character);
  }, []);

  const handleStart = useCallback(() => {
    setPath([PATH_POINTS.START]);
  }, []);

  const handleSetNextMessageId = useCallback(() => {
    setMessageId(prev => ++prev);
  }, []);

  const handleSetHorizontalGameShown = useCallback(() => {
    setIsHorizontalGameShown(true);
  }, []);

  const handleSetProgress = useCallback((track, grade) => {
    setTrack(track);
    setGrade(grade);
    if (!grade) return;
    setPath(prev => [...prev, PATH_POINTS[track][grade]]);
  }, []);

  const value = useMemo(() => ({
    track,
    character,
    grade,
    path,
    messageId,
    isHorizontalGameShown,
    setCharacter: handleSetCharacter,
    setProgress: handleSetProgress,
    start: handleStart,
    reset: handleReset,
    setNextMessageId: handleSetNextMessageId,
    setIsHorizontalGameShown: handleSetHorizontalGameShown
  }),
[
    track, character, grade, path, handleSetCharacter, handleSetProgress,
    handleReset, handleStart, handleSetHorizontalGameShown, isHorizontalGameShown,
    handleSetNextMessageId, messageId
]);

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  )
}
