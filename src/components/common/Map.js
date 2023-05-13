import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import useImage from 'use-image';
import { Stage, Layer, Image, Line } from 'react-konva';
import { Spring, animated } from '@react-spring/konva';
import { useGameState } from '../../hooks/useGameState';
import { PATH_POINTS, PATH_POINTS_LIST } from '../../constants/pathPoints';
import { TRACKS } from '../../constants/tracks';
import { GRADES } from '../../constants/grades';
import map from '../../assets/images/map.jpg';
import startPoint from '../../assets/icons/startPoint.svg';
import finalPoint from '../../assets/icons/finalPoint.svg';
import track1GradePoint from '../../assets/icons/track1GradePoint.svg';
import track2GradePoint from '../../assets/icons/track2GradePoint.svg';
import track3GradePoint from '../../assets/icons/track3GradePoint.svg';
import track1GradeFinalPoint from '../../assets/icons/track1GradeFinalPoint.svg';
import track2GradeFinalPoint from '../../assets/icons/track2GradeFinalPoint.svg';
import track3GradeFinalPoint from '../../assets/icons/track3GradeFinalPoint.svg';
import { FloatingTooltip } from './FloatingTooltip';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar{
    display: none;
  }
`;

const MapImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

const PATH_POINT_IMAGES = {
  [PATH_POINTS.START]: () => startPoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: () => finalPoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: () => finalPoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: () => finalPoint,
};

const PATH_POINT_NAME = {
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: 'Высококвалифицированный рабочий',
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: 'Мастер',
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: 'Начальник участка',
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: 'Начальник цеха',
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: 'Участник проектной команды',
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: 'Менеджер проекта',
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: 'Руководитель проекта',
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: 'Руководитель проектного офиса',
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: 'Ведущий специалист',
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: 'Главный специалист',
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: 'Начальник отдела',
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: 'Начальник управления',
};

const PATH_POINT_SIZES = {
  [PATH_POINTS.START]: () => [35, 35],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: () => [46, 69],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: () => [46, 69],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: () => [46, 69],
};

const BASE_PATH_POINT_POSITIONS = {
  [PATH_POINTS.START]: [200.52, 605.36],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: [465.16, 290.82],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: [830.04, 312.16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: [1094.79, 307.64],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: [1434.04, 370.74],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: [1830.24, 550.86],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: [467.16, 527.3],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: [896.04, 465.07],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: [1150.79, 594.19],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: [1497, 536.19],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: [1830.24, 550.86],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: [524.16, 781.73],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: [745, 756.61],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: [1069, 763],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: [1516, 785.35],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: [1830.24, 550.86],
};

function createBasePointOffset() {
  return [0, 0];
}

function createGradePointOffset(point, isLast) {
  return isLast ? [0, PATH_POINT_SIZES[point](isLast)[1] * 0.35] : [0, 0];
}

function createFinalPointOffset(point, isLast) {
  return [0, PATH_POINT_SIZES[point](isLast)[1] * 0.46];
}

const PATH_POINT_OFFSETS = {
  [PATH_POINTS.START]: () => createBasePointOffset(),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: (isLast) => createFinalPointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: (isLast) => createFinalPointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL], isLast),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1], isLast),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2], isLast),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3], isLast),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4], isLast),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: (isLast) => createFinalPointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL], isLast),
};

function getPathPointPosition(point, width, height) {
  return [
    width / BASE_WIDTH * BASE_PATH_POINT_POSITIONS[point][0],
    height / BASE_HEIGHT * BASE_PATH_POINT_POSITIONS[point][1],
  ];
}

function getPathPointSize(point, isLast, width, height) {
  return [
    width / BASE_WIDTH * PATH_POINT_SIZES[point](isLast)[0],
    height / BASE_HEIGHT * PATH_POINT_SIZES[point](isLast)[1],
  ];
}

function getPathPointImage(point, isLast) {
  return PATH_POINT_IMAGES[point](isLast);
}

function getPathPointOffset(point, isLast, width, height) {
  const offsets = PATH_POINT_OFFSETS[point](isLast);
  return [width / BASE_WIDTH * offsets[0], height / BASE_HEIGHT * offsets[1]];
}

function getIsLastPoint(point, path) {
  return path?.includes(point) && path?.indexOf(point) === path.length - 1;
}

function getLineConnectionPosition(point, isLast, width, height) {
  return getPathPointPosition(point, width, height)
    .map((position, positionIndex) =>
      position
      + getPathPointSize(point, isLast, width, height)[positionIndex] / 2
      + getPathPointOffset(point, isLast, width, height)[positionIndex]
    );
}

function getTooltipConnectionPosition(point, isLast, width, height) {
  const [x, y] = getPathPointPosition(point, width, height);
  return [x + getPathPointSize(point, isLast, width, height)[0] / 2, y];
}

function createLine(originalPath, path, width, height) {
  return path?.reduce((acc, point) => [
    ...acc,
    ...getLineConnectionPosition(point, getIsLastPoint(point, originalPath), width, height),
  ], [])
}

function scrollToPoints(container, width, height, points) {
  if (!container || !points.length) {
    return;
  }

  const wrapperWidth = container.offsetWidth;
  const existingPoints = points.filter(Boolean);
  const pointsLeftAverage = existingPoints.reduce(
    (acc, point) => acc + getPathPointPosition(point, width, height)[0],
    0,
  ) / existingPoints.length;
  const left = pointsLeftAverage - wrapperWidth / 2;

  container.scrollTo({ left, behavior: 'smooth' });
}

function CanvasImage({ src, ...rest }) {
  const [image] = useImage(src);
  return <Image image={image} {...rest} />;
}

export function Map(props) {
  const { className, withPathMove } = props;
  const { path } = useGameState();
  const mapRef = useRef();
  const wrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [activePoint, setActivePoint] = useState(null);

  function updateSize() {
    const { offsetHeight, offsetWidth } = mapRef.current || {};
    setHeight(offsetHeight);
    setWidth(offsetWidth);
  }

  function removeActivePoint() {
    setActivePoint(null);
  }

  function selectActivePoint(point) {
    setActivePoint(point);
    scrollToPoints(wrapperRef.current, width, height, [point]);
  }

  function handlePointClick(event, point) {
    event?.evt?.stopPropagation();
    selectActivePoint(point);
  }

  useEffect(() => {
    if (width && withPathMove && path?.length > 1) {
      scrollToPoints(wrapperRef.current, width, height, [path[path.length - 2], path[path.length - 1]]);
    }
  }, [width])

  return (
    <Wrapper className={className} ref={wrapperRef}>
      <MapImage ref={mapRef} src={map} alt="" onLoad={updateSize} />
      <Stage width={width} height={height}>
        <Layer>
          {path?.length > 2 && (
            <Line
              points={createLine(path, path.slice(0, -1), width, height)}
              x={0}
              y={0}
              stroke='#FF6600'
              strokeWidth={5}
              shadowOffsetX={4}
              shadowOffsetY={4}
              shadowBlur={7}
              shadowColor={'rgb(0, 0, 0)'}
              shadowOpacity={0.15}
            />
          )}
          {path?.length > 1 && (
            <Spring
              from={{ opacity: withPathMove ? 0 : 1 }}
              to={{ opacity: 1 }}
              delay={600}
              config={{ duration: 500 }}
            >
              {(props) => (
                <animated.Line
                  {...props}
                  points={createLine(path, path.slice(-2), width, height)}
                  x={0}
                  y={0}
                  stroke='#FF6600'
                  strokeWidth={5}
                  shadowOffsetX={4}
                  shadowOffsetY={4}
                  shadowBlur={7}
                  shadowColor={'rgb(0, 0, 0)'}
                  shadowOpacity={0.15}
                />
              )}
            </Spring>
          )}
          {PATH_POINTS_LIST.map((point, index) => (
            <CanvasImage
              key={index}
              src={getPathPointImage(point, getIsLastPoint(point, path))}
              width={getPathPointSize(point, getIsLastPoint(point, path), width, height)[0]}
              height={getPathPointSize(point, getIsLastPoint(point, path), width, height)[1]}
              x={getPathPointPosition(point, width, height)[0]}
              y={getPathPointPosition(point, width, height)[1]}
              shadowOffsetX={4}
              shadowOffsetY={4}
              shadowBlur={7}
              shadowColor={'rgb(0, 0, 0)'}
              shadowOpacity={0.15}
              onMouseDown={(event) => handlePointClick(event, point)}
              onTouchStart={(event) => handlePointClick(event, point)}
            />
          ))}
        </Layer>
      </Stage>
      {!!activePoint && PATH_POINT_NAME[activePoint] && (
        <FloatingTooltip
          x={getTooltipConnectionPosition(activePoint, getIsLastPoint(activePoint, path), width, height)[0]}
          y={getTooltipConnectionPosition(activePoint, getIsLastPoint(activePoint, path), width, height)[1]}
          onClose={removeActivePoint}
        >
          {PATH_POINT_NAME[activePoint]}
        </FloatingTooltip>
      )}
    </Wrapper>
  )
}