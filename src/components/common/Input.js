import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.input`
  background: #fff;
  border-radius: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: ${({error}) => error ? 'red' : '#003399'};
  border: 1px solid #002366;
  padding: 12px 20px;
  width: 100%;
  outline: none;
  font-family: Circe, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  transition: color 0.2s;

  &::placeholder {
    color: ${({error}) => error ? '#F63D5E' : '#00236633'};
    transition: color 0.2s;
  }
`;

export function Input({ className, value, error, placeholder, onChange }) {
  return (
    <Wrapper className={className} error={error} value={value} placeholder={placeholder} onChange={(e) => onChange?.(e.target.value)} />
  );
}
