// import library here
import { Row, Col, Image, Button } from "antd";
import { useNavigate } from "react-router-dom";

import ReviewCard from "../components/ReviewCard";

import home1 from "../assets/home.jpg";
import home2 from "../assets/pic1.jpg";
import home3 from "../assets/pic2.jpg";
import home4 from "../assets/pic3.jpg";

// Define Our component
const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
        <Row
          style={{
            backgroundImage: `url(${home1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            aspectRatio: "16/7",
          }}
        >
          <Col
            span={12}
            style={{
              padding: 50,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div style={{ fontSize: 50, fontWeight: "bold" }}>
              Kế hoạch bảo vệ và chăm sóc sức khỏe
            </div>
            <div style={{ fontSize: 24, paddingBottom: 20 }}>
              Vững tâm tận hưởng cuộc sống với các kế hoạch bảo vệ tài chính
              toàn diện trước những rủi ro tai nạn, bệnh hiểm nghèo.
            </div>
            <Button
              style={{width: "fit-content"}}
              size= "large"
              onClick={() => navigate("/product")}
            >
              <div>Tìm hiểu ngay</div>
            </Button>
          </Col>
          <Col span={12} style={{ padding: 20 }}></Col>
        </Row>
      </div>
      <div>
        <Row
          style={{
            marginTop: 80,
            fontSize: 50,
            paddingLeft: 50,
            fontWeight: "bold",
          }}
        >
          Vì sao chọn
        </Row>
        <Row style={{ fontSize: 50, paddingLeft: 50 }}>
          Kế hoạch bảo vệ và chăm sóc sức khỏe?
        </Row>
        <Row>
          <ReviewCard
            cover={home2}
            title="Hỗ trợ tài chính trước biến cố"
            detail="Hỗ trợ tài chính cho gia đình nếu người trụ cột không may gặp rủi ro."
          />
          <ReviewCard
            cover={home3}
            title="Vững tâm hoàn thành mọi mục tiêu"
            detail="Được chia sẻ rủi ro, giảm bớt áp lực tài chính khi biến cố xảy ra."
          />
          <ReviewCard
            cover={home4}
            title="Chăm sóc sức khỏe cho cả gia đình"
            detail="Hỗ trợ chi phí y tế giúp khách hàng an tâm điều trị."
          />
        </Row>
      </div>
    </div>
  );
};

// output component
export default HomePage;
