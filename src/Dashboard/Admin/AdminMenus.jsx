import { FaUser, FaUsers, FaWallet } from "react-icons/fa";
import MenuItem from "../Components/MenuItem";
import { FcBusinessman } from "react-icons/fc";
import { MdForum} from "react-icons/md";


const AdminMenus = () => {
    return (
        <>
        <nav className="font-josefin">
          <MenuItem icon={FaUsers} label="All subscribers" address="/dashboard/allSubscriber" />
          <MenuItem icon={FcBusinessman} label="All Trainers" address="/dashboard/allTrainers" />
          <MenuItem icon={FaUser} label="Applied Trainer" address="/dashboard/appliedTrainer" />
          <MenuItem icon={MdForum} label="Add new Forum" address="/dashboard/addNewForum" />
          <MenuItem icon={FaWallet} label="Balance" address="/dashboard/balance" />
        </nav>
      </>
    );
};

export default AdminMenus;