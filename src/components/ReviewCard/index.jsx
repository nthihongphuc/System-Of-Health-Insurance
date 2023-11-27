import { Col, Card } from "antd";

const ReviewCard = ({ cover, detail }) => {
  return (
    <Col span={8} style={{ padding: 20 }}>
      <Card cover={<img alt="example" src={cover} />}>
        <div>{detail}</div>
      </Card>
    </Col>
  );
};

export default ReviewCard;
