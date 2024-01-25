// //import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";
import React, { useEffect, useState } from "react";
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
  message,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { Space, Table } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Form, useParams } from "react-router-dom";
import api from "../api/endpoint";
import { toast } from "react-toastify";
const { Header } = Layout;

const BillDetailPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [file, setFile] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const id= useParams();
  const handlePaymentButtonClick = () => {
    // Thực hiện các bước xử lý thanh toán ở đây
    if (file) {
      // Nếu có tệp tin được chọn, thực hiện các bước xử lý
      console.log("File đã được chọn:", file);
      // Thực hiện các bước xử lý thanh toán khác nếu cần
      message.success("Thanh toán thành công!");
    } else {
      // Nếu không có tệp tin được chọn, hiển thị thông báo lỗi
      message.error("Vui lòng tải lên hóa đơn trước khi thanh toán!");
    }
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await api.getBillDetail(id);
        if (data) {
          localStorage.getItem('access_token', data.data.accessToken);
          setUserInfo(data?.data);
          // console.log(data.data.bill);
        } else {
          toast.error(data.error.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchUserInfo();
    // console.log(userInfo);
  }, []);
  console.log(userInfo);

  return (
    <Layout style={{ height: "100%"}}>
      <Row
      style={{
        width: "100%",
      }}
      >
        <Col
          span={12}
          style={{
            whiteSpace: "pre",
            padding: 38,
            paddingLeft: 100,
            background: colorBgContainer,
            display: "flex",
            width: "100%",
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
            <div style={{ padding: 10, width:"100%" }}> Tên bảo hiểm: {userInfo?.insurance?.Ins_Name}</div>
            <div style={{ padding: 10 }}>Loại bảo hiểm: {userInfo?.type?.Type_Name}</div>
            <div style={{ padding: 10 }}>Tổng hóa đơn: {userInfo?.insurance?.Year_Cost}</div>
            <div style={{ padding: 10 }}>Thời hạn bảo hiểm: {userInfo?.registerForm?.Time_Start} - {userInfo?.registerForm?.Time_End}</div>
            <div style={{ padding: 10 }}>Tình trạng thanh toán: {userInfo?.bill?.Payment_Status} </div>
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
              
              <input type="file" 
              style={{ cursor: 'pointer', display: 'block', textAlign: 'center' }}
              onChange={(e)=>{
                console.log(e.target.files[0])
                setFile(e.target.files[0]);
              }}
              />
            </Card>
            {/* Nút hoàn tất thanh toán */}
            <Button
              type="primary"
              className="payment-button"
              style={{ marginTop: 10 }}
              onClick={handlePaymentButtonClick}
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