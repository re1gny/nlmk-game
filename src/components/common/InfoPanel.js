import React from 'react';
import styled from '@emotion/styled';
import { Panel } from './Panel';
import { Text } from './Text';

const VARIANT_TO_BACKGROUND = {
  dark: '#003399',
  light: '#FFFFFF',
}

const VARIANT_TO_BORDER = {
  dark: undefined,
  light: '1px solid #003399',
}

const VARIANT_TO_COLOR = {
  dark: '#FFFFFF',
  light: '#003399',
}

const Wrapper = styled(Panel)`
  position: relative;
  background: ${({ variant }) => VARIANT_TO_BACKGROUND[variant]};
  border: ${({ variant }) => VARIANT_TO_BORDER[variant]};
  color: ${({ variant }) => VARIANT_TO_COLOR[variant]};
  text-align: center;
`;

const Title = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  padding: 12px 20px;
  background: #003FE3;
  border-radius: 10px;
`;

const TitleText = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  color: #FFFFFF;
  white-space: nowrap;
`;

export function InfoPanel({ children, title, className, variant = 'dark' }) {
  return (
    <Wrapper className={className} variant={variant}>
      {!!title && (
        <Title>
          <TitleText>{title}</TitleText>
        </Title>
      )}
      {children}
    </Wrapper>
  );
}
