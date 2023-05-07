import React from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import { useGameState } from '../../hooks/useGameState';
import { Map } from './Map';

const BackButton = styled(Button)`
  position: absolute;
  width: auto;
  top: 27px;
  left: 27px;
  font-size: 12px;
  padding: 12px 50px;
`;

const BackIcon = styled.img`
  width: 12px;
  height: 12px;
  min-width: 12px;
  margin-right: 4px;
  margin-top: -2px;
`;

const RetryButton = styled(Button)`
  position: absolute;
  width: auto;
  bottom: 69px;
  left: 27px;
  font-size: 16px;
  padding: 20px 24px;
`;

export function BaseMapViewScreen({ onBack }) {
  const { reset } = useGameState();

  return (
    <>
      <Map />
      <BackButton onClick={onBack}>
        <BackIcon src={arrowLeftIcon} alt="" />
        НАЗАД
      </BackButton>
      <RetryButton variant="tertiary" onClick={reset}>ПРОЙТИ ЕЩЁ РАЗ</RetryButton>
    </>
  );
}
