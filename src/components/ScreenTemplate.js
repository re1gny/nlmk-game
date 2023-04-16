import React from 'react';
import styled from '@emotion/styled'
import screenBackdrop from '../assets/images/screenBackdrop.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${screenBackdrop});
  background-size: 100% 100%;
  transform: translateZ(0);
  overflow: hidden;
  
  @media (min-width: 480px) {
    max-width: 375px;
    max-height: 677px;
    border: 2px solid #000000;
    border-radius: 10px;
  }
`

export function ScreenTemplate({ children, className }) {
  return (
    <Wrapper>
      <Screen className={className}>
        {children}
      </Screen>
    </Wrapper>
  );
}
