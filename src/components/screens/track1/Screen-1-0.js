import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

const ANSWER_ID_TO_GOAL_NAME_MAPPER = {
    '1': 'dir-mining',
    '2': 'dir-coke',
    '3': 'dir-blast',
    '4': 'dir-steel',
    '5': 'dir-roll',
    '6': 'dir-energyprod',
    '7': 'dir-repairprod',
};

export const Screen10 = () => {
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
            question={questions[TRACKS.TRACK_1][GRADES.START]}
            track={TRACKS.TRACK_1}
            grade={0}
            onChoose={handleChoose}
        />
    )
}