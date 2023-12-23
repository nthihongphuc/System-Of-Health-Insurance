import React from 'react';
import { MedicineBoxOutlined, MoneyCollectOutlined, IdcardOutlined, UnlockOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Card } from 'antd';
import { Collapse } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Header, Sider } = Layout;

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
    <Layout style={{height: "100%"}}>
      <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
          <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin bảo hiểm đã đăng ký</span>
        </Header>
        <Content style={{margin: 40}}>
          <Card
            style={{ width: "100%", maxWidth: 10000, minHeight: "100vh" }}
            bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Corrected usage of Collapse */}
            <Collapse accordion items={items_renamed} style={{ width: '100%', border: 'none' }} />
          </Card>
        </Content>
    </Layout>
  );
};

export default RegisteredInsurancePage;
