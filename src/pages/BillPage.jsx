//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useEffect, useState } from "react";

import { Layout, Form, Input, Button, Menu, theme, Card, Collapse } from "antd";
import { Content } from "antd/es/layout/layout";
import { Space, Table, Tag } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/endpoint";
import { toast } from "react-toastify";
//import BillCard from "../components/BillCard";

const { Header } = Layout;

const BillPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  // const id= useParams();
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await api.getBill();
        if (data) {
          localStorage.getItem('access_token', data.data.accessToken);
          setUserInfo(data?.data?.bill_list);

        } else {
          toast.error(data.error.message);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        toast.error(error.message)
      }
    };
    fetchUserInfo();
    
  }, []);
  console.log(userInfo?.bill?._id);

const columns = [
  {
    title: "STT",
    dataIndex: "key",
    key: "stt",
  },
  {
    title: "Tên bảo hiểm",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thời hạn thanh toán ",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Tình trạng xác thực",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Tình trạng thanh toán",
    dataIndex: "payment_status",
    key: "payment_status",
  },
  {
    title: 'Thanh toán',
    key: 'action',
    render: (_, record) => (
      <Space 
      size="middle"
      onClick={() => navigate(`${record.action}`)}
      >
        {/* <a>Chi tiết {record.name}</a> */}
        <a>Xem chi tiết</a>
        {/* Bấm xem chi tiết, sáng trang thanh toán hóa đơn bảo hiểm */}
      </Space>
    ),
  },
];

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
          Thông tin hóa đơn
        </span>
      </Header>
      <Content style={{margin: 40}}>
      <Card
        style={{ width: "100%", minHeight: "100vh" }}
        bodyStyle={{
        display: "flex",
        flexDirection: "column",
        }}
      >
      <Table columns={columns} 
      dataSource={userInfo?.map((user, index) => ({
        key: index +1, 
        name: user?.insurance?.Ins_Name,
        date: user?.bill?.Time_End,
        status: user?.bill?.Status,
        payment_status: user?.bill?.Payment_Status,
        action: user?.bill?._id,
      }))}
        />
      </Card>
      </Content>
    </Layout>
  );
};

export default BillPage;
