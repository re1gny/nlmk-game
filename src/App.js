import React from 'react';
import { GameStateProvider } from './components/GameStateProvider';
import { ScreenProvider } from './components/ScreenProvider';
import { ScreenResolver } from './components/ScreenResolver';
import { ScreenTemplate } from './components/ScreenTemplate';

export function App() {
  return (
    <GameStateProvider>
      <ScreenProvider>
        <ScreenTemplate>
          <ScreenResolver />
        </ScreenTemplate>
      </ScreenProvider>
    </GameStateProvider>
  );
}
