// import library here
import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
  UserOutlined,
  SafetyOutlined,
  FileTextOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const icons = [
  IdcardOutlined,
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  UnlockOutlined,
];

// const labels = ["Tài khoản", "Gói bảo hiểm", "Hóa đơn", "Bảo mật"];
// const items = icons.map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: labels[index],
// }));

const menuItems = [
  {
    key: "account",
    label: "Thông tin cá nhân",
    icon: <UserOutlined />,
  },
  {
    key: "insurance",
    label: "Gói bảo hiểm",
    icon: <SafetyOutlined />,
  },
  {
    key: "bill",
    label: "Hóa đơn",
    icon: <FileTextOutlined />,
  },
  {
    key: "resetpw",
    label: "Bảo mật",
    icon: <LockOutlined />,
  },
];

// Define Our component
const ProfileLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isAuthenticated = true; // get from context

  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState("account");

  useEffect(() => {
    if (location.pathname.includes("account")) {
      setSelected("account");
    } else if (location.pathname.includes("bill")) {
      setSelected("bill");
    } else if (location.pathname.includes("insurance")) {
      setSelected("insurance");
    } else if (location.pathname.includes("resetpw")) {
      setSelected("resetpw");
    } else {
      setSelected("");
    }
  }, [location]);

  const toLogin = (path) => {
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={300}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ backgroundColor: "#f5f5f5", paddingTop: 30 }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          //theme="dark"
          mode="inline"
          selectedKeys={[selected]}
          items={menuItems}
          onClick={(item) => {
            navigate(`/profile/${item.key}`);
          }}
          style={{
            backgroundColor: "#f5f5f5",
            paddingLeft: 30,
            height: "100%",
          }}
        />
      </Sider>
      <Layout style={{ height: "100%" }}>
        <Content style={{ height: "100%" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

// output component
export default ProfileLayout;
