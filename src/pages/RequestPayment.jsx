//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useState } from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
  UploadOutlined
} from "@ant-design/icons";

import {
  Layout,
  Form,
  Input,
  Button,
  Menu,
  theme,
  Card,
  Select,
  Cascader,
  Radio,
  message, 
  Upload
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const { Header } = Layout;
const { TextArea } = Input;

const RequestPayment = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onFinish = (values) => {
    console.log(values);
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
              name="name"
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
              name="Bill"
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
            <Button
                    type="primary"
                    className="request-payment-button"
                    style={{ marginTop: 10 }}
                    onClick={() => navigate("/type_payment")}
                    >
                    <div>Chọn hình thức thanh toán</div>
                </Button>
            {/* <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
              Chọn hình thức thanh toán
            </Button> */}
            
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};
// output component
export default RequestPayment;