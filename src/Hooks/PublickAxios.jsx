import axios from "axios";

const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

const PublickAxios = () => {
  return publicAxios;
};

export default PublickAxios;
