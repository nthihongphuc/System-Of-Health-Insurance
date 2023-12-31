import { Form, Input, Button, Row, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/endpoint";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate =useNavigate();
  const onFinish = async (values) => {
    const { username, email, password, passwordConfirm } = values;

    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có trùng khớp không
    if (password !== passwordConfirm) {
        alert('Mật khẩu xác nhận không trùng khớp với mật khẩu chính');
        return; // Dừng hàm nếu mật khẩu không trùng khớp
    }
    try {
      // Gọi API đăng ký
      const data = await api.register(values);
      if (data) {
        navigate('/login');
      } else {
        toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
      
    } catch (error) {
      console.error('Error during registration:', error);
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
    <Row style={{ width: "100%", textAlign: "center", justifyContent: "center" }}>
      <Card style={{ margin: 40, width: "100%", maxWidth: 300 }} bodyStyle={{ textAlign: "left" }}>
        <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
        <Form
          name="Register-form"
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
                message: "Vui lòng nhập email!",
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
                message: "Vui lòng nhập tên đăng nhập!",
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
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password type="password" placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            name="passwordConfirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu mới không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password type="password" placeholder="Xác nhận mật khẩu" />
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
