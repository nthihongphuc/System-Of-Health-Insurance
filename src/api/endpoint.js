import client from "./client";

// Dùng api nào thì thêm một cái function để gọi api đó vô đây
const api = {
  // api đăng nhập
  login: async ({ username, password }) => {
    try {
      const { data } = await client.post("/auth/login", { username, password });
      ///////////////// cái dòng ngay trên, gọi api khác thì thay đường dẫn như là '/baohiem/nhantho'
      ///////////////// api method nào thì gọi client. cái method đó như là client.get, client.post, client.put, client.delete
      ///////////////// cái client.get không truyền data, chỉ truyền url thôi
      // client.get('data/123');
      // Còn post với put thì truyền data
      // client.post('data', {username:'as'}})
      // còn delete mà muốn truyền data thì bỏ nó vô data
      // client.delete('/url', { data: {username:'ab'}})
      return data;
    } catch (error) {
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
        {  currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    } catch (error) {
      console.log(error)
      return null;
    }
  },
  register: async ({ username, password, email })=>{
    try{
      const { data } = await client.post("/auth/register", { username, password,email });
      return data;
    }catch(error){
      console.log(error)
      return null;
    }
  }
};

export default api;
// Chỗ nào cần xài api thì import cái api ở file này vô
// Gọi api theo vd: api.login, api.changePassword
// Gọi api nhớ await như là data = await api.getData()
