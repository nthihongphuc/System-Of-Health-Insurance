import { Row, Col } from "antd";

import ProductCard from "../components/ProductCard";

import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
// import { useEffect, useState } from "react";
// import api from "../api/endpoint";

const products = [
  {
    id: "1",
    cover: home1,
    title: "Sản phẩm bảo hiểm nghiệp vụ sức khỏe",
    subtitle: "Chọn chuẩn chất riêng",
    description:
      "- Chủ động lựa chọn các gói bảo hiểm khác nhau với mức phí chỉ từ 2k/ tháng\n- Mua nhanh dễ dàng, không cần khám sức khỏe\n- Quyền lợi bảo hiểm đa dạng trước các rủi ro tai nạn/ Ngộ độc thực phẩm/ Bệnh nhiệt đới",
  },
  {
    id: "2",
    cover: home2,
    title: "Sản phẩm bảo hiểm tử kỳ",
    subtitle: "Chi tiền nhỏ, bỏ mối lo to",
    description:
      "- Giảm gánh nặng tài chính trước các nỗi lo nằm viện/ phẫu thuật/ ung thư với phí bảo hiểm chỉ từ hơn 700 đồng/ ngày\n- Mua nhanh, đơn giản, không cần khám sức khỏe, bảo vệ tối đa lên tới 10 năm*\n- Tổng quyền lợi trợ cấp viện phí, săn sóc đặc biệt, phẫu thuật hấp dẫn tối đa lên đến 100 triệu đồng trong suốt thời hạn hợp đồng*",
  },
  {
    id: "3",
    cover: home3,
    title: "Sản phẩm bảo hiểm liên kết chung",
    subtitle:
      "Giải pháp bảo vệ toàn diện và tích lũy hiệu quả cho tương lai gia đình",
    description:
      "- Bảo vệ tài chính toàn diện trước các rủi ro với các sản phẩm bổ trợ đa dạng\n- Lãi suất ổn định cùng với các khoản thưởng duy trì hợp đồng\n- Quyền lợi bảo vệ cao trước rủi ro tử vong hoặc thương tật toàn bộ vĩnh viễn",
  },
  {
    id: "4",
    cover: home1,
    title: "CUỘC SỐNG BÌNH AN",
    subtitle: "Hỗ trợ tài chính, an tâm điều trị trước 72 bệnh hiểm nghèo",
    description:
      "- Quyền lợi tiền mặt và quyền lợi đáo hạn\n- Bảo vệ trước 72 bệnh ung thư và bệnh hiểm nghèo\n- Bảo vệ tài chính trước biến cố bất ngờ trong cuộc sống",
  },
  {
    id: "5",
    cover: home2,
    title: "iPROTECT",
    subtitle:
      "Bảo vệ trươc srui ro bệnh ung thư. Mức phí thấp chỉ từ 1.500đ - 3.100đ/ngày",
    description: "- Bảo vệ tài chính trước rủi ro ung thư",
  },
  {
    id: "6",
    cover: home3,
    title: "PHÚ-BẢO AN",
    subtitle:
      "Bảo hiểm trước rủi ro tử vong hoặc thương tật toàn bộ vĩnh viễn với cho phí hợp lý",
    description:
      "- Quyền lợi tử vong\n- Quyền lợi thương tật toàn bộ và vĩnh viễn",
  },
];

const ProductPage = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data=await api.getAllProduct();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div>
      <Row style={{ padding: 10 }}>
        {products.map((item) => (
          <Col key={item.id} span={8} style={{ padding: 10 }}>
            <ProductCard
              id={item.id}
              cover={item.cover}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
