import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { questions } from '../../../constants/questions';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export function Screen13() {
  const { next } = useScreen();
  const {setProgress, setCharacterTrack} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    reachMetrikaGoal('q3');
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack) {
      setTimeout(() => setCharacterTrack(nextTrack), 1000)
      next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_5});
      return;
    }
    next(SCREENS.SCREEN_16);
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
