import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { Text } from '../../common/Text';
import { TrackStartScreen } from '../../common/TrackStartScreen';
import { GRADES } from '../../../constants/grades';

export function Screen22() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_2[GRADES.GRADE_1]);
  }
  const text = (
      <Text>
        Ты легко преодолеваешь все трудности!
        Ты <b>принят на позицию специалиста</b>.
        Теперь тебе <b>предстоит получить практический опыт </b>в Группе НЛМК.
      </Text>
  )
  const additionalText = (
      <>
        <Text>
          <b>Искусственный интеллект и big data</b> активно используются НЛМК уже сегодня.
        </Text>
        <br/>
        <Text>
          Среди инструментов компании можно встретить <b>VR и AR, машинное зрение,
          интернет вещей, машинное обучение и нейронные сети.</b>
        </Text>
      </>
  )
  return <TrackStartScreen position={'bottom'} onNext={handleNext} text={text} additionalText={additionalText}/>
}
