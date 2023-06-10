import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const Screen36 = () => {
    const { next } = useScreen();
    const {finishConfirmed, setProgress} = useGameState();
    function handleNext(nextTrack, grade) {
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
        next(SCREENS.SCREEN_14);
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_3][GRADES.GRADE_4]}
            questionNumber={6}
            track={TRACKS.TRACK_3}
            grade={1}
            onChoose={handleNext}
            post={'Начальник управления'}
        />
    )
}