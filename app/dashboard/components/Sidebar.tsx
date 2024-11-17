// app/dashboard/components/Sidebar.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/sidebar.module.css";

import { menuItems } from "../../dashboard/components/MenuItems";
import { MenuItem } from "../../types/menu";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    // Cleanup function to reset state when component unmounts
    return () => {
      setOpenMenu(null);
    };
  }, []);

  return (
    <>
      <aside
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
      >
        <div className="h-full  overflow-y-auto bg-gray-50 dark:bg-gray-800 shadow-2xl">
          <div className={`${styles.sidebarHeader} h-[75px] text-center`}>
            <span>DEMO</span>
          </div>
          <nav>
            <ul className={styles.menu}>
              {menuItems.map((item: MenuItem) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <item.icon /> <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <small className={styles.version}>App Version: 0.001</small>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
