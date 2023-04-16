import React, { useRef } from 'react';
import styled from '@emotion/styled'
import { Transition } from 'react-transition-group';
import screenBackdrop from '../assets/images/screenBackdrop.svg';
import { useScreen } from '../hooks/useScreen';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const BACKGROUND_TO_COLOR = {
  dark: '#003399',
  light: '#FFFFFF',
};

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${screenBackdrop});
  background-size: 100% 100%;
  background-color: ${({ background }) => BACKGROUND_TO_COLOR[background]};
  transition: background-color 0.2s;
  overflow: hidden;

  @media (min-width: 480px) {
    max-width: 375px;
    max-height: 677px;
    border: 2px solid #000000;
    border-radius: 10px;
  }
`;

const ScreenContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
`;

export function ScreenTemplate({ children, className }) {
  const { config, screenSwitching } = useScreen();
  const { background, screenSwitchingDuration } = config;
  const screenContentRef = useRef();

  const defaultStyle = {
    transition: `opacity ${screenSwitchingDuration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  return (
    <Wrapper>
      <Screen className={className} background={background}>
        <Transition nodeRef={screenContentRef} in={!screenSwitching} timeout={screenSwitchingDuration}>
          {state => (
            <ScreenContent ref={screenContentRef} style={{ ...defaultStyle, ...transitionStyles[state] }}>
              {children}
            </ScreenContent>
          )}
        </Transition>
      </Screen>
    </Wrapper>
  );
}
