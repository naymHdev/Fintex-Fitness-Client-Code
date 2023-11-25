import axios from "axios";

const lockAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
});

const LockAxios = () => {
  return lockAxios;
};
export default LockAxios;
