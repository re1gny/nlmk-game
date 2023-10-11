import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const Screen26 = () => {
    const { next } = useScreen();
    const {finishConfirmed, setProgress, setCharacterTrack} = useGameState();
    function handleNext(nextTrack, grade, currentTrack) {
        reachMetrikaGoal('q6');
        if (!grade) {
            if (!finishConfirmed) {
                next(SCREENS.SCREEN_8_2);
            } else {
                next(SCREENS.SCREEN_9_2);
            }
            return;
        }
        setProgress(nextTrack, grade);

        if (nextTrack !== currentTrack) {
            setTimeout(() => setCharacterTrack(nextTrack), 1000)
            next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_5});
            return;
        }

        next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_14});
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_2][GRADES.GRADE_4]}
            questionNumber={6}
            track={TRACKS.TRACK_2}
            grade={1}
            onChoose={handleNext}
            post={'Руководитель проектного офиса'}
        />
    )
}