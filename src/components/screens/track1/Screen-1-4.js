import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useGameState } from '../../../hooks/useGameState';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';

export function Screen14() {
  const { next } = useScreen();
  const {setProgress} = useGameState();

  // function handleBack() {
  //   next(SCREENS.TRACK_1.SCREEN_3);
  // }

  function handleNext(nextTrack, grade, currentTrack) {
    if (!grade) {
      next(SCREENS.SCREEN_8);
      return;
    }
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack || grade !== GRADES.GRADE_2) {
      next(SCREENS.SCREEN_5);
      return;
    }
    next(SCREENS[nextTrack][grade]);
  }

  return (
      <QuestionWrapper
          question={questions[TRACKS.TRACK_1][GRADES.GRADE_2]}
          questionNumber={4}
          track={TRACKS.TRACK_1}
          grade={1}
          onChoose={handleNext}
      />
  )
  // return <BaseMapViewScreen onBack={handleBack} />;
}
