import React from 'react';
import { MapInfoScreen } from './MapInfoScreen';
import { Text } from './Text';

export const MapPathInfoScreen = ({position, onNext}) => {
    return (
      <MapInfoScreen
        position={position}
        text={(
          <Text>
            <b>Точки на карте — это должности</b>, которые ты достигаешь в игре.
            <br/>
            <b>Кликни на точку</b>, чтобы посмотреть, какие позиции
            уже позади, а на какой ты находишься сейчас
          </Text>
        )}
        onNext={onNext}
      />
    );
};