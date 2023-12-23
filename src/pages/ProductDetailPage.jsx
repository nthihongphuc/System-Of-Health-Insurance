import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import ProductPage from "../pages/ProductPage";
const ProductDetailPage = () => {
  const { id } = useParams();

  return <div>heello {id}</div>;
};

export default ProductDetailPage;
