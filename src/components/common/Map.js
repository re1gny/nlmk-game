import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import useImage from 'use-image';
import { Stage, Layer, Image, Line } from 'react-konva';
import { useGameState } from '../../hooks/useGameState';
import { PATH_POINTS } from '../../constants/pathPoints';
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

function getPathPointSize(point, index, path) {
  return [
    PATH_POINT_SIZES[point](index === path.length - 1)[0],
    PATH_POINT_SIZES[point](index === path.length - 1)[1],
  ];
}

function getPathPointImage(point, index, path) {
  return PATH_POINT_IMAGES[point](index === path.length - 1);
}

function getPathPointOffset(point, index, path) {
  return PATH_POINT_OFFSETS[point](index === path.length - 1);
}

function getLineConnectionPosition(point, index, width, height, path) {
  return getPathPointPosition(point, width, height)
    .map((position, positionIndex) =>
      position + getPathPointSize(point, index, path)[positionIndex] / 2 + getPathPointOffset(point, index, path)[positionIndex]
    );
}

function createLine(prevPoint, nextPoint, prevIndex, nextIndex, width, height, path) {
  return [
    ...getLineConnectionPosition(prevPoint, prevIndex, width, height, path),
    ...getLineConnectionPosition(nextPoint, nextIndex, width, height, path),
  ];
}

function createLines(path, width, height) {
  return path?.reduce((acc, point, index) => {
    if (index) {
      const prevIndex = index - 1;
      return [...acc, createLine(path[prevIndex], point, prevIndex, index, width, height, path)];
    }

    return acc;
  }, [])
}

function CanvasImage({ src, ...rest }) {
  const [image] = useImage(src);
  return <Image image={image} {...rest} />;
}

export function Map(props) {
  const { className } = props;
  const { path } = useGameState();
  const mapRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const lines = createLines(path, width, height);

  function updateSize() {
    const { offsetHeight, offsetWidth } = mapRef.current || {};
    setHeight(offsetHeight);
    setWidth(offsetWidth);
  }

  return (
    <Wrapper className={className}>
      <MapImage ref={mapRef} src={map} alt="" onLoad={updateSize} />
      <Stage width={width} height={height}>
        <Layer>
          {lines?.map((line, index) => (
            <Line
              key={index}
              points={line}
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
          ))}
          {path?.map((point, index) => (
            <CanvasImage
              key={index}
              src={getPathPointImage(point, index, path)}
              width={getPathPointSize(point, index, path)[0]}
              height={getPathPointSize(point, index, path)[1]}
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