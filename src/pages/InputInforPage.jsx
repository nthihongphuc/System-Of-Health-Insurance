// import library here
import { Form, Input, Button, Row, Card } from "antd";
import { DatePicker, Select, Cascader } from "antd";
import { Link } from "react-router-dom";
import { address } from "../data/address";
const { TextArea } = Input;

const InputInforPage = () => {
  const onFinish = (values) => {
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
            name="name"
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
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
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
            label="Địa chỉ thường trú"
            name="address"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <Cascader
              options={[

              ]}
            />
            {/* <Input /> */}
          </Form.Item>
          <Form.Item label="Tình trạng sức khỏe">
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
