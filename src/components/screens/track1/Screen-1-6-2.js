import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const Screen162 = () => {
    const { next } = useScreen();
    const {setProgress} = useGameState();
    function handleNext(nextTrack, grade) {
        reachMetrikaGoal('q7');
        if (!grade) {
            next(SCREENS.SCREEN_9_2);
            return;
        }
        setProgress(nextTrack, grade);
        next(SCREENS.SCREEN_16, {nextScreen: SCREENS.SCREEN_14});
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_1][GRADES.GRADE_4][1]}
            questionNumber={7}
            track={TRACKS.TRACK_1}
            grade={1}
            onChoose={handleNext}
            post={'Начальник цеха'}
        />
    )
}