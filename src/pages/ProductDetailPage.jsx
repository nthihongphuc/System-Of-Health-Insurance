import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import ProductPage from "../pages/ProductPage";
const ProductDetailPage = () => {
  const { id } = useParams();

    return (
        <div>
            
                        <ProductPage
                            id={id.id}
                            cover={id.cover}
                            title={id.title}
                            subtitle={id.subtitle}
                            description={id.description}
                        />
                    
        </div>
    );
};

export default ProductDetailPage;
