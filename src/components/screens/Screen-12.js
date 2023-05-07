import { MapModalScreen } from '../common/MapModalScreen';
import { Text } from '../common/Text';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const PreFinalScreen = () => {
    const {next} = useScreen();
    const text = (
        <Text>
          <b>Так держать!</b>
          <br/>
          <br/>
          Коллеги тобой восхищаются!{'\n'}
          Поздравляем с достижением и <b>желаем тебе успеха во всех свершениях.</b>
          <br/>
          <br/>
          Уверены — <b>с каждым начинанием ты будешь справляться так же легко,</b> как с
          сегодняшними заданиями!
        </Text>
    );

    function handleNext() {
        next(SCREENS.SCREEN_15)
    }

    return (
        <MapModalScreen text={text} buttonText={'ДАЛЕЕ'} onNext={handleNext} />
    )
}