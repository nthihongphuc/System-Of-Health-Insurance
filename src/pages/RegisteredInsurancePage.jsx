import React from 'react';
import { MedicineBoxOutlined, MoneyCollectOutlined, IdcardOutlined, UnlockOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Card } from 'antd';
import { Collapse } from 'antd';

const { Header, Sider } = Layout;

const icons = [IdcardOutlined, MedicineBoxOutlined, MoneyCollectOutlined, UnlockOutlined];
const labels = ["Thông tin cá nhân", "Gói bảo hiểm", "Hóa đơn", "Bảo mật"];
const items = icons.map((icon, index) => ({
  id: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}));

const items_renamed = [
  {
    key: '10',
    label: 'Bảo hiểm tai nạn',
    children: <p>aaaaaaaaaaaaaaaaa</p>,
    
  },
  {
    key: '11',
    label: 'Bảo hiểm bệnh hiểm nghèo',
    children: <p>bbbbbbbbbbbbbbb</p>,
  },
  {
    key: '12',
    label: 'Bảo hiểm thương tật',
    children: <p>cccccccccccccccc</p>,
  }
];

const RegisteredInsurancePage = () => {
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
          <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin bảo hiểm đã đăng ký</span>
        </Header>
        <Card
          style={{ margin: 40, width: "100%", maxWidth: 10000 }}
          bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Corrected usage of Collapse */}
          <Collapse accordion items={items_renamed} style={{ width: '100%', border: 'none' }} />
        </Card>
      </Layout>
    </Layout>
  );
};

export default RegisteredInsurancePage;
