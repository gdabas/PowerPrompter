import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { MenuItem } from "../../types/menu";

export const menuItems: MenuItem[] = [
  { href: "/dashboard", icon: DashboardIcon, label: "Dashboard" },
  {
    href: "/dashboard/profile",
    icon: PersonAddAltRoundedIcon,
    label: "Profile",
  },
];
