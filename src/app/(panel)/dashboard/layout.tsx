import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: Readonly<ReactNode>;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <>{children}</>;
}
