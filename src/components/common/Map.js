import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import useImage from 'use-image';
import { Stage, Layer, Image, Line } from 'react-konva';
import { Spring, animated } from '@react-spring/konva';
import { useGameState } from '../../hooks/useGameState';
import { PATH_POINTS, PATH_POINTS_LIST } from '../../constants/pathPoints';
import { MAP_OBJECTS_LIST, MAP_OBJECTS } from '../../constants/mapObjects';
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
import { FixedTooltip } from './FixedTooltip';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  transform: translateZ(0);

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

const MAP_OBJECT_IMAGES = {
  [MAP_OBJECTS.OBJECT_1]: startPoint,
  [MAP_OBJECTS.OBJECT_2]: finalPoint,
  [MAP_OBJECTS.OBJECT_3]: finalPoint,
};

const PATH_POINT_DESCRIPTION = {
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: <b>Высококвалифицированный рабочий</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: <b>Мастер</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: <b>Начальник участка</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: <b>Начальник цеха</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: <b>Участник проектной команды</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: <b>Менеджер проекта</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: <b>Руководитель проекта</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: <b>Руководитель проектного офиса</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: <b>Ведущий специалист</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: <b>Главный специалист</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: <b>Начальник отдела</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: <b>Начальник управления</b>,
};

const MAP_OBJECT_DESCRIPTION = {
  [MAP_OBJECTS.OBJECT_1]: 'Высококвалифицированный рабочий',
  [MAP_OBJECTS.OBJECT_2]: 'Мастер',
  [MAP_OBJECTS.OBJECT_3]: 'Начальник участка',
};

const MAP_OBJECTS_WITH_BOTTOM_DESCRIPTION = [MAP_OBJECTS.OBJECT_1, MAP_OBJECTS.OBJECT_3];

