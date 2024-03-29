// import thư viện ở đây
import { Form, Input, Button, Row, Card, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/endpoint";
import { toast } from "react-toastify";
import React, { useState } from "react";
import home1 from "../assets/home.jpg";

// Định nghĩa component
const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onFinish = async ({username,password}) => {
    try {
      
      const data = await api.login({ username, password });
      if (data?.success) {
        localStorage.setItem('access_token', data.data.accessToken);
        toast.success('Đăng nhập thành công');
        navigate('/home');
      } else {
      toast.error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Row
      style={{
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url(${home1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/7",
      }}
    >
      <Card
          style={{ width: "100%", maxWidth: 350, height: 400, margin: 100 }}
          bodyStyle={{ textAlign: "left" }}
        >
          <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            {/* Các trường nhập liệu username và password */}
            <Form.Item
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!",
                },
              ]}
            >
              <Input placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password type="password" placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              {/* Link quên mật khẩu */}
              <div
                style={{ fontSize: 12, textAlign: "left", marginBottom: 15 }}
              >
                <Link to="/forgot-password">Quên tài khoản/mật khẩu</Link>
              </div>
              {/* Nút đăng nhập */}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ marginTop: 10 }}
              >
                Đăng nhập
              </Button>
              {/* Link chuyển hướng đến trang đăng ký */}
              <div style={{ marginTop: 10 }}>
                Chưa có tài khoản <Link to="/register">Đăng ký</Link>
              </div>
            </Form.Item>
          </Form>
        </Card>
      <Col span={12} style={{ padding: 20 }}></Col>
    </Row>
  );
};

// Output component
export default LoginPage;
