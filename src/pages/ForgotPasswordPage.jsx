import React, { useState } from "react";
import { Layout, Form, Input, Button, Card, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import api from "../api/endpoint";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Header } = Layout;

const FogotPasswordPage = () => {
    const navigate = useNavigate();
    // const [state, setState] = useState({ email: "" });
  
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    
    const onFinish = async (values) => {
      try {
        // Gọi API quên mật khẩu
        const response = await api.forgotPassword(values);
        if (response) {
          navigate('/login');
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
      <Content style={{ margin: 40 }}>
        <Card
          style={{ width: "100%", minHeight: "100vh" }}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Cấp lại mật khẩu</h2>
          <Form
            name="forgot_password_form"
            onFinish={onFinish}
            style={{ width: 300, textAlign: "center" }}
            layout="vertical"
          >
            {/* Nhập email để cấp lại mật khẩu mới */}
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
              <Input/>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              {/* Nút đổi mật khẩu */}
              <Button
                type="primary"
                htmlType="submit"
                className="forgotpass-form-button"
                style={{ marginTop: 10 }}
              >
                Gửi mã yêu cầu
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default FogotPasswordPage;
