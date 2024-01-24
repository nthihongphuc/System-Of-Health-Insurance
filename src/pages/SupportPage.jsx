//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useState } from "react";
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
  Row,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";
import api from "../api/endpoint";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../assets/bg.png";

const { Header } = Layout;
const { TextArea } = Input;

const SupportPage = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    try {
      const addressString = values.address.join(", ");
      values.address = addressString;
      const data = await api.SupportCustomer(values);
      if (data) {
        navigate("/home");
      } else {
        toast.error("Đã có lỗi xảy ra, vui lòng kiểm tra lại");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Lấy thông báo lỗi từ backend và hiển thị trong toast
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
        // Xử lý các trường hợp lỗi khác và hiển thị thông báo mặc định
        toast.error("Đã có lỗi xảy ra, vui lòng kiểm tra lại");
      }
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
            padding: 40,
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            aspectRatio: "16/8",
          }}
        >
          <Card
            style={{ width: "100%", height: 750, maxWidth: 450 }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Nhập thông tin của bạn</h2>
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
                  <Radio value="Nam"> Nam </Radio>
                  <Radio value="Nữ"> Nữ </Radio>
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
                label="Bạn muốn được tư vấn về"
                name="describe"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn!",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="insurance">
                    Tư vấn về bảo hiểm
                  </Select.Option>
                  <Select.Option value="bill">Tư vấn về hóa đơn</Select.Option>
                  <Select.Option value="other">Khác</Select.Option>
                </Select>
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: 10 }}
              >
                Gửi thông tin
              </Button>
            </Form>
          </Card>
        </Row>
    </Layout>
  );
};

export default SupportPage;
