import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  animation: backdropAppear 0.2s both;
  
  @keyframes backdropAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.3;
    }
  }
`;

const Content = styled.div`
  height: 100%;
  animation: contentAppear 0.4s both;

  @keyframes contentAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export function Modal({ children, className }) {
  return (
    <Wrapper>
      <Backdrop />
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
}
