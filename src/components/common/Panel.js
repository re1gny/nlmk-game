import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  border-radius: 10px;
`;

export function Panel({ children, className }) {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
}
