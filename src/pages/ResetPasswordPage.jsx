import React from "react";
import { Layout, Form, Input, Button, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import callApi from '../utils/api';  // Import hàm callApi

const { Header } = Layout;

const ResetPasswordPage = () => {
  const onFinish = async (values) => {
    try {
      // Gọi API đổi mật khẩu
      const response = await callApi('/auth/changePassword', 'post', values);

      // Xử lý phản hồi từ server (response)
      console.log(response);

      // Thực hiện các bước tiếp theo, chẳng hạn chuyển hướng trang, hiển thị thông báo thành công, v.v.
    } catch (error) {
      console.error('Error during password change:', error);
      // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi cho người dùng
    }
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header
        style={{
          padding: 38,
          background: "#yourBackgroundColor",  // Thay #yourBackgroundColor bằng mã màu bạn muốn sử dụng
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
          style={{ width: "100%", minHeight: "100vh" }}
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
            {/* Các trường nhập liệu mật khẩu hiện tại, mật khẩu mới, và xác nhận mật khẩu mới */}
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
              {/* Nút đổi mật khẩu */}
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
