import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const Screen37 = () => {
    const { next } = useScreen();
    function handleNext(track, grade, currentTrack, nextScreen) {
        reachMetrikaGoal('q7');
        if (nextScreen) {
            next(nextScreen);
            return;
        }

        next(SCREENS.SCREEN_12_2);
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_3][GRADES.FINAL]}
            questionNumber={7}
            track={TRACKS.TRACK_3}
            grade={2}
            onChoose={handleNext}
            post={'Директор'}
        />
    )
}