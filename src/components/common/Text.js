import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.span`
  font-size: 16px;
  line-height: 120%;
  font-weight: ${({ bold }) => bold ? 700 : 350};
`;

export function Text({ children, className, bold, onClick }) {
  return (
    <Wrapper className={className} bold={bold} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
