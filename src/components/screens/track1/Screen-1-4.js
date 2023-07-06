import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useGameState } from '../../../hooks/useGameState';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export function Screen14() {
  const { next } = useScreen();
  const {finishConfirmed, setProgress} = useGameState();

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
      next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_5});
      return;
    }
    next(SCREENS.SCREEN_16);
  }

  return (
      <QuestionWrapper
          question={questions[TRACKS.TRACK_1][GRADES.GRADE_2]}
          questionNumber={4}
          track={TRACKS.TRACK_1}
          grade={1}
          onChoose={handleNext}
          post={'Мастер'}
      />
  )
}
