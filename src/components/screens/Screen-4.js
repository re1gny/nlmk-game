import { QuestionWrapper } from '../common/QuestionWrapper';
import { TRACKS } from '../../constants/tracks';
import { questions } from '../../constants/questions';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const Screen4 = () => {
    const {next} = useScreen();

    function handleChoose(track, grade) {
        next(SCREENS[track][grade])
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.UNSPECIFIED]}
            questionNumber={1}
            grade={0}
            onChoose={handleChoose}
        />
    );
}