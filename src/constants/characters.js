import {
    casual0, casual1, casual2, casual3, casual4, casual5,
    production0_0, production1_0, production2_0, production3_0, production4_0, production5_0,
    production0_1, production1_1, production2_1, production3_1, production4_1, production5_1,
    production0_2, production1_2, production2_2, production3_2, production4_2, production5_2,
    project0_0, project1_0, project2_0, project3_0, project4_0, project5_0,
    project0_1, project1_1, project2_1, project3_1, project4_1, project5_1,
    project0_2, project1_2, project2_2, project3_2, project4_2, project5_2,
    business0_0, business1_0, business2_0, business3_0, business4_0, business5_0,
    business0_1, business1_1, business2_1, business3_1, business4_1, business5_1,
    business0_2, business1_2, business2_2, business3_2, business4_2, business5_2,
} from './charactersImages';
import { TRACKS } from './tracks';

const CHARACTERS = {
    CHARACTER0: 'CHARACTER0',
    CHARACTER1: 'CHARACTER1',
    CHARACTER2: 'CHARACTER2',
    CHARACTER3: 'CHARACTER3',
    CHARACTER4: 'CHARACTER4',
    CHARACTER5: 'CHARACTER5',
};

export const charactersInfo = {
    [CHARACTERS.CHARACTER0]: {
        id: 0,
        pictures: {
            casual: [casual0],
            [TRACKS.TRACK_1]: [production0_0, production0_1, production0_2],
            [TRACKS.TRACK_2]: [project0_0, project0_1, project0_2],
            [TRACKS.TRACK_3]: [business0_0, business0_1, business0_2],
        }
    },
    [CHARACTERS.CHARACTER1]: {
        id: 1,
        pictures: {
            casual: [casual1],
            [TRACKS.TRACK_1]: [production1_0, production1_1, production1_2],
            [TRACKS.TRACK_2]: [project1_0, project1_1, project1_2],
            [TRACKS.TRACK_3]: [business1_0, business1_1, business1_2],
        },
    },
    [CHARACTERS.CHARACTER2]: {
        id: 2,
        pictures: {
            casual: [casual2],
            [TRACKS.TRACK_1]: [production2_0, production2_1, production2_2],
            [TRACKS.TRACK_2]: [project2_0, project2_1, project2_2],
            [TRACKS.TRACK_3]: [business2_0, business2_1, business2_2],
        }
    },
    [CHARACTERS.CHARACTER3]: {
        id: 3,
        pictures: {
            casual: [casual3],
            [TRACKS.TRACK_1]: [production3_0, production3_1, production3_2],
            [TRACKS.TRACK_2]: [project3_0, project3_1, project3_2],
            [TRACKS.TRACK_3]: [business3_0, business3_1, business3_2],
        }
    },
    [CHARACTERS.CHARACTER4]: {
        id: 4,
        pictures: {
            casual: [casual4],
            [TRACKS.TRACK_1]: [production4_0, production4_1, production4_2],
            [TRACKS.TRACK_2]: [project4_0, project4_1, project4_2],
            [TRACKS.TRACK_3]: [business4_0, business4_1, business4_2],
        }
    },
    [CHARACTERS.CHARACTER5]: {
        id: 5,
        pictures: {
            casual: [casual5],
            [TRACKS.TRACK_1]: [production5_0, production5_1, production5_2],
            [TRACKS.TRACK_2]: [project5_0, project5_1, project5_2],
            [TRACKS.TRACK_3]: [business5_0, business5_1, business5_2],
        }
    }
}