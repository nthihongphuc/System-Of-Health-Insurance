//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Form, Input, Button, Menu, theme, Card } from "antd";
import { Content } from "antd/es/layout/layout";

const { Header, Sider } = Layout;

// const icons = [IdcardOutlined,MedicineBoxOutlined, MoneyCollectOutlined, UnlockOutlined];
// const labels = ["Thông tin cá nhân","Gói bảo hiểm","Hóa đơn", "Bảo mật"];
// const items = icons.map((icon, index) => ({
//   id: String(index + 1),
//   icon: React.createElement(icon),
//   label: labels[index],
// }))

const ResetPasswordPage = () => {
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
          Bảo mật
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
          <h2 style={{ textAlign: "center" }}>Đổi mật khẩu</h2>
          <Form
            name="change_password_form"
            onFinish={onFinish}
            style={{ width: 300, textAlign: "center" }}
            layout="vertical"
          >
            <Form.Item
              label="Mật khẩu hiện tại"
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu hiện tại!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Mật khẩu mới"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu mới!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu mới"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận mật khẩu mới!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu mới không khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="resetpass-form-button"
                style={{ marginTop: 10 }}
              >
                Đổi mật khẩu
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default ResetPasswordPage;