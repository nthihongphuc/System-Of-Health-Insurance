import React from "react";
import { Layout, Form, Input, Button, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import api from "../api/endpoint";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Header } = Layout;

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Gọi API đổi mật khẩu
      const response = await api.changePassword(values);
      if (response) {
        navigate('/profile/account');
      } else {
        toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    } catch (error) {
      console.error('Error during password change:', error);
      // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi cho người dùng
      if (error.response && error.response.data && error.response.data.error) {
        // Lấy thông báo lỗi từ backend và hiển thị trong toast
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
          // Xử lý các trường hợp lỗi khác và hiển thị thông báo mặc định
          toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    }
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header
        style={{
          padding: 38,
          // background: "#yourBackgroundColor",  // Thay #yourBackgroundColor bằng mã màu bạn muốn sử dụng
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
              name="currentPassword"
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
