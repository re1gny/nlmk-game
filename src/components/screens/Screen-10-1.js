import { InfoScreen } from '../common/InfoScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const Screen101 = () => {
    const { next } = useScreen();

    const text = 'Ты ценнейший специалист нашей Компании. Успешно руководишь несколькими площадками предприятия и\xa0легко справляешься с\xa0большим объемом задач — наш герой!';

    function handleNext() {
        next(SCREENS.SCREEN_12_2);
    }

    return <InfoScreen text={text} onNext={handleNext} />
}