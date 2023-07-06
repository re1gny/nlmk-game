import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import useImage from 'use-image';
import { Stage, Layer, Image, Line, Group, Rect } from 'react-konva';
import { Spring, animated } from '@react-spring/konva';
import { useGameState } from '../../hooks/useGameState';
import { PATH_POINTS, PATH_POINTS_LIST, AVAILABLE_PATHS } from '../../constants/pathPoints';
import { MAP_OBJECTS_LIST, MAP_OBJECTS } from '../../constants/mapObjects';
import { TRACKS } from '../../constants/tracks';
import { GRADES } from '../../constants/grades';
import map from '../../assets/images/map.jpg';
import mapObject1 from '../../assets/images/mapObject1.svg';
import mapObject2 from '../../assets/images/mapObject2.svg';
import mapObject3 from '../../assets/images/mapObject3.svg';
import mapObject4 from '../../assets/images/mapObject4.svg';
import mapObject5 from '../../assets/images/mapObject5.svg';
import mapObject6 from '../../assets/images/mapObject6.svg';
import mapObject7 from '../../assets/images/mapObject7.svg';
import mapObject8 from '../../assets/images/mapObject8.svg';
import mapObject9 from '../../assets/images/mapObject9.svg';
import mapObject10 from '../../assets/images/mapObject10.svg';
import mapObject11 from '../../assets/images/mapObject11.svg';
import mapObject12 from '../../assets/images/mapObject12.svg';
import mapObject13 from '../../assets/images/mapObject13.svg';
import mapObject14 from '../../assets/images/mapObject14.svg';
import mapObject15 from '../../assets/images/mapObject15.svg';
import mapObject16 from '../../assets/images/mapObject16.svg';
import mapObject17 from '../../assets/images/mapObject17.svg';
import mapObject18 from '../../assets/images/mapObject18.svg';
import mapObject19 from '../../assets/images/mapObject19.svg';
import mapObject20 from '../../assets/images/mapObject20.svg';
import mapObject21 from '../../assets/images/mapObject21.svg';
import lockedPoint from '../../assets/icons/lock.svg';
import startPoint from '../../assets/icons/startPoint.svg';
import finalPoint from '../../assets/icons/finalPoint.svg';
import track1GradePoint from '../../assets/icons/track1GradePoint.svg';
import track2GradePoint from '../../assets/icons/track2GradePoint.svg';
import track3GradePoint from '../../assets/icons/track3GradePoint.svg';
import tooltipInfo from '../../assets/icons/tooltipInfo.svg';
import tooltipCheck from '../../assets/icons/tooltipCheck.svg';
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

const MapImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
`;

const MapImage = styled.img`
  display: block;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.5);
