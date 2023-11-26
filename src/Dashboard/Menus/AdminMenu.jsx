/* eslint-disable react/prop-types */
import MenuItem from "../Components/MenuItem";

const AdminMenu = ({ FaUserCog }) => {
  return (
    <div>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
    </div>
  );
};

export default AdminMenu;
