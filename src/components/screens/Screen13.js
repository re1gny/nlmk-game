import { BaseMapViewScreen } from '../common/BaseMapViewScreen';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export const MapScreen = () => {
    const {next} = useScreen();
    function handleBack() {
        next(SCREENS.SCREEN_12);
    }
    return <BaseMapViewScreen onBack={handleBack}/>
}