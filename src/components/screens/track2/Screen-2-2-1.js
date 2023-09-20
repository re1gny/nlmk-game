import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { Text } from '../../common/Text';
import { MapInfoScreen } from '../../common/MapInfoScreen';

export function Screen221() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_2.SCREEN_2_2);
  }
  const text = (
      <Text>
        Благодаря стальному характеру ты легко преодолеваешь все трудности! 
        Ты <b>принят на позицию специалиста.</b> Теперь тебе <b>предстоит 
        получить практический опыт</b> в&nbsp;Группе&nbsp;НЛМК. 
      </Text>
  )

  return <MapInfoScreen position={'top'} onNext={handleNext} text={text} />
}
