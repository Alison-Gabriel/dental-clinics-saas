import { ReactNode } from "react";

import { SidebarDashboard } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: Readonly<ReactNode>;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <SidebarDashboard>{children}</SidebarDashboard>
    </>
  );
}
