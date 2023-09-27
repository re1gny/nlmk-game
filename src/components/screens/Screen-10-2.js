import { InfoScreen } from '../common/InfoScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const Screen102 = () => {
    const { next } = useScreen();

    const text = 'Рост до следующей ступени непрост, но твои усердие и стремление расширять границы точно не останутся незамеченным. Вперед к новым вершинам!';

    function handleNext() {
        reachMetrikaGoal('finish');
        next(SCREENS.SCREEN_12_2);
    }

    return <InfoScreen text={text} onNext={handleNext} />
}