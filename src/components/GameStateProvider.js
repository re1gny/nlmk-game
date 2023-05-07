import { useCallback, useMemo, useState } from 'react';
import { GameStateContext } from '../contexts/GameState';
import { PATH_POINTS } from '../constants/pathPoints';
import { useScreen } from '../hooks/useScreen';

const INITIAL_PATH = [];
const INITIAL_CHARACTER = 5;
const INITIAL_TRACK = null;
const INITIAL_GRADE = null;
const INITIAL_MESSAGE_ID = 0;
const INITIAL_CARDS_GAME_PASSED = false;
const INITIAL_FINISH_CONFIRMED = false;

export function GameStateProvider({ children }) {
  const { reset } = useScreen();

  const [path, setPath] = useState(INITIAL_PATH)
  const [character, setCharacter] = useState(INITIAL_CHARACTER)
  const [track, setTrack] = useState(INITIAL_TRACK)
  const [grade, setGrade] = useState(INITIAL_GRADE)
  const [messageId, setMessageId] = useState(INITIAL_MESSAGE_ID);
  const [cardsGamePassed, setCardsGamePassed] = useState(INITIAL_CARDS_GAME_PASSED);
  const [finishConfirmed, setFinishConfirmed] = useState(INITIAL_FINISH_CONFIRMED);
  const [afterConfirmTrack, setAfterConfirmTrack] = useState(INITIAL_TRACK);
  const [afterConfirmGrade, setAfterConfirmGrade] = useState(INITIAL_GRADE);
  const [afterConfirmScreen, setAfterConfirmScreen] = useState(null);

  const handleReset = useCallback(() => {
    reset();
    setPath(INITIAL_PATH);
    setCharacter(INITIAL_CHARACTER);
    setTrack(INITIAL_TRACK);
    setGrade(INITIAL_GRADE);
    setMessageId(INITIAL_MESSAGE_ID);
    setCardsGamePassed(INITIAL_CARDS_GAME_PASSED);
    setAfterConfirmTrack(INITIAL_TRACK);
    setAfterConfirmGrade(INITIAL_GRADE);
    setFinishConfirmed(INITIAL_FINISH_CONFIRMED);
    setAfterConfirmScreen(null);
  }, [reset]);

  const handleSetCharacter = useCallback((character) => {
    setCharacter(character);
  }, []);

  const handlePassCardsGame = useCallback(() => {
    setCardsGamePassed(true);
  }, []);

  const handleConfirmFinish = useCallback(() => {
    setFinishConfirmed(true);
  }, []);

  const handleStart = useCallback(() => {
    setPath([PATH_POINTS.START]);
  }, []);

  const handleSetNextMessageId = useCallback(() => {
    setMessageId(prev => ++prev);
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
    cardsGamePassed,
    setCharacter: handleSetCharacter,
    setProgress: handleSetProgress,
    start: handleStart,
    reset: handleReset,
    setNextMessageId: handleSetNextMessageId,
    passCardsGame: handlePassCardsGame,
    afterConfirmTrack,
    setAfterConfirmTrack,
    afterConfirmGrade,
    setAfterConfirmGrade,
    finishConfirmed,
    confirmFinish: handleConfirmFinish,
      afterConfirmScreen, setAfterConfirmScreen,
  }),
[
    track, character, grade, path, handleSetCharacter, handleSetProgress,
    handleReset, handleStart, handleSetNextMessageId, messageId, cardsGamePassed, handlePassCardsGame,
    afterConfirmTrack,
    setAfterConfirmTrack,
    afterConfirmGrade,
    setAfterConfirmGrade,
    finishConfirmed,
    handleConfirmFinish,
  afterConfirmScreen, setAfterConfirmScreen
]);

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  )
}
