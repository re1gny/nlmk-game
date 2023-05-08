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

const BASE_WIDTH = 1127;
const BASE_HEIGHT = 697;

const PATH_POINT_IMAGES = {
  [PATH_POINTS.START]: () => startPoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last) => last ? track1GradeFinalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: () => finalPoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last) => last ? track2GradeFinalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: () => finalPoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last) => last ? track3GradeFinalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: () => finalPoint,
};

const PATH_POINT_SIZES = {
  [PATH_POINTS.START]: () => [35, 35],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: () => [46, 69],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: () => [46, 69],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last) => last ? [27, 61] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: () => [46, 69],
};

const BASE_PATH_POINT_POSITIONS = {
  [PATH_POINTS.START]: [34.26, 373],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: [159.2, 97.19],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: [298.3, 220.53],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: [499.06, 165.01],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: [663.83, 114.78],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: [806.77, 134.11],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: [1018, 289],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: [185.2, 319.67],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: [336.3, 353.44],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: [489.06, 313.56],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: [598.76, 358.44],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: [858.73, 325.56],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: [1018, 289],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: [114.2, 510.1],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: [283.26, 564.98],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: [469.06, 567.98],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: [655.83, 510.72],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: [801.73, 539.72],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL]]: [1018, 289],
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
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.START], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4], isLast),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL]]: (isLast) => createFinalPointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.START], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4], isLast),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL]]: (isLast) => createFinalPointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL], isLast),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: (isLast) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.START], isLast),
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

function getPathPointSize(point, isLast) {
  return [
    PATH_POINT_SIZES[point](isLast)[0],
    PATH_POINT_SIZES[point](isLast)[1],
  ];
}

function getPathPointImage(point, isLast) {
  return PATH_POINT_IMAGES[point](isLast);
}

function getPathPointOffset(point, isLast) {
  return PATH_POINT_OFFSETS[point](isLast);
}

function getIsLastPoint(point, path) {
  return path?.includes(point) && path?.indexOf(point) === path.length - 1;
}

function getLineConnectionPosition(point, width, height, isLast) {
  return getPathPointPosition(point, width, height)
    .map((position, positionIndex) =>
      position + getPathPointSize(point, isLast)[positionIndex] / 2 + getPathPointOffset(point, isLast)[positionIndex]
    );
}

function createLine(originalPath, path, width, height) {
  return path?.reduce((acc, point) => [
    ...acc,
    ...getLineConnectionPosition(point, width, height, getIsLastPoint(point, originalPath)),
  ], [])
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

  function updateSize() {
    const { offsetHeight, offsetWidth } = mapRef.current || {};
    setHeight(offsetHeight);
    setWidth(offsetWidth);
  }

  function scrollToLastPoints() {
    const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
    const [scrollLeftStart] = getPathPointPosition(path[path.length - 2], width, height) || [0, 0];
    const [scrollLeftEnd] = getPathPointPosition(path[path.length - 1], width, height) || [0, 0];
    const scrollLeft = (scrollLeftStart + scrollLeftEnd) / 2 - wrapperWidth / 2;
    wrapperRef.current?.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }

  useEffect(() => {
    if (width && withPathMove) {
      scrollToLastPoints();
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
              stroke='#FFFFFF'
              strokeWidth={5}
              shadowOffsetX={4}
              shadowOffsetY={4}
              shadowBlur={7}
              shadowColor={'rgb(0, 0, 0)'}
              shadowOpacity={0.15}
            />
          )}
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
                stroke='#FFFFFF'
                strokeWidth={5}
                shadowOffsetX={4}
                shadowOffsetY={4}
                shadowBlur={7}
                shadowColor={'rgb(0, 0, 0)'}
                shadowOpacity={0.15}
              />
            )}
          </Spring>
          {PATH_POINTS_LIST.map((point, index) => (
            <CanvasImage
              key={index}
              src={getPathPointImage(point, getIsLastPoint(point, path))}
              width={getPathPointSize(point, getIsLastPoint(point, path))[0]}
              height={getPathPointSize(point, getIsLastPoint(point, path))[1]}
              x={getPathPointPosition(point, width, height)[0]}
              y={getPathPointPosition(point, width, height)[1]}
              shadowOffsetX={4}
              shadowOffsetY={4}
              shadowBlur={7}
              shadowColor={'rgb(0, 0, 0)'}
              shadowOpacity={0.15}
            />
          ))}
        </Layer>
      </Stage>
    </Wrapper>
  )
}