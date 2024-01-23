import axios from "axios";
import { toast } from "react-toastify";

console.log(import.meta.env.VITE_API_HOST);

const client = axios.create({ baseURL: import.meta.env.VITE_API_HOST });
client.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log(error.response);
    // toast.error(error.response.data.message);
    // return Promise.reject(error);
    return error.response;
  });

export default client;
