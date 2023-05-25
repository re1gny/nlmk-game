import { QuestionWrapper } from '../common/QuestionWrapper';
import { TRACKS } from '../../constants/tracks';
import { questions } from '../../constants/questions';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { useGameState } from '../../hooks/useGameState';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const TRACK_TO_GOAL_NAME_MAPPER = {
    [TRACKS.TRACK_1]: 'tr-prodtech',
    [TRACKS.TRACK_2]: 'tr-procopt',
    [TRACKS.TRACK_3]: 'tr-supfunc',
};

export const Screen4 = () => {
    const {next} = useScreen();
    const {setProgress} = useGameState();

    function handleChoose(track, grade) {
        reachMetrikaGoal('q1');
        reachMetrikaGoal(TRACK_TO_GOAL_NAME_MAPPER[track]);
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