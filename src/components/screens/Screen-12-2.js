import { MapModalScreen } from '../common/MapModalScreen';
import { Text } from '../common/Text';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

export const PreFinalScreen2 = () => {
    const {next} = useScreen();
    const text = (
        <Text>
          <b>Так держать!</b>
          <br/>
          <br/>
          Коллеги тобой восхищаются!{'\n'}
          Поздравляем с&nbsp;достижением и&nbsp;<b>желаем тебе успеха во&nbsp;всех свершениях.</b>
          <br/>
          <br/>
          Уверены — <b>с&nbsp;каждым начинанием ты будешь справляться так же легко,</b> как с&nbsp;сегодняшними заданиями!
        </Text>
    );

    function handleNext() {
        reachMetrikaGoal('finish');
        next(SCREENS.SCREEN_17)
    }

    return (
        <MapModalScreen text={text} buttonText={'ДАЛЕЕ'} onNext={handleNext} />
    )
}