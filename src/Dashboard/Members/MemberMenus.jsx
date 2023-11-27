import MenuItem from "../Components/MenuItem";
import { MdOutlineSettings, MdRecommend } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";


const MemberMenus = () => {
    return (
        <>
        <nav className="font-josefin">
          <MenuItem icon={TbActivityHeartbeat} label="Activity Log" address="/dashboard/activityLog" />
          <MenuItem icon={MdRecommend} label="Recommended Classes" address="/dashboard/recommendedClasses" />
          <MenuItem icon={MdOutlineSettings} label="Profile Settings" address="/dashboard/profileSetting" />
          {/* <MenuItem icon={MdOutlineAddchart} label="Add new Classes" address="/dashboard/addNewClasses" /> */}
        </nav>
      </>
    );
};

export default MemberMenus;