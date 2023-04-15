import React from 'react';
import { GameStateProvider } from './components/GameStateProvider';
import { ScreenProvider } from './components/ScreenProvider';
import { ScreenResolver } from './components/ScreenResolver';

export function App() {
  return (
    <GameStateProvider>
      <ScreenProvider>
        <ScreenResolver />
      </ScreenProvider>
    </GameStateProvider>
  );
}
