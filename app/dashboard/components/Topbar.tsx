// app/dashboard/components/Topbar.tsx
import Link from "next/link";
import React, { useState } from "react";
import useStore from "../../store/userStore";
import Image from "next/image";
import { logout } from "../../api/firebaseAuth";
import { User } from "../../types/user";
import { getPageTitle } from "../../utils/getPageTitle";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../../styles/sidebar.module.css";

interface TopbarProps {
  handleCollapseClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ handleCollapseClick }) => {
  const user = useStore((state) => state.user) as User | null;
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!user) {
    return null; // or a loading state
  }
  const handleLogout = () => {
    logout().then(() => {
      console.log("User logged out, Zustand state after logout:", user);
    });
  };

  return (
    <header className="bg-white border-b p-2 flex justify-between items-center h-[75px]">
      <div className="ps-3 flex">
        <button
          className={styles.collapsMenuButton}
          onClick={handleCollapseClick}
        >
          <MenuIcon />
        </button>
        <h4 className="mb-0 text-2xl font-bold ps-3 ">
          {getPageTitle(pathname)}
        </h4>
      </div>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <Image src={user.photoURL} alt="Profile" width={30} height={30} />
          </button>
        </div>

        {isDropdownOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <div className="px-4 py-2">
                <h4 className="text-truncate">{user.displayName}</h4>
                <span>{user.email}</span>
              </div>
              <a
                href="/dashboard/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                My Profile
              </a>
              <a
                href="#/action-2"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Setting
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
