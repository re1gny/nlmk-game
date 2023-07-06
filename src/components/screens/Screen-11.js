import { useScreen } from '../../hooks/useScreen';
import { BaseTetrisGameScreen } from '../common/BaseTetrisGameScreen';
import { SCREENS } from '../../constants/screens';
import { useGameState } from '../../hooks/useGameState';

export const TetrisScreen = () => {
    const { next } = useScreen();
    const { track, grade } = useGameState();

    function handleNext() {
        next(SCREENS[track][grade]);
    }

    return <BaseTetrisGameScreen onNext={handleNext} />
}