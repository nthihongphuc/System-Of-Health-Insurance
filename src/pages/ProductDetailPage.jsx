import { useParams, Link } from "react-router-dom";

import { Row, Col, Space } from "antd";
import ProductPage from "../pages/ProductPage";
import { Layout, Menu, theme, Card, Button, Image } from 'antd';
import { Descriptions, Collapse } from 'antd';
import { Content } from 'antd/es/layout/layout';
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
const { Header } = Layout;

const items_renamed = [
  {
    key: '10',
    label: 'Quyền lợi của người sử dụng',
    children: <p>aaaaaaaaaaaaaaaaa</p>,
    
  },
  {
    key: '11',
    label: 'Điều kiện tham gia',
    children: <p>bbbbbbbbbbbbbbb</p>,
  },
  {
    key: '12',
    label: 'Điều khoản loại trừ',
    children: <p></p>,
  }
];
const ProductDetailPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{height: "100%"}}>
      <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
          <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin bảo hiểm</span>
        </Header>
        <Content style={{margin: 40}}>
          <Space size={12}>
            <Image
              width={700}
              src={home1}
              placeholder={
                <Image
                  preview={false}
                  src={home1}
                  width={700}
                />
              }
            />
            <div style={{ padding: 50, width: "100%", justifyContent: "center" }}
            >
              <h2>
              Sản phẩm bảo hiểm nghiệp vụ sức khỏe
              </h2>
              <p>
              - Chủ động lựa chọn các gói bảo hiểm khác nhau với mức phí chỉ từ 2k/ tháng
              </p>
              <p>
              - Mua nhanh dễ dàng, không cần khám sức khỏe
              </p>
              <p>
              - Quyền lợi bảo hiểm đa dạng trước các rủi ro tai nạn/ Ngộ độc thực phẩm/ Bệnh nhiệt đới
              </p>
              <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
                <Link to="/product/:id/register">Đăng ký</Link>
              </Button>
            </div>
            
          </Space>
          <Card
            style={{ width: "100%", maxWidth: 10000, minHeight: "100vh" }}
            bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Corrected usage of Collapse */}
            <Collapse accordion items={items_renamed} style={{ width: '100%', border: 'none' }} />
          </Card>
        </Content>
    </Layout>
  );
};

export default ProductDetailPage;
