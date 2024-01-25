// import library here
import {
  Form,
  Input,
  Button,
  Row,
  Card,
  Layout,
  Cascader,
  Col,
  Image,
  Collapse,
  Space,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { address } from "../data/address";
import bg from "../assets/bg.png";
import { toast } from "react-toastify";
import api from "../api/endpoint";


const { TextArea } = Input;
// Define Our component
const RegisterInsurance = () => {
  const id = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getInsuranceDetail(id);
        if (data.success) {
          localStorage.getItem('access_token', data.data.accessToken);
        } else {
          toast.error(data.error.message);
        }
        setProduct(data.data);
        console.log(data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const onFinish = async(values) => {
    try {
      const data = await api.RegisterInsurance({values,id});
      if (data.success) {
        localStorage.getItem('access_token', data.data.accessToken);
        toast.success("Gửi yêu cầu đăng ký thành công");
      } else {
        toast.error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    console.log(values);
  };
  const [product, setProduct] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [form] = Form.useForm();
  const items_renamed = [
    {
      key: "10",
      label: "Quyền lợi tham gia",
      children: (
        <div style={{ whiteSpace: "pre" }}>
          {product?.Benefit &&
            product.Benefit.split("\n").map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                {`- ${line}`}
              </span>
            ))}
        </div>
      ),
    },
    {
      key: "11",
      label: "Điều kiện tham gia",
      children: (
        <div style={{ whiteSpace: "pre" }}>
          {product?.Require &&
            product.Require.split("\n").map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                {`- ${line}`}
              </span>
            ))}
        </div>
      ),
    },
    {
      key: "12",
      label: "Điều khoản loại trừ",
      children: (
        <div>
          {product?.Exception && (
            <pre style={{ whiteSpace: "pre-line" }}>{product.Exception}</pre>
          )}
        </div>
      ),
    },
    {
      key: "13",
      label: "Phí tham gia bảo hiểm",
      children: (
        <div>
          {product?.Exception && (
            <pre style={{ whiteSpace: "pre-line" }}>{product.Exception}</pre>
          )}
        </div>
      ),
    },
  ];

  const fetchUserInfo = async () => {
    try {
      const data = await api.GetUserInfo();
      if (data.success) {
        localStorage.getItem('access_token', data.data.accessToken);
        setUserInfo(data.data);
      } else {
        toast.error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Fetch user information when the component mounts
    fetchUserInfo();
  },[]);

  useEffect(()=>{
    console.log(userInfo);
    form.setFieldValue('cusname', userInfo?.Cus?.cusname);
    form.setFieldValue('phone', userInfo?.Cus?.phone);
    form.setFieldValue('email', userInfo?.Cus?.email);
    form.setFieldValue('cccd', userInfo?.Cus?.CCCD);
    form.setFieldValue('address', userInfo?.Cus?.address);
    form.setFieldValue('status', userInfo?.infoHealth?.status);
  },[userInfo])

  return (
    <Layout>
      <Card style={{ width: "100%", height: "100%" }}>
        <Space size={100}>
          <Card
            style={{ width: "100%", height: "100%" }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Đăng ký gói bảo hiểm</h2>
            <Form
              name="register-insurance"
              onFinish={onFinish}
              style={{ width: 400, textAlign: "center", marginLeft: 50}}
              layout="vertical"
              form={form}
            >
              <Form.Item
                label="Họ và tên"
                name="cusname"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền Họ và Tên!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="CCCD/ CMND"
                name="cccd"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền CCCD/ CMND!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền Số điện thoại!",
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
                    message: "Vui lòng điền Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
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
              <Form.Item label="Tình trạng sức khỏe" name="status">
                <TextArea rows={4} />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ marginTop: 10 }}
              >
                Đăng ký
              </Button>
            </Form>
          </Card>
          <Card
            style={{ width: 900, height: "100%" }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              width={400}
              src={product?.imageurl}
              placeholder={
                <Image preview={false} src={product?.imageurl} width={700} />
              }
            />
            <div
              style={{ padding: 50, width: "100%", justifyContent: "center" }}
            >
              <h2>{product?.Ins_Name}</h2>
            </div>
            <Card
              style={{ width: "100%", maxWidth: 10000, minHeight: "100vh" }}
              bodyStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Corrected usage of Collapse */}
              <Collapse
                items={items_renamed}
                style={{ width: "100%", border: "none" }}
              />
            </Card>
          </Card>
        </Space>
      </Card>
    </Layout>
  );
};

// output component
export default RegisterInsurance;
