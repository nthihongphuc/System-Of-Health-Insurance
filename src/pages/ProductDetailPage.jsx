import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  return <div>heello {id}</div>;
};

export default ProductDetailPage;
