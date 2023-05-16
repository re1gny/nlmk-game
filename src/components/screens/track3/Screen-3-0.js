import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { useGameState } from '../../../hooks/useGameState';

export const Screen30 = () => {
    const {next} = useScreen();
    const {setProgress} = useGameState();

    function handleChoose(track, grade) {
        setProgress(track, grade);
        next(SCREENS[track]['SCREEN_1']);
    }
    return (
        <QuestionWrapper
            questionNumber={2}
            question={questions[TRACKS.TRACK_3][GRADES.START]}
            track={TRACKS.TRACK_3}
            grade={0}
            onChoose={handleChoose}
        />
    );
};