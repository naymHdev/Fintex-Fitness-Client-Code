import LockAxios from "./LockAxios";

const clearCookie = async () => {
  const isLocAxios = LockAxios();

  const { data } = await isLocAxios.get("/logout");

  return data;
};

export default clearCookie;
