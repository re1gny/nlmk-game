import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';

export const Screen17 = () => {
    const { next } = useScreen();
    function handleNext() {
        next(SCREENS.SCREEN_12);
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_1][GRADES.FINAL]}
            questionNumber={7}
            track={TRACKS.TRACK_1}
            grade={2}
            onChoose={handleNext}
            post={'Директор'}
        />
    )
}