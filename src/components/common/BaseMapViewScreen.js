import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import { useGameState } from '../../hooks/useGameState';
import { Map } from './Map';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const BackButton = styled(Button)`
  position: absolute;
  width: auto;
  top: 27px;
  left: 27px;
  font-size: 12px;
  padding: 12px 50px;
  animation: appear 0.2s both;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BackIcon = styled.img`
  width: 12px;
  height: 12px;
  min-width: 12px;
  margin-right: 4px;
  margin-top: -2px;
  animation: appear 0.2s both;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
  const [backActionVisible, setBackActionVisible] = useState(true);
  const [retryActionVisible, setRetryActionVisible] = useState(true);

  function handleActiveObjectChange(object, position) {
    if (!object) {
      setBackActionVisible(true);
      setRetryActionVisible(true);
      return;
    }

    if (position === 'top') {
      setBackActionVisible(false);
      return;
    }

    setRetryActionVisible(false);
  }

  function handleReset() {
    reachMetrikaGoal('again');
    reset();
  }

  return (
    <>
      <Map withOverlay withAllPoints onActiveObjectChange={handleActiveObjectChange} />
      {backActionVisible && (
        <BackButton onClick={onBack}>
          <BackIcon src={arrowLeftIcon} alt="" />
          НАЗАД
        </BackButton>
      )}
      {retryActionVisible && (
        <RetryButton variant="tertiary" onClick={handleReset}>
          ПРОЙТИ ЕЩЁ РАЗ
        </RetryButton>
      )}
    </>
  );
}
