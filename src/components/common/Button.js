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

const VARIANT_TO_COLOR = {
  primary: '#FFFFFF',
  outlined: '#FFFFFF',
};

const VARIANT_TO_DISABLED_COLOR = {
  primary: '#E2E2E2',
  outlined: '#E2E2E2',
};

const VARIANT_TO_DISABLED_BORDER = {
  primary: 'none',
  outlined: '1px solid #E2E2E2',
};

const VARIANT_TO_DISABLED_BACKGROUND = {
  primary: '#E35C01',
  outlined: 'transparent',
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ variant, disabled }) => disabled ? VARIANT_TO_DISABLED_BACKGROUND[variant] : VARIANT_TO_BACKGROUND[variant]};
  border-radius: 10px;
  font-weight: ${({ variant }) => VARIANT_TO_FONT_WEIGHT[variant]};
  font-size: 21px;
  line-height: 120%;
  text-align: center;
  color: ${({ variant, disabled }) => disabled ? VARIANT_TO_DISABLED_COLOR[variant] : VARIANT_TO_COLOR[variant]};
  border: ${({ variant, disabled }) => disabled ? VARIANT_TO_DISABLED_BORDER[variant] : VARIANT_TO_BORDER[variant]};
  padding: 20px;
  width: 100%;
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
  transition: background 0.2s, color 0.2s;
`;

export function Button({ children, className, disabled, variant = 'primary', onClick }) {
  return (
    <Wrapper className={className} disabled={disabled} variant={variant} onClick={onClick}>
      {children}
    </Wrapper>
  );
}
