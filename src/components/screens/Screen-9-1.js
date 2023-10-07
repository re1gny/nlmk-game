import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import {InfoScreen} from "../common/InfoScreen";

export const Screen91 = () => {
    const { next } = useScreen();

    const text = 'Рост до руководящих должностей непрост и требует много времени и усилий, но благодаря железной воле у тебя все получится.\n Брось вызов — у нас нет рамок и барьеров для твоего развития!'

    function handleNext() {
        reachMetrikaGoal('finish');
        next(SCREENS.SCREEN_12_1);
    }

    return <InfoScreen text={text} onNext={handleNext} />
}