import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';

export const Screen36 = () => {
    const { next } = useScreen();
    const {setProgress} = useGameState();
    function handleNext(nextTrack, grade, currentTrack) {
        if (!grade) {
            next(SCREENS.SCREEN_9);
            return;
        }
        setProgress(nextTrack, grade);
        if (nextTrack !== currentTrack) {
            next(SCREENS.SCREEN_5);
            return;
        }
        next(SCREENS[nextTrack][grade]);
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_3][GRADES.GRADE_4]}
            questionNumber={6}
            track={TRACKS.TRACK_3}
            grade={1}
            onChoose={handleNext}
            post={'Руководитель проектного офиса'}
        />
    )
}