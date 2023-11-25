import axios from "axios";
import { clearCookie } from "../Api/Auth/Auth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

///// Interceptors Use \\\\\
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Error get In Interceptors", error.response);
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      await clearCookie();
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
