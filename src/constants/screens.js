import { Screen1 } from '../components/screens/Screen-1';
import { Screen11 } from '../components/screens/track1/Screen-1-1';
import { Screen12 } from '../components/screens/track1/Screen-1-2';
import { Screen13 } from '../components/screens/track1/Screen-1-3';
import { Screen21 } from '../components/screens/track2/Screen-2-1';
import { Screen22 } from '../components/screens/track2/Screen-2-2';
import { Screen23 } from '../components/screens/track2/Screen-2-3';
import { Screen31 } from '../components/screens/track3/Screen-3-1';
import { Screen32 } from '../components/screens/track3/Screen-3-2';
import { Screen33 } from '../components/screens/track3/Screen-3-3';
import { Screen2 } from '../components/screens/Screen-2';

export const SCREENS = {
  SCREEN_1: 'SCREEN_1',
  SCREEN_2: 'SCREEN_2',
  TRACK_1: {
    SCREEN_1: 'TRACK_1.SCREEN_1',
    SCREEN_2: 'TRACK_1.SCREEN_2',
    SCREEN_3: 'TRACK_1.SCREEN_3',
  },
  TRACK_2: {
    SCREEN_1: 'TRACK_2.SCREEN_1',
    SCREEN_2: 'TRACK_2.SCREEN_2',
    SCREEN_3: 'TRACK_2.SCREEN_3',
  },
  TRACK_3: {
    SCREEN_1: 'TRACK_3.SCREEN_1',
    SCREEN_2: 'TRACK_3.SCREEN_2',
    SCREEN_3: 'TRACK_3.SCREEN_3',
  },
};

export const SCREEN_COMPONENTS = {
  [SCREENS.SCREEN_1]: Screen1,
  [SCREENS.SCREEN_2]: Screen2,
  [SCREENS.TRACK_1.SCREEN_1]: Screen11,
  [SCREENS.TRACK_1.SCREEN_2]: Screen12,
  [SCREENS.TRACK_1.SCREEN_3]: Screen13,
  [SCREENS.TRACK_2.SCREEN_1]: Screen21,
  [SCREENS.TRACK_2.SCREEN_2]: Screen22,
  [SCREENS.TRACK_2.SCREEN_3]: Screen23,
  [SCREENS.TRACK_3.SCREEN_1]: Screen31,
  [SCREENS.TRACK_3.SCREEN_2]: Screen32,
  [SCREENS.TRACK_3.SCREEN_3]: Screen33,
};
