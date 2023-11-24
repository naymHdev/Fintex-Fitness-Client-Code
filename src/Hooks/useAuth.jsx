import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
