/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon, quantity }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 my-5 py-1  transition-colors duration-300 transform rounded-sm  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5 text-green-600" />
      <span className="mx-4 font-medium">{label}</span> <span>{quantity}</span>
    </NavLink>
  );
};

export default MenuItem;
