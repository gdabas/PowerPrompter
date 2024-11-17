// app/dashboard/layout.tsx
"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import authCheck from "@/utils/authCheck";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar isCollapsed={isCollapsed} />
      <div style={{ flex: 1 }}>
        <Topbar handleCollapseClick={handleCollapseClick} />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

export default authCheck(DashboardLayout);
