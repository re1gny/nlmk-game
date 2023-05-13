import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  border-radius: 10px;
`;

export const Panel = forwardRef(({ children, className }, ref) => {
  return (
    <Wrapper ref={ref} className={className}>
      {children}
    </Wrapper>
  );
});
