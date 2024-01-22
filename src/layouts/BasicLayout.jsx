// import library here
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Layout,
  Menu,
  Button,
  Image,
  Row,
  Col,
  Avatar,
  Dropdown,
  Space,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  BellOutlined,
  PoweroffOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

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
    children: [
      {
        key: "65ae152eaad0c8155f6bcfd4",
        label: <a href="/product/type/65ae152eaad0c8155f6bcfd4">Bảo hiểm chăm sóc sức khỏe</a>,
      },
      {
        key: "65ae1562aad0c8155f6bcfd5",
        label: <a href="/product/type/65ae1562aad0c8155f6bcfd5">Bảo hiểm y tế</a>,
      },
      {
        key: "65ae157aaad0c8155f6bcfd6",
        label: <a href="/product/type/65ae157aaad0c8155f6bcfd6">Bảo hiểm tai nạn</a>
      },
    ]
  },
  {
    key: "support",
    label: "Hỗ trợ khách hàng",
  },
  {
    key: "payment_request",
    label: "Yêu cầu thanh toán",
  },
  {
    key: "admin",
    label: "ADMIN",
  },

];

// Define Our component
const BasicLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState("home");
  const [isAuthenticated, setAuthenticated] = useState(false); // get from context

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname.includes("home")) {
      setSelected("home");
    } else if (location.pathname.includes("product")) {
      setSelected("product");
    } else if (location.pathname.includes("support")) {
      setSelected("support");
      // } else if (location.pathname.includes("payment_request")) {
      //   setSelected("payment_request");
    } else if (location.pathname.includes("ADMIN")) {
      setSelected("admin");
    } else {
      setSelected("");
    }
  }, [location]);

  const toLogin = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setAuthenticated(false);
  };

  const menuProfile = [
    {
      key: "1",
      label: <a href="/profile/account">Tài khoản</a>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <a href="/profile/insurance">Bảo hiểm của tôi</a>,
      icon: <SafetyOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: <div onClick={handleLogout}>Đăng xuất</div>,
      icon: <PoweroffOutlined />,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#ffffff",
          height: 70,
        }}
      >
        <div style={{ float: "left", marginRight: 20 }}>
          <Link to="/">
            <Image src={logo} preview={false} />
          </Link>
        </div>
        {isAuthenticated ? (
          <div style={{ float: "right" }}>
            <Space>
              <Avatar
                style={{
                  background: "#bfbfbf",
                  cursor: "pointer",
                  fontSize: 30,
                  verticalAlign: "middle",
                  marginRight: 10,
                }}
                size="large"
                //shape="square"
                icon={<BellOutlined />}
                // Thêm đường dẫn
                onClick={() => navigate("/profile/notice")}
              />
              <Dropdown menu={{ items: menuProfile }} placement="bottomRight">
                <Avatar
                  style={{
                    background: "#bfbfbf",
                    cursor: "pointer",
                  }}
                  size="large"
                  icon={<UserOutlined />}
                />
              </Dropdown>
            </Space>
          </div>
        ) : (
          <div style={{ float: "right" }}>
            <Button
              onClick={() => toLogin("/login")}
              style={{ marginInline: 20 }}
            >
              Đăng nhập
            </Button>
            <Button onClick={() => toLogin("/register")}>Đăng ký</Button>
          </div>
        )}
        <Menu
          // theme="dark"
          mode="horizontal"
          selectedKeys={[selected]}
          items={menuItems}
          onClick={(item) => {
            navigate(`/${item.key}`);
          }}
          style={{ background: "transparent", height: 70 }}
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
