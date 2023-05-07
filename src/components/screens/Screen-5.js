import { useGameState } from '../../hooks/useGameState';
import { useScreen } from '../../hooks/useScreen';
import { MapModalScreen } from '../common/MapModalScreen';
import { SCREENS } from '../../constants/screens';
import { messages } from '../../constants/messages';
import { useState } from 'react';

export const Screen5 = () => {
    const {next} = useScreen();
    const {
        messageId,
        setNextMessageId,
        cardsGamePassed,
    } = useGameState();

    const [message] = useState(messages[messageId].text);

    function handleNext() {
        setNextMessageId();
        if (cardsGamePassed) {
            next(SCREENS.SCREEN_16)
            return;
        }
        next(SCREENS.SCREEN_6);
    }
    return <MapModalScreen onNext={handleNext} text={message} title='Бонус: факт о НЛМК'/>
}