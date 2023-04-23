import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { Text } from '../../common/Text';
import { TrackStartScreen } from '../../common/TrackStartScreen';
import { GRADES } from '../../../constants/grades';

export function Screen32() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_3[GRADES.GRADE_1]);
  }
  const text = (
      <>
        <Text>
          Ты молод и амбициозен — поздравляем, ты <b>принят на позицию специалиста поддерживающих функций.</b>
        </Text>
        <br/>
        <Text>
          Теперь тебе предстоит получить <b>реальный опыт работы в компании!</b>
        </Text>
      </>

  )
  const additionalText = (
      <>
        <Text>
          В ногу с технологиями — НЛМК <b>реализует масштабную программу цифровой трансформации!</b>
        </Text>
        <br/>
        <Text>
          В производственный процесс НЛМК активно
          <b> внедряются цифровые советчики, инструменты предиктивной аналитики </b>
          с использованием искусственного интеллекта и машинного обучения.
        </Text>
      </>
  )
  return <TrackStartScreen position={'top'} onNext={handleNext} text={text} additionalText={additionalText}/>
}
