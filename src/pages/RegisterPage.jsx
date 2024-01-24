import {
  Form,
  Input,
  Button,
  Row,
  Card,
  DatePicker,
  Radio,
  Cascader,
  Col,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/endpoint";
import { toast } from "react-toastify";
import { address } from "../data/address";
import home1 from "../assets/home.jpg";
import TextArea from "antd/es/input/TextArea";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    
    const addressString = values.address.join(', ');
    values.address = addressString;

    const rawDate = new Date(values.birthday); // Chuyển đổi thành đối tượng Date
    values.birthday = rawDate.toLocaleDateString('vi-VN'); // Định dạng ngày tháng
    
    try {
      // Gọi API đăng ký
      const data = await api.register(values);
      if (data.success) {
        navigate("/login");
      } else {
        toast.error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Row
      style={{
        width: "100%",
        paddingLeft: 180,
        backgroundImage: `url(${home1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/11",
      }}
      >
      <Card
        style={{ margin: 40, width: "100%", maxWidth: 400 }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
        <Form
          name="Register-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ width: 300, textAlign: "center" }}
          layout="vertical"
        >
          {/* Các trường nhập liệu email, username, password, passwordConfirm */}
          <Form.Item
            label="Họ và tên"
            name="cusname"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập ngày sinh!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn giới tính!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="Nam"> Nam </Radio>
              <Radio value="Nữ"> Nữ </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa chỉ thường trú"
            name="address"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <Cascader options={address} />
          </Form.Item>
          <Form.Item 
          label="Tình trạng sức khỏe"
          name="status"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password type="password" />
          </Form.Item>
          <Form.Item
            label="Xác nhận mật khẩu"
            name="passwordConfirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu mới không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password type="password" />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Đăng ký
            </Button>
            <div style={{ marginTop: 10 }}>
              Đã có tài khoản <Link to="/login">Đăng nhập</Link>
            </div>
          </Form.Item>
        </Form>
      </Card>      
      <Col span={12} style={{ padding: 20 }}></Col>
    </Row>
  );
};

export default RegisterPage;
