import { MapModalScreen } from '../common/MapModalScreen';
import { Text } from '../common/Text';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const PreFinalScreen2 = () => {
    const {next} = useScreen();
    const text = (
        <Text>
          <b>Так держать!</b>
          <br/>
          <br/>
          Ты звезда уже на нескольких площадках предприятия, в том числе международных!
          Поздравляем с достижением и <b>желаем тебе успеха во всех свершениях.</b>
          <br/>
          <br/>
          Уверены — <b>с каждым начинанием ты будешь справляться так же легко</b>, как с
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