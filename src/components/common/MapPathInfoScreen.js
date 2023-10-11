import React from 'react';
import { MapInfoScreen } from './MapInfoScreen';
import { Text } from './Text';

export const MapPathInfoScreen = ({position, onNext}) => {
    return (
      <MapInfoScreen
        position={position}
        text={(
          <Text>
            <b>Точки на&nbsp;карте</b> показывают твой карьерный путь в&nbsp;компании.
            <br/>
            <b>Кликай на&nbsp;них,</b> чтобы посмотреть, какие позиции уже позади, а&nbsp;на&nbsp;какой ты находишься сейчас
          </Text>
        )}
        onNext={onNext}
      />
    );
};