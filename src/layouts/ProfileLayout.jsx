// import library here
import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
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
  },
  {
    key: "insurance",
    label: "Gói bảo hiểm",
  },
  {
    key: "bill",
    label: "Hóa đơn",
  },
  {
    key: "resetpw",
    label: "Bảo mật",
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
        width={230}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selected]}
          items={menuItems}
          onClick={(item) => {
            navigate(`/profile/${item.key}`);
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
