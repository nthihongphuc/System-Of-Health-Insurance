//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React from "react";
import {
  Layout,
  theme,
  Card,
  Descriptions,
  Divider,
  Row,
  Col,
  Upload,
  Button,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { Space, Table } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Header } = Layout;
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
const BillDetailPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%"}}>
      <Row>
        <Col
          span={12}
          style={{
            whiteSpace: "pre",
            padding: 38,
            paddingLeft: 100,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Card>
            <span
              style={{
                justifyContent: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              <h2>Thông tin chi tiết hóa đơn</h2>
            </span>
            <div style={{ padding: 10 }}>Tên bảo hiểm: ...</div>
            <div style={{ padding: 10 }}>Loại bảo hiểm: ...</div>
            <div style={{ padding: 10 }}>Điều kiện tham gia: ...</div>
            <div style={{ padding: 10 }}>Thời hạn bảo hiểm: ... - ...</div>
            <div style={{ padding: 10 }}>Tổng hóa đơn: ... (vnđ)</div>
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
            {/* Nút hoàn tất thanh toán */}
            <Button
              type="primary"
              className="payment-button"
              style={{ marginTop: 10 }}
            >
              <div>Hoàn tất thanh toán</div>
            </Button>
          </Card>
        </Col>
        <Col
          span={12}
          style={{
            whiteSpace: "pre",
            padding: 38,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Card>
            <span
              style={{
                justifyContent: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              <h2>Thông tin thanh toán</h2>
            </span>
            <h4>Ngân hàng MB Bank - 0909090909</h4>
            <h4>MoMo - 0909090909</h4>
            <h4>Tiền mặt - Thanh toán trực tiếp tại công ty. </h4>
            <h5>* Địa chỉ: 12 Quang trung, Q.6</h5>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default BillDetailPage;
