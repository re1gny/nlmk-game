import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import { Text } from './Text';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';
import figurePlaceholder1 from '../../assets/images/figurePlaceholder1.svg';
import figurePlaceholder2 from '../../assets/images/figurePlaceholder2.svg';
import figurePlaceholder3 from '../../assets/images/figurePlaceholder3.svg';
import figurePlaceholder4 from '../../assets/images/figurePlaceholder4.svg';
import figurePlaceholder5 from '../../assets/images/figurePlaceholder5.svg';
import figurePlaceholder6 from '../../assets/images/figurePlaceholder6.svg';
import figurePlaceholder7 from '../../assets/images/figurePlaceholder7.svg';
import figure1 from '../../assets/images/figure1.svg';
import figure2 from '../../assets/images/figure2.svg';
import figure3 from '../../assets/images/figure3.svg';
import figure4 from '../../assets/images/figure4.svg';
import figure5 from '../../assets/images/figure5.svg';
import figure6 from '../../assets/images/figure6.svg';
import figure7 from '../../assets/images/figure7.svg';

const HORIZONTAL_SIZE = 7;
const VERTICAL_SIZE = 14;
const FIGURE_LIST_SIZE = 70;
const FIGURE_LIST_FOOTER_SIZE = 40;
const BOARD_TO_FIGURE_LIST_OFFSET = 20;
const FIGURE_PREVIEW_BASE_POINT_SIZE = 15;

const FIGURE_SIZE_POINTS = {
  '1': { width: 1, height: 1 },
  '2': { width: 2, height: 2 },
  '3': { width: 2, height: 2 },
  '4': { width: 2, height: 2 },
  '5': { width: 2, height: 2 },
  '6': { width: 1, height: 4 },
  '7': { width: 4, height: 1 },
};

const FIGURES = {
  '1': figure1,
  '2': figure2,
  '3': figure3,
  '4': figure4,
  '5': figure5,
  '6': figure6,
  '7': figure7,
};

const FIGURE_PLACEHOLDERS = {
  '1': figurePlaceholder1,
  '2': figurePlaceholder2,
  '3': figurePlaceholder3,
  '4': figurePlaceholder4,
  '5': figurePlaceholder5,
  '6': figurePlaceholder6,
  '7': figurePlaceholder7,
};

function createBoard() {
  return new Array(HORIZONTAL_SIZE).fill(0).map(() => new Array(VERTICAL_SIZE).fill(0));
}

function createFigures() {
  return ['1', '6', '2', '5', '4', '3', '1', '4', '5', '6', '1', '7'];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  padding-left: ${FIGURE_LIST_SIZE + BOARD_TO_FIGURE_LIST_OFFSET}px;
  margin-top: 30px;
`;

const FigureListOuter = styled.div`
  position: relative;
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
`;

const FigureList = styled.div`
  max-height: 100%;
  overflow: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
`;

const FigureListFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${FIGURE_LIST_FOOTER_SIZE}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 0;
  background: #FFFFFF;
  z-index: 1;
  transition: opacity 0.2s;
  opacity: ${({ visible }) => visible ? 1 : 0};
  pointer-events: ${({ visible }) => visible ? 'auto' : 'none'};
`;

const FigureListInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${FIGURE_LIST_SIZE}px;
  padding: 22px 0;
`;

const FigureItem = styled.img`
  width: ${({ id }) => FIGURE_PREVIEW_BASE_POINT_SIZE * FIGURE_SIZE_POINTS[id].width}px;
  height: ${({ id }) => FIGURE_PREVIEW_BASE_POINT_SIZE * FIGURE_SIZE_POINTS[id].height}px;
  cursor: pointer;
  
  &:not(:first-child) {
    margin-top: 16px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Board = styled.div`
  flex-grow: 1;
  background: #FFFFFF;
  border-radius: 10px;
  margin-left: ${BOARD_TO_FIGURE_LIST_OFFSET}px;
`;

const DropButton = styled(Button)`
  padding: 10px 18px;
  font-size: 16px;
`;

const MoveButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

const MoveButton = styled(Button)`
  padding: 8px;
  border-radius: 50%;
  
  & + & {
    margin-left: 16px;
  }
`;

const MoveIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NextText = styled(Text)`
  position: relative;
  color: #003399;
  cursor: pointer;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: #003399;
    border-radius: 10px;
  }
`;

function TetrisGameComponent({ className, onFinish }, ref) {
  const figuresListRef = useRef();
  const [board, setBoard] = useState(createBoard());
  const [figures, setFigures] = useState(createFigures());
  const [nextButtonVisible, setNextButtonVisible] = useState(true);

  function handleRestart() {
    setBoard(createBoard());
    setFigures(createFigures());
  }

  function handleDrop() {
    const { offsetHeight, scrollHeight } = figuresListRef.current || {};

    if (scrollHeight <= offsetHeight) {
      setNextButtonVisible(false);
    }
  }

  function handleMoveLeft() {

  }

  function handleMoveRight() {

  }

  function handleNext() {
    figuresListRef.current?.scrollTo({
      top: figuresListRef.current?.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  function handleListScroll() {
    const { scrollTop, offsetHeight, scrollHeight } = figuresListRef.current || {};
    setNextButtonVisible(scrollTop + offsetHeight + FIGURE_LIST_FOOTER_SIZE < scrollHeight);
  }

  useImperativeHandle(ref, () => ({
    restart: handleRestart,
  }), [handleRestart]);

  return (
    <Wrapper className={className}>
      <TopWrapper>
        <FigureListOuter>
          <FigureList ref={figuresListRef} onScroll={handleListScroll}>
            <FigureListInner>
              {figures.map((id, index) => (
                <FigureItem key={index} id={id} src={FIGURES[id]} alt="" />
              ))}
            </FigureListInner>
          </FigureList>
          <FigureListFooter visible={nextButtonVisible}>
            <NextText bold onClick={handleNext}>далее</NextText>
          </FigureListFooter>
        </FigureListOuter>
        <Board></Board>
      </TopWrapper>
      <BottomWrapper>
        <DropButton onClick={handleDrop}>опустить</DropButton>
        <MoveButtons>
          <MoveButton onClick={handleMoveLeft}>
            <MoveIcon src={arrowLeftIcon} alt="" />
          </MoveButton>
          <MoveButton onClick={handleMoveRight}>
            <MoveIcon src={arrowRightIcon} alt="" />
          </MoveButton>
        </MoveButtons>
      </BottomWrapper>
    </Wrapper>
  );
}

export const TetrisGame = forwardRef(TetrisGameComponent);