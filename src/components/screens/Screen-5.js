import { useGameState } from '../../hooks/useGameState';
import { useScreen } from '../../hooks/useScreen';
import { MapModalScreen } from '../common/MapModalScreen';
import { SCREENS } from '../../constants/screens';
import { messages } from '../../constants/messages';
import { useState } from 'react';

export const Screen5 = () => {
    const {next} = useScreen();
    const {
        messageId, track,
        grade, setNextMessageId,
        path
    } = useGameState();

    const [message] = useState(messages[messageId].text);

    function handleNext() {
        const hadChangeTrack = [...path].slice(1)
            .filter(prevTrack => prevTrack.split('.')[0] === track)
            .length !== (path.length - 1);

        setNextMessageId();
        if (!hadChangeTrack) {
            next(SCREENS[track][grade]);
            return;
        }
        next(SCREENS.SCREEN_6);
    }
    return <MapModalScreen onNext={handleNext} text={message}/>
}