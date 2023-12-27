// import library here
import { Form, Input, Button, Row, Card } from "antd";
import { Link } from "react-router-dom";

// Define Our component
const RegisterInsurance  = () => {
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
        <h2 style={{ textAlign: "center" }}>Đăng ký gói bảo hiểm</h2>
        <Form
          name="register-insurance"
          className="register-insurance-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="Họ và Tên"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
            ]}
          >
            <Input placeholder="Họ và Tên" />
          </Form.Item>
          <Form.Item
            name="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
            ]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
            ]}
          >
            <Input placeholder="Tình trạng sức khỏe" />
          </Form.Item>
            <Form.Item
            name="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống!",
              },
             ]}
             >
             <Input placeholder="Tình trạng sức khỏe" />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Đăng ký!
            </Button>
            <div style={{ marginTop: 10 }}>
              {/*Chưa có tài khoản <Link to="/login">Đăng nhập</Link>*/}
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

// output component
export default RegisterInsurance;
