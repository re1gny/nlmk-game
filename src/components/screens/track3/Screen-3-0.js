import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

const ANSWER_ID_TO_GOAL_NAME_MAPPER = {
    '1': 'dir-supply',
    '2': 'dir-logistics',
    '3': 'dir-sales',
    '4': 'dir-it',
    '5': 'dir-ecology',
    '6': 'dir-industrialsafety',
    '7': 'dir-publicrelations',
    '8': 'dir-economicsfinance',
};

export const Screen30 = () => {
    const {next} = useScreen();
    const {setProgress} = useGameState();

    function handleChoose(track, grade, currentTrack, nextScreen, id) {
        reachMetrikaGoal('q2');
        reachMetrikaGoal(ANSWER_ID_TO_GOAL_NAME_MAPPER[id]);
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