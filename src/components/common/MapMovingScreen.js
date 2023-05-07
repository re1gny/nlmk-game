import styled from '@emotion/styled';
import { Button } from './Button';
import React from 'react';
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
`;

export const MapMovingScreen = ({onNext}) => {
    return (
      <Wrapper>
        <Map />
        <NextButton onClick={onNext}>
          Продолжить путь
        </NextButton>
      </Wrapper>
    );
};