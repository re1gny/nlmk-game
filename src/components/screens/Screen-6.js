import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { Text } from '../common/Text';
import { MapModalScreen } from '../common/MapModalScreen';

export const Screen6 = () => {
    const {next} = useScreen();

    const text = (
        <>
            <Text>
                Переход в другой отдел — <b>смелое решение. </b>
                Тебе <b>предстоит столкнуться с новыми задачами и понять многие нюансы </b> рабочих процессов.
            </Text>
            <br/>
            <Text bold>
                Проверим твое везение!
            </Text>
        </>
    )

    function handleNext() {
        next(SCREENS.SCREEN_7)
    }
    return <MapModalScreen text={text} onNext={handleNext}/>
}