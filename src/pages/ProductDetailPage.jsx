import { useParams, Link } from "react-router-dom";

import { Row, Col, Space } from "antd";
import ProductPage from "../pages/ProductPage";
import { Layout, Menu, theme, Card, Button, Image } from 'antd';
import { Collapse } from 'antd';
import { Content } from 'antd/es/layout/layout';
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import { useEffect, useState } from "react";
import api from "../api/endpoint";
const { Header } = Layout;
// const { Panel } = Collapse;
const ProductDetailPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const  id  = useParams();
  // console.log(id);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data=await api.getInsuranceDetail(id);
        setProduct(data.data);
       console.log(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const items_renamed = [
    {
      key: '11',
      label: 'Điều kiện tham gia',
      children: (
        <div style={{ whiteSpace: 'pre' }}>
          {product?.Require && (
            product.Require.split('\n').map((line, index) => (
              <span key={index}>
                {index > 0 && <br />} {/* Thêm xuống dòng trừ dòng đầu tiên */}
                {`- ${line}`} {/* Thêm đánh dấu a=b vào mỗi dòng */}
              </span>
            ))
          )}
        </div>
      ),
    },    
    {
      key: '12',
      label: 'Điều khoản loại trừ',
      children: (
        <div>
          {product?.Exception && (
            <pre style={{ whiteSpace: 'pre-line' }}>
              {product.Exception}
            </pre>
          )}
        </div>
      ),
    }
  ];

  return (
    <Layout style={{height: "100%"}}>
      <Header style={{ padding: 38, background: colorBgContainer, display: 'flex', alignItems: 'center' }}>
          <span style={{ justifyContent: 'center', fontSize: 26, fontWeight: 'bold' }}>Thông tin bảo hiểm</span>
        </Header>
        <Content style={{margin: 40}}>
          <Space size={12}>
            <Image
              width={700}
              src={product?.imageurl}
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
                {product?.Ins_Name}
              </h2>
              <div style={{ whiteSpace: 'pre' }}>
                {product?.Benefit && (
                  product.Benefit.split('\n').map((line, index) => (
                    <span key={index}>
                      {index > 0 && <br />} {/* Thêm xuống dòng trừ dòng đầu tiên */}
                      {`- ${line}`} {/* Thêm đánh dấu a=b vào mỗi dòng */}
                    </span>
                  ))
                )}
              </div>
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
            <Collapse  items={items_renamed} style={{ width: '100%', border: 'none' }} />
          </Card>
        </Content>
    </Layout>
  );
};

export default ProductDetailPage;
