import { Row, Col } from "antd";

import ProductCard from "../components/ProductCard";

import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import { useEffect, useState } from "react";
import api from "../api/endpoint";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data=await api.getAllInsurance();
        setProducts(data.data);
       console.log(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Row style={{ padding: 10 }}>
        {products?.map((item) => (
          <Col key={item._id} span={8} style={{ padding: 10 }}>
            <ProductCard
              id={item._id}
              cover={item.imageurl}
              title={item.Ins_Name}
              descriptions={item.Benefit}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
