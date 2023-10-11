import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightSm from '../../assets/icons/arrowRightSm.svg';
import { useGameState } from '../../hooks/useGameState';
import { ModalInfoPanel } from './ModalInfoPanel';
import { Map } from './Map';
import { Modal } from './Modal';
import { Text } from './Text';
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

const Info = styled(ModalInfoPanel)`
  position: relative;
  padding: 30px 20px;
`;

const NextButton = styled(Button)`
  position: absolute;
  right: 15px;
  top: -15px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #002366;
  padding: 0;
`;

const Arrow = styled.div`
  background-image: url(${arrowRightSm});
  background-repeat: no-repeat;
  background-position: center;
  width: 12px;
  height: 12px;
`;

export function BaseMapViewScreen({ withInfoModal = true, onBack }) {
  const { reset } = useGameState();
  const [backActionVisible, setBackActionVisible] = useState(true);
  const [retryActionVisible, setRetryActionVisible] = useState(true);
  const [infoModalVisible, setInfoModalVisible] = useState(withInfoModal);

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

  function handleCloseInfoModal() {
    setInfoModalVisible(false);
  }

  return (
    <>
      <Map withOverlay withAllPoints usePrevPath={false} onActiveObjectChange={handleActiveObjectChange} />
      {backActionVisible && !infoModalVisible && (
        <BackButton onClick={onBack}>
          <BackIcon src={arrowLeftIcon} alt="" />
          НАЗАД
        </BackButton>
      )}
      {infoModalVisible && (
        <Modal withBackdrop={false}>
          <Info variant={'light'}>
            <Text>
              Обрати внимание: на&nbsp;карте есть <b>синие объекты —</b> они все сделаны
              с&nbsp;использованием <b>продукции НЛМК!</b>
              <br/>
              <br/>
              <b>Кликай по&nbsp;ним,</b> чтобы узнать интересные факты
            </Text>
            <NextButton onClick={handleCloseInfoModal}>
              <Arrow />
            </NextButton>
          </Info>
        </Modal>
      )}
      {retryActionVisible && !infoModalVisible && (
        <RetryButton variant="tertiary" onClick={handleReset}>
          ПРОЙТИ ЕЩЁ РАЗ
        </RetryButton>
      )}
    </>
  );
}
