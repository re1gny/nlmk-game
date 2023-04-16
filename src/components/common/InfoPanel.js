import React from 'react';
import styled from '@emotion/styled';
import { Panel } from './Panel';

const Wrapper = styled(Panel)`
  background: ${({ variant }) => variant === 'dark' ? '#003399' : '#FFFFFF'};
  border: ${({ variant }) => variant === 'light' ? '1px solid #003399' : undefined};
  color: ${({ variant }) => variant === 'dark' ? '#FFFFFF' : '#003399'};
  text-align: center;
`;

export function InfoPanel({ children, className, variant = 'dark' }) {
  return (
    <Wrapper className={className} variant={variant}>
      {children}
    </Wrapper>
  );
}
