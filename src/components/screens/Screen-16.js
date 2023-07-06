import { useGameState } from '../../hooks/useGameState';
import { useScreen } from '../../hooks/useScreen';
import { MapMovingScreen } from '../common/MapMovingScreen';
import { SCREENS } from '../../constants/screens';

export const BeforeNextScreen = () => {
    const {next, params} = useScreen();
    const {
        track,
        grade,
    } = useGameState();

    function handleNext() {
        next(params?.nextScreen || SCREENS[track][grade]);
    }
    return <MapMovingScreen onNext={handleNext} />
}