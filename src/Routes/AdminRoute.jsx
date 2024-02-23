/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UseRole from "../Hooks/Roles/UseRole";


const AdminRoute = ({children}) => {

    const {role, loading} = UseRole();

    if (loading) {
        return <progress className="progress w-full"></progress>;
      }
    
      if (role === "admin") return children;
      return <Navigate to="/dashboard" replace />;
};

export default AdminRoute;