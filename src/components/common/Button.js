import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.button`
  background: #FF6600;
  border-radius: 10px;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  border: none;
  padding: 20px 0;
  width: 100%;
  cursor: pointer;
`;

export function Button({ children, className, onClick }) {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
