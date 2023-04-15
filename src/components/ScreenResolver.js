import React from 'react';
import { useScreen } from '../hooks/useScreen';
import { SCREEN_COMPONENTS } from '../constants/screens';

export function ScreenResolver() {
  const { screen } = useScreen();

  const Screen = SCREEN_COMPONENTS[screen];

  if (!Screen) {
    return null;
  }

  return <Screen />;
}
