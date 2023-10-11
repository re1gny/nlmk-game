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
      <b>Тебя ждут комфортные и&nbsp;современные цеха,</b> а&nbsp;коллеги помогут
      тебе адаптироваться! <b>Теперь пора закладывать надежный фундамент
      для&nbsp;своего будущего...</b>
    </Text>
  );

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_2_1);
  }

  return <BaseScratchGameScreen image={scratchResultTrack1} finishText={finishText} onNext={handleNext} />
}
