import { useScreen } from '../../hooks/useScreen';
import { BaseTetrisGameScreen } from '../common/BaseTetrisGameScreen';
import { SCREENS } from '../../constants/screens';

export const TetrisScreen = () => {
    const { next } = useScreen();

    function handleNext() {
        next(SCREENS.SCREEN_16);
    }

    return <BaseTetrisGameScreen onNext={handleNext} />
}