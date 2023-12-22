import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  return <div>hello {id}</div>;
};

export default ProductDetailPage;
