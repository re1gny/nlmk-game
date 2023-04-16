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

const PLACEMENT_TO_JUSTIFY_CONTENT = {
  center: 'center',
  bottom: 'flex-end',
}

const PLACEMENT_TO_START_TRANSFORM = {
  center: 'scale(0.8)',
  bottom: 'translateY(40%)',
}

const PLACEMENT_TO_END_TRANSFORM = {
  center: 'scale(1)',
  bottom: 'translateY(0)',
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ placement }) => PLACEMENT_TO_JUSTIFY_CONTENT[placement]};
  height: 100%;
  padding: 40px 20px;
  animation: contentAppear 0.4s both;

  @keyframes contentAppear {
    0% {
      opacity: 0;
      transform: ${({ placement }) => PLACEMENT_TO_START_TRANSFORM[placement]};
    }
    100% {
      opacity: 1;
      transform: ${({ placement }) => PLACEMENT_TO_END_TRANSFORM[placement]};
    }
  }
`;

export function Modal({ children, className, placement }) {
  return (
    <Wrapper>
      <Backdrop />
      <Content className={className} placement={placement}>{children}</Content>
    </Wrapper>
  );
}
