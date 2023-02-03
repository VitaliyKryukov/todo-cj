import {MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';
import {FcOpenedFolder} from 'react-icons/fc';
import {FcClapperboard} from 'react-icons/fc';


const treeData = [
    {
        key: '0',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'ASSETS',
        children: [
            {
                key: '1',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '2',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0010',
                    },
                    {
                        key: '3',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0030',
                    },
                    {
                        key: '4',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0040',
                    },
                ],
            },
        ],
    },
    {
        key: '5',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'RND',
        children: [
            {
                key: '6',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '7',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00320',
                    },
                    {
                        key: '8',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00430',
                    },
                    {
                        key: '9',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00430',
                    },
                ],
            },
        ],
    },
    {
        key: '10',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'ONSET',
        children: [
            {
                key: '11',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '12',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_004d10',
                    },
                    {
                        key: '13',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00ds30',
                    },
                    {
                        key: '14',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0033240',
                    },
                ],
            },
        ],
    },
    {
        key: '15',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'CAPS',
        children: [
            {
                key: '16',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '17',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_001r20',
                    },
                    {
                        key: '18',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0dfs030',
                    },
                    {
                        key: '19',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_004230',
                    },
                ],
            },
        ],
    },
    {
        key: '20',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'CAVE',
        children: [
            {
                key: '21',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '22',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00fdd10',
                    },
                    {
                        key: '23',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00ddds30',
                    },
                    {
                        key: '24',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0432f040',
                    },
                ],
            },
        ],
    },
    {
        key: '25',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'XMRF',
        children: [
            {
                key: '26',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '27',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00fsdfsd10',
                    },
                    {
                        key: '28',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0ddd030',
                    },
                    {
                        key: '29',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_0ssss040',
                    },
                ],
            },
        ],
    },
    {
        key: '30',
        icon: <MdKeyboardArrowRight/>,
        iconFolder: <FcOpenedFolder/>,
        label: 'ENGN',
        children: [
            {
                key: '31',
                icon: <MdKeyboardArrowDown/>,
                iconFolder: <FcOpenedFolder/>,
                label: 'INFC',
                children: [
                    {
                        key: '32',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00333310',
                    },
                    {
                        key: '33',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_00222230',
                    },
                    {
                        key: '34',
                        iconFolder: <FcClapperboard/>,
                        label: 'INFC_011111040',
                    },
                ],
            },
        ],
    },
];

export default treeData;