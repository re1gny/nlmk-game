import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import chunk from 'lodash/chunk';
import cloneDeep from 'lodash/cloneDeep';
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
const FIGURE_BASE_POINT_SIZE = 30;
const BASE_VERTICAL_POINT_DURATION = 60;
const BASE_HORIZONTAL_POINT_DURATION = 200;

const FIGURE_SIZE_POINTS = {
  '1': { width: 1, height: 1 },
  '2': { width: 2, height: 2 },
  '3': { width: 2, height: 2 },
  '4': { width: 2, height: 2 },
  '5': { width: 2, height: 2 },
  '6': { width: 1, height: 4 },
  '7': { width: 4, height: 1 },
};

const FIGURE_IMAGES = {
  '1': figure1,
  '2': figure2,
  '3': figure3,
  '4': figure4,
  '5': figure5,
  '6': figure6,
  '7': figure7,
};

const FIGURE_PLACEHOLDER_IMAGES = {
  '1': figurePlaceholder1,
  '2': figurePlaceholder2,
  '3': figurePlaceholder3,
  '4': figurePlaceholder4,
  '5': figurePlaceholder5,
  '6': figurePlaceholder6,
  '7': figurePlaceholder7,
};

function createInitialBoard() {
  return new Array(VERTICAL_SIZE).fill(0).map(() => new Array(HORIZONTAL_SIZE).fill(0));
}

function createInitialFiguresForSelect() {
  return ['1', '6', '2', '5', '4', '3', '1', '4', '5', '6', '1', '7'];
}

function createInitialFigures() {
  return [];
}

function createFigureTemplate(id, ...config) {
  return chunk(config, FIGURE_SIZE_POINTS[id].width);
}

function createFigure(id, verticalStart, horizontalStart) {
  return {
    id,
    verticalStart,
    horizontalStart,
    verticalEnd: verticalStart + FIGURE_SIZE_POINTS[id].height - 1,
    horizontalEnd: horizontalStart + FIGURE_SIZE_POINTS[id].width - 1,
  };
}

function createSelectedFigure(id, index, verticalStart, horizontalStart) {
  const { width } = FIGURE_SIZE_POINTS[id];
  return {
    ...createFigure(id, verticalStart ?? 0, horizontalStart ?? Math.ceil((HORIZONTAL_SIZE - width) / 2)),
    index,
  };
}

const FIGURE_TEMPLATES = {
  '1': createFigureTemplate('1', 1),
  '2': createFigureTemplate('2', 0, 1, 1, 1),
  '3': createFigureTemplate('3', 1, 0, 1, 1),
  '4': createFigureTemplate('4', 1, 1, 0, 1),
  '5': createFigureTemplate('5', 1, 1, 1, 1),
  '6': createFigureTemplate('6', 1, 1, 1, 1),
  '7': createFigureTemplate('7', 1, 1, 1, 1),
};

const PLACEHOLDERS = [
  createFigure('1', 6, 3),
  createFigure('2', 7, 2),
  createFigure('7', 9, 2),
  createFigure('1', 10, 3),
  createFigure('5', 10, 1),
  createFigure('5', 12, 2),
  createFigure('6', 8, 0),
  createFigure('3', 12, 0),
  createFigure('1', 13, 4),
  createFigure('4', 11, 3),
  createFigure('4', 10, 4),
  createFigure('6', 10, 6),
];

function checkFigurePlacementAvailable(id, verticalStart, horizontalStart, board) {
  const template = FIGURE_TEMPLATES[id];
  const { width, height } = FIGURE_SIZE_POINTS[id];
  const verticalEnd = verticalStart + height - 1;
  const horizontalEnd = horizontalStart + width - 1;

  if (verticalEnd >= VERTICAL_SIZE || horizontalEnd >= HORIZONTAL_SIZE) {
    return false;
  }

  for (let i = 0; i < template.length; i++) {
    for (let j = 0; j < template[i].length; j++) {
      if (template[i][j] && board[verticalStart + i][horizontalStart + j]) {
        return false;
      }
    }
  }

  return true;
}

function placeFigure(figure, board) {
  const { id, verticalStart, horizontalStart } = figure;
  const template = FIGURE_TEMPLATES[id];
  const newBoard = cloneDeep(board);

  if (!checkFigurePlacementAvailable(id, verticalStart, horizontalStart, board)) {
    return newBoard;
  }

  for (let i = 0; i < template.length; i++) {
    for (let j = 0; j < template[i].length; j++) {
      if (template[i][j]) {
        newBoard[verticalStart + i][horizontalStart + j] = figure;
      }
    }
  }

  return newBoard;
}

