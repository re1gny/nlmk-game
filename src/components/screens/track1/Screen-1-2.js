import React from 'react';
import { BaseCardsGameScreen } from '../../common/BaseCardsGameScreen';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';

export function Screen12() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_3);
  }

  return <BaseCardsGameScreen onNext={handleNext} />
}
