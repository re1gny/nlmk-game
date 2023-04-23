import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';

export const Screen26 = () => {
    const { next } = useScreen();
    const {setProgress} = useGameState();
    function handleNext(nextTrack, grade) {
        if (!grade) {
            next(SCREENS.SCREEN_9);
            return;
        }
        setProgress(nextTrack, grade);
        next(SCREENS.SCREEN_11);
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_2][GRADES.GRADE_4]}
            questionNumber={6}
            track={TRACKS.TRACK_2}
            grade={1}
            onChoose={handleNext}
        />
    )
}