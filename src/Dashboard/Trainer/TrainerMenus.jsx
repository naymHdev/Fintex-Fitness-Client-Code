import { MdForum, MdManageAccounts, MdManageHistory, MdOutlineAddchart } from "react-icons/md";
import MenuItem from "../Components/MenuItem";

const TrainerMenus = () => {
  return (
    <>
      <nav className="font-josefin">
        <MenuItem icon={MdManageHistory} label="Manage Slots" address="/dashboard/manageSlots" />
        <MenuItem icon={MdManageAccounts} label="Manage member" address="/dashboard/manageMember" />
        <MenuItem icon={MdForum} label="Add new Forum" address="/dashboard/addNewForum" />
        <MenuItem icon={MdOutlineAddchart} label="Add new Classes" address="/dashboard/addNewClasses" />
      </nav>
    </>
  );
};

export default TrainerMenus;
