import React from 'react';
import styled from '@emotion/styled';

const VARIANT_TO_BACKGROUND = {
  primary: '#FF6600',
  outlined: 'transparent',
};

const VARIANT_TO_BORDER = {
  primary: 'none',
  outlined: '1px solid #FFFFFF',
};

const VARIANT_TO_FONT_WEIGHT = {
  primary: 700,
  outlined: 400,
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ variant }) => VARIANT_TO_BACKGROUND[variant]};
  border-radius: 10px;
  font-weight: ${({ variant }) => VARIANT_TO_FONT_WEIGHT[variant]};;
  font-size: 21px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  border: ${({ variant }) => VARIANT_TO_BORDER[variant]};;
  padding: 20px;
  width: 100%;
  cursor: pointer;
`;

export function Button({ children, className, variant = 'primary', onClick }) {
  return (
    <Wrapper className={className} variant={variant} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
