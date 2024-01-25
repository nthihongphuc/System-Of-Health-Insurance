//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useEffect, useState } from "react";
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
  Typography,
  Row,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import api from "../api/endpoint";
import { toast } from "react-toastify";
const { Text } = Typography;

const RequestPayment = () => {
  // const [componentDisabled, setComponentDisabled] = useState(true);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [userInfo, setUserInfo] = useState({});
  const [form] = Form.useForm();

  const fetchUserInfo = async () => {
    try {
      const data = await api.GetUserInfo();
      if (data.success) {
        localStorage.getItem("access_token", data.data.accessToken);
        setUserInfo(data.data);
      } else {
        toast.error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    console.log(userInfo);
    form.setFieldValue("cusname", userInfo?.Cus?.cusname);
    form.setFieldValue("phone", userInfo?.Cus?.phone);
    form.setFieldValue("gender", userInfo?.Cus?.gender);
    form.setFieldValue("email", userInfo?.Cus?.email);
    form.setFieldValue("cccd", userInfo?.Cus?.CCCD);
    form.setFieldValue("address", userInfo?.Cus?.address);
  }, [userInfo]);

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await api.RequestPayment(values);
      if (response.success) {
        localStorage.getItem("access_token", response.data.accessToken);
        toast.success("Gửi yêu cầu thanh toán thành công");
        navigate("/home");
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
   };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
          style={{ width: "100%", height: "100%", maxWidth: 450 }}
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
            form={form}
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
              <Radio.Group onChange={onChange}>
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

            <Form.Item
              label="Minh chứng hóa đơn"
              name="Bill_Url"
              rules={[
                {
                  required: true,
                  message: "Vui lòng tải lên hóa đơn!",
                },
              ]}
            >
              <Card>
                {/* <Upload {...props}> */}
                <Upload
                  multiple
                  maxCount={1}
                  action={"http://localhost:5173"}
                  showUploadList={{showRemoveIcon: true}}
                  accept=".jpg,.png,.jpeg"
                  beforeUpload={(file) => {
                    // console.log(file);
                    message.success(`${file.name} file uploaded successfully`);
                    return false;
                  }}
                >
                  <Button icon={<UploadOutlined />}>Tải hóa đơn</Button>
                </Upload>
                
              </Card>
            </Form.Item>
            <Form.Item
              style={{ textAlign: "left", width: 550 }}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
              }}
              label="Chọn hình thức thanh toán"
              name="Type_Payment"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn hình thức thanh toán!",
                },
              ]}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Space
                  direction="vertical"
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "flex-end",
                  }}
                >
                  <Radio value={1}>Ngân hàng </Radio>
                  <Radio value={2}>MoMo</Radio>
                  <Radio value={3}>Tiền mặt</Radio>
                  <Radio value={4}>Khác</Radio>
                  {value === 1 ? (
                    <div>
                      <span style={{ fontSize: 12, color: "gray" }}>
                        Ngân hàng - Số tài khoản (VD: MB Bank - 0909090909){" "}
                      </span>
                      <Form.Item
                        name="Detail"
                        placeholder="Ngân hàng - Số tài khoản (VD: MB Bank - 0909090909)"
                        style={{
                          width: 300,
                          marginBottom: 0,
                        }}
                      >
                        <Input />
                      </Form.Item>
                    </div>
                  ) : null}
                  {value === 2 ? (
                    <div>
                      <span style={{ fontSize: 12, color: "gray" }}>
                        MoMo - Số điện thoại (VD: MoMo - 0909090909){" "}
                      </span>
                      <Form.Item
                        name = "Detail"
                        placeholder="MoMo - Số điện thoại (VD: MoMo - 0909090909)"
                        style={{
                          width: 300,
                          marginBottom: 0,
                        }}
                      >
                        <Input />
                        </Form.Item>
                    </div>
                  ) : null}
                  {value === 3 ? (
                    <Text
                      italic
                      style={{
                        width: 300,
                        textAlign: "left",
                      }}
                    >
                      <p>Khách hàng đến nhận trực tiếp tại công ty.</p>
                      <p>Địa chỉ: 12 Quang Trung, Q6.</p>
                    </Text>
                  ) : null}
                  {value === 4 ? (
                    <Form.Item
                      name = "Detail"
                      placeholder="Nhập yêu cầu khác"
                      style={{
                        width: 300,
                          marginBottom: 0,
                      }}
                    >
                      <Input />
                    </Form.Item>
                  ) : null}
                </Space>
              </Radio.Group>
            </Form.Item>
            {/* Nút gửi yêu cầu */}
            <Button
              type="primary"
              htmlType="submit"
              className="request-payment-form-button"
            >
              Gửi yêu cầu thanh toán
            </Button>
          </Form>
        </Card>
      </Row>
    </Layout>
  );
};
// output component
export default RequestPayment;
