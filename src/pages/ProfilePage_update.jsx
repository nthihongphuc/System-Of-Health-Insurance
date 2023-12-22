//import { Layout, Sider, Menu, UserOutlined, collapsed } from "antd";

import React from "react";
import {
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  IdcardOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

const icons = [
  IdcardOutlined,
  MedicineBoxOutlined,
  MoneyCollectOutlined,
  UnlockOutlined,
];
const labels = ["Thông tin cá nhân", "Gói bảo hiểm", "Hóa đơn", "Bảo mật"];
const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}));

const ProfilePage_update = () => {
  return <div>content</div>;
};

export default ProfilePage_update;
