import { FaUser, FaUsers, FaWallet } from "react-icons/fa";
import MenuItem from "../Components/MenuItem";
import { FcBusinessman } from "react-icons/fc";


const AdminMenus = () => {
    return (
        <>
        <nav>
          <MenuItem icon={FaUsers} label="All subscribers" address="/dashboard/allSubscriber" />
          <MenuItem icon={FcBusinessman} label="All Trainers" address="/dashboard/allTrainers" />
          <MenuItem icon={FaUser} label="Applied Trainer" address="/dashboard/appliedTrainer" />
          <MenuItem icon={FaWallet} label="Balance" address="/dashboard/balance" />
        </nav>
      </>
    );
};

export default AdminMenus;