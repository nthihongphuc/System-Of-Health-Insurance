import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import ProductPage from "../pages/ProductPage";
import { Layout, Menu, theme, Card } from 'antd';
import { Descriptions, Collapse } from 'antd';
import { Content } from 'antd/es/layout/layout';

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
          <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin bảo hiểm đã đăng ký</span>
        </Header>
        <Content style={{margin: 40}}>
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
