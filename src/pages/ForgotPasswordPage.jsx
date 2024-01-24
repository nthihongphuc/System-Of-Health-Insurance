import React, { useState } from "react";
import { Layout, Form, Input, Button, Card, theme, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import api from "../api/endpoint";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../assets/bg.png";

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
        navigate("/login");
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
            padding: 40,
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            aspectRatio: "16/8",
          }}
        >
          <Card
            // style={{ width: "100%", minHeight: "100vh" }}
            // bodyStyle={{
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            // }}
            style={{ width: "100%", height: 300, maxWidth: 450 }}
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
                <Input />
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
        </Row>
    </Layout>
  );
};

export default FogotPasswordPage;
