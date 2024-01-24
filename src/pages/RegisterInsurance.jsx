// import library here
import {
  Form,
  Input,
  Button,
  Row,
  Card,
  Layout,
  Cascader,
  Col,
  Image,
  Collapse,
  Space,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { address } from "../data/address";
import bg from "../assets/bg.png";

const { TextArea } = Input;
// Define Our component
const RegisterInsurance = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const [product, setProduct] = useState([]);
  const items_renamed = [
    {
      key: "11",
      label: "Điều kiện tham gia",
      children: (
        <div style={{ whiteSpace: "pre" }}>
          {product?.Require &&
            product.Require.split("\n").map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                {`- ${line}`}
              </span>
            ))}
        </div>
      ),
    },
    {
      key: "12",
      label: "Điều khoản loại trừ",
      children: (
        <div>
          {product?.Exception && (
            <pre style={{ whiteSpace: "pre-line" }}>{product.Exception}</pre>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Card style={{ width: "100%", height: 1100 }}>
        <Space size={200}>
          <Card
            style={{ width: "100%", height: 1000 }}
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
              style={{ width: 600, textAlign: "center" }}
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
                <Input />
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
              <Form.Item label="Tình trạng sức khỏe" name="status">
                <TextArea rows={4} />
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
          <Card
            style={{ width: "100%", height: 1000 }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              width={700}
              src={product?.imageurl}
              placeholder={
                <Image preview={false} src={product?.imageurl} width={700} />
              }
            />
            <div
              style={{ padding: 50, width: "100%", justifyContent: "center" }}
            >
              <h2>{product?.Ins_Name}</h2>
              <div style={{ whiteSpace: "pre" }}>
                {product?.Benefit &&
                  product.Benefit.split("\n").map((line, index) => (
                    <span key={index}>
                      {index > 0 && <br />} {`- ${line}`}
                    </span>
                  ))}
              </div>
            </div>
            <Card
              style={{ width: "100%", maxWidth: 10000, minHeight: "100vh" }}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Corrected usage of Collapse */}
              <Collapse
                items={items_renamed}
                style={{ width: "100%", border: "none" }}
              />
            </Card>
          </Card>
        </Space>
      </Card>
    </Layout>
  );
};

// output component
export default RegisterInsurance;
