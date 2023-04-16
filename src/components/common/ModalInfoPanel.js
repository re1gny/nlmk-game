import React from 'react';
import styled from '@emotion/styled';
import { InfoPanel } from './InfoPanel';

const Wrapper = styled(InfoPanel)`
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.25);
`;

export function ModalInfoPanel({ children, className }) {
  return (
    <Wrapper className={className} variant='light'>
      {children}
    </Wrapper>
  );
}
