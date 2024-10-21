import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { useGameState } from '../../../hooks/useGameState';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

const ANSWER_ID_TO_GOAL_NAME_MAPPER = {
    '1': 'dir-tech',
    '2': 'dir-recycle',
    '3': 'dir-automation',
    '4': 'dir-energetic',
    '5': 'dir-systemrepair',
    '6': 'dir-developmentresearch',
};

export const Screen20 = () => {
    const {next} = useScreen();
    const {setProgress} = useGameState();

    function handleChoose(track, grade, currentTrack, nextScreen, id) {
        reachMetrikaGoal('q2');
        reachMetrikaGoal(ANSWER_ID_TO_GOAL_NAME_MAPPER[id]);
        setProgress(TRACKS.TRACK_3, grade);
        next(SCREENS[track]['SCREEN_1']);
    }
    return (
        <QuestionWrapper
            questionNumber={2}
            question={questions[TRACKS.TRACK_2][GRADES.START]}
            track={TRACKS.TRACK_2}
            grade={0}
            onChoose={handleChoose}
        />
    );
};