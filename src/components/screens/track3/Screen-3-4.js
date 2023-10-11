import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useGameState } from '../../../hooks/useGameState';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export function Screen34() {
  const { next } = useScreen();
  const {finishConfirmed, setProgress, setCharacterTrack} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    reachMetrikaGoal('q4');
    if (!grade) {
      if (!finishConfirmed) {
        next(SCREENS.SCREEN_8_1);
      } else {
        next(SCREENS.SCREEN_9_1);
      }
      return;
    }
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack) {
      setTimeout(() => setCharacterTrack(nextTrack), 1000)
      next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_5});
      return;
    }
    next(SCREENS.SCREEN_16);
  }

  return (
      <QuestionWrapper
          question={questions[TRACKS.TRACK_3][GRADES.GRADE_2]}
          questionNumber={4}
          track={TRACKS.TRACK_3}
          grade={1}
          onChoose={handleNext}
          post={'Главный специалист'}
      />
  )
}
