import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Button, Layout, } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import BaseRouter from './pages/routes.jsx';
import './global.less';
import { connect } from 'react-redux';


const { Header, Content, Sider } = Layout;

export default connect(state => state)((props) => {
    const { menuReduer } = props;
    const navigate = useNavigate(true); // 类似history
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout>
            <Header className="header">
                <div className='header-tit'>
                    <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' className='logo' />
                    李连杰的react项目
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
            </Header>

            <Layout>
                <Sider collapsed={collapsed} width={200} className='layout-Sider'>
                    <Button
                        type="primary"
                        onClick={toggleCollapsed}
                        style={{
                            margin: '0 14px 10px',
                            width: 53
                        }}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['1','2']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={menuReduer}
                        onSelect={(router) => {
                            navigate(router.key)
                        }}
                    />
                </Sider>

                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    {/* <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className="layout-Content"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <BaseRouter />
                    </Content>
                </Layout>

            </Layout>

        </Layout>
    );
});

