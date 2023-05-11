import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useRerender } from '../../hooks/useRerender';
import startArrowRight from '../../assets/icons/startArrowRight.svg';
import heart from '../../assets/icons/heart.svg';

const IS_TOUCH_DEVICE = 'ontouchstart' in document.documentElement
const SLIDER_SIZE = 75;
const INITIAL_SLIDER_OFFSET = -2;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${SLIDER_SIZE}px;
  background: #FFFFFF;
  border: 2px solid #003399;
  border-radius: 40px;
  overflow: hidden;
  user-select: none;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: ${SLIDER_SIZE}px;
  height: ${SLIDER_SIZE}px;
  top: ${INITIAL_SLIDER_OFFSET}px;
  left: ${INITIAL_SLIDER_OFFSET}px;
  transform: translateX(${({ position }) => position}px);
  background: #FFFFFF;
  border: 2px solid #003399;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  transition: ${({ dragging }) => dragging ? 'none' : 'transform 0.2s'};
`;

const HeartIcon = styled.img`
  width: 42px;
  user-select: none;
  pointer-events: none;
  opacity: ${({ progress }) => progress * 0.4 + 0.6};
`;

const Arrows = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  opacity: ${({ progress }) => 1 - progress};
  user-select: none;
  pointer-events: none;
`;

const Arrow = styled.img`
  margin-left: -9px;
  animation: right 1s ${({ index }) => index * 0.1}s infinite;
  
  @keyframes right {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

export function StartButton({ className, onStart }) {
  const containerRef = useRef();
  const sliderRef = useRef();
  const containerWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isLockedRef = useRef(false);
  const startPositionRef = useRef(null);
  const positionRef = useRef(0);
  const rerender = useRerender();

  const progress = (positionRef.current / (containerWidthRef.current - SLIDER_SIZE) || 0);

  function getClientOffset(event) {
    return IS_TOUCH_DEVICE ? event.touches[0].clientX : event.clientX;
  }

  function handleDragStart(event) {
    if (isLockedRef.current) {
      return;
    }

    isDraggingRef.current = true;
    startPositionRef.current = getClientOffset(event);

    rerender();
  }

  function handleDragStop() {
    if (isLockedRef.current || !isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;

    if (positionRef.current >= containerWidthRef.current - SLIDER_SIZE) {
      positionRef.current = containerWidthRef.current - SLIDER_SIZE;
      isLockedRef.current = true;
      onStart?.();
    } else {
      positionRef.current = 0;
    }

    rerender();
  }

  function handleDrag(event) {
    if (isLockedRef.current || !isDraggingRef.current) {
      return;
    }

    positionRef.current = Math.min(
      Math.max(0, getClientOffset(event) - startPositionRef.current),
      containerWidthRef.current - SLIDER_SIZE,
    );
    rerender();
  }

  useEffect(() => {
    if (IS_TOUCH_DEVICE) {
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('touchend', handleDragStop);
    } else {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragStop);
    }

    containerWidthRef.current = containerRef.current?.offsetWidth;

    return () => {
      if (IS_TOUCH_DEVICE) {
        document.removeEventListener('touchmove', handleDrag);
        document.removeEventListener('touchend', handleDragStop);
      } else {
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', handleDragStop);
      }
    };
  }, []);

  return (
    <Container className={className} ref={containerRef}>
      <Slider
        ref={sliderRef}
        position={positionRef.current}
        dragging={isDraggingRef.current}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <HeartIcon progress={progress} src={heart} />
      </Slider>
      <Arrows progress={progress}>
        {new Array(5).fill(startArrowRight).map((arrow, index) => (
          <Arrow key={index} src={arrow} index={index} />
        ))}
      </Arrows>
    </Container>
  )
}
