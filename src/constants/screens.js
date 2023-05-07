import { Screen1 } from '../components/screens/Screen-1';
import { Screen11 } from '../components/screens/track1/Screen-1-1';
import { Screen121 } from '../components/screens/track1/Screen-1-2-1';
import { Screen122 } from '../components/screens/track1/Screen-1-2-2';
import { Screen123 } from '../components/screens/track1/Screen-1-2-3';
import { Screen13 } from '../components/screens/track1/Screen-1-3';
import { Screen14 } from '../components/screens/track1/Screen-1-4';
import { Screen21 } from '../components/screens/track2/Screen-2-1';
import { Screen221 } from '../components/screens/track2/Screen-2-2-1';
import { Screen222 } from '../components/screens/track2/Screen-2-2-2';
import { Screen223 } from '../components/screens/track2/Screen-2-2-3';
import { Screen23 } from '../components/screens/track2/Screen-2-3';
import { Screen31 } from '../components/screens/track3/Screen-3-1';
import { Screen321 } from '../components/screens/track3/Screen-3-2-1';
import { Screen322 } from '../components/screens/track3/Screen-3-2-2';
import { Screen323 } from '../components/screens/track3/Screen-3-2-3';
import { Screen33 } from '../components/screens/track3/Screen-3-3';
import { Screen2 } from '../components/screens/Screen-2';
import { Screen3 } from '../components/screens/Screen-3';
import { Screen4 } from '../components/screens/Screen-4';
import { Screen10 } from '../components/screens/track1/Screen-1-0';
import { Screen20 } from '../components/screens/track2/Screen-2-0';
import { Screen30 } from '../components/screens/track3/Screen-3-0';
import { Screen5 } from '../components/screens/Screen-5';
import { Screen6 } from '../components/screens/Screen-6';
import { Screen7 } from '../components/screens/Screen-7';
import { Screen24 } from '../components/screens/track2/Screen-2-4';
import { Screen34 } from '../components/screens/track3/Screen-3-4';
import { Screen8 } from '../components/screens/Screen-8';
import { Screen9 } from '../components/screens/Screen-9';
import { Screen101 } from '../components/screens/Screen-10-1';
import { Screen102 } from '../components/screens/Screen-10-2';
import { Screen15 } from '../components/screens/track1/Screen-1-5';
import { Screen25 } from '../components/screens/track2/Screen-2-5';
import { Screen35 } from '../components/screens/track3/Screen-3-5';
import { Screen36 } from '../components/screens/track3/Screen-3-6';
import { Screen26 } from '../components/screens/track2/Screen-2-6';
import { Screen16 } from '../components/screens/track1/Screen-1-6';
import { TetrisScreen } from '../components/screens/Screen-11';
import { PreFinalScreen } from '../components/screens/Screen-12';
import { FinalScreen } from '../components/screens/Screen-15';
import { MapScreen } from '../components/screens/Screen-13';
import { Screen37 } from '../components/screens/track3/Screen-3-7';
import { Screen27 } from '../components/screens/track2/Screen-2-7';
import { Screen17 } from '../components/screens/track1/Screen-1-7';
import { PreTetrisScreen } from '../components/screens/Screen-14';
import { BeforeNextScreen } from '../components/screens/Screen-16';

import { GRADES } from './grades';

export const SCREENS = {
  SCREEN_1: 'SCREEN_1',
  SCREEN_2: 'SCREEN_2',
  SCREEN_3: 'SCREEN_3',
  SCREEN_4: 'SCREEN_4',
  SCREEN_5: 'SCREEN_5',
  SCREEN_6: 'SCREEN_6',
  SCREEN_7: 'SCREEN_7',
  SCREEN_8: 'SCREEN_8',
  SCREEN_9: 'SCREEN_9',
  SCREEN_10_1: 'SCREEN_10_1',
  SCREEN_10_2: 'SCREEN_10_2',
  SCREEN_11: 'SCREEN_11',
  SCREEN_12: 'SCREEN_12',
  SCREEN_13: 'SCREEN_13',
  SCREEN_14: 'SCREEN_14',
  SCREEN_15: 'SCREEN_15',
  SCREEN_16: 'SCREEN_16',
  TRACK_1: {
    [GRADES.START]: 'TRACK_1.START',
    SCREEN_1: 'TRACK_1.SCREEN_1',
    SCREEN_2_1: 'TRACK_1.SCREEN_2_1',
    SCREEN_2_2: 'TRACK_1.SCREEN_2_2',
    SCREEN_2_3: 'TRACK_1.SCREEN_2_3',
    [GRADES.GRADE_1]: 'TRACK_1.GRADE_1',
    [GRADES.GRADE_2]: 'TRACK_1.GRADE_2',
    [GRADES.GRADE_3]: 'TRACK_1.GRADE_3',
    [GRADES.GRADE_4]: 'TRACK_1.GRADE_4',
    [GRADES.FINAL]: 'TRACK_1.FINAL',
    SCREEN_4: 'TRACK_1.SCREEN_4',
  },
  TRACK_2: {
    [GRADES.START]: 'TRACK_2.START',
    SCREEN_1: 'TRACK_2.SCREEN_1',
    SCREEN_2_1: 'TRACK_2.SCREEN_2_1',
    SCREEN_2_2: 'TRACK_2.SCREEN_2_2',
    SCREEN_2_3: 'TRACK_2.SCREEN_2_3',
    [GRADES.GRADE_1]: 'TRACK_2.GRADE_1',
    [GRADES.GRADE_2]: 'TRACK_2.GRADE_2',
    [GRADES.GRADE_4]: 'TRACK_2.GRADE_4',
    [GRADES.FINAL]: 'TRACK_2.FINAL',
  },
  TRACK_3: {
    [GRADES.START]: 'TRACK_3.START',
    SCREEN_1: 'TRACK_3.SCREEN_1',
    SCREEN_2_1: 'TRACK_3.SCREEN_2_1',
    SCREEN_2_2: 'TRACK_3.SCREEN_2_2',
    SCREEN_2_3: 'TRACK_3.SCREEN_2_3',
    [GRADES.GRADE_1]: 'TRACK_3.GRADE_1',
    [GRADES.GRADE_2]: 'TRACK_3.GRADE_2',
    [GRADES.GRADE_3]: 'TRACK_3.GRADE_3',
    [GRADES.GRADE_4]: 'TRACK_3.GRADE_4',
    [GRADES.FINAL]: 'TRACK_3.FINAL',
  },
};

