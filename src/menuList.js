import {
    AppstoreOutlined,
    MailOutlined,
} from '@ant-design/icons';
import React from 'react';

export default [
    {
        key: '1',
        icon: <MailOutlined />,
        label: '菜单1',
        children: [
            {
                key: '1-1',
                label: '子菜单1-1',
            },
            {
                key: '1-2',
                label: '子菜单1-2',
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
            },
            {
                key: '2-2',
                label: '子菜单2-2',
            },
        ],
    },
]