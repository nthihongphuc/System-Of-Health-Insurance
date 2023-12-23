import { useParams } from "react-router-dom";
import { Row, Col, Image, Space, Button } from "antd";
import home1 from "../assets/home3.jpg"; //Thay doi

const ProductDetailPage = () => {
    const { id } = useParams();

    return (
        <Space size={12}>
            <div style={{
                paddingTop: 30,
                paddingRight: 0,
                paddingBottom: 30,
                paddingLeft: 30
            }}
            >
                <img
                    src={home1}
                    style={{
                        width: 540,
                        height: 514,
                        marginTop: 0,
                        marginRight: "auto",
                        marginBottom: 0,
                        marginLeft: 0
                    }}
                />
            </div>
            <div style={{
                paddingTop: 30,
                paddingRight: 0,
                paddingBottom: 30,
                paddingLeft: 30
            }}
            >
                <h2> Sản phẩm bảo hiểm nghiệp vụ sức khỏe </h2>
                <div>
                    <p>
                        - Chủ động lựa chọn các gói bảo hiểm khác nhau với mức phí chỉ từ 2k/ tháng
                        <p>
                            - Mua nhanh dễ dàng, không cần khám sức khỏe
                        </p>
                        - Quyền lợi bảo hiểm đa dạng trước các rủi ro tai nạn/ Ngộ độc thực phẩm/ Bệnh nhiệt đới
                    </p>
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="register-form-button"
                    style={{ marginTop: 10 }}
                >
                    Đăng ký!
                </Button>
            </div>
        </Space>
    );
};

export default ProductDetailPage;
