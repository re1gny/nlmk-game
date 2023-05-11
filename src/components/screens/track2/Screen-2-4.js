import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useGameState } from '../../../hooks/useGameState';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';

export function Screen24() {
  const { next } = useScreen();
  const {finishConfirmed, setProgress} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    if (!grade) {
      if (!finishConfirmed) {
        next(SCREENS.SCREEN_8);
      } else {
        next(SCREENS.SCREEN_9);
      }
      return;
    }
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack) {
      next(SCREENS.SCREEN_5);
      return;
    }
    next(SCREENS.SCREEN_16);
  }

  return (
      <QuestionWrapper
          question={questions[TRACKS.TRACK_2][GRADES.GRADE_2]}
          questionNumber={4}
          track={TRACKS.TRACK_2}
          grade={1}
          onChoose={handleNext}
          post={'Главный специалист'}
      />
  )
}
