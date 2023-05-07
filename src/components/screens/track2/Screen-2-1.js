import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { Text } from '../../common/Text';
import { SCREENS } from '../../../constants/screens';
import { BaseScratchGameScreen } from '../../common/BaseScratchGameScreen';
import scratchResultTrack2 from '../../../assets/images/scratchResultTrack2.png';

export function Screen21() {
  const { next } = useScreen();

  const finishText = (
      <Text>
        <b>Тебя ждут комфортные и современные офисы!</b> А коллеги помогут тебе
        адаптироваться! <b>А пока пора двигаться дальше…</b>
      </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_2.SCREEN_2_1);
  }

  return <BaseScratchGameScreen image={scratchResultTrack2} finishText={finishText} onNext={handleNext} />
}
