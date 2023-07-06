import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';
import { SCREENS } from '../../constants/screens';
import { BaseCardsGameScreen } from '../common/BaseCardsGameScreen';

export const Screen7 = () => {
    const {next} = useScreen();
    const {track, grade, passCardsGame} = useGameState();

    function handleNext() {
        next(SCREENS[track][grade]);
        passCardsGame();
    }

    return <BaseCardsGameScreen onNext={handleNext}/>
}