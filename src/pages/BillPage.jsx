//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Form, Input, Button, Menu, theme, Card, Collapse } from "antd";
import { Content } from "antd/es/layout/layout";

const { Header} = Layout;

const BillPage = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{height: "100%"}}>
        <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
            <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin hóa đơn</span>
          </Header>
          <Content style={{margin: 40}}>
          </Content>
      </Layout>
    );
  };

  export default BillPage;