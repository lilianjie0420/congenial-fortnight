import React from 'react';
import { useRoutes } from 'react-router-dom';
import Menu1_1 from './Menu1_1/index.jsx';
import Menu1_2 from './Menu1_2/index.jsx';
import Menu2_1 from './Menu2_1/index.jsx';
import Menu2_2 from './Menu2_2/index.jsx';

export default () => {
    const elementRender = useRoutes([
        {
            path: '1-1',
            element: <Menu1_1 />
        },
        {
            path: '1-2',
            element: <Menu1_2 />
        },
        {
            path: '2-1',
            element: <Menu2_1 />
        },
        {
            path: '2-2',
            element: <Menu2_2 />
        },
    ])
    return elementRender
}