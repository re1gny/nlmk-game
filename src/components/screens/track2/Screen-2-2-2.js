import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { Text } from '../../common/Text';
import { MapModalScreen } from '../../common/MapModalScreen';

export function Screen222() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_2.SCREEN_2_3);
  }
  const text = (
      <Text>
        <b>Искусственный интеллект и Big Data</b> активно используются НЛМК уже сегодня.
        <br/>
        <br/>
        Среди инструментов компании можно встретить <b>VR и AR, машинное зрение,
        интернет вещей, машинное обучение и нейронные сети.</b>
      </Text>
  )
  return <MapModalScreen onNext={handleNext} text={text} title='Бонус: факт о НЛМК' />
}
