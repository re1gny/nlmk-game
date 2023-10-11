import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const Screen15 = () => {
    const { next } = useScreen();
    const {finishConfirmed, setProgress, setCharacterTrack} = useGameState();
    function handleNext(nextTrack, grade, currentTrack) {
        reachMetrikaGoal('q5');
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
            question={questions[TRACKS.TRACK_1][GRADES.GRADE_3]}
            questionNumber={5}
            track={TRACKS.TRACK_1}
            grade={1}
            onChoose={handleNext}
            post={'Начальник участка'}
        />
    )
}