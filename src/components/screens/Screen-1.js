import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { ScreenTemplate } from '../ScreenTemplate';

export function Screen1() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_1);
  }

  return (
    <ScreenTemplate>
      <div>Screen-1</div>
      <button onClick={handleNext}>next</button>
    </ScreenTemplate>
  )
}
