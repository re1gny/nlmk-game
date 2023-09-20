import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { Text } from '../common/Text';
import { MapModalScreen } from '../common/MapModalScreen';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const Screen6 = () => {
    const {next} = useScreen();

    const text = (
        <Text>
            Переход в другой отдел&nbsp;—&nbsp;<b>смелое решение.</b> Тебе <b>предстоит 
            столкнуться с новыми задачами и вникнуть во многие нюансы</b> рабочих процессов.
            <br/>
            <br/>
            <b>Удачи!</b>
        </Text>
    )

    function handleNext() {
        reachMetrikaGoal('rotation-start');
        next(SCREENS.SCREEN_7)
    }
    return <MapModalScreen title='Ротация внутри компании' text={text} onNext={handleNext}/>
}