import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { Text } from '../../common/Text';
import { MapModalScreen } from '../../common/MapModalScreen';

export function Screen322() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_3.SCREEN_2_3);
  }

  const text = (
      <Text>
        В ногу с&nbsp;технологиями — НЛМК <b>реализует масштабную программу цифровой трансформации!</b>
        <br/>
        <br/>
        В производственный процесс НЛМК активно
        <b> внедряются цифровые советчики, инструменты предиктивной аналитики </b>
        с&nbsp;использованием искусственного интеллекта и&nbsp;машинного обучения.
      </Text>
  )
  return <MapModalScreen onNext={handleNext} text={text} title='Бонус: факт о НЛМК' />
}
