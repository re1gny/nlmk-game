import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';
import { SCREENS } from '../../constants/screens';
import { BaseCardsGameScreen } from '../common/BaseCardsGameScreen';

export const Screen7 = () => {
    const {next} = useScreen();
    const {track, grade} = useGameState();

    function handleNext() {
        next(SCREENS[track][grade]);
    }

    return <BaseCardsGameScreen onNext={handleNext}/>
}