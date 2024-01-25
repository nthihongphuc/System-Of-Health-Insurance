import client from "./client";
import { useNavigate } from "react-router-dom";

// Dùng api nào thì thêm một cái function để gọi api đó vô đây
const api = {
  // api đăng nhập
  login: async ({ username, password }) => {
    try {
      const data = await client.post("/auth/login", { username, password });
      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },


  changePassword: async ({ currentPassword, newPassword }) => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        // Xử lý trường hợp token không tồn tại
        console.error("Access token is missing");
        return null;
      }

      const { data } = await client.post(
        "/auth/change-password",
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },
  register: async ({ username, password, email, cusname, birthday, gender, phone, address, status }) => {
    try {
      const data = await client.post("/auth/register", { username, password, email, cusname, birthday, gender, phone, address, status });
      console.log(email);
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  GetUserInfo: async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (!token) {
        // Xử lý trường hợp token không tồn tại
        console.error("Access token is missing");
        return null;
      }
      const data = await client.get("/user/UserInfo",
        { headers: { Authorization: `Bearer ${token}` } });
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  UpdateCusInfo: async ({ cusname, phone, address, status }) => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (!token) {
        // Xử lý trường hợp token không tồn tại
        console.error("Access token is missing");
        return null;
      }
      const data = await client.post("/user/updateCusInfo",
        { cusname, phone, address, status },
        { headers: { Authorization: `Bearer ${token}` } });
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  getRegisterInsurance: async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (!token) {
        // Xử lý trường hợp token không tồn tại
        console.error("Access token is missing");
        return null;
      }
      const data = await client.get("/insurance/RegisterInsurance",
        { headers: { Authorization: `Bearer ${token}` } });
      return data.data;
    } catch (error) {
      console.error("Error fetching register insurance:", error);
      return null;
    }
  },

  SupportCustomer: async ({ cusname, gender, phone, email, address, describe }) => {
    try {
      const data = await client.post("/user/SupportCustomer",
        { cusname, gender, phone, email, address, describe });
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },
  getAllInsurance: async ({ id }) => {
    try {
      const data = await client.get(`/insurance/InsuranceInfo/${id}`);
      console.log(id);
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },
  getInsuranceDetail: async ({ id }) => {
    try {
      const data = await client.get(`/insurance/InsuranceDetail/${id}`);
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },
  forgotPassword: async ({ email }) => {
    try {
      const data = await client.post("/auth/forgot-password", { email });
      console.log(email);
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },

  RequestPayment: async (formdata) => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (!token) {
        console.error("Access token is missing");
        return null;
      }
      const data = await client.post("/bill/RequestPayment", formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      return data.data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },
  getAllRegistrations: async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (!token) {
        // Handle the case where the token is missing
        console.error("Access token is missing");
        return null;
      }
      const data = await client.get("/registrations/all", { headers: { Authorization: `Bearer ${token}` } });
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAllInsuranceCostsForAllUsers: async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("Access token is missing");
        return null;
      }

      const data = await client.get("/bills/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  getAllTransactions: async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("Access token is missing");
        return null;
      }

      const data = await client.get("/bills/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  getAllAppointments: async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      if (!token) {
        console.error("Access token is missing");
        return null;
      }

      const data = await client.get("/appointments/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },



};

export default api;
// Chỗ nào cần xài api thì import cái api ở file này vô
// Gọi api theo vd: api.login, api.changePassword
// Gọi api nhớ await như là data = await api.getData()
