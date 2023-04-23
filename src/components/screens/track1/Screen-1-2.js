import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { TrackStartScreen } from '../../common/TrackStartScreen';
import { Text } from '../../common/Text';
import { GRADES } from '../../../constants/grades';

export function Screen12() {
  const { next } = useScreen();

  function handleNext() {
    next(SCREENS.TRACK_1[GRADES.GRADE_1]);
  }
  const text = (
      <Text>
        Ура, ты принят на <b>позицию рабочего!</b>
        Тебе удается применять все практические знания, и
        <b> наставник тобой доволен.</b>
      </Text>
  )
  const additionalText = (
      <>
        <Text bold>
          Забота об экологии — это всегда важно!
        </Text>
        <br/>
        <Text>
          <b>Липецк</b>, где расположены 80% сталеплавильных мощностей
          Группы НЛМК, <b>признан самым чистым металлургическим городом России </b> —
          состав воздуха в нем соответствует городам, не имеющим крупных производств.
        </Text>
      </>
  )
  return <TrackStartScreen position={'bottom'} onNext={handleNext} text={text} additionalText={additionalText}/>
}

