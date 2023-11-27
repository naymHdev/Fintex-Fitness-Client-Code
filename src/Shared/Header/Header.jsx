import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import logo from "../../../public/assets/Logo/fitness.png";

const Header = () => {
  return (
    <div>
      <div className=" w-11/12 mx-auto text-white fixed z-10 bg-green-400 bg-opacity-70 shadow-sm">
        <div className="py- border-b-[1px]">
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className="flex gap-56 items-center justify-between">
              <div className="flex items-center">
                <Link to="/">
                  <img className="w-20 rounded-full" src={logo} alt="" />
                </Link>
                <h1 className="text-3xl font-bold">Fitnex</h1>
              </div>
              <div className="">
                <ul className="flex items-center gap-4 font-bold">
                  <li>
                    <Link to="/">
                      <h1 className="font-bold">Home</h1>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery">
                      <h1 className="font-bold">Gallery</h1>
                    </Link>
                  </li>
                  <li>
                    <Link to="/trainer">
                      <h1 className="font-bold">Trainer</h1>
                    </Link>
                  </li>
                  <li>
                    <Link to="/classes">
                      <h1 className="font-bold">Classes</h1>
                    </Link>
                  </li>
                  <li>
                    <Link to="/forum">
                      <h1 className="font-bold">Forum</h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <MenuDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
