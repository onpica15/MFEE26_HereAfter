//MING:PRE
import nose from '../../../../images/avatar/nose/nose-default.png';
import lip from '../../../../images/avatar/lip/lip-default.png';
import hairBack from '../../../../images/avatar/hair/back-hair-default.png';
import topEar from '../../../../images/avatar/topear/topear-default.png';
import eyeApre from '../../../../images/avatar/pre/eye-pre-a.png';
import eyeBpre from '../../../../images/avatar/pre/eye-pre-b.png';
import eyeCpre from '../../../../images/avatar/pre/eye-pre-c.png';
import eyeDpre from '../../../../images/avatar/pre/eye-pre-d.png';
import eyeEpre from '../../../../images/avatar/pre/eye-pre-e.png';

import earpre from '../../../../images/avatar/pre/ear-pre-default.png';
import earApre from '../../../../images/avatar/pre/ear-pre-a.png';
import earBpre from '../../../../images/avatar/pre/ear-pre-b.png';
import earCpre from '../../../../images/avatar/pre/ear-pre-c.png';
import earDpre from '../../../../images/avatar/pre/ear-pre-d.png';

import lipApre from '../../../../images/avatar/pre/lip-pre-a.png';
import lipBpre from '../../../../images/avatar/pre/lip-pre-b.png';
import lipCpre from '../../../../images/avatar/pre/lip-pre-c.png';
import lipDpre from '../../../../images/avatar/pre/lip-pre-d.png';
import lipEpre from '../../../../images/avatar/pre/lip-pre-e.png';

import noseApre from '../../../../images/avatar/pre/nose-pre-a.png';
import noseBpre from '../../../../images/avatar/pre/nose-pre-b.png';
import noseCpre from '../../../../images/avatar/pre/nose-pre-c.png';
import noseDpre from '../../../../images/avatar/pre/nose-pre-d.png';
import noseEpre from '../../../../images/avatar/pre/nose-pre-e.png';

import hairFrontApre from '../../../../images/avatar/pre/hairfront-pre-a.png';
import hairFrontBpre from '../../../../images/avatar/pre/hairfront-pre-b.png';
import hairFrontCpre from '../../../../images/avatar/pre/hairfront-pre-c.png';
import hairFrontDpre from '../../../../images/avatar/pre/hairfront-pre-d.png';
import hairFrontEpre from '../../../../images/avatar/pre/hairfront-pre-e.png';

import hairBackApre from '../../../../images/avatar/pre/hairback-pre-a.png';
import hairBackBpre from '../../../../images/avatar/pre/hairback-pre-b.png';
import hairBackCpre from '../../../../images/avatar/pre/hairback-pre-c.png';
import hairBackDpre from '../../../../images/avatar/pre/hairback-pre-d.png';
import hairBackEpre from '../../../../images/avatar/pre/hairback-pre-e.png';

import topEarApre from '../../../../images/avatar/pre/topear-pre-a.png';
import topEarBpre from '../../../../images/avatar/pre/topear-pre-b.png';
import topEarCpre from '../../../../images/avatar/pre/topear-pre-c.png';
import topEarDpre from '../../../../images/avatar/pre/topear-pre-d.png';
import topEarEpre from '../../../../images/avatar/pre/topear-pre-e.png';
import topEarFpre from '../../../../images/avatar/pre/topear-pre-f.png';

