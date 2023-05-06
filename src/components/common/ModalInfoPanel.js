import React from 'react';
import styled from '@emotion/styled';
import { InfoPanel } from './InfoPanel';

const Wrapper = styled(InfoPanel)`
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.25);
`;

export function ModalInfoPanel({ children, title, className }) {
  return (
    <Wrapper className={className} title={title} variant='light'>
      {children}
    </Wrapper>
  );
}
