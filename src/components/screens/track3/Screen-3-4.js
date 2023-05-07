import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useGameState } from '../../../hooks/useGameState';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';

export function Screen34() {
  const { next } = useScreen();
  const {finishConfirmed, setProgress, setAfterConfirmScreen, setAfterConfirmGrade, setAfterConfirmTrack} = useGameState();

  function handleNext(nextTrack, grade, currentTrack, afterConfirmGrade, nextScreen, afterConfirmScreen) {
    if (!grade) {
      if (!finishConfirmed) {
        setAfterConfirmTrack(nextTrack);
        setAfterConfirmGrade(afterConfirmGrade);
        setAfterConfirmScreen(afterConfirmScreen);
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
    next(SCREENS[nextTrack][grade]);
  }

  return (
      <QuestionWrapper
          question={questions[TRACKS.TRACK_3][GRADES.GRADE_2]}
          questionNumber={4}
          track={TRACKS.TRACK_3}
          grade={1}
          onChoose={handleNext}
          post={'Менеджер проекта'}
      />
  )
}
