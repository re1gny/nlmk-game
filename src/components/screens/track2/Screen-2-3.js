import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { SCREENS } from '../../../constants/screens';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export function Screen23() {
  const { next } = useScreen();
  const {setProgress} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    reachMetrikaGoal('q3');
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack) {
      next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_5});
      return;
    }
    next(SCREENS.SCREEN_16);
  }

  return <QuestionWrapper
      question={questions[TRACKS.TRACK_2][GRADES.GRADE_1]}
      questionNumber={3}
      track={TRACKS.TRACK_2}
      grade={0}
      onChoose={handleNext}
      post={'Участник проектной команды'}
  />
}
