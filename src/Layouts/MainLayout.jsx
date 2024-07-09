import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <div className=" max-w-full mx-auto bg-[#F3F3F3]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
