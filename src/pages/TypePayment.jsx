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
  Upload,
  Space,
  Col,
  Row
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";
// const props = {
//   name: 'file',
//   action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
const { Header } = Layout;
const { TextArea } = Input;

const TypePayment = () => {
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
      <Row>
      <Col span={12}>
      <Card 
          style={{ width: "100%", minHeight: "100vh" }}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Chọn hình thức thanh toán</h2>
          <Form
            name="profile_from"
            onFinish={onFinish}
            style={{ width: 300, textAlign: "center" }}
            layout="vertical"
          >
            
            <Form.Item
              label="Chọn hình thức thanh toán"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn hình thức thanh toán!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="bank"> <p>Ngân hàng</p></Radio>
                {/* Chèn thêm thông tin ngân hàng */}
                <Radio value="online"> <p>Momo</p> </Radio>
                {/* Chèn số điện thoại */}
                <Radio value="offline"> Tiền mặt </Radio>
                {/* Chèn địa chỉ công ty */}
              </Radio.Group>
            </Form.Item>
              {/* Nút gửi yêu cầu */}
              <Button
                type="primary"
                htmlType="submit"
                className="type-payment-form-button"
                style={{ marginTop: 10 }}
              >
                Gửi yêu cầu thanh toán
              </Button>
            
            {/* <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
              Gửi yêu cầu thanh toán
            </Button> */}
          </Form>
         
        </Card>
      </Col>
      <Col span={12}>
      <h2 style={{ textAlign: "center" }}>Thông tin bảo hiểm của khách hàng đã chọn </h2>
      ahiahi
        </Col>
    </Row>
      </Content>
    </Layout>
  );
};
// output component
export default TypePayment;