`;

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

const PATH_POINT_IMAGES = {
  [PATH_POINTS.START]: (last, locked) => locked ? lockedPoint : startPoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track1GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track2GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track3GradePoint,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last, locked) => locked ? lockedPoint : last ? finalPoint : track3GradePoint,
  [PATH_POINTS.FINAL]: (last, locked) => locked ? lockedPoint : finalPoint,
};

const MAP_OBJECT_IMAGES = {
  [MAP_OBJECTS.OBJECT_1]: mapObject1,
  [MAP_OBJECTS.OBJECT_2]: mapObject2,
  [MAP_OBJECTS.OBJECT_3]: mapObject3,
  [MAP_OBJECTS.OBJECT_4]: mapObject4,
  [MAP_OBJECTS.OBJECT_5]: mapObject5,
  [MAP_OBJECTS.OBJECT_6]: mapObject6,
  [MAP_OBJECTS.OBJECT_7]: mapObject7,
  [MAP_OBJECTS.OBJECT_8]: mapObject8,
  [MAP_OBJECTS.OBJECT_9]: mapObject9,
  [MAP_OBJECTS.OBJECT_10]: mapObject10,
  [MAP_OBJECTS.OBJECT_11]: mapObject11,
  [MAP_OBJECTS.OBJECT_12]: mapObject12,
  [MAP_OBJECTS.OBJECT_13]: mapObject13,
  [MAP_OBJECTS.OBJECT_14]: mapObject14,
  [MAP_OBJECTS.OBJECT_15]: mapObject15,
  [MAP_OBJECTS.OBJECT_16]: mapObject16,
  [MAP_OBJECTS.OBJECT_17]: mapObject17,
  [MAP_OBJECTS.OBJECT_18]: mapObject18,
  [MAP_OBJECTS.OBJECT_19]: mapObject19,
  [MAP_OBJECTS.OBJECT_20]: mapObject20,
  [MAP_OBJECTS.OBJECT_21]: mapObject21,
};

const PATH_POINT_DESCRIPTION = {
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: <b>Рабочий</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: <b>Высококвалифицированный рабочий</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: <b>Мастер</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: <b>Начальник участка</b>,
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: <b>Начальник цеха</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: <b>Специалист</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: <b>Участник проектной команды</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: <b>Менеджер проекта</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: <b>Руководитель проекта</b>,
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: <b>Руководитель проектного офиса</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: <b>Специалист</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: <b>Ведущий специалист</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: <b>Главный специалист</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: <b>Начальник отдела</b>,
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: <b>Начальник управления</b>,
  [PATH_POINTS.FINAL]: <b>Директор</b>,
};

const MAP_OBJECT_DESCRIPTION = {
  [MAP_OBJECTS.OBJECT_1]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_2]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_3]: (
    <>
      <b>Строительство</b>
      <br/>
      <br/>
      Ежедневно строятся новые дома и здания. Несущие конструкции, лифты, гвозди и саморезы изготавливаются из стали — арматуры, горячекатаного, оцинкованного и проката с полимерным покрытием НЛМК. Для изготовления железобетонных конструкций используется арматура и проволока НЛМК.
    </>
  ),
  [MAP_OBJECTS.OBJECT_4]: (
    <>
      <b>Энергетика и электродвигатели</b>
      <br/>
      <br/>
      Для производства оборудования эклектростанций используется электротехническая сталь — трансформаторная и динамная. НЛМК — главный поставщик такого типа стали на отечественном рынке.
    </>
  ),
  [MAP_OBJECTS.OBJECT_5]: (
    <>
      <b>Поезда</b>
      <br/>
      <br/>
      Сталь широко применяется в вагоностроении. Вагоны поездов изготавливаются из горячекатаного проката НЛМК, а также из атмосферостойкой стали.
    </>
  ),
  [MAP_OBJECTS.OBJECT_6]: (
    <>
      <b>ЛЭП</b>
      <br/>
      <br/>
      Опоры и конструкции магистральных линий электропередач (ЛЭП) делают из стали. НЛМК поставляет горячекатаный прокат для изготовления опор ЛЭП.
    </>
  ),
  [MAP_OBJECTS.OBJECT_7]: (
    <>
      <b>Корабли</b>
      <br/>
      <br/>
      Сталь — основной материал, который применяется в морском и речном судостроении. Толстый горячекатаный лист НЛМК используется для обшивки и несущих элементов кораблей.
    </>
  ),
  [MAP_OBJECTS.OBJECT_8]: (
    <>
      <b>Корабли</b>
      <br/>
      <br/>
      Сталь — основной материал, который применяется в морском и речном судостроении. Толстый горячекатаный лист НЛМК используется для обшивки и несущих элементов кораблей.
    </>
  ),
  [MAP_OBJECTS.OBJECT_9]: (
    <>
      <b>Корабли</b>
      <br/>
      <br/>
      Сталь — основной материал, который применяется в морском и речном судостроении. Толстый горячекатаный лист НЛМК используется для обшивки и несущих элементов кораблей.
    </>
  ),
  [MAP_OBJECTS.OBJECT_10]: (
    <>
      <b>Энергетика и электродвигатели</b>
      <br/>
      <br/>
      Для производства оборудования эклектростанций используется электротехническая сталь — трансформаторная и динамная. НЛМК — главный поставщик такого типа стали на отечественном рынке.
    </>
  ),
  [MAP_OBJECTS.OBJECT_11]: (
    <>
      <b>Спецтехника</b>
      <br/>
      <br/>
      В производстве прицепов, кузовов и других элементов специальной техники и машин используют износостойкие и высокопрочные стальные листы — горячекатанный прокат НЛМК.
    </>
  ),
  [MAP_OBJECTS.OBJECT_12]: (
    <>
      <b>ЛЭП</b>
      <br/>
      <br/>
      Опоры и конструкции магистральных линий электропередач (ЛЭП) делают из стали. НЛМК поставляет горячекатаный прокат для изготовления опор ЛЭП.
    </>
  ),
  [MAP_OBJECTS.OBJECT_13]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_14]: (
    <>
      <b>Дорожное строительство</b>
      <br/>
      <br/>
      Конструкции мостов требуют использование надежных и устойчивых к износу материалов повышенной прочности. Именно такими характеристиками обладает горячекатаный и оцинкованный прокат НЛМК.
    </>
  ),
  [MAP_OBJECTS.OBJECT_15]: (
    <>
      <b>Дорожное строительство</b>
      <br/>
      <br/>
      Конструкции мостов требуют использование надежных и устойчивых к износу материалов повышенной прочности. Именно такими характеристиками обладает горячекатаный и оцинкованный прокат НЛМК.
    </>
  ),
  [MAP_OBJECTS.OBJECT_16]: (
    <>
      <b>Строительство</b>
      <br/>
      <br/>
      Ежедневно строятся новые дома и здания. Несущие конструкции, лифты, гвозди и саморезы изготавливаются из стали — арматуры, горячекатаного, оцинкованного и проката с полимерным покрытием НЛМК. Для изготовления железобетонных конструкций используется арматура и проволока НЛМК.
    </>
  ),
  [MAP_OBJECTS.OBJECT_17]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_18]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_19]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_20]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
  [MAP_OBJECTS.OBJECT_21]: (
    <>
      <b>Автомобилестроение</b>
      <br/>
      <br/>
      НЛМК поставляет широкий спектр марок стали для автомобильных предприятий всего мира. Холоднокатаный и оцинкованный прокат НЛМК соответствуют самым высоким требованиям отрасли и отмечены сертификатами качества.
    </>
  ),
};

const MAP_OBJECTS_WITH_BOTTOM_DESCRIPTION = [
  MAP_OBJECTS.OBJECT_1,
  MAP_OBJECTS.OBJECT_2,
  MAP_OBJECTS.OBJECT_4,
  MAP_OBJECTS.OBJECT_5,
  MAP_OBJECTS.OBJECT_6,
  MAP_OBJECTS.OBJECT_7,
  MAP_OBJECTS.OBJECT_8,
  MAP_OBJECTS.OBJECT_9,
  MAP_OBJECTS.OBJECT_10,
  MAP_OBJECTS.OBJECT_11,
  MAP_OBJECTS.OBJECT_12,
  MAP_OBJECTS.OBJECT_13,
];

const MAP_OBJECT_SIZES = {
  [MAP_OBJECTS.OBJECT_1]: [22.64, 15.71],
  [MAP_OBJECTS.OBJECT_2]: [16.66, 28.04],
  [MAP_OBJECTS.OBJECT_3]: [50.27, 78.49],
  [MAP_OBJECTS.OBJECT_4]: [112.88, 173.19],
  [MAP_OBJECTS.OBJECT_5]: [172.95, 77.13],
  [MAP_OBJECTS.OBJECT_6]: [212.31, 182.75],
  [MAP_OBJECTS.OBJECT_7]: [65.75, 28.9],
  [MAP_OBJECTS.OBJECT_8]: [133.89, 109.9],
  [MAP_OBJECTS.OBJECT_9]: [75.16, 64.1],
  [MAP_OBJECTS.OBJECT_10]: [170.76, 145.77],
  [MAP_OBJECTS.OBJECT_11]: [54.49, 76.28],
  [MAP_OBJECTS.OBJECT_12]: [136.26, 151.92],
  [MAP_OBJECTS.OBJECT_13]: [22.64, 15.71],
  [MAP_OBJECTS.OBJECT_14]: [123.59, 123.77],
  [MAP_OBJECTS.OBJECT_15]: [112.81, 112.97],
  [MAP_OBJECTS.OBJECT_16]: [68.47, 106.89],
  [MAP_OBJECTS.OBJECT_17]: [22.64, 15.71],
  [MAP_OBJECTS.OBJECT_18]: [16.66, 28.04],
  [MAP_OBJECTS.OBJECT_19]: [15.71, 22.64],
  [MAP_OBJECTS.OBJECT_20]: [15.71, 22.64],
  [MAP_OBJECTS.OBJECT_21]: [22.64, 15.71],
};

const PATH_POINT_SIZES = {
  [PATH_POINTS.START]: (last, locked) => locked ? [34, 41] : [35, 35],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last, locked) => locked ? [34, 41] : last ? [46, 69] : [20, 20],
  [PATH_POINTS.FINAL]: (last, locked) => locked ? [34, 41] : [46, 69],
};

const PATH_POINT_POSITIONS = {
  [PATH_POINTS.START]: [61, 588],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: [210, 434],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: [465.16, 290.82],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: [830.04, 312.16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: [1094.79, 307.64],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: [1434.04, 370.74],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: [231, 612],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: [467.16, 527.3],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: [825.04, 521.07],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: [1150.79, 594.19],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: [1497, 536.19],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: [298, 751],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: [499, 784],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: [745, 756.61],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: [1078, 897],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: [1516, 785.35],
  [PATH_POINTS.FINAL]: [1800.24, 550.86],
};

const PATH_POINT_PADDINGS = {
  [PATH_POINTS.START]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: [16, 16],
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: [16, 16],
  [PATH_POINTS.FINAL]: [16, 16],
};

const MAP_OBJECTS_POSITIONS = {
  [MAP_OBJECTS.OBJECT_1]: [223.03, 296.19],
  [MAP_OBJECTS.OBJECT_2]: [351, 177],
  [MAP_OBJECTS.OBJECT_3]: [205, 793],
  [MAP_OBJECTS.OBJECT_4]: [560.52, 232.14],
  [MAP_OBJECTS.OBJECT_5]: [627.42, 362.99],
  [MAP_OBJECTS.OBJECT_6]: [902.09, 54.77],
  [MAP_OBJECTS.OBJECT_7]: [1213.47, 45.78],
  [MAP_OBJECTS.OBJECT_8]: [1359.22, 7.21],
  [MAP_OBJECTS.OBJECT_9]: [1662.18, -16.62],
  [MAP_OBJECTS.OBJECT_10]: [1636.86, 50.1],
  [MAP_OBJECTS.OBJECT_11]: [936.65, 422.25],
  [MAP_OBJECTS.OBJECT_12]: [1612.9, 305.94],
  [MAP_OBJECTS.OBJECT_13]: [1762.23, 449.24],
  [MAP_OBJECTS.OBJECT_14]: [499, 980],
  [MAP_OBJECTS.OBJECT_15]: [970.88, 689.73],
  [MAP_OBJECTS.OBJECT_16]: [1220.63, 648.99],
  [MAP_OBJECTS.OBJECT_17]: [817.25, 802.7],
  [MAP_OBJECTS.OBJECT_18]: [1127.68, 748.44],
  [MAP_OBJECTS.OBJECT_19]: [967.11, 859.36],
  [MAP_OBJECTS.OBJECT_20]: [1133, 956],
  [MAP_OBJECTS.OBJECT_21]: [1403.56, 963.03],
};

const MAP_OBJECTS_PADDINGS = {
  [MAP_OBJECTS.OBJECT_1]: [10, 10],
  [MAP_OBJECTS.OBJECT_2]: [10, 10],
  [MAP_OBJECTS.OBJECT_3]: [10, 10],
  [MAP_OBJECTS.OBJECT_4]: [0, 0],
  [MAP_OBJECTS.OBJECT_5]: [0, 0],
  [MAP_OBJECTS.OBJECT_6]: [0, 0],
  [MAP_OBJECTS.OBJECT_7]: [10, 10],
  [MAP_OBJECTS.OBJECT_8]: [10, 10],
  [MAP_OBJECTS.OBJECT_9]: [10, 10],
  [MAP_OBJECTS.OBJECT_10]: [0, 0],
  [MAP_OBJECTS.OBJECT_11]: [10, 10],
  [MAP_OBJECTS.OBJECT_12]: [0, 0],
  [MAP_OBJECTS.OBJECT_13]: [10, 10],
  [MAP_OBJECTS.OBJECT_14]: [10, 10],
  [MAP_OBJECTS.OBJECT_15]: [10, 10],
  [MAP_OBJECTS.OBJECT_16]: [10, 10],
  [MAP_OBJECTS.OBJECT_17]: [10, 10],
  [MAP_OBJECTS.OBJECT_18]: [10, 10],
  [MAP_OBJECTS.OBJECT_19]: [10, 10],
  [MAP_OBJECTS.OBJECT_20]: [10, 10],
  [MAP_OBJECTS.OBJECT_21]: [10, 10],
};

function createBasePointOffset() {
  return [0, 0];
}

function createLockedPointOffset(point, isLast, isLocked) {
  return [0, PATH_POINT_SIZES[point](isLast, isLocked)[1] * 0.1];
}

function createGradePointOffset(point, isLast, isLocked) {
  if (isLocked) {
    return createLockedPointOffset(point, isLast, isLocked);
  }

  return isLast ? [0, PATH_POINT_SIZES[point](isLast, isLocked)[1] * 0.46] : createBasePointOffset();
}

function createFinalPointOffset(point, isLast, isLocked) {
  if (isLocked) {
    return createLockedPointOffset(point, isLast, isLocked);
  }

  return [0, PATH_POINT_SIZES[point](isLast, isLocked)[1] * 0.46];
}

const PATH_POINT_OFFSETS = {
  [PATH_POINTS.START]: () => createBasePointOffset(),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.START]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.START], last, locked),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1], last, locked),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2], last, locked),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3], last, locked),
  [PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4], last, locked),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.START]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.START], last, locked),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1], last, locked),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2], last, locked),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3], last, locked),
  [PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4], last, locked),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.START]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.START], last, locked),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1], last, locked),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2], last, locked),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3], last, locked),
  [PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4]]: (last, locked) => createGradePointOffset(PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4], last, locked),
  [PATH_POINTS.FINAL]: (last, locked) => createFinalPointOffset(PATH_POINTS.FINAL, last, locked),
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

function getPathPointSize(point, isLast, isLocked, width, height) {
  return [
    width / BASE_WIDTH * PATH_POINT_SIZES[point](isLast, isLocked)[0],
    height / BASE_HEIGHT * PATH_POINT_SIZES[point](isLast, isLocked)[1],
  ];
}

function getMapObjectSize(object, width, height) {
  return [
    width / BASE_WIDTH * MAP_OBJECT_SIZES[object][0],
    height / BASE_HEIGHT * MAP_OBJECT_SIZES[object][1],
  ];
}

function getPathPointImage(point, isLast, isLocked) {
  return PATH_POINT_IMAGES[point](isLast, isLocked);
}

function getMapObjectImage(object) {
  return MAP_OBJECT_IMAGES[object];
}

function getPathPointOffset(point, isLast, isLocked, width, height) {
  const offsets = PATH_POINT_OFFSETS[point](isLast, isLocked);
  return [width / BASE_WIDTH * offsets[0], height / BASE_HEIGHT * offsets[1]];
}

function getIsLastPoint(point, path) {
  return path?.includes(point) && path?.indexOf(point) === path.length - 1;
}

function getIsLocked(point, path) {
  return !path?.includes(point);
}

function getMapObjectDescriptionPlacement(object) {
  return MAP_OBJECTS_WITH_BOTTOM_DESCRIPTION.includes(object) ? 'bottom' : 'top';
}

function getLineConnectionPosition(point, isLast, isLocked, width, height) {
  return getPathPointPosition(point, width, height)
    .map((position, positionIndex) =>
      position
      + getPathPointSize(point, isLast, isLocked, width, height)[positionIndex] / 2
      + getPathPointOffset(point, isLast, isLocked, width, height)[positionIndex]
    );
}

function getTooltipConnectionPosition(point, isLast, isLocked, width, height) {
  const [x, y] = getPathPointPosition(point, width, height);
  return [x + getPathPointSize(point, isLast, isLocked, width, height)[0] / 2, y];
}

function createLine(originalPath, path, width, height) {
  return path?.reduce((acc, point) => [
    ...acc,
    ...getLineConnectionPosition(point, getIsLastPoint(point, originalPath), getIsLocked(point, originalPath), width, height),
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
  const left = getMapObjectPosition(object, width, height)[0] + getMapObjectSize(object, width, height)[0] / 2 - wrapperWidth / 2;

  container.scrollTo({ left, behavior: 'smooth' });
}

function CanvasImage({ src, width, height, x, y, padding, onMouseDown, onTouchStart, ...rest }) {
  const [image] = useImage(src);
  const [paddingY, paddingX] = padding;

  const containerWidth = width + paddingX * 2;
  const containerHeight = height + paddingY * 2;
  const containerX = x - paddingX;
  const containerY = y - paddingY;

  return (
    <Group onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
      <Rect x={containerX} y={containerY} width={containerWidth} height={containerHeight} />
      <Image image={image} x={x} y={y} width={width} height={height} {...rest} />
    </Group>
  );
}

export function Map(props) {
  const { className, withPathMove, withAllPoints, withOverlay, onActivePointChange, onActiveObjectChange } = props;
  const { path } = useGameState();
  const mapRef = useRef();
  const wrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const initialActivePoint = path[path.length - 1] || null;
  const [activePoint, setActivePoint] = useState(initialActivePoint);
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
      scrollToPoints(wrapperRef.current, width, height, [path[path.length - 1]]);
    }
  }, [width])

  return (
    <>
      <Wrapper className={className} ref={wrapperRef}>
        <MapImageWrapper>
          <MapImage ref={mapRef} src={map} alt="" onLoad={updateSize} />
          {withOverlay && <Overlay />}
        </MapImageWrapper>
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
                padding={MAP_OBJECTS_PADDINGS[object]}
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
                lineCap='round'
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
                    lineCap='round'
                  />
                )}
              </Spring>
            )}
          </Layer>
          <Layer>
            {(withAllPoints ? PATH_POINTS_LIST : path)?.map((point, index) => (
              <CanvasImage
                key={index}
                src={getPathPointImage(point, getIsLastPoint(point, path), getIsLocked(point, path))}
                width={getPathPointSize(point, getIsLastPoint(point, path), getIsLocked(point, path), width, height)[0]}
                height={getPathPointSize(point, getIsLastPoint(point, path), getIsLocked(point, path), width, height)[1]}
                x={getPathPointPosition(point, width, height)[0]}
                y={getPathPointPosition(point, width, height)[1]}
                shadowOffsetX={4}
                shadowOffsetY={4}
                shadowBlur={7}
                shadowColor={'rgb(0, 0, 0)'}
                shadowOpacity={0.15}
                padding={PATH_POINT_PADDINGS[point]}
                onMouseDown={(event) => handlePointClick(event, point)}
                onTouchStart={(event) => handlePointClick(event, point)}
              />
            ))}
          </Layer>
        </Stage>
        {!!activePoint && PATH_POINT_DESCRIPTION[activePoint] && (
          <FloatingTooltip
            icon={tooltipCheck}
            x={getTooltipConnectionPosition(activePoint, getIsLastPoint(activePoint, path), getIsLocked(activePoint, path), width, height)[0]}
            y={getTooltipConnectionPosition(activePoint, getIsLastPoint(activePoint, path), getIsLocked(activePoint, path), width, height)[1]}
            bounds={wrapperRef}
            onClose={removeActivePoint}
          >
            {PATH_POINT_DESCRIPTION[activePoint]}
          </FloatingTooltip>
        )}
      </Wrapper>
      {!!activeObject && MAP_OBJECT_DESCRIPTION[activeObject] && (
        <FixedTooltip
          icon={tooltipInfo}
          position={getMapObjectDescriptionPlacement(activeObject)}
          bounds={wrapperRef}
          onClose={removeActiveObject}
        >
          {MAP_OBJECT_DESCRIPTION[activeObject]}
        </FixedTooltip>
      )}
    </>
  )
}