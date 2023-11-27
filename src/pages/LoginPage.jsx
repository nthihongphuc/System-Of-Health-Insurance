// import library here
import React from "react";
import {
  Form,
  Input,
  Checkbox,
  Layout,
  Menu,
  theme,
  Button,
  Image,
  Row,
  Col,
  Card,
} from "antd";
const { Header, Content, Footer } = Layout;
import { Link } from "react-router-dom";

import logo from "../assets/react.svg";

const menuItems = [
  {
    key: "home",
    label: "Trang chủ",
  },
  {
    key: "product",
    label: "Sản phẩm",
  },
  {
    key: "support",
    label: "Hỗ trợ khách hàng",
  },
];

// Define Our component
const LoginPage = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Row
      style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
    >
      <Card style={{ margin: 40, width: "100%", maxWidth: 300 }}>
        <h2>Đăng nhập</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
            <div style={{ marginTop: 10 }}>
              Chưa có tài khoản <Link to="/activation">Kích hoạt</Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

// output component
export default LoginPage;
