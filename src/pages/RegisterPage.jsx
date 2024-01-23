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

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { username, email, password, passwordConfirm } = values;
    // Lưu thông tin vào localStorage
    localStorage.setItem(
      "registrationInfo",
      JSON.stringify({
        email: values.email,
      })
    );

    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có trùng khớp không
    if (password !== passwordConfirm) {
      alert("Mật khẩu xác nhận không trùng khớp với mật khẩu chính");
      return; // Dừng hàm nếu mật khẩu không trùng khớp
    }
    try {
      // Gọi API đăng ký
      const data = await api.register(values);
      if (data) {
        navigate("/infor");
      } else {
        toast.error("Đã có lỗi xảy ra, vui lòng kiểm tra lại");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi cho người dùng
      if (error.response && error.response.data && error.response.data.error) {
        // Lấy thông báo lỗi từ backend và hiển thị trong toast
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
        // Xử lý các trường hợp lỗi khác và hiển thị thông báo mặc định
        toast.error("Đã có lỗi xảy ra, vui lòng kiểm tra lại");
      }
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
      <Col
        span={12}
        style={{
          //padding: 50,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "100%",
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
      </Col>
      <Col span={12} style={{ padding: 20 }}></Col>
    </Row>
  );
};

export default RegisterPage;
