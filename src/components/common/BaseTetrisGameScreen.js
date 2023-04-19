import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';
import { Modal } from './Modal';
import { ModalInfoPanel } from './ModalInfoPanel';
import { Button } from './Button';
import { TetrisGame } from './TetrisGame';
import { useScreen } from '../../hooks/useScreen';
import infoIcon from '../../assets/icons/info.svg';
import restartIcon from '../../assets/icons/restart.svg';

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 12px 20px;
  flex-shrink: 0;
`;

const BottomWrapper = styled.div`
  padding: 12px 20px 40px;
  flex-grow: 1;
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
`;

const SkipButton = styled(Button)`
  font-size: 12px;
  line-height: 120%;
  padding: 4px 8px;
  width: auto;
`;

const RestartButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RestartIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const RestartText = styled(Text)`
  margin-left: 7px;
  color: #FFFFFF;
`;

const InfoIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  cursor: pointer;
`;

const InfoModalPanel = styled(ModalInfoPanel)`
  padding: 14px 21px;
`;

const FinishModalPanel = styled(ModalInfoPanel)`
  padding: 20px;
`;

const FinishButton = styled(Button)`
  margin-top: 20px;
`;

const CloseInfoButton = styled(Button)`
  width: auto;
  padding: 20px 50px;
  margin-top: 16px;
  font-size: 16px;
`;

function FinishModal({ success, onNext, onRestart }) {
  return (
    <Modal>
      <FinishModalPanel>
        {success ? (
          <>
            <Text>
              <Text bold>Ура-ура!</Text> Всё получилось,
              <br/>
              пора идти дальше?
            </Text>
            <FinishButton onClick={onNext}>Продолжить</FinishButton>
          </>
        ) : (
          <>
            <Text>
              <Text bold>Упс,</Text> башня собирается не по плану...
              <br/>
              Ничего страшного, ты можешь
              <br/>
              <Text bold>попробовать ещё раз!</Text>
            </Text>
            <FinishButton onClick={onRestart}>Играть снова</FinishButton>
          </>
        )}
      </FinishModalPanel>
    </Modal>
  );
}

function InfoModal({ onClose }) {
  return (
    <Modal>
      <InfoModalPanel>
        <Text>
          <Text bold>Последовательно собери башню</Text>, чтобы она была устойчива!
          <br/>
          <Text bold>Выбирай</Text> фигуры слева и <Text bold>опускай</Text> их на нужные места
        </Text>
      </InfoModalPanel>
      <CloseInfoButton onClick={onClose}>Понятно</CloseInfoButton>
    </Modal>
  );
}

export function BaseTetrisGameScreen({ onNext }) {
  const { config } = useScreen();
  const tetrisInstanceRef = useRef();
  const [finishModalOpened, setFinishModalOpened] = useState(false);
  const [success, setSuccess] = useState(null);
  const [infoModalOpened, setInfoModalOpened] = useState(false);

  function handleFinish(success) {
    setFinishModalOpened(true);
    setSuccess(success);
  }

  function handleRestart() {
    tetrisInstanceRef.current?.restart();
    setFinishModalOpened(false);
    setSuccess(null);
  }

  function handleInfoOpen() {
    setInfoModalOpened(true);
  }

  function handleInfoClose() {
    setInfoModalOpened(false);
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
        <RightActions>
          <RestartButton onClick={handleRestart}>
            <RestartIcon src={restartIcon} alt="" />
            <RestartText bold>заново</RestartText>
          </RestartButton>
          <InfoIcon src={infoIcon} alt="" onClick={handleInfoOpen} />
        </RightActions>
      </TopWrapper>
      <BottomWrapper>
        <TetrisGame ref={tetrisInstanceRef} onFinish={handleFinish} />
      </BottomWrapper>
      {finishModalOpened && <FinishModal success={success} onNext={onNext} onRestart={handleRestart} />}
      {infoModalOpened && <InfoModal onClose={handleInfoClose} />}
    </>
  );
}
