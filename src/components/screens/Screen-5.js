import { useGameState } from '../../hooks/useGameState';
import { useScreen } from '../../hooks/useScreen';
import { MapModalScreen } from '../common/MapModalScreen';
import { SCREENS } from '../../constants/screens';
import { messages } from '../../constants/messages';

export const Screen5 = () => {
    const {next} = useScreen();
    const {messageId, isHorizontalGameShown, track, grade, setIsHorizontalGameShown, setNextMessageId} = useGameState();

    function handleNext() {
        if (isHorizontalGameShown) {
            next(SCREENS[track][grade]);
            return;
        }
        setIsHorizontalGameShown();
        next(SCREENS.SCREEN_6);
        setNextMessageId();
    }
    return <MapModalScreen onNext={handleNext} text={messages[messageId].text}/>
}