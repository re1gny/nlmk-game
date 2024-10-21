import React, {useLayoutEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';
import { Modal } from './Modal';
import { ModalInfoPanel } from './ModalInfoPanel';
import { Button } from './Button';
import { CardsGame, UNIQ_CARDS_AMOUNT } from './CardsGame';
import { useScreen } from '../../hooks/useScreen';
import infoIcon from '../../assets/icons/info.svg';
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 28px 32px;
  flex-shrink: 0;
`;

const MiddleWrapper = styled.div`
  padding: 28px 32px 30px;
  flex-grow: 1;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px 20px 40px;
  flex-shrink: 0;
`;

const SkipButton = styled(Button)`
  font-size: 12px;
  line-height: 120%;
  padding: 4px 8px;
  width: auto;
`;

const InfoIcon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const ResultText = styled(Text)`
  color: #FFFFFF;
`;

const InfoModalPanel = styled(ModalInfoPanel)`
  padding: 14px 21px;
`;

const FinishButton = styled(Button)`
  width: auto;
  padding: 20px 36px;
  font-size: 16px;
`;

const CloseInfoButton = styled(Button)`
  width: auto;
  padding: 20px 28px;
  margin-top: 16px;
  font-size: 16px;
`;

function FinishModal({ onNext }) {
  return (
    <Modal>
      <FinishButton onClick={onNext}>Так держать!</FinishButton>
    </Modal>
  );
}

function InfoModal({ onClose }) {
  return (
    <Modal>
      <InfoModalPanel>
        <Text>
          Переворачивай по&nbsp;очереди пары карточек: <b>твоя задача — найти все одинаковые карточки.</b>
          <br/>
          Попробуй достичь эту цель <b>за&nbsp;минимальное количество шагов</b>
        </Text>
      </InfoModalPanel>
      <CloseInfoButton onClick={onClose}>Попробовать</CloseInfoButton>
    </Modal>
  );
}

export function BaseCardsGameScreen({ onNext }) {
  const { config } = useScreen();
  const [guessedAmount, setGuessedAmount] = useState(0);
  const [finishModalOpened, setFinishModalOpened] = useState(false);
  const [infoModalOpened, setInfoModalOpened] = useState(true);
  const isStartedRef = useRef(false);

  function handleGuess() {
    setGuessedAmount(prev => prev + 1);
  }

  function handleFinish() {
    setFinishModalOpened(true);
  }

  function handleInfoOpen() {
    setInfoModalOpened(true);
  }

  function handleInfoClose() {
    if (!isStartedRef.current) {
      reachMetrikaGoal('gamecard');
    }

    setInfoModalOpened(false);
    isStartedRef.current = true;
  }

  useLayoutEffect(() => {
    config.setDarkBackground();

    return () => {
      config.setLightBackground();
    };
  }, []);

  return (
    <>
      <TopWrapper>
        <SkipButton variant='outlined' onClick={onNext}>Пропустить игру</SkipButton>
        <InfoIcon src={infoIcon} alt="" onClick={handleInfoOpen} />
      </TopWrapper>
      <MiddleWrapper>
        <CardsGame onGuess={handleGuess} onFinish={handleFinish} />
      </MiddleWrapper>
      <BottomWrapper>
        <ResultText>открытые пары: {guessedAmount || 'х'}/{UNIQ_CARDS_AMOUNT}</ResultText>
      </BottomWrapper>
      {finishModalOpened && <FinishModal onNext={onNext} />}
      {infoModalOpened && <InfoModal onClose={handleInfoClose} />}
    </>
  );
}
