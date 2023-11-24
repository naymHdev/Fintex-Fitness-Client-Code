import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  return (
    <div>
      <div className=" w-11/12 mx-auto text-white shadow-sm">
        <div className="py-4 border-b-[1px]">
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className="flex gap-56 items-center justify-between">
              <div>
                <Link to="/">
                  <h1 className="text-4xl font-bold">Fitnex-Fitness </h1>
                </Link>
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
