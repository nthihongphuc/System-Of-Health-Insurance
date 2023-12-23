// import library here
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu, Button, Image, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

import { useNavigate, Outlet, Link } from "react-router-dom";

import logo from "../assets/react.svg";

const menuItems = [
  {
    key: "home",
    label: "Trang chủ",
  },
  {
    key: "product",
    label: "Sản phẩm",
  },
  {
    key: "support",
    label: "Hỗ trợ khách hàng",
  },
];

// Define Our component
const BasicLayout = () => {
  const isAuthenticated = true; // get from context

  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState("home");

  useEffect(() => {
    if (location.pathname.includes("home")) {
      setSelected("home");
    } else if (location.pathname.includes("product")) {
      setSelected("product");
    } else if (location.pathname.includes("support")) {
      setSelected("support");
    } else {
      setSelected("");
    }
  }, [location]);

  const toLogin = (path) => {
    navigate(path);
  };

  return (
    <Layout>
      <Header>
        <div style={{ float: "left", marginRight: 20 }}>
          <Link to="/">
            <Image src={logo} preview={false} />
          </Link>
        </div>
        {isAuthenticated ? (
          <div style={{ float: "right" }}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              onClick={() => navigate("/profile/account")}
              style={{ background: "rgba(255,255,255,0.5)", cursor: "pointer" }}
            />
          </div>
        ) : (
          <div style={{ float: "right" }}>
            <Button
              type="primary"
              onClick={() => toLogin("/login")}
              style={{ marginInline: 20 }}
            >
              Đăng nhập
            </Button>
            <Button type="primary" onClick={() => toLogin("/register")}>
              Đăng ký
            </Button>
          </div>
        )}
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selected]}
          items={menuItems}
          onClick={(item) => {
            navigate(`/${item.key}`);
          }}
          style={{ background: "transparent" }}
        />
      </Header>
      <Content style={{ minHeight: "100vh" }}>
        <Outlet />
      </Content>
      <Footer style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
        <Row>
          <Col span={8}>
            <h3 style={{ fontWeight: "bold" }}>Về chúng tôi</h3>
            <div>Mô tả công ty</div>
          </Col>
          <Col span={8}>
            <h3 style={{ fontWeight: "bold" }}>Thông tin liên hệ</h3>
            <div>Email: example@gmail.com</div>
            <div>Địa chỉ: 12 Quang Trung, quận 6</div>
            <div>SĐT: 0909090909</div>
          </Col>
          <Col span={8}>
            <h3 style={{ fontWeight: "bold" }}>Thông tin hỗ trợ</h3>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

// output component
export default BasicLayout;
