// import library here
import { Row } from "antd";

import ReviewCard from "../components/ReviewCard";

import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

// Define Our component
const HomePage = () => {
    return (
        <div>
            <div style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                <Row justify="center">
                    <h2>Khách hàng nói về chúng tôi</h2>
                </Row>
                <Row>
                    <ReviewCard cover={home1} detail="Sốp này xịn quá" />
                    <ReviewCard cover={home2} detail="Sốp này xịn quá" />
                    <ReviewCard cover={home3} detail="Sốp này xịn quá" />
                </Row>
            </div>
            <div>
                <Row justify="center">
                    <h2>Tin tức bảo hiểm</h2>
                </Row>
                <Row>
                    <ReviewCard cover={home1} detail="Sốp này xịn quá" />
                    <ReviewCard cover={home2} detail="Sốp này xịn quá" />
                    <ReviewCard cover={home3} detail="Sốp này xịn quá" />
                </Row>
            </div>
        </div>
    );
};

// output component
export default HomePage;
