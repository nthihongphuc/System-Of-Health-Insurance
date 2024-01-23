//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React from "react";
import { Layout, theme, Card, Descriptions, Divider, Row, Col   } from "antd";
import { Content } from "antd/es/layout/layout";
import { Space, Table } from "antd";

const { Header } = Layout;
const BillDetailPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
        <Row>
            <Col span={12}
            style={{ whiteSpace: 'pre',
            padding: 38,
            background: colorBgContainer,
            display: "flex",
             }}
            >
                <Card>
                <span style={{ justifyContent: "center", fontSize: 26, fontWeight: "bold" }} >
                <a>Thông tin chi tiết hóa đơn</a>
            </span>
                    <h4>Tên bảo hiểm: ...</h4>
                    <h4>Loại bảo hiểm: ...</h4> 
                    <h4>Điều kiện tham gia: ...</h4>
                    <h4>Thời hạn bảo hiểm: ... - ...</h4>
                    <h4>Tổng hóa đơn: ... (vnđ)</h4>
                </Card>
            </Col>
            <Col 
                span={12}
                style={{ whiteSpace: 'pre',
                padding: 38,
                background: colorBgContainer,
                display: "flex",
                 }}
            >
                <Card>
                <span style={{ justifyContent: "center", fontSize: 26, fontWeight: "bold" }} >
                <a>Thông tin thanh toán</a>
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
