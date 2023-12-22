//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useState } from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Form, Input, Button, Menu, theme, Card } from "antd";
import { Content } from "antd/es/layout/layout";

const { Header, Sider } = Layout;

// const icons = [
//   IdcardOutlined,
//   MedicineBoxOutlined,
//   MoneyCollectOutlined,
//   UnlockOutlined,
// ];
// const labels = ["Thông tin cá nhân", "Gói bảo hiểm", "Hóa đơn", "Bảo mật"];
// const items = icons.map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: labels[index],
// }));

const ProfilePage_update = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
     const onFinish = (values) => {
        console.log(values);
    };
  return (
    <Layout style={{ height: "100%" }}>
    <Header
      style={{
        padding: 38,
        background: colorBgContainer,
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{ justifyContent: "center", fontSize: 26, fontWeight: "bold" }}
      >
        Tài khoản
      </span>
    </Header>
    <Content style={{ margin: 40 }}>
        <Card
          style={{ width: "100%" , minHeight : "100vh"}}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
            <h2 style={{ textAlign: "center" }}>Thông tin cá nhân</h2>
          <Form
            name="profile_from"
            onFinish={onFinish}
            style={{ width: 300, textAlign: "center" }}
            layout="vertical"
          >
            <Form.Item
              label="Họ và tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên!",
                },
              ]}
            >
            <Input/>
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              name="birthday"
            >
            <Input 
                disabled = {componentDisabled}
                placeholder="Ngày sinh"
            />
            </Form.Item>
            {/* <Form.Item
              label="Giới tính"
              name="gender"
            >
            <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
            <Input 
                disabled = {componentDisabled}
                placeholder="Giới tính"
            />
            </Form.Item> */}
        </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProfilePage_update;
