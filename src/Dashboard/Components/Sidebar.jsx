import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import LogoImg from "./logoImg";
import MenuItem from "./MenuItem";
import TrainerMenus from "../Trainer/TrainerMenus";
import MemberMenus from "../Members/MemberMenus";
import AdminMenus from "../Admin/AdminMenus";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { clearCookie } from "../../Api/Auth/Auth";
import { useNavigate } from "react-router-dom";
import useTrainer from "../../Hooks/useTrainer";
import UseRole from "../../Hooks/Roles/UseRole";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { user, logOut } = useAuth();
  // console.log(user);
  const navigate = useNavigate();
  const {role} = UseRole();
  console.log("role:", role);
  const [isTrainer] = useTrainer();
  console.log(isTrainer);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Success");
        clearCookie();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="font-josefin">
      {/* Small Screen Navbar */}
      <div className="bg-green-300 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <LogoImg />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <LogoImg />
            </div>
            <hr className="py-2" />
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user && user.photoURL ? user.photoURL : ""} />
                </div>
              </div>
              <div className="">
                <h3 className="font-bold text-green-500">
                  {user ? user.displayName.slice(0, 10) : "User Name"}
                </h3>
                <p className="text-sm">{role}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>{role === "member" && <MemberMenus />}</nav>
            <nav>{role === "trainer" && <TrainerMenus />}</nav>
            <nav>{role === "admin" && <AdminMenus />}</nav>
          </div>
        </div>

        <div>
          <hr />
          <MenuItem icon={FaHome} label="Home" address="/" />
          <MenuItem icon={FcSettings} label="Profile" address="/dashboard/profile" />
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5 text-red-500" />

            <span className="mx-4 font-medium ">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
