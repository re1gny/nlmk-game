import React from 'react';
import { BaseTetrisGameScreen } from '../../common/BaseTetrisGameScreen';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';

export function Screen13() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_4);
  }

  return <BaseTetrisGameScreen onNext={handleNext} />;
}
