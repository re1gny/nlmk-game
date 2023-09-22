import React from 'react';
import styled from '@emotion/styled';
import {Text} from './Text';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  position: relative;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Label = styled(Text)`
  display: block;
  margin-left: 41px;
  font-size: 10px;
  line-height: 13px;
  font-weight: 350;
  color: ${({error}) => error ? '#F63D5E' : '#002366'};
  transition: color 0.2s;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: ${({value, error}) => error ? '#F63D5E' : value ? '#002366' : '#fff'};
  transition: background-color 0.2s;
  border-radius: 3px;
  border: 1px solid #90A2B7;
`;

export function Checkbox({ className, value, label, error, onChange }) {
  return (
    <Wrapper className={className}>
      <Label error={error}>{label}</Label>
      <Input type="checkbox" checked={value} onChange={() => onChange?.(!value)} />
      <Checkmark value={value} error={error} />
    </Wrapper>
  )
}
