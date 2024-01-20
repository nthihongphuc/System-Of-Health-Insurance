// import library here
import { Form, Input, Button, Row, Card, Layout, Cascader } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { address } from "../data/address";

const { TextArea } = Input;
// Define Our component
const RegisterInsurance  = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Content style={{ margin: 40 }}>
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
          onFinish={onFinish}
          style={{ width: 300, textAlign: "center" }}
          layout="vertical"
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng điền Họ và Tên!",
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="CCCD/ CMND"
            name="identify"
            rules={[
              {
                required: true,
                message: "Vui lòng điền CCCD/ CMND!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng điền Số điện thoại!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng điền Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập địa chỉ!",
                },
              ]}
            >
              <Cascader options={address} />
            </Form.Item>
          <Form.Item
            label="Tình trạng sức khỏe"
            name="status"
          >
              <TextArea rows={4}/>
          </Form.Item>
          <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Đăng ký
            </Button>

        </Form>
      </Card>
    </Row>
    </Content>
    </Layout>
    
  );
};

// output component
export default RegisterInsurance;
