import React from 'react';
import styled from '@emotion/styled';
import { Panel } from './Panel';

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
  background: ${({ variant }) => VARIANT_TO_BACKGROUND[variant]};
  border: ${({ variant }) => VARIANT_TO_BORDER[variant]};
  color: ${({ variant }) => VARIANT_TO_COLOR[variant]};
  text-align: center;
`;

export function InfoPanel({ children, className, variant = 'dark' }) {
  return (
    <Wrapper className={className} variant={variant}>
      {children}
    </Wrapper>
  );
}
