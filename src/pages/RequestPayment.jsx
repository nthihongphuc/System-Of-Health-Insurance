//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import {
  Layout,
  Form,
  Input,
  Button,
  Menu,
  theme,
  Card,
  Cascader,
  Radio,
  message,
  Upload,
  Space,
  Typography
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const RequestPayment = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ margin: 40 }}>
        <Card
          style={{ width: "100%", minHeight: "100vh" }}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Nhập thông tin thanh toán</h2>
          <Form
            name="profile_from"
            onFinish={onFinish}
            style={{ width: 300, textAlign: "center" }}
            layout="vertical"
          >
            <Form.Item
              label="Họ và tên"
              name="cusname"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn giới tính!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male"> Nam </Radio>
                <Radio value="female"> Nữ </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
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
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="CCCD"
              name="cccd"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập CCCD/CMND!",
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

            <Card
              label="Minh chứng hóa đơn"
              name="bill"
              rules={[
                {
                  required: true,
                  message: "Vui lòng tải lên hóa đơn!",
                },
              ]}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Tải hóa đơn</Button>
              </Upload>
            </Card>
            {/* Nút để qua trang chọn hình thức thanh toán */}
            <Form.Item
              style={{ width: "100%"}}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              label="Chọn hình thức thanh toán"
              name="type-payment"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn hình thức thanh toán!",
                },
              ]}
            >
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical" style={{ display: 'flex', alignItems: 'start', justifyContent: 'flex-end' }}>                
              <Radio value={1}>Ngân hàng </Radio>
              <Radio value={2}>MoMo</Radio>
              <Radio value={3}>Tiền mặt</Radio>
              <Radio value={4}>Khác</Radio>
                {value === 1 ? (
                    <div>
                    <span style={{ fontSize: 12, color: 'gray'}}>Ngân hàng - Số tài khoản (VD: MB Bank - 0909090909) </span>
                    <Input
                      placeholder="Ngân hàng - Số tài khoản (VD: MB Bank - 0909090909)"
                      style={{
                        width: 300,
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                    />
                  </div>
                ) : null}
                {value === 2 ? (
                  <div>
                  <span style={{ fontSize: 12, color: 'gray'}}>MoMo - Số điện thoại (VD: MoMo - 0909090909) </span>
                  <Input
                  placeholder="MoMo - Số điện thoại (VD: MoMo - 0909090909)"
                    style={{
                      width: 300,
                      marginLeft: 10,
                    }}
                  />
                  </div>
                ) : null}
                {value === 3 ? (
                  <Text italic
                  style={{
                    width: 300,
                    textAlign: 'left'
                  }}
                    > 
                  <p>Khách hàng đến nhận trực tiếp tại công ty.</p> 
                  <p>Địa chỉ: 12 Quang Trung, Q6.</p>
                  </Text>
                ) : null}
                {value === 4 ? (
                  <Input
                    placeholder="Nhập yêu cầu khác"
                    style={{
                      width: 300,
                      marginLeft: 10,
                    }}
                  />
                ) : null}
              </Space>
            </Radio.Group>
              
            </Form.Item>
            {/* Nút gửi yêu cầu */}
            <Button
                type="primary"
                htmlType="submit"
                className="request-payment-form-button"
                style={{ marginTop: 10 }}
              >
                Gửi yêu cầu thanh toán
              </Button>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};
// output component
export default RequestPayment;