export const SCREEN_COMPONENTS = {
  [SCREENS.SCREEN_1]: Screen1,
  [SCREENS.SCREEN_2]: Screen2,
  [SCREENS.SCREEN_3]: Screen3,
  [SCREENS.SCREEN_4]: Screen4,
  [SCREENS.SCREEN_5]: Screen5,
  [SCREENS.SCREEN_6]: Screen6,
  [SCREENS.SCREEN_7]: Screen7,
  [SCREENS.SCREEN_8]: Screen8,
  [SCREENS.SCREEN_9]: Screen9,
  [SCREENS.SCREEN_10_1]: Screen101,
  [SCREENS.SCREEN_10_2]: Screen102,
  [SCREENS.SCREEN_11]: TetrisScreen,
  [SCREENS.SCREEN_12]: PreFinalScreen,
  [SCREENS.SCREEN_13]: MapScreen,
  [SCREENS.SCREEN_14]: PreTetrisScreen,
  [SCREENS.SCREEN_15]: FinalScreen,
  [SCREENS.SCREEN_16]: BeforeNextScreen,
  [SCREENS.TRACK_1[GRADES.START]]: Screen10,
  [SCREENS.TRACK_1.SCREEN_1]: Screen11,
  [SCREENS.TRACK_1.SCREEN_2_1]: Screen121,
  [SCREENS.TRACK_1.SCREEN_2_2]: Screen122,
  [SCREENS.TRACK_1.SCREEN_2_3]: Screen123,
  [SCREENS.TRACK_1[GRADES.GRADE_1]]: Screen13,
  [SCREENS.TRACK_1[GRADES.GRADE_2]]: Screen14,
  [SCREENS.TRACK_1[GRADES.GRADE_3]]: Screen15,
  [SCREENS.TRACK_1[GRADES.GRADE_4]]: Screen16,
  [SCREENS.TRACK_1[GRADES.FINAL]]: Screen17,
  [SCREENS.TRACK_1.SCREEN_4]: Screen14,
  [SCREENS.TRACK_2[GRADES.START]]: Screen20,
  [SCREENS.TRACK_2.SCREEN_1]: Screen21,
  [SCREENS.TRACK_2.SCREEN_2_1]: Screen221,
  [SCREENS.TRACK_2.SCREEN_2_2]: Screen222,
  [SCREENS.TRACK_2.SCREEN_2_3]: Screen223,
  [SCREENS.TRACK_2[GRADES.GRADE_1]]: Screen23,
  [SCREENS.TRACK_2[GRADES.GRADE_2]]: Screen24,
  [SCREENS.TRACK_2[GRADES.GRADE_3]]: Screen25,
  [SCREENS.TRACK_2[GRADES.GRADE_4]]: Screen26,
  [SCREENS.TRACK_2[GRADES.FINAL]]: Screen27,
  [SCREENS.TRACK_3[GRADES.START]]: Screen30,
  [SCREENS.TRACK_3.SCREEN_1]: Screen31,
  [SCREENS.TRACK_3.SCREEN_2_1]: Screen321,
  [SCREENS.TRACK_3.SCREEN_2_2]: Screen322,
  [SCREENS.TRACK_3.SCREEN_2_3]: Screen323,
  [SCREENS.TRACK_3[GRADES.GRADE_1]]: Screen33,
  [SCREENS.TRACK_3[GRADES.GRADE_2]]: Screen34,
  [SCREENS.TRACK_3[GRADES.GRADE_3]]: Screen35,
  [SCREENS.TRACK_3[GRADES.GRADE_4]]: Screen36,
  [SCREENS.TRACK_3[GRADES.FINAL]]: Screen37,
};
