import UserIcon from "../../../assets/Images/adminLayout/User-Icon.svg";
import DashboardIcon from "../../../assets/Images/adminLayout/DashboardIcon.svg";
import MessageIcon from "../../../assets/Images/adminLayout/MessageIcon.svg";
import SettingIcon from "../../../assets/Images/adminLayout/SettingIcon.svg";
import AppointmenIcon from "../../../assets/Images/adminLayout/DocumentIcon.svg";
const sidebar = [
  {
    title: "Dashboard",
    path: "/doctor/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Appointments",
    path: "/doctor/appointment_page",
    icon: AppointmenIcon,
  },

  {
    title: "User Manangement",
    path: "/doctor/user_management",
    icon: UserIcon,
  },
  
  // {
  //   title: "Chat Manager",
  //   path: "/doctor/contact_page",
  //   icon: MessageIcon,
  // },
  {
    title: "Settings",
    path: "/doctor/setting_",
    icon: SettingIcon,
  },
];

export default sidebar;
