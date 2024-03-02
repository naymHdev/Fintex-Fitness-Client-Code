import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header />
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
