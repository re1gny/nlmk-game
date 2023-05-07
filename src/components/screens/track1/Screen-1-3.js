import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { questions } from '../../../constants/questions';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { useGameState } from '../../../hooks/useGameState';

export function Screen13() {
  const { next } = useScreen();
  const {setProgress} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack) {
      next(SCREENS.SCREEN_5);
      return;
    }
    next(SCREENS[nextTrack][grade]);
  }

  return <QuestionWrapper
      question={questions[TRACKS.TRACK_1][GRADES.GRADE_1]}
      questionNumber={3}
      track={TRACKS.TRACK_1}
      grade={0}
      post={'Высококвалифицированный рабочий'}
      onChoose={handleNext}
    />
}
