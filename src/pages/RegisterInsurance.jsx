// import library here
import { Form, Input, Button, Row, Card } from "antd";
import { Link } from "react-router-dom";
const { TextArea } = Input;
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
        style={{ width: "100%", minHeight: "100vh" }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
                message: "Vui lòng điền Họ và Tên!",
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
                message: "Vui lòng điền Số điện thoại!",
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
                message: "Vui lòng điền Email!",
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
                message: "Vui lòng điền Địa chỉ!",
              },
            ]}
          >
            <Input placeholder="Địa chỉ" />
            
          </Form.Item>
          <Form.Item
            name="Tình trạng sức khỏe"
          >
              <TextArea
              rows={4}
              placeholder="Tình trạng sức khỏe"
              />
          </Form.Item>

          <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Đăng ký!
            </Button>

        </Form>
      </Card>
    </Row>
  );
};

// output component
export default RegisterInsurance;
