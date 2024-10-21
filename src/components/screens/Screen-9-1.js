import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import {InfoScreen} from "../common/InfoScreen";

export const Screen91 = () => {
    const { next } = useScreen();

    const text = 'Рост до\xa0руководящих должностей непрост и\xa0требует много времени и\xa0усилий, но\xa0благодаря железной воле у\xa0тебя все получится.\n Брось вызов — у\xa0нас нет рамок и\xa0барьеров для\xa0твоего развития!'

    function handleNext() {
        next(SCREENS.SCREEN_12_1);
    }

    return <InfoScreen text={text} onNext={handleNext} />
}