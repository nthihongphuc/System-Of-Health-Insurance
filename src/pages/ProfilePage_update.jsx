//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";

import React from 'react';
import { MedicineBoxOutlined, MoneyCollectOutlined, IdcardOutlined , UnlockOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const icons = [IdcardOutlined,MedicineBoxOutlined, MoneyCollectOutlined, UnlockOutlined];
const labels = ["Thông tin cá nhân","Gói bảo hiểm","Hóa đơn", "Bảo mật"];
const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}))

const ProfilePage_update = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider 
                width={230}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        content
                    </div>
                </Content>
                
            </Layout>
        </Layout>
    );
};

export default ProfilePage_update;
