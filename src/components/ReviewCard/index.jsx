import { Col, Card } from "antd";

const ReviewCard = ({ cover, title, detail }) => {
  return (
    <Col span={8} style={{ padding: 50 }}>
      <Card
        style={{ height: "100%" }}
        cover={<img alt="example" src={cover} />}
      >
        <div style={{ fontWeight: "bold", fontSize: 30 }}>{title}</div>
        <div style={{ fontWeight: "lighter", fontSize: 20 }}>{detail}</div>
      </Card>
    </Col>
  );
};

export default ReviewCard;
