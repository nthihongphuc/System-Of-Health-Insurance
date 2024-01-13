// import thư viện ở đây
import { Form, Input, Button, Row, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/endpoint";
import { toast } from "react-toastify";
import React, { useState } from 'react'

// Định nghĩa component
const LoginPage = () => {
  const navigate = useNavigate();
  // const[error, setError]= useState(null);
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onFinish = async () => {
    try {
      const data = await api.login({ username, password })
      if (data.success) {
        localStorage.setItem('access_token', data.data.accessToken);
        navigate('/home');
      } else {
        alert('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Row style={{ width: "100%", textAlign: "center", justifyContent: "center" }}>
      <Card style={{ margin: 40, width: "100%", maxWidth: 300 }} bodyStyle={{ textAlign: "left" }}>
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
            <div style={{ fontSize: 12, textAlign: "left", marginBottom: 15 }}>
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
    </Row>
  );
};

// Output component
export default LoginPage;
