import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { MapModalScreen } from '../../common/MapModalScreen';
import { Text } from '../../common/Text';

export function Screen122() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1.SCREEN_2_3);
  }

  const text = (
      <Text>
        <b>Забота об экологии — это всегда важно!</b>
        <br/>
        <br/>
        <b>Липецк</b>, где расположены 80% сталеплавильных 
        мощностей Группы НЛМК, <b>признан самым чистым металлургическим 
        городом России</b>&nbsp;—&nbsp;индекс чистоты воздуха там 
        такой же, как и в городах, где нет крупных производств.
      </Text>
  )
  return <MapModalScreen onNext={handleNext} text={text} title='Бонус: факт о НЛМК' />
}

