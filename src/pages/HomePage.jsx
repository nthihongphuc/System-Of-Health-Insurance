// import library here
import React from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Image,
  Row,
  Col,
  Card,
} from "antd";
const { Header, Content, Footer } = Layout;

import ReviewCard from "../components/ReviewCard";

import { useNavigate } from "react-router-dom";

import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

// Define Our component
const HomePage = () => {
  const navigate = useNavigate();

  const toLogin = (path) => {
    navigate(path);
  };

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
