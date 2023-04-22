import React from 'react';
import styled from '@emotion/styled';
import map from '../../assets/images/map.png';
import { useGameState } from '../../hooks/useGameState';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto hidden;
`;

const MapImage = styled.img`
  display: block;
  height: 100%;
  width: auto;
`;

export function Map(props) {
  const { className } = props;
  const { path } = useGameState();

  return (
    <Wrapper className={className}>
      <MapImage src={map} alt="" />
    </Wrapper>
  )
}