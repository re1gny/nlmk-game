import { useContext } from 'react';
import { ScreenContext } from '../contexts/Screen';

export function useScreen() {
  return useContext(ScreenContext)
}