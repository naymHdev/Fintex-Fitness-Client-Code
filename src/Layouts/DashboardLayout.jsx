import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Components/Sidebar";

const DashboardLayout = () => {
  
  return (
    <div className="relative min-h-screen md:flex">
      <div className="flex-1  md:ml-64">
        <Sidebar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
