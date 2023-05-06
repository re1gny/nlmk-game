import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';
import scratchOverlay from '../../assets/images/scratchOverlay.png';

const Container = styled.div`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & img, & canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  
  & img {
    object-fit: cover;
  }
`;

const SCRATCH_CONTAINER_ID = 'SCRATCH_CONTAINER';
const SCRATCH_CLEAR_ZONE_RADIUS = 34;
const SCRATCH_PERCENTS_TO_FINISH = 80;

export function ScratchGame({ className, image, onFinish }) {
  const scratchInstanceRef = useRef();
  const scratchContainerRef = useRef();

  useEffect(() => {
    scratchInstanceRef.current = new ScratchCard(`#${SCRATCH_CONTAINER_ID}`, {
      scratchType: SCRATCH_TYPE.LINE,
      containerWidth: scratchContainerRef.current.offsetWidth,
      containerHeight: scratchContainerRef.current.offsetHeight,
      imageForwardSrc: scratchOverlay,
      imageBackgroundSrc: image,
      clearZoneRadius: SCRATCH_CLEAR_ZONE_RADIUS,
      percentToFinish: SCRATCH_PERCENTS_TO_FINISH - 1,
      callback: onFinish,
    });

    scratchInstanceRef.current.init();
  }, [])

  return <Container id={SCRATCH_CONTAINER_ID} ref={scratchContainerRef} className={className} />;
}
