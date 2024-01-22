import { Row, Col } from "antd";

import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import api from "../api/endpoint";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const id  = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data=await api.getAllInsurance(id);
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
