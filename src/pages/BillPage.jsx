//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Form, Input, Button, Menu, theme, Card, Collapse } from "antd";
import { Content } from "antd/es/layout/layout";
import { Space, Table, Tag } from "antd";
//import BillCard from "../components/BillCard";

const dataSource = [
  {
    key: "1",
    name: "Bảo hiểm 1",
    date: "1/1/2024",
    status: "Chưa thanh toán",
    action: "Thanh toán",
  },
  {
    key: "2",
    name: "Bảo hiểm 2",
    date: "1/1/2023",
    status: "Đã thanh toán",
  },
];

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
    title: "Tình trạng",
    dataIndex: "status",
    key: "status",
  },
  {
    title: 'Thanh toán',
    key: 'action',
    render: (_, record) => (
      <Space 
      size="middle"
      onClick={() => navigate("/bill_detail")}
      >
        {/* <a>Chi tiết {record.name}</a> */}
        <a>Xem chi tiết</a>
        {/* Bấm xem chi tiết, sáng trang thanh toán hóa đơn bảo hiểm */}
      </Space>
    ),
  },
];

const { Header } = Layout;

const BillPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
      <Table columns={columns} dataSource={dataSource} />
      </Card>
      </Content>
    </Layout>
  );
};

export default BillPage;
