import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { MapInfoScreen } from '../../common/MapInfoScreen';
import { Text } from '../../common/Text';

export function Screen121() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_2_2);
  }
  const text = (
      <Text>
        Ура, ты принят на <b>позицию рабочего!</b> Тебе удается
        применять все практические знания, и <b>наставник тобой доволен.</b>
      </Text>
  )

  return <MapInfoScreen position={'bottom'} onNext={handleNext} text={text} />
}

