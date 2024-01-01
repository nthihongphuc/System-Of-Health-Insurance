// import library here
import { Form, Input, Button, Row, Card } from "antd";
import { DatePicker, Select, Cascader } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { address } from "../data/address";
import api from "../api/endpoint";
import { toast } from "react-toastify";
const { TextArea } = Input;

const InputInforPage = () => {
  //const [form] = Form.useForm();
  const navigate =useNavigate();
  const storedInfo = localStorage.getItem('registrationInfo');
  const registrationInfo = storedInfo ? JSON.parse(storedInfo) : {};
  const onFinish = async (values) => {
    try {
      const { cusname,birthday,gender,phone,email,address,status } = values;
      // Gọi API đăng ký
      values.email = registrationInfo.email;
      const addressString = values.address.join(', ');
      values.address = addressString;
      const data = await api.InputInfoCus(values)
      if (data) {
        navigate('/login');
      } else {
        toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi cho người dùng
      if (error.response && error.response.data && error.response.data.error) {
        // Lấy thông báo lỗi từ backend và hiển thị trong toast
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
          // Xử lý các trường hợp lỗi khác và hiển thị thông báo mặc định
          toast.error('Đã có lỗi xảy ra, vui lòng kiểm tra lại');
      }
    }
    console.log(values);
  };

  return (
    <Row
      style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
    >
      <Card
        style={{ width: "100%", minHeight: "100vh" }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Nhập thông tin</h2>
        <Form
          name="infor"
          className="infor-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ width: 300, textAlign: "center" }}
          layout="vertical"
          
        >
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
            <Select>
              <Select.Option value="Nam">Nam</Select.Option>
              <Select.Option value="Nữ">Nữ</Select.Option>
            </Select>
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
            validateStatus=""
          >
            <Input defaultValue={registrationInfo.email} disabled />
          </Form.Item>
          <Form.Item
            label="Địa chỉ thường trú"
            name="address"
            rules={[
              {
                required: false,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <Cascader
              options={address}
            />
          </Form.Item>
          <Form.Item 
          label="Tình trạng sức khỏe"
          name="status"
          >
              <TextArea rows={4} />
            </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginTop: 10 }}
            >
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default InputInforPage;
