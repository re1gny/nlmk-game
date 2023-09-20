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
        <b>Тебя ждут комфортные и современные офисы,</b> а коллеги помогут 
        тебе адаптироваться! <b>Теперь пора закладывать надежный фундамент
        для своего будущего...</b>
      </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_3.SCREEN_2_1);
  }

  return <BaseScratchGameScreen image={scratchResultTrack3} finishText={finishText} onNext={handleNext} />
}
