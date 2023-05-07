import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { Text } from '../common/Text';
import { MapModalScreen } from '../common/MapModalScreen';

export const Screen6 = () => {
    const {next} = useScreen();

    const text = (
        <Text>
            Переход в другой отдел — <b>смелое решение. </b>
            Тебе <b>предстоит столкнуться с новыми задачами и понять многие нюансы </b> рабочих процессов.
            <br/>
            <br/>
            <b>Проверим твое везение!</b>
        </Text>
    )

    function handleNext() {
        next(SCREENS.SCREEN_7)
    }
    return <MapModalScreen title='Ротация внутри компании' text={text} onNext={handleNext}/>
}