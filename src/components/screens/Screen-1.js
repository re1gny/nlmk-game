import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';

export function Screen1() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_1);
  }

  return (
    <div>
      <div>Screen-1</div>
      <button onClick={handleNext}>next</button>
    </div>
  )
}
