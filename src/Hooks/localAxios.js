import axios from "axios";
// import { clearCookie } from "../Api/Auth/Auth";

// Ensure the environment variable is correctly prefixed with VITE_
const baseURL = import.meta.env.VITE_API_LOCALHOST;

const axiosSecure = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// Add a response interceptor
// axiosSecure.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     console.log("Error caught in interceptor", error.response);

//     if (
//       error.response &&
//       (error.response.status === 401 || error.response.status === 403)
//     ) {
//       await clearCookie(); // Ensure clearCookie is properly imported and defined
//       window.location.replace("/login");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosSecure;
