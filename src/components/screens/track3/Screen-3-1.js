import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { Text } from '../../common/Text';
import { SCREENS } from '../../../constants/screens';
import { BaseScratchGameScreen } from '../../common/BaseScratchGameScreen';
import scratchResultTrack3 from '../../../assets/images/scratchResultTrack3.png';

export function Screen31() {
  const { next } = useScreen();

  const finishText = (
      <Text>
        <b>Тебя ждут комфортные и современные офисы!</b> А коллеги помогут тебе
        адаптироваться! <b>А пока пора двигаться дальше…</b>
      </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_3.SCREEN_2_1);
  }

  return <BaseScratchGameScreen image={scratchResultTrack3} finishText={finishText} onNext={handleNext} />
}
