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
  Row,
  Typography 
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";


const { Header } = Layout;
const { TextArea } = Input;
const { Text } = Typography;
const TypePayment = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
          <h2 style={{ textAlign: "center" }}>Chọn hình thức thanh toán</h2>
          <Form
            name="profile_from"
            onFinish={onFinish}
            //style={{ width: 300, textAlign: "center" }}
            layout="vertical"
          >
            
            <Form.Item
              label="Chọn hình thức thanh toán"
              name="payment"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn hình thức thanh toán!",
                },
              ]}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>Ngân hàng</Radio>
                  <Radio value={2}>MoMo</Radio>
                  <Radio value={3}>Tiền mặt</Radio>
                  <Radio value={4}>Khác</Radio>
                    {value === 1 ? (
                      <Input
                      placeholder="Ngân hàng - Số tài khoản (VD: MB Bank - 0909090909)"
                        style={{
                          width: 550,
                          marginLeft: 10,
                        }}
                      />
                    ) : null}
                    {value === 2 ? (
                      <Input
                      placeholder="MoMo - Số điện thoại (VD: MoMo - 0909090909)"
                        style={{
                          width: 550,
                          marginLeft: 10,
                        }}
                      />
                    ) : null}
                    {value === 3 ? (
                      <Text italic
                      style={{
                        width: 550,
                        marginLeft: 10,
                        
                      }}
                       > 
                      <p>Khách hàng đến nhận trực tiếp tại công ty. Địa chỉ: 12 Quang Trung, Q6.</p>
                      </Text>
                    ) : null}
                    {value === 4 ? (
                      <Input
                        placeholder="Nhập yêu cầu khác"
                        style={{
                          width: 550,
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
      </Content>
    </Layout>
  );
};
// output component
export default TypePayment;