const FaceData = {
    eyeColors: [
        '#444',
        'OliveDrab',
        'MidnightBlue',
        'MediumTurquoise',
        'MediumAquaMarine',
        'MediumPurple',
        'Maroon',
    ],
    eyeColorsName: ['???', '???', '?????????', '????????????', '??????', '???', '???'],
    noseColors: [
        '#FFF',
        'pink',
        '#D7C4BB',
        '#FAD689',
        '#ccffcc',
        '#ccccff',
        '#F17C67',
    ],
    noseColorsName: ['???', '???', '???', '???', '???', '???', '???'],
    hairColors: [
        '#333',
        'brown',
        'skyblue',
        'salmon',
        'GoldenRod',
        '#ccccff',
        'wheat',
        'snow',
    ],
    hairColorsName: ['???', '???', '??????', '??????', '???', '???', '??????', '???'],
    topEarColors: [
        'LavenderBlush',
        'gray',
        '#D7C4BB',
        'Wheat',
        'pink',
        'SaddleBrown',
        'salmon',
        'SlateGrey',
    ],
    topEarColorsName: ['???', '???', '??????', '??????', '???', '???', '??????', '??????'],
    eye: [
        {
            id: 0,
            preview: eyeApre,
            limit: 0,
            name: '?????????',
            price: 100,
        },
        {
            id: 1,
            preview: eyeBpre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 2,
            preview: eyeCpre,
            limit: 3000,
            name: '?????????',
            price: 300,
        },
        {
            id: 3,
            preview: eyeDpre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 4,
            preview: eyeEpre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
    ],
    ear: [
        {
            id: 0,
            preview: earpre,
            limit: 0,
            name: '?????????',
            price: 0,
        },
        {
            id: 1,
            preview: earApre,
            limit: 3000,
            name: '?????????',
            price: 300,
        },
        {
            id: 2,
            preview: earBpre,
            limit: 3000,
            name: '?????????',
            price: 300,
        },
        {
            id: 3,
            preview: earCpre,
            limit: 3000,
            name: '??????',
            price: 300,
        },
        {
            id: 4,
            preview: earDpre,
            limit: 3000,
            name: '?????????',
            price: 300,
        },
    ],
    nose: [
        {
            id: 0,
            preview: nose,
            limit: 0,
            name: '?????????',
            price: 0,
        },
        {
            id: 1,
            preview: noseApre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 2,
            preview: noseBpre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 3,
            preview: noseCpre,
            limit: 0,
            name: '?????????',
            price: 100,
        },
        {
            id: 4,
            preview: noseDpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
        {
            id: 5,
            preview: noseEpre,
            limit: 0,
            name: '??????',
            price: 200,
        },
    ],
    lip: [
        {
            id: 0,
            preview: lip,
            limit: 0,
            name: 'kitty',
            price: 0,
        },
        {
            id: 1,
            preview: lipApre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 2,
            preview: lipBpre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 3,
            preview: lipCpre,
            limit: 0,
            name: '?????????',
            price: 200,
        },
        {
            id: 4,
            preview: lipDpre,
            limit: 0,
            name: '?????????',
            price: 100,
        },
        {
            id: 5,
            preview: lipEpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
    ],
    hairFront: [
        {
            id: 0,
            preview: hairFrontApre,
            limit: 0,
            name: '??????',
            price: 100,
        },
        {
            id: 1,
            preview: hairFrontBpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
        {
            id: 2,
            preview: hairFrontCpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
        {
            id: 3,
            preview: hairFrontDpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
        {
            id: 4,
            preview: hairFrontEpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
    ],
    hairBack: [
        {
            id: 0,
            preview: hairBack,
            limit: 0,
            name: '?????????',
            price: 0,
        },
        {
            id: 1,
            preview: hairBackApre,
            limit: 0,
            name: '??????',
            price: 100,
        },
        {
            id: 2,
            preview: hairBackBpre,
            limit: 0,
            name: '?????????',
            price: 100,
        },
        {
            id: 3,
            preview: hairBackCpre,
            limit: 0,
            name: '?????????',
            price: 100,
        },
        {
            id: 4,
            preview: hairBackDpre,
            limit: 0,
            name: '?????????',
            price: 100,
        },
        {
            id: 5,
            preview: hairBackEpre,
            limit: 0,
            name: '??????',
            price: 100,
        },
    ],
    topEar: [
        {
            id: 0,
            preview: topEar,
            limit: 0,
            name: '',
            price: 0,
        },
        {
            id: 1,
            preview: topEarApre,
            limit: 3000,
            name: '??????',
            price: 500,
        },
        {
            id: 2,
            preview: topEarBpre,
            limit: 3000,
            name: '??????',
            price: 500,
        },
        {
            id: 3,
            preview: topEarCpre,
            limit: 3000,
            name: '?????????',
            price: 500,
        },
        {
            id: 4,
            preview: topEarDpre,
            limit: 3000,
            name: '??????',
            price: 500,
        },
        {
            id: 5,
            preview: topEarEpre,
            limit: 3000,
            name: '??????',
            price: 500,
        },
        {
            id: 6,
            preview: topEarFpre,
            limit: 3000,
            name: '??????',
            price: 500,
        },
    ],
};
export default FaceData;
