import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { clearCookie } from "../../Api/Auth/Auth";

const MenuDropdown = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Success");
        clearCookie();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative font-josefin">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block">
          <button
            className="disabled:cursor-not-allowed cursor-pointe md:py-3 md:px-4 text-sm font-semibold 
            transition"
          >
            {user ? user.displayName.slice(0, 8) : "User Name"}
          </button>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:p-4 md:py-1 md:px-2  flex flex-row items-center md:gap-3 
           cursor-pointer transition"
        >
          <AiOutlineMenu />
          <div className="w-12 rounded-full">
            {user ? (
              <>
                <img
                  className="hidden md:block w-12 rounded-full"
                  src={user && user.photoURL ? user.photoURL : ""}
                  alt=""
                />
              </>
            ) : (
              <>
                <RxAvatar className="text-5xl" />
              </>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 rounded-md shadow-md bg-green-400 overflow-hidden right-0 mt-1 md:top-[55px] top-[42px] text-sm">
          <div className="flex flex-col cursor-pointer w-[250px]">
            <div className="">
              <ul className=" items-center space-y-3 gap-4 mt-5 font-bold">
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "font-bold text-xl text-[#52734D]"
                        : ""
                    }
                    to="/"
                  >
                    <h1 className="font-bold flex md:hidden  justify-center">
                      Home
                    </h1>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "font-bold text-xl text-[#52734D]"
                        : ""
                    }
                  >
                    <h1 className="font-bold flex md:hidden justify-center">
                      Gallery
                    </h1>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trainer"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "font-bold text-xl text-[#52734D]"
                        : ""
                    }
                  >
                    <h1 className="font-bold flex md:hidden justify-center">
                      Trainer
                    </h1>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classes"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "font-bold text-xl text-[#52734D]"
                        : ""
                    }
                  >
                    <h1 className="font-bold flex md:hidden justify-center">
                      Classes
                    </h1>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/forum"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "font-bold text-xl text-[#52734D]"
                        : ""
                    }
                  >
                    <h1 className="font-bold flex md:hidden justify-center">
                      Forum
                    </h1>
                  </NavLink>
                </li>
              </ul>
            </div>
            {user ? (
              <>
                <NavLink
                  to="profile"
                  className=" flex justify-center md:mt-0 mt-3 mb-2 hover:bg-green-100 hover:text-green-900 transition font-semibold"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="dashboard"
                  className=" flex justify-center hover:bg-green-100 hover:text-green-900 transition font-semibold"
                >
                  Dashboard
                </NavLink>
                <h2
                  onClick={handleLogout}
                  className="py-2 flex justify-center hover:bg-green-100 hover:text-green-900 transition font-semibold"
                >
                  Log Out
                </h2>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="py-2 flex justify-center hover:bg-green-100 hover:text-green-900 transition font-semibold"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="py-2 flex justify-center hover:bg-neutral-100 transition font-semibold"
                >
                  Registration
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default MenuDropdown;
