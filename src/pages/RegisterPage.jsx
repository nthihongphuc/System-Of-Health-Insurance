// import library here
import { Form, Input, Button, Row, Card } from "antd";
import { Link } from "react-router-dom";

// Define Our component
const RegisterPage = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Row
      style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
    >
      <Card
        style={{ margin: 40, width: "100%", maxWidth: 300 }}
        bodyStyle={{ textAlign: "left" }}
      >
        <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
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

// output component
export default RegisterPage;
