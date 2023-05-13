import React from 'react';
import { GameStateProvider } from './components/GameStateProvider';
import { ScreenProvider } from './components/ScreenProvider';
import { ScreenResolver } from './components/ScreenResolver';
import { ScreenTemplate } from './components/ScreenTemplate';
import { useImagePreloader } from './hooks/useImagePreloader';
import map from './assets/images/map.jpg';

export function App() {
  useImagePreloader([map]);

  return (
    <ScreenProvider>
      <GameStateProvider>
        <ScreenTemplate>
          <ScreenResolver />
        </ScreenTemplate>
      </GameStateProvider>
    </ScreenProvider>
  );
}
