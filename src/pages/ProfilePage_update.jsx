//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";

import React from 'react';
import { MedicineBoxOutlined, MoneyCollectOutlined, IdcardOutlined , UnlockOutlined } from '@ant-design/icons';
import { Layout, Menu, theme,   } from 'antd';

const { Header, Content, Sider } = Layout;

const icons = [IdcardOutlined,MedicineBoxOutlined, MoneyCollectOutlined, UnlockOutlined];
const labels = ["Thông tin khách hàng","Gói bảo hiểm","Hóa đơn", "Bảo mật"];
const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}))
// Thông tin khách hàng
const profile = {
    fullname: "Lê Thị Cà Dzốt",
    phone: "0101010101",
    email: "ragot@email.com",
    address: "12 Rau củ quả, phường Vườn rau",
    health: "Đang nở rộ, đang thu hoạch được",
};
// Khi chọn Tab Thông tin cá nhân => Hiển thị data Customer.
const ProfilePage_update = () => {
    const {
        token: { colorBgContainer },
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
                <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
                    <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin cá nhân</span>
                </Header>
                
                <Content style={{ margin: 40, width: "100%", maxWidth: 10000 }}>               
                    <div style={{ padding: 20 }}>
                        <div>Họ và tên: {profile.fullname}</div>
                        <div>Số điện thoại: {profile.phone}</div>
                        <div>Email: {profile.email}</div>
                        <div>Địa chỉ: {profile.address}</div>
                    </div>
                </Content>
                <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
                    <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin sức khỏe</span>
                </Header>

                <Content style={{ margin: 40, width: "100%", maxWidth: 10000 }}>
                    <div style={{ padding: 20 }}>
                        <div>Tình trạng sức khỏe: {profile.health}</div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ProfilePage_update;
