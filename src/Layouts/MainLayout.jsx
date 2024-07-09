import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <div className=" max-w-7xl mx-auto bg-[#F3F3F3] overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
