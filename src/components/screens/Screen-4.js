import { QuestionWrapper } from '../common/QuestionWrapper';
import { TRACKS } from '../../constants/tracks';
import { questions } from '../../constants/questions';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { useGameState } from '../../hooks/useGameState';

export const Screen4 = () => {
    const {next} = useScreen();
    const {setProgress} = useGameState();

    function handleChoose(track, grade) {
        setProgress(track, grade);
        next(SCREENS[track][grade])
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.UNSPECIFIED]}
            questionNumber={1}
            grade={0}
            withHint
            onChoose={handleChoose}
        />
    );
}