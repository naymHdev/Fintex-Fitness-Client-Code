import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
