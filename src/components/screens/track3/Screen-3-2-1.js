import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { Text } from '../../common/Text';
import { MapInfoScreen } from '../../common/MapInfoScreen';

export function Screen321() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_3.SCREEN_2_2);
  }
  const text = (
      <Text>
        Ты молод, амбициозен и обладаешь большим запасом прочности&nbsp;—&nbsp;поздравляем, 
        ты <b>принят на позицию специалиста поддерживающих функций.</b>
        <br/>
        <br/>
        Теперь тебе предстоит получить <b>реальный опыт работы в компании!</b>
      </Text>

  )

  return <MapInfoScreen position={'top'} onNext={handleNext} text={text} />
}
