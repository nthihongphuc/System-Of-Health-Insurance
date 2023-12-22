// import library here
import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Outlet, Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const icons = [
  IdcardOutlined,
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  UnlockOutlined,
];
const labels = ["Tài khoản", "Gói bảo hiểm", "Hóa đơn", "Bảo mật"];
const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}));

// Define Our component
const ProfileLayout = () => {
  // const isAuthenticated = true; // get from context

  // const navigate = useNavigate();
  // const location = useLocation();

  // const [selected, setSelected] = useState("home");

  // useEffect(() => {
  //   if (location.pathname.includes("home")) {
  //     setSelected("home");
  //   } else if (location.pathname.includes("product")) {
  //     setSelected("product");
  //   } else if (location.pathname.includes("support")) {
  //     setSelected("support");
  //   } else {
  //     setSelected("");
  //   }
  // }, [location]);

  // const toLogin = (path) => {
  //   navigate(path);
  // };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout style={{ height: "100%" }}>
        <Content style={{ height: "100%" }}>
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          > */}
            <Outlet />
          {/* </div> */}
        </Content>
      </Layout>
    </Layout>
  );
};

// output component
export default ProfileLayout;
