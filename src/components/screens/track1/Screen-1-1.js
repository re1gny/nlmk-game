import React from 'react';
import scratchResultTrack1 from '../../../assets/images/scratchResultTrack1.png';
import { BaseScratchGameScreen } from '../../common/BaseScratchGameScreen';
import { Text } from '../../common/Text';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';

export function Screen11() {
  const { next } = useScreen();

  const finishText = (
    <Text>
      <b>Тебя ждут комфортные и современные цеха!</b> А коллеги помогут тебе
      адаптироваться! <b>А пока пора двигаться дальше…</b>
    </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_2_1);
  }

  return <BaseScratchGameScreen image={scratchResultTrack1} finishText={finishText} onNext={handleNext} />
}
