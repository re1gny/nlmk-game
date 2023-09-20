import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const Screen161 = () => {
    const { next } = useScreen();
    const {finishConfirmed, setProgress} = useGameState();
    function handleNext(nextTrack, grade) {
        reachMetrikaGoal('q6');
        if (grade === GRADES.GRADE_4) {
            next(SCREENS.TRACK_1.SCREEN_5);
            return;
        }
        if (!grade) {
            if (!finishConfirmed) {
                next(SCREENS.SCREEN_8_1);
            } else {
                next(SCREENS.SCREEN_9_1);
            }
            return;
        }
        setProgress(nextTrack, grade);
        next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_14});
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_1][GRADES.GRADE_4][0]}
            questionNumber={6}
            track={TRACKS.TRACK_1}
            grade={1}
            onChoose={handleNext}
            post={'Начальник цеха'}
        />
    )
}