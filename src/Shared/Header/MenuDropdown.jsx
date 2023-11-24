import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const MenuDropdown = () => {
  const { user, logOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}
        <div className="hidden md:block">
          <button className="disabled:cursor-not-allowed cursor-pointe py-3 px-4 text-sm font-semibold rounded-full  transition">
            {user ? user.displayName : "Name"}
          </button>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block rounded-full">
            {user && user.photoURL ? user.photoURL : <RxAvatar className="text-5xl" />}
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
                  to="/signUp"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
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
