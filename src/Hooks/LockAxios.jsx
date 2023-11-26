import axios from "axios";
import clearCookie from "./clearCookie";

const lockAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

const LockAxios = () => {

  ///// Interceptors Use \\\\\
lockAxios.interceptors.response.use(
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
  return lockAxios;
};
export default LockAxios;
