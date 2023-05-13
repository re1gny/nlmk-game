import styled from '@emotion/styled';
import { Button } from './Button';
import React, { useState } from 'react';
import { Map } from './Map';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const NextButton = styled(Button)`
  position: absolute;
  right: 27px;
  bottom: 66px;
  padding: 14px 21px;
  font-size: 16px;
  width: auto;
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

export const MapMovingScreen = ({onNext}) => {
  const [nextActionVisible, setNextActionVisible] = useState(true);

  function handleActiveObjectChange(object, position) {
    if (!object || position !== 'bottom') {
      setNextActionVisible(true);
      return;
    }

    setNextActionVisible(false);
  }

    return (
      <Wrapper>
        <Map withPathMove onActiveObjectChange={handleActiveObjectChange} />
        {nextActionVisible && (
          <NextButton onClick={onNext}>
            Продолжить путь
          </NextButton>
        )}
      </Wrapper>
    );
};