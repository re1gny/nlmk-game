import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.span`
  display: inline-block;
  font-size: 16px;
  line-height: 120%;
  font-weight: ${({ bold }) => bold ? 700 : 350};
  
  @media screen and (max-width: 325px) {
    font-size: 13px;
  }
`;

export function Text({ children, className, bold, onClick }) {
  return (
    <Wrapper className={className} bold={bold} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
