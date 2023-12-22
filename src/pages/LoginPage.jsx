// import library here
import { Form, Input, Button, Row, Card } from "antd";
import { Link } from "react-router-dom";

// Define Our component
const LoginPage = () => {
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
        <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={(onFinish)}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
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
            <Input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
            
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, textAlign:"left", marginBottom:15}}>
             <Link to="/register">Quên tài khoản/mật khẩu</Link>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Đăng nhập
            </Button>
            <div style={{ marginTop: 10 }}>
              Chưa có tài khoản <Link to="/register">Đăng ký</Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

// output component
export default LoginPage;
