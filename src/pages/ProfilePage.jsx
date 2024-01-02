//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useState, useEffect } from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Form, Input, Button, Menu, theme, Card, Select, Cascader } from "antd";
import { Content } from "antd/es/layout/layout";
import { address } from "../data/address";
import api from "../api/endpoint";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;
const { TextArea } = Input;

const ProfilePage_update = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const fetchUserInfo = async () => {
    try {
      const data = await api.GetUserInfo();
      if (data) {
        setUserInfo(data);
      } else {
        toast.error("Đã có lỗi xảy ra, vui lòng kiểm tra lại");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      toast.error("Đã có lỗi xảy ra, vui lòng kiểm tra lại");
    }
  };

  useEffect(() => {
    // Fetch user information when the component mounts
    fetchUserInfo();
  },[]);

  useEffect(()=>{
    form.setFieldValue('name', userInfo?.Cus?.cusname);
    form.setFieldValue('birthday', userInfo?.Cus?.birthday);
    form.setFieldValue('gender', userInfo?.Cus?.gender);
    form.setFieldValue('phone', userInfo?.Cus?.phone);
    form.setFieldValue('email', userInfo?.Cus?.email);
    form.setFieldValue('address', userInfo?.Cus?.address);
    form.setFieldValue('status', userInfo?.infoHeath?.status);
  },[userInfo])

  const onFinish = async(values) => {
    try{
      const data = await api.UpdateCusInfo(values);
      if (data) {
        localStorage.setItem('access_token', data.accessToken);
        navigate('/profile/account');
      } else {
        toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi cho người dùng
      if (error.response && error.response.data && error.response.data.error) {
        // Lấy thông báo lỗi từ backend và hiển thị trong toast
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
          // Xử lý các trường hợp lỗi khác và hiển thị thông báo mặc định
          toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Header
        style={{
          padding: 38,
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{ justifyContent: "center", fontSize: 26, fontWeight: "bold" }}
        >
          Tài khoản
        </span>
      </Header>
      <Content style={{ margin: 40 }}>
        <Card
          style={{ width: "100%", minHeight: "100vh" }}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Thông tin cá nhân</h2>
          <Form
            name="profile_from"
            onFinish={onFinish}
            style={{ width: 300, textAlign: "center" }}
            layout="vertical"
            form={form}
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
            <Form.Item label="Ngày sinh" name="birthday">
              <Input disabled={componentDisabled} />
            </Form.Item>
            <Form.Item label="Giới tính" name="gender">
              <Input disabled={componentDisabled} />
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
            <Form.Item label="Email" name="email">
              <Input disabled={componentDisabled} />
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
              <Cascader
               options={address}
              />
            </Form.Item>
            <Form.Item 
            label="Sức khỏe"
            name = "status">
              <TextArea rows={4} />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
              Cập nhật
            </Button>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProfilePage_update;