const MAP_OBJECT_SIZES = {
  [MAP_OBJECTS.OBJECT_1]: [35, 35],
  [MAP_OBJECTS.OBJECT_2]: [46, 69],
  [MAP_OBJECTS.OBJECT_3]: [46, 69],
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

const PATH_POINT_POSITIONS = {
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

const MAP_OBJECTS_POSITIONS = {
  [MAP_OBJECTS.OBJECT_1]: [0, 0],
  [MAP_OBJECTS.OBJECT_2]: [100, 0],
  [MAP_OBJECTS.OBJECT_3]: [50, 50],
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
    width / BASE_WIDTH * PATH_POINT_POSITIONS[point][0],
    height / BASE_HEIGHT * PATH_POINT_POSITIONS[point][1],
  ];
}

function getMapObjectPosition(object, width, height) {
  return [
    width / BASE_WIDTH * MAP_OBJECTS_POSITIONS[object][0],
    height / BASE_HEIGHT * MAP_OBJECTS_POSITIONS[object][1],
  ];
}

function getPathPointSize(point, isLast, width, height) {
  return [
    width / BASE_WIDTH * PATH_POINT_SIZES[point](isLast)[0],
    height / BASE_HEIGHT * PATH_POINT_SIZES[point](isLast)[1],
  ];
}

function getMapObjectSize(object, width, height) {
  return [
    width / BASE_WIDTH * MAP_OBJECT_SIZES[object][0],
    height / BASE_HEIGHT * MAP_OBJECT_SIZES[object][1],
  ];
}

function getPathPointImage(point, isLast) {
  return PATH_POINT_IMAGES[point](isLast);
}

function getMapObjectImage(object) {
  return MAP_OBJECT_IMAGES[object];
}

function getPathPointOffset(point, isLast, width, height) {
  const offsets = PATH_POINT_OFFSETS[point](isLast);
  return [width / BASE_WIDTH * offsets[0], height / BASE_HEIGHT * offsets[1]];
}

function getIsLastPoint(point, path) {
  return path?.includes(point) && path?.indexOf(point) === path.length - 1;
}

function getIsActiveMapObject(object, active) {
  return active && object === active;
}

function getMapObjectDescriptionPlacement(object) {
  return MAP_OBJECTS_WITH_BOTTOM_DESCRIPTION.includes(object) ? 'bottom' : 'top';
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

function scrollToObject(container, width, height, object) {
  if (!container || !object) {
    return;
  }

  const wrapperWidth = container.offsetWidth;
  const left = getMapObjectPosition(object, width, height)[0] - wrapperWidth / 2;

  container.scrollTo({ left, behavior: 'smooth' });
}

function CanvasImage({ src, ...rest }) {
  const [image] = useImage(src);
  return <Image image={image} {...rest} />;
}

export function Map(props) {
  const { className, withPathMove, onActivePointChange, onActiveObjectChange } = props;
  const { path } = useGameState();
  const mapRef = useRef();
  const wrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [activePoint, setActivePoint] = useState(null);
  const [activeObject, setActiveObject] = useState(null);

  function updateSize() {
    const { offsetHeight, offsetWidth } = mapRef.current || {};
    setHeight(offsetHeight);
    setWidth(offsetWidth);
  }

  function removeActivePoint() {
    setActivePoint(null);
    onActivePointChange?.(null);
  }

  function selectActivePoint(point) {
    setActivePoint(point);
    onActivePointChange?.(point);
    scrollToPoints(wrapperRef.current, width, height, [point]);
  }

  function removeActiveObject() {
    setActiveObject(null);
    onActiveObjectChange?.(null);
  }

  function selectActiveObject(object) {
    setActiveObject(object);
    onActiveObjectChange?.(object, getMapObjectDescriptionPlacement(object));
    scrollToObject(wrapperRef.current, width, height, object);
  }

  function handlePointClick(event, point) {
    event?.evt?.stopPropagation();
    selectActivePoint(point);
    removeActiveObject();
  }

  function handleObjectClick(event, object) {
    event?.evt?.stopPropagation();
    selectActiveObject(object);
    removeActivePoint();
  }

  useEffect(() => {
    if (width && withPathMove && path?.length > 1) {
      scrollToPoints(wrapperRef.current, width, height, [path[path.length - 2], path[path.length - 1]]);
    }
  }, [width])

  return (
    <>
      <Wrapper className={className} ref={wrapperRef}>
        <MapImage ref={mapRef} src={map} alt="" onLoad={updateSize} />
        <Stage width={width} height={height}>
          <Layer>
            {MAP_OBJECTS_LIST.map((object, index) => (
              <CanvasImage
                key={index}
                src={getMapObjectImage(object)}
                width={getMapObjectSize(object, width, height)[0]}
                height={getMapObjectSize(object, width, height)[1]}
                x={getMapObjectPosition(object, width, height)[0]}
                y={getMapObjectPosition(object, width, height)[1]}
                shadowOffsetX={getIsActiveMapObject(object, activeObject) ? -3 : 4}
                shadowOffsetY={getIsActiveMapObject(object, activeObject) ? 3 : 4}
                shadowBlur={getIsActiveMapObject(object, activeObject) ? 8 : 7}
                shadowColor={getIsActiveMapObject(object, activeObject) ? '#72B3DD' : 'rgb(0, 0, 0)'}
                shadowOpacity={getIsActiveMapObject(object, activeObject) ? 1 : 0.15}
                onMouseDown={(event) => handleObjectClick(event, object)}
                onTouchStart={(event) => handleObjectClick(event, object)}
              />
            ))}
          </Layer>
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
          </Layer>
          <Layer>
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
        {!!activePoint && PATH_POINT_DESCRIPTION[activePoint] && (
          <FloatingTooltip
            x={getTooltipConnectionPosition(activePoint, getIsLastPoint(activePoint, path), width, height)[0]}
            y={getTooltipConnectionPosition(activePoint, getIsLastPoint(activePoint, path), width, height)[1]}
            onClose={removeActivePoint}
          >
            {PATH_POINT_DESCRIPTION[activePoint]}
          </FloatingTooltip>
        )}
      </Wrapper>
      {!!activeObject && MAP_OBJECT_DESCRIPTION[activeObject] && (
        <FixedTooltip
          position={getMapObjectDescriptionPlacement(activeObject)}
          onClose={removeActiveObject}
        >
          {MAP_OBJECT_DESCRIPTION[activeObject]}
        </FixedTooltip>
      )}
    </>
  )
}