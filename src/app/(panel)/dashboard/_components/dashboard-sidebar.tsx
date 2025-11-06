"use client";

import clsx from "clsx";
import { ReactNode, useState } from "react";

import { Sidebar } from "./sidebar";

interface DashboardSidebarProps {
  children: ReactNode;
}

export function DashboardSidebar({ children }: DashboardSidebarProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isNotSidebarCollapsed = !isSidebarCollapsed;

  const handleCollapseSidebar = () => {
    setIsSidebarCollapsed((oldValue) => !oldValue);
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar.Desktop
        isCollapsed={isSidebarCollapsed}
        onCollapseClick={handleCollapseSidebar}
      />

      <div
        className={clsx("flex flex-1 flex-col transition-all", {
          "md:ml-20": isSidebarCollapsed,
          "md:ml-64": isNotSidebarCollapsed,
        })}
      >
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4 md:hidden md:px-6">
          <Sidebar.Mobile />
        </header>

        <main className="flex-1 px-2 py-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
