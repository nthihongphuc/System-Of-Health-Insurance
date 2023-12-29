//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useState } from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Form,
  Input,
  Button,
  Menu,
  theme,
  Card,
  Select,
  Cascader,
  Radio,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";

const { Header } = Layout;
const { TextArea } = Input;

const SupportPage = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ margin: 40 }}>
        <Card
          style={{ width: "100%", minHeight: "100vh" }}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Nhập thông tin của bạn</h2>
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
              <Input />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn giới tính!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male"> Nam </Radio>
                <Radio value="female"> Nữ </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập địa chỉ!",
                },
              ]}
            >
              <Cascader options={address} />
            </Form.Item>
            <Form.Item 
              label="Bạn muốn được tư vấn về"
              name="select"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn!",
                },
              ]}
            >
              <Select>
                <Select.Option value="insurance">Tư vấn về bảo hiểm</Select.Option>
                <Select.Option value="bill">Tư vấn về hóa đơn</Select.Option>
                <Select.Option value="other">Khác</Select.Option>
              </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
              Gửi thông tin
            </Button>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default SupportPage;
