import { Form, Input, Button, Row, Card } from "antd";
import { Link } from "react-router-dom";
import callApi from '../utils/api';  // Import hàm callApi

const RegisterPage = () => {
  const onFinish = async (values) => {
    try {
      // Gọi API đăng ký
      const response = await callApi('/auth/register', 'post', values);

      // Xử lý phản hồi từ server (response)
      console.log(response);

      // Thực hiện các bước tiếp theo, chẳng hạn chuyển hướng trang, hiển thị thông báo thành công, v.v.
    } catch (error) {
      console.error('Error during registration:', error);
      // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi cho người dùng
    }
  };

  return (
    <Row style={{ width: "100%", textAlign: "center", justifyContent: "center" }}>
      <Card style={{ margin: 40, width: "100%", maxWidth: 300 }} bodyStyle={{ textAlign: "left" }}>
        <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {/* Các trường nhập liệu email, username, password, passwordConfirm */}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input placeholder="Tên đăng nhập" />
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
            <Input type="password" placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input type="password" placeholder="Xác nhận mật khẩu" />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Đăng ký
            </Button>
            <div style={{ marginTop: 10 }}>
              Chưa có tài khoản <Link to="/login">Đăng nhập</Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default RegisterPage;