function getMaxAvailableVerticalStart(figure, board) {
  const { id, verticalStart, horizontalStart } = figure;
  let maxVerticalStart = verticalStart;

  for (let i = verticalStart + 1; i < VERTICAL_SIZE; i++) {
    if (checkFigurePlacementAvailable(id, i, horizontalStart, board)) {
      maxVerticalStart = i;
    } else {
      return maxVerticalStart;
    }
  }

  return maxVerticalStart;
}

function checkCorrectFiguresPlacement(figures) {
  for (let i = 0; i < figures.length; i++) {
    const figure = figures[i];
    const placeholders = PLACEHOLDERS.filter(({ id }) => id === figure.id);

    const currentPlaceholder = placeholders.find(({ verticalStart, horizontalStart }) =>
      verticalStart === figure.verticalStart && horizontalStart === figure.horizontalStart
    );

    if (!currentPlaceholder) {
      return false;
    }
  }

  return true;
}

function checkGameFail(figures) {
  return !checkCorrectFiguresPlacement(figures);
}

function checkGameSuccess(figures) {
  return figures.length === PLACEHOLDERS.length && checkCorrectFiguresPlacement(figures);
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

const FigurePreviewListOuter = styled.div`
  position: relative;
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
`;

const FigurePreviewList = styled.div`
  max-height: 100%;
  overflow: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
`;

const FigurePreviewListFooter = styled.div`
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

const FigurePreviewListInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${FIGURE_LIST_SIZE}px;
  padding: 22px 0;
`;

const FigurePreviewItem = styled.img`
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
  position: relative;
  flex-grow: 1;
  background: #FFFFFF;
  border-radius: 10px;
  margin-left: ${BOARD_TO_FIGURE_LIST_OFFSET}px;
`;

const FigureItem = styled.img`
  position: absolute;
  bottom: ${({ verticalEnd, pointSize }) => pointSize * (VERTICAL_SIZE - verticalEnd - 1)}px;
  left: ${({ horizontalStart, pointSize }) => pointSize * horizontalStart}px;
  width: ${({ id, pointSize }) => pointSize * FIGURE_SIZE_POINTS[id].width}px;
  height: ${({ id, pointSize }) => pointSize * FIGURE_SIZE_POINTS[id].height}px;
`;

const SelectedFigureItem = styled(FigureItem)`
  transition: ${({ verticalStart }) => `left ${BASE_HORIZONTAL_POINT_DURATION}ms, bottom ${verticalStart * BASE_VERTICAL_POINT_DURATION}ms ease-in`};
  will-change: left, bottom;
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
  const boardRef = useRef();
  const [board, setBoard] = useState(createInitialBoard());
  const [figures, setFigures] = useState(createInitialFigures());
  const [figuresForSelect, setFiguresForSelect] = useState(createInitialFiguresForSelect());
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [figurePointSize, setFigurePointSize] = useState(FIGURE_BASE_POINT_SIZE);
  const [isDropping, setIsDropping] = useState(false);
  const lastSelectedFigureFinalVerticalStartRef = useRef(0);

  function calculateBoardLayout() {
    const { offsetWidth, offsetHeight } = boardRef.current || {};
    const verticalPointSize = offsetHeight / VERTICAL_SIZE;
    const horizontalPointSize = offsetWidth / HORIZONTAL_SIZE;
    const pointSize = Math.min(verticalPointSize, horizontalPointSize);
    setFigurePointSize(pointSize);
  }

  function handleRestart() {
    setBoard(createInitialBoard());
    setFigures(createInitialFigures());
    setFiguresForSelect(createInitialFiguresForSelect());
    setSelectedFigure(null);
  }

  function handleSelectFigure(index) {
    setSelectedFigure(createSelectedFigure(figuresForSelect[index], index));
  }

  function handleDropped() {
    if (selectedFigure) {
      const { id, horizontalStart } = selectedFigure;
      const figure = createFigure(id, lastSelectedFigureFinalVerticalStartRef.current, horizontalStart);
      setFigures(prev => [...prev, figure]);
      setSelectedFigure(null);
      setBoard(prev => placeFigure(figure, prev));
      setIsDropping(false);
      lastSelectedFigureFinalVerticalStartRef.current = 0;
    }
  }

  function handleDrop() {
    if (selectedFigure) {
      const { id, index, verticalStart, horizontalStart } = selectedFigure;

      setIsDropping(true);
      setFiguresForSelect(prev => prev.filter((_, prevIndex) => index !== prevIndex));

      lastSelectedFigureFinalVerticalStartRef.current = getMaxAvailableVerticalStart(selectedFigure, board);

      if (lastSelectedFigureFinalVerticalStartRef.current <= verticalStart) {
        handleDropped();
      } else {
        setSelectedFigure(createSelectedFigure(id, index, lastSelectedFigureFinalVerticalStartRef.current, horizontalStart));
      }
    }
  }

  function handleMoveLeft() {
    if (selectedFigure && selectedFigure.horizontalStart > 0) {
      setSelectedFigure(prev => createSelectedFigure(prev.id, prev.index, 0,selectedFigure.horizontalStart - 1));
    }
  }

  function handleMoveRight() {
    if (selectedFigure && selectedFigure.horizontalEnd < HORIZONTAL_SIZE - 1) {
      setSelectedFigure(prev => createSelectedFigure(prev.id, prev.index, 0,selectedFigure.horizontalStart + 1));
    }
  }

  function handleNext() {
    const { scrollHeight } = figuresListRef.current || {};
    figuresListRef.current?.scrollTo({ top: scrollHeight, left: 0, behavior: 'smooth' });
  }

  function handleNextExistence(withOffset = true) {
    const { scrollTop, offsetHeight, scrollHeight } = figuresListRef.current || {};
    setNextButtonVisible(scrollTop + offsetHeight + (withOffset ? FIGURE_LIST_FOOTER_SIZE : 0) < scrollHeight);
  }

  useImperativeHandle(ref, () => ({
    restart: handleRestart,
  }), [handleRestart]);

  useEffect(() => {
    handleNextExistence(false);
  }, [figuresForSelect]);

  useEffect(() => {
    if (checkGameFail(figures)) {
      onFinish?.(false);
    }

    if (checkGameSuccess(figures)) {
      onFinish?.(true);
    }
  }, [figures]);

  useLayoutEffect(() => {
    calculateBoardLayout();
  }, []);

  return (
    <Wrapper className={className}>
      <TopWrapper>
        <FigurePreviewListOuter>
          <FigurePreviewList ref={figuresListRef} onScroll={handleNextExistence}>
            <FigurePreviewListInner>
              {figuresForSelect.map((id, index) => (
                <FigurePreviewItem
                  key={index}
                  id={id}
                  src={FIGURE_IMAGES[id]}
                  alt=""
                  onClick={() => handleSelectFigure(index)}
                />
              ))}
            </FigurePreviewListInner>
          </FigurePreviewList>
          <FigurePreviewListFooter visible={nextButtonVisible}>
            <NextText bold onClick={handleNext}>далее</NextText>
          </FigurePreviewListFooter>
        </FigurePreviewListOuter>
        <Board ref={boardRef}>
          {PLACEHOLDERS.map((placeholder, index) => (
            <FigureItem
              key={index}
              {...placeholder}
              pointSize={figurePointSize}
              src={FIGURE_PLACEHOLDER_IMAGES[placeholder.id]}
              alt=""
            />
          ))}
          {figures.map((figure, index) => (
            <FigureItem
              key={index}
              {...figure}
              pointSize={figurePointSize}
              src={FIGURE_IMAGES[figure.id]}
              alt=""
            />
          ))}
          {!!selectedFigure && (
            <SelectedFigureItem
              {...selectedFigure}
              pointSize={figurePointSize}
              src={FIGURE_IMAGES[selectedFigure.id]}
              alt=""
              onTransitionEnd={isDropping ? handleDropped : undefined}
            />
          )}
        </Board>
      </TopWrapper>
      <BottomWrapper>
        <DropButton disabled={isDropping} onClick={handleDrop}>опустить</DropButton>
        <MoveButtons>
          <MoveButton disabled={isDropping} onClick={handleMoveLeft}>
            <MoveIcon src={arrowLeftIcon} alt="" />
          </MoveButton>
          <MoveButton disabled={isDropping} onClick={handleMoveRight}>
            <MoveIcon src={arrowRightIcon} alt="" />
          </MoveButton>
        </MoveButtons>
      </BottomWrapper>
    </Wrapper>
  );
}

export const TetrisGame = forwardRef(TetrisGameComponent);