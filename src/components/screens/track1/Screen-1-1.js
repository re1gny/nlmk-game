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
      <Text bold>Тебя ждут комфортные и современные цеха!</Text> А коллеги помогут тебе
      адаптироваться! <Text bold>А пока пора двигаться дальше…</Text>
    </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_2);
  }

  return <BaseScratchGameScreen image={scratchResultTrack1} finishText={finishText} onNext={handleNext} />
}
