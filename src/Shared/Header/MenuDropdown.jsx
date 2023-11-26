import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { clearCookie } from "../../Api/Auth/Auth";

const MenuDropdown = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout =  () => {
    logOut()
      .then(() => {
        toast.success("Logout Success");
         clearCookie();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}
        <div className="hidden md:block">
          <button
            className="disabled:cursor-not-allowed cursor-pointe py-3 px-4 text-sm font-semibold 
            transition"
          >
            {user ? user.displayName : "User Name"}
          </button>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2  flex flex-row items-center gap-3 
           cursor-pointer hover:shadow-md transition"
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
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="dashboard"
                  className="block p-2 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <h2
                  onClick={handleLogout}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Log Out
                </h2>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Registration
                </Link>
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
