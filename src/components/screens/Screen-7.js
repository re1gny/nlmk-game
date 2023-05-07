import { useScreen } from '../../hooks/useScreen';
import { useGameState } from '../../hooks/useGameState';
import { SCREENS } from '../../constants/screens';
import { BaseCardsGameScreen } from '../common/BaseCardsGameScreen';

export const Screen7 = () => {
    const {next} = useScreen();
    const {passCardsGame} = useGameState();

    function handleNext() {
        next(SCREENS.SCREEN_16)
        passCardsGame();
    }

    return <BaseCardsGameScreen onNext={handleNext}/>
}