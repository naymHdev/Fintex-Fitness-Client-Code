import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

export default axiosSecure;
