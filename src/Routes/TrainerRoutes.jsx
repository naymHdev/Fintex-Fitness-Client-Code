/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UseRole from "../Hooks/Roles/useRole";

const TrainerRoutes = ({ children }) => {
  const {role, loading} = UseRole();

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  if (role === "trainer") return children;
  return <Navigate to="/dashboard" replace />;
};

export default TrainerRoutes;
