import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import { getRole } from "../../Api/Auth/Auth";

const UseRole = () => {
    const { user, loading } = useAuth();
    const [role, setRole] = useState(null);
  
    useEffect(() => {
      getRole(user?.email)
      .then((data) => {
        console.log('DataRole-------->', data);
        setRole(data);
      });
    }, [user?.email]);
  
    return role;
};

export default UseRole;
