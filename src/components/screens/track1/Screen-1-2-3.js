import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { MapPathInfoScreen } from '../../common/MapPathInfoScreen';
import { GRADES } from '../../../constants/grades';

export function Screen123() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1[GRADES.GRADE_1]);
  }

  return <MapPathInfoScreen position={'bottom'} onNext={handleNext} />
}

