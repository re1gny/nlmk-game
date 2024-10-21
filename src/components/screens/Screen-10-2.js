import { InfoScreen } from '../common/InfoScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const Screen102 = () => {
    const { next } = useScreen();

    const text = 'Рост до\xa0следующей ступени непрост, но\xa0твои усердие и\xa0стремление расширять границы точно не\xa0останутся незамеченным. Вперед к\xa0новым вершинам!';

    function handleNext() {
        next(SCREENS.SCREEN_12_2);
    }

    return <InfoScreen text={text} onNext={handleNext} />
}