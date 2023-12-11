import { useNavigate } from "react-router-dom";
import { Card, Divider } from "antd";

const { Meta } = Card;

const ProductCard = ({ id, cover, title, subtitle, description }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={<img alt="product-card" src={cover} />}
      style={{ height: "100%", cursor: "pointer" }}
      onClick={() => navigate(`/product/${id}`)}
    >
      <Meta title={title} description={subtitle} />
      <Divider />
      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
    </Card>
  );
};

export default ProductCard;
