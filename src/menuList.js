import {
    AppstoreOutlined,
    MailOutlined,
} from '@ant-design/icons';
import React from 'react';
import Menu1_1 from './pages/Menu1_1/index.jsx';
import Menu1_2 from './pages/Menu1_2/index.jsx';
import Menu2_1 from './pages/Menu2_1/index.jsx';
import Menu2_2 from './pages/Menu2_2/index.jsx';

export default [
    {
        key: '1',
        icon: <MailOutlined />,
        label: '菜单1',
        children: [
            {
                key: '1-1',
                label: '子菜单1-1',
                element: <Menu1_1 />
            },
            {
                key: '1-2',
                label: '子菜单1-2',
                element: <Menu1_2 />
            },
        ],
    },
    {
        key: '2',
        icon: <AppstoreOutlined />,
        label: '菜单2',
        children: [
            {
                key: '2-1',
                label: '子菜单2-1',
                element: <Menu2_1 />
            },
            {
                key: '2-2',
                label: '子菜单2-2',
                element: <Menu2_2 />
            },
        ],
    },
]