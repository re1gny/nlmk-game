import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { BaseMapViewScreen } from '../../common/BaseMapViewScreen';

export function Screen14() {
  const { next } = useScreen();

  function handleBack() {
    next(SCREENS.TRACK_1.SCREEN_3);
  }

  return <BaseMapViewScreen onBack={handleBack} />;
}
