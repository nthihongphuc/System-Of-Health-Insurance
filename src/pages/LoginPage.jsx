// import thư viện ở đây
import { Form, Input, Button, Row, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import callApi from '../utils/index';  // Import hàm callApi
import api from "../api/endpoint";
import { toast } from "react-toastify";

// Định nghĩa component
const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const data = await api.login(values);
      if (data) {
        localStorage.setItem('access_token', data.accessToken);
        navigate('/');
      } else {
        toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
      // Gọi API đăng nhập
      // const response = await callApi('/auth/login', 'post', values);

      // Xử lý phản hồi từ server (response)
      // console.log(response);

      // Thực hiện các bước tiếp theo, chẳng hạn chuyển hướng trang, hiển thị thông báo thành công, v.v.
    } catch (error) {
      console.error('Error during login:', error);
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
