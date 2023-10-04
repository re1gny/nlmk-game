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
        <b>Тебя ждут комфортные и современные офисы,</b> а коллеги помогут
        тебе адаптироваться! <b>Теперь пора закладывать надежный фундамент
        для своего будущего...</b>
      </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_2.SCREEN_2_1);
  }

  return <BaseScratchGameScreen image={scratchResultTrack2} finishText={finishText} onNext={handleNext} />
}
