import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ScratchGame } from './ScratchGame';
import { InfoPanel } from './InfoPanel';
import { Text } from './Text';
import { Modal } from './Modal';
import { ScreenTemplate } from '../ScreenTemplate';
import { ModalInfoPanel } from './ModalInfoPanel';
import { Button } from './Button';

const Wrapper = styled(ScreenTemplate)`
  display: flex;
  flex-direction: column;
`;

const Info = styled(InfoPanel)`
  padding: 14px 20px;
`;

const TopWrapper = styled.div`
  padding: 60px 20px 30px;
  flex-shrink: 0;
`;

const BottomWrapper = styled.div`
  padding: 30px 40px 60px;
  flex-grow: 1;
`;

const FinishModalWrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 20px;
  animation: contentAppear 0.4s both;

  @keyframes contentAppear {
    0% {
      opacity: 0;
      transform: translateY(40%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalPanel = styled(ModalInfoPanel)`
  padding: 20px;
`;

const FinishButton = styled(Button)`
  margin-top: 24px;
`;

function FinishModal({ children, onNext }) {
  return (
    <FinishModalWrapper>
      <ModalPanel>
        <div>{children}</div>
        <FinishButton onClick={onNext}>ДАЛЕЕ</FinishButton>
      </ModalPanel>
    </FinishModalWrapper>
  );
}

export function BaseScratchGameScreen({ image, finishText, onNext }) {
  const [finishModalOpened, setFinishModalOpened] = useState(false);

  function handleFinish() {
    setFinishModalOpened(true);
  }

  return (
    <Wrapper>
      <TopWrapper>
        <Info>
          <Text>
            Первые шаги сделаны! <Text bold>Сотри с карточки верхний слой</Text>,
            чтобы увидеть, в какой обстановке тебе <Text bold>предстоит работать</Text>
          </Text>
        </Info>
      </TopWrapper>
      <BottomWrapper>
        <ScratchGame image={image} onFinish={handleFinish} />
      </BottomWrapper>
      {finishModalOpened && <FinishModal onNext={onNext}>{finishText}</FinishModal>}
    </Wrapper>
  );
}
