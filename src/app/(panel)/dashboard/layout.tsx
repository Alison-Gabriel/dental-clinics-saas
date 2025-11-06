import { ReactNode } from "react";

import { DashboardSidebar } from "./_components/dashboard-sidebar";

interface DashboardLayoutProps {
  children: Readonly<ReactNode>;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <DashboardSidebar>{children}</DashboardSidebar>
    </>
  );
